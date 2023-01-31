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

function Home() {

  const english = useSelector( state => state.english )

  const [size, setSize] = useState({
    width: window.screen.width,
    height: window.screen.height,
    celPort: window.screen.width <= 415 && window.matchMedia("(orientation: portrait)").matches ? true : false,
    celLand: window.screen.height <= 415 && !window.matchMedia("(orientation: portrait)").matches ? true : false
  });

  useEffect(() => {
      const handleResizeWindow = () => setSize({width: window.screen.width, height: window.screen.height, celPort: window.screen.width <= 415 && window.matchMedia("(orientation: portrait)").matches ? true : false, celLand: window.screen.height <= 415 && !window.matchMedia("(orientation: portrait)").matches ? true : false });
        window.addEventListener("resize", handleResizeWindow);
        return () => {window.removeEventListener("resize", handleResizeWindow)};
  },[]);

  // console.log("ANCHO: ", size.width, " | ALTO: ", size.height, " | PORTRAIT: " , size.celPort, " | LANDSCAPE: ", size.celLand)

  return (
    <Box sx={{ position: 'relative', justifyContent: 'center', display: 'flex', flexDirection: size.celPort ? 'column' : size.celLand ? 'row' : 'row', width: size.celPort ? '97vw' : size.celLand ? '97vw' : '97vw', background: 'none', height: size.celPort ? '65vh' : size.celLand ? '60vh' : '71vh' }}>
      <Box sx={{ position: 'relative', justifyContent: 'center', display: 'flex', flexDirection: size.celPort ? 'column' : size.celLand ? 'row' : 'column', width: size.celPort ? '97vw' : size.celLand ? '97vw' : '50vw', background: 'none', height: size.celPort ? '65vh' : size.celLand ? '60vh' : '71vh' }}>
        <Box sx={ { position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignSelf: 'center', background:'none' , height: size.celPort ? '50vh' : size.celLand ? '55vh' : '35vh', width: size.celPort ? '90vw' : size.celLand ? '45vw' : '40vw' /* ,justifyContent: 'center' */}}>
          <Typography sx={{...noSelect(),...{color:'#FFFFFF', fontSize: size.celPort  ? '11.5vw' : size.celLand ? '9.6vh' : wi() < he() ? '5.1vh' : '6.1vh', 'mix-blend-mode': 'difference'}}}>{english ? `Hi ! I'm ` : `Hola ! Soy `}</Typography>
          <Typography sx={{...noSelect(),...{color:'#FFFFFF', fontSize: size.celPort  ? '11.5vw' : size.celLand ? '9.6vh' : wi() < he() ? '5.1vh' : '6.1vh', 'mix-blend-mode': 'difference'}}}>{english ? `Pablo Azambuyo` : `Pablo Azambuyo`}</Typography>
          <Typography sx={{...noSelect(),...{color:'#FFFFFF', fontSize: size.celPort  ? '11.5vw' : size.celLand ? '5.0vh' : wi() < he() ? '3.1vh' : '4.1vh', 'mix-blend-mode': 'difference'/* , marginLeft: '6vw' */}}}>{english ? `and I'm a Fullstack Developer.` : `y soy un Desarrollador Fullstack.`}</Typography>
        </Box>
        <Box sx={{  position: 'relative', display: 'flex', flexDirection: 'column', alignSelf: 'center', background: 'none', height: size.celPort ? '11vh' : size.celLand ? '8vh' : '8vh', width: size.celPort ? '97vw' : size.celLand ? '50vw' : '40vw'/* , marginTop: '2.2vh', marginBottom: '1.5vh' */}}>
          <Box sx={{  display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Box sx={{ background: 'none', display: 'flex', flexDirection: 'column', position: 'relative', border: 'none', width: size.celPort ? '15vw' : size.celLand ? '7vw' : '6vw'}}>
              <CardMedia sx={{ alignSelf:'center',border: 'none', position: 'relative', backgroundRepeat: 'no-repeat', backgroundImage: `url(${react})`, width: size.celPort ? '10vw' : size.celLand ? '3.5vw' : '3.5vw', height: size.celPort ? '10vw' : size.celLand ? '3.5vw' : '3.5vw' }}></CardMedia>
            </Box>
            <Box sx={{ background: 'none', display: 'flex', flexDirection: 'column', position: 'relative', border: 'none', width: size.celPort ? '15vw' : size.celLand ? '7vw' : '6vw'}}>
              <CardMedia sx={{ alignSelf:'center',border: 'none', position: 'relative', backgroundRepeat: 'no-repeat', backgroundImage: `url(${redux})`, width: size.celPort ? '10vw' : size.celLand ? '3.5vw' : '3.5vw', height: size.celPort ? '10vw' : size.celLand ? '3.5vw' : '3.5vw' }}></CardMedia>
            </Box>
            <Box sx={{ background: 'none', display: 'flex', flexDirection: 'column', position: 'relative', border: 'none', width: size.celPort ? '15vw' : size.celLand ? '7vw' : '6vw'}}>
              <CardMedia sx={{ alignSelf:'center',border: 'none', position: 'relative', backgroundRepeat: 'no-repeat', backgroundImage: `url(${javascript})`,width: size.celPort ? '10vw' : size.celLand ? '3.5vw' : '3.5vw', height: size.celPort ? '10vw' : size.celLand ? '3.5vw' : '3.5vw' }}></CardMedia>
            </Box>
            <Box sx={{ background: 'none', display: 'flex', flexDirection: 'column', position: 'relative', border: 'none', width: size.celPort ? '15vw' : size.celLand ? '7vw' : '6vw'}}>
              <CardMedia sx={{ alignSelf:'center',border: 'none', position: 'relative', backgroundRepeat: 'no-repeat', backgroundImage: `url(${node})`, width: size.celPort ? '10vw' : size.celLand ? '3.5vw' : '3.5vw', height: size.celPort ? '10vw' : size.celLand ? '3.5vw' : '3.5vw' }}></CardMedia>
            </Box>
            <Box sx={{ background: 'none', display: 'flex', flexDirection: 'column', position: 'relative', border: 'none', width: size.celPort ? '15vw' : size.celLand ? '7vw' : '6vw'}}>
              <CardMedia sx={{ alignSelf:'center',border: 'none', position: 'relative', backgroundRepeat: 'no-repeat', backgroundImage: `url(${sequelize})`, width: size.celPort ? '10vw' : size.celLand ? '3.5vw' : '3.5vw', height: size.celPort ? '10vw' : size.celLand ? '3.5vw' : '3.5vw' }}></CardMedia>
            </Box>
            <Box sx={{ background: 'none', display: 'flex', flexDirection: 'column', position: 'relative', border: 'none', width: size.celPort ? '15vw' : size.celLand ? '7vw' : '6vw' }}>
              <CardMedia sx={{ alignSelf:'center', border: 'none', position: 'relative', backgroundRepeat: 'no-repeat', backgroundImage: `url(${material})`, width: size.celPort ? '10vw' : size.celLand ? '3.5vw' : '3.5vw', height: size.celPort ? '10vw' : size.celLand ? '3.5vw' : '3.5vw' }}></CardMedia>
            </Box>
          </Box >
          <Box sx={{  display: 'flex', flexDirection: 'row',justifyContent: 'space-between'}}>
            <Box sx={{ alignItems: 'center', background: 'none', display: 'flex', flexDirection: 'column', position: 'relative', border: 'none', width: size.celPort ? '15vw' : size.celLand ? '7vw' : '6vw'}}>
              <Typography sx={{...noSelect(),...{fontSize: size.celPort ? '2.9vw' : size.celLand ? '2.40vh' : '0.95vw', border: 'none', color: '#FFFFFF', fontWeight: 600, 'mix-blend-mode': 'difference'}}}>React</Typography>
            </Box>
            <Box sx={{ alignItems: 'center', background: 'none', display: 'flex', flexDirection: 'column', position: 'relative', border: 'none', width: size.celPort ? '15vw' : size.celLand ? '7vw' : '6vw'}}>
              <Typography sx={{...noSelect(),...{fontSize: size.celPort ? '2.9vw' : size.celLand ? '2.40vh' : '0.95vw', border: 'none', color: '#FFFFFF', fontWeight: 600, 'mix-blend-mode': 'difference'}}}>Redux</Typography>
            </Box>
            <Box sx={{ alignItems: 'center', background: 'none', display: 'flex', flexDirection: 'column', position: 'relative', border: 'none', width: size.celPort ? '15vw' : size.celLand ? '7vw' : '6vw'}}>
              <Typography sx={{...noSelect(),...{fontSize: size.celPort ? '2.9vw' : size.celLand ? '2.40vh' : '0.95vw', border: 'none', color: '#FFFFFF', fontWeight: 600, 'mix-blend-mode': 'difference'}}}>Javascript</Typography>
            </Box>
            <Box sx={{alignItems: 'center', background: 'none', display: 'flex', flexDirection: 'column', position: 'relative', border: 'none', width: size.celPort ? '15vw' : size.celLand ? '7vw' : '6vw'}}>
              <Typography sx={{...noSelect(),...{fontSize: size.celPort ? '2.9vw' : size.celLand ? '2.40vh' : '0.95vw', border: 'none', color: '#FFFFFF', fontWeight: 600, 'mix-blend-mode': 'difference'}}} >Node.js</Typography>
            </Box>
            <Box sx={{ justifyContent: 'center', alignItems: 'center', background: 'none', display: 'flex', flexDirection: 'column', position: 'relative', border: 'none', width: size.celPort ? '15vw' : size.celLand ? '7vw' : '6vw'}}>
              <Typography sx={{...noSelect(),...{fontSize: size.celPort ? '2.9vw' : size.celLand ? '2.40vh' : '0.95vw', border: 'none', color: '#FFFFFF', fontWeight: 600, 'mix-blend-mode': 'difference'}}}>Sequelize</Typography>
            </Box>
            <Box sx={{ justifyContent: 'center', alignItems: 'center', background: 'none', display: 'flex', flexDirection: 'column', position: 'relative', border: 'none', width: size.celPort ? '15vw' : size.celLand ? '7vw' : '6vw'}}>
              <Typography sx={{...noSelect(),...{fontSize: size.celPort ? '2.9vw' : size.celLand ? '2.40vh' : '0.95vw', border: 'none', color: '#FFFFFF', fontWeight: 600, 'mix-blend-mode': 'difference'}}}>Material UI</Typography>
            </Box>
          </Box>
          <Box sx={{background: 'none', display: size.celLand ? 'flex' : 'none', justifyContent: 'center'}}>
            <Link style={{ textDecoration: 'none' }} to="/portfolio/AboutMe">
              <Button sx={{ padding: '0px !important', 'min-width': size.celPort ? '53vw !important' : size.celLand ? '25vw !important' : '9vw !important', 'max-width': '19vw !important', 'min-height': size.celPort ? '10vw !important' : size.celLand ? '7.5vh !important' : '2.1vh !important', 'max-height': '2.1vw !important', color:'#FFFFFF', width: size.celPort ? '19vw' : size.celLand ? '19vw' : '19vw', marginLeft: size.celPort ? '0vw' : size.celLand ? '0vw' : '16vw', marginTop: size.celPort ? '1.5vw' : size.celLand ? '4.5vh' : '1.9vw', fontSize: size.celPort ? '4vw' : size.celLand ? '2.05vw' : '1.05vw', 'mix-blend-mode': 'difference'}} variant='outlined'>{ english ? `Know about me` : `Conoceme` }
              </Button>
            </Link>
          </Box>
        </Box>
        <Box sx={{background: 'none', display: size.celPort ? 'flex' : size.celLand ? 'none' : 'flex', justifyContent: 'center'}}>
          <Link style={{ textDecoration: 'none' }} to="/portfolio/AboutMe">
            <Button sx={{ padding: '0px !important', 'min-width': size.celPort ? '53vw !important' : size.celLand ? '9vw !important' : '2vw !important', 'max-width': '19vw !important', 'min-height': size.celPort ? '10vw !important' : size.celLand ? '2.1vw !important' : '4.1vh !important', 'max-height': '2.1vw !important', color:'#FFFFFF', width: size.celPort ? '19vw' : size.celLand ? '19vw' : '19vw', marginLeft: size.celPort ? '0vw' : size.celLand ? '10vw' : '16vw', marginTop: size.celPort ? '1.5vw' : size.celLand ? '1.5vw' : '1.9vw', fontSize: size.celPort ? '4vw' : size.celLand ? '1.05vw' : '1.15vw', 'mix-blend-mode': 'difference'}} variant='outlined'>{ english ? `Know about me` : `Conoceme` }
            </Button>
          </Link>
        </Box>
      </Box>
      <Box sx={{background: 'none', display: size.celPort ? 'none' : size.celLand ? 'none' : 'flex', width: '46vw', justifyContent: 'center'}}> 
        <SvgIcon
          style={{display: 'flex', height: '70vh', width: '40vw'}}
          preserveAspectRatio="none"
        >
          <MySvg/>
        </SvgIcon>
      </Box>
  </Box>
  )
}

export default Home;