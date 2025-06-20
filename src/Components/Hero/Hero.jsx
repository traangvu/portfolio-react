import React from 'react'
import './Hero.css'
import profile_img from '../../assets/cat_img.png'

const Hero = () => {
return (
<div className='hero'>
    <img src={profile_img} alt="" />
    <h1><span>I'm Trang Vu,</span> full-stack software developer based in Finland.</h1>
    <p>As a software engineering student at Metropolia University of Applied Sciences, I am passionate about developing scalable solutions using Angular, AWS, Python, JavaScript, the MERN stack, and Java OOP. I hold AWS Academy Graduate and Networking Essentials certifications, highlighting my skills in cloud computing and network engineering.</p>
    <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
    </div>
</div>
)
}

export default Hero
