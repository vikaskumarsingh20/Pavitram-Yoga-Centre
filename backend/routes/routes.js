/* eslint-disable no-undef */
const express = require("express");
const router = express.Router();
const { signup, login } = require("../controllers/AuthController");
const { updateUserDetails, getUserDetails } = require('../controllers/updateUserDetails');
const { createOrder, verifyPayment, getPaymentDetails, getUserOrders } = require('../controllers/paymentController');
const authMiddleware = require('../middleware/authMiddleware');
const { uploadMiddleware, handleUploadError } = require('../middleware/fileUpload');

// Auth Routes
router.post("/auth/signup", signup);
router.post("/auth/login", login);

// Protected routes
router.put('/user/:userId', authMiddleware, uploadMiddleware, handleUploadError, updateUserDetails);
router.get('/user/:userId', authMiddleware, getUserDetails);

// Razorpay routes - Add proper prefix
router.post('/payment/create-order', authMiddleware, createOrder);
router.post('/payment/verify-payment', authMiddleware, verifyPayment);
router.get('/payment/order/:orderId', authMiddleware, getPaymentDetails);
router.get('/payment/orders/:userId', authMiddleware, getUserOrders);

module.exports = router;