import React from 'react';
import { detail } from '../../utils/constants';

const Project = ()=>{
    return(
        <div className='projects' id='project'>
            <div className='heading'>
                <h1 align="center">Projects</h1>
                <p align="center">I worked of many Projects and learnt a lot of things. Here are some of my Projects</p>
            </div>
            <div className="projectContainer">
                {
                    detail.projects.map((res)=>{
                        return (
                            <div key={res.id} className='projectItem'>
                                <div className='img'>
                                    <img src={res.img} alt="" />
                                </div>
                                <div className='content'>
                                    <div className='langauages'>
                                        {
                                            res.langauages.map((res)=>{
                                                return (
                                                    <div key={res} className='item'>{res}</div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className='detail'>
                                        <h2>{res.name}</h2>
                                        <p>{res.info}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Project;