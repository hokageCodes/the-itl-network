const Application = require('../models/Application');
const User = require('../models/User');

// Admin: list all mentorship applications
exports.listApplications = async (req, res) => {
  const apps = await Application.find()
    .populate('mentee', 'name email role')
    .populate('mentor', 'name email role')
    .lean();

  res.json({ count: apps.length, applications: apps });
};

// Admin: update application status
exports.updateApplicationStatus = async (req, res) => {
  const { id } = req.params;
  const { status, notes } = req.body;

  if (!['pending', 'approved', 'rejected'].includes(status)) {
    return res.status(400).json({ message: 'Invalid status' });
  }

  const app = await Application.findByIdAndUpdate(
    id,
    { status, notes },
    { new: true }
  )
    .populate('mentee', 'name email')
    .populate('mentor', 'name email');

  if (!app) return res.status(404).json({ message: 'Application not found' });

  res.json({ message: 'Application updated', application: app });
};

// Admin: delete application
exports.deleteApplication = async (req, res) => {
  const { id } = req.params;

  const app = await Application.findByIdAndDelete(id);
  if (!app) return res.status(404).json({ message: 'Application not found' });

  res.json({ message: 'Application deleted' });
};
