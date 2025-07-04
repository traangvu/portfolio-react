import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about1.png";
import exchange_img from "../../assets/exchange.png";
import graduate_img from "../../assets/graduate.png";

const About = () => {
    return (
        <div id="about" className="about">
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img className="about_img" src={graduate_img} alt="" />
                <img className="about_img" src={exchange_img} alt="" />
                <img className="about_img" src={profile_img} alt="" />
            </div>
            <div className="about-right">
            <div className="about-para">
                <p>
                I’m a senior student majored in Software Engineering at Metropolia University of Applied Sciences in Finland. 
                I feel enthusiastic in software engineering and that’s why I switched my career from Business to IT.
                </p>
                <p>
                I graduated with BBA degree from South Eastern Finland AMK in 2018, then I came back to Vietnam working as a business development executive in a tech company - ABIVIN focusing on route optimization solutions for logistics parties in FMCG and transportation field. After that, I returned back to Lahti - Finland and opened a Vietnamese restaurant in Lahti. As a passionate person with diverse background in business and entrepreneurship, I hope to bring a dynamic skill set to be able to align with your company’s goals.
                </p>
            </div>
            <div className="about-para">
                <p>
                One of my ultimate goals is to develop my career path by seeking a job opportunity in the field of software engineering in Finland. 
                </p>
                <p>
                In spring 2024, I’m honoured to be selected to go on exchange in Ireland at Munster Technology University, completed my fulfilled academic and self-discovered journey successfully. 
                I love discovering cultures through food, that’s why I love traveling and connecting people too.           </p>
            </div>
            <div className="about-para">
                <p>
                In summer 2024, I was working as a Cloud Software Engineering trainee at Kempower, I gained experience in both front-end and backend
                development with Angular, JavaScript and AWS cloud services. I
                developed and maintained web application interfaces, integrated
                AWS services like Lambda and S3, and ensured code quality through
                Jest and Playwright testing.
                </p>
                <p>
                My strong teamwork and dedication to learning drive my goal of
                creating impactful, user-friendly applications that solve
                real-world problems.
                </p>
            </div>

            <div className="about-skills">
                <div className="about-skill">
                <p>React JS</p>
                <hr style={{ width: "70%" }} />
                </div>
                <div className="about-skill">
                <p>Javascript</p>
                <hr style={{ width: "60%" }} />
                </div>
                <div className="about-skill">
                <p>Java</p>
                <hr style={{ width: "50%" }} />
                </div>
                <div className="about-skill">
                <p>MERN stack</p>
                <hr style={{ width: "50%" }} />
                </div>
                <div className="about-skill">
                <p>AWS services</p>
                <hr style={{ width: "50%" }} />
                </div>
                <div className="about-skill">
                <p>NoSQL, SQL</p>
                <hr style={{ width: "50%" }} />
                </div>
                <div className="about-skill">
                <p>Jest Testing</p>
                <hr style={{ width: "50%" }} />
                </div>
            </div>

            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
            <h1>4 years</h1>
            <p> BACHELOR OF ENGINEERING </p>
            <p>at METROPOLIA UNIVERSITY OF APPLIED SCIENCES</p>
            </div>
            <hr />
            <div className="about-achievement">
            <h1>10+</h1>
            <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
            <h1>6 months</h1>
            <p>CLOUD SOFTWARE ENGINEERING TRAINEE</p>
            <p> at KEMPOWER</p>
            </div>
            <hr />
        </div>
        </div>
    );
};

export default About;
