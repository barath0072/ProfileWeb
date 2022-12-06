import './FormStyles.css'
import React from 'react'

const Form = () => {
    return (
        <div className="form">
            <h1 className="Form-heading">CONTACT</h1>
            <label>Your Name</label>
            <input type="text"></input>
            <label>E-Mail</label>
            <input type="email"></input>
            <label>Subject</label>
            <input type="text"></input>
            <label>Message</label>
            <textarea rows="6" placeholder="Type your message here" />
            <button className="btn">Submit</button>
        </div>
    )
}

export default Form