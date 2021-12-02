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
        // console.log("data: ", menu);
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
  const {menu_id,quantity, cost_item} = req.body;
  console.log(req.body);
  const params = [customer_id, menu_id,quantity, cost_item];
  console.log(params);

  // const comm = `INSERT INTO orders
  // (customer_id, menu_id, quantity, cost_item) VALUES ($1, $2, $3, $4)
  //RETURNING*;`;

  const comm = `INSERT INTO orders (customer_id, menu_id, quantity, cost_item)
  VALUES (10, 2, 2, 450.00) RETURNING*;`;


/////Confused////
  db.query(comm)
    .then(data => {
    //   templateVars.result = data.rows;
    //  templateVars.fields = data.fields;
    //  res.render('orders', templateVars);
    res.redirect('/menu');
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});



  return router;
};
