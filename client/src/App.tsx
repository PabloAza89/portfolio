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
import {
  setWidth, setHeight, setMinPort, setMinLand,
  setMedPort, setMedLand, setLarPort, setLarLand,
  setStaticRefWidth, setStaticRefHeight, setMaxStaticReference,
  setMinStaticReference, setCurrentWidth, setCurrentHeight,
  setPercentageResizedHeight, setPercentageResizedWidth, setMinRatioReference
} from './actions';
import { useSelector, useDispatch } from 'react-redux';



function App() {

 /*  public get height() {
    return window.innerHeight;
  } */

  const dispatch = useDispatch()

        useEffect(() => {
          function handleResize() {
            dispatch(setWidth(window.screen.width))
            dispatch(setHeight(window.screen.height))
            dispatch(setMinPort(window.screen.width < 425 && window.matchMedia("(orientation: portrait)").matches ? true : false))
            dispatch(setMinLand(window.screen.height < 425 && !window.matchMedia("(orientation: portrait)").matches ? true : false))
            dispatch(setMedPort(window.screen.width >= 425 && window.screen.width <= 825 && window.matchMedia("(orientation: portrait)").matches ? true : false))
            dispatch(setMedLand(window.screen.height >= 425 && window.screen.height <= 825 && !window.matchMedia("(orientation: portrait)").matches ? true : false))
            dispatch(setLarPort(window.screen.width > 825 && window.matchMedia("(orientation: portrait)").matches ? true : false))
            dispatch(setLarLand(window.screen.height > 825 && !window.matchMedia("(orientation: portrait)").matches ? true : false))
            dispatch(setStaticRefWidth(window.screen.width / 100))
            dispatch(setStaticRefHeight(window.screen.height / 100))
            dispatch(setMaxStaticReference((window.screen.width >= window.screen.height ) ? window.screen.width / 100 : window.screen.height / 100))
            dispatch(setMinStaticReference(( window.screen.width <= window.screen.height ) ? window.screen.width / 100 : window.screen.height / 100))
            dispatch(setCurrentWidth(window.innerWidth))
            dispatch(setCurrentHeight(window.innerHeight))
            dispatch(setPercentageResizedHeight(window.innerHeight / window.screen.height))
            dispatch(setPercentageResizedWidth(window.innerWidth / window.screen.width))
            dispatch(setMinRatioReference(window.innerWidth / window.screen.width <= window.innerHeight / window.screen.height  ? (window.innerWidth / window.screen.width) / (window.innerHeight / window.screen.height) : (window.innerHeight / window.screen.height) / (window.innerWidth / window.screen.width)))
          }
          window.addEventListener("resize", handleResize);
          handleResize();
          return () => window.removeEventListener("resize", handleResize);
        }, []);

        /* const minPort = useSelector((state: {minPort:boolean}) => state.minPort) */
        const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
        const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
        const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
        const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
        const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
        const larLand = useSelector((state: {larLand:boolean}) => state.larLand)
        const staticRefWidth = useSelector((state: {staticRefWidth:number}) => state.staticRefWidth)
        const minRatioReference = useSelector((state: {minRatioReference:number}) => state.minRatioReference)

        console.log(" MIN PORT: " , minPort, " | MIN LAND: ", minLand, " | MED PORT: ", medPort, " | MED LAND: ", medLand, " | LAR PORT: ", larPort, " | LAR LAND: ", larLand)
        console.log('A VER AHORAA', minRatioReference)

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
