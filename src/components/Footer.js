import React from 'react'
import twitter from '../images/Twitter.png'
import facebook from '../images/Facebook.png'
import instagram from '../images/Instagram.png'
import github from '../images/GitHub.png'

export default function Footer() {
    return (
        <div className="footer">
                <img src={twitter} alt="twitter icon"/>
                <img src={facebook} alt="facebook icon"/>
                <img src={instagram} alt="instagram icon"/>
                <img src={github} alt="github icon"/>
        </div>
    )
}