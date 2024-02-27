import React from 'react';
import Typewriter from 'typewriter-effect';
import { detail } from '../../utils/constants';
// import bgVideo from '../../public/video/hero_v.webm'

const HeroSection = ()=>{
    const {name,about} = detail?.personalDetails;
    return(
        <div className='heroSection' id='about'>
            <div className='rigth heroDiv'>
                <div className="rightContent">
                    <video controls autoPlay loop> <source src='../../public/video/hero_v.webm' type="video/mp4" /> </video>
                    {/* <video src={bgVideo} /> */}
                </div>
            </div>
            <div className='left heroDiv'>
                <div className='content'>
                    <p>Hi, It's me</p>
                    <p><span className='special'>{name}</span>,</p>
                    <p><Typewriter options={{autoStart:true,loop:true,delay:150,pauseFor:200,strings:['Full stack web developer']}}/></p>
                    <p className='about'>{about}</p>
                </div>
            </div>
            
        </div>
    )
}

export default HeroSection;