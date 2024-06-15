import React, { useRef, useState } from "react";
import "./Login2.css";
import cross_icon from "./cross_icon.png";
import axios from 'axios';

const Login2 = ({ setToggleLoginForm }) => {
  const [toggleSignInForm, setToggleSignInForm] = useState(true);
  const [errMessage, setErrMessage] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const validateSignInData = (email, password) => {
    // Validate email
    if (!email) return "Email cannot be empty.";
    const emailCheck = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    if (!emailCheck) return "Email is not valid.";

    // Validate password
    if (!password) return "Password cannot be empty.";
    const passwordCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if (!passwordCheck) return "Password is not valid.";

    return null; // Return null if no validation errors
  };

  const validateSignUpData = (name, email, password) => {
    // Validate name
    if (!name) return "Name cannot be empty.";
    const nameCheck = /^[a-zA-Z\s]+$/.test(name);
    if (!nameCheck) return "Name can only contain characters.";

    // Validate email and password using existing function
    return validateSignInData(email, password);
  };

  const handleSignIn = async () => {
    const message = validateSignInData(email.current.value, password.current.value);
    if (message) {
      setErrMessage(message);
    } else {
      try {
        const response = await axios.post('http://localhost:8082/signIn', 
          new URLSearchParams({
            email: email.current.value,
            password: password.current.value,
          }), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
        });
        setToggleLoginForm(false);
        console.log('Login successful:', response.data);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          setErrMessage('Incorrect password. Please try again.');
        } else {
          setErrMessage('An error occurred. Please try again later.');
        }
      }
    }
  };

  const handleSignUp = async () => {
    const message = validateSignUpData(name.current.value, email.current.value, password.current.value);
    if (message) {
      setErrMessage(message);
    } else {
      try {
        const response = await axios.post('http://localhost:8082/signUp', {
          name: name.current.value,
          email: email.current.value,
          password: password.current.value,
        });
        setToggleLoginForm(false);
        console.log('Sign up successful:', response.data);
      } catch (error) {
        if (error.response && error.response.status === 400) {
          setErrMessage('Email already exists. Please try logging in.');
        } else {
          setErrMessage('An error occurred. Please try again later.');
        }
      }
    }
  };

  return (
    <div className="login_component">
      <form className="login_form" onSubmit={(e) => e.preventDefault()}>
        <div className="login_title">
          <p>{toggleSignInForm ? "Sign In" : "Sign Up"}</p>
          <img
            src={cross_icon}
            alt=""
            onClick={() => setToggleLoginForm(false)}
          />
        </div>

        {!toggleSignInForm && (
          <input type="text" placeholder="Enter your Name" ref={name} />
        )}
        <input type="text" placeholder="Enter your Email" ref={email} />
        <input
          type="password"
          placeholder="Enter your Password" ref={password} />

        {errMessage && <p className="error_message">{errMessage}</p>}

        <button onClick={toggleSignInForm ? handleSignIn : handleSignUp}>
          {toggleSignInForm ? "Sign In" : "Sign Up"}
        </button>

        {toggleSignInForm && (
          <p>
            New to NutriTrack?{" "}
            <span
              className="login_bottom"
              onClick={() => setToggleSignInForm(!toggleSignInForm)}
            >
              Click here
            </span>
          </p>
        )}
        {!toggleSignInForm && (
          <p>
            Already have an account?{" "}
            <span
              className="login_bottom"
              onClick={() => setToggleSignInForm(!toggleSignInForm)}
            >
              Click here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login2;
