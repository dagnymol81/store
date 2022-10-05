# Merlin's Magic Shop

![Index Page](/public/images/index-page.png)

## Technology Used

Languages: JavaScript with Node.js and React; CSS3
Database: MongoDB 

## To Install
 * You will need the following Node.js modules: express, request, express-react-views, react, react-dom, mongoose, mongoose dotenv, method-override
 * You will need to create an .env file with your port number and a connection string for MongoDB
 
## To Use
* Merlin's Magic Shop is deployed as a Cyclic app at: https://sleepy-stole-calf.cyclic.app/

## Not Yet Implemented
 * Image Upload
 * User Authentication
 
 ## License
 
 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
 
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

## Screenshots

![Edit Item](/public/images/edit-item.png)

![New Item](/public/images/new-item.png)

![Show Item](/public/images/show-item.png)

![Shopping Cart](/public/images/cart.png)

### Image Credits
 * <a href="https://www.si.edu/object/sand:nmnheducation_11038389">Pocket Sand</a>
 * <a href="https://commons.wikimedia.org/wiki/File:T._Ray,_Pole_Vault,_from_World%27s_Champions,_Second_Series_(N43)_for_Allen_%26_Ginter_Cigarettes_MET_DP839301.jpg">Eleven Foot Pole</a>
 * <a href="https://commons.wikimedia.org/wiki/File:Skull_Crowned_with_Snakes_and_Flowers,_The_Duchess_of_Malfi_MET_DP805749.jpg
">Head of Vecna</a>
 * <a href="https://upload.wikimedia.org/wikipedia/commons/8/8f/Books-book-pages-read-literature-159866.jpg">To Serve Man</a>
 * <a href="https://commons.wikimedia.org/wiki/File:Flickr_-_%E2%80%A6trialsanderrors_-_Kellar_and_his_servants,_magician_poster,_ca._1894.jpg">Book of Summoning</a> 
 * <a href="https://commons.wikimedia.org/wiki/File:Tarot_cards_-_3_card_spread.jpg ">Deck of a Few Things</a>
 * <a href="https://commons.wikimedia.org/wiki/File:Raczka4.jpg">Ring of Invisbility</a>
 * <a href="https://commons.wikimedia.org/wiki/File:Merchants_and_countrymen_-_KONB11-ZAC-488-NIPPON-II-TAB-VIII-KOOPLIEDEN.jpg">Merchant</a>
 * <a href="https://commons.wikimedia.org/wiki/File:Eilean_Donan_castle_-_95mm.jpg">Castle image by Eilean Donan</a>

### Fonts

<a href="https://fonts.google.com/specimen/Dancing+Script">Dancing Script</a> by  Impallari Type via <a href="https://fonts.google.com/">Google Fonts</a>
