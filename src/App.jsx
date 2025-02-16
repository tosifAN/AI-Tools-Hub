import React, { useState } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { Box, OrbitControls, Environment } from '@react-three/drei';
import { AppBar, Toolbar, Typography, IconButton, Paper, Grid, Card, CardContent, Button, Fab, useTheme } from '@mui/material';
import { Menu, Notifications, AccountCircle, Add, DarkMode, LightMode } from '@mui/icons-material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';

// Custom theme
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
});

function Scene() {
  return (
    <Canvas>
      <Environment preset="city" />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} rotation={[0, 0.5, 0]}>
        <meshStandardMaterial color="orange" metalness={0.5} roughness={0.2} />
      </Box>
      <Box position={[1.2, 0, 0]} rotation={[0, -0.5, 0]}>
        <meshStandardMaterial color="hotpink" metalness={0.5} roughness={0.2} />
      </Box>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = useTheme();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
        <AppBar position="sticky" elevation={0} className="app-bar">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <Menu />
            </IconButton>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Modern Dashboard
            </Typography>
            <IconButton color="inherit" onClick={toggleDarkMode}>
              {darkMode ? <LightMode /> : <DarkMode />}
            </IconButton>
            <IconButton color="inherit">
              <Notifications />
            </IconButton>
            <IconButton color="inherit">
              <AccountCircle />
            </IconButton>
          </Toolbar>
        </AppBar>

        <div className="main-content">
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Paper className="hero-section">
                <Scene />
                <div className="hero-text">
                  <Typography variant="h2" gutterBottom className="hero-title">
                    Welcome to the Future
                  </Typography>
                  <Typography variant="subtitle1" className="hero-subtitle">
                    Experience the next generation of UI design
                  </Typography>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    size="large"
                    className="cta-button"
                  >
                    Get Started
                  </Button>
                </div>
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Card className="info-card">
                <CardContent>
                  <Typography variant="h5" gutterBottom className="card-title">
                    Quick Stats
                  </Typography>
                  <div className="stats-container">
                    <div className="stat-item">
                      <Typography variant="h3">42</Typography>
                      <Typography variant="subtitle2">Active Projects</Typography>
                    </div>
                    <div className="stat-item">
                      <Typography variant="h3">1.2k</Typography>
                      <Typography variant="subtitle2">Daily Users</Typography>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>

        <Fab color="primary" aria-label="add" className="floating-action-button">
          <Add />
        </Fab>
      </div>
    </ThemeProvider>
  );
}

export default App; 