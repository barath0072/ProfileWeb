import './NavbarStyles.css'
import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar =()=>{
    const [click , setClick] = useState(false)
    const [color , setColor] = useState(false)
    const handleClick = () =>{
        setClick(!click)
    }
    const colorChange = () => {
        if(window.scrollY >= 100){
            setColor(true)
        }else{
            setColor(false)
        }
    }

    window.addEventListener("scroll", colorChange)

    return(
        <div className={color ? "header header-bg" : "header"}>
            <Link to='/'>
                <h1>Profile.</h1>
            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to='/'>Home</Link> 
                </li>
                <li>
                    <Link to='/project'>Project</Link> 
                </li>
                <li>
                    <Link to='/about'>about</Link> 
                </li>
                <li>
                    <Link to='/contact'>contact</Link> 
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{color:"#fff"}}/>):
                (<FaBars size={20} style={{color:"#fff"}}/>)}
            </div>
        </div>
    )
}

export default Navbar