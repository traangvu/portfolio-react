import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/cat_img.png'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className='about-sections'>
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>At Kempower, I gained experience in both front-end and backend development with Angular, JavaScript and AWS cloud services. I developed and maintained web application interfaces, integrated AWS services like Lambda and S3, and ensured code quality through Jest and Playwright testing.</p>
                        <p>My strong teamwork and dedication to learning drive my goal of creating impactful, user-friendly applications that solve real-world problems.</p>
                    </div>
                
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                        <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/></div>
                        <div className="about-skill"><p>Javascript</p><hr style={{width:"60%"}}/></div>
                        <div className="about-skill"><p>AWS</p><hr style={{width:"50%"}}/></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>4 years</h1>
                    <p> BACHELOR OF ENGINEERING at METROPOLIA UNIVERSITY OF APPLIED SCIENCES</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>6 months</h1>
                    <p>CLOUD SOFTWARE ENGINEERING TRAINEE at KEMPOWER</p>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default About
