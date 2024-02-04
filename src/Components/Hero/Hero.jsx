import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
import {Link} from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hero-hand-icon">
                    <p className='hero-p'>new</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>constructors</p>
                <p>for everyone</p>
            </div>
        </div>
    </div>
  )
}

export default Hero
