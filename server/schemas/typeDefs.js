const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    productCount: Int
    savedProducts: [Product]
  }

  type Product {
    _id: ID!
    name: String
    description: String
    price: Int
    rating: Int
    images: [String!]
    category: String
    stock: Int
    reviewCount: Int
    reviewProduct: [Review]
  }

  type Review {
    _id: ID
    reviewBody: String!
    username: String!
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  input product {
    _id: ID!
    name: String
    description: String
    price: Int
    rating: Int
    images: [String]
    category: String
    stock: Int
    reviewCount: Int
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    products: [Product]
    product(_id: ID): Product
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addProduct(
      name: String!
      description: String!
      price: Int!
      rating: Int!
      images: String!
      category: String!
      stock: Int!
    ): Product
    deleteProduct(productId: ID!): Product
    addReview(productId: ID!, reviewBody: String!): Product
  }
`;

module.exports = typeDefs;
