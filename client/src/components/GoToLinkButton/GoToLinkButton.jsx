import React, { useState , useRef, useEffect} from 'react';
import {Box, Button,CardMedia, Typography } from '@mui/material';
import ReplyIcon from '@mui/icons-material/Reply';
import { row, column, jc , as, noSelect, prtr, wi, he, or}from '../../Styles/Styles'

function GoToLinkButton({link}) {

    const [size, setSize] = useState({
        width: window.screen.width,
        height: window.screen.height,
        celPort: window.screen.width <= 415 && window.matchMedia("(orientation: portrait)").matches ? true : false,
        celLand: window.screen.height <= 415 && !window.matchMedia("(orientation: portrait)").matches ? true : false
      });

      useEffect(() => {
          const handleResizeWindow = () => setSize({width: window.screen.width, height: window.screen.height, celPort: window.screen.width <= 415 && window.matchMedia("(orientation: portrait)").matches ? true : false, celLand: window.screen.height <= 415 && !window.matchMedia("(orientation: portrait)").matches ? true : false });
            window.addEventListener("resize", handleResizeWindow);
            return () => {window.removeEventListener("resize", handleResizeWindow)};
      },[]);

      // console.log("ANCHO: ", size.width, " | ALTO: ", size.height, " | PORTRAIT: " , size.celPort, " | LANDSCAPE: ", size.celLand)

    return (
        <a href={link} target="_blank" rel="noopener noreferrer"><Button variant="contained"  sx={{padding: '0vw !important', 'min-width': size.celPort ? '9vw !important' : size.celLand ? '7vh !important' : size.pcPort ? '5vh !important' : '4vh !important', 'max-width': '8.1vw !important', 'min-height': size.celPort ? '9vw !important' : size.celLand ? '7vh !important' : size.pcPort ? '5vh !important' : '4vh !important', 'max-height': '3.1vw !important', position: 'relative', maxWidth: wi()< he()? '3vh' : '2vw', maxHeight: wi()< he()? '3vh' : '2vw', minWidth: wi()< he()? '3vh' : '2vw', minHeight: wi()< he()? '3vh' : '2vw', justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column'}}><ReplyIcon sx={{transform: 'scaleX(-1)', padding: '0vw !important', 'min-width': size.celPort ? '6vw !important' : size.celLand ? '5vh !important' : '3.5vh !important', 'max-width': '8.1vw !important', 'min-height': size.celPort ? '6vw !important' : size.celLand ? '5vh !important' : '3.5vh !important', 'max-height': '3.1vw !important'}} /></Button></a>
    )
}

export default GoToLinkButton;