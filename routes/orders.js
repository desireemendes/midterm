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
   const comm = `SELECT orders.*, menus.name, menus.price
   FROM orders JOIN menus ON menus.id = orders.menu_id;`;//WHERE menus.id = 5;`;

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
   const comm = `SELECT orders.*, menus.name, menus.price FROM orders JOIN menus ON menus.id = orders.menu_id WHERE orders.id = ${id};`;

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

//////add item to orderlist////////////


router.get("/:id", function(req, res) {
  const templateVars = {};
  let id = req.params.id;
  //
  console.log(">>>>>>>>>",req);
    const params = [id];
  const comm = `SELECT orders.*, menus.name, menus.price FROM orders JOIN menus ON menus.id = orders.menu_id WHERE orders.id = ${id};`;


  db.query(comm)
    .then(data => {
      templateVars.result = data.rows[0];
     templateVars.fields = data.fields;
     console.log(data.rows);
     res.json(templateVars);
    // res.render('orders', templateVars);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});


router.post("/:id", function(req, res) {
  const templateVars = {};
  let id = req.params.id;
  console.log(">>>>>>>>>",req.params.id);
   // const params = [id];
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
