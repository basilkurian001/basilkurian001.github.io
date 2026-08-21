import React, { useEffect } from "react";
import ResmateScreenShot from "../../assets/images/resumate_screenshot.png";
import { Box, Container, Typography, Grid, Card, CardContent, Chip, Button } from "@mui/material";
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SpeedIcon from '@mui/icons-material/Speed';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import InsightsIcon from '@mui/icons-material/Insights';
import { TiVendorMicrosoft } from "react-icons/ti";
import { FaLinux, FaLayerGroup } from "react-icons/fa";
import { MdSpeed } from "react-icons/md";
import { useNavigate } from "react-router-dom";


const techStack = [
  "React", "Node.js", "Express", "OpenAI API / NVIDIA API", "Tesseract OCR", "Mammoth", "NGINX", "AWS EC2"
];

const features = [
  {
    title: "ATS Compatibility",
    description: "Evaluates your resume's structure and format against modern Applicant Tracking Systems to ensure it gets read.",
    icon: <SpeedIcon fontSize="large" />
  },
  {
    title: "Keyword Optimization",
    description: "Identifies crucial missing skills and keywords based on your target job description to improve match rates.",
    icon: <FindInPageIcon fontSize="large" />
  },
  {
    title: "Actionable Insights",
    description: "Provides specific, line-by-line recommendations to enhance the impact and readability of your bullet points.",
    icon: <InsightsIcon fontSize="large" />
  },
  {
    title: "AI-Powered Analysis",
    description: "Leverages advanced natural language processing to understand the context and depth of your professional experience.",
    icon: <AutoAwesomeIcon fontSize="large" />
  }
];

const technicalHighlights = [
  {
    title: "Multi-Layer Parsing Engine",
    description: (
      <>
        A fallback-based parsing system ensures maximum success rate:
        <br />
        pdfjs → pdf-text-extract → OCR
      </>
    ),
    icon: <FaLayerGroup fontSize="large" />
  },
  {
    title: "Cross-Platform Compatibility",
    description: (
      <>
        Windows: pdf-poppler
        <br />
        Linux: pdftoppm (Poppler)
        <br />
        Dynamic switching based on OS
      </>
    ),
    icon: <> < TiVendorMicrosoft fontSize="large" /> < FaLinux fontSize="large" /> </>
  },
  {
    title: "Performance Optimization",
    description: (
      <>
        <ul>
          <li>In-memory file processing</li>
          <li>OCR used only as fallback</li>
          <li>Efficient request handling</li>
        </ul>
      </>
    ),
    icon: <MdSpeed fontSize="large" />
  }
];

const ResuMateStyles = `
  .resumate-page {
    padding-top: 100px;
    padding-bottom: 100px;
    animation: fadeIn 0.8s ease-out;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .gradient-text {
    background: linear-gradient(90deg, #5000ca, #9f7aea);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .dark-mode .gradient-text {
    background: linear-gradient(90deg, #a78bfa, #fbcfe8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .hero-image-container {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease;
  }
  
  .hero-image-container:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 30px 60px rgba(80, 0, 202, 0.25);
  }

  .dark-mode .hero-image-container {
    box-shadow: 0 20px 40px rgba(0,0,0,0.5);
  }

  .dark-mode .hero-image-container:hover {
    box-shadow: 0 30px 60px rgba(167, 139, 250, 0.15);
  }

  .feature-card {
    height: 100%;
    border-radius: 16px !important;
    transition: all 0.3s ease !important;
    background: rgba(255, 255, 255, 0.8) !important;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(0,0,0,0.05) !important;
  }

  .feature-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(80, 0, 202, 0.12) !important;
  }

  .dark-mode .feature-card {
    background: rgba(30, 41, 59, 0.6) !important;
    border: 1px solid rgba(255,255,255,0.1) !important;
  }

  .dark-mode .feature-card:hover {
    box-shadow: 0 12px 24px rgba(167, 139, 250, 0.1) !important;
    border-color: rgba(167, 139, 250, 0.3) !important;
  }

  .feature-icon-wrapper {
    display: inline-flex;
    padding: 16px;
    border-radius: 14px;
    background: rgba(80, 0, 202, 0.1);
    color: #5000ca;
    margin-bottom: 20px;
    transition: transform 0.3s ease;
  }
  
  .feature-card:hover .feature-icon-wrapper {
    transform: scale(1.1) rotate(5deg);
  }

  .dark-mode .feature-icon-wrapper {
    background: rgba(167, 139, 250, 0.15);
    color: #a78bfa;
  }

  .tech-chip {
    font-size: 0.75rem !important;
    padding: 15px 10px !important;
    border-radius: 12px !important;
    font-weight: 600 !important;
    transition: all 0.2s ease !important;
    border: 1px solid rgba(0,0,0,0.1) !important;
    background: white !important;
  }
  
  .tech-chip:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    border-color: #5000ca !important;
    color: #5000ca !important;
  }

  .dark-mode .tech-chip {
    background: rgba(30, 41, 59, 0.8) !important;
    border-color: rgba(255,255,255,0.1) !important;
    color: #e2e8f0 !important;
  }
  
  .dark-mode .tech-chip:hover {
    border-color: #a78bfa !important;
    color: #a78bfa !important;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  }

  .action-btn {
    border-radius: 12px !important;
    padding: 12px 28px !important;
    text-transform: none !important;
    font-size: 1.1rem !important;
    font-weight: 600 !important;
    transition: all 0.3s ease !important;
  }
  
  .action-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(80, 0, 202, 0.25) !important;
  }
  
  .dark-mode .action-btn:hover {
    box-shadow: 0 8px 20px rgba(167, 139, 250, 0.2) !important;
  }
`;

