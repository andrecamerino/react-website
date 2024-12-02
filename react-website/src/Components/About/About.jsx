import React from 'react'
import "./About.css"
import about_img from "../../assets/about.png"
import play_icon from "../../assets/play-icon.png"

const About = ({ setPlayState }) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={() => {setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>About University</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Here is some description text. I lowkey don't even know what to say here. Well anyways I jsut turned on word wrap so that this would be easier to write.</p>
            <p>Oh my goody goody gumdrops - I have jsut found myself in a new p tag omg. I somehow teleported. Want to see me do it again?</p>
            <p>WOW I just did it again. I guess I am that guy frfr.</p>
        </div>
    </div>
  )
}

export default About