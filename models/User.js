const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  firstName:  { type: String,   required: [ true, "Must know first name." ] },
  lastName:   { type: String,   required: [ true, "Must know last name." ] },
  phoneNr:    { type: Number,   required: [ true, "Must know phone number." ] },
  adress:     { type: String,   required: [ true, "Must know adress." ] },
  zipCode:    { type: Number,   required: [ true, "Must know zip code." ] },
  email:      { type: String,   required: [ true, "Must know email adress." ] }
}, { timestamps: true });

module.exports = mongoose.model("User", User);
