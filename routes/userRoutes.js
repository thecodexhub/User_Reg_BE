const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/userController');
const { getUsers } = require('../controllers/userController');

router.post('/register', registerUser);
router.get('/listUsers', getUsers);

module.exports = router;
