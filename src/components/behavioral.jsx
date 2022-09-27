import React from 'react';

const sampleQuestions = [
  'Tell me about a time when you performed well under enormous pressure.',
  'Tell me about a time you had a conflict at work',
  'Can you detail a mistake you made and how you reacted to it?',
  'Have you ever had a disagreement with an immediate supervisor?',
  'Describe a time when you went above and beyond.',
]; // array for now but we can turn into object later to store questions keys in our database

function getRandomInt() {
  return Math.floor(Math.random() * 5);
}
// useEffect to retrieve question

// onSubmit -> post request to server



const BehavioralSection = () => {
  return (
    <div id="behavioral">
      <h1>Mock Interview App</h1>
      {/* {(isLoggedIn === true) && <Navigate to="/" replace={true} />} */}
      <h3>Behavioral Question</h3>
      <form onSubmit={(e) => verifyUser(e)}>
        <p>{sampleQuestions[getRandomInt()]}</p>
        <textarea name="answer" type="text" placeholder="Type out your response here..." style={{height:400, width:600}}></textarea>
        <br></br>
        <input type='submit' value="Go to the Next Section"></input>
      </form>
    </div>
  );
};

export default BehavioralSection;