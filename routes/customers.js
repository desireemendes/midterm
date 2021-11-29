const express = require('express');
const router  = express.Router();
const bcrypt = require(bcrypt);

// To Login Page
router.get("/login", (req, res) => {
 const user = users[req.session.user_id];
 const user = req.session.user_id;
  res.render("login", { user });
});

// Check the Email and Password to Login
// router.post("/login", (req, res) => {
//  // const { email, password } = req.body;
// //  const { error } = userAlreadyExist(email, users);
//  // if (!error) {
//    // res.status(400).send(`Not an User Try again <a href ='login'> Login </a>`);
//   //} else {
//    // const user = getUserByEmail(email, users);
//     // if (!bcrypt.compareSync(password, user.password)) {
//     //   res.status(400).send("Invalid Password");
//     // }
//    // req.session.user_id = user["id"];
//     res.redirect("/urls");
//   //}
// });
















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
