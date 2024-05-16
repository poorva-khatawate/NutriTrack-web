import React, { useState } from 'react'
import './Login2.css'
import cross_icon from './cross_icon.png'

const Login2 = ({setToggleLoginForm}) => {
    const [toggleSignInForm, setToggleSignInForm] = useState(true);
    return (
        <div className='login_component'>
            <form className="login_form" onSubmit={(e) => e.preventDefault()}>
                <div className="login_title">
                    <p>{toggleSignInForm ? "Sign In" : "Sign Up"}</p>
                    <img src={cross_icon} alt="" onClick={()=>setToggleLoginForm(false)}/>
                </div>

                {!toggleSignInForm && <input type="text" placeholder='Enter your Name' />}
                <input type="text" placeholder='Enter your Email' />
                <input type="password" placeholder='Enter your Password' />
                <button >{toggleSignInForm ? "Sign In" : "Sign Up"}</button>
                {toggleSignInForm && <p >New to NutriTrack ? <span className='login_bottom' onClick={() => setToggleSignInForm(!toggleSignInForm)}>Click here</span></p>}
                {!toggleSignInForm && <p>Already have an account ? <span className='login_bottom' onClick={() => setToggleSignInForm(!toggleSignInForm)}>Click here</span></p>}
            </form>
        </div>
    )
}

export default Login2