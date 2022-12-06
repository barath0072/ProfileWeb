import React from 'react'
import Footer from '../components/footer'
import HeroImg2 from '../components/HeroImg2'
import Navbar from '../components/navbar'
import PricingCard from '../components/PricingCard'
import Work from '../components/Work'

const Project = () => {
    return (
        <div>
            <Navbar/>
            <HeroImg2 heading={"Projects"} text={"I Doing Some Web & Mobile App's"}/>
            <Work/>
            <PricingCard/>
            <Footer/>
        </div>
    )
}

export default Project