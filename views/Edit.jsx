const React = require('react');
const DefaultLayout = require('./layouts/DefaultLayout')
class Edit extends React.Component {
    render() {

        let { item } = this.props

        return (
            <div>
                <h1>Edit Route (View)</h1>
                <form action={`/store/${item._id}?_method=PUT`} method="POST">
                    
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" defaultValue={item.name}/>

                    <label htmlFor="quantity">Quantity:</label>
                    <input type="number" name="quantity" id="quantity" defaultValue={item.quantity}/>
                  
                    <label htmlFor="description">Description:</label>
                    <input type="text" name="description" id="description" defaultValue={item.description}/>

                    <label htmlFor="price">Price:</label>
                    <input type="number" name="price" id="price" defaultValue={item.price}/>


                    <input type="submit" />
                </form>

            </div>
        )
    }
}

module.exports = Edit;