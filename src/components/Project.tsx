import React from "react";
import smartCanteenScreenshot from '../assets/images/smart_canteen_screenshot.png'
import ShipSimScreenshot from '../assets/images/ship_sim_screenshot.png'
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    <img src={smartCanteenScreenshot} className="zoom" alt="thumbnail" width="100%" />
                    <h2>Smart Canteen</h2>
                    <p>A full stack application designed to make canteen operations more efficient.</p>
                </div>
                <div className="project">
                    <img src={ShipSimScreenshot} className="zoom" alt="thumbnail" width="100%" />
                    <h2>Ship Simulator</h2>
                    <p>A Ship Simulator built using Unity Engine.</p>
                </div>
            </div>
        </div>
    );
}

export default Project;