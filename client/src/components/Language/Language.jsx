import React, {useState, useEffect} from 'react';
import {Box, CardMedia } from '@mui/material';
import lanEn from '../../images/lanEn.png';
import lanEs from '../../images/lanEs.png';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes , Link} from "react-router-dom";
import { languageChanger } from '../../actions';
import { grey , blue , cyan, lime, brown, red} from '@mui/material/colors';

function Language() {

  const dispatch = useDispatch()
  const english = useSelector( state => state.english )

  const [size, setSize] = useState({
    width: window.screen.width,
    height: window.screen.height,
    celPort: window.screen.width <= 415 && window.matchMedia("(orientation: portrait)").matches ? true : false,
    celLand: window.screen.height <= 415 && !window.matchMedia("(orientation: portrait)").matches ? true : false,
    pcPort: window.screen.width > 415 && window.matchMedia("(orientation: portrait)").matches ? true : false,
    pcLand: window.screen.height > 415 && !window.matchMedia("(orientation: portrait)").matches ? true : false,
    staticRefWidth: window.screen.width / 100,
    staticRefHeight: window.screen.height / 100,
    currentWidth: window.innerWidth,
    currentHeight: window.innerHeight
  });

  useEffect(() => {
      const handleResizeWindow = () => setSize({
        width: window.screen.width,
        height: window.screen.height,
        celPort: window.screen.width <= 415 && window.matchMedia("(orientation: portrait)").matches ? true : false,
        celLand: window.screen.height <= 415 && !window.matchMedia("(orientation: portrait)").matches ? true : false,
        pcPort: window.screen.width > 415 && window.matchMedia("(orientation: portrait)").matches ? true : false,
        pcLand: window.screen.height > 415 && !window.matchMedia("(orientation: portrait)").matches ? true : false,
        staticRefWidth: window.screen.width / 100,
        staticRefHeight: window.screen.height / 100,
        currentWidth: window.innerWidth,
        currentHeight: window.innerHeight
      });
        window.addEventListener("resize", handleResizeWindow);
        return () => {window.removeEventListener("resize", handleResizeWindow)};
  },[]);

  // console.log("ANCHO: ", size.width, " | ALTO: ", size.height, " | PORTRAIT CEL: " , size.celPort, " | LANDSCAPE CEL: ", size.celLand, " | PORTRAIT PC: ", size.pcPort, " | LANDSCAPE PC: ", size.pcLand)
  // size.celPort ? '' : size.celLand ? '' : size.pcPort ? '' : '',sx={{display: 'grid'}}

  console.log("Current Height", size.currentHeight)

  return (
      <Box sx={{
        background: 'none',
        /* display: size.pcLand && size.currentHeight < 300 ? 'none' : 'flex', */
        display: 'flex',
        'pointer-events': size.pcLand && size.currentHeight < 500 ? 'none' : 'null',
        transition: 'opacity .1s ease-in-out',
        opacity: size.pcPort && size.currentHeight < 380 ? '0' : size.pcLand && size.currentHeight < 500 ? '0' : '1',
        'active': {
          'opacity': '0',
          'display': 'flex'
         },
        flexDirection: 'row',
        'justify-content': 'center',
        position: 'absolute',
        width: size.celPort ? '97vw' : size.celLand ? '97vw' : size.pcPort ? '97vw' : '97vw',
        height: size.celPort ? '9vh' : size.celLand ? '16vh' : size.pcPort ? '15vh' : '15vh',
        bottom: size.celPort ? '0vh' : '0.3vh'
      }}>
        <Box sx={ english ? {
            position: 'relative',
            marginRight: size.celPort ? '0.5vh' : size.celLand ? '0.5vw' : size.pcPort ? `${size.staticRefWidth * 0.1}px` : `${size.staticRefWidth * 0.1}px`,
            display: 'flex',
            //size.currentHeight
            flexDirection: 'row',
            justifyContent: 'center',
            alignSelf: 'center',
            backgroundColor: cyan[100],
            width: size.celPort ? '14vw' : size.celLand ? '7vw' : size.pcPort ? `${size.staticRefWidth * 2.7}px` : `${size.staticRefWidth * 2.7}px`,
            height: size.celPort ? '4.3vh' : size.celLand ? '9vh' : size.pcPort ? `${size.staticRefWidth * 1.9}px` : `${size.staticRefWidth * 1.9}px`
          } : { position: 'relative',
            marginRight: size.celPort ? '0.5vh' : size.celLand ? '0.5vw' : size.pcPort ? `${size.staticRefWidth * 0.1}px` : `${size.staticRefWidth * 0.1}px`,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignSelf: 'center',
            backgroundColor: 'none',
            width: size.celPort ? '14vw' : size.celLand ? '7vw' : size.pcPort ? `${size.staticRefWidth * 2.7}px` : `${size.staticRefWidth * 2.7}px`,
            height: size.celPort ? '4.3vh' : size.celLand ? '9vh' : size.pcPort ? `${size.staticRefWidth * 1.9}px` : `${size.staticRefWidth * 1.9}px`
        }} >
          <CardMedia src={lanEn} onClick={() => dispatch(languageChanger(true))} sx={{
            background: 'null',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'row',
            alignSelf: 'center',
            backgroundImage: `url(${lanEn})`,
            width: size.celPort ? '20vw' : size.celLand ? '9vw' : size.pcPort ? `${size.staticRefWidth * 2.5}px` : `${size.staticRefWidth * 2.5}px`,
            height: size.celPort ? '13vh' : size.celLand ? '9vh' : size.pcPort ? `${size.staticRefWidth * 2.6}px` : `${size.staticRefWidth * 2.6}px`,
            backgroundSize: size.celPort ? '13vw 4.1vh' : size.celLand ? '6.5vw 8vh' : size.pcPort ? `${size.staticRefWidth * 2.5}px ${size.staticRefWidth * 1.6}px` : `${size.staticRefWidth * 2.5}px ${size.staticRefWidth * 1.6}px`,
            ':hover': {
              '-webkit-filter': 'brightness(.9)',
              'filter': 'brightness(.9)'
            }
          }}></CardMedia>
        </Box>
        <Box sx={ english ? {
            position: 'relative',
            marginRight: size.celPort ? '0.5vh' : size.celLand ? '0.5vw' : size.pcPort ? '0.0vw' : '0vw',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignSelf: 'center',
            backgroundColor: 'none',
            width: size.celPort ? '14vw' : size.celLand ? '7vw' : size.pcPort ? `${size.staticRefWidth * 2.7}px` : `${size.staticRefWidth * 2.7}px`,
            height: size.celPort ? '4.3vh' : size.celLand ? '9vh' : size.pcPort ? `${size.staticRefWidth * 1.9}px` : `${size.staticRefWidth * 1.9}px`
            } : { position: 'relative',
            marginRight: size.celPort ? '0.5vh' : size.celLand ? '0.5vw' : size.pcPort ? '0.0vw' : '0vw',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignSelf: 'center',
            backgroundColor: cyan[100],
            width: size.celPort ? '14vw' : size.celLand ? '7vw' : size.pcPort ? `${size.staticRefWidth * 2.7}px` : `${size.staticRefWidth * 2.7}px`,
            height: size.celPort ? '4.3vh' : size.celLand ? '9vh' : size.pcPort ? `${size.staticRefWidth * 1.9}px` : `${size.staticRefWidth * 1.9}px`
        }} >
          <CardMedia src={lanEs} onClick={() => dispatch(languageChanger(false))} sx={{
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'row',
            alignSelf: 'center',
            backgroundColor: 'none',
            backgroundImage: `url(${lanEs})`,
            width: size.celPort ? '20vw' : size.celLand ? '9vw' : size.pcPort ? `${size.staticRefWidth * 2.5}px` : `${size.staticRefWidth * 2.5}px`,
            height: size.celPort ? '13vh' : size.celLand ? '9vh' : size.pcPort ? `${size.staticRefWidth * 2.6}px` : `${size.staticRefWidth * 2.6}px`,
            backgroundSize: size.celPort ? '13vw 4.1vh' : size.celLand ? '6.5vw 8vh' : size.pcPort ? `${size.staticRefWidth * 2.5}px ${size.staticRefWidth * 1.6}px` : `${size.staticRefWidth * 2.5}px ${size.staticRefWidth * 1.6}px`,
            ':hover': { '-webkit-filter': 'brightness(.9)', 'filter': 'brightness(.9)'
          }}}></CardMedia>
        </Box>
      </Box>
  )
}

export default Language;
