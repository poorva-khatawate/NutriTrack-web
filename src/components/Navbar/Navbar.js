import React from 'react';

import { Link } from 'react-router-dom';
import './Navrbar.css';
const Navbar = () => {
  return (
    <div className='navbarr'>
      <div className='nav-leftt'>
        <h1 className='nav-logo'>FoodWeb</h1>
        </div>
        <div className='nav-search'>
        <Link to="/" className='nav-links'>Home</Link>
        <Link to="/about" className='nav-links'>About</Link>
        <Link to="/login" className='nav-links'>Login</Link>
        </div>
      </div>
  );
}

export default Navbar;


