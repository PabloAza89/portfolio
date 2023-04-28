import React, { useState , useRef, useEffect} from 'react';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Certifications from './components/Certifications/Certifications';
import Contact from './components/Contact/Contact';
import Language from './components/Language/Language';
import DarkMode from './components/DarkMode/DarkMode';
import AppSX from './styles/AppSX';

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


        const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
        const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
        const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
        const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
        const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
        const larLand = useSelector((state: {larLand:boolean}) => state.larLand)
        const staticRefWidth = useSelector((state: {staticRefWidth:number}) => state.staticRefWidth)
        const minRatioReference = useSelector((state: {minRatioReference:number}) => state.minRatioReference)


  /* console.log(" MIN PORT: " , Get().minPort, " | MIN LAND: ", Get().minLand, " | MED PORT: ", Get().medPort, " | MED LAND: ", Get().medLand, " | LAR PORT: ", Get().larPort, " | LAR LAND: ", Get().larLand) */




  return (
    <Box sx={AppSX().background} >
        <Box sx={AppSX().blackWhite} >
            <BrowserRouter>
              <Routes>
                <Route path="/portfolio" element={<>
                  <NavBar />
                  <DarkMode />
                  <Home />
                  <Language /></>}/>
                <Route path="/portfolio/AboutMe" element={<>
                  <AboutMe />
                  <Language /></>}/>
                <Route path="/portfolio/Skills" element={<>
                  <Skills /></>}/>
                <Route path="/portfolio/Projects" element={<>
                  <Projects />
                  <Language /></>}/>
                <Route path="/portfolio/Certifications" element={<>
                  <Certifications />
                  <Language /></>}/>
                <Route path="/portfolio/Contact" element={<>
                  <Contact /></>}/>
              </Routes>
            </BrowserRouter>
        </Box>
    </Box>
  );
}

export default App;
