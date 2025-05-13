const nodemailer = require('nodemailer');

const sendEmail = async (to, name) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'team.codex33@gmail.com', // your email
      pass: 'kvsb tqec lrdh ygzz'  // your app password
    }
  });

  const mailOptions = {
    from: 'team.codex33@gmail.com',
    to,
    subject: '🎉 Registration Request Received – CodeX Season 1',
    html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f6f7; padding: 30px; border-radius: 12px; max-width: 600px; margin: auto; border: 1px solid #ddd;">
        <h2 style="color: #2c3e50; text-align: center;">🚀 Hello, <strong>${name}</strong>!</h2>
        
        <p style="font-size: 16px; color: #2d3436; line-height: 1.6;">
          ✅ We have successfully received your <strong>registration request</strong> for <strong>CodeX Season 1</strong>.
        </p>

        <p style="font-size: 16px; color: #2d3436; line-height: 1.6;">
          💳 You will shortly receive a <strong>payment link</strong> via email. Please complete the payment to confirm your registration.
        </p>

        <p style="font-size: 16px; color: #2d3436; line-height: 1.6;">
          📅 <strong>Season 1</strong> is tentatively scheduled to begin with your new semester on <strong>1st August</strong>.
        </p>

        <hr style="margin: 30px 0; border: none; border-top: 1px solid #ccc;" />

        <p style="font-size: 15px; color: #636e72; text-align: center;">
          Feel free to reach out to us for any queries or updates. We’re excited to have you on this journey!
        </p>

        <p style="font-size: 16px; text-align: center; color: #27ae60; margin-top: 30px;"><strong>– Team Codex</strong></p>
      </div>
    `
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
