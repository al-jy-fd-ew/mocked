import React from 'react';
import '../src/styling.scss';
import Login from './components/log-in';
import Signup from './components/sign-up';
import Behavioral from './components/behavioral';

const App = () => (
  <div>
        <Login />
        <Signup />
        <Behavioral />
        {/* just appended everything to app for now to visualize how each section looks */}

  </div>
);

export default App;