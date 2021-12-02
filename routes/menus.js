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

  return router;
};
