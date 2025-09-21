require('dotenv').config();
require('express-async-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const connectDB = require('./src/config/db');
const authRoutes = require('./src/routes/authRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const errorHandler = require('./src/middleware/errorHandler');
const applicationRoutes = require('./src/routes/applicationRoutes');

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: true, credentials: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/admin/applications', applicationRoutes);


// Health
app.get('/api/health', (req,res)=> res.json({ ok: true, env: process.env.NODE_ENV }));

// Error handler
app.use(errorHandler);

const port = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
});
