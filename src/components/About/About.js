import React, { Component } from 'react'
import './About.css';
import Navbar from '../Navbar/Navbar';
export default class About extends Component {
  render() {
    return (
      <><Navbar />
      <div className='about-main'>
        <h5>
          "Our website, NutriTrack, is a comprehensive platform designed to empower users in their journey
          towards better health and nutrition. With features ranging from vitamin deficiency awareness and dietary guidance to calorie tracking and nutritionist connect, NutriTrack offers a holistic approach to promoting well-being. Users can explore detailed information about various diseases caused by vitamin deficiencies, understand the importance of vitamins in maintaining overall health, and discover dietary sources rich in specific nutrients. Additionally, our calorie tracking tool enables users to monitor their daily intake and make informed decisions about their diet, while the nutritionist connect module facilitates personalized guidance and support from qualified professionals. With an intuitive interface and a wealth of resources, NutriTrack aims to educate, inspire, and empower individuals to take control of their health and embrace a balanced lifestyle."</h5>
      </div></>
    )
  }
}
