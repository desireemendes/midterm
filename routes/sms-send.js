// Twilio Credentials
// To set up environmental variables, see http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;




// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);


client.messages
  .create({
    to: '',
    from: '+12078172429',
    body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
  })
  .then(message => console.log(message.sid));

