import React, { useState } from 'react';

const SkipSection = ({ section, resetProgress, renderNext }) => {
  const [showOptions, setShowOptions] = useState(true);

  // reset database based on userId and current question section
  const handleReset = () => {
    fetch('/api/reset-progress', {
      method: 'POST',
      body: JSON.stringify({ questionType: section }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => resetProgress())
      .catch(err => console.log(err));
  };

  // option for user to skip section and not reset progress in database
  const handleSkip = () => {
    setShowOptions(false);
    renderNext(section);
  };

  return (
    <React.Fragment>
      <p>Congratulations! Our records show that you have completed all questions in this section.</p>
      <br />
      {
        showOptions &&
        <React.Fragment>
          <p>Would you like to reset your progress and receive a random question to practice?</p>
          <button className='next-button' onClick={handleReset}>Reset Progress</button>
          {
            section !== 'design' && 
            <button className='next-button' onClick={handleSkip}>Skip to Next Section</button>
          }
        </React.Fragment> 
      }
    </React.Fragment>
  );
};

export default SkipSection;