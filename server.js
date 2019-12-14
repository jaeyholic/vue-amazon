const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config({ path: './config.env' });
const connectDB = require('./db');
const errorHandler = require('./middleware/error');

//routes
const userRoute = require('./routes/user');

//init express
const app = express();

//connect DB
connectDB();

//middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
} //Morgan
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

//routes
app.use('/api/v1/users', userRoute);
app.use(errorHandler);

//start server
const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, () =>
  console.log(`server running in port ${process.env.NODE_ENV} mode on ${PORT}`)
);

//Handle Unhandled Rejection
process.on('unhandledRejection', err => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

process.on('SIGTERM', () => {
  console.log('👋 SIGTERM RECEIVED. Shutting down gracefully');
  server.close(() => {
    console.log('💥 Process terminated!');
  });
});
