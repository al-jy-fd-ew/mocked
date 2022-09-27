import React from "react";

const Signup = () => {
  return (

    <div id="signup">
      <h1>Mock Interview App</h1>
      {/* {(isLoggedIn === true) && <Navigate to="/" replace={true} />} */}
      <label>Sign Up:</label>
      <form onSubmit={(e) => createUser(e)}>
        <input name="fullName" type="text" placeholder="Full Name"></input>
        <br></br>
        <input name="username" type="text" placeholder="Username"></input>
        <br></br>
        <input name="password" type="text" placeholder="Password"></input>
        <br></br>
        <input type='submit' value="Sign Up"></input>
      </form>
    </div>
  )
}

export default Signup;