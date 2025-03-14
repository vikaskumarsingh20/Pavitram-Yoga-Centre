const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Full name is required']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: 6
  },
  address: {
    type: String,
    required: [true, 'Address is required']
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    default: 'male',
    // required: [true, 'Gender is required']
    
  },
//   profileImage: {
//     type: String,
//     default: null
// },
  country	: {
    type: String,
    default: 'India'
  },
  state: {
    type: String,
    default: 'Uttar Pradesh'
  },
  city: {
    type: String,
    default: 'Ghaziabad'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});


const User = mongoose.model('User', userSchema);

module.exports = User;
