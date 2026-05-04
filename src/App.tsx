import React, { useState, useEffect } from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from "./components/FadeIn";
import AllProjects from "./pages/AllProjects";
import ProjectsNavbar from "./components/AllProjectsPage/AllProjectsNavbar"; // 👈 new navbar
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.scss";

function App() {
  const [mode, setMode] = useState<string>("dark");

  const handleModeChange = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <Router>
      <div className={`main-container ${mode === "dark" ? "dark-mode" : "light-mode"}`}>

        <Routes>

          {/* 🔥 Homepage */}
          <Route
            path="/"
            element={
              <>
                <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
                <FadeIn transitionDuration={700}>
                  <Main />
                  <Expertise />
                  <Timeline />
                  <Project />
                  <Contact />
                </FadeIn>
              </>
            }
          />

          {/* 🔥 All Projects Page */}
          <Route
            path="/AllProjects"
            element={
              <>
                <ProjectsNavbar mode={mode} modeChange={handleModeChange} />
                <AllProjects />
              </>
            }
          />

        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;