const React = require('react')
const DefaultLayout = require('./layouts/DefaultLayout')

class Show extends React.Component {


  inStock() {
      if (this.props.store.quantity > 0) {
        return true
      }
  }

  render() {

    let isInStock = false
    const { name, quantity, description, image, price, _id } = this.props.store

    if (quantity > 0) {
      isInStock = true
    }
  
    return (

      <DefaultLayout>
        <section className="show-item">
          <div className="text">
          <h2>{name}</h2>
        <p>
          Quantity: {isInStock ? quantity : 'Out of Stock'}
        </p>
        <p>
          {description}
        </p>
        <p>
         Price: ${price}
        </p>

      <button className="button">
          <a href={`/products/${_id}/edit`}>Edit</a>
      </button>
       
      {isInStock ? <button className='button'>Add to Cart</button> : 'Out of Stock'}

      
      <form action={`/products/${_id}?_method=DELETE`} method='POST'>
      <button type="submit" value="Delete" className="button">Delete</button>
      </form>

          </div>
        
          <div className="img">
            <img src={`/images/${image}`} />
          </div>

        </section>
      </DefaultLayout>
    );
  }
}

module.exports = Show