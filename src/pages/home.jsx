import React from 'react';
import BehavioralSection from '../components/behavioral.jsx';
import AlgoSection from '../components/algo.jsx';
import SystemDesignSection from '../components/system-design.jsx';
// eslint-disable-next-line import/no-unresolved
import '/src/whiteboard.scss';



const Home = () => (
  <div className='sections'>
    <BehavioralSection />
    <AlgoSection />
    <SystemDesignSection />
  </div>
);

export default Home;