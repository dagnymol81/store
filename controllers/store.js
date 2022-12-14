const Item = require('../models/item')
const seed = require('../models/seed')
const Cart = require('../models/cart')


const showCredits = (req, res) => {
  res.status(200).render('Credits')
}

const newItem = (req, res) => {
  res.render('New')
}

const createItem = (req, res) => {
    Item.create(req.body, (err, createdItem) => {
      if(err) {
        res.status(400).json(err)
      } else {
        res.status(200).redirect('/products')
      }
    })
}

const storeIndex = (req, res) => {
  Item.find({}, (err, foundItem) => {
    if (err) {
      res.status(400).json(err)
    } else {
      res.status(200).render('Index', { store: foundItem })
    }
  })
}


const buyItem = (req, res) => {
  Item.findByIdAndUpdate(req.params.id, {$inc: { quantity: -1 } }, (err, foundItem) => { //decrement item
    if (err) {
        res.status(400).json(err)
    } else {
      Cart.findOne({}, (err, foundCart) => { //find a cart
        if (err) {
          res.status(400).json(err)
        } else {
          let itemName = foundItem.name
          let price = foundItem.price
          let newItem =  { product: itemName, price: price }  //create cart item

          if (foundCart) {
            let itemExists = foundCart.cartItems.findIndex(element => element.product == itemName)
            if (itemExists != -1) { //if we found item in the cartItems array, increment quantity in cart
              foundCart.cartItems[itemExists].quantity += 1;
              foundCart.save()
              res.status(200).redirect('/products/cart')
            } else { //otherwise push item to array
            Cart.findByIdAndUpdate(foundCart._id, { $push: { cartItems: newItem } }, {new: true}, (err, foundItem) => {
              if (err) {
                res.status(400).json(err)
              } else {
                res.status(200).redirect('/products/cart')
              }
            })
            
          }
          }
          else { //if there's no cart, create one
            Cart.create({ cartItems: [newItem] }, (err, newItem) => {
              if (err) {
                res.status(400).json(err)
              } else {
                res.status(200).redirect('/products/cart')
              }
            })
          }
        }
      })
    }
  })
}






    
const showCart = (req, res) => {
  Cart.find({}, (err, foundCart) => {
    if(err) {
      res.status(400).json(err)
    } else {
      res.status(200).render('Cart', {cart: foundCart})
    }
  })
}

const showItem = (req, res) => {
  Item.findById(req.params.id, (err, foundItem) => {
    if(err) {
      res.status(400).json(err)
    } else {
      res.status(200).render('Show', {store: foundItem})
    }
  })
}

const deleteItem = (req, res) => {
  Item.findByIdAndDelete(req.params.id, (err, deletedItem) => {
    if(err) {
      res.status(400).json(err)
    } else {
      console.log('deleted ' + deletedItem)
      res.status(200).redirect('/products')
    }
  })
}

const editItem = (req, res) => {
  Item.findById(req.params.id, (err, foundItem) => {
    if (err) {
        res.status(400).json(err)
    } else {
        res.status(200).render('Edit', { item: foundItem })
    }
  })
}

const updateItem = (req, res) => {
Item.findByIdAndUpdate(req.params.id, req.body, (err, foundItem) => {
  if (err) {
    res.status(400).json(err)
  } else {
    res.status(200).redirect(`/products/${req.params.id}`)
  }
})
}

const seedStarterData = (req, res) => {
  Item.deleteMany({}, (err, deletedItems) => {
      if (err) {
        res.status(400).json(err)
      } else {
          Item.create(seed.store, (err, createdItem) => {
              if (err) {
                res.status(400).json(err)
              } else {
                  console.log(createdItem)
                  res.status(200).redirect('/products')
                  console.log(createdItem)
              }
          })
      }
  })
}

const deleteCart = (req, res) => {
  Cart.deleteMany({}, (err, deletedCart) => {
    if (err) {
      res.status(400).json(err)
    } else {
        res.status(200).redirect('/products')
      }
  })
}

module.exports = {
 newItem,
 createItem,
 storeIndex,
 showItem,
 deleteItem,
 editItem,
 updateItem,
 seedStarterData,
 showCredits,
 buyItem,
 deleteCart,
 showCart,
}