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
    from: 'team.codex33@gmail.com', // sender email
    to,
    subject: 'Registration Confirmed – Welcome to a CodeX! 🎓',
    html: `
        <h2 style="color: #2c3e50;"><strong>Welcome, ${name}!</strong></h2>
        <p style="font-size: 16px; color: #34495e;">
          <strong>Thank you for registering with us! 🙌</strong>
        </p>
        <p style="font-size: 16px; color: #34495e;">
          We're thrilled to have you on board. 🚀 <br/>
          Get ready to <strong>kick-start an exciting journey</strong> as we step into the new semester <strong>together!</strong>
        </p>
        <p style="font-size: 16px; color: #34495e;">
          🧠 <strong>Let’s grow, learn, and achieve great things</strong>
        </p>
        <p style="font-size: 16px; color: #34495e;">
          🔐 <strong>Your login credentials will be shared with you before the semester starts.</strong>
        </p>
        <p style="font-size: 16px; color: #34495e;">
          🎯 <strong>Stay tuned for further updates!</strong>
        </p>
        <br />
        <p style="font-size: 16px; color: black;"><strong>– Team Codex</strong></p>`
  };

  

  await transporter.sendMail(mailOptions);
};


// const mailOptions = {
//     from: 'team.codex33@gmail.com', // sender email
//     to,
//     subject: '🎉 Registration Confirmed – Welcome to a CodeX! 🎓',
//     html: `
//       <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 25px; border-radius: 10px;">
//         <h2 style="color: #2c3e50;">✨ <strong>Welcome, ${name}!</strong> ✨</h2>
//         <p style="font-size: 16px; color: #34495e;">
//           <strong>Thank you for registering with us! 🙌</strong>
//         </p>
//         <p style="font-size: 16px; color: #34495e;">
//           We're thrilled to have you on board. 🚀 Get ready to <strong>kick-start an exciting journey</strong> as we step into the new semester <strong>together! 💼📚</strong>
//         </p>
//         <p style="font-size: 16px; color: #34495e;">
//           🧠 <strong>Let’s grow, learn, and achieve great things</strong>
//         </p>
//         <p style="font-size: 16px; color: #34495e;">
//           🔐 <strong>Your login credentials will be shared with you before the semester starts.</strong>
//         </p>
//         <p style="font-size: 16px; color: #34495e;">
//           🎯 <strong>Stay tuned for further updates!</strong>
//         </p>
//         <br />
//         <p style="font-size: 16px; color: #2ecc71;"><strong>– Team Codex33</strong></p>
//       </div>
//     `
//   };

module.exports = sendEmail;
