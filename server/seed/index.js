const mongoose = require("mongoose");
const Product = require("../models/Product");
const axios = require("axios")

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/global_trade",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);


const products = () => {
  return axios.get("https://fakestoreapi.com/products")
      .then(({data} ) => {
        console.log(data , "=================================")
      const dataProduct = data.map((item) => {
        return {
          name: item.title,
          description: item.description ? item.name : "miscellaneous", 
          price: item.price ? item.price : 20,
          rating: item.rating.rate,
          category: item.category,
          stock: item.rating.count,
          images: [{ url: item.image }],
        };
      })
        return dataProduct;
    });
};

// products()

Product.deleteMany({}).then(() => {
    Product.insertMany(products()).then((data) => {
        console.log(data.result.length + "products inserted")
    })
})