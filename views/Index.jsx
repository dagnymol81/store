const React = require('react')
class Index extends React.Component {

  render() {

    const { store } = this.props
  
    return (
      <div>
        <h1>Index Page</h1>
        <ul id="store-index">
          {store.map((item) => {
            return (
              <li key={item._id}>
                <a href={`/store/${item._id}`}>{item.name}</a>
              </li>
            )
          })}
        </ul>
        <a href="/store/new">Add a new item</a>
        </div>
    )
  }
}

module.exports = Index