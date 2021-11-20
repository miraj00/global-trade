// import React, { useState, useEffect } from "react";
// import {
//   Jumbotron,
//   Container,
//   Col,
//   Form,
//   Button,
//   Card,
//   CardColumns,
// } from "react-bootstrap";
// import Auth from "../utils/auth";
// // import { saveProductIds, getSavedProductIds } from "../utils/localStorage";
// import { useQuery } from "@apollo/client";
// import { QUERY_PRODUCTS } from "../utils/queries";
// import Products from "../utils/API"

// // const getProducts = (query) => {
// //   return fetch(`https://fakestoreapi.com/products`);
// // };

// const SearchProducts = () => {
//   // const [saveProduct, {error}] = useMutation(SAVE_PRODUCT);
//   const { loading, data } = useQuery(QUERY_PRODUCTS);
//   const [searchedProducts, setSearchedProducts] = useState([]);
//   const [searchInput, setSearchInput] = useState("");
//   // const products = data?.products || [];

//    if (loading) {
//      return <div>Loading...</div>;
//    }
  
//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     if (!searchInput) {
//       return false;
//     }

//     try {
//       const response = await Products(searchInput);

//       if (!response.ok) {
//         throw new Error("something went wrong!");
//       }

//       const { items } = await response.json();

//       const ProductData = items.map((Product) => ({
//         // ProductId: Product.id,
//         // authors: Product.volumeInfo.authors || ['No author to display'],
//         // title: Product.volumeInfo.title,
//         // description: Product.volumeInfo.description,
//         // image: Product.volumeInfo.imageLinks?.thumbnail || '',

//         // name: item.title,
//         // description: item.description ? item.name : "miscellaneous",
//         // price: item.price ? item.price : 20,
//         // rating: item.rating.rate,
//         // category: item.category,
//         // stock: item.rating.count,
//         // images: [{ url: item.image }],

//         name: Product.name,
//         description: Product.description ? Product.name : "miscellaneous",
//         price: Product.price ? Product.price : 20,
//         rating: Product.rating.rate,
//         category: Product.category,
//         stock: Product.rating.count,
//         images: [{ url: Product.image }],
//       }));

//       setSearchedProducts(ProductData);
//       setSearchInput("");
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // const handleSaveProduct = async (ProductId) => {
//   //         const ProductToSave = searchedProducts.find((Product) => Product.ProductId === ProductId);

//   //         const token = Auth.loggedIn() ? Auth.getToken() : null;

//   //         if (!token) {
//   //           return false;
//   //         }

//   //         try {
//   //           await saveProduct({
//   //               variables: {input: ProductToSave}
//   //           });

//   //           if (error) {
//   //               throw new Error('Something went wrong!');
//   //           }

//   //           setSavedProductIds([...savedProductIds, ProductToSave.ProductId]);
//   //         } catch (err) {
//   //           console.error(err);
//   //         }
//   // };

//   return (
//     <>
//       <Jumbotron fluid className="text-light bg-dark">
//         <Container>
//           <h1>Search for Products!</h1>
//           <Form onSubmit={handleFormSubmit}>
//             <Form.Row>
//               <Col xs={12} md={8}>
//                 <Form.Control
//                   name="searchInput"
//                   value={searchInput}
//                   onChange={(e) => setSearchInput(e.target.value)}
//                   type="text"
//                   size="lg"
//                   placeholder="Search for a Product"
//                 />
//               </Col>
//               <Col xs={12} md={4}>
//                 <Button type="submit" variant="success" size="lg">
//                   Submit Search
//                 </Button>
//               </Col>
//             </Form.Row>
//           </Form>
//         </Container>
//       </Jumbotron>

//       <Container>
//         <h2>
//           {searchedProducts.length
//             ? `Viewing ${searchedProducts.length} results:`
//             : "Search for a Product to begin"}
//         </h2>
//         <CardColumns>
//           {searchedProducts.map((Product) => {
//             return (
//               <Card key={Product.ProductId} border="dark">
//                 {Product.image ? (
//                   <Card.Img
//                     src={Product.image}
//                     alt={`The cover for ${Product.name}`}
//                     variant="top"
//                   />
//                 ) : null}
//                 <Card.Body>
//                   <Card.Title>{Product.name}</Card.Title>
//                   <p className="small">Description: {Product.description}</p>
//                   <Card.Text>{Product.description}</Card.Text>
                  
//                 </Card.Body>
//               </Card>
//             );
//           })}
//         </CardColumns>
//       </Container>
//     </>
//   );
// };

// export default SearchProducts;
