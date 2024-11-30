import React from 'react'
import "./Hero.css"
import dark_arrow from "../../assets/dark-arrow.png"

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>Welcome to my website!</h1>
            <p>This website is inspired by the youtube tutorial by GreatStack. I chose to do this project to deepen my understanding in reactjs</p>
            <button className='btn'>Explore More <img src={dark_arrow} alt="dark arrow" /></button>
        </div>
    </div>
  )
}

export default Hero