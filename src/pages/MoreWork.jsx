import React from "react";
import "./MoreWork.css";
import theme_pattern from "../assets/theme_pattern.svg";
import morework_data from "../assets/morework_data.js";
import arrow_icon from "../assets/arrow_icon.svg";
import { useNavigate } from "react-router-dom";

const MoreWork = () => {
    const navigate = useNavigate();

    return (
        <div className="morework">
        <div className="morework-title">
            <h1>More of My Work</h1>
            <img src={theme_pattern} alt="pattern" />
        </div>

        <div className="morework-projects">
            {morework_data.map((work, index) => (
            <div key={index} className="morework-project">
                <img src={work.w_img} alt={work.title} />
                <div className="morework-details">
                <h2>{work.title}</h2>
                <p className="description">{work.description}</p>
                <p className="tech"><strong>Tech Stack:</strong> {work.techStack.join(", ")}</p>
                <a href={work.github} target="_blank" rel="noopener noreferrer" className="github-link">
                    View Code on GitHub
                </a>
                </div>
            </div>
            ))}
        </div>

        <div className="morework-back" onClick={() => navigate("/")}>
            <img src={arrow_icon} alt="Back arrow" />
            <p>Back to Home</p>
        </div>
        </div>
    );
};

export default MoreWork;
