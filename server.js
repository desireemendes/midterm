// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const app = express();
const morgan = require("morgan");

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

const cookieSession = require('cookie-session')
const bodyParser = require('body-parser');


app.use(cookieSession({
  name: 'session',
  keys: ['you-cant-guess', 'my-top-secret-keys-321']
}));


// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("./routes/users");
const widgetsRoutes = require("./routes/widgets");


const customers = require("./routes/customers");
const customersRoutes = require("./routes/customers");
const menus = require("./routes/menus");
const orders = require("./routes/orders");
const restaurantRoute = require("./routes/restaurant");
const twilioRoute = require("./routes/twilio")




// Mount all resource routes
// Note: Feel free to replace the example routes below with your own

app.use("/api/users", customersRoutes(db));
app.use("/api/widgets", widgetsRoutes(db));
app.use("/api/customers", customers(db));
app.use("/login", customers(db));
app.use("/menu", menus(db));
app.use("/restaurant", restaurantRoute(db));
app.use("/order", orders(db));
app.use("/twilio", twilioRoute(db));



// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).


app.get("/", (req, res) => {
  res.render("index");
});
app.get("/cart", (req, res) => {
  res.render("cart");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT} 😎😎`);
});


