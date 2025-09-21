const User = require('../models/User');

// GET all users (already done)
exports.listUsers = async (req, res) => {
  const users = await User.find().select('-password').lean();
  res.json({ count: users.length, users });
};

// PATCH /api/admin/users/:id/role
exports.updateUserRole = async (req, res) => {
  const { id } = req.params;
  const { role } = req.body;

  if (!['admin', 'mentor', 'mentee', 'member'].includes(role)) {
    return res.status(400).json({ message: 'Invalid role' });
  }

  const user = await User.findByIdAndUpdate(
    id,
    { role },
    { new: true, runValidators: true }
  ).select('-password');

  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json({ message: 'Role updated', user });
};

// PATCH /api/admin/users/:id/toggle
exports.toggleUserActive = async (req, res) => {
  const { id } = req.params;

  const user = await User.findById(id);
  if (!user) return res.status(404).json({ message: 'User not found' });

  user.isActive = !user.isActive;
  await user.save();

  res.json({ message: `User ${user.isActive ? 'activated' : 'deactivated'}`, user });
};

// DELETE /api/admin/users/:id
exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  const user = await User.findByIdAndDelete(id).select('-password');
  if (!user) return res.status(404).json({ message: 'User not found' });

  res.json({ message: 'User deleted', user });
};
