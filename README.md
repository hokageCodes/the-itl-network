# ITL Network Backend

This is the backend for the ITL Network mentorship and membership platform.  
It is built with **Node.js, Express, and MongoDB**.  

The backend handles **authentication, membership verification, mentorship applications, dashboards, and admin controls**.

---

## 🚀 Project Setup

### 1. Clone the Repository
```bash
git clone <repo-url>
cd backend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables
Create a `.env` file in the root with:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/itlnetwork
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
CLIENT_URL=http://localhost:3000
```

### 4. Run the Server
```bash
npm run dev
```
Server runs at:  
👉 `http://localhost:5000`

---

## 📦 Folder Structure

```
src/
 ├── controllers/    # Request logic
 ├── middleware/     # Auth, role, validation
 ├── models/         # Mongoose schemas
 ├── routes/         # API endpoints
 ├── utils/          # Email, tokens, helpers
 └── server.js       # Entry point
```

---

## ✅ Features Implemented

### 1. Authentication

- **User Registration**
  - Collects: username, first/last name, email, password, location, licensing stage, T&C agreement.
  - If student → requires NCA proof upload for verification.
  - Email verification link sent after signup.

- **Login**
  - Email + password → returns JWT token.

- **Email Verification**
  - Token emailed to user.
  - User clicks link → `/api/auth/verify/:token`.

- **Password Reset**
  - Forgot password: `/api/auth/forgot` → sends email with reset link.
  - Reset password: `/api/auth/reset/:token`.

- **Agreed to T&C Enforcement**
  - Stored in schema, required at registration.

---

### 2. Membership

- **Membership Levels**
  - Stored in schema (`Pre-Arrival`, `NCA Student`, `Articling Student`, `Practicing in Canada`, `Non-Practicing`).
  - Displayed on membership page after signup.

- **Student Verification**
  - Upload NCA proof.
  - Admin reviews → approve/reject → account activation.

- **Membership Endpoints**
  - `GET /api/membership/verifications` – list pending verifications.
  - `POST /api/membership/verifications/:id/review` – approve/reject.
  - `POST /api/membership/verifications/bulk-review` – bulk approval/rejection.
  - `DELETE /api/membership/verifications/bulk-delete` – bulk delete.

---

### 3. Mentorship

- **Mentor Profile**
  - Fields: username, first/last name, email, area of practice, headshot, location, availability.

- **Mentee Profile**
  - Fields: internationally trained?, in Canada?, province, licensing stage, goals, interests.

- **Eligibility Checks**
  - Must be internationally trained **and** in Canada to register as mentee.

- **Landing Page**
  - Public mentorship landing page with mentor profiles + availability badges.

- **Application Flow**
  - Mentees apply for mentorship.
  - For MVP → Admin assigns manually.

- **Mentorship Endpoints**
  - `PATCH /api/admin/assign` – assign mentor to mentee.
  - `PATCH /api/admin/unassign` – unassign.

---

### 4. Dashboards

- **Admin Dashboard**
  - Manage users (approve, deactivate, delete, change role).
  - Review student verifications.
  - Assign/unassign mentors.

- **Mentor Dashboard**
  - Update profile, toggle availability.
  - See assigned mentees.

- **Mentee Dashboard**
  - See assigned mentor + mentorship progress.

---

### 5. Nice-to-Haves (Planned)

- Export user/application data (CSV).
- Simple analytics (total mentors, mentees, active mentorships).
- OAuth login (Google, LinkedIn).
- Automated mentor-mentee matching (later AI-assisted).

---

## 🛠 Development Notes

- Built with `express`, `mongoose`, `jsonwebtoken`, `bcrypt`, `nodemailer`.
- Input validation with `express-validator`.
- Role-based access control via middleware.
- Nodemon for hot reload in development.

---

## 📌 Current Status

✅ Authentication fully implemented  
✅ Membership verification implemented  
✅ Mentorship schema + flows implemented  
✅ Admin routes implemented  
⚡ Dashboards: backend ready, needs FE integration  
