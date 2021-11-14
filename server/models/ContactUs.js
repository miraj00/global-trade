const dateFormat = require("../utils/dateFormat");
const { Schema} = require("mongoose");

const contactSchema = new Schema({
  contactBody: {
    type: String,
    required: [true, "please add a message"],
    minLength: [6, "add more than 6 six characters"],
    maxLength: [280, "you have exceeded the limit"],
  },
  username: {
    type: String,
    required: [true, "please add your username"],
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => dateFormat(createdAtVal),
  },
});

const ContactUs = contactSchema;
module.exports = ContactUs;
