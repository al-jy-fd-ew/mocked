import React, { useState } from 'react';
import BehavioralSection from '../components/behavioral.jsx';
import AlgoSection from '../components/algo.jsx';
import SystemDesignSection from '../components/system-design.jsx';
// eslint-disable-next-line import/no-unresolved
import '/src/whiteboard.scss';

const Home = () => {

  const [algo, setAlgo] = useState(false);
  const [sysDesign, setSysDesign] = useState(false);
  const [resetCounter, setResetCounter] = useState(0);

  // retrieves question from db. If all questions have been answered by user trigger setAllQuestionsDone state change
  function getQuestion(questionType, setAllQuestionsDone, setQuestionId, setPrompt){
    fetch('/api/get-question', {
      method: 'POST',
      body: JSON.stringify({ questionType: questionType }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        if (!Object.keys(data).length) {
          return setAllQuestionsDone(true);
        } else {
          setQuestionId(data._id);
          setPrompt(data.prompt);
        }
      })
      .catch(err => console.log(err));
  }

  // renders next question section upon user clicking next section button
  function renderNext(currSection) {
    if (currSection === 'behavioral') setAlgo(true);
    if (currSection === 'algorithm') setSysDesign(true);
    if (currSection === 'reset') {
      setAlgo(false);
      setSysDesign(false);
      setResetCounter(prev => prev + 1);
    }
  }

  // mark question as done by user and render next interview section
  function goToNext(questionType, questionId){
    fetch('/api/mark-done', {
      method: 'POST',
      body: JSON.stringify({ questionType: questionType, questionId }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => renderNext(questionType))
      .catch(err => console.log(err));
  }

  return (
    <div className='sections'>
      <BehavioralSection renderNext={renderNext} getQuestion={getQuestion} goToNext={goToNext} resetCounter={resetCounter} />
      { algo && <AlgoSection renderNext={renderNext} getQuestion={getQuestion} goToNext={goToNext}/>}
      { sysDesign && <SystemDesignSection renderNext={renderNext} getQuestion={getQuestion}/>}
    </div>
  );
};

export default Home;