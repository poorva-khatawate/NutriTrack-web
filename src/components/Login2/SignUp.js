import React, { useRef, useState } from "react";
import "./Login2.css";
import cross_icon from "./cross_icon.png";
import { validateFormData } from "../../utils/validate";
import axios from 'axios';

const SignUp = ({ setToggleLoginForm }) => {
  const [toggleSignInForm, setToggleSignInForm] = useState(true);
  const [errMessage, setErrMessage] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const validateForm = async() => {
    const message = validateFormData(
      email.current.value,
      password.current.value
    );
    setErrMessage(message);
  }
  
  return (
    <div className="login_component">
      <form className="login_form" method="POST"
      action="http://localhost:8082/signUp" onSubmit={(e) => e.preventDefault()}>
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
          placeholder="Enter your Password"
          ref={password}
        />
        {errMessage && <p className="error_message">{errMessage}</p>}
        <button onClick={validateForm}>
          {toggleSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {toggleSignInForm && (
          <p>
            New to NutriTrack ?{" "}
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
            Already have an account ?{" "}
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
}
export default SignUp;