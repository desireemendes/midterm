const express = require('express');
const router  = express.Router();
const app = express();

module.exports = (db) => {

router.get("/", function(req, res) {

  const comm = `SELECT * FROM orders`;

  db.query(comm)
    .then(data => {
      const orders
   = data.rows;
      //console.log(orders);
      res.json({ orders
   });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

//////add item to orderlist////////////


router.get("/:id", function(req, res) {
  const comm = `SELECT orders.*, menus.name, menus.price FROM orders JOIN menus ON menus.id = orders.menu_id WHERE orders.id = $1;`;


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

//  app.get("/orders", (req,res) => {
//   res.render("orders");
//});


//////partial////////////////////////



// // Function to add new orders
// const addNewOrder = (order) => {

//   const values = order;

//   let sqlQuery = `INSERT INTO orders`;
//   sqlQuery += `(customer_id, menu_id,quantity, cost_item, order_time) `;
//   sqlQuery += `VALUES ($1, $2, $3, $4) RETURNING*;`;

//   return pool
//     .query(sqlQuery, order)
//     .then((res) => {
//       return res.rows[0];
//     })
//     .catch(err => console.log(err.messages));
// };

// module.exports = {
//   getOrderItems,
//   getOrderItemsById, addNewOrder
// };
