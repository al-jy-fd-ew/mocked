import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    document.getElementById('username').value = '';
    document.getElementById('password').value = '';

    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username, password})
    })
      .then(navigate('/home'));
  };

  return (

    <div id='login'>
      <h1>Mock Interview App</h1>
      <h3>Log In</h3>
      <form method='POST' onSubmit={handleSubmit}>
        <input id='username' name='username' type='text' placeholder='Username'></input>
        <br></br>
        <input id='password' name='password' type='password' placeholder='Password'></input>
        <br></br>
        <input type='submit' value='Log In'></input>
      </form>
      <Link to='/signup'>
        <button>Don&apos;t have an account? Sign up here.</button>
      </Link>
    </div>
  );
};

export default Login;