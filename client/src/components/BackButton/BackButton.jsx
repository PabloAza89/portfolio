import React, { useState , useRef, useEffect} from 'react';
import {Box, Button,CardMedia, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import ForwardIcon from '@mui/icons-material/Forward';
import { row, column, jc , as, noSelect, prtr, wi, he, or}from '../../Styles/Styles'

function BackButton() {

  const [size, setSize] = useState({
    width: window.screen.width,
    height: window.screen.height,
    celPort: window.screen.width <= 415 && window.matchMedia("(orientation: portrait)").matches ? true : false,
    celLand: window.screen.height <= 415 && !window.matchMedia("(orientation: portrait)").matches ? true : false,
    pcPort: window.screen.width > 415 && window.matchMedia("(orientation: portrait)").matches ? true : false,
    pcLand: window.screen.height > 415 && !window.matchMedia("(orientation: portrait)").matches ? true : false,
    staticSize: window.screen.width / 100
  });

  useEffect(() => {
    const handleResizeWindow = () => setSize({
      width: window.screen.width,
      height: window.screen.height,
      celPort: window.screen.width <= 415 && window.matchMedia("(orientation: portrait)").matches ? true : false,
      celLand: window.screen.height <= 415 && !window.matchMedia("(orientation: portrait)").matches ? true : false,
      pcPort: window.screen.width > 415 && window.matchMedia("(orientation: portrait)").matches ? true : false,
      pcLand: window.screen.height > 415 && !window.matchMedia("(orientation: portrait)").matches ? true : false,
      staticSize: window.screen.width / 100
    });
    window.addEventListener("resize", handleResizeWindow);
    return () => {window.removeEventListener("resize", handleResizeWindow)};
  },[]);

  // console.log("ANCHO: ", size.width, " | ALTO: ", size.height, " | PORTRAIT CEL: " , size.celPort, " | LANDSCAPE CEL: ", size.celLand, " | PORTRAIT PC: ", size.pcPort, " | LANDSCAPE PC: ", size.pcLand)
  // size.celPort ? '' : size.celLand ? '' : size.pcPort ? '' : '',

    return (   
        <Link style={{ textDecoration: 'none' }} to="/portfolio">
          <Button variant="contained"  sx={{
            padding: '0vw !important',
            minWidth: size.celPort ? '0vh !important' : size.celLand ? '0vh !important' : size.pcPort ? '0vh !important' : '0vh !important',
            width: size.celPort ? '9vw !important' : size.celLand ? '6vh !important' : size.pcPort ? `${size.staticSize * 2.1}px !important` : `${size.staticSize * 2.1}px !important`,
            height: size.celPort ? '9vw !important' : size.celLand ? '6vh !important' : size.pcPort ? `${size.staticSize * 2.1}px !important` : `${size.staticSize * 2.1}px !important`,
            top: size.celPort ? '4.5vh' : size.celLand ? '6vh' : '5vh',
            left: size.celPort ? '84.5vw' : size.celLand ? '88vw' : '6vh',
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
              minWidth: size.celPort ? '0vh !important' : size.celLand ? '0vh !important' : size.pcPort ? '0vh !important' : '0vh !important',
              width: size.celPort ? '6.5vw !important' : size.celLand ? '4.5vh !important' : size.pcPort ? `${size.staticSize * 1.3}px !important` : `${size.staticSize * 1.3}px !important`,
              height: size.celPort ? '6.5vw !important' : size.celLand ? '4.5vh !important' : size.pcPort ? `${size.staticSize * 1.3}px !important` : `${size.staticSize * 1.3}px !important`
            }}/>
          </Button>
        </Link> 
    )
}

export default BackButton;
