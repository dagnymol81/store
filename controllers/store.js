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
  Item.findByIdAndUpdate(req.params.id, {$inc: { quantity: -1 } }, (err, foundItem) => {
    if (err) {
        res.status(400).json(err)
    } else {
      Cart.findOne({}, (err, foundCart) => {
        if (err) {
          res.status(400).json(err)
        } else {

          let itemName = foundItem.name
          let price = foundItem.price
          let newItem =  { product: itemName, price: price } 

          if (foundCart) {
            let itemExists = foundCart.cartItems.find(element => element.product == itemName)
            console.log(itemExists)
            if (itemExists) {

              res.send('item exists')
              
          } else {
            Cart.findByIdAndUpdate(foundCart._id, { $push: { cartItems: newItem } }, {new: true}, (err, foundItem) => {
              if (err) {
                res.status(400).json(err)
              } 
            })
            res.status(200).redirect('/products/')
          }
          }

          else {
            Cart.create({ cartItems: [newItem] }, (err, newItem) => {
              if (err) {
                res.status(400).json(err)
              } else {
                res.status(200).redirect('/products')
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

const newCart = (req, res) => {
  Cart.deleteMany({}, (err, deletedCart) => {
    if (err) {
      res.status(400).json(err)
    } else {
        Cart.create(seed.cart, (err, newCart) => {
            if (err) {
              res.status(400).json(err)
            } else {
                console.log(newCart)
                res.status(200).redirect('/products')
            }
        })
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
 newCart,
 showCart,
}