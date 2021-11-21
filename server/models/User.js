// const { Schema, model } = require("mongoose");
// const bcrypt = require("bcrypt");
// const { isEmail } = require("validator");
// const contactSchema = require("./ContactUs")


// const userSchema = new Schema(
//   {
//     username: {
//       type: String,
//       minLength: 6,
//       maxLength: 16,
//       required: [true, "this must be fill"],
//       trim: true,
//       unique: true,
//     },
//     email: {
//       type: String,
//       trim: true,
//       required: true,
//       lowercase: [true, "no uppercase ,  try again ...."],
//       unique: true,
//       validate: [isEmail, "please add a valid email address"],
//       // match: [/.+@.+\..+/, 'Must use a valid email address'],
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//     savedProducts: [
//       {
//         type: Schema.Types.ObjectId,
//         ref: "Product",
//       },
//     ],
//     contactUs: [contactSchema]
//   },
//   // set this to use virtual below
//   {
//     toJSON: {
//       virtuals: true,
//     },
//   }
// );

// // hash user password
// // set up pre-save middleware to create password
// userSchema.pre("save", async function (next) {
//   if (this.isNew || this.isModified("password")) {
//     const saltRounds = 10;
//     this.password = await bcrypt.hash(this.password, saltRounds);
//   }

//   next();
// });

// // compare the incoming password with the hashed password
// userSchema.methods.isCorrectPassword = async function (password) {
//   return bcrypt.compare(password, this.password);
// };

// // when we query a user, we'll also get another field called `bookCount` with the number of saved books we have
// userSchema.virtual("productCount").get(function () {
//   return this.savedProducts.length;
// });

// const User = model("User", userSchema);

// module.exports = User;


const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const Order = require('./Order');

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
  orders: [Order.schema]
});

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
