const express = require('express');
const router  = express.Router();
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
  let query = `
    SELECT * FROM customers;
    `;
    db.query(query)
      .then(data => {
        const customer = customers[req.session.customer_id];
        res.render("login", { customer });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });

});


// To Register Page
router.get('/register', (req, res) => {
  let query = `
    SELECT * FROM customers;
    `;
    db.query(query)
      .then(data => {

        const customer = customers[req.session.customer_id];
        res.render("register", { customer });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });

});

// Check the Email and Password to Login
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const { error } = customerAlreadyExist(email, customers);
  if (!error) {
    res.status(400).send(`Not an Customer Try again <a href ='login'> Login </a>`);
  } else {
    const customer = getUserByEmail(email, customers);
    if (!bcrypt.compareSync(password, customer.password)) {
      res.status(400).send("Invalid Password");
    }
    req.session.customer_id = customer["id"];
    res.redirect("/");
  }
});




// Create New User or Check if the User Id already Exist
app.post("/register", (req, res) => {
  const { email, password } = req.body;
  const { error } = authenticateCustomerInfo(email, password, customers);
  if (error) {
    res
      .status(400)
      .send(`${error}. Please try again :  <a href="/register"> Register </a>`);
  } else {
    const id = customer_id;
    const hashedPassword = bcrypt.hashSync(password, 10);
    customer[id] = { id: id, email: email, password: hashedPassword };
    req.session.customer_id = id;
    res.redirect("/");
  }
});


// Logout
router.post('/logout', (req, res) => {
  req.session.customer_id = null;
  res.redirect('/')
});

return router;
};











// // To Login Page
// router.get('/login', (req, res) => {
// //  const templateVars = {customerId: req.session.customerId}
// // if (templateVars.customerId) {
// //   return res.redirect('/')
// // }
// // res.render('login')

// const templateVars = { };
//   res.render('login', templateVars);
// });

// router.post('/login', (req, res) => {
//   req.session.customerId = customerId
// })
// // router.post('/login', (req, res) => {
// //   const email = req.body.email;
// //   const password = req.body.password;

// //   db.query(`SELECT id, name, email, password FROM customers WHERE email = $1;`, [email])
// //   .then(data => {
// //     const id = data.rows[0].id
// //     const pass = data.rows[0].password;
// //   })
// //   .catch(err => {
// //     res.status(500)
// //     .json({ error: err.message})
// //   })
// // })

// router.post('/logout', (req, res) => {
//   req.session = null;
//   res.render('login')
// })












// // module.exports = (db) => {
// //   router.get("/", (req, res) => {
// //     db.query(`SELECT * FROM customers;`)
// //       .then(data => {
// //         const customers = data.rows;
// //         res.json({ customers });
// //       })
// //       .catch(err => {
// //         res
// //           .status(500)
// //           .json({ error: err.message });
// //       });
// //   });
// //   return router;
// // };

// // const login =  function(email, password) {
// //       return database.getCustomerWithEmail(email)
// //       .then(customer => {
// //         // console.log(user);
// //         if (bcrypt.compareSync(password, customer.password)) {
// //           return customer;
// //         }
// //         return null;
// //       });
// //     }
// //     exports.login = login;











// // module.exports = (db) => {
// //   router.get("/", (req, res) => {
// //     db.query(`SELECT * FROM customers;`)
// //       .then(data => {
// //         const customers = data.rows;
// //         res.json({ customers });
// //       })
// //       .catch(err => {
// //         res
// //           .status(500)
// //           .json({ error: err.message });
// //       });
// //   });
// //   return router;
// // };

// // const login =  function(email, password) {
// //       return database.getCustomerWithEmail(email)
// //       .then(customer => {
// //         // console.log(user);
// //         if (bcrypt.compareSync(password, customer.password)) {
// //           return customer;
// //         }
// //         return null;
// //       });
// //     }
// //     exports.login = login;

