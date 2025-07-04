import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img1.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
return (
<div id='home' className='hero'>
    <img className="hero-profile-img" src={profile_img} alt="" />
    <h1><span>I'm Trang Vu,</span> full-stack software developer based in Finland.</h1>
    <p>As a software engineering student at Metropolia University of Applied Sciences, I am passionate about developing scalable solutions using Angular, AWS, Python, JavaScript, the MERN stack, and Java OOP. I hold AWS Academy Graduate and Networking Essentials certifications, highlighting my skills in cloud computing and network engineering.</p>
    <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div
            className="hero-resume"
            onClick={() => window.open('/CVTrang4.pdf', '_blank', 'noopener,noreferrer')}
            >
            My resume
        </div>
    </div>
</div>
)
}

export default Hero
