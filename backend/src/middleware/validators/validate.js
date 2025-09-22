// /middleware/validators/validate.js
const { validationResult } = require('express-validator');

const validate = (req, res, next) => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    console.log('Validation errors:', errors.array());
    return res.status(400).json({
      message: 'Validation failed',
      errors: errors.array().map(error => error.msg)
    });
  }
  
  next();
};

module.exports = validate;