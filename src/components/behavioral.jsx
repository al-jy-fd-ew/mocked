import React, { useState, useEffect } from 'react';
import SkipSection from './skip-section.jsx';


const BehavioralSection = ({ renderNext, getQuestion, goToNext, resetCounter }) => {

  const [allQuestionsDone, setAllQuestionsDone] = useState(false);
  const [questionId, setQuestionId] = useState(NaN);
  const [prompt, setPrompt] = useState('');

  // get new question to render for user
  // will trigger on first load, when user resets progress, and when user starts new interview
  async function resetSection () {
    await getQuestion('behavioral', setAllQuestionsDone, setQuestionId, setPrompt);
    document.getElementById('behavioral-answer').value = '';
  }

  useEffect(() => {
    // getQuestion('behavioral', setAllQuestionsDone, setQuestionId, setPrompt);
    // document.getElementById('behavioral-answer').value = '';
    resetSection();
  },[allQuestionsDone, resetCounter]);

  const resetProgress = () => {
    setAllQuestionsDone(false);
  };

  return (
    <div className='sections'>
      <h1>Mock Interview App</h1>
      <h3>Behavioral Question</h3>
      { 
        allQuestionsDone ?
          <SkipSection section={'behavioral'} resetProgress={resetProgress} renderNext={renderNext} resetCounter={resetCounter}/>
          :
          <React.Fragment>
            <p>{prompt}</p>
            <form>
              <textarea id="behavioral-answer" name="answer" type="text" placeholder="Type out your response here..." style={{height:400, width:600}}></textarea>
              <br></br>
            </form>
            <button className='next-button' onClick={() => (goToNext('behavioral', questionId))}>Go to next section</button>
          </React.Fragment>
      }
    </div>
  );
};

export default BehavioralSection;