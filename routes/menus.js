const express = require('express');
const app = express();
const router  = express.Router();
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
        // const id = data.rows[0].id;
        // req.session.id = id;
        // console.log("id>>>",req.session.id)
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


  router.post("/:id", (req, res) => {
    const templateVars = {};
  const customer_id = 1;
  const order_time = new Date();
  const {menu_id,quantity, cost_item} = req.body;
  console.log(req.body);
  const params = [customer_id, menu_id,quantity, cost_item, order_time];
  console.log(params);

  const comm = `INSERT INTO orders
  (customer_id, menu_id,quantity, cost_item, order_time) VALUES ($1, $2, $3, $4, $5) RETURNING*;`;

/////Confused////
  db.query(comm, params)
    .then(data => {
    //   templateVars.result = data.rows;
    //  templateVars.fields = data.fields;
    //  res.render('orders', templateVars);
    res.redirect('/');
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});



  return router;
};
