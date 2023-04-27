import React, { useState , useRef, useEffect} from 'react';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Certifications from './components/Certifications/Certifications';
import Contact from './components/Contact/Contact';
import Language from './components/Language/Language';
/* import { abc } from './styles/ResizeController'; */
import { Box, Button, Link,  Typography} from '@mui/material';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { grey , blue } from '@mui/material/colors';
/* import ResizeController from './styles/ResizeController'; */
/* import Setter from './resizeController/setter'; */
import Set from './resizeController/Set';
import Get from './resizeController/Get';
/* import {
  setWidth, setHeight, setMinPort, setMinLand,
  setMedPort, setMedLand, setLarPort, setLarLand,
  setStaticRefWidth, setStaticRefHeight, setMaxStaticReference,
  setMinStaticReference, setCurrentWidth, setCurrentHeight,
  setPercentageResizedHeight, setPercentageResizedWidth, setMinRatioReference
} from './actions'; */
import { useSelector, useDispatch } from 'react-redux';
/* import store from './store/store'; */

/* import {
  minPort, minLand, MMinLand, medPort, medLand, larPort, larLand,
  currentHeight, bgRed, staticRefWidth, staticRefHeight,
  maxStaticReference, flex, column, row, bgNone, width, height,
  percentageResizedHeight, percentageResizedWidth, minRatioReference
} from './styles/commons'; */

/* import { minPort } from './styles/commons'; */


function App() {

  const staticRefWidth = useSelector((state: {staticRefWidth:number}) => state.staticRefWidth)

  /* console.log(" MIN PORT: " , Get().minPort, " | MIN LAND: ", Get().minLand, " | MED PORT: ", Get().medPort, " | MED LAND: ", Get().medLand, " | LAR PORT: ", Get().larPort, " | LAR LAND: ", Get().larLand) */

  Set()


  return (
    <Box sx={{ backgroundColor: grey[400], position: 'relative', overflow: 'hidden', display: 'flex', width: '100vw', height: '100vh' }} >

        <Box sx={{ position: 'relative', display: 'flex', width: '100vw', flexDirection: 'column', margin: `${staticRefWidth * 0.6}px`,  background: 'linear-gradient(to bottom right, black 49.9%,white 50.1%)'}} >




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
