import React, { useState, useEffect } from 'react';
import SkipSection from './skip-section.jsx';
import Whiteboard from './whiteboard.jsx';
// eslint-disable-next-line import/no-unresolved
import '/src/whiteboard.scss';

const SystemDesignSection = ({ renderNext }) => {
  
  const [allQuestionsDone, setAllQuestionsDone] = useState(false);
  const [questionId, setQuestionId] = useState(NaN);
  const [prompt, setPrompt] = useState('');
  const [interviewDone, setInterviewDone] = useState(false);

  useEffect(() => {
    const getQuestion = () => {
      fetch('/api/get-question', {
        method: 'POST',
        body: JSON.stringify({ questionType: 'design' }),
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

  const markDone = () => {
    fetch('/api/mark-done', {
      method: 'POST',
      body: JSON.stringify({ questionType: 'design', questionId }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => setInterviewDone(true))
      .catch(err => console.log(err));
  };

  const refreshPage = () => {
    setAllQuestionsDone(false);
  };

  const handleReset = () => {
    renderNext('reset');
    setInterviewDone(false);
  };

  return (
    <div className='sections'>
      <h3>System Design Question</h3>
      {
        allQuestionsDone ? 
          <SkipSection section={'design'} refreshPage={refreshPage}/> 
          :
          <React.Fragment>
            <p>{prompt}</p>
            <Whiteboard/>
            <button className='next-button' onClick={markDone}>Done!</button>
            {
              interviewDone &&
                <button className='next-button' onClick={handleReset}>
                  Start new mock interview
                </button>
            }
          </React.Fragment>
      }
    </div>
  );
};

export default SystemDesignSection;
