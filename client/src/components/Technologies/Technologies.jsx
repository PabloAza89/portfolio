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

  const english = useSelector(state => state.english)
  const minPort = useSelector(state => state.minPort)
  const minLand = useSelector(state => state.minLand)
  const medPort = useSelector(state => state.medPort)
  const medLand = useSelector(state => state.medLand)
  const larPort = useSelector(state => state.larPort)
  const larLand = useSelector(state => state.larLand)
  
    return (
        <Box sx={{ all: 'inherit' }}>
          <Box sx={{ background: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Box sx={{ background: 'none', display: 'flex', flexDirection: 'column', position: 'relative', border: 'none', width: minPort ? '15vw' : minLand ? '7vw' : larPort ? '10vw' : '6vw'}}>
              <CardMedia sx={{ alignSelf:'center',border: 'none', position: 'relative', backgroundRepeat: 'no-repeat', backgroundImage: `url(${react})`, width: minPort ? '10vw' : minLand ? '3.5vw' : larPort ? '5.5vw' : '3.5vw', height: minPort ? '10vw' : minLand ? '3.5vw' : larPort ? '5.5vw' : '3.5vw' }}></CardMedia>
            </Box>
            <Box sx={{ background: 'none', display: 'flex', flexDirection: 'column', position: 'relative', border: 'none', width: minPort ? '15vw' : minLand ? '7vw' : larPort ? '10vw' : '6vw'}}>
              <CardMedia sx={{ alignSelf:'center',border: 'none', position: 'relative', backgroundRepeat: 'no-repeat', backgroundImage: `url(${redux})`, width: minPort ? '10vw' : minLand ? '3.5vw' : larPort ? '5.5vw' : '3.5vw', height: minPort ? '10vw' : minLand ? '3.5vw' : larPort ? '5.5vw' : '3.5vw' }}></CardMedia>
            </Box>
            <Box sx={{ background: 'none', display: 'flex', flexDirection: 'column', position: 'relative', border: 'none', width: minPort ? '15vw' : minLand ? '7vw' : larPort ? '10vw' : '6vw'}}>
              <CardMedia sx={{ alignSelf:'center',border: 'none', position: 'relative', backgroundRepeat: 'no-repeat', backgroundImage: `url(${javascript})`,width: minPort ? '10vw' : minLand ? '3.5vw' : larPort ? '5.5vw' : '3.5vw', height: minPort ? '10vw' : minLand ? '3.5vw' : larPort ? '5.5vw' : '3.5vw' }}></CardMedia>
            </Box>
            <Box sx={{ background: 'none', display: 'flex', flexDirection: 'column', position: 'relative', border: 'none', width: minPort ? '15vw' : minLand ? '7vw' : larPort ? '10vw' : '6vw'}}>
              <CardMedia sx={{ alignSelf:'center',border: 'none', position: 'relative', backgroundRepeat: 'no-repeat', backgroundImage: `url(${node})`, width: minPort ? '10vw' : minLand ? '3.5vw' : larPort ? '5.5vw' : '3.5vw', height: minPort ? '10vw' : minLand ? '3.5vw' : larPort ? '5.5vw' : '3.5vw' }}></CardMedia>
            </Box>
            <Box sx={{ background: 'none', display: 'flex', flexDirection: 'column', position: 'relative', border: 'none', width: minPort ? '15vw' : minLand ? '7vw' : larPort ? '10vw' : '6vw'}}>
              <CardMedia sx={{ alignSelf:'center',border: 'none', position: 'relative', backgroundRepeat: 'no-repeat', backgroundImage: `url(${sequelize})`, width: minPort ? '10vw' : minLand ? '3.5vw' : larPort ? '5.5vw' : '3.5vw', height: minPort ? '10vw' : minLand ? '3.5vw' : larPort ? '5.5vw' : '3.5vw' }}></CardMedia>
            </Box>
            <Box sx={{ background: 'none', display: 'flex', flexDirection: 'column', position: 'relative', border: 'none', width: minPort ? '15vw' : minLand ? '7vw' : larPort ? '10vw' : '6vw' }}>
              <CardMedia sx={{ alignSelf:'center', border: 'none', position: 'relative', backgroundRepeat: 'no-repeat', backgroundImage: `url(${material})`, width: minPort ? '10vw' : minLand ? '3.5vw' : larPort ? '5.5vw' : '3.5vw', height: minPort ? '10vw' : minLand ? '3.5vw' : larPort ? '5.5vw' : '3.5vw', 'background-size': 'contain' }}></CardMedia>
            </Box>
          </Box >
          <Box sx={{ background: 'none', display: 'flex', flexDirection: 'row',justifyContent: 'space-between'}}>
            <Box sx={{ alignItems: 'center', background: 'none', display: 'flex', flexDirection: 'column', position: 'relative', border: 'none', width: minPort ? '15vw' : minLand ? '7vw' : larPort ? '10vw' : '6vw'}}>
              <Typography sx={{...noSelect(),...{fontSize: minPort ? '2.9vw' : minLand ? '2.40vh' : larPort ? '1.85vw' : '0.95vw', border: 'none', color: '#FFFFFF', fontWeight: 600, 'mix-blend-mode': 'difference'}}}>React</Typography>
            </Box>
            <Box sx={{ alignItems: 'center', background: 'none', display: 'flex', flexDirection: 'column', position: 'relative', border: 'none', width: minPort ? '15vw' : minLand ? '7vw' : larPort ? '10vw' : '6vw'}}>
              <Typography sx={{...noSelect(),...{fontSize: minPort ? '2.9vw' : minLand ? '2.40vh' : larPort ? '1.85vw' : '0.95vw', border: 'none', color: '#FFFFFF', fontWeight: 600, 'mix-blend-mode': 'difference'}}}>Redux</Typography>
            </Box>
            <Box sx={{ alignItems: 'center', background: 'none', display: 'flex', flexDirection: 'column', position: 'relative', border: 'none', width: minPort ? '15vw' : minLand ? '7vw' : larPort ? '10vw' : '6vw'}}>
              <Typography sx={{...noSelect(),...{fontSize: minPort ? '2.9vw' : minLand ? '2.40vh' : larPort ? '1.85vw' : '0.95vw', border: 'none', color: '#FFFFFF', fontWeight: 600, 'mix-blend-mode': 'difference'}}}>Javascript</Typography>
            </Box>
            <Box sx={{alignItems: 'center', background: 'none', display: 'flex', flexDirection: 'column', position: 'relative', border: 'none', width: minPort ? '15vw' : minLand ? '7vw' : larPort ? '10vw' : '6vw'}}>
              <Typography sx={{...noSelect(),...{fontSize: minPort ? '2.9vw' : minLand ? '2.40vh' : larPort ? '1.85vw' : '0.95vw', border: 'none', color: '#FFFFFF', fontWeight: 600, 'mix-blend-mode': 'difference'}}} >Node.js</Typography>
            </Box>
            <Box sx={{ justifyContent: 'center', alignItems: 'center', background: 'none', display: 'flex', flexDirection: 'column', position: 'relative', border: 'none', width: minPort ? '15vw' : minLand ? '7vw' : larPort ? '10vw' : '6vw'}}>
              <Typography sx={{...noSelect(),...{fontSize: minPort ? '2.9vw' : minLand ? '2.40vh' : larPort ? '1.85vw' : '0.95vw', border: 'none', color: '#FFFFFF', fontWeight: 600, 'mix-blend-mode': 'difference'}}}>Sequelize</Typography>
            </Box>
            <Box sx={{ justifyContent: 'center', alignItems: 'center', background: 'none', display: 'flex', flexDirection: 'column', position: 'relative', border: 'none', width: minPort ? '15vw' : minLand ? '7vw' : larPort ? '10vw' : '6vw'}}>
              <Typography sx={{...noSelect(),...{fontSize: minPort ? '2.9vw' : minLand ? '2.40vh' : larPort ? '1.85vw' : '0.95vw', border: 'none', color: '#FFFFFF', fontWeight: 600, 'mix-blend-mode': 'difference'}}}>Material UI</Typography>
            </Box>
          </Box>
        </Box>
    )
}

export default Technologies;