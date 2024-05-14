import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbarnew.css";

const Navbarnew = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  
  return (
    <nav>
      <Link to="/" className="title">
        NutriTrack
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/home" onClick={() => setMenuOpen(false)}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
        </li>
        <li>
          {/* <NavLink to="/" onClick={handleLogOut}>Logout</NavLink> */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbarnew;
