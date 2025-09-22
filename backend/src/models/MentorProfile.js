// src/models/MentorProfile.js
const mongoose = require('mongoose');

const mentorSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // null if external mentor
  name: { type: String }, // optional if linked to User
  email: { type: String },
  bio: { type: String, required: true },
  expertise: [{ type: String, required: true }], // e.g. immigration law, contracts
  headshotUrl: { type: String },
  province: { type: String }, 
  availability: { type: String, required: true }, // "weekends only" etc.
  available: { type: Boolean, default: true },
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
   mentees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MenteeProfile' }]
}, { timestamps: true });

module.exports = mongoose.model('MentorProfile', mentorSchema);
