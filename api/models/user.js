const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  city: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  verificationToken: String,
  RiderProfile: [
    {
      riderId: Number,
      name: String,
      phoneNo: Number,
    },
  ],
  vehicleStatus: {
    type: Boolean,
    default: false,
  },
  rides: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Ride',
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
