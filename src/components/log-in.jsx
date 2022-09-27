import React from "react";

const Login = () => {
  return (

    <div id="login">
      <h1>Mock Interview App</h1>
      {/* {(isLoggedIn === true) && <Navigate to="/" replace={true} />} */}
      <label>Log In:</label>
      <form onSubmit={(e) => verifyUser(e)}>
        <input name="username" type="text" placeholder="Username"></input>
        <br></br>
        <input name="password" type="text" placeholder="Password"></input>
        <br></br>
        <input type='submit' value="Login"></input>
      </form><br/><br/>
      <label>Don't have an account? Sign up here:</label>
      <form onSubmit={(e) => createUser(e)}>
        <input type='submit' value="Create an account"></input>
      </form>
    </div>
  );
};

export default Login;