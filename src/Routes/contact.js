import React from 'react'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import HeroImg2 from '../components/HeroImg2'
import Form from '../components/Form'

const Contact = () => {
    return (
        <div>
            <Navbar/>
            <HeroImg2 heading={"CONTACT."} text={"My Profile is suitable for Your Expecting Job Role Please Contact Me"}/>
            <Form/>
            <Footer/>
        </div>
    )
}

export default Contact