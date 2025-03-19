const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    orderId: {
        type: String,
        required: true,
        unique: true
    },
    paymentId: {
        type: String,
        sparse: true
    },
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
    signature: String,
    cartItems: [{
        serviceId: String,
        quantity: Number,
        price: Number
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Payment', paymentSchema);