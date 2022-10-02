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
                <h1>Merlin's Magic Shop</h1>
               <h2>Since 540 AD</h2>
              </header>
              <div id="backdrop"></div>
                  {this.props.children}
              <footer>
                <a href="/store">Back</a>
                <a href="Credits">Credits</a>
                </footer>
              </body>
          </html>
      )
  }
}

module.exports = DefaultLayout