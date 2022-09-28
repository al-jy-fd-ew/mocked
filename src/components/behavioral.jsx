import React, { useState, useEffect } from 'react';
import SkipSection from './skip-section.jsx';


const BehavioralSection = ({ renderNext, getQuestion, goToNext}) => {

  const [allQuestionsDone, setAllQuestionsDone] = useState(false);
  const [questionId, setQuestionId] = useState(NaN);
  const [prompt, setPrompt] = useState('');

  useEffect(() => {
    getQuestion('behavioral', setAllQuestionsDone, setQuestionId, setPrompt);
  },[]);

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
            <button className='next-button' onClick={() => (goToNext('behavioral', questionId, renderNext))}>Go to next section</button>
          </React.Fragment>
      }
    </div>
  );
};

export default BehavioralSection;