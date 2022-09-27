const db = require('../models/models.js');

const questionController = {};

// req body will have userId + type of question (string)

questionController.getQuestion = async (req, res, next) => {
  // req.body.userID
  // req.body.questionType
  // behavioral questions -> public.user_behavioral_questions
  // public.behavioral_questions (get filtered [] of questions)
  // error handling: if user has done all questions (empty [])
  try {
    const { userId, questionType } = req.body;
    const query = `
            
    `;
    const response = await db.query(query, values);
    return res.locals.rows;
        
// res.locals.question = response.rows
        
    } catch (e) {
        

    }
};


questionController.markDone = async (req, res, next) => {
  try {
    const { userId, questionType, questionId } = req.body;
    const tableName = `users_${questionType}_questions`;
    const queryStr = `
      
    `;
    // define table based on questionType
    // insert values assoc into that table
  } catch (e) {
    
  }
  // error handling: userId somehow invalid / not in table?
  // questionId out of bound?
  
};

module.exports = questionController;