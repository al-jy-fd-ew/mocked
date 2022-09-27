import React from 'react';
import '../src/styling.scss';
import Login from './components/log-in.jsx';
import Signup from './components/sign-up.jsx';
import BehavioralSection from './components/behavioral.jsx';
import AlgoSection from './components/algo.jsx';
import SystemDesignSection from './components/system-design.jsx';

const App = () => (
  //userId state, pass to each section
  // userIdState = render initial section
  // 2x boolean flag state = render additional sections as user progresses

  // init userIDstate to NaN;
  // once logged in, update userID state
  // when userId state is valid, conditionally render first section
  // inside first section, clicking "next" invokes a handler here, 

  <div>
    <Login />
    <Signup />
    <BehavioralSection />
    {/* just appended everything to app for now to visualize how each section looks */}
    <AlgoSection/>
    <SystemDesignSection/>
  </div>
);

export default App;