const express = require('express');
const router  = express.Router();
const app = express();

module.exports = (db) => {

router.get("/", function(req, res) {
  const templateVars = {};
  const comm = `SELECT * FROM menus`;

  db.query(comm)
    .then(data => {
     const menus = data.rows;
    templateVars.result = data.rows;
    templateVars.fields = data.fields;
   // templateVars = { data };
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

router.get("/:id", function(req, res) {
  const templateVars = {};
  let id = req.params.id;
    const params = [id];
  const comm = `SELECT menus.* WHERE id = $1;`;


  db.query(comm, params)
    .then(data => {
      templateVars.result = data.rows;
     templateVars.fields = data.fields;
     res.render('menus', templateVars);
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

