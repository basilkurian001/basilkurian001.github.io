import React from "react";
import intervoScreenshot from '../assets/images/intervo_screenshot.png'
import ResuMateScreenshot from '../assets/images/resumate_screenshot.png'
import '../assets/styles/Project.scss';
import { useNavigate } from "react-router-dom";

function Project() {
    const navigate = useNavigate();
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                <div className="project" onClick={() => navigate("/projects/SmartCanteen")}>
                    <img src={intervoScreenshot} className="zoom" alt="thumbnail" width="100%" />
                    <h2>Intervo</h2>
                    <p>A context aware AI-powered voice interview platform designed to help you pratice for your interviews using the power of AI.</p>
                </div>
                <div className="project" onClick={() => navigate("/projects/ResuMate")}>
                    <img src={ResuMateScreenshot} className="zoom" alt="thumbnail" width="100%" />
                    <h2>ResuMate - AI</h2>
                    <p>An Ai based resume analyzer designed to make your resume more professional using the power of Artificial Intelligence.</p>
                </div>
            </div>

            <div className="view-all">
                <button className="view-all-btn" onClick={() => navigate("/AllProjects")}>
                    View All Projects →
                </button>
            </div>
        </div >
    );
}

export default Project;