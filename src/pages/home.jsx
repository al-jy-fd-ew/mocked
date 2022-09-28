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
    }
  }

  return (
    <div className='sections'>
      <BehavioralSection renderNext={renderNext} />
      { algo && <AlgoSection renderNext={renderNext}/>}
      { sysDesign && <SystemDesignSection renderNext={renderNext}/>}
    </div>
  );
};

export default Home;