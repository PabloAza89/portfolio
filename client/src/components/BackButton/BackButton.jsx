import React, { useState , useRef, useEffect} from 'react';
import {Box, Button,CardMedia, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import ForwardIcon from '@mui/icons-material/Forward';
import { row, column, jc , as, noSelect, prtr, wi, he, or}from '../../Styles/Styles'

function BackButton() {

  const [size, setSize] = useState({
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

  // console.log("ANCHO: ", size.width, " | ALTO: ", size.height, " | PORTRAIT CEL: " , size.minPort, " | LANDSCAPE CEL: ", size.minLand, " | PORTRAIT PC: ", size.larPort, " | LANDSCAPE PC: ", size.larLand)
  // size.minPort ? '' : size.minLand ? '' : size.medPort ? '' : size.medLand ? '' : size.larPort ? '' : '',sx={{display: 'grid'}}

    return (
        <Link style={{ textDecoration: 'none' }} to="/portfolio">
          <Button variant="contained"  sx={{
            padding: '0vw !important',
            minWidth: size.minPort ? '0vh !important' : size.minLand ? '0vh !important' : size.medPort ? '0vh !important' : size.medLand ? '0vh !important' : size.larPort ? '0vh !important' : '0vh !important',
            width: size.minPort ? `${size.maxStaticReference * 5.2}px !important` : size.minLand ? `${size.maxStaticReference * 5.2}px !important` : size.medPort ? `${size.maxStaticReference * 4.2}px !important` : size.medLand ? `${size.maxStaticReference * 4.2}px !important` : size.larPort ? `${size.maxStaticReference * 2.1}px !important` : `${size.maxStaticReference * 2.1}px !important`,
            height: size.minPort ? `${size.maxStaticReference * 5.2}px !important` : size.minLand ? `${size.maxStaticReference * 5.2}px !important` : size.medPort ? `${size.maxStaticReference * 4.2}px !important` : size.medLand ? `${size.maxStaticReference * 4.2}px !important` : size.larPort ? `${size.maxStaticReference * 2.1}px !important` : `${size.maxStaticReference * 2.1}px !important`,
            top: size.minPort ? '4.5vh' : size.minLand ? '6vh' : '5vh',
            left: size.minPort ? '84.5vw' : size.minLand ? '88vw' : '6vh',
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
          }}>
            <ForwardIcon sx={{
              display: 'flex',
              position: 'absolute',
              padding: '0vw 0vw 0vw 0vw !important',
              transform: 'rotate(180deg)',
              minWidth: size.minPort ? '0vh !important' : size.minLand ? '0vh !important' : size.medPort ? '0vh !important' : size.medLand ? '0vh !important' : size.larPort ? '0vh !important' : '0vh !important',
              width: size.minPort ? `${size.maxStaticReference * 3.7}px !important` : size.minLand ? `${size.maxStaticReference * 3.7}px !important` : size.medPort ? `${size.maxStaticReference * 2.1}px !important` : size.medLand ? `${size.maxStaticReference * 2.1}px !important` : size.larPort ? `${size.maxStaticReference * 1.3}px !important` : `${size.maxStaticReference * 1.3}px !important`,
              height: size.minPort ? `${size.maxStaticReference * 3.7}px !important` : size.minLand ? `${size.maxStaticReference * 3.7}px !important` : size.medPort ? `${size.maxStaticReference * 2.1}px !important` : size.medLand ? `${size.maxStaticReference * 2.1}px !important` : size.larPort ? `${size.maxStaticReference * 1.3}px !important` : `${size.maxStaticReference * 1.3}px !important`
            }}/>
          </Button>
        </Link>
    )
}

export default BackButton;
