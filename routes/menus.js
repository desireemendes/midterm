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
/////////partial function//////////
//const pool = require('./db');

// const getMenuItems = () => {
//   return pool
//     .query('SELECT * FROM menus;')
//     .then(res => res.rows)
//     .catch(err => err.messages);
// };


// const getMenuItemsById = (id) => {
//   const values = [ id ];
//   return pool
//     .query('SELECT * FROM menus WHERE id = $1', values)
//     .then(res => res.rows[0])
//     .catch(err => err.messages);
// };

// module.exports = {
//   getMenuItems,
//   getMenuItemsById
// };
