import React, { useState } from 'react';
import BehavioralSection from '../components/behavioral.jsx';
import AlgoSection from '../components/algo.jsx';
import SystemDesignSection from '../components/system-design.jsx';
// eslint-disable-next-line import/no-unresolved
import '/src/whiteboard.scss';

// boolean flag state to conditionally render algo and sysdesign once user progresses (1 each)
// pass down handler cb to flip the flag to true

const Home = () => {
  const [algo, setAlgo] = useState(false);
  const [sysDesign, setSysDesign] = useState(false);

  function renderNext(currSection) {
    if (currSection === 'behavioral') setAlgo(true);
    if (currSection === 'algo') setSysDesign(true);
    if (currSection === 'reset') {
      setAlgo(false);
      setSysDesign(false);
      // how to do useeffect to get new behavioral q
    }
  }

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

  function goToNext(questionType, questionId, renderNext){
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
      <BehavioralSection renderNext={renderNext} getQuestion={getQuestion} goToNext={goToNext} />
      { algo && <AlgoSection renderNext={renderNext} getQuestion={getQuestion} goToNext={goToNext}/>}
      { sysDesign && <SystemDesignSection renderNext={renderNext}/>}
    </div>
  );
};

export default Home;