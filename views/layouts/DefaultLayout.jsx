const React = require('react')

class DefaultLayout extends React.Component {
  render() {
      return (
          <html>
              <head>
                <title>Merlin's Magic Shop</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Dancing+Script"></link>
                <link rel="stylesheet" href="/css/styles.css"></link>
              </head>
              <body>
              <header>
                <h1><a href="/products">Merlin's Magic Shop</a></h1>
               <h2>Since 540 AD</h2>
              </header>
              <div id="backdrop"></div>
                  {this.props.children}
              <footer>
                <div>
                <a href="/products">Home Page</a> | <a href="/products/cart">Shopping Cart</a> 
                </div> 
                <a href="/products/credits">Credits</a>
                </footer>
              </body>
          </html>
      )
  }
}

module.exports = DefaultLayout