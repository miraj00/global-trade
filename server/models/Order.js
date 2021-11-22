<<<<<<< HEAD
const mongoose = require("mongoose");
=======
const mongoose = require('mongoose');
>>>>>>> main

const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
<<<<<<< HEAD
    default: Date.now,
=======
    default: Date.now
>>>>>>> main
  },
  products: [
    {
      type: Schema.Types.ObjectId,
<<<<<<< HEAD
      ref: "Product",
    },
  ],
});

const Order = mongoose.model("Order", orderSchema);
=======
      ref: 'Product'
    }
  ]
});

const Order = mongoose.model('Order', orderSchema);
>>>>>>> main

module.exports = Order;
