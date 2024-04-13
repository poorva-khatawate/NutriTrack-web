// components/LoginComponent.js
import React, { useState,useEffect } from 'react';
import LoginForm from './LoginForm';

function LoginComponent() {
  const [mode, setMode] = useState('login');
  useEffect(() => {
    // Scroll to the top of the page when component mounts
    window.scrollTo(0, 0);
  }, []);
  const toggleMode = () => {
    setMode(mode === 'login' ? 'signup' : 'login');
  };
  
  return (
    <><div /><div className="container-login-main">
      <div className={`form-block-wrapper form-block-wrapper--is-${mode}`}>
        <section className={`form-block form-block--is-${mode}`}>
          <header className="form-block__header">
            <h1 className='login-h1' style={{ fontWeight: 'bold' }}>{mode === 'login' ? 'Welcome back!' : 'Sign up'}</h1>
            <div className="form-block__toggle-block">
              <span className='login-span' style={{ fontSize: '22px',fontFamily:600,color: 'black',fontWeight:'bolder'}}>{mode === 'login' ? "Don't" : 'Already'} have an account? Click here &#8594;  </span>
              <input id="form-toggler" type="checkbox" onClick={toggleMode} />
              <label htmlFor="form-toggler"></label>
            </div>
          </header>
          <LoginForm mode={mode} />
        </section>
      </div>
    </div></>
  );
}

export default LoginComponent;
