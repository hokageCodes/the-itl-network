const mongoose = require("mongoose");
const User = require("../models/User");
const { createAccessToken, createRefreshToken } = require("../utils/tokens");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { sendEmail } = require("../utils/sendEmail");

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict",
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
};

// REGISTER
exports.register = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const {
      username,
      firstName,
      lastName,
      email,
      phone,
      password,
      confirmPassword,
      location,
      licensingStage,
      agreedToTnC,
    } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }
    if (!agreedToTnC) {
      return res.status(400).json({ message: "You must agree to the terms and conditions" });
    }

    const exists = await User.findOne({ $or: [{ email }, { username }] });
    if (exists) {
      return res.status(409).json({ message: "User with this email/username already exists" });
    }

    // 🔹 Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    const user = new User({
      username,
      firstName,
      lastName,
      email,
      phone,
      password,
      location,
      licensingStage,
      agreedToTnC,
      role: "member",
      isVerified: false,
      otpCode: otp,
      otpExpires: Date.now() + 10 * 60 * 1000, // 10 min
    });

    await user.save({ session });

    // Send OTP to email
    await sendEmail({
      to: user.email,
      subject: "Verify your account",
      html: `<p>Your verification code is: <b>${otp}</b>. It will expire in 10 minutes.</p>`,
    });

    await session.commitTransaction();
    session.endSession();

    res.status(201).json({
      message: "Registered. Please check your email for the OTP code.",
      email: user.email, // frontend needs this to redirect
    });
  } catch (err) {
    await session.abortTransaction();
    session.endSession();
    console.error(err);

    if (err.name === "ValidationError") {
      const errors = Object.values(err.errors).map((e) => e.message);
      return res.status(400).json({ message: "Validation failed", errors });
    }
    if (err.code === 11000) {
      return res.status(409).json({ message: "Email or username already exists" });
    }

    return res.status(500).json({ message: "Server error" });
  }
};

// VERIFY OTP
exports.verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const user = await User.findOne({
      email,
      otpCode: otp,
      otpExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid or expired code" });
    }

    user.isVerified = true;
    user.otpCode = undefined;
    user.otpExpires = undefined;
    await user.save();

    const accessToken = createAccessToken({ id: user._id, role: user.role });
    const refreshToken = createRefreshToken({ id: user._id });

    res.cookie("refreshToken", refreshToken, cookieOptions);

    res.json({
      message: "Account verified successfully!",
      accessToken,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        isVerified: true,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// LOGIN (unchanged except OTP check already covered by isVerified)
// LOGIN (with enhanced debugging)
exports.login = async (req, res) => {
  try {
    const { identifier, password } = req.body;
    
    console.log("Login attempt:", { identifier, hasPassword: !!password });
    
    if (!identifier || !password) {
      return res.status(400).json({ message: "Username/email and password required" });
    }

    // Normalize identifier (trim whitespace and convert email to lowercase)
    const normalizedIdentifier = identifier.trim().toLowerCase();
    
    const user = await User.findOne({
      $or: [
        { email: normalizedIdentifier }, // email already stored as lowercase
        { username: identifier.trim() }, // username is case-sensitive
      ],
    }).select("+password");

    console.log("User found:", !!user);
    
    if (!user) {
      console.log("No user found with identifier:", normalizedIdentifier);
      return res.status(401).json({ message: "Invalid credentials" });
    }
    
    if (!user.isVerified) {
      console.log("User not verified:", user.email);
      return res.status(403).json({ message: "Please verify your email first." });
    }

    const match = await user.comparePassword(password);
    console.log("Password match:", match);
    
    if (!match) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const accessToken = createAccessToken({ id: user._id, role: user.role });
    const refreshToken = createRefreshToken({ id: user._id });

    res.cookie("refreshToken", refreshToken, cookieOptions);
    
    const userResponse = {
      id: user._id,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      location: user.location,
      licensingStage: user.licensingStage,
      role: user.role,
      isVerified: user.isVerified,
    };
    
    console.log("Login successful for user:", user.email);
    
    res.json({
      user: userResponse,
      accessToken,
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// FORGOT PASSWORD
exports.forgotPassword = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { email } = req.body;
    const user = await User.findOne({ email }).session(session);
    if (!user) {
      await session.abortTransaction();
      session.endSession();
      return res.status(404).json({ message: "No user with this email" });
    }

    const resetToken = crypto.randomBytes(32).toString("hex");
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 60 * 60 * 1000; // 1h
    await user.save({ session });

    const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;
    await sendEmail({
      to: user.email,
      subject: "Password Reset",
      html: `<p>Reset your password here: <a href="${resetUrl}">${resetUrl}</a></p>`,
    });

    await session.commitTransaction();
    session.endSession();

    res.json({ message: "Password reset email sent." });
  } catch (err) {
    await session.abortTransaction();
    session.endSession();
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// RESET PASSWORD
exports.resetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    });
    if (!user) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    user.password = password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.json({ message: "Password has been reset. You can now log in." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// LOGOUT
exports.logout = async (req, res) => {
  res.clearCookie("refreshToken", {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
  });
  res.json({ message: "Logged out" });
};

// REFRESH
// REFRESH (improved version)
exports.refresh = async (req, res) => {
  const token = req.cookies.refreshToken;
  
  if (!token) {
    return res.status(401).json({ message: "No refresh token provided" });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
    const user = await User.findById(payload.id);
    
    if (!user) {
      // Clear invalid refresh token
      res.clearCookie("refreshToken", {
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
      });
      return res.status(401).json({ message: "User not found" });
    }

    if (!user.isVerified) {
      return res.status(403).json({ message: "User not verified" });
    }

    const accessToken = createAccessToken({ id: user._id, role: user.role });
    res.json({ accessToken });
  } catch (error) {
    // Clear invalid refresh token
    res.clearCookie("refreshToken", {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    });
    return res.status(401).json({ message: "Invalid refresh token" });
  }
};
// ME
exports.me = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
