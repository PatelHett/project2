const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://user:user@cluster0.339bpnm.mongodb.net/");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: String, // storing the filename of the uploaded image
  },
  objectName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});
const User2 = mongoose.model("User2", userSchema);
module.exports = User2;
