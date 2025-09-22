const mongoose = require('mongoose');

const studentVerificationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  documentUrl: { type: String, required: true }, // path from S3, Cloudinary, or local
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  reviewedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // admin
  reviewedAt: { type: Date }
}, { timestamps: true });

module.exports = mongoose.model('StudentVerification', studentVerificationSchema);
