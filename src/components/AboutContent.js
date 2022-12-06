import './AboutContentStyles.css'
import React from 'react'
import { Link } from 'react-router-dom'
import about_1 from '../assets/about_1.jpg'
import about_2 from '../assets/about_2.jpg'

const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Who Am I?</h1>
                <p>
                    I'm a React Full-Stack Developer, I Create secure And Responsive website for my Clients
                </p>
                <Link to="/contact">
                    <button className="btn">Contact</button>
                </Link>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={about_1} className="img" alt="true" />
                    </div>
                    <div className="img-stack bottom">
                        <img src={about_2} className="img" alt="true" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent