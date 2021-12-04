const express = require('express');
const router  = express.Router();
const app = express();
const cookieSession = require('cookie-session');
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}));

module.exports = (db) => {
//get route for orders
router.get("/", function(req, res) {
  const templateVars = {};
   const comm = `SELECT orders.*, menus.name, menus.price
   FROM orders JOIN menus ON menus.id = orders.menu_id;`;

  db.query(comm)
    .then(data => {
      templateVars.result = data.rows;
     templateVars.fields = data.fields;

     res.render('orders', templateVars);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

router.post("/", function(req, res) {
  const templateVars = {};
  let id = req.params.id;

   const comm = `SELECT orders.*, menus.name, menus.price FROM orders JOIN menus ON menus.id = orders.menu_id WHERE orders.id = ${id};`;

  db.query(comm)
    .then(data => {
      templateVars.result = data.rows;
     templateVars.fields = data.fields;
     res.render('orders', templateVars);

    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

//////select item to orderlist////////////


router.get("/:id", function(req, res) {
  const templateVars = {};
  let id = req.params.id;
    const params = [id];
  const comm = `SELECT orders.*, menus.name, menus.price FROM orders JOIN menus ON menus.id = orders.menu_id WHERE orders.id = ${id};`;


  db.query(comm)
    .then(data => {
      templateVars.result = data.rows[0];
     templateVars.fields = data.fields;
     console.log(data.rows);
     res.json(templateVars);

    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

//post route for order
router.post("/:id", function(req, res) {
  const templateVars = {};
  let id = req.params.id;
  const comm = `SELECT orders.*, menus.name, menus.price FROM orders JOIN menus ON menus.id = orders.menu_id WHERE orders.id = ${id};`;


  db.query(comm)
    .then(data => {
      templateVars.result = data.rows;
     templateVars.fields = data.fields;
     res.render('orders', templateVars);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});



return router;


 };
