import React from 'react';
import { Link} from 'react-router-dom';
import './Navbar.css';
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = ({ toggleLoginForm, setToggleLoginForm }) => {
  const navigate=useNavigate();

// const handleLogOut = () => {
//   signOut(auth).then(() => {
//     // Sign-out successful.
//     navigate("/");
//   }).catch((error) => {
//     // An error happened.
//   });
//   };

  return (
    <div className='navbarr'>
      <div className='nav-leftt'>
        <h1 className='nav-logo'>NutriTrack</h1>
        </div>
        <div className='nav-search'>
        <Link to="/" className='nav-links'>Home</Link>
        <Link to="/about" className='nav-links'>About</Link>
        {/* <Link to="/" className='nav-links' onClick={handleLogOut}>Logout</Link> */}
        <p className='nav-links sign_btn' onClick={() => setToggleLoginForm(true)}>Sign in</p>
        </div>
      </div>
  );
}

export default Navbar;


