const mongoose = require('mongoose')
const Schema = mongoose.Schema

//create cart schema
const cartSchema = new Schema({
  

  cartItems: [
    {
      product: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: {type: Number, default: 1},
    }
  ]
})

module.exports = mongoose.model('Cart', cartSchema)