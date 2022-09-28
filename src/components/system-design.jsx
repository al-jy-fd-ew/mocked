import React, { useState, useEffect } from 'react';
import SkipSection from './skip-section.jsx';
import Whiteboard from './whiteboard.jsx';
// eslint-disable-next-line import/no-unresolved
import '/src/whiteboard.scss';

const SystemDesignSection = ({ renderNext, getQuestion, resetCounter }) => {
  
  const [allQuestionsDone, setAllQuestionsDone] = useState(false);
  const [questionId, setQuestionId] = useState(NaN);
  const [prompt, setPrompt] = useState('');
  const [interviewDone, setInterviewDone] = useState(false);

  // get new question to render for user
  // will trigger on first load and when user resets progress
  useEffect(() => {
    getQuestion('design', setAllQuestionsDone, setQuestionId, setPrompt);
  }
  , [allQuestionsDone]);

  // since this is the last section, will mark question as done by user
  // and set interview done to render button to start new interview
  const markInterviewDone = () => {
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

  const resetProgress = () => {
    setAllQuestionsDone(false);
  };

  // resets view to start a new mock interview
  const handleReset = () => {
    renderNext('reset');
    setInterviewDone(false);
  };

  return (
    <div className='sections'>
      <h3>System Design Question</h3>
      {
        allQuestionsDone ? 
          <React.Fragment>
            <SkipSection section={'design'} resetProgress={resetProgress} resetCounter={resetCounter}/> 
            <button className='next-button' onClick={handleReset}>
              Start new mock interview
            </button>
          </React.Fragment>
          :
          <React.Fragment>
            <p>{prompt}</p>
            <Whiteboard/>
            <button className='next-button' onClick={markInterviewDone}>Done!</button>
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
