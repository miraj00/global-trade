const { User, Product, Image, Review, ContactUs } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    // get all users
    users: async () => {
      return User.find().select("-__v -password");
    },
    // get a user by username
    user: async (parent, { username }) => {
      return User.findOne({ username }).select("-__v -password");
    },

    products: async () => {
      return Product.find().populate("reviews");
    },
    product: async (parent, { _id }) => {
      return Product.findOne({ _id }).populate("reviews");
    },
    getAllReviews: async () => {
      return Product.find();
    },
    getMessages: async () => {
      return User.find()
    }
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      console.log(user);
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      console.log(email, " ", password);
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect UserName");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect Password");
      }

      const token = signToken(user);
      return { token, user };
    },
    addProduct: async (parent, args) => {
      console.log(args);
      const newImages = args.images.map((item) => ({ url: item }));
      const newProduct = await Product.create({ ...args, images: newImages });
      console.log(newProduct);
      return newProduct;
    },
    saveCostumerProducts: async (parent, args, context) => {
      if (context.user) {//not working saved products
        const costumerProduct = await User.findByIdAndUpdate(
          context.user._id,
          { $push: { savedProducts: args.savedProduct } },
          {new: true , runValidation: true}
        )
        return costumerProduct
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    contactForm: async (parent, args, context) => {
      console.log(args); // not properly working
      if (context.user) {        
        const newForm = await User.create({...args , username: context.user.username});
        return newForm;        
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeProduct: async (parent, {productId}) => {
      console.log(productId);
      if (!productId) {
        return { message: "not id found" };
      } else {
        const removedProduct = await Product.findOneAndDelete(productId);
        return removedProduct;
      }
    },
    addReview: async (parent,args , context) => {//review not working
      console.log(args);
      if (context.user) {
        const newReview = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { contactForm: args.contactBody } },
          { new: true, runValidators: true }
        );
        return newReview
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
