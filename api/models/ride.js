const mongoose = require('mongoose');
const rideSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    require: true,
  },
  rides: [
    {
      rideId: {
        type: Number,
        required: true,
      },
      DriverId: {
        type: Number,
        required: true,
      },
      // Currentlocation: {
      //   type: 'Point',
      //   coordinates: [32.3, , 212.1], // Replace with actual values
      // },
      // Destlocation: {
      //   type: 'Point',
      //   coordinates: [23.01, 20.32], // Replace with actual values
      // },
      FareShare: {
        type: Number,
        required: true,
      },
      Datecreated: {
        type: Date,
        default: Date.now,
      },
      Timecreated: {
        type: String,
        default: '12:00 PM',
      },
    },
  ],
});
const ride = mongoose.model('ride', rideSchema);
module.exports = ride;
