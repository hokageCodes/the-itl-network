const express = require('express');
const router = express.Router();
const appCtrl = require('../controllers/applicationController');
const requireAuth = require('../middleware/authMiddleware');
const requireRole = require('../middleware/roleMiddleware');
const validate = require('../middleware/validators/validate');
const { param, body } = require('express-validator');

// Admin only
router.use(requireAuth, requireRole('admin'));

router.get('/', appCtrl.listApplications);

router.patch('/:id/status',
  [
    param('id').isMongoId().withMessage('Invalid application ID'),
    body('status').isIn(['pending', 'approved', 'rejected']).withMessage('Invalid status')
  ],
  validate,
  appCtrl.updateApplicationStatus
);

router.delete('/:id',
  [param('id').isMongoId().withMessage('Invalid application ID')],
  validate,
  appCtrl.deleteApplication
);

module.exports = router;
