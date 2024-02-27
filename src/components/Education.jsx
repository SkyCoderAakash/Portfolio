import React from 'react';
import {detail} from '../../utils/constants.js';


const Eduction = ()=>{
    return(
        <div className='education' id="education">
            <div className='heading'>
                <h1 align="center">Education</h1>
                <p align="center">My education has been a journey of self-impovement and growth. My education details are as follow.</p>
            </div>
            <div className="educationDetail">
                {
                    detail.education.map((res)=>{
                        return (
                            <div key={res.grade} className='main'>
                                <div className="upperDiv">
                                    <div className='img'>
                                        <img src={res.img} alt="" />
                                    </div>
                                    <div className='detail'>
                                        <h2>{res.schoolName}</h2>
                                        <h4>{res.batch}</h4>
                                    </div>
                                </div>
                                
                                <h4 className='info'>Grade : &nbsp; {res.grade} <br /><br />{res.info}</h4>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Eduction;