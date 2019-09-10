import React from 'react';
//import {NavLink} from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';
import { FaGlobe } from 'react-icons/fa';

const Footer = () => (
    <footer className="footer-section">
    <div className='main'>
    <p>For Business enquiries or work enquiries you can contact me on my company site:</p>
    <p><span><FaGlobe /></span><a href='https://www.steponemedia.co.uk/contact-us/'> Step One Media</a></p>
    <p>Or</p>
    <p> <span><FaLinkedin /></span> <a href=' https://www.linkedin.com/in/krisstibbs'> Linkedin</a></p>
    </div>
    </footer>
);

export default Footer;