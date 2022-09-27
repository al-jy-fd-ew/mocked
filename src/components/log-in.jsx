import React from 'react';

const Login = () => {
  return (

    <div id='login'>
      <h1>Mock Interview App</h1>
      <h3>Log In</h3>
      <form method='POST' action='/login'>
        <input name='username' type='text' placeholder='Username'></input>
        <br></br>
        <input name='password' type='password' placeholder='Password'></input>
        <br></br>
        <button type='submit'>Log In</button>
      </form>
      <p>Don't have an account? Sign up here:</p>
      
    </div>
  );
};

export default Login;