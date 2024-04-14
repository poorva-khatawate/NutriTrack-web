import React, { Component } from 'react'
import './tracknavbar.css';
import { Link } from 'react-router-dom';
export default class Tracknavbar extends Component {
  render() {
    return (
      <div className='track-main'>
        <Link className="track-links" to ="/breakfast">Breakfast</Link>
        <Link className="track-links" to ="/fruits">Fruits</Link>
        <Link className="track-links" to ="/vegetable">Vegetables</Link>
        <Link className="track-links" to ="/beverages">Beverages</Link>
        <Link className="track-links" to ="/junkfood">JunkFood</Link>
        <Link className="track-links" to ="/dessert">Desserts</Link>
      </div>
    )
  }
}
