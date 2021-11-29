const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  // GET route for menu items
  router.get("/", (req, res) => {
    let query = `
    SELECT * FROM menus
    WHERE in_stock = TRUE`;
    db.query(query)
      .then(data => {
        const menu = data.rows;
        res.json({ menu });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  return router;
};
