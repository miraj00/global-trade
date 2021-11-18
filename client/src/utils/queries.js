import gql from 'graphql-tag';

export const GET_USER = gql`
  {
    me {
      _id
      username
      email
      productCount
      savedProducts {
          _id
          name
          description
          price
          rating
          images
          category
          stock
          reviews
          reviewCount
      }
    }
  }
`;