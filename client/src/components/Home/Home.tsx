import React, {useState, useEffect} from 'react';
import {Box, Button,CardMedia, Typography, SvgIcon} from '@mui/material';
import home from '../../images/home.svg';
import react from '../../images/react.png';
import javascript from '../../images/javascript.png';
import node from '../../images/node.png';
import redux from '../../images/redux.png';
import sequelize from '../../images/sequelize.png';
import material from '../../images/material.png';
import { BrowserRouter, Navigate, Route, Routes , Link, useLocation} from "react-router-dom";
import { useSelector } from 'react-redux';
import { jc , as, noSelect, prtr, wi, he, or}from '../../styles/styles';
import { ReactComponent as MySvg } from '../../images/home.svg';
import Technologies from '../Technologies/Technologies';
import {
  background, bgLeft, bgLeftUpper, bgLeftUpperTextOne, bgLeftUpperTextTwo,
  bgLeftUpperTextThree, bgLeftLower, minLandRightLower
 } from '../../styles/home';
import {
  minPort, minLand, MMinLand, medPort, medLand, larPort, larLand,
  currentHeight, bgRed, staticRefWidth, staticRefHeight,
  maxStaticReference, flex, column, row, bgNone, width, height,
  percentageResizedHeight, percentageResizedWidth
} from '../../styles/commons';

function Home() {

  const english = useSelector((state: {english:boolean}) => state.english)

   return (
    <Box sx={background}>
      <Box sx={bgLeft}>
        <Box sx={bgLeftUpper}>
          <Typography sx={bgLeftUpperTextOne}>{english ? `Hi ! I'm` : `Hola ! Soy `}</Typography>
          <Typography sx={bgLeftUpperTextTwo}>{english ? `Pablo Azambuyo` : `Pablo Azambuyo`}</Typography>
          <Typography sx={bgLeftUpperTextThree}>{english ? `and I'm a Fullstack Developer.` : `y soy un Desarrollador Fullstack.`}</Typography>
        </Box>
        <Box sx={bgLeftLower}>

          <Technologies />

          <Box sx={minLandRightLower}>
            <Link style={{ textDecoration: 'none' }} to="/portfolio/AboutMe">
              <Button sx={{ padding: '0px !important', minWidth: minPort ? '53vw !important' : minLand ? '25vw !important' : '9vw !important', 'max-width': '19vw !important', 'min-height': minPort ? '10vw !important' : minLand ? '7.5vh !important' : '2.1vh !important', 'max-height': '2.1vw !important', color:'#FFFFFF', width: minPort ? '19vw' : minLand ? '19vw' : '19vw', marginLeft: minPort ? '0vw' : minLand ? '0vw' : '16vw', marginTop: minPort ? '1.5vw' : minLand ? '4.5vh' : '1.9vw', fontSize: minPort ? '4vw' : minLand ? '1.65vw' : '1.05vw', mixBlendMode: 'difference'}} variant='outlined'>{ english ? `Know about me` : `Conoceme` }
              </Button>
            </Link>
          </Box>
        </Box>

        <Box sx={{
          background: 'none',
          alignItems: medPort ? 'flex-start' : 'center',
          display: minPort ? 'flex' : minLand ? 'none' : 'flex',
          justifyContent: 'center',
          position: 'relative',
          height: '10vh'
        }}>
          <Link style={{ textDecoration: 'none' }} to="/portfolio/AboutMe">
            <Button sx={{
              padding: '0px !important',
              minWidth: minPort ? '53vw !important' : minLand ? '9vw !important' : '2vw !important',
              /* 'max-width': '29vw !important', */
              minHeight: minPort ? '10vw !important' : minLand ? '2.1vw !important' : '4.1vh !important',
              /* 'max-height': '2.1vw !important', */
              color:'#FFFFFF',
              width: minPort ? '19vw' : minLand ? '19vw' : medPort ? '29vw' : larPort ? '29vw' : '19vw',
              marginLeft: minPort ? '0vw' : minLand ? '10vw' : '16vw',
              marginTop: minPort ? '1.5vw' : minLand ? '1.5vw' : '1.9vw',
              /* fontSize: minPort ? '3.8vw' : minLand ? '1.05vw' : larPort ? `${staticRefWidth * 0.559}px` : larLand && percentageResizedWidth < 0.559 ? `${staticRefWidth * 0.559}px` : `${percentageResizedWidth * 22.5}px`, */
              fontSize: larPort ? '2.2vw' : '1.8vw',

              mixBlendMode: 'difference'
              }}
              variant='outlined'>{ english ? `Know about me` : `Conoceme` }
            </Button>
          </Link>
        </Box>
      </Box>

      <Box sx={{
        background: 'none',
        display:
          minPort ? 'none' :
          minLand ? 'none' :
          /* larLand &&  percentageResizedHeight < 0.313 ? 'none' : */
          'flex',
        width: '46vw',   
        justifyContent: 'center',
        height: larPort ? '45vh' : '71vh',
        'align-items': 'center',
        /* 'min-height': larLand &&  percentageResizedHeight < 0.313 ? 'none' : 'null'  */
      }}>
        <SvgIcon
          style={{
            display: 'flex',
            position: 'fixed',
            width: medPort ? '35vw' : larPort && width < height ? '33vw' : larPort && percentageResizedWidth < 0.410 ? '29vh' : larPort && percentageResizedWidth < 0.544 ? '38vh' : larLand && percentageResizedWidth < 0.544 ? '38vh' : larLand && percentageResizedWidth < 0.777 ? '50vh' : '70vh',
            height: medPort ? '35vw' : larPort && width < height ? '33vw' : larPort && percentageResizedWidth < 0.410 ? '29vh' : larPort && percentageResizedWidth < 0.544 ? '38vh' : larLand && percentageResizedWidth < 0.544 ? '38vh' : larLand && percentageResizedWidth < 0.777 ? '50vh' : '70vh',
            minWidth: percentageResizedHeight < 0.250 ? '110px' : 'null',
            minHeight: percentageResizedHeight < 0.250 ? '110px' : 'null',
            
          }}
          preserveAspectRatio="none"
        >
          <MySvg/>
        </SvgIcon>
      </Box>

      <Box sx={{
        display: larPort ? 'flex' : 'none',
        position: 'absolute',
        width: '85vw',
        height: '10vh',
        flexDirection: 'column',
        top: larPort ? '26.5vh' : '21.5vh'
      }}>
        <Technologies />
      </Box>

  </Box>
  )
}

export default Home;