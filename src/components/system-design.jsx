import React from 'react';
import Whiteboard from './whiteboard.jsx';
// eslint-disable-next-line import/no-unresolved
import '/src/whiteboard.scss';

const SystemDesignSection = () => (
  <div className='sections'>
    <h3>Question</h3>
    <p>Design Instagram.</p>
    <Whiteboard/>
    <button className='next-button'>Go to next section</button>
  </div>
);

export default SystemDesignSection;
