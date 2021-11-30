const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  // GET route for menu items
  router.get("/", (req, res) => {
    let query = `
    SELECT * FROM menus
    `;
    db.query(query)
      .then(data => {
        const menu = data.rows;
        const templateVars = { menu }
        // res.json({ menu });
        res.render('menu', templateVars);

      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  return router;
};

