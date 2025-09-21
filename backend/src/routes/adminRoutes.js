const express = require('express');
const router = express.Router();
const adminCtrl = require('../controllers/adminController');
const requireAuth = require('../middleware/authMiddleware');
const requireRole = require('../middleware/roleMiddleware');
const validate = require('../middleware/validators/validate');
const { updateUserRoleRules, toggleUserRules, deleteUserRules } = require('../middleware/validators/adminValidators');

// All admin routes require auth + admin role
router.use(requireAuth, requireRole('admin'));

router.get('/users', adminCtrl.listUsers);

router.patch('/users/:id/role', updateUserRoleRules, validate, adminCtrl.updateUserRole);
router.patch('/users/:id/toggle', toggleUserRules, validate, adminCtrl.toggleUserActive);
router.delete('/users/:id', deleteUserRules, validate, adminCtrl.deleteUser);

module.exports = router;
