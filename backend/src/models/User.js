const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, trim: true },
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  phone: { type: String, required: true, trim: true },
  password: { type: String, required: true, select: false },
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
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

// Hash password before save
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.comparePassword = async function (candidate) {
  return bcrypt.compare(candidate, this.password);
};

module.exports = mongoose.model('User', userSchema);
