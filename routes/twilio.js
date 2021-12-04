const express = require('express');
const app = express();
const router = express.Router();
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const { urlencoded } = require('body-parser');
router.use(urlencoded({ extended: false }));
<<<<<<< HEAD
require('dotenv').config();
require('../twilio.env')
=======
//require('../twilio.env')
>>>>>>> b3e5fe969e82e773822ecc9a25751ce490837f15

// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;


const client = require('twilio')(accountSid, authToken);


module.exports = (db) => {

  // POST Route for when the customer clicks on the Place Order button
  router.post("/", (req, res) => {

    // send message to the customer when order is placed

    let query = `
      SELECT phone_number, name
      FROM customers
      WHERE customers.id = $1
    `;
    db.query(query)
      .then(data => {
        const customerPhoneNumber = data.rows[0].phone_number;
        const customerName = data.rows[0].name;

        let messageToOwner = `${customerName} has placed an order for `;
        let messageToCustomer = `Thank you ${customerName}. You have placed an order for `;

        for (const item of orders) {
          messageToOwner += `${orders.quantity} ${menus.name}, `
          messageToCustomer += `${orders.quantity} ${menus.name}, `
        };

        let comm = `
        SELECT phone_number
        FROM customers
        WHERE customers.id = 1
      `;
        db.query(comm)
          .then(data => {
            const restaurantNumber = data.rows[0].phone_number;
            client.messages
              .create({
                body: '',
                from: '+12078172429',
                to: customerPhoneNumber
              })
              .then(message => console.log(message.sid));

            //send message to the restaurant when the order is placed
            client.messages
              .create({
                body: '',
                from: '+12078172429',
                to: restaurantNumber
              })
              .then(message => console.log(message.sid));
          })
          .catch(err => {
            res.status(500).json({ error: err.message });
          });
      })
  });

  // POST Route for when the restaurant owner clicks on the Finished button and customer gets the final text
  router.post("/pick-up-alert", (req, res) => {

    console.log("---- Pickup Route ------")
    console.log(req.session.customer_id)
    // send message to the customer when order is ready
    let comm = `
        SELECT phone_number
        FROM customers
        WHERE customers.id = $1;
      `;
    db.query(comm, [1])
      .then(data => {
        const customerName = data.rows[0].name;
        const restaurantNumber = data.rows[0].phone_number;
        const customerPhoneNumber = data.rows[0].phone_number;
        console.log('----testing----')
        client.messages
          .create({
            body: `Your order is ready to be picked up now. Enjoy!`,
            from: '+12078172429',
            to: '+16474621668'
          })
          .then(message => {
            console.log(message)
            let queryDB = `
        UPDATE orders
        SET order_time = now()
        WHERE orders.id = $1
        RETURNING *;
        `;
            db.query(queryDB, [10])
              .then(data => {
                console.log(data);
                res.status(200).json(data.rows)
              })
              .catch(err => {
                res.status(500).json({ error: err.message });
              });

          }).catch(err => {
            console.log("ERROR", (err))
            res.status(500).json({ error: err.message });
          })
      });


    })
    return router;
  }
