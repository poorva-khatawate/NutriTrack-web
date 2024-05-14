import React, { Component } from 'react';
import './tracknavbar.css';
import { Link } from 'react-router-dom';

export default class Tracknavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false
    };
  }

  toggleDropdown = () => {
    this.setState({ isDropdownOpen: !this.state.isDropdownOpen });
  };

  render() {
    const { isDropdownOpen } = this.state;
    const dropdownClass = isDropdownOpen ? 'show' : '';

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={this.toggleDropdown}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${dropdownClass}`} id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/cart" className="nav-link" style={{ fontSize: '28px' }}>Cart</Link>
              <Link to="/breakfast" className="nav-link" style={{ fontSize: '28px' }}>Breakfast</Link>
              <Link to="/fruits" className="nav-link" style={{ fontSize: '28px' }}>Fruits</Link>
              <Link to="/vegetables" className="nav-link" style={{ fontSize: '28px' }}>Vegetables</Link>
              <Link to="/beverages" className="nav-link" style={{ fontSize: '28px' }}>Beverages</Link>
              <Link to="/junkfood" className="nav-link" style={{ fontSize: '28px' }}>JunkFood</Link>
              <Link to="/dessert" className="nav-link" style={{ fontSize: '28px' }}>Desserts</Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
