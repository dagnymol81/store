const React = require('react');
const DefaultLayout = require('./layouts/DefaultLayout')
class Edit extends React.Component {
    render() {

        let { item } = this.props

        return (
            <DefaultLayout>
              <section className="show-item">
                <div className="text">
                <h2>Edit Item: {item.name}</h2>
                <form className="item-form" action={`/store/${item._id}?_method=PUT`} method="POST">
                    
                    <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" defaultValue={item.name}/>
                    </div>

                    <div>
                    <label htmlFor="quantity">Quantity:</label>
                    <input type="number" name="quantity" id="quantity"  defaultValue={item.quantity}/>
                    </div>

                    <div id="desc-box">
                    <label htmlFor="description">Description:</label>
                    <textarea rows="3" cols="40" name="description" id="description" defaultValue={item.description}></textarea>
                    </div>

                    <div>
                    <label htmlFor="price">Price:</label>
                    <input type="number" name="price" id="price" defaultValue={item.price}/>
                    </div>
                    

                    <input type="submit" />


                </form>
                </div>
                <div className="img">
                  <img src={`/images/${item.image}`} />
                </div>
                </section>

            </DefaultLayout>
        )
    }
}

module.exports = Edit;