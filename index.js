'use strict'

const twilio = require('twilio'),
      config = require('./config');

let client = new twilio(config.accountSid,config.authToken);

client.messages.create({
  to: 'Your numberphone',
  from: '+17865902573', 
  body: 'Message send from Nodejs + Express'
}, (err, res) => {

  if (err) {
    console.log(`An error has ocurred: ${err}`);
  } else {
    console.log(`¡SMS Success! Date:${res.dateCreated} Id: ${res.sid}`);
  }

});