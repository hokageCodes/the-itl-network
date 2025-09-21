const User = require('../models/User');
const { createAccessToken, createRefreshToken } = require('../utils/tokens');
const jwt = require('jsonwebtoken');

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict',
  maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
};

exports.register = async (req, res) => {
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
      agreedToTnC
    } = req.body;

    // Basic validations
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password required' });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }

    if (!agreedToTnC) {
      return res.status(400).json({ message: 'You must agree to the terms and conditions' });
    }

    const exists = await User.findOne({ $or: [{ email }, { username }] });
    if (exists) return res.status(409).json({ message: 'User with this email/username already exists' });


    // Create new member (role locked to "member" on registration)
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
      role: 'member'
    });

    await user.save();

    const accessToken = createAccessToken({ id: user._id, role: user.role });
    const refreshToken = createRefreshToken({ id: user._id });

    res.cookie('refreshToken', refreshToken, cookieOptions);

    res.status(201).json({
      user: {
        id: user._id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        location: user.location,
        licensingStage: user.licensingStage,
        role: user.role
      },
      accessToken
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.login = async (req, res) => {
  const { identifier, password } = req.body; // "identifier" can be username OR email
  if (!identifier || !password) {
    return res.status(400).json({ message: 'Username/email and password required' });
  }

  const user = await User.findOne({
    $or: [{ email: identifier.toLowerCase() }, { username: identifier }]
  }).select('+password');

  if (!user) return res.status(401).json({ message: 'Invalid credentials' });

  const match = await user.comparePassword(password);
  if (!match) return res.status(401).json({ message: 'Invalid credentials' });

  const accessToken = createAccessToken({ id: user._id, role: user.role });
  const refreshToken = createRefreshToken({ id: user._id });

  res.cookie('refreshToken', refreshToken, cookieOptions);
  res.json({
    user: {
        id: user._id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        location: user.location,
        licensingStage: user.licensingStage,
        role: user.role
    },
    accessToken
    });
};


exports.logout = async (req, res) => {
  res.clearCookie('refreshToken', { httpOnly: true, sameSite: 'strict', secure: process.env.NODE_ENV === 'production' });
  res.json({ message: 'Logged out' });
};

exports.refresh = async (req, res) => {
  const token = req.cookies.refreshToken;
  if (!token) return res.status(401).json({ message: 'No refresh token' });

  try {
    const payload = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
    const user = await User.findById(payload.id);
    if (!user) return res.status(401).json({ message: 'Invalid refresh token' });

    // Issue a new access token (optionally rotate refresh token)
    const accessToken = createAccessToken({ id: user._id, role: user.role });
    res.json({ accessToken });
  } catch (err) {
    return res.status(401).json({ message: 'Invalid refresh token' });
  }
};

exports.me = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json({
      id: user._id,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      location: user.location,
      licensingStage: user.licensingStage,
      role: user.role,
      isActive: user.isActive,
      agreedToTnC: user.agreedToTnC,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
