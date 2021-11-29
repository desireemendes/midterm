/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM users;`)
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};



// const bcrypt = require('bcrypt');

// module.exports = function(router, database) {

//   // Create a new user
//   router.post('/', (req, res) => {
//     const customer = req.body;
//     customer.password = bcrypt.hashSync(customer.password, 12);
//     database.addUser(customer)
//     .then(customer => {
//       if (!customer) {
//         res.send({error: "error"});
//         return;
//       }
//       req.session.userId = customer.id;
//       res.send("🤗");
//     })
//     .catch(e => res.send(e));
//   });

//   /**
//    * Check if a user exists with a given username and password
//    * @param {String} email
//    * @param {String} password encrypted
//    */
//   const login =  function(email, password) {
//     // console.log('email & password: ', email, password);
//     return database.getCustomerWithEmail(email)
//     .then(customer => {
//       // console.log(user);
//       if (bcrypt.compareSync(password, customer.password)) {
//         return customer;
//       }
//       return null;
//     });
//   }
//   exports.login = login;

//   router.post('/login', (req, res) => {
//     // const {email, password} = req.body;
//     // console.log(req.body);
//     login(email, password)
//       .then(customer => {
//         if (!customer) {
//           res.send({error: "error"});
//           return;
//         }
//         req.session.customerId = customer.id;
//         res.send({customer: {name: customer.name, email: customer.email, id: customer.id}});
//       })
//       .catch(e => res.send(e));
//   });

//   router.post('/logout', (req, res) => {
//     req.session.customerId = null;
//     res.send({});
//   });

//   router.get("/me", (req, res) => {
//     const customerId = req.session.customerId;
//     if (!customerId) {
//       res.send({message: "not logged in"});
//       return;
//     }

//     database.getCustomerWithId(customerId)
//       .then(customers => {
//         if (!customers) {
//           res.send({error: "no customer with that id"});
//           return;
//         }

//         res.send({customers: {name: customers.name, email: customers.email, id: customers.id}});
//       })
//       .catch(e => res.send(e));
//   });

//   return router;
// }
