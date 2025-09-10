
const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUser } = require('../controller/user.controller');
const { protect } = require('../middleware/auth.middleware');

router.post('/signup', registerUser);
router.post('/login', loginUser);
router.get('/profile', protect, getUser); // ✅ protected

module.exports = router;
