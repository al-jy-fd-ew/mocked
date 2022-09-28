import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

const Login = () => {

  const clientID = '795937344287-vrtte822003tg70ogjab4t0tucr9e87a.apps.googleusercontent.com';

  const onSuccess = (res) => {
    console.log('Successful login!');
  };

  const onFailure = (res) => {
    console.log('Login Failed!');
  };


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

      <div id='signInButton'>
        <GoogleLogin 
          clientID={clientID}
          buttonText='Login'
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy='single_host_origin'
          isSignedIn={true}
        />
      </div>
    </div>
  );
};

export default Login;