const express = require('express');
const router = express.Router();
// TODO: import controllers

router.post('login', )
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