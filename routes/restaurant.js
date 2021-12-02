const express = require('express');
const router = express.Router();
const app = express();
const cookieSession = require('cookie-session');
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}));

module.exports = (db) => {
  router.get("/", (req, res) => {
    // const templateVars = {};
    // let id = req.session.id;
    // console.log(req.body);
    // const params = [id];
    //query ->  select order id, date, time, food name, price, quantity, customer name + phone number
    const query = `
    SELECT status.*, customers.name, customers.phone_number FROM status, customers;
    `
    db.query(query)
      .then(data => {
        // const orders = data.rows;
        // const templateVars = { orders };
        const templateVars = {};
        templateVars.result = data.rows;
        templateVars.fields = data.fields;
        res.render("restaurant", templateVars)
      })
      .catch(err => {
        res.status(500)
      });
  });
  return router;
};
