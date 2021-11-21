import * as React from "react";
import { useState } from "react";
import getProducts from "../../utils/AP_i/allProducts";
import productsCategories from "../../utils/AP_i/productsCategories";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import { Container, Card, CardColumns } from "react-bootstrap";
// import { QUERY_PRODUCTS } from "../../utils/queries"

const Categories = [
  { title: "jewelery" },
  { title: "electronics" },
  { title: "women's clothing" },
  { title: "men's clothing" },
  { title: "products" },
];

const display = {
  form: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  select: {
    width: "800px",
  },
  btn: {
    width: "200px",
  },
  margin: {
    paddingBottom: 60,
  },
};

export default function FreeSolo() {
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = async (event) => {
    event.persist();
    event.preventDefault();
    if (!searchInput) {
      return false;
    }

    if (searchInput === "products") {
      try {
        const response = await getProducts(searchInput);

        console.log(searchInput);
        console.log(response);
        if (!response.ok) {
          throw new Error("something went wrong!");
        }

        const items = await response.json();
        console.log(items);
        const Data = items.map((item) => ({
          name: item.title,
          description: item.description,
          price: item.price,
          rating: item.rating.rate,
          category: item.category,
          stock: item.rating.count,
          images: item.image,
        }));

        // console.log(Data)
        setSearchedProducts(Data);
        setSearchInput("");
      } catch (err) {
        console.error(err);
      }
    } else {
      try {
        const response = await productsCategories(searchInput);
        event.persist();
        console.log(searchInput);
        console.log(response);
        if (!response.ok) {
          throw new Error("something went wrong!");
        }

        const items = await response.json();
        console.log(items);
        const Data = items.map((item) => ({
          name: item.title,
          description: item.description,
          price: item.price,
          rating: item.rating.rate,
          category: item.category,
          stock: item.rating.count,
          images: item.image,
        }));

        // console.log(Data)
        setSearchedProducts(Data);
        setSearchInput("");
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div style={display.margin}>
      <form style={display.form} onSubmit={handleSubmit}>
        <Autocomplete
          style={display.select}
          disableClearable
          options={Categories.map((option) => option.title)}
          renderInput={(params) => (
            <TextField
              {...params}
              name="searchInput"
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
              value={searchInput}
              onBlur={(e) => setSearchInput(e.target.value)}
              label="Search Category"
            />
          )}
        />
        <Button variant="outlined" type="submit" style={display.btn}>
          search
        </Button>
      </form>

      <Container>
        <h2>
          {searchedProducts.length
            ? `Viewing ${searchedProducts.length} results:`
            : null}
        </h2>
        <CardColumns>
          {searchedProducts.map((products) => {
            return (
              <Card key={products.productsId} border="dark">
                {products.images ? (
                  <Card.Img
                    src={products.images}
                    alt={`The cover for ${products.title}`}
                    variant="top"
                  />
                ) : null}
                <Card.Body>
                  <Card.Title>{products.name}</Card.Title>
                  {/* <p className="small"> {products.name}</p> */}
                  <Card.Text>{products.description}</Card.Text>
                  <Card.Footer> ${products.price} </Card.Footer>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </div>
  );
}
