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

// router.get("/", function(req, res) {
//   const comm = `SELECT * FROM menus`;

//   db.query(comm)
//     .then(data => {
//       const menus = data.rows;
//       console.log(menus);
//       res.json({ menus });
//     })
//     .catch(err => {
//       res
//         .status(500)
//         .json({ error: err.message });
//     });
// });

// return router;


//  };

//  app.get("/menus", (req,res) => {
//   res.render("menus");
// });
