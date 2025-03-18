/* eslint-disable no-undef */
const razorpay = require('../config/razorpayConfig');

exports.createOrder = async (req, res) => {
    const { amount, currency, receipt } = req.body;

    const options = {
        amount: amount * 100,  // Amount in (INR)
        currency,
        receipt
    };

    try {
        const order = await razorpay.orders.create(options);
        res.status(201).json({ success: true, order });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};


exports.verifyPayment = async (req, res) => {
    const crypto = require('crypto');

    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    const generatedSignature = crypto
        .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
        .update(razorpay_order_id + '|' + razorpay_payment_id)
        .digest('hex');

    if (generatedSignature === razorpay_signature) {
        res.status(200).json({ success: true, message: 'Payment verified successfully' });
    } else {
        res.status(400).json({ success: false, message: 'Payment verification failed' });
    }
};