const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    let query = `
    SELECT * FROM orders
    `;
    db.query(query)
      .then(data => {
        const order = data.rows;
        const templateVars = { menu }
        // res.json({ menu });
        res.render('cart', templateVars);

      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
