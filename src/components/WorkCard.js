import './WorkCardStyles.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

const WorkCard = (props) => {
    const { key,
        imgsrc,
        title,
        text,
        view } = props
    return (
        <div className="project-card">
            <img src={imgsrc} alt="image" />
            <h2 className="project-title"> {title}</h2>
            <div className="pro-detail">
                <p>{text}</p>
                <div className="pro-btns">
                    <NavLink to={view} className="btn">
                        View
                    </NavLink>
                    <NavLink to='http://localhost:3000/static/media/pjt_card_1.e17b9536e20d0a2b4e3b.jpg' className="btn">
                        Source
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default WorkCard