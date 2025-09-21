const { body } = require('express-validator');

exports.registerValidation = [
  body('name')
    .optional()
    .isString().withMessage('Name must be a string')
    .trim()
    .isLength({ max: 50 }).withMessage('Name cannot exceed 50 chars'),

  body('email')
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Must be a valid email')
    .normalizeEmail(),

  body('password')
    .notEmpty().withMessage('Password is required')
    .isLength({ min: 8 }).withMessage('Password must be at least 8 characters'),

  body('role')
    .optional()
    .isIn(['admin','mentor','mentee','member']).withMessage('Invalid role')
];

exports.loginValidation = [
  body('email')
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Must be a valid email')
    .normalizeEmail(),

  body('password')
    .notEmpty().withMessage('Password is required')
];
