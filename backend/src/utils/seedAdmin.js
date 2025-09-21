require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('../config/db');
const User = require('../models/User');

const run = async () => {
  try {
    await connectDB();
    const email = process.env.ADMIN_EMAIL;
    const password = process.env.ADMIN_PASSWORD;
    if (!email || !password) throw new Error('Set ADMIN_EMAIL and ADMIN_PASSWORD in .env');

    let admin = await User.findOne({ email });
    if (admin) {
      console.log('Admin user already exists:', email);
      process.exit(0);
    }
    admin = new User({ name: 'Administrator', email, password, role: 'admin' });
    await admin.save();
    console.log('Admin user created:', email);
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

run();
