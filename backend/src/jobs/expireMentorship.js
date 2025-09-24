// src/jobs/expireMentorship.js
const cron = require('node-cron');
const MenteeProfile = require('../models/MenteeProfile');
const User = require('../models/User');

// Run daily at midnight
cron.schedule('0 0 * * *', async () => {
  console.log('⏳ Running mentorship expiry check...');
  const now = new Date();

  try {
    const expired = await MenteeProfile.find({
      programEndDate: { $lte: now }, 
      status: 'active'
    });

    for (const mentee of expired) {
      mentee.status = 'completed';
      await mentee.save();

      // reset mentee role to member
      const menteeUser = await User.findById(mentee.user);
      if (menteeUser) {
        menteeUser.role = 'member';
        await menteeUser.save();
      }

      // free mentor
      if (mentee.assignedMentor) {
        const mentor = await User.findById(mentee.assignedMentor);
        if (mentor) {
          mentor.available = true;
          await mentor.save();
        }
      }

      console.log(`✅ Mentorship expired for mentee ${menteeUser?.email}`);
    }
  } catch (err) {
    console.error('❌ Error expiring mentorships:', err);
  }
});
