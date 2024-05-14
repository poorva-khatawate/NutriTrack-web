import React, { useRef, useState } from "react";
import Login_image from "./loginimg.jpeg";
import "./LoginBase.css";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { validateFormData } from "./Validate";
import { auth } from '../../Firebase';
import { useNavigate } from "react-router-dom";

const LoginBase = () => {
  const [toggleSignInForm, setToggleSignInForm] = useState(true);
  const [errMessage, setErrMessage] = useState("");
  const navigate=useNavigate();
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = () => {
    const message = validateFormData(
      email.current.value,
      password.current.value
    );
    setErrMessage(message);
    if (message) return;
    if (!toggleSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
        //   console.log(user);
        navigate("/home");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + ":" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value,
        password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // console.log(user);
    navigate("/home");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrMessage(errorCode+":"+errorMessage);
  });
    }
  };

  return (
    <div className="login_conatiner">
      <div className="login_image_container">
        <img className="login_photo" src={Login_image} alt="" />
      </div>
      <div className="login_flex_container">
        <form className="login_form" onSubmit={(e) => e.preventDefault()}>
          <p className="login_text">
            {toggleSignInForm ? "Sign In" : "Sign Up"}
          </p>
          {!toggleSignInForm && (
            <input type="text" placeholder="Name" className="input_login" />
          )}
          <input
            type="text"
            placeholder="Email Address"
            className="input_login"
            ref={email}
          />
          <input
            type="password"
            placeholder="Password"
            className="input_login"
            ref={password}
          />
          <p className="error_message">{errMessage}</p>
          <button className="login_button" onClick={handleSubmit}>
            {toggleSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="login_bottom_text"
            onClick={() => setToggleSignInForm(!toggleSignInForm)}
          >
            {toggleSignInForm
              ? "New to FoodWeb? SignUp Now"
              : "Already have a account? Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginBase;