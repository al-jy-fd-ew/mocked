const db = require('../models/models.js');

const questionController = {};

questionController.getQuestion = (req, res, next) => {
  // retrieves question on database, identifies user by grabbing user_id cookie from browser
  const { questionType } = req.body;
  const { user_id } = req.cookies;
  console.log('cookies are: ', req.cookies);
  console.log('user id is: ', user_id);
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
    // if no more "new" questions for user, return empty object
    // front end to check for empty object and offer options to reset progress or skip section
    res.locals.question = {};
    return next();
  }
  const randomIndex = Math.floor(Math.random() * options.length);
  // return single question object -- to revisit data shape if returning multiple questions
  res.locals.question = options[randomIndex];
  console.log('this is the next Q:', res.locals.question);
  return next();
};

questionController.resetProgress = (req, _res, next) => {
  const { questionType } = req.body;
  const { user_id } = req.cookies;
  const tableName = `users_${questionType}_questions`;
  const query = `DELETE FROM ${tableName} WHERE user_id = ${user_id}`;
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
  const { user_id } = req.cookies;
  const tableName = `users_${questionType}_questions`;
  const idValues = [user_id, questionId];
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