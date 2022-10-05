const React = require('react');
const DefaultLayout = require('./layouts/DefaultLayout')

class Cart extends React.Component {
    render() {

      let { cart } = this.props
 
      console.log(cart[0].cartItems)
     

        return (
            <DefaultLayout>
              <section className="show-item">
                <div className="text">
                  <h2>Shopping Cart</h2>
                  <ul id="shopping-cart-list">
                  {cart[0].cartItems.map((item) => {
                    return (
                      <li key={item._id}>  
                        Item: {item.product} Price: {item.price} Quantity: {item.quantity} 
                      </li>
                        )
                    })}
                    </ul>
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