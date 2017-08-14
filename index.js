'use strict'

const twilio = require('twilio'),
      config = require('./config');

let client = new twilio(config.accountSid,config.authToken);

client.messages.create({
  to: 'Número que recibirá el SMS',
  from: '+17865902573', 
  body: 'Nodejs + Express'
}, (err, res) => {

  if (err) {
    console.log(`Se ha generado el siguiente error: ${err}`);
  } else {
    console.log(`¡SMS Enviado! Fecha:${res.dateCreated} Id: ${res.sid}`);
  }

});