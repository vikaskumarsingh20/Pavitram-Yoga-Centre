/* eslint-disable no-undef */
const mongoose = require('mongoose');
const razorpay = require('../config/razorpayConfig');
const crypto = require('crypto');
const Payment = require('../models/payment'); // Create this model

exports.createOrder = async (req, res) => {
    try {
        const { amount, currency = "INR", receipt, userId, cartItems } = req.body;

        // Validate userId is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({
                success: false,
                message: "Invalid user ID format"
            });
        }

        if (!amount || amount < 1) {
            return res.status(400).json({
                success: false,
                message: "Amount is required and should be greater than 0"
            });
        }

        const options = {
            amount: Math.round(amount * 100), // Convert to paise
            currency,
            receipt,
            notes: {
                userId: userId,
                cartItems: JSON.stringify(cartItems)
            }
        };

        const order = await razorpay.orders.create(options);
        
        // Save order details to database with validated userId
        await Payment.create({
            orderId: order.id,
            amount: amount,
            userId: new mongoose.Types.ObjectId(userId),
            status: 'created',
            cartItems: cartItems
        });

        res.status(201).json({
            success: true,
            order,
            key: process.env.RAZORPAY_KEY_ID // Frontend needs this
        });
    } catch (error) {
        console.error('Order creation error:', error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

exports.verifyPayment = async (req, res) => {
    try {
        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature
        } = req.body;

        if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
            return res.status(400).json({
                success: false,
                message: "Missing required payment verification parameters"
            });
        }

        // Generate the expected signature
        const text = `${razorpay_order_id}|${razorpay_payment_id}`;
        const generatedSignature = crypto
            .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
            .update(text)
            .digest('hex');

        console.log('Generated Signature:', generatedSignature); // For testing only, remove in production

        if (generatedSignature === razorpay_signature) {
            // Update payment status in database
            await Payment.findOneAndUpdate(
                { orderId: razorpay_order_id },
                {
                    $set: {
                        paymentId: razorpay_payment_id,
                        status: 'completed',
                        signature: razorpay_signature
                    }
                }
            );

            res.status(200).json({
                success: true,
                message: 'Payment verified successfully'
            });
        } else {
            await Payment.findOneAndUpdate(
                { orderId: razorpay_order_id },
                { $set: { status: 'failed' } }
            );

            res.status(400).json({
                success: false,
                message: 'Payment verification failed',
                expected: generatedSignature, // For testing only, remove in production
                received: razorpay_signature
            });
        }
    } catch (error) {
        console.error('Payment verification error:', error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

exports.getPaymentDetails = async (req, res) => {
    try {
        const { orderId } = req.params;
        const payment = await Payment.findOne({ orderId });
        
        if (!payment) {
            return res.status(404).json({
                success: false,
                message: "Payment not found"
            });
        }

        res.status(200).json({
            success: true,
            payment
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};