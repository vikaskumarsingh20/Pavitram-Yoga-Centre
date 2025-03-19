const crypto = require('crypto');
require('dotenv').config();

const orderId = 'order_Q8e73bNjDZCG7J';
const paymentId = 'pay_Q8e7KxZQXOPYp4';
const secret = process.env.RAZORPAY_KEY_SECRET;

const text = `${orderId}|${paymentId}`;
const signature = crypto
    .createHmac('sha256', secret)
    .update(text)
    .digest('hex');

console.log('Test Signature:', signature);