import React from 'react';
import Skills from './Skills';
import Eduction from './Education';
import Project from './Projects';

const Body = ()=>{
    return (
        <div className='body'>
            <Skills/>
            <Eduction/>
            <Project/>
        </div>
    )
}

export default Body;