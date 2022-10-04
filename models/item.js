const mongoose = require('mongoose')
const Schema = mongoose.Schema

//create item schema
const itemSchema = new Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  description: { type: String, required: true },
  price: {type: Number, required: true},
  image: {type: String, default: 'noimage.png'},
}
)
//create model from item schema
const Item = mongoose.model('Item', itemSchema)

module.exports = Item