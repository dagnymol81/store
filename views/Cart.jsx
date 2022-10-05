const React = require('react');
const DefaultLayout = require('./layouts/DefaultLayout')

class Cart extends React.Component {
    render() {

        let { item } = this.props

        console.log(item.cartItems[0].product)

        return (
            <DefaultLayout>
              <section className="show-item">
                <div className="text">
                  <h2>Shopping Cart</h2>
                  <ul id="shopping-cart-list">
                  {item.cartItems.map((item) => {
                    return (
                      <li key={item._id}>  
                        {item.product} {item.price}
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