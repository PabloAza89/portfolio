import React, {useState, useEffect} from 'react';
import {Box, Button,CardMedia, Typography, SvgIcon} from '@mui/material';
import home from '../../images/home.svg';
import react from '../../images/react.png';
import javascript from '../../images/javascript.png';
import node from '../../images/node.png';
import redux from '../../images/redux.png';
import sequelize from '../../images/sequelize.png';
import material from '../../images/material.png';
import { BrowserRouter, Navigate, Route, Routes , Link} from "react-router-dom";
import { useSelector } from 'react-redux';
import { row, column, jc , as, noSelect, prtr, wi, he, or}from '../../Styles/Styles';
import { ReactComponent as MySvg } from '../../images/home.svg';
import Technologies from '../Technologies/Technologies';

function Home() {

  const english = useSelector( state => state.english )

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
    <Box sx={{ background: 'gray', position: 'relative', justifyContent: 'center', display: 'flex', flexDirection: size.celPort ? 'column' : size.celLand ? 'row' : 'row', width: size.celPort ? '97vw' : size.celLand ? '97vw' : '97vw', height: size.celPort ? '71vh' : size.celLand ? '60vh' : size.pcPort ? '60vh' : '71vh' }}>
      <Box sx={{ background: 'darkblue', position: 'relative', justifyContent: 'center', display: size.celPort || size.celLand ? 'contents' : 'flex', flexDirection: size.celPort ? 'column' : size.celLand ? 'row' : 'column', width: size.celPort ? '97vw' : size.celLand ? '97vw' : '50vw', height: size.celPort ? '40vh' : size.celLand ? '60vh' : size.pcPort ? '60vh' : '71vh' }}>
        <Box sx={ { position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignSelf: 'center', background:'none' , height: size.celPort ? '50vh' : size.celLand ? '55vh' : '35vh', width: size.celPort ? '90vw' : size.celLand ? '45vw' : '40vw' /* ,justifyContent: 'center' */}}>
          <Typography sx={{...noSelect(),...{color:'#FFFFFF', fontSize: size.celPort  ? '11.5vw' : size.celLand ? '4.9vw' : size.pcPort ? '6.9vw' : '6.1vh', 'mix-blend-mode': 'difference'}}}>{english ? `Hi ! I'm` : `Hola ! Soy `}</Typography>
          <Typography sx={{...noSelect(),...{color:'#FFFFFF', fontSize: size.celPort  ? '11.5vw' : size.celLand ? '5.4vw' : size.pcPort ? '7.6vw' : '6.1vh', 'mix-blend-mode': 'difference'}}}>{english ? `Pablo Azambuyo` : `Pablo Azambuyo`}</Typography>
          <Typography sx={{...noSelect(),...{color:'#FFFFFF', fontSize: size.celPort  ? '11.5vw' : size.celLand ? '2.9vw' : size.pcPort ? '4.2vw' : '4.1vh', 'mix-blend-mode': 'difference'/* , marginLeft: '6vw' */}}}>{english ? `and I'm a Fullstack Developer.` : `y soy un Desarrollador Fullstack.`}</Typography>
        </Box>
        <Box sx={{ background: 'none', left: size.celPort ? '-0.5vw' : size.celLand ? '0vw' : size.pcPort ? '0vw' : '0vw', 'justify-content': 'center', position: 'relative', display: size.pcPort ? 'none' : 'flex', flexDirection: 'column', alignSelf: 'center', height: size.celPort ? '11vh' : size.celLand ? '8vh' : '11vh', width: size.celPort ? '97vw' : size.celLand ? '50vw' : size.pcPort ? '48vw' : '40vw' }}>
          
          <Technologies />

          <Box sx={{background: 'none', display: size.celLand ? 'flex' : 'none', justifyContent: 'center'}}>
            <Link style={{ textDecoration: 'none' }} to="/portfolio/AboutMe">
              <Button sx={{ padding: '0px !important', 'min-width': size.celPort ? '53vw !important' : size.celLand ? '25vw !important' : '9vw !important', 'max-width': '19vw !important', 'min-height': size.celPort ? '10vw !important' : size.celLand ? '7.5vh !important' : '2.1vh !important', 'max-height': '2.1vw !important', color:'#FFFFFF', width: size.celPort ? '19vw' : size.celLand ? '19vw' : '19vw', marginLeft: size.celPort ? '0vw' : size.celLand ? '0vw' : '16vw', marginTop: size.celPort ? '1.5vw' : size.celLand ? '4.5vh' : '1.9vw', fontSize: size.celPort ? '4vw' : size.celLand ? '1.65vw' : '1.05vw', 'mix-blend-mode': 'difference'}} variant='outlined'>{ english ? `Know about me` : `Conoceme` }
              </Button>
            </Link>
          </Box>
        </Box>

        <Box sx={{background: 'none', 'align-items': 'center', display: size.celPort ? 'flex' : size.celLand ? 'none' : 'flex', justifyContent: 'center', position: 'relative', height: '10vh' }}>
          <Link style={{ textDecoration: 'none' }} to="/portfolio/AboutMe">
            <Button sx={{ 
              padding: '0px !important',
              'min-width': size.celPort ? '53vw !important' : size.celLand ? '9vw !important' : '2vw !important',
              /* 'max-width': '29vw !important', */
              'min-height': size.celPort ? '10vw !important' : size.celLand ? '2.1vw !important' : '4.1vh !important',
              /* 'max-height': '2.1vw !important', */
              color:'#FFFFFF',
              width: size.celPort ? '19vw' : size.celLand ? '19vw' : size.pcPort ? '29vw' : '19vw',
              marginLeft: size.celPort ? '0vw' : size.celLand ? '10vw' : '16vw',
              marginTop: size.celPort ? '1.5vw' : size.celLand ? '1.5vw' : '1.9vw',
              fontSize: size.celPort ? '3.8vw' : size.celLand ? '1.05vw' : size.pcPort ? '1.35vh' : '1.15vw',
              'mix-blend-mode': 'difference'
              }} 
              variant='outlined'>{ english ? `Know about me` : `Conoceme` }
            </Button>
          </Link>
        </Box>
        
        
      </Box>
            
            

      <Box sx={{ 
        background: 'brown',
        display: size.celPort ? 'none' : size.celLand ? 'none' : 'flex',
        width: '46vw',
        justifyContent: 'center',
        'align-items': 'center'
      }}>
        <SvgIcon
          style={{
            display: 'flex',
            width: size.pcPort ? '42vw' : size.pcLand ? '50vh' : '40vw',
            height: size.pcPort ? '42vw' : size.pcLand ? '50vh' : '70vh'
          }}
          preserveAspectRatio="none"
        >
          <MySvg/>
        </SvgIcon>
      </Box>

      <Box sx={{ display: size.pcPort ? 'flex' : 'none', position: 'absolute', width: '85vw', height: '10vh', flexDirection: 'column', top: '31.5vh'}} >
        <Technologies />
      </Box>

      
  </Box>
  )
}

export default Home;