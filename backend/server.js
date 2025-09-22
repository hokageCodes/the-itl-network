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
const membershipRoutes = require('./src/routes/membershipRoutes');
const mentorRoutes = require('./src/routes/mentorRoutes');
// Jobs
require('./src/jobs/expireMentorship');


const app = express();
app.use(express.json());
app.use(cookieParser());


const allowedOrigins = [
  "http://localhost:3000", // Next.js dev
  "http://127.0.0.1:3000", // in case you use this form
  process.env.FRONTEND_URL, // production domain, e.g. https://yourapp.com
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // allow cookies
  })
);


// Routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/admin/applications', applicationRoutes);
app.use('/api/membership', membershipRoutes);
app.use('/api/mentors', mentorRoutes);




// Health
app.get('/api/health', (req,res)=> res.json({ ok: true, env: process.env.NODE_ENV }));

// Error handler
app.use(errorHandler);

const port = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
});
