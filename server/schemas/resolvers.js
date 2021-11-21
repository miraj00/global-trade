// const { User, Product, Image, Review, ContactUs } = require("../models");
// const { AuthenticationError } = require("apollo-server-express");
// const { signToken } = require("../utils/auth");

// const resolvers = {
//   Query: {
//     // get all users
//     users: async () => {
//       return User.find().select("-__v -password");
//     },
//     // get a user by username
//     user: async (parent, { username }) => {
//       return User.findOne({ username }).select("-__v -password");
//     },

//     products: async () => {
//       return Product.find().populate("reviews");
//     },
//     product: async (parent, { _id }) => {
//       return Product.findOne({ _id }).populate("reviews");
//     },
//     getAllReviews: async () => {
//       return Product.find();
//     },
//     getMessages: async () => {
//       return User.find()
//     }
//   },

//   Mutation: {
//     addUser: async (parent, args) => {
//       const user = await User.create(args);
//       console.log(user);
//       const token = signToken(user);
//       return { token, user };
//     },
//     login: async (parent, { email, password }) => {
//       console.log(email, " ", password);
//       const user = await User.findOne({ email });

//       if (!user) {
//         throw new AuthenticationError("Incorrect UserName");
//       }

//       const correctPw = await user.isCorrectPassword(password);

//       if (!correctPw) {
//         throw new AuthenticationError("Incorrect Password");
//       }

//       const token = signToken(user);
//       return { token, user };
//     },
//     addProduct: async (parent, args) => {
//       console.log(args);
//       const newImages = args.images.map((item) => ({ url: item }));
//       const newProduct = await Product.create({ ...args, images: newImages });
//       console.log(newProduct);
//       return newProduct;
//     },
//     saveCustomerProducts: async (parent, args, context) => {
//       if (context.user) {//not working saved products
//         const costumerProduct = await User.findByIdAndUpdate(
//           context.user._id,
//           { $push: { savedProducts: args.savedProduct } },
//           { new: true, runValidation: true }
//         ).populate("savedProducts");
//         return costumerProduct
//       }
//       throw new AuthenticationError("You need to be logged in!");
//     },
//     contactForm: async (parent, {userId , email, contactBody } , context) => {
//       // console.log(args); // not properly working
//       if (context.user) {        
//         const newForm = await User.findByIdAndUpdate(
//           userId,// find id first
//           { $push: { contactUs: { email, contactBody , userId: context.user._id } } }, // pushig it to contactUS in the model
//           {new : true , runValidators: true}
//         );
//         return newForm;        
//       }
//       throw new AuthenticationError("You need to be logged in!");
//     },
//     removeProduct: async (parent, {productId}) => {
//       console.log(productId);
//       if (!productId) {
//         return { message: "not id found" };
//       } else {
//         const removedProduct = await Product.findOneAndDelete(productId);
//         return removedProduct;
//       }
//     },
//     addReview: async (parent,{reviewBody , userId , productId} , context) => {//review not working
//       // console.log(args);
//       if (context.user) {
//         const newReview = await Product.findByIdAndUpdate(
//            productId ,// looking for id
//           { $push: { reviews: {reviewBody , userId } } },//pushing this to the array
//           { new: true, runValidators: true }
//         );
//         console.log(newReview)
//         return newReview
//       }
//       throw new AuthenticationError("You need to be logged in!");
//     },
//   },
// };

// module.exports = resolvers;


const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Category, Order } = require('../models');
const { signToken } = require('../utils/auth');

const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
// Once you create a real Stripe account, however, you would want to replace this with an environment variable (e.g., process.env.STRIPE_KEY).

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
      },
    products: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name
        };
      }

      return await Product.find(params).populate('category');
    },
    product: async (parent, { _id }) => {
      return await Product.findById(_id).populate('category');
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.products',
          populate: 'category'
        });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.products',
          populate: 'category'
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError('Not logged in');
    },
    checkout: async (parent, args, context) => {
      
      const url = new URL(context.headers.referer).origin;

      const order = new Order({ products: args.products });
      const line_items = [];
      
      const { products } = await order.populate('products').execPopulate();
    
      for (let i = 0; i < products.length; i++) {
          // generate product id
          const product = await stripe.products.create({
            name: products[i].name,
            description: products[i].description,
            images: [`${url}/images/${products[i].image}`]
          });
        
          // generate price id using the product id
          const price = await stripe.prices.create({
            product: product.id,
            unit_amount: products[i].price * 100,
            currency: 'usd',
          });
        
          // add price id to the line items array
          line_items.push({
            price: price.id,
            quantity: 1
        });
      } 
  
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`
      });
      
      return { session: session.id };
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addOrder: async (parent, { products }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ products });

        await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

        return order;
      }

      throw new AuthenticationError('Not logged in');
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    updateProduct: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Product.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};

module.exports = resolvers;
