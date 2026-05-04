import React, { useEffect } from "react";
import smartCanteen from "../assets/images/smart_canteen_screenshot.png";
import shipSim from "../assets/images/ship_sim_screenshot.png";
import resuMate from "../assets/images/resumate_screenshot.png";


function AllProjects() {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

  const projects = [
    {
      id: 1,
      title: "ResuMate - Ai",
      image: resuMate,
      description: "An Ai based resume analyzer designed to make your resume more professional using the power of Artificial Intelligence.",
      live: "https://resumate.duckdns.org",
    },
    {
      id: 2,
      title: "Smart Canteen",
      image: smartCanteen,
      description: "A full stack application designed to make canteen operations more efficient.",
    },
    {
      id: 3,
      title: "Ship Simulator",
      image: shipSim,
      description: "A Ship Simulator built using Unity Engine.",
    },
  ];

  return (
    <div className="all-projects-container">
      <h1>All Projects</h1>

          <div className="projects-grid">
              {projects.map((project) => (
                  <div key={project.id} className="project-card">
                      <img src={project.image} alt={project.title} />
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>

                      {/* ✅ FIX: put inside map */}
                      {project.live && (
                          <div className="project-links">
                              <a href={project.live} target="_blank" rel="noreferrer">
                                  Click here for Live Demo
                              </a>
                          </div>
                      )}

                  </div>
              ))}
          </div>
    </div>
  );
}

export default AllProjects;