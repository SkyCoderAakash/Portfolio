import React from 'react';
import { detail } from '../../utils/constants';
import { Link,animateScroll as scroll } from 'react-scroll';

const Footer = ()=>{
    return (
        <div className='footer' id='footer'>
            <div className='footerDiv'>
                <h1>{detail.personalDetails.name}</h1>
                <div>
                    <ul>
                        <Link to="about" smooth={true} duration={500}><li><a>About</a></li></Link>
                        <Link to="skill" smooth={true} duration={500}><li><a>Skills</a></li></Link>
                        <Link to="project" smooth={true} duration={500}><li><a>Projects</a></li></Link>
                        <Link to="contact" smooth={true} duration={500}><li><a>Contact</a></li></Link>
                    </ul>
                </div>
                <h4>2024 Aakash Prajapati. All rights reserved</h4>
            </div>
        </div>
    )
};

export default Footer;