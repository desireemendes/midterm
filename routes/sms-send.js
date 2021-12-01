// Twilio Credentials
// To set up environmental variables, see http://twil.io/secure
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;

const accountSid = 'ACf60085a2616ff8498e7f6d244897b248'
const authToken ='cb03c8983196594ddc58be4c78db16b9'


// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);


client.messages
  .create({
    to: '+16476483789',
    from: '+12078172429',
    body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
  })
  .then(message => console.log(message.sid));

