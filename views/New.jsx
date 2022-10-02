const React = require('react')
const DefaultLayout = require('./layouts/DefaultLayout')

class New extends React.Component {
  render() {
    return(
      <DefaultLayout>
        <section className="show-item">
          <div id="text">
        <h2>Add a New Item</h2>
        <form action="/store" method="POST" className="item-form">

        <div>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" />
        </div>

        <div>
        <label htmlFor="quantity">Quantity:</label>
        <input type="number" name="quantity" id="quantity" />
        </div>

        <div>
        <label htmlFor="description">Description:</label>
        <input type="text" name="description" id="description" />
        </div>

        <div>
        <label htmlFor="price">Price:</label>
        <input type="number" name="price" id="price" />
        </div>

        <button type="submit">Create Item</button>

        </form>
        </div>
        <div id="img">
        <img src={`/images/merchant.png`} />
        </div>
        </section>
      </DefaultLayout>
    ) 
  }
}

module.exports = New