import React from 'react';
import { signOut } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import './Navrbar.css';
import { auth } from '../../Firebase';
const Navbar = () => {
  const navigate=useNavigate();

const handleLogOut = () => {
  signOut(auth).then(() => {
    // Sign-out successful.
    navigate("/");
  }).catch((error) => {
    // An error happened.
  });
  };

  return (
    <div className='navbarr'>
      <div className='nav-leftt'>
        <h1 className='nav-logo'>FoodWeb</h1>
        </div>
        <div className='nav-search'>
        <Link to="/home" className='nav-links'>Home</Link>
        <Link to="/about" className='nav-links'>About</Link>
        <Link to="/" className='nav-links' onClick={handleLogOut}>Logout</Link>
        </div>
      </div>
  );
}

export default Navbar;


