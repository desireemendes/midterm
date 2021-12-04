const express = require('express');
const app = express();
const router = express.Router();
const cookieSession = require('cookie-session');
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}));


module.exports = (db) => {

  // GET route for menu items
  router.get("/", (req, res) => {
    let query = `
    SELECT * FROM menus;
    `;
    db.query(query)
      .then(data => {
        const menu = data.rows;
        const templateVars = { menu }
        res.render('menu', templateVars);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

// GET route for order to insert or save
  router.post("/:id", (req, res) => {
    console.log(req.params)
    const templateVars = {};
    const customer_id = 1;
    const {menu_id,quantity, cost_item} = req.params;
    console.log(req.params);
    const params = [customer_id, menu_id,quantity, cost_item];
    console.log(params);

    const query = `INSERT INTO orders (customer_id, menu_id, quantity, cost_item)
    VALUES (10, 2, 2, 450.00) RETURNING*;`;



  db.query(query)
    .then(data => {
    res.redirect('/restaurant');
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

  return router;
};
