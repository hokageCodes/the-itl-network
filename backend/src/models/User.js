const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, trim: true },
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true, minlength: 8, select: false },
  phone: { type: String, required: true, minlength: 7, trim: true },
  location: { type: String, required: true },
  licensingStage: { 
    type: String, 
    enum: [
      'NCA Candidate',
      'Articling',
      'Bar Exam Prep',
      'Licensed Lawyer',
      'Other'
    ], 
    required: true 
  },
  agreedToTnC: { type: Boolean, required: true, default: false },

  role: { 
    type: String, 
    enum: ['admin','mentor','mentee','member'], 
    default: 'member' 
  },

  membershipStatus: { 
    type: String, 
    enum: ['pending', 'active', 'rejected'], 
    default: 'pending' 
  },

  isActive: { type: Boolean, default: true },
  available: { type: Boolean, default: true },

  isVerified: { type: Boolean, default: false },

  // OTP fields
  otpCode: { type: String, select: false },
  otpExpires: { type: Date, select: false },

  resetPasswordToken: { type: String, select: false },
  resetPasswordExpires: { type: Date, select: false },

}, { timestamps: true });

// Pre-save middleware to normalize email and hash password
userSchema.pre('save', async function (next) {
  // Normalize email (ensure lowercase and trimmed)
  if (this.isModified('email')) {
    this.email = this.email.toLowerCase().trim();
  }
  
  // Hash password if modified
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.comparePassword = async function (candidate) {
  return bcrypt.compare(candidate, this.password);
};

module.exports = mongoose.model('User', userSchema);