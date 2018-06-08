const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const createTicket = require('./sender');
const bodyParser = require('body-parser');

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(bodyParser.json())
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .post('/createTicket', function(req, res) {
    const prettyJSON = JSON.stringify(req.body, null, 4);
    console.log('in message, Message = ', prettyJSON);
    createTicket(req.body.messages.shift());
    res.end(); })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
