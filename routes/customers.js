const express = require('express');
const router  = express.Router();
const app = express();


module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM customers;`)
      .then(data => {
        // const customers = data.rows;
        // res.json({ customers });
        res.render('login')
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};

// To Login Page
router.get('/login', (req, res) => {
//  const templateVars = {customerId: req.session.customerId}
// if (templateVars.customerId) {
//   return res.redirect('/')
// }
// res.render('login')

const templateVars = { };
  res.render('login', templateVars);
});

router.post('/login', (req, res) => {
  req.session.customerId = customerId
})
// router.post('/login', (req, res) => {
//   const email = req.body.email;
//   const password = req.body.password;

//   db.query(`SELECT id, name, email, password FROM customers WHERE email = $1;`, [email])
//   .then(data => {
//     const id = data.rows[0].id
//     const pass = data.rows[0].password;
//   })
//   .catch(err => {
//     res.status(500)
//     .json({ error: err.message})
//   })
// })

router.post('/logout', (req, res) => {
  req.session = null;
  res.render('login')
})












// module.exports = (db) => {
//   router.get("/", (req, res) => {
//     db.query(`SELECT * FROM customers;`)
//       .then(data => {
//         const customers = data.rows;
//         res.json({ customers });
//       })
//       .catch(err => {
//         res
//           .status(500)
//           .json({ error: err.message });
//       });
//   });
//   return router;
// };

// const login =  function(email, password) {
//       return database.getCustomerWithEmail(email)
//       .then(customer => {
//         // console.log(user);
//         if (bcrypt.compareSync(password, customer.password)) {
//           return customer;
//         }
//         return null;
//       });
//     }
//     exports.login = login;

