const express = require("express");
const router = express.Router();
const { signup, login } = require("../controllers/AuthController");
const { updateUserDetails, getUserDetails } = require('../controllers/updateUserDetails');
const authMiddleware = require('../middleware/authMiddleware');

router.post("/auth/signup", signup);
router.post("/auth/login", login);

// Protected routes
router.put('/user/:userId', authMiddleware, updateUserDetails);
router.get('/user/:userId', authMiddleware, getUserDetails);


module.exports = router;