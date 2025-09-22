const { body, param } = require('express-validator');

// Valid roles
const roles = ['admin', 'mentor', 'mentee', 'member'];

exports.updateUserRoleRules = [
  param('id').isMongoId().withMessage('Invalid user ID'),
  body('role').isIn(roles).withMessage(`Role must be one of: ${roles.join(', ')}`)
];

exports.toggleUserRules = [
  param('id').isMongoId().withMessage('Invalid user ID')
];

exports.deleteUserRules = [
  param('id').isMongoId().withMessage('Invalid user ID')
];

// Mentor assignment rules
exports.assignMentorRules = [
  body('mentorId').isMongoId().withMessage('Valid mentorId required'),
  body('menteeId').isMongoId().withMessage('Valid menteeId required'),
];

exports.unassignMentorRules = [
  body('menteeId').isMongoId().withMessage('Valid menteeId required'),
];
