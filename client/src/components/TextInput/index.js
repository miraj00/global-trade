
import * as React from "react";
import{ useState } from "react";
// import Auth from "../../utils/auth";
import getProducts  from "../../utils/API";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import {
  Container,
  Card,
  CardColumns,
} from "react-bootstrap";


const Categories = [
  { title: "Jewelery" },
  { title: "Electronics" },
  { title: "women's clothing" },
  { title: "men clothing" },
  { title: "products" },
];


const display = {
  form: {
    display: "flex",
    justifyContent: "space-evenly"
  },
  select: {
    width: "800px",
  },
  btn: {
    width: "200px"
  },
  margin: {
    paddingBottom: 60
  }
};


export default function FreeSolo() {
 const [searchedProducts, setSearchedProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!searchInput) {
      return false;
    }

    try {
      const response = await getProducts(searchInput);
      console.log(searchInput)
      console.log(response);
      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      const items  = await response.json();
        console.log(items)
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
  };

  return (
    <div style= {display.margin}>
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
                  <Card.Footer> {products.price} $</Card.Footer>
                  {/* {Auth.loggedIn() && (
                    <div>
                      <Card.Text>
                        {products.description} <a href={products.link}>link</a>{" "}
                      </Card.Text>
                      <Button
                        disabled={savedproductsIds?.some(
                          (savedproductsId) => savedproductsId === products.productsId
                        )}
                        className="btn-block btn-info"
                        onClick={() => handleSaveproducts(products.productsId)}
                      >
                        {savedproductsIds?.some(
                          (savedproductsId) => savedproductsId === products.productsId
                        )
                          ? "This products has already been saved!"
                          : "Save this products!"}
                      </Button>
                    </div>
                  )} */}
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </div>
  );
}


