import React from "react";
import "../../Styles/Login/Login.CSS"; // Make sure you adjust the path according to your project structure

const Login = () => {
  return (
    <div className="login-container">
      {/* Left Section with Background and Text */}
      <div className="login-left">
        <h1>Hidden Heaven</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Right Section with Login Form */}
      <div className="login-right">
        <div className="login-form-container">
          <h1>Login</h1> {/* Changed the heading to "Login" */}

          <form>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="johndoe@email.com" required />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="********" required />

            {/* Removed Remember me section completely */}
            
            <button type="submit" className="login-button">
              Continue
            </button>
          </form>

          <div className="or-divider">Or</div>

          <div className="social-logins">
            <button className="social-login google">Log in with Google</button>
          </div>

          <p className="signup-link">
            New User? <a href="/">Sign Up Here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
