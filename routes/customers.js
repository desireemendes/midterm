const express = require('express');
const router  = express.Router();
const app = express();


module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM customers;`)
      .then(data => {
        const customers = data.rows;
        res.json({ customers });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};


