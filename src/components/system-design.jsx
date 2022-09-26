import React from 'react';
import Whiteboard from './whiteboard.jsx';
// eslint-disable-next-line import/no-unresolved
import '/src/whiteboard.scss';

const SystemDesignSection = () => (
  <div className='sections'>
    <h3>Question</h3>
    <p>Given an array of integers nums and an integer target, return indices of the two numbers such
      that they add up to target. You may assume that each input would have exactly one solution, and
      you may not use the same element twice. You can return the answer in any order.</p>
    <Whiteboard/>
    <button>Go to next section</button>
  </div>
);

export default SystemDesignSection;
