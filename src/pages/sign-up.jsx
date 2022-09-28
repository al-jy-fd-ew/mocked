import React from 'react';
// import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div id='signup'>
      <h1>Mock Interview App</h1>
      <h3>Sign Up</h3>
      <form method='POST' action='/api/signup'>
        <input name='username' type='text' placeholder='Username'></input>
        <br></br>
        <input name='password' type='password' placeholder='Password'></input>
        <br></br>
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;