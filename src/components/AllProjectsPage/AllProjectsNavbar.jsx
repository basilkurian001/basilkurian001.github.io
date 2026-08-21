import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useNavigate } from "react-router-dom";

function AllProjectsNavbar({ mode, modeChange }: any) {
  const navigate = useNavigate();

  return (
    <AppBar position="fixed" className="navbar-fixed-top">
      <Toolbar className="navigation-bar">

        {/* 🔹 LEFT: Theme toggle */}
        <IconButton color="inherit" onClick={modeChange}>
          {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>

        {/* 🔹 RIGHT: Home button */}
        <Box sx={{ flexGrow: 1 }} /> {/* pushes button to right */}

        <Button color="inherit" onClick={() => navigate("/")}>
          Home
        </Button>

      </Toolbar>
    </AppBar>
  );
}

export default AllProjectsNavbar;