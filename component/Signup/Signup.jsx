import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "../../Styles/Sign-Up/Signup.css"; // Adjust the path according to your project structure

const Signup = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleHomeRedirect = () => {
    navigate("/"); // Navigate to the home screen
  };

  return (
    <div className="signup-container">
      {/* Left Section with Background and Text */}
      <div className="signup-left">
        <h1>Join Hidden Heaven</h1>
        <p>
          Create an account to explore the best services we have to offer. Sign
          up now to start your journey with us!
        </p>
      </div>

      {/* Right Section with Signup Form */}
      <div className="signup-right">
        <div className="signup-form-container">
          <h1>Sign Up</h1>
          <form>
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="John Doe" required />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="johndoe@email.com"
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="********"
              required
            />

            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="********"
              required
            />

            <button type="submit" className="signup-button">
              Create Account
            </button>
          </form>
          <div className="or-divider">Or</div>
          <div className="social-logins">
            <button className="social-login google">Sign up with Google</button>
          </div>
          <p className="login-link">
            Already have an account? <a href="/login">Log In Here</a>
          </p>

          {/* Return to Home Button */}
          <button onClick={handleHomeRedirect} className="home-button">
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