function ResuMate() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <style>{ResuMateStyles}</style>
      <div className="resumate-page">
        <Container maxWidth="lg">
          <Box sx={{ mb: 6 }}>
            <Button
              onClick={() => navigate("/Allprojects")}
              startIcon={<span style={{ fontSize: "1.1rem" }}>←</span>}
              sx={{
                textTransform: "none",
                fontWeight: 600,
                fontSize: "1rem",
                color: "#5000ca",
                px: 0,
                '&:hover': {
                  background: 'transparent',
                  transform: 'translateX(-4px)'
                },
                transition: 'all 0.2s ease',
                '.dark-mode &': {
                  color: '#a78bfa'
                }
              }}
            >
              Go back to all projects
            </Button>
          </Box>

          {/* HERO SECTION */}
          <Grid container spacing={8} alignItems="center" sx={{ mb: 12 }}>
            <Grid item xs={12} md={6}>
              <Box sx={{ mb: 2 }}>
                <Chip
                  label="POWERED BY AI"
                  icon={<AutoAwesomeIcon fontSize="small" />}
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    px: 1,
                    background: 'rgba(80,0,202,0.1)',
                    color: '#5000ca',
                    border: '1px solid rgba(80,0,202,0.2)',
                    '.dark-mode &': {
                      background: 'rgba(167,139,250,0.15)',
                      color: '#a78bfa',
                      border: '1px solid rgba(167,139,250,0.3)'
                    }
                  }}
                />
              </Box>

              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontWeight: 800,
                  mb: 3,
                  fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                  lineHeight: 1.1,
                  '.dark-mode &': { color: '#ffffff' },
                  '.light-mode &': { color: '#0d1116' }
                }}
              >
                Analyze Your Resume with <span className="gradient-text">AI</span>
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  mb: 5,
                  lineHeight: 1.6,
                  fontWeight: 400,
                  fontSize: '1.15rem',
                  color: '#4b5563',
                  '.dark-mode &': { color: '#9ca3af' }
                }}
              >
                ResuMate is an intelligent resume analyzer that helps job seekers optimize their resumes for Applicant Tracking Systems (ATS). Get instant feedback on readability, keyword matching, and impact metrics to land your dream job.
              </Typography>

              <Box sx={{ display: 'flex', gap: 2.5, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  startIcon={<LaunchIcon />}
                  className="action-btn"
                  onClick={() => window.open("https://resumate.duckdns.org", "_blank")}
                  sx={{
                    background: '#5000ca',
                    color: 'white',
                    '&:hover': { background: '#3b0099' },
                    '.dark-mode &': {
                      background: '#7c3aed',
                      '&:hover': { background: '#6d28d9' }
                    }
                  }}
                >
                  Live Demo
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<GitHubIcon />}
                  className="action-btn"
                  onClick={() => window.open("https://github.com/basilkurian001/resumate-ai", "_blank")}
                  sx={{
                    borderWidth: '2px',
                    borderColor: '#5000ca',
                    color: '#5000ca',
                    '&:hover': {
                      borderWidth: '2px',
                      borderColor: '#3b0099',
                      background: 'rgba(80,0,202,0.05)'
                    },
                    '.dark-mode &': {
                      borderColor: '#a78bfa',
                      color: '#a78bfa',
                      '&:hover': {
                        borderColor: '#c4b5fd',
                        background: 'rgba(167,139,250,0.1)'
                      }
                    }
                  }}
                >
                  View Source
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box className="hero-image-container">
                <img
                  src={ResmateScreenShot}
                  alt="ResuMate Dashboard Preview"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </Box>
            </Grid>
          </Grid>

          {/* FEATURES SECTION */}
          <Box sx={{ mb: 12 }}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  fontWeight: 800,
                  mb: 2,
                  '.dark-mode &': { color: '#ffffff' },
                  '.light-mode &': { color: '#0d1116' }
                }}
              >
                Key Features
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: '#4b5563',
                  maxWidth: '600px',
                  mx: 'auto',
                  fontWeight: 400,
                  '.dark-mode &': { color: '#9ca3af' }
                }}
              >
                Everything you need to perfect your resume and stand out to recruiters.
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card className="feature-card" elevation={0}>
                    <CardContent sx={{ p: 4 }}>
                      <Box className="feature-icon-wrapper">
                        {feature.icon}
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          mb: 2,
                          fontSize: '1.2rem',
                          '.dark-mode &': { color: '#ffffff' },
                          '.light-mode &': { color: '#0d1116' }
                        }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#4b5563',
                          lineHeight: 1.7,
                          fontSize: '0.95rem',
                          '.dark-mode &': { color: '#9ca3af' }
                        }}
                      >
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* TECH STACK SECTION */}
          <Box sx={{ textAlign: 'center', mb: 8, p: { xs: 4, md: 8 }, borderRadius: '20px', background: 'rgba(0,0,0,0.02)', '.dark-mode &': { background: 'rgba(255,255,255,0.02)' } }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 800,
                mb: 6,
                '.dark-mode &': { color: '#ffffff' },
                '.light-mode &': { color: '#0d1116' }
              }}
            >
              Technologies Used
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1.5 }}>
              {techStack.map((tech, index) => (
                <Chip
                  key={index}
                  label={tech}
                  className="tech-chip"
                />
              ))}
            </Box>
          </Box>

          {/* TECHNICAL HIGHLIGHTS SECTION */}
          <Box sx={{ mb: 12 }}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  fontWeight: 800,
                  mb: 2,
                  '.dark-mode &': { color: '#ffffff' },
                  '.light-mode &': { color: '#0d1116' }
                }}
              >
                Technical Highlights
              </Typography>
            </Box>

            <Grid container spacing={4} alignItems="stretch">
              {technicalHighlights.map((feature, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={index}
                  sx={{ display: "flex" }}
                >
                  <Card
                    className="feature-card"
                    elevation={0}
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      height: "100%"
                    }}
                  >
                    <CardContent
                      sx={{
                        p: 4,
                        flexGrow: 1
                      }}
                    >
                      <Box className="feature-icon-wrapper">
                        {feature.icon}
                      </Box>

                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          mb: 2,
                          fontSize: '1.2rem',
                          '.dark-mode &': { color: '#ffffff' },
                          '.light-mode &': { color: '#0d1116' }
                        }}
                      >
                        {feature.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: '#4b5563',
                          lineHeight: 1.7,
                          fontSize: '0.95rem',
                          '.dark-mode &': { color: '#9ca3af' }
                        }}
                      >
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

        </Container>
      </div>
    </>
  );
}

export default ResuMate;