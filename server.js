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

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const customersRoutes = require("./routes/users");
const widgetsRoutes = require("./routes/widgets");

// const usersRoutes = require("./routes/customers");

const apiRoutes = require("./routes/apiRoutes");
const database = require("./routes/database");
const customers = require("./routes/customers");
const menus = require("./routes/menus");
const twilioRoutes = require("./routes/twilio");
const restaurantRoutes = require("./routes/restaurant");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/api/customers", customers(db));
app.use("/api/users", customersRoutes(db));
app.use("/api/widgets", widgetsRoutes(db));
app.use("/login", customers(db));
app.use("/menu", menus(db));
app.use("/orders", orders(db))
app.use("/restaurant", restaurantRoutes(db));
app.use("/api/twilio", twilioRoutes(db));


// app.use("/api/apiRoutes", usersRoutes(db));
// app.use("/api/users", usersRoutes(db));

// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get("/", (req, res) => {
  res.render("index");
});

app.get("login", (req, res) => {
  res.render("login")
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

app.get("/menus", (req,res) => {
  res.render("menus");
});

app.get("/orders", (req,res) => {
  res.render("orders");
});
