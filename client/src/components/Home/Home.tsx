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
import { row, column, jc , as, noSelect, prtr, wi, he, or}from '../../Styles/Styles';
import { ReactComponent as MySvg } from '../../images/home.svg';
import Technologies from '../Technologies/Technologies';

function Home() {

  const english = useSelector((state: {english:boolean}) => state.english)
  const width = useSelector((state: {width: number}) => state.width)
  const height = useSelector((state: {height: number}) => state.height)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)
  const staticRefWidth = useSelector((state: {staticRefWidth:number}) => state.staticRefWidth)
  const staticRefHeight = useSelector((state: {staticRefHeight:number}) => state.staticRefHeight)
  const maxStaticReference = useSelector((state: {maxStaticReference: number}) => state.maxStaticReference)
  const minStaticReference = useSelector((state: {minStaticReference:number}) => state.minStaticReference)
  const currentWidth = useSelector((state: {currentWidth:number}) => state.currentWidth)
  const currentHeight = useSelector((state: {currentHeight:number}) => state.currentHeight)
  const percentageResizedHeight = useSelector((state: {percentageResizedHeight:number}) => state.percentageResizedHeight)
  const percentageResizedWidth = useSelector((state: {percentageResizedWidth:number}) => state.percentageResizedWidth)
  const minRatioReference = useSelector((state: {minRatioReference:number}) => state.minRatioReference)

   return (
    <Box sx={{
      background: 'none',
      position: 'relative',
      justifyContent: 'center',
      display: 'flex',
      flexDirection: minPort ? 'column' : minLand ? 'row' : 'row',
      width: minPort ? '97vw' : minLand ? '97vw' : '97vw',
      height: minPort ? '71vh' : minLand ? '60vh' : larPort ? '45vh' : '71vh'
    }}>
      <Box sx={{
        background: 'none',
        position: 'relative',
        justifyContent: medPort ? 'space-evenly' : 'center',
        display: minPort || minLand ? 'contents' : 'flex',
        flexDirection: minPort ? 'column' : minLand ? 'row' : 'column',
        width: minPort ? '97vw' : minLand ? '97vw' : '50vw',
        height: minPort ? '40vh' : minLand ? '60vh' : larPort ? '45vh' : '71vh'
      }}>
        <Box sx={{
          background:'none',
          border: 'none',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignSelf: 'center',
          height: minPort ? '50vh' : minLand ? '55vh' : larPort ? '28vh' : '35vh',
          width: minPort ? '90vw' : minLand ? '45vw' : larPort ? '40vw' : '40vw',
          /* minHeight: '-webkit-fill-available', */
          /* minHeight': percentageResizedHeight < 0.290 ? `${staticRefHeight * 10}px` : 'null' */
        }}>
          <Typography sx={{...noSelect(),...{color:'#FFFFFF', fontSize: minPort  ? '11.5vw' : minLand ? '4.9vw' : larPort ? '5.0vw' : percentageResizedHeight < 0.238 ? `${staticRefHeight * 1.7}px` : '6.9vh', mixBlendMode: 'difference'}}}>{english ? `Hi ! I'm` : `Hola ! Soy `}</Typography>
          <Typography sx={{...noSelect(),...{color:'#FFFFFF', fontSize: minPort  ? '11.5vw' : minLand ? '5.4vw' : larPort ? '5.2vw' : percentageResizedHeight < 0.238 ? `${staticRefHeight * 1.75}px` : '7.2vh', mixBlendMode: 'difference', 'inline-size': 'max-content'}}}>{english ? `Pablo Azambuyo` : `Pablo Azambuyo`}</Typography>
          <Typography sx={{...noSelect(),...{color:'#FFFFFF', fontSize: minPort  ? '11.5vw' : minLand ? '2.9vw' : larPort ? '3.8vw' : percentageResizedHeight < 0.238 ? `${staticRefHeight * 1.1}px` : '4.5vh', mixBlendMode: 'difference'/* , marginLeft: '6vw' */}}}>{english ? `and I'm a Fullstack Developer.` : `y soy un Desarrollador Fullstack.`}</Typography>
        </Box>
        <Box sx={{
          background: 'none',
          left: minPort ? '-0.5vw' : minLand ? '0vw' : larPort ? '0vw' : '0vw',
          'justify-content': 'center',
          position: 'relative',
          display: larPort ? 'none' : larLand && percentageResizedHeight < 0.381 ? 'none' : 'flex',
          flexDirection: 'column',
          alignSelf: 'center',
          height: minPort ? '11vh' : minLand ? '8vh' : '11vh',
          width: minPort ? '97vw' : minLand ? '50vw' : larPort ? '48vw' : '40vw'
        }}>

          <Technologies />

          <Box sx={{background: 'none', display: minLand ? 'flex' : 'none', justifyContent: 'center'}}>
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