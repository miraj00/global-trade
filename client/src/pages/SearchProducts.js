import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';

import Auth from '../utils/auth';
import { saveProductIds, getSavedProductIds } from '../utils/localStorage';
import {SAVE_PRODUCT} from '../utils/mutations';
import {useMutation} from '@apollo/client';


const searchProducts = (query) => {
  return fetch(`https://fakestoreapi.com/products`);
};


  const SearchProducts = () => {
        const [saveProduct, {error}] = useMutation(SAVE_PRODUCT);
       
        const [searchedProducts, setSearchedProducts] = useState([]);
        const [searchInput, setSearchInput] = useState('');
        const [savedProductIds, setSavedProductIds] = useState(getSavedProductIds());


        useEffect(() => {
           return () => saveProductIds(savedProductIds);
        });


          const handleFormSubmit = async (event) => {
          event.preventDefault();

            if (!searchInput) {
              return false;
            }

            try {
              const response = await searchProducts(searchInput);

              if (!response.ok) {
                throw new Error('something went wrong!');
              }

              const { items } = await response.json();

              const ProductData = items.map((Product) => ({
                // ProductId: Product.id,
                // authors: Product.volumeInfo.authors || ['No author to display'],
                // title: Product.volumeInfo.title,
                // description: Product.volumeInfo.description,
                // image: Product.volumeInfo.imageLinks?.thumbnail || '',
              
                // name: item.title,
                // description: item.description ? item.name : "miscellaneous", 
                // price: item.price ? item.price : 20,
                // rating: item.rating.rate,
                // category: item.category,
                // stock: item.rating.count,
                // images: [{ url: item.image }],           
                
                name: Product.name,
                description: Product.description ? Product.name : "miscellaneous", 
                price: Product.price ? Product.price : 20,
                rating: Product.rating.rate,
                category: Product.category,
                stock: Product.rating.count,
                images: [{ url: Product.image }],
                     
              }));

              setSearchedProducts(ProductData);
              setSearchInput('');
            } catch (err) {
              console.error(err);
            }
  };

  // create function to handle saving a Product to our database
  const handleSaveProduct = async (ProductId) => {
          // find the Product in `searchedProducts` state by the matching id
          const ProductToSave = searchedProducts.find((Product) => Product.ProductId === ProductId);

          // get token
          const token = Auth.loggedIn() ? Auth.getToken() : null;

          if (!token) {
            return false;
          }

          try {
            await saveProduct({
                variables: {input: ProductToSave}
            });

            if (error) {
                throw new Error('Something went wrong!');
            }
                    
          // if Product successfully saves to user's account, save Product id to state
            setSavedProductIds([...savedProductIds, ProductToSave.ProductId]);
          } catch (err) {
            console.error(err);
          }
  };

  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Search for Products!</h1>
          <Form onSubmit={handleFormSubmit}>
            <Form.Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name='searchInput'
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type='text'
                  size='lg'
                  placeholder='Search for a Product'
                />
              </Col>
              <Col xs={12} md={4}>
                <Button type='submit' variant='success' size='lg'>
                  Submit Search
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Container>
      </Jumbotron>

      <Container>
        <h2>
          {searchedProducts.length
            ? `Viewing ${searchedProducts.length} results:`
            : 'Search for a Product to begin'}
        </h2>
        <CardColumns>
          {searchedProducts.map((Product) => {
            return (
              <Card key={Product.ProductId} border='dark'>
                {Product.image ? (
                  <Card.Img src={Product.image} alt={`The cover for ${Product.name}`} variant='top' />
                ) : null}
                <Card.Body>
                  <Card.Title>{Product.name}</Card.Title>
                  <p className='small'>Description: {Product.description}</p>
                  <Card.Text>{Product.description}</Card.Text>
                  {Auth.loggedIn() && (
                    <Button
                      disabled={savedProductIds?.some((savedProductId) => savedProductId === Product.ProductId)}
                      className='btn-block btn-info'
                      onClick={() => handleSaveProduct(Product.ProductId)}>
                      {savedProductIds?.some((savedProductId) => savedProductId === Product.ProductId)
                        ? 'This Product has already been saved!'
                        : 'Save this Product!'}
                    </Button>
                  )}
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SearchProducts;
