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
      console.log(orders
    );
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

 app.get("/orders", (req,res) => {
  res.render("orders");
});

