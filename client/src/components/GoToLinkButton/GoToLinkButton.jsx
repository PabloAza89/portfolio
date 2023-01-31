import React, { useState , useRef, useEffect} from 'react';
import {Box, Button,CardMedia, Typography } from '@mui/material';
import ReplyIcon from '@mui/icons-material/Reply';
import { row, column, jc , as, noSelect, prtr, wi, he, or}from '../../Styles/Styles'

function GoToLinkButton({link}) {

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

  console.log("ANCHO: ", size.width, " | ALTO: ", size.height, " | PORTRAIT CEL: " , size.celPort, " | LANDSCAPE CEL: ", size.celLand, " | PORTRAIT PC: ", size.pcPort, " | LANDSCAPE PC: ", size.pcLand)
  // size.celPort ? '' : size.celLand ? '' : size.pcPort ? '' : '',

    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Button variant="contained"  sx={{
              padding: '0vw !important',
              minWidth: size.celPort ? '0vh !important' : size.celLand ? '0vh !important' : size.pcPort ? '0vh !important' : '0vh !important',
              width: size.celPort ? '4.5vw !important' : size.celLand ? '6vh !important' : size.pcPort ? '4.5vw !important' : '4vh !important',
              height: size.celPort ? '4.5vw !important' : size.celLand ? '6vh !important' : size.pcPort ? '4.5vw !important' : '4vh !important',
              position: 'relative',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column'
          }}>
            <ReplyIcon sx={{
              transform: 'scaleX(-1)',
              padding: '0vw !important',
              width: size.celPort ? '4vw !important' : size.celLand ? '5vh !important' : size.pcPort ? '3vw !important' : '3.5vh !important'
            }} />
          </Button>
        </a>
    )
}

export default GoToLinkButton;