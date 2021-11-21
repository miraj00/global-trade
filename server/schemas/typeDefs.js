// const { gql } = require("apollo-server-express");

// const typeDefs = gql`
//   type User {
//     _id: ID
//     username: String
//     email: String
//     productCount: Int
//     savedProducts: [Product]
//     contactUs: [ContactUs]
//   }

//   type Product {
//     _id: ID!
//     name: String
//     description: String
//     price: Int
//     rating: Int
//     images: [Images]
//     category: String
//     stock: Int
//     reviews: [Review]
//     reviewCount: Int
//   }

//   type ContactUs {
//     _id: ID
//     contactBody: String
//     userId: String
//     createdAt: String
//   }

//   type Images {
//     _id: ID
//     url: String
//   }

//   type Review {
//     _id: ID
//     reviewBody: String!
//     userId: String!
//     createdAt: String
//   }

//   type Auth {
//     token: ID!
//     user: User
//   }

//   input product {
//     _id: ID!
//     name: String
//     description: String
//     price: Int
//     rating: Int
//     images: [String]
//     category: String
//     stock: Int
//     reviewCount: Int
//   }

//   type Query {
//     me: User
//     users: [User]
//     user(username: String!): User
//     products: [Product]
//     product(_id: ID!): Product
//     getAllReviews: [Product]
//     getMessages: [User]
//   }

//   type Mutation {
//     login(email: String!, password: String!): Auth
//     addUser(username: String!, email: String!, password: String!): Auth
//     addProduct(
//       name: String!
//       description: String!
//       price: Int!
//       rating: Int
//       images: [String]
//       category: String!
//       stock: Int!
//     ): Product
//     removeProduct(productId: ID!): Product
//     addReview(userId: ID! ,productId: ID!, reviewBody: String!): Product
//     saveCustomerProducts(savedProduct: ID!): User
//     contactForm(userId: ID!, email: String!, contactBody: String!): User
//   }
// `;

// module.exports = typeDefs;



const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
