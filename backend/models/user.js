const mongoose = require('mongoose');
const geocoder = require('../utils/geocoder');

const UserSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  skill: String,
  languages: [
    {
      type: String,
    },
  ],
  username: String,
  email: String,
  password: String,
  postcode: String,
  country: {
    type: String,
    default: 'GB',
  },
  geoLocation: {
    type: {
      type: String,
      enum: ['Point'],
    },
    coordinates: {
      type: [Number],
      index: '2dsphere',
    },
  },
  picture: {
    type: String,
    default: null,
  },
});

UserSchema.pre('save', async function (next) {
  const location = await geocoder.geocode({
    countryCode: this.contry,
    zipcode: this.postcode.replace(/ /g, ""),
    maxResults: 1,
  });
  this.geoLocation = {
    type: 'Point',
    coordinates: [location[0].longitude, location[0].latitude],
  };
  console.log(this.postcode.replace(/ /g, ""))
  next();
});

module.exports = mongoose.model('User', UserSchema);
