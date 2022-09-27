const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
// require routers
const apiRouter = require('./routes/api.js');

dotenv.config();
const PORT = 3000;
const app = express();

// Express middleware
app.use(express.json()); // recognize incoming request as Json Object
app.use(express.urlencoded({ extended: true })); // parse incoming string or array request

// serve static assets
app.use('/src', express.static(path.resolve(__dirname, '../src')));
app.use('/dist', express.static(path.resolve(__dirname, '../dist')));

// route to apiRouter
app.use('/api', apiRouter);



app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error has occurred!' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log('error obj is: ', errorObj);
  return res.status(errorObj.status).send(errorObj.msg);
});





app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

module.exports = app;