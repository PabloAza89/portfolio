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
    minPort: window.screen.width <= 425 && window.matchMedia("(orientation: portrait)").matches ? true : false,
    minLand: window.screen.height <= 425 && !window.matchMedia("(orientation: portrait)").matches ? true : false,

    medPort: window.screen.width > 425 && window.screen.width < 825 && window.matchMedia("(orientation: portrait)").matches ? true : false,
    medLand: window.screen.height > 425 && window.screen.height < 825 && !window.matchMedia("(orientation: portrait)").matches ? true : false,


    larPort: window.screen.width > 425 && window.matchMedia("(orientation: portrait)").matches ? true : false,
    larLand: window.screen.height > 425 && !window.matchMedia("(orientation: portrait)").matches ? true : false,
    staticRefWidth: window.screen.width / 100,
    staticRefHeight: window.screen.height / 100,
    maxStaticReference: ( window.screen.width >= window.screen.height ) ? window.screen.width / 100 : window.screen.height / 100,
    currentWidth: window.innerWidth,
    currentHeight: window.innerHeight,
    percentageResizedHeight: window.innerHeight / window.screen.height,
    percentageResizedWidth: window.innerWidth / window.screen.width
  });

  useEffect(() => {
      const handleResizeWindow = () => setSize({
        width: window.screen.width,
        height: window.screen.height,
        minPort: window.screen.width < 425 && window.matchMedia("(orientation: portrait)").matches ? true : false,
        minLand: window.screen.height < 425 && !window.matchMedia("(orientation: portrait)").matches ? true : false,

        medPort: window.screen.width >= 425 && window.screen.width <= 825 && window.matchMedia("(orientation: portrait)").matches ? true : false,
        medLand: window.screen.height >= 425 && window.screen.height <= 825 && !window.matchMedia("(orientation: portrait)").matches ? true : false,
        
        larPort: window.screen.width > 825 && window.matchMedia("(orientation: portrait)").matches ? true : false,
        larLand: window.screen.height > 825 && !window.matchMedia("(orientation: portrait)").matches ? true : false,
        staticRefWidth: window.screen.width / 100,
        staticRefHeight: window.screen.height / 100,
        maxStaticReference: ( window.screen.width >= window.screen.height ) ? window.screen.width / 100 : window.screen.height / 100,
        currentWidth: window.innerWidth,
        currentHeight: window.innerHeight,
        percentageResizedHeight: window.innerHeight / window.screen.height,
        percentageResizedWidth: window.innerWidth / window.screen.width
      });
        window.addEventListener("resize", handleResizeWindow);
        return () => {window.removeEventListener("resize", handleResizeWindow)};
  },[]);

  console.log(" MIN PORT: " , size.minPort, " | MIN LAND: ", size.minLand, " | MED PORT: ", size.medPort, " | MED LAND: ", size.medLand, " | LAR PORT: ", size.larPort, " | LAR LAND: ", size.larLand)
  // size.minPort ? '' : size.minLand ? '' : size.medPort ? '' : size.medLand ? '' : size.larPort ? '' : '',

  // console.log("Current Height", size.currentHeight)
  // console.log("MAX REF HEIGHT", size.staticRefHeight, "STATIC MAX ABSOLUTE", size.maxStaticReference)
  //console.log("MAX HEIGHT", size.height) // VALOR REAL DEL DISPOSITIVO, PERO TAMPOCO SIRVE
  /* console.log("MAX HEIGHT", size.height / 100) */
  //console.log("CURRENT HEIGHT", (size.currentHeight)) // SERIA EL VH !!
  //console.log("CURRENT HEIGHT, el 1%", (size.currentHeight / 100) * 50) // SERIA EL VH !!
  //console.log("PRUEBA FINAL", (size.currentHeight / size.height ))  // 0.01 ES EL 1%, 0.49 ES EL 50%, 1 ES EL 100%
  //console.log("A VERGA LA VERGA", size.percentageResizedHeight ) // 0.01 ES EL 1%, 0.49 ES EL 50%, 1 ES EL 100%
  //console.log("A VERGA LA VERGA", size.percentageResizedWidth ) // 0.01 ES EL 1%, 0.49 ES EL 50%, 1 ES EL 100%
  

  // console.log("AVAILABLE HEIGHT", window.screen.availHeight) // ESTE ES UNA PORQUERIA, NO SIRVE
  

  // console.log("TESTING PERCENTAGES", size.percentageResizeHeight)
  //console.log("A VER ESTE QUE DICE", window.innerHeight)

  return (
      <Box sx={{
        background: 'none',
        /* display: size.larLand && size.currentHeight < 300 ? 'none' : 'flex', */
        display: 'flex',
        'pointer-events':  size.larPort && size.percentageResizedHeight < 0.272 ? 'none' : size.larLand && size.percentageResizedHeight < 0.272 ? 'none' : 'null',
        transition: 'opacity .1s ease-in-out',
        opacity: size.larPort && size.percentageResizedHeight < 0.272 ? '0' : size.larLand && size.percentageResizedHeight < 0.272 ? '0' : '1',
        'active': {
          'opacity': '0',
          'display': 'flex'
         },
        flexDirection: 'row',
        'justify-content': 'center',
        position: 'absolute',
        width: size.minPort ? '97vw' : size.minLand ? '97vw' : size.larPort ? '97vw' : '97vw',
        height: size.minPort ? '9vh' : size.minLand ? '16vh' : size.larPort ? '15vh' : '15vh',
        bottom: size.minPort ? '0vh' : '0.3vh'
      }}>
        <Box sx={ english ? {
            position: 'relative',
            marginRight: size.minPort ? '0.5vh' : size.minLand ? '0.5vw' : size.medPort ? `${size.maxStaticReference * 0.1}px` : size.medLand ? `${size.maxStaticReference * 0.1}px` : size.larPort ? `${size.maxStaticReference * 0.1}px` : `${size.maxStaticReference * 0.1}px`,
            display: 'flex',
            //size.currentHeight
            flexDirection: 'row',
            justifyContent: 'center',
            alignSelf: 'center',
            backgroundColor: cyan[100],
            width: size.minPort ? '14vw' : size.minLand ? '7vw' : size.medPort ? `${size.maxStaticReference * 7.3}px` : size.medLand ? `${size.maxStaticReference * 7.3}px` : size.larPort ? `${size.maxStaticReference * 2.7}px` : `${size.maxStaticReference * 2.7}px`,
            height: size.minPort ? '4.3vh' : size.minLand ? '9vh' : size.medPort ? `${size.maxStaticReference * 5.3}px` : size.medLand ? `${size.maxStaticReference * 5.3}px` : size.larPort ? `${size.maxStaticReference * 1.9}px` : `${size.maxStaticReference * 1.9}px`
          } : { position: 'relative',
          marginRight: size.minPort ? '0.5vh' : size.minLand ? '0.5vw' : size.medPort ? `${size.maxStaticReference * 0.1}px` : size.medLand ? `${size.maxStaticReference * 0.1}px` : size.larPort ? `${size.maxStaticReference * 0.1}px` : `${size.maxStaticReference * 0.1}px`,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignSelf: 'center',
            backgroundColor: 'none',
            width: size.minPort ? '14vw' : size.minLand ? '7vw' : size.medPort ? `${size.maxStaticReference * 7.3}px` : size.medLand ? `${size.maxStaticReference * 7.3}px` : size.larPort ? `${size.maxStaticReference * 2.7}px` : `${size.maxStaticReference * 2.7}px`,
            height: size.minPort ? '4.3vh' : size.minLand ? '9vh' : size.medPort ? `${size.maxStaticReference * 5.3}px` : size.medLand ? `${size.maxStaticReference * 5.3}px` : size.larPort ? `${size.maxStaticReference * 1.9}px` : `${size.maxStaticReference * 1.9}px`
        }} >
          <CardMedia src={lanEn} onClick={() => dispatch(languageChanger(true))} sx={{
            background: 'null',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'row',
            alignSelf: 'center',
            backgroundImage: `url(${lanEn})`,
            width: size.minPort ? '20vw' : size.minLand ? '9vw' : size.medPort ? `${size.maxStaticReference * 7.3}px` : size.medLand ? `${size.maxStaticReference * 7.3}px` : size.larPort ? `${size.maxStaticReference * 2.5}px` : `${size.maxStaticReference * 2.5}px`,
            height: size.minPort ? '13vh' : size.minLand ? '9vh' : size.medPort ? `${size.maxStaticReference * 7.3}px` : size.medLand ? `${size.maxStaticReference * 7.3}px` : size.larPort ? `${size.maxStaticReference * 2.6}px` : `${size.maxStaticReference * 2.6}px`,
            backgroundSize: size.minPort ? '13vw 4.1vh' : size.minLand ? '6.5vw 8vh' : size.medPort ? `${size.maxStaticReference * 6.7}px` : size.medLand ? `${size.maxStaticReference * 6.7}px` : size.larPort ? `${size.maxStaticReference * 2.5}px ${size.maxStaticReference * 1.6}px` : `${size.maxStaticReference * 2.5}px ${size.maxStaticReference * 1.6}px`,
            ':hover': {
              '-webkit-filter': 'brightness(.9)',
              'filter': 'brightness(.9)'
            }
          }}></CardMedia>
        </Box>
        <Box sx={ english ? {
            position: 'relative',
            /* marginRight: size.minPort ? '0.5vh' : size.minLand ? '0.5vw' : size.larPort ? '0.0vw' : '0vw', */
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignSelf: 'center',
            backgroundColor: 'none',
            width: size.minPort ? '14vw' : size.minLand ? '7vw' : size.medPort ? `${size.maxStaticReference * 7.3}px` : size.medLand ? `${size.maxStaticReference * 7.3}px` : size.larPort ? `${size.maxStaticReference * 2.7}px` : `${size.maxStaticReference * 2.7}px`,
            height: size.minPort ? '4.3vh' : size.minLand ? '9vh' : size.medPort ? `${size.maxStaticReference * 5.3}px` : size.medLand ? `${size.maxStaticReference * 5.3}px` : size.larPort ? `${size.maxStaticReference * 1.9}px` : `${size.maxStaticReference * 1.9}px`
            } : { position: 'relative',
            /* marginRight: size.minPort ? '0.5vh' : size.minLand ? '0.5vw' : size.larPort ? '0.0vw' : '0vw', */
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignSelf: 'center',
            backgroundColor: cyan[100],
            width: size.minPort ? '14vw' : size.minLand ? '7vw' : size.medPort ? `${size.maxStaticReference * 7.3}px` : size.medLand ? `${size.maxStaticReference * 7.3}px` : size.larPort ? `${size.maxStaticReference * 2.7}px` : `${size.maxStaticReference * 2.7}px`,
            height: size.minPort ? '4.3vh' : size.minLand ? '9vh' : size.medPort ? `${size.maxStaticReference * 5.3}px` : size.medLand ? `${size.maxStaticReference * 5.3}px` : size.larPort ? `${size.maxStaticReference * 1.9}px` : `${size.maxStaticReference * 1.9}px`
        }} >
          <CardMedia src={lanEs} onClick={() => dispatch(languageChanger(false))} sx={{
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'row',
            alignSelf: 'center',
            backgroundColor: 'none',
            backgroundImage: `url(${lanEs})`,
            width: size.minPort ? '20vw' : size.minLand ? '9vw' : size.medPort ? `${size.maxStaticReference * 7.3}px` : size.medLand ? `${size.maxStaticReference * 7.3}px` : size.larPort ? `${size.maxStaticReference * 2.5}px` : `${size.maxStaticReference * 2.5}px`,
            height: size.minPort ? '13vh' : size.minLand ? '9vh' : size.medPort ? `${size.maxStaticReference * 7.3}px` : size.medLand ? `${size.maxStaticReference * 7.3}px` : size.larPort ? `${size.maxStaticReference * 2.6}px` : `${size.maxStaticReference * 2.6}px`,
            backgroundSize: size.minPort ? '13vw 4.1vh' : size.minLand ? '6.5vw 8vh' : size.medPort ? `${size.maxStaticReference * 6.7}px` : size.medLand ? `${size.maxStaticReference * 6.7}px` : size.larPort ? `${size.maxStaticReference * 2.5}px ${size.maxStaticReference * 1.6}px` : `${size.maxStaticReference * 2.5}px ${size.maxStaticReference * 1.6}px`,
            ':hover': { '-webkit-filter': 'brightness(.9)', 'filter': 'brightness(.9)'
          }}}></CardMedia>
        </Box>
      </Box>
  )
}

export default Language;
