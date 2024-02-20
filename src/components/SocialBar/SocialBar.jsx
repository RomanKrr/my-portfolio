import React from 'react'
import '../SocialBar/SocialBar.css'

import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialBar = () => {
    return (
        <div className='social-bar'>
            <a href="https://www.instagram.com/_hoxiss/" className='social-bar-link'>
                <FaInstagram className='social-bar-icon fs-3' style={{ color: '#FFA300' }} />
            </a>
            <a href="https://twitter.com/_marrcelo" className='social-bar-link'>
                <FaXTwitter className='social-bar-icon fs-3' style={{ color: '#FFA300' }} />
            </a>
            <a href="https://www.linkedin.com/in/roman-kucher-45b874274/" className='social-bar-link'>
                <FaLinkedin className='social-bar-icon fs-3' style={{ color: '#FFA300' }} />
            </a>
            <a href="https://github.com/RomanKrr" className='social-bar-link'>
                <FaGithub className='social-bar-icon fs-3' style={{ color: '#FFA300' }} />
            </a>
        </div>
    )
}

export default SocialBar