const mongoose = require('mongoose')
const Schema = mongoose.Schema

//create schema
const itemSchema = new Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  description: { type: String, required: true },
  price: {type: Number, required: true},
  image: {type: String, required: false},
}
)

//create model from schema
const Item = mongoose.model('Item', itemSchema)

//export our Model
module.exports = Item
