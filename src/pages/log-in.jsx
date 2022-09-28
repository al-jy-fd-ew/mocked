import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const Login = () => {

  const [ user, setUser ] = useState({});

  function handleCallbackResponse(response) {
    console.log('Encoded JWT ID token: ', response.credential);
    const userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    navigate('/home');
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: '1059632627537-4tdm07ce8m3f4gsn5cusmrl2ffce6gom.apps.googleusercontent.com',
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById('signInDiv'),
      { theme: 'outline', size: 'large'}
    );
  }, []);

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
        <input type='submit' value='Login'></input>
      </form>
      <Link to='/signup'>
        <button>Don&apos;t have an account? Sign up here.</button>
      </Link>
      <div id='signInDiv'></div>
    </div>
  );
};

export default Login;