const React = require('react')
const DefaultLayout = require('./layouts/DefaultLayout')
class Index extends React.Component {

  render() {

    const { store } = this.props
  
    return (
      <DefaultLayout> 
        <section id="store-index">
          {store.map((item) => {
            return (
              <div key={item._id} className="item-listing">
                  <h2>{item.name}</h2>
                <p>
                <a href={`/products/${item._id}`}><img src={`/images/${item.image}`} /></a>
                </p>
                <p>
                  {item.description}
                </p>
              </div>
            )
          })}
          <div className="item-listing">
          <h2>Add an Item</h2>
          <a href="/products/new"><img src="/images/merchant.png" /></a>
          <p>
          Some people call this junk. Me? I call it treasure.
          </p>
          </div>
        </section>
        </DefaultLayout>
    )
  }
}

module.exports = Index