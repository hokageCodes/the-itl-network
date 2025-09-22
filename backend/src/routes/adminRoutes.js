const express = require('express');
const router = express.Router();
const adminCtrl = require('../controllers/adminController');
const membershipCtrl = require('../controllers/membershipController');
const requireAuth = require('../middleware/authMiddleware');
const requireRole = require('../middleware/roleMiddleware');
const validate = require('../middleware/validators/validate');
const {
  updateUserRoleRules,
  toggleUserRules,
  deleteUserRules,
  assignMentorRules,
  unassignMentorRules
} = require('../middleware/validators/adminValidators');

// All admin routes require auth + admin role
router.use(requireAuth, requireRole('admin'));

// User management
router.get('/users', adminCtrl.listUsers);
router.patch('/users/:id/role', updateUserRoleRules, validate, adminCtrl.updateUserRole);
router.patch('/users/:id/toggle', toggleUserRules, validate, adminCtrl.toggleUserActive);
router.delete('/users/:id', deleteUserRules, validate, adminCtrl.deleteUser);

// Membership verification management
router.get('/verifications', membershipCtrl.listVerifications);
router.post('/verifications/:id/review', membershipCtrl.reviewProof); // approve/reject
router.post('/verifications/bulk-review', membershipCtrl.bulkReview);
router.delete('/verifications/bulk-delete', membershipCtrl.bulkDelete);

// Mentor assignment
router.patch('/assign', assignMentorRules, validate, adminCtrl.assignMentor);
router.patch('/unassign', unassignMentorRules, validate, adminCtrl.unassignMentor);

module.exports = router;
