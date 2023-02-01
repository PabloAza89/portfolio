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

function Technologies() {

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
  // size.celPort ? '' : size.celLand ? '' : size.pcPort ? '' : '',sx={{display: 'grid'}}

    return (    
        <Box sx={{ all: 'inherit' }}>
          <Box sx={{ background: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Box sx={{ background: 'none', display: 'flex', flexDirection: 'column', position: 'relative', border: 'none', width: size.celPort ? '15vw' : size.celLand ? '7vw' : size.pcPort ? '10vw' : '6vw'}}>
              <CardMedia sx={{ alignSelf:'center',border: 'none', position: 'relative', backgroundRepeat: 'no-repeat', backgroundImage: `url(${react})`, width: size.celPort ? '10vw' : size.celLand ? '3.5vw' : size.pcPort ? '5.5vw' : '3.5vw', height: size.celPort ? '10vw' : size.celLand ? '3.5vw' : size.pcPort ? '5.5vw' : '3.5vw' }}></CardMedia>
            </Box>
            <Box sx={{ background: 'none', display: 'flex', flexDirection: 'column', position: 'relative', border: 'none', width: size.celPort ? '15vw' : size.celLand ? '7vw' : size.pcPort ? '10vw' : '6vw'}}>
              <CardMedia sx={{ alignSelf:'center',border: 'none', position: 'relative', backgroundRepeat: 'no-repeat', backgroundImage: `url(${redux})`, width: size.celPort ? '10vw' : size.celLand ? '3.5vw' : size.pcPort ? '5.5vw' : '3.5vw', height: size.celPort ? '10vw' : size.celLand ? '3.5vw' : size.pcPort ? '5.5vw' : '3.5vw' }}></CardMedia>
            </Box>
            <Box sx={{ background: 'none', display: 'flex', flexDirection: 'column', position: 'relative', border: 'none', width: size.celPort ? '15vw' : size.celLand ? '7vw' : size.pcPort ? '10vw' : '6vw'}}>
              <CardMedia sx={{ alignSelf:'center',border: 'none', position: 'relative', backgroundRepeat: 'no-repeat', backgroundImage: `url(${javascript})`,width: size.celPort ? '10vw' : size.celLand ? '3.5vw' : size.pcPort ? '5.5vw' : '3.5vw', height: size.celPort ? '10vw' : size.celLand ? '3.5vw' : size.pcPort ? '5.5vw' : '3.5vw' }}></CardMedia>
            </Box>
            <Box sx={{ background: 'none', display: 'flex', flexDirection: 'column', position: 'relative', border: 'none', width: size.celPort ? '15vw' : size.celLand ? '7vw' : size.pcPort ? '10vw' : '6vw'}}>
              <CardMedia sx={{ alignSelf:'center',border: 'none', position: 'relative', backgroundRepeat: 'no-repeat', backgroundImage: `url(${node})`, width: size.celPort ? '10vw' : size.celLand ? '3.5vw' : size.pcPort ? '5.5vw' : '3.5vw', height: size.celPort ? '10vw' : size.celLand ? '3.5vw' : size.pcPort ? '5.5vw' : '3.5vw' }}></CardMedia>
            </Box>
            <Box sx={{ background: 'none', display: 'flex', flexDirection: 'column', position: 'relative', border: 'none', width: size.celPort ? '15vw' : size.celLand ? '7vw' : size.pcPort ? '10vw' : '6vw'}}>
              <CardMedia sx={{ alignSelf:'center',border: 'none', position: 'relative', backgroundRepeat: 'no-repeat', backgroundImage: `url(${sequelize})`, width: size.celPort ? '10vw' : size.celLand ? '3.5vw' : size.pcPort ? '5.5vw' : '3.5vw', height: size.celPort ? '10vw' : size.celLand ? '3.5vw' : size.pcPort ? '5.5vw' : '3.5vw' }}></CardMedia>
            </Box>
            <Box sx={{ background: 'none', display: 'flex', flexDirection: 'column', position: 'relative', border: 'none', width: size.celPort ? '15vw' : size.celLand ? '7vw' : size.pcPort ? '10vw' : '6vw' }}>
              <CardMedia sx={{ alignSelf:'center', border: 'none', position: 'relative', backgroundRepeat: 'no-repeat', backgroundImage: `url(${material})`, width: size.celPort ? '10vw' : size.celLand ? '3.5vw' : size.pcPort ? '5.5vw' : '3.5vw', height: size.celPort ? '10vw' : size.celLand ? '3.5vw' : size.pcPort ? '5.5vw' : '3.5vw', 'background-size': 'contain' }}></CardMedia>
            </Box>
          </Box >
          <Box sx={{ background: 'none', display: 'flex', flexDirection: 'row',justifyContent: 'space-between'}}>
            <Box sx={{ alignItems: 'center', background: 'none', display: 'flex', flexDirection: 'column', position: 'relative', border: 'none', width: size.celPort ? '15vw' : size.celLand ? '7vw' : size.pcPort ? '10vw' : '6vw'}}>
              <Typography sx={{...noSelect(),...{fontSize: size.celPort ? '2.9vw' : size.celLand ? '2.40vh' : size.pcPort ? '1.85vw' : '0.95vw', border: 'none', color: '#FFFFFF', fontWeight: 600, 'mix-blend-mode': 'difference'}}}>React</Typography>
            </Box>
            <Box sx={{ alignItems: 'center', background: 'none', display: 'flex', flexDirection: 'column', position: 'relative', border: 'none', width: size.celPort ? '15vw' : size.celLand ? '7vw' : size.pcPort ? '10vw' : '6vw'}}>
              <Typography sx={{...noSelect(),...{fontSize: size.celPort ? '2.9vw' : size.celLand ? '2.40vh' : size.pcPort ? '1.85vw' : '0.95vw', border: 'none', color: '#FFFFFF', fontWeight: 600, 'mix-blend-mode': 'difference'}}}>Redux</Typography>
            </Box>
            <Box sx={{ alignItems: 'center', background: 'none', display: 'flex', flexDirection: 'column', position: 'relative', border: 'none', width: size.celPort ? '15vw' : size.celLand ? '7vw' : size.pcPort ? '10vw' : '6vw'}}>
              <Typography sx={{...noSelect(),...{fontSize: size.celPort ? '2.9vw' : size.celLand ? '2.40vh' : size.pcPort ? '1.85vw' : '0.95vw', border: 'none', color: '#FFFFFF', fontWeight: 600, 'mix-blend-mode': 'difference'}}}>Javascript</Typography>
            </Box>
            <Box sx={{alignItems: 'center', background: 'none', display: 'flex', flexDirection: 'column', position: 'relative', border: 'none', width: size.celPort ? '15vw' : size.celLand ? '7vw' : size.pcPort ? '10vw' : '6vw'}}>
              <Typography sx={{...noSelect(),...{fontSize: size.celPort ? '2.9vw' : size.celLand ? '2.40vh' : size.pcPort ? '1.85vw' : '0.95vw', border: 'none', color: '#FFFFFF', fontWeight: 600, 'mix-blend-mode': 'difference'}}} >Node.js</Typography>
            </Box>
            <Box sx={{ justifyContent: 'center', alignItems: 'center', background: 'none', display: 'flex', flexDirection: 'column', position: 'relative', border: 'none', width: size.celPort ? '15vw' : size.celLand ? '7vw' : size.pcPort ? '10vw' : '6vw'}}>
              <Typography sx={{...noSelect(),...{fontSize: size.celPort ? '2.9vw' : size.celLand ? '2.40vh' : size.pcPort ? '1.85vw' : '0.95vw', border: 'none', color: '#FFFFFF', fontWeight: 600, 'mix-blend-mode': 'difference'}}}>Sequelize</Typography>
            </Box>
            <Box sx={{ justifyContent: 'center', alignItems: 'center', background: 'none', display: 'flex', flexDirection: 'column', position: 'relative', border: 'none', width: size.celPort ? '15vw' : size.celLand ? '7vw' : size.pcPort ? '10vw' : '6vw'}}>
              <Typography sx={{...noSelect(),...{fontSize: size.celPort ? '2.9vw' : size.celLand ? '2.40vh' : size.pcPort ? '1.85vw' : '0.95vw', border: 'none', color: '#FFFFFF', fontWeight: 600, 'mix-blend-mode': 'difference'}}}>Material UI</Typography>
            </Box>
          </Box>
        </Box>
    )
}

export default Technologies;