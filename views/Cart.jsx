const React = require('react');
const DefaultLayout = require('./layouts/DefaultLayout')

class Cart extends React.Component {
    render() {

        let { item } = this.props

        return (
            <DefaultLayout>
              <section className="show-item">
                <div className="text">
                  <h2>Shopping Cart</h2>
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