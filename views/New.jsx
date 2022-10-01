const React = require('react')
const DefaultLayout = require('./layouts/DefaultLayout')

class New extends React.Component {
  render() {
    return(
      <div>
        <h1>New Page</h1>
        <form action="/store" method="POST">

        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" />

        <label htmlFor="quantity">Quantity:</label>
        <input type="number" name="quantity" id="quantity" />
                  
        <label htmlFor="description">Description:</label>
        <input type="text" name="description" id="description" />

        <label htmlFor="price">Price:</label>
        <input type="number" name="price" id="price" />

        <button type="submit">Create Item</button>

        </form>
      </div>
    ) 
  }
}

module.exports = New