import React, { Component } from 'react'
import './Home.css';
import { Link } from 'react-router-dom';
import Videoser from './Video/searchele.mp4';
// import { NavDropdown } from 'react-bootstrap';
export default class Home extends Component {
  componentDidMount() {
    // Scroll to the top of the page when component mounts
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <><><><div className='sq-main'>
        <><div className='sq-box1'>
          <div className='box1-inner'>
            <h1 className='be-h'>Be healthy</h1>
            <h1 className='be-h'>Choose what you eat!</h1>
            <h2 className='be-h'>Learn about the nutrients of the food you eat</h2>
            <h3 className='be-h'>Count your calories</h3>
            <Link to="/about" className='btn-login'>Get started <span>&#8594;</span></Link>
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
            <h2>Know about Vitamin Deficiencies <span>&#8594;</span> </h2>
            <Link className='inner-link-v' to="/vitaminv">Click here</Link>
          </div>
        </>
        <div className='sq-box3'>
          <h2>Monitor Your Daily Water Intake<span>&#8594;</span></h2>
          <Link className='inner-link-v' to="/water">Click here</Link>
           
        </div>
        <div className='sq-box6'>
          <h2>Get food recommendations <br></br>using BMI Calculator <span>&#8594;</span> </h2>
          <Link className='inner-link-v6' to="/bmi">Know more</Link>
        </div>
        <div className='sq-box4'>
          <h1>Quick lookup<br></br>of food<br></br>nutritional values<span className='span-sq4'>&#8594;</span></h1>
          <Link to='/search' className='btn-sq4'>
            <video className='video-search' src={Videoser} loop autoPlay muted>
            </video></Link>

        </div>
        <div className='sq-box5'>
          <Link className='link-sq5' to="/nutritionist">
            <div className='inner-sq5'>
              <h1>
                Finding <br></br>a Nutritionist<span>&#8594;</span>
              </h1>
            </div></Link>
          <Link className='link-sq5' to="/CalorieHome">
            <div className='inner-sq5'>
              <h1>Track <br></br>your Calories<span>&#8594;</span></h1>
            </div>
          </Link>
        </div>
        <div className='sq-box7'>
        
        </div>

      </div>
      </>
      </></>
    )
  }
}
