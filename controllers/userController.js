const User = require('../models/User');
const sendEmail = require('../utils/sendEmail');

const registerUser = async (req, res) => {
  try {
      const user = await User.create(req.body);
      await sendEmail(user.email, user.firstName);
      res.status(201).json({ message: 'User registered and email sent.' });
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: 'Registration failed', error });
    }
};

const getUsers = async (req, res) => {
    try {
      const { year } = req.query; // optional query param
      const filter = year ? { year } : {};
  
      const users = await User.find(filter).sort({ createdAt: -1 });
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ message: 'Failed to fetch users', error: err.message });
    }
};

module.exports = { registerUser, getUsers };
