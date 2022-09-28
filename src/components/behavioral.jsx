import React from 'react';

const sampleQuestions = [
  'Tell me about a time when you performed well under enormous pressure.',
  'Tell me about a time you had a conflict at work.',
  'Can you detail a mistake you made and how you reacted to it?',
  'Have you ever had a disagreement with an immediate supervisor?',
  'Describe a time when you went above and beyond.',
]; // array for now but we can turn into object later to store questions keys in our database

function getRandomInt() {
  return Math.floor(Math.random() * 5);
}

const BehavioralSection = () => {
  return (

    <div className='sections'>
      <h1>Mock Interview App</h1>
      {/* {(isLoggedIn === true) && <Navigate to="/" replace={true} />} */}
      <h3>Behavioral Question</h3>
      <p>{sampleQuestions[getRandomInt()]}</p>
      <form onSubmit={(e) => verifyUser(e)}>
        <textarea name="answer" type="text" placeholder="Type out your response here..." style={{height:400, width:600}}></textarea>
        {/* recorded response? */}
        <br></br>
        {/* <input type='submit' value="Go to the Next Section"></input> */}
      </form>
      <button className='next-button'>Go to next section</button>
    </div>
  );
};

export default BehavioralSection;