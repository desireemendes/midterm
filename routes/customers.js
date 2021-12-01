const express = require('express');
const router  = express.Router();
// const bcrypt = require(bcrypt);
const app = express();


module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM customers;`)
      .then(data => {
        // const customers = data.rows;
        // res.json({ customers });
         res.render('login');
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });


// To Login Page
router.get('/login', (req, res) => {

const templateVars = { customerId: null }
  res.render('login', templateVars);
});

router.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query(`SELECT id, name, email, password FROM customers WHERE email = $1;`, [email])
  .then(data => {
    const id = data.rows[0].id
    const pass = data.rows[0].password;
  })
  .catch(err => {
    res.status(500)
    .json({ error: err.message})
  })
})

router.post('/logout', (req, res) => {
  req.session = null;
  res.redirect('/')
});

return router;
};












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

//     router.post('/login', (req, res) => {
//       // const {email, password} = req.body;
//       // console.log(req.body);
//       login(email, password)
//         .then(customer => {
//           if (!customer) {
//             res.send({error: "error"});
//             return;
//           }
//           req.session.customerId = customer.id;
//           res.send({customer: {name: customer.name, email: customer.email, id: customer.id}});
//         })
//         .catch(e => res.send(e));
//     });
