const db = require('../models/models.js');

const questionController = {};

// req body will have userId + type of question (string)

questionController.getQuestion = (req, res, next) => {
  
  // req.body.userID
  // req.body.questionType
  // behavioral questions -> public.user_behavioral_questions
  // public.behavioral_questions (get filtered [] of questions)
  // error handling: if user has done all questions (empty [])

  const { questionType } = req.body;
  const { user_id } = req.cookies;
  const query = `
    SELECT
    ${questionType}_questions._id,
    ${questionType}_questions.prompt
    FROM ${questionType}_questions
    LEFT JOIN
    (SELECT ${questionType}_question_id FROM users_${questionType}_questions WHERE user_id = ${user_id}) AS userFilterTable
    ON
    ${questionType}_questions._id = userFilterTable.${questionType}_question_id
    WHERE ${questionType}_question_id is null; 
    `; 
  db.query(query)
    .then((result) => {
      res.locals.questionOptions = result.rows;
      return next();
    })
    .catch(err => next({
      log: 'Question Retrieval Failed',
      err
    }));
};

questionController.returnRandomQuestion = (_req, res, next) => {
  console.log('question controller');
  const options = res.locals.questionOptions;
  if (!options.length) {
    res.locals.question = {};
    // return empty obj; front end will check for empty and render buttons
    // 2 options: 1. reroll question (wipe associations)
    // 2. skip section (another post request to get question, but for next section)
    return next();
  } 
  const randomIndex = Math.floor(Math.random() * options.length);
  // return single question object -- tbd if need to reformat for FE (or consider [] of obj)
  res.locals.question = options[randomIndex];
  console.log('this is the next Q:', res.locals.question);
  return next();
};

questionController.resetProgress = (req, _res, next) => {
  const { questionType } = req.body;
  const { userId } = req.cookies;
  const tableName = `users_${questionType}_questions`;
  const query = `DELETE FROM ${tableName} WHERE user_id = ${userId}`;
  db.query(query)
    .then(() => next())
    .catch(err => next({
      log: 'Database Error: unable to reset section progress.',
      err
    }));
};

questionController.markDone = (req, res, next) => {
  // questionType will be one of 'behavioral', 'algorithm' or 'design'
  const { questionType, questionId } = req.body;
  const { userId } = req.cookies;
  const tableName = `users_${questionType}_questions`;
  const idValues = [userId, questionId];
  const query = `
    INSERT INTO ${tableName} VALUES ($1, $2);
  `;
  db.query(query, idValues)
    .then(() => next())
    .catch(err => next({
      log: 'Database Error: unable to mark question as completed.',
      err
    }));
};

module.exports = questionController;