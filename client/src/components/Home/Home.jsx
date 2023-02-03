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

  const english = useSelector(state => state.english)
  const minPort = useSelector(state => state.minPort)
  const minLand = useSelector(state => state.minLand)
  const medPort = useSelector(state => state.medPort)
  const medLand = useSelector(state => state.medLand)
  const larPort = useSelector(state => state.larPort)
  const larLand = useSelector(state => state.larLand)

  return (
    <Box sx={{ background: 'gray', position: 'relative', justifyContent: 'center', display: 'flex', flexDirection: minPort ? 'column' : minLand ? 'row' : 'row', width: minPort ? '97vw' : minLand ? '97vw' : '97vw', height: minPort ? '71vh' : minLand ? '60vh' : larPort ? '60vh' : '71vh' }}>
      <Box sx={{ background: 'darkblue', position: 'relative', justifyContent: 'center', display: minPort || minLand ? 'contents' : 'flex', flexDirection: minPort ? 'column' : minLand ? 'row' : 'column', width: minPort ? '97vw' : minLand ? '97vw' : '50vw', height: minPort ? '40vh' : minLand ? '60vh' : larPort ? '60vh' : '71vh' }}>
        <Box sx={ { position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignSelf: 'center', background:'none' , height: minPort ? '50vh' : minLand ? '55vh' : '35vh', width: minPort ? '90vw' : minLand ? '45vw' : '40vw' /* ,justifyContent: 'center' */}}>
          <Typography sx={{...noSelect(),...{color:'#FFFFFF', fontSize: minPort  ? '11.5vw' : minLand ? '4.9vw' : larPort ? '6.9vw' : '6.1vh', 'mix-blend-mode': 'difference'}}}>{english ? `Hi ! I'm` : `Hola ! Soy `}</Typography>
          <Typography sx={{...noSelect(),...{color:'#FFFFFF', fontSize: minPort  ? '11.5vw' : minLand ? '5.4vw' : larPort ? '7.6vw' : '6.1vh', 'mix-blend-mode': 'difference'}}}>{english ? `Pablo Azambuyo` : `Pablo Azambuyo`}</Typography>
          <Typography sx={{...noSelect(),...{color:'#FFFFFF', fontSize: minPort  ? '11.5vw' : minLand ? '2.9vw' : larPort ? '4.2vw' : '4.1vh', 'mix-blend-mode': 'difference'/* , marginLeft: '6vw' */}}}>{english ? `and I'm a Fullstack Developer.` : `y soy un Desarrollador Fullstack.`}</Typography>
        </Box>
        <Box sx={{ background: 'none', left: minPort ? '-0.5vw' : minLand ? '0vw' : larPort ? '0vw' : '0vw', 'justify-content': 'center', position: 'relative', display: larPort ? 'none' : 'flex', flexDirection: 'column', alignSelf: 'center', height: minPort ? '11vh' : minLand ? '8vh' : '11vh', width: minPort ? '97vw' : minLand ? '50vw' : larPort ? '48vw' : '40vw' }}>

          <Technologies />

          <Box sx={{background: 'none', display: minLand ? 'flex' : 'none', justifyContent: 'center'}}>
            <Link style={{ textDecoration: 'none' }} to="/portfolio/AboutMe">
              <Button sx={{ padding: '0px !important', 'min-width': minPort ? '53vw !important' : minLand ? '25vw !important' : '9vw !important', 'max-width': '19vw !important', 'min-height': minPort ? '10vw !important' : minLand ? '7.5vh !important' : '2.1vh !important', 'max-height': '2.1vw !important', color:'#FFFFFF', width: minPort ? '19vw' : minLand ? '19vw' : '19vw', marginLeft: minPort ? '0vw' : minLand ? '0vw' : '16vw', marginTop: minPort ? '1.5vw' : minLand ? '4.5vh' : '1.9vw', fontSize: minPort ? '4vw' : minLand ? '1.65vw' : '1.05vw', 'mix-blend-mode': 'difference'}} variant='outlined'>{ english ? `Know about me` : `Conoceme` }
              </Button>
            </Link>
          </Box>
        </Box>

        <Box sx={{background: 'none', 'align-items': 'center', display: minPort ? 'flex' : minLand ? 'none' : 'flex', justifyContent: 'center', position: 'relative', height: '10vh' }}>
          <Link style={{ textDecoration: 'none' }} to="/portfolio/AboutMe">
            <Button sx={{
              padding: '0px !important',
              'min-width': minPort ? '53vw !important' : minLand ? '9vw !important' : '2vw !important',
              /* 'max-width': '29vw !important', */
              'min-height': minPort ? '10vw !important' : minLand ? '2.1vw !important' : '4.1vh !important',
              /* 'max-height': '2.1vw !important', */
              color:'#FFFFFF',
              width: minPort ? '19vw' : minLand ? '19vw' : larPort ? '29vw' : '19vw',
              marginLeft: minPort ? '0vw' : minLand ? '10vw' : '16vw',
              marginTop: minPort ? '1.5vw' : minLand ? '1.5vw' : '1.9vw',
              fontSize: minPort ? '3.8vw' : minLand ? '1.05vw' : larPort ? '1.35vh' : '1.15vw',
              'mix-blend-mode': 'difference'
              }}
              variant='outlined'>{ english ? `Know about me` : `Conoceme` }
            </Button>
          </Link>
        </Box>
      </Box>

      <Box sx={{
        background: 'brown',
        display: minPort ? 'none' : minLand ? 'none' : 'flex',
        width: '46vw',
        justifyContent: 'center',
        'align-items': 'center'
      }}>
        <SvgIcon
          style={{
            display: 'flex',
            width: larPort ? '42vw' : larLand ? '50vh' : '40vw',
            height: larPort ? '42vw' : larLand ? '50vh' : '70vh'
          }}
          preserveAspectRatio="none"
        >
          <MySvg/>
        </SvgIcon>
      </Box>

      <Box sx={{ display: larPort ? 'flex' : 'none', position: 'absolute', width: '85vw', height: '10vh', flexDirection: 'column', top: '31.5vh'}} >
        <Technologies />
      </Box>

  </Box>
  )
}

export default Home;