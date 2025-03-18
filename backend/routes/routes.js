/* eslint-disable no-undef */
const express = require("express");
const router = express.Router();
const { signup, login } = require("../controllers/AuthController");
const { updateUserDetails, getUserDetails } = require('../controllers/updateUserDetails');
const { createOrder, verifyPayment } = require('../controllers/paymentController');
const authMiddleware = require('../middleware/authMiddleware');

// Auth Routes
router.post("/auth/signup", signup);
router.post("/auth/login", login);

// Protected routes
router.put('/user/:userId', authMiddleware, updateUserDetails);
router.get('/user/:userId', authMiddleware, getUserDetails);


//razorpay routes
router.post('/create-order', createOrder);
router.post('/verify-payment', verifyPayment);


module.exports = router;