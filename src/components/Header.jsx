import React,{useState} from 'react';
import { Link,animateScroll as scroll } from 'react-scroll';
import { Link as BtnLink } from 'react-router-dom';
import { gitHubBtn,linkedinImg } from '../../utils/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = ()=>{
    const [isMenuActive , setIsMenuActive] = useState(false);
    const clickHandle = ()=>{
        setIsMenuActive(!isMenuActive);
    };
    return (
        <div>
            <div className='header'>
                <div className='headerLogo'>
                    <img className='logo' src="https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg" alt="profile Image" />
                </div>
                <div className="navList">
                    <ul>
                        <Link to="about" smooth={true} duration={500}><li>About</li></Link>
                        <Link to="skill" smooth={true} duration={500}><li>Skills</li></Link>
                        <Link to="project" smooth={true} duration={500}><li>Projects</li></Link>
                        <Link to="contact" smooth={true} duration={500}><li>Contact</li></Link>
                    </ul>
                </div>
                <div className="Btn">
                    <BtnLink to='https://github.com/SkyCoderAakash'><button className='btn'>GitHub </button></BtnLink>
                    <BtnLink to='https://www.linkedin.com/in/aakash-prajapati-b41648296/'><button className='btn'>LinkedIn </button></BtnLink>
                    <BtnLink to='https://github.com/SkyCoderAakash'><img src={gitHubBtn} alt="" /></BtnLink>
                    <BtnLink to='https://www.linkedin.com/in/aakash-prajapati-b41648296/'><img src={linkedinImg} alt="" /></BtnLink>
                </div>
                <div className='fontAwsome'>
                    {
                        isMenuActive==false ? <FontAwesomeIcon onClick={()=>{setIsMenuActive(!isMenuActive)}} className='icon menu' icon={faBars} /> : <FontAwesomeIcon onClick={()=>{setIsMenuActive(!isMenuActive)}} className='icon close' icon={faTimes} />
                    }
                </div>
            </div>
            <div className={isMenuActive==true ? "show" : "hide"}>
                <div className='mobile-menu'  >
                    <ul>
                        <Link onClick={clickHandle} to="about" smooth={true} duration={500}><li>About</li></Link>
                        <Link onClick={clickHandle} to="skill" smooth={true} duration={500}><li>Skills</li></Link>
                        <Link onClick={clickHandle} to="project" smooth={true} duration={500}><li>Projects</li></Link>
                        <Link onClick={clickHandle} to="contact" smooth={true} duration={500}><li>Contact</li></Link>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Header;