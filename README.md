# Merlin's Magic Shop

## Technology Used

Languages: JavaScript with Node.js and React; CSS3
Database: MongoDB 

## To Install
 * You will need the following Node.js modules: express, request, express-react-views, react, react-dom, mongoose, mongoose dotenv, method-override
 * You will need to create an .env file with your port number and a connection string for MongoDB

## Not Yet Implemented
 * Image Upload
 * Shopping Cart
 * User Authentication
 
## RESTful Routes

| URL |	HTTP | Verb	 | Action |	Notes |
| --- | --- | --- | --- | --- |
| /products/ | GET | index | INDEX | when a user types localhost:3000/products in browser this route shows a list or index of all products |
| /products/new |	GET |	new |	NEW | when a user types localhost:3000/products/new in the browser this route shows the user a form to create a NEW product |
| /products/:id	| DELETE| destroy |	DELETE | initiates a delete request through a form submission with action = http://localhost:3000/products/:idOfProductand allows the application the ability to delete a product |
| /products/:id	| PUT |	update	| UPDATE | initiates a put request through a form submission with action = http://localhost:3000/products/:idOfProductand allows the application the ability to Update data about a product |
| /products |	POST |	create |	CREATE | initiates a post request through a form submission with action = http://localhost:3000/products/ and allows the application the ability to create a product |
| /products/:id/edit	| GET |	edit |	EDIT | when a user types localhost:3000/products/:idOfProduct/edit in the browser, shows the user a form to edit a product |
| /products/:id |	GET |	show |	SHOW | when a user types localhost:3000/products/:idOfProduct shows the user an individual product in the browser |

