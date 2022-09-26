const path = require('path');
const express = require('express');

const dotenv = require('dotenv');
dotenv.config();

const PORT = 3000;
const app = express();

// Import controllers
app.use(express.json()); // recognize incoming request as Json Object
app.use(express.urlencoded({ extended: true })); // parse incoming string or array request

// serve static assets
app.use('/src', express.static(path.resolve(__dirname, '../src')));
app.use('/dist', express.static(path.resolve(__dirname, '../dist')));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error hath occurred!' },
  };
  const errorObj = Object.assign(defaultErr, err);
  return res.status(errorObj.status).send(errorObj.msg);
});

module.exports = app;