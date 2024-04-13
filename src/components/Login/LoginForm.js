// components/LoginForm.js
import React,{useEffect} from 'react';
import Input from './Input';
import './login.css';
function LoginForm({ mode }) {
  useEffect(() => {
    // Scroll to the top of the page when component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <form>
      <div className="form-block__input-wrapper">
        {mode === 'login' ? (
          <div className="form-group form-group--login">
            <Input className="input-login-sp" type="text" id="username" label="user name" /><br/><br/>
            <Input className="input-login-sp" type="password" id="password" label="password" /><br/><br/>
          </div>
        ) : (
          <div className="form-group form-group--signup">
            <Input className="input-login-sp" type="text" id="fullname" label="full name" /><br/><br/>
            <Input className="input-login-sp" type="email" id="email" label="email" /><br/><br/>
            <Input className="input-login-sp" type="password" id="createpassword" label="password" /><br/><br/>
            <Input className="input-login-sp" type="password" id="repeatpassword" label="Retype password" /><br/><br/>
          </div>
        )}
      </div>
      <button className="button-login button--primary full-width" type="submit">
        {mode === 'login' ? 'Log In' : 'Sign Up'}
      </button>
    </form>
  );
}

export default LoginForm;
