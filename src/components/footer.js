import './footerStyles.css'
import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                        <div>
                            <p>No:233,Mandaiveli Amman koil(st).</p>
                            <p>Thenneri,Kanchipuram-(Dt)</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: '#fff', marginRight: '4rem' }} />
                            9003156136</h4>
                    </div>
                    <div className="E-Mail">
                        <h4><FaMailBulk size={20} style={{ color: '#fff', marginRight: '4rem' }} />
                            cbarath2000@gmail.com</h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About me</h4>
                    <p>I'm a React Full-Stack Developer i'm working on live project in truck booking apps and web using react and native</p>
                    <div className="social">
                        <FaFacebook size={30} style={{color:'#fff',marginRight:'0.5rem'}} />
                        <FaTwitter size={30} style={{color:'#fff',marginRight:'0.5rem'}} />
                        <FaLinkedin size={30} style={{color:'#fff',marginRight:'0.5rem'}} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer