import React from 'react'
import "./Hero.css"
import Video from "../../video/hero.mp4"
import {AiOutlineSearch} from 'react-icons/ai'

function Hero() {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
                <source src={Video} type='video/mp4' />
            </video>
            <div className="overlay"></div>
            <div className="content">
                <h1>Explore the Sea</h1>
                <h2>Freedom, open air, and adventure. </h2>
            </div>
    </div>
  )
}

export default Hero
