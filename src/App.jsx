import React from 'react';
import '../src/styling.scss';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   Navigate,
// } from 'react-router-dom';
import Login from './components/log-in.jsx';
import Signup from './components/sign-up.jsx';
import BehavioralSection from './components/behavioral.jsx';
import AlgoSection from './components/algo.jsx';
import SystemDesignSection from './components/system-design.jsx';

const App = () => (
  <div>
    <Login />
    <Signup />
    <BehavioralSection />
    <AlgoSection/>
    <SystemDesignSection/>
  </div>
);

export default App;