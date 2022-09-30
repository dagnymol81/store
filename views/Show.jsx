const React = require('react')

class Show extends React.Component {
  render() {
 
    const { name, quantity, description, price, _id } = this.props.store

    return (
      <div>
        <h1>{name}</h1>
        <p className="show">
          {name}
        </p>
        <p>
          {quantity}
        </p>
        <p>
          {description}
        </p>
        <p>
          {price}
        </p>
        <button>
          <a href={`/store/${_id}/edit`}>Edit</a>
        </button>

      <form action={`/store/${_id}?_method=DELETE`} method='POST'>
        <input type="submit" value="Delete"></input>
      </form>

        <nav>
          <a href="/store">Back</a>
        </nav>
      </div>
    );
  }
}

module.exports = Show