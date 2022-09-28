const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const path = require('path');


router.post('/signup', userController.createUser, (req, res) => {
  // after successful sign up, redirect to the login page
  res.redirect('/');
});

router.post('/login', userController.verifyUser, (req, res) => {
  // if the user successfully logs in, redirect to the home page
  res.status(200).redirect('/home');
});





// create/signup user
// sign-in
// pull behavioral question (via button click 'start interview'?)
// next section from behavioral
// pull leetcode question
// register association
// next section from leetcode
// pull sys design question
// register association
// finish sys design question
// register association
// get questions

// middlewares: 
// pullQuestion
// query to get not previously done questions
// randomly pick one to send to FE
// registerAssocation
// take in userId from user session + id of question they just finished

module.exports = router;