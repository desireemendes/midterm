const express = require('express');
const router  = express.Router();
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const { urlencoded } = require('body-parser');
router.use(urlencoded({ extended: false }));

// require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);


module.exports = (db) => {

  // POST Route for when the customer clicks on the "Order Now" button
  router.post("/", (req, res) => {

    // send message to the customer when order is placed

    let query = `
      SELECT phone_number, name
      FROM customers
      WHERE customers.id = $1
    `;
    db.query(query, [customer])
    .then(data => {
      const customerPhoneNumber = data.rows[0].phone_number;
      const customerName = data.rows[0].name;
      const order = req.body.items; // - << ------ need to change this

      let messageToOwner = `${customerName} has placed an order for `;
      let messageToCustomer = `Thank you ${customerName}. You have placed an order for `;

      for (const item of order) {
        messageToOwner += `${orders.quantity} ${menus.name}, `
        messageToCustomer += `${orders.quantity} ${menus.name}, `
      };

      // const textMessageToOwner = messageToOwner.substring(0, messageToOwner.length - 2) + "!";
      // const textMessageToCustomer = messageToCustomer.substring(0, messageToCustomer.length - 2) + "! You will be receiving the preparation time soon 🙂";
      // //

      let queryString = `
        SELECT phone_number
        FROM customers
        WHERE customers.id = 1
      `;
      db.query(queryString)
        .then(data => {
          const bossPhoneNumber = data.rows[0].phone_number;
          client.messages
          .create({
             body: textMessageToCustomer,
             from: '+12078172429',
             to: customerPhoneNumber
           })
           .then(message => console.log(message.sid));

          //send message to the owner when order is placed
          client.messages
          .create({
            body: textMessageToOwner,
            from: '+12078172429',
            to: bossPhoneNumber
          })
          .then(message => console.log(message.sid));
        })
        .catch(err => {
          res.status(500).json({ error: err.message });
         });
      //
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
     });
  });

  // POST Route for when the restaurant owner specifies how long the order will take
  router.post("/prep-time-alert", (req, res) => {
    const phoneNumber = req.body.value[0].value;
    const minutes = req.body.value[1].value;
    const timeNow = parseInt(req.body.timeNow);
    const prepTime = new Date(timeNow + minutes * 60000).toJSON().replace("T", " ").replace("Z", "");
    const orderId = req.body.orderId;
    const textMessage = `Your order will be ready for pickup in ${minutes} minutes! Thank you for your patience.`;

    client.messages
    .create({
      body: textMessage,
      from: '+12078172429',
      to: phoneNumber
    })
    .then(message => {
      let query = `
        UPDATE orders
        SET order_time = $1
        WHERE orders.id = $2
      `;
      db.query(query, [orderTime, orderId])
      .then(data => {
        res.send(prepTime);
      })
      .catch(err => {
        res
         .status(500)
          .json({ error: err.message });
        });
      });
    });

    // POST Route for when the restaurant owner clicks on the Finished button and customer gets the final text
    router.post("/pick-up-alert", (req, res) => {
      const customerName = req.body.customerName;
      const phoneNumber = req.body.phoneNumber;
      const textMessage = `${customerName}, Your order is ready for pickup!`;
      // send message to the customer when order is ready
      client.messages
      .create({
         body: textMessage,
         from: '+16137042914',
         to: phoneNumber
       })
       .then(message => {
        let queryDB = `
        UPDATE orders
        SET order_time = now()
        WHERE orders.id = $1;
        `;
        db.query(queryDB, [req.body.orderId])
        .then(data => {
          console.log(data);
        })
        .catch(err => {
          res.status(500).json({ error: err.message });
       });
      });
    });



  return router;
}
