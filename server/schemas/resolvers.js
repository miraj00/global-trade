const { User, Product , Image } = require("../models");
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
    product: async (parent , { _id }) => {
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
    addProduct: async (parent, args) => {
      console.log(args);
      const newImages = args.images.map((item)=>({url:item})
      )
      // const newImages = await Image.insertMany(imagesToCreate);
      const newProduct = await Product.create({ ...args, images: newImages });
      console.log(newProduct)
      return newProduct ;
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
