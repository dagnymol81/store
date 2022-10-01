const React = require('react')
const DefaultLayout = require('./layouts/DefaultLayout')
class Index extends React.Component {

  render() {

    const { store } = this.props
  
    return (
      <DefaultLayout> 
        <h1>Merlin's Magic Shop</h1>
        <section id="store-index">
          {store.map((item) => {
            return (
              <div key={item._id} className="item-listing">
                <a href={`/store/${item._id}`}>{item.name}</a>
                <p>
                  {item.description}
                </p>
              </div>
            )
          })}
        </section>
        <a href="/store/new">Add a new item</a>
        </DefaultLayout>
    )
  }
}

module.exports = Index