import React from 'react';
import Typewriter from 'typewriter-effect';
import { heroImg,detail } from '../../utils/constants';

const HeroSection = ()=>{
    const {name,about} = detail?.personalDetails;
    return(
        <div className='heroSection' id='about'>
            <div className='rigth heroDiv'>
                <div className="rightContent">
                    <video controls> <source src='../../public/video/hero_v.webm' type="video/mp4" /> </video>
                </div>
                {/* <img src={heroImg} alt="img logoo" /> */}
            </div>
            <div className='left heroDiv'>
                <div className='content'>
                    <p>Hi, It's me</p>
                    <p><span className='special'>{name}</span>,</p>
                    <p><Typewriter options={{autoStart:true,loop:true,delay:150,pauseFor:200,strings:['A Full Stack Developer']}}/></p>
                    <p className='about'>{about}</p>
                </div>
            </div>
            
        </div>
    )
}

export default HeroSection;