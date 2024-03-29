import React from 'react';
import { skills } from '../../utils/constants.js';

const Skills = ()=>{
    return (
        <div className='skills' id='skill'>
            <div className='heading'>
                <h1 align="center">Skills</h1>
                <p align="center">Here are some of my skill on which I have been working on for more than a year </p>
            </div>
            <div className='skillsDiv'>
                {
                    skills.map((res)=>{
                        return (
                            <div key={res.title} className='SkillContanier'>
                                <h5 className='skillHeading'>{res.title}</h5>
                                <div className='skillList'>
                                    {
                                        res.skill.map((res)=>{
                                            return(
                                                <div key={res.name} className='skillItem'>
                                                    <img src={res.img} alt="" />
                                                    <span>{res.name}</span>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Skills