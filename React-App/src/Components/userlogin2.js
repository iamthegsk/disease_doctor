import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./registration.css"; // Import the CSS file

const AuthPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(""); // State for error message
  const [isRegistering, setIsRegistering] = useState(true); // State to track whether user is registering or logging in

  const history = useHistory(); // Initialize useHistory

  // Function to handle sign up
  function signUp() {
    const { username, email, password, confirmPassword } = formData;

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match. Please try again.");
      return;
    } else {
      // Store user data in localStorage
      localStorage.setItem("userData", JSON.stringify(formData));

      // Redirect to login page after successful registration
      setIsRegistering(false);
    }
  }

  // Function to handle sign in
  function signIn() {
    const { email, password } = formData;

    // Retrieve user data from localStorage
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (!userData || userData.email !== email || userData.password !== password) {
      // If user data doesn't exist or email/password don't match
      setError("Invalid email or password. Please register yourself.");
      return;
    } else {
      // Redirect to home page after successful login
      history.push("/home");
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegistering) {
      signUp();
    } else {
      signIn();
    }
  };

  return (
    <div className="auth-form-container">
      <div className="auth-form">
        <h2>{isRegistering ? "Registration" : "Login"} Page</h2>
        <form onSubmit={handleSubmit}>
          {isRegistering && (
            <div className="input-field">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                id="username"
                placeholder="Enter your username"
                aria-label="Username input"
              />
            </div>
          )}
          <div className="input-field">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              id="email"
              placeholder="Enter your email address"
              aria-label="Email address input"
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              id="password"
              placeholder="Enter your password"
              aria-label="Password input"
            />
          </div>
          {isRegistering && (
            <div className="input-field">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                id="confirmPassword"
                placeholder="Confirm your password"
                aria-label="Confirm password input"
              />
            </div>
          )}
          {error && <p className="error-message">{error}</p>}
          <button type="submit">
            {isRegistering ? "Register" : "Login"}
          </button>
        </form>
        <p>
          {isRegistering
            ? "Already have an account? "
            : "Don't have an account? "}
          <button onClick={() => setIsRegistering(!isRegistering)}>
            {isRegistering ? "Login" : "Register"} Instead
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
