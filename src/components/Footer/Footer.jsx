import React from 'react'

import '../Footer/Footer.css'
import icon from '../../assets/story-image1.jpg'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className='text-white'>
            <img className='footer-icon' src={icon} alt="" />
            <h6>Thank you for visiting my site!</h6>
            <p>&copy; {currentYear} Roman Kucher</p>
        </footer>
    )
}

export default Footer