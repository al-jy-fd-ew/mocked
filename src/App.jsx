import React, { useState, useEffect } from 'react';
import '../src/styling.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from 'react-router-dom';
import Login from './pages/log-in.jsx';
import Signup from './pages/sign-up.jsx';
import Home from './pages/home.jsx';

import { useEffect } from 'react';
import { gapi } from 'gapi-script';

const clientID = '795937344287-vrtte822003tg70ogjab4t0tucr9e87a.apps.googleusercontent.com';


const App = () => {

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientID: clientID,
        scope: ''
      });
    }
    gapi.load('client:auth2', start);
  });
  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/home' element={<Home />}/>
      </Routes>
    </Router>
  );
};

export default App;