const express = require('express');
const questionController = require('../controllers/questionController');
const router = express.Router();
const userController = require('../controllers/userController');
const path = require('path');


router.post('/signup', userController.createUser, (req, res) => {
  // after successful sign up, redirect to the login page
  res.redirect('/');
});

router.post('/login', userController.verifyUser, (req, res) => {
  // if the user successfully logs in, redirect to the home page
  res.status(200).redirect('/behavioral');
});

router.post('/get-question',
  questionController.getQuestion, 
  questionController.returnRandomQuestion, 
  (req, res) => {
    return res.status(200).json(res.locals.question);
  }
);

router.post('/reset-progress', 
  questionController.resetProgress, 
  questionController.getQuestion, 
  questionController.returnRandomQuestion, 
  (req, res) => {
    return res.status(200).json(res.locals.question);
  }
);

router.post('/mark-done', questionController.markDone, (req, res) => {
  return res.status(200).end();
});

// req body: userId, questionType (i.e. behavioral)

// initial section (passed in user_id)
  // pull behavioral question (via button click 'start interview'?)
// next section from behavioral
  // pull leetcode question
  // register association user <-> behavioral
// next section from leetcode
  // pull sys design question
  // register association user <-> leetcode
// finish sys design question
  // register association user <-> sysdesign

// return questions, format tbd (one object); 

// get questions

// middlewares: 
// pullQuestion
// query to get not previously done questions
// randomly pick one to send to FE
// registerAssocation
// take in userId from user session + id of question they just finished

module.exports = router;