const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        default: 1
    },
    serviceId: String
});

const paymentSchema = new mongoose.Schema({
    orderId: {
        type: String,
        required: true,
        unique: true
    },
    paymentId: String,
    amount: {
        type: Number,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    status: {
        type: String,
        enum: ['created', 'completed', 'failed'],
        default: 'created'
    },
    cartItems: [cartItemSchema],
    signature: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Payment', paymentSchema);