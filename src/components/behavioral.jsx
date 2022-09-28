import React, { useState, useEffect } from 'react';


// const sampleQuestions = [
//   'Tell me about a time when you performed well under enormous pressure.',
//   'Tell me about a time you had a conflict at work.',
//   'Can you detail a mistake you made and how you reacted to it?',
//   'Have you ever had a disagreement with an immediate supervisor?',
//   'Describe a time when you went above and beyond.',
// ]; // array for now but we can turn into object later to store questions keys in our database

// function getRandomInt() {
//   return Math.floor(Math.random() * 5);
// }
// useEffect to retrieve question

// onSubmit -> post request to server



const BehavioralSection = ({ renderNext }) => {

  const [allQuestionsDone, setAllQuestionsDone] = useState(false);
  const [questionId, setQuestionId] = useState(NaN);
  const [prompt, setPrompt] = useState('');

  useEffect(() => {
    const getQuestion = () => {
      fetch('/api/get-question', {
        method: 'POST',
        body: JSON.stringify({ questionType: 'behavioral' }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          if (!Object.keys(data).length) {
            return setAllQuestionsDone(true);
          } else {
            setQuestionId(data._id);
            setPrompt(data.prompt);
          }
        })
        .catch(err => console.log(err));
    };
    getQuestion();
  }
  , []);

  const goToNext = () => {
    fetch('/api/mark-done', {
      method: 'POST',
      body: JSON.stringify({ questionType: 'behavioral', questionId }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => renderNext('behavioral'))
      .catch(err => console.log(err));
  };


  return (
    <div className='sections'>
      <h1>Mock Interview App</h1>
      {/* {(isLoggedIn === true) && <Navigate to="/" replace={true} />} */}
      <h3>Behavioral Question</h3>
      { 
        allQuestionsDone ?
          <React.Fragment>
            <p>Congratulations! Our records show that you have completed all questions in this section.</p>
            <br />
            <p>Would you like to reset your progress and receive a random question to practice?</p>
            <button className='next-button'>Reset Progress</button>
            <button className='next-button'>Skip to Next Section</button>
          </React.Fragment>
          :
          <React.Fragment>
            <p>{prompt}</p>
            <form>
              <textarea name="answer" type="text" placeholder="Type out your response here..." style={{height:400, width:600}}></textarea>
              {/* recorded response? */}
              <br></br>
              {/* <input type='submit' value="Go to the Next Section"></input> */}
            </form>
            <button className='next-button' onClick={goToNext}>Go to next section</button>
          </React.Fragment>
      }
    </div>
  );
};

export default BehavioralSection;