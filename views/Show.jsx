const React = require('react')
const DefaultLayout = require('./layouts/DefaultLayout')
class Show extends React.Component {
  render() {
 
    const { name, quantity, description, image, price, _id } = this.props.store

    return (
      <DefaultLayout>
        <section class="show-item">
          <div class="text">
          <h2>{name}</h2>
        <p>
          Quantity: {quantity}
        </p>
        <p>
          {description}
        </p>
        <p>
         Price: ${price}
        </p>

      <form action={`/store/${_id}?_method=DELETE`} method='POST'>
      <button>
          <a href={`/store/${_id}/edit`}>Edit</a>
        </button>
        <input type="submit" value="Delete"></input>
      </form>

          </div>
        
          <div class="img">
            <img src={`/images/${image}`} />
          </div>

        </section>
      </DefaultLayout>
    );
  }
}

module.exports = Show