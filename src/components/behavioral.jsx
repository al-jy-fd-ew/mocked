import React, { useState, useEffect } from 'react';
import SkipSection from './skip-section.jsx';


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
  , [allQuestionsDone]);

  const markDoneAndProceed = () => {
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

  const refreshPage = () => {
    setAllQuestionsDone(false);
  };

  return (
    <div className='sections'>
      <h1>Mock Interview App</h1>
      {/* {(isLoggedIn === true) && <Navigate to="/" replace={true} />} */}
      <h3>Behavioral Question</h3>
      { 
        allQuestionsDone ?
          <SkipSection section={'behavioral'} refreshPage={refreshPage} renderNext={renderNext}/>
          :
          <React.Fragment>
            <p>{prompt}</p>
            <form>
              <textarea name="answer" type="text" placeholder="Type out your response here..." style={{height:400, width:600}}></textarea>
              {/* recorded response? */}
              <br></br>
              {/* <input type='submit' value="Go to the Next Section"></input> */}
            </form>
            <button className='next-button' onClick={markDoneAndProceed}>Go to next section</button>
          </React.Fragment>
      }
    </div>
  );
};

export default BehavioralSection;