const mentorSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // null if external mentor
  name: { type: String, required: true }, // if external
  email: { type: String, required: true },
  bio: { type: String, required: true },
  expertise: [{ type: String, required: true }],
  availability: { type: String, required: true },
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' }
}, { timestamps: true });

module.exports = mongoose.model('MentorProfile', mentorSchema);
