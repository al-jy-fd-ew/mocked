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




const App = () => (
  <Router>
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/home' element={<Home />}/>
    </Routes>
  </Router>
);

export default App;