const express = require('express');
const port = 3000;
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cors = require('cors');

const app = express();

app.use(logger('dev'));
app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  res.send('Parking System ..');
})

// ADD YOUR CONTROLLER HERE!!!
const employeeController = require('./controllers/employeeController');
app.use('/employee', employeeController);

const parkingController = require('./controllers/parkingController');
app.use('/parking', parkingController);

app.listen(port, () => {
  console.log('---------------------------------------');
  console.log('Express listening on localhost:' + port);
  console.log('---------------------------------------');
});