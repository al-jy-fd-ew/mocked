const express = require('express');
const questionController = require('../controllers/questionController');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/signup', userController.createUser, (req, res) => {
  // after successful sign up, redirect to the login page
  console.log('signup successful');
  res.redirect('/');
});

router.post('/login', userController.verifyUser, (req, res) => {
  // if the user successfully logs in, redirect to the home page
  res.status(200).end();
});

// run middleware to get set of questions and randomly return one to render
router.post('/get-question',
  questionController.getQuestion,
  questionController.returnRandomQuestion,
  (req, res) => {
    return res.status(200).json(res.locals.question);
  }
);

// resets user progress in a particular section by clearing records in association table
router.post('/reset-progress', questionController.resetProgress, (req, res) => {
  return res.status(200).end();
});

// add association between user and question they just finished
router.post('/mark-done', questionController.markDone, (req, res) => {
  return res.status(200).end();
});


module.exports = router;