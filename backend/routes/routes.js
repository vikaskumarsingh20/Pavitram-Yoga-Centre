const express = require("express");
const router = express.Router();
const { signup, login } = require("../controllers/AuthController");
const { updateUserDetails, getUserDetails } = require('../controllers/updateUserDetails');
const authMiddleware = require('../middleware/authMiddleware');
const {blogs} = require('../data/blogs')

// Auth Routes
router.post("/auth/signup", signup);
router.post("/auth/login", login);

// Protected routes
router.put('/user/:userId', authMiddleware, updateUserDetails);
router.get('/user/:userId', authMiddleware, getUserDetails);

// Blog routes
router.get("/blogs", (req, res) => {
    res.json(blogs);
});


module.exports = router;