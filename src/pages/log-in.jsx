import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (

    <div id='login'>
      <h1>Mock Interview App</h1>
      <h3>Log In</h3>
      <form method='POST' action='/api/login'>
        <input name='username' type='text' placeholder='Username'></input>
        <br></br>
        <input name='password' type='password' placeholder='Password'></input>
        <br></br>
        <button type='submit'>Log In</button>
      </form>
      <Link to='/signup'>
        <button>Don&apos;t have an account? Sign up here.</button>
      </Link>
    </div>
  );
};

export default Login;