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
                  {this.props.children}
              </body>
          </html>
      )
  }
}

module.exports = DefaultLayout