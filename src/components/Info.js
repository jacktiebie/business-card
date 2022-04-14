import React from 'react'
import email from '../images/Mail.png'
import linkedin from '../images/linkedin.png'
import profile from '../images/profile.png'

export default function Info() {
    return (
        <>
        <img src={profile} alt='profile picture' className="img"/>
        <h1 className="info-h1">Jack Tiebie</h1>
        <h5>Fullstack Developer</h5>
        <p className="info-website">info@jacktiebie.com</p>
        <div className="Info-Buttons-Container">
        <button className='button-email'>
            <img src={email} alt="Email Icon" />
            <span className='button-email-text'>Email</span>
        </button>
        <button className='button-linkedin'>
        <img src={linkedin} alt="LinkedIn Icon" />
            <span>LinkedIn</span>
        </button>
        </div>
        </>
    )
}