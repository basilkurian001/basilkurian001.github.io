import React from "react";
import '@fortawesome/free-regular-svg-icons'
import fullStackLogo from "../assets/images/full_stack_logo.png"
import androidLogo from "../assets/images/white_android_logo.png"
import gameControllerIcon from "../assets/images/gameController_icon_white.png"
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { Server } from "lucide-react";

const labelsFirst = [
    "JavaScript",
    "Express",
    "Node",
    "HTML5",
    "CSS3",
    "SQL",
];

const labelsSecond = [
    "Android Studio",
    "Flutter",
    "Dart",
    "SQLite",
    "REST APIs",
    "Firebase"
];

const labelsThird = [
    "Unity",
    "C#",
];

const labelsFourth = [
    "AWS",
    "Linux",
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Skills</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <img src={fullStackLogo} alt="Full Stack" width="60" />
                        <h3>Full Stack Web Development</h3>
                        <p>I have built a diverse array of web applications from scratch using modern technologies. I have a strong proficiency in frontend + backend development.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <img src={androidLogo} alt="Full Stack" width="60" />
                        <h3>Android App Development</h3>
                        <p>I design and develop robust, user-friendly Android applications tailored to deliver seamless performance and intuitive user experiences. I have hands-on experience creating responsive apps that ensure reliability, performance, and a smooth user journey across different Android devices.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <img src={gameControllerIcon} alt="Full Stack" width="60" />
                        <h3>Game Development</h3>
                        <p>I am currently exploring game development, focusing on building interactive experiences using modern tools and frameworks. I’m learning core concepts like game physics, object interactions, and real-time rendering while experimenting with different mechanics and design patterns. Through hands-on projects, I aim to create smooth and immersive gameplay experiences.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsThird.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <Server size={48} />
                        <h3>Cloud and System Administration</h3>
                        <p>
                            I have hands-on experience working with cloud infrastructure, including provisioning and managing AWS EC2 instances, 
                            configuring Linux environments, and ensuring reliable system performance. 
                            I’ve worked on server setup, SSH access, and basic deployment workflows while focusing on stability 
                            and efficient resource usage.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsFourth.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;