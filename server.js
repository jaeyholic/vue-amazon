const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

//init express
const app = express();

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//routes

//start server
app.listen(3000, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(err);
  }
});
