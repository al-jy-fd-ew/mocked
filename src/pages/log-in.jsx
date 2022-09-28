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

    const username = document.getElementsByClassName('username').value;
    const password = document.getElementsByClassName('password').value;

    document.getElementsByClassName('username').value = '';
    document.getElementsByClassName('password').value = '';

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

    <div className='credentials'>
      <h1>Mock Interview App</h1>
      <h3>Log In</h3>
      <form method='POST' onSubmit={handleSubmit}>
        <p>Username</p>
        <input className='username' name='username' type='text'></input>
        <p>Password</p>
        <input className='password' name='password' type='password'></input>
        <input className='submit' type='submit' value='Login'></input>
      </form>
      <p>Don&apos;t have an account?</p>
      <Link to='/signup'>
        <button>Sign Up</button>
      </Link>
      <hr />
      <div id='signInDiv'></div>
    </div>
  );
};

export default Login;