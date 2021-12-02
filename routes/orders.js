const express = require('express');
const router  = express.Router();
const app = express();
const cookieSession = require('cookie-session');
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}));

module.exports = (db) => {

router.get("/", function(req, res) {
  const templateVars = {};
  // let id = req.body;
  // console.log("id is",id);
  // const params = [id];
  //const comm = `SELECT * FROM orders`;
   const comm = `SELECT orders.*, menus.name, menus.price FROM orders JOIN menus ON menus.id = orders.menu_id;`;//WHERE orders.id = 5;`;

  db.query(comm)
    .then(data => {
      templateVars.result = data.rows;
     templateVars.fields = data.fields;
     res.render('orders', templateVars);
  //     const orders = data.rows;

  //     res.json({ orders
  //  });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

router.post("/", function(req, res) {
  const templateVars = {};
let id = req.session.id;
   console.log(req.body);
     const params = [id];
  //const comm = `SELECT * FROM orders`;
   const comm = `SELECT orders.*, menus.name, menus.price FROM orders JOIN menus ON menus.id = orders.menu_id WHERE orders.id = $1;`;

  db.query(comm, params)
    .then(data => {
      templateVars.result = data.rows;
     templateVars.fields = data.fields;
     res.render('orders', templateVars);
  //     const orders = data.rows;

  //     res.json({ orders
  //  });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

//////add item to orderlist////////////


router.get("/:id", function(req, res) {
  const templateVars = {};
  let id = req.params.id;
  console.log(">>>>>>>>>",req.params.id);
    const params = [id];
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


/////insert new order to the list//////
router.post("/:id", function(req, res) {
  const templateVars = {};
  const customer_id = 1;
  const order_time = new Date();
  const {menu_id,quantity, cost_item} = req.body;
  console.log(req.body);
  const params = [customer_id, menu_id,quantity, cost_item, order_time];

  const comm = `INSERT INTO orders
  (customer_id, menu_id,quantity, cost_item, order_time) VALUES ($1, $2, $3, $4, $5) RETURNING*;`;

  db.query(comm, params)
    .then(data => {
     templateVars.result = data.rows;
     templateVars.fields = data.fields;
     res.render('orders', templateVars);
    res.redirect('/');
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});


return router;


 };
