// import React, { useState, useEffect } from 'react';
import React from 'react';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';
// import { getMe, deleteProduct } from '../utils/API';
import Auth from '../utils/auth';
import { removeProductId } from '../utils/localStorage';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { REMOVE_PRODUCT } from '../utils/mutations';
import { GET_USER } from '../utils/queries';



  const SavedProducts = () => {
    const [removeProduct, { error }] = useMutation(REMOVE_PRODUCT);

    const { loading, data } = useQuery(GET_USER);
    const userData = data?.me || {};

    const handleDeleteProduct = async (productId) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }

        try {
            await removeProduct({
                variables: { productId }
            });

            if (error) {
                throw new Error('Something went wrong!');
            }

            removeProductId(productId);
        } catch (err) {
            console.error(err);
        }
    };

    if (loading) {
        return <h2>LOADING...</h2>;
    }

  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Viewing saved products!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
          {userData.savedProducts.length
            ? `Viewing ${userData.savedProducts.length} saved ${userData.savedProducts.length === 1 ? 'product' : 'products'}:`
            : 'You have no saved products!'}
        </h2>
        <CardColumns>
          {userData.savedProducts.map((product) => {
            return (
              <Card key={product.productId} border='dark'>
                {product.image ? <Card.Img src={product.image} alt={`The cover for ${product.name}`} variant='top' /> : null}
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <p className='small'>Description: {product.description}</p>
                  <Card.Text>{product.description}</Card.Text>
                  <Button className='btn-block btn-danger' onClick={() => handleDeleteProduct(product.productId)}>
                    Delete this Product!
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SavedProducts;
