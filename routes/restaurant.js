const express = require('express');
const router  = express.Router();
module.exports = (db) => {

  router.get("/", (req, res) => {


    const query = `
    `
    db.query(query)
    .then(data => {
      const orders = {}
        const templateVars = { orders };
        res.render("restaurant", templateVars)
      })
      .catch(err => {
        res.status(500)
      });
  });

  return router;
};
