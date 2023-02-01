import React, { useState , useRef, useEffect} from 'react';
import {Box, Button,CardMedia, Typography} from '@mui/material';
import { BrowserRouter, Navigate, Route, Routes , Link} from "react-router-dom";
import gear from '../../images/gear.png';
import ForwardIcon from '@mui/icons-material/Forward';
import BackButton from '../BackButton/BackButton';

function UnderConstruction() {

  const [size, setSize] = useState({
    width: window.screen.width,
    height: window.screen.height,
    celPort: window.screen.width <= 415 && window.matchMedia("(orientation: portrait)").matches ? true : false,
    celLand: window.screen.height <= 415 && !window.matchMedia("(orientation: portrait)").matches ? true : false,
    pcPort: window.screen.width > 415 && window.matchMedia("(orientation: portrait)").matches ? true : false,
    pcLand: window.screen.height > 415 && !window.matchMedia("(orientation: portrait)").matches ? true : false,
  });

  useEffect(() => {
      const handleResizeWindow = () => setSize({width: window.screen.width, height: window.screen.height, celPort: window.screen.width <= 415 && window.matchMedia("(orientation: portrait)").matches ? true : false, celLand: window.screen.height <= 415 && !window.matchMedia("(orientation: portrait)").matches ? true : false, pcPort: window.screen.width > 415 && window.matchMedia("(orientation: portrait)").matches ? true : false, pcLand: window.screen.height > 415 && !window.matchMedia("(orientation: portrait)").matches ? true : false });
        window.addEventListener("resize", handleResizeWindow);
        return () => {window.removeEventListener("resize", handleResizeWindow)};
  },[]);

  // console.log("ANCHO: ", size.width, " | ALTO: ", size.height, " | PORTRAIT CEL: " , size.celPort, " | LANDSCAPE CEL: ", size.celLand, " | PORTRAIT PC: ", size.pcPort, " | LANDSCAPE PC: ", size.pcLand)
  // size.celPort ? '' : size.celLand ? '' : size.pcPort ? '' : '',

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '93vh', width: '97vw', background: 'none'}}>
      <Typography sx={{ // CENTER LEFT 
        fontFamily: 'Lucida Console',
        fontSize: size.celPort ? '7vw' : size.celLand ? '3vw' : size.pcPort ? '6vw' : '2.1vw',
        color: 'white',
        position: 'absolute',
        fontWeight: 600,
        top: size.celPort ? '25vh' : size.celLand ? '25vh' : size.pcPort ? '23vh' : '10vh',
        left: size.celPort ? '5vw' : size.celLand ? '5vw' : size.pcPort ? '5vw' : '15vw',
        'mix-blend-mode': 'difference'
      }}>SECTION UNDER CONSTRUCTION !</Typography>
      <Typography sx={{ // UPPPER RIGHT 
        fontFamily: 'Monaco',
        fontSize: size.celPort ? '2.8vw' : size.celLand ? '2.8vw' : size.pcPort ? '2.8vw' : '1.5vw',
        color: 'white',
        position: 'absolute',
        fontWeight: 600,
        top: size.celPort ? '14vh' : size.celLand ? '14vh' : size.pcPort ? '14vh' : '11vh',
        left: size.celPort ? '67vw' : size.celLand ? '69vw' : size.pcPort ? '67vw' : '78vw',
        'mix-blend-mode': 'difference'
      }}>SECTION UNDER CONSTRUCTION !</Typography>
      <Typography sx={{ // RIGHT LOWER
        fontFamily: 'Verdana',
        fontSize: size.celPort ? '4vw' : size.celLand ? '4vw' : size.pcPort ? '4vw' : '1.2vw',
        color: 'white',
        position: 'absolute',
        fontWeight: 400,
        top: size.celPort ? '88vh' : size.celLand ? '80vh' : size.pcPort ? '88vh' : '85vh',
        left: size.celPort ? '30vw' : size.celLand ? '30vw' : size.pcPort ? '30vw' : '60vw',
        'mix-blend-mode': 'difference'
      }}>Section Under Construction !</Typography>
      <CardMedia sx={{ // CENTER LEFT
        left: size.celPort ? '3vh' : size.celLand ? '70vh' : size.pcPort ? '13vh' : '30vh',
        top: size.celPort ? '47vh' : size.celLand ? '47vh' : size.pcPort ? '47vh' : '30vh',
        border: 'none',
        position: 'absolute',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${gear})`,
        width: size.celPort ? '28vh' : size.celLand ? '28vh' : size.pcPort ? '28vh' : '43vh',
        height: size.celPort ? '28vh' : size.celLand ? '28vh' : size.pcPort ? '28vh' : '43vh',
        animation: 'spinRight 5s linear infinite',
        '@keyframes spinRight': {'100%': {transform: 'rotate(360deg)'},'0%': {transform: 'rotate(0deg)'}}
      }} />
      <CardMedia sx={{ // UPPER RIGHT
        left: size.celPort ? '27.5vh' : size.celLand ? '94.5vh' : size.pcPort ? '37.3vh' : '67.3vh',
        top: size.celPort ? '45vh' : size.celLand ? '45vh' : size.pcPort ? '45vh' : '21vh',
        border: 'none',
        position: 'absolute',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${gear})`,
        width: size.celPort ? '11vh' : size.celLand ? '11vh' : size.pcPort ? '11vh' : '25vh',
        height: size.celPort ? '11vh' : size.celLand ? '11vh' : size.pcPort ? '11vh' : '25vh',
        animation: 'spinLeft 2.5s linear infinite',
        '@keyframes spinLeft': {'0%': {transform: 'rotate(360deg)'},'100%': {transform: 'rotate(0deg)'}}
      }} />
      <CardMedia sx={{ // LOWER RIGHT
        left: size.celPort ? '25vh' : size.celLand ? '92vh' : size.pcPort ? '35.2vh' : '65.9vh',
        top: size.celPort ? '70.3vh' : size.celLand ? '70.3vh' : size.pcPort ? '70.3vh' : '62vh',
        border: 'none', 
        position: 'absolute',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${gear})`,
        width: size.celPort ? '7vh' : size.celLand ? '7vh' : size.pcPort ? '7vh' : '17vh',
        height: size.celPort ? '7vh' : size.celLand ? '7vh' : size.pcPort ? '7vh' : '17vh',
        animation: 'spinLeft 2.5s linear infinite',
        '@keyframes spinLeft': {'0%': {transform: 'rotate(360deg)'},'100%': {transform: 'rotate(0deg)'}}
      }} />      
    </Box>
  )
}

export default UnderConstruction;