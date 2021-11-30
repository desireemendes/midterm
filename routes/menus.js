const express = require('express');
const router  = express.Router();
const app = express();

module.exports = (db) => {

router.get("/", function(req, res) {
  const templateVars = {};
  const comm = `SELECT * FROM menus`;

  db.query(comm)
    .then(data => {
     // const menus = data.rows;
     templateVars.result = data.rows;
     templateVars.fields = data.fields;
     res.render('menus', templateVars);
      //console.log(menus);
      //res.json({ menus });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

return router;


 };

 app.get("/menus", (req,res) => {
  res.render("menus");
});
