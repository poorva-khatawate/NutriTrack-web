import React, { Component } from 'react'
import './Home.css';
import { Link } from 'react-router-dom';


export default class Home extends Component {
  render() {
    return (
      <><div className='sq-main'>
      <><div className='sq-box1'>
        <div className='box1-inner'>
          <h1 className='be-h'>Be healthy</h1>
          <h1 className='be-h'>Choose what you eat!</h1>
            <h2 className='be-h'>Learn about the nutrients of the food you eat</h2>
            <h3 className='be-h'>Count your calories</h3>
            <Link to="/login" className='btn-login'>Get started <span>&#8594;</span></Link>
          </div>
        <div className='box2-inner'>
          <img className='img-box2' src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='img'></img>
        </div>
      </div>
        <div className='sq-box2'>
          <h2>Find food by vitamns</h2>
          <div className='vitamin-list'>
            <Link className='vitamin-links' to="/vitaminA">VitaminA</Link>
            <Link className='vitamin-links' to="/vitaminB">VitaminB</Link>
            <Link className='vitamin-links' to="/vitaminC">VitaminC</Link>
            <Link className='vitamin-links' to="/vitaminD">VitaminD</Link>
            <Link className='vitamin-links' to="/vitaminE">VitaminE</Link>
            <Link className='vitamin-links' to="/vitaminK">VitaminK</Link>

          </div>
        </div>
        <div className='sq-box3'>
          <h2>Count your calories intake</h2>
        </div>
      </>
      </div>
      </>
     
    )
  }
}
