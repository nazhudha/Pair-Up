const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  skill: String,
  languages: [{
    type: String
}],
  username: String,
  email: String,
  password: String,
  postcode: String
});

module.exports = mongoose.model("User", UserSchema);