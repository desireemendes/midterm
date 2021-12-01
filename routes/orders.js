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

return router;


 };

//  app.get("/orders", (req,res) => {
//   res.render("orders");
//});


//////partial////////////////////////
// // const pool = require('./server');

// // const getOrderItems = () => {
// //   return pool
// //     .query('SELECT * FROM orders;')
// //     .then(res => res.rows)
// //     .catch(err => err.messages);
// // };

// // // Get order items by order id
// // const getOrderItemsById = (id) => {
// //   const values = [ id ];

// //   let sqlQuery = `SELECT orders.*, menus.name, menus.price`;
// //   sqlQuery += `FROM orders`;
// //   sqlQuery += `JOIN menus ON menus.id = orders.menu_id `;
// //   sqlQuery += `WHERE orders.id = $1;`;

// //   return pool
// //     .query(sqlQuery, values)
// //     .then(res => res.rows)
// //     .catch(err => err.messages);
// // };




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
