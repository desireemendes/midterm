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
    const query = `
    SELECT status.*, customers.name, customers.phone_number FROM status, customers;
    `
    db.query(query)
      .then(data => {

        const templateVars = {};
        templateVars.result = data.rows;
        templateVars.fields = data.fields;
        res.render("restaurant", templateVars)
      })
      .catch(err => {
        res.status(500)
      });
  });

  ////for new route/////

  router.post("/", (req, res) => {
    const query = `
    SELECT status.*, customers.name, customers.phone_number FROM status, customers;
    `
    db.query(query)
      .then(data => {

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
