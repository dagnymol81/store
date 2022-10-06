const React = require('react');
const DefaultLayout = require('./layouts/DefaultLayout')

class Cart extends React.Component {
    render() {

      let { cart } = this.props

      return (
            <DefaultLayout>
              <section className="show-item">
                <div className="text">
                  <h2>Shopping Cart</h2>
                  <ul id="shopping-cart-list">
                  {cart[0] ? cart[0].cartItems.map((item) => {
                    return (
                      <li key={item._id}>  
                        {item.product} <strong>Price:</strong> {item.price} <strong>Quantity:</strong> {item.quantity} <strong>Total:</strong> {item.price * item.quantity}
                      </li>
                        )
                    }) : <p>There are no items in your cart!</p>}
                    </ul>

                    {cart[0] ? <button><a href="/products/delete-cart">Delete Cart</a></button> : ''}

                </div>
                <div className="img">
                  {/* <img src={`/images/${item.image}`} /> */}
                </div>
                </section>

            </DefaultLayout>
        )
    }
}

module.exports = Cart;