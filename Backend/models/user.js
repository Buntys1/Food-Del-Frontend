const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Usermodel = mongoose.model("AllUser", UserSchema);
module.exports = Usermodel;
