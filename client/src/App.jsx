/* import './App.css'; */
import React, { useState , useRef, useEffect} from 'react';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Certifications from './components/Certifications/Certifications';
import Contact from './components/Contact/Contact';
import Language from './components/Language/Language';

import { Box, Button, Link,  Typography} from '@mui/material';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { grey , blue } from '@mui/material/colors';


function App() {

  const [size, setSize] = useState({
    width: window.screen.width,
    height: window.screen.height,
    celPort: window.screen.width <= 415 && window.matchMedia("(orientation: portrait)").matches ? true : false,
    celLand: window.screen.height <= 415 && !window.matchMedia("(orientation: portrait)").matches ? true : false,
    pcPort: window.screen.width > 415 && window.matchMedia("(orientation: portrait)").matches ? true : false,
    pcLand: window.screen.height > 415 && !window.matchMedia("(orientation: portrait)").matches ? true : false,
    staticRefWidth: window.screen.width / 100,
    staticRefHeight: window.screen.height / 100,
    maxStaticReference: window.screen.width / 100 >= window.screen.height / 100 ? window.screen.width / 100 : window.screen.height / 100,
    currentWidth: window.innerWidth,
    currentHeight: window.innerHeight,
    
  });

  useEffect(() => {
      const handleResizeWindow = () => setSize({
        width: window.screen.width,
        height: window.screen.height,
        celPort: window.screen.width <= 415 && window.matchMedia("(orientation: portrait)").matches ? true : false,
        celLand: window.screen.height <= 415 && !window.matchMedia("(orientation: portrait)").matches ? true : false,
        pcPort: window.screen.width > 415 && window.matchMedia("(orientation: portrait)").matches ? true : false,
        pcLand: window.screen.height > 415 && !window.matchMedia("(orientation: portrait)").matches ? true : false,
        staticRefWidth: window.screen.width / 100,
        staticRefHeight: window.screen.height / 100,
        maxStaticReference: window.screen.width / 100 >= window.screen.height / 100 ? window.screen.width / 100 : window.screen.height / 100,
        currentWidth: window.innerWidth,
        currentHeight: window.innerHeight
      });
        window.addEventListener("resize", handleResizeWindow);
        return () => {window.removeEventListener("resize", handleResizeWindow)};
  },[]);

  return (
    <Box sx={{ position: 'relative', display: 'flex', width: '100vw', height: '100vh', backgroundColor: grey[400]}} >
      
        <Box sx={{ position: 'relative', display: 'flex', width: '100vw', flexDirection: 'column', margin: `${size.staticRefWidth * 0.6}px`,  background: 'linear-gradient(to bottom right, black 49.9%,white 50.1%)'}} >

          
            <BrowserRouter>
              <Routes>

                <Route path="/portfolio" element={<>
                  
                  <NavBar />
                  
                  
                  <Home/>
                  
                  
                    <Language />
                  
                </>}/>

                <Route path="/portfolio/AboutMe" element={<>
                  <Box>
                    <AboutMe />
                  </Box>
                  <Box sx={{display: 'grid'/* , position: 'relative' */}} >
                    <Language />
                  </Box>
                </>}/>
                <Route path="/portfolio/Skills" element={<><Skills/></>}/>
                <Route path="/portfolio/Projects" element={<>
                  <Box>
                    <Projects />
                  </Box>
                  <Box sx={{display: 'grid'/* , position: 'relative' */}} >
                    <Language />
                  </Box>
                </>}/>
                <Route path="/portfolio/Certifications" element={<>
                  <Box>
                    <Certifications />
                  </Box>
                  <Box sx={{display: 'grid'}}>
                    <Language />
                  </Box>
                </>}/>
                <Route path="/portfolio/Contact" element={<><Contact /></>}/>
              </Routes>
            </BrowserRouter>
          
        </Box>      
    </Box>
  );
}

export default App;
