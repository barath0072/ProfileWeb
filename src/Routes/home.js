import React from 'react'
import Footer from '../components/footer'
import Form from '../components/Form'
import HeroImg from '../components/HeroImg'
import Navbar from '../components/navbar'
import PricingCard from '../components/PricingCard'
import Work from '../components/Work'

const Home = () => {
    return (
        <div>
            <Navbar/>
            <HeroImg/>
            <Work/>
            <PricingCard/>
            <Form/>
            <Footer/>
        </div>
    )
}

export default Home