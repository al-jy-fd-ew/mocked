const path = require('path');
const express = require('express');
const userController = require('user')

// const dotenv = require('dotenv');
// dotenv.config();

const PORT = 3000;
const app = express();

app.use(express.json()); // recognize incoming request as Json Object
app.use(express.urlencoded({ extended: true })); // parse incoming string or array request

app.use('/src', express.static(path.resolve(__dirname, '../src')));

app.post('/signup', userController.createUser, (req, res) => {

});

app.post('/login', userController.verifyUser, (req, res) => {

});



app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

module.exports = app;