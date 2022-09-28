import React from 'react';
// import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className='credentials'>
      <h1>Mock Interview App</h1>
      <h3>Sign Up</h3>
      <form method='POST' action='/api/signup'>
        <p>Username</p>
        <input className='username' name='username' type='text'></input>
        <p>Password</p>
        <input className='password' name='password' type='password'></input>
        <button className='submit' type='submit'>Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;