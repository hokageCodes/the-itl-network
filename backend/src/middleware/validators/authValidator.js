// /middleware/validators/authValidator.js
const { body } = require('express-validator');

const registerValidation = [
  body('username')
    .trim()
    .isLength({ min: 3 })
    .withMessage('Username must be at least 3 characters long')
    .matches(/^[a-zA-Z0-9_]+$/)
    .withMessage('Username can only contain letters, numbers, and underscores'),
  
  body('firstName')
    .trim()
    .isLength({ min: 1 })
    .withMessage('First name is required'),
  
  body('lastName')
    .trim()
    .isLength({ min: 1 })
    .withMessage('Last name is required'),
  
  body('email')
    .trim()
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email'),
  
  body('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long'),
  
  body('confirmPassword')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Passwords do not match');
      }
      return true;
    }),
  
  body('phone')
    .trim()
    .isMobilePhone()
    .withMessage('Please provide a valid phone number'),
  
  body('location')
    .trim()
    .isLength({ min: 1 })
    .withMessage('Location is required'),
  
  body('licensingStage')
    .isIn(['NCA Candidate', 'Articling', 'Bar Exam Prep', 'Licensed Lawyer', 'Other'])
    .withMessage('Please select a valid licensing stage'),
  
  body('agreedToTnC')
    .equals('true')
    .withMessage('You must agree to the terms and conditions'),
];

const loginValidation = [
  body('identifier')
    .trim()
    .isLength({ min: 1 })
    .withMessage('Email or username is required'),
  
  body('password')
    .isLength({ min: 1 })
    .withMessage('Password is required'),
];

module.exports = {
  registerValidation,
  loginValidation,
};