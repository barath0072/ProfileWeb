import React from 'react'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import HeroImg2 from '../components/HeroImg2'
import AboutContent from '../components/AboutContent'

const About = () => {
    return (
        <div>
            <Navbar/>
            <HeroImg2 heading={"ABOUT ME"} text={"I'm a React Full-Stack Developer"}/>
            <AboutContent/>
            <Footer/>
        </div>
    )
}

export default About