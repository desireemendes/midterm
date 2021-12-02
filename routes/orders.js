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
  // const templateVars = {};
   const comm = `SELECT orders.*, menus.name, menus.price
   FROM orders
   JOIN menus ON menus.id = orders.menu_id;
   `;//WHERE orders.id = 5;`;

  db.query(comm)
    .then(data => {
      // console.log("data is :", data.rows);
      // console.log("dataField is :", data.fields);

      const templateVars = {
        results: data.row,
        fields: data.fields
      }
    //   templateVars.result = data.rows;
    //  templateVars.fields = data.fields;
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
<<<<<<< HEAD
  let id = req.session.id;
   console.log(req.body);
     const params = [id];
=======
let id = req.params.id;
  // console.log(req.body);
    // const params = [id];
>>>>>>> a57d1860bcf2de6e08d48cee49cfad54ce677767
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
  // const templateVars = {};
  let id = req.params.id;
  console.log(">>>>>>>>>",id);
    // const params = [id];
  const comm = `
  SELECT orders.*, menus.name, menus.price
  FROM orders
  JOIN menus ON menus.id = orders.menu_id
  WHERE orders.id = ${id};
  `;
  // JOIN menus ON menus.id = menu_id



  db.query(comm)

    .then(data => {
      console.log("data is :", data.rows);

      const templateVars = {
        results: data.rows,
        fields: data.fields
      }
      // console.log("dataField is :", data.fields);
    //   templateVars.result = data.rows;
    //  templateVars.fields = data.fields;
     res.render('orders', templateVars);
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
