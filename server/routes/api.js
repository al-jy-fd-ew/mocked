const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/signup', userController.createUser, (req, res) => {
  console.log('hello');
});

router.post('/login', userController.verifyUser, (req, res) => {
  return res.status(200).redirect('/behavioral');
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