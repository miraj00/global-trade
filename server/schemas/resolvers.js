const { User, Product } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find()
      .select("-__v -password")
    },
    products: async () => {
      return Product.find().populate("reviews");
    },
    product: async ({ _id }) => {
      return Product.findOne({ _id }).populate("reviews");
    },
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
    addProduct: async (parent, args, context) => {
      console.log(args, context);

      const newProduct = await Product.create(context);
      return { newProduct };
    },
    deleteProduct: async (parent, { productId }) => {
      const removedProduct = await Product.findOneAndUpdate(
        { _id: productId },
        { $pull: productId },
        { new: true }
      );
      return removedProduct;
    },
  },
};
module.exports = resolvers;
