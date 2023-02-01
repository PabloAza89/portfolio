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
  });

  useEffect(() => {
      const handleResizeWindow = () => setSize({width: window.screen.width, height: window.screen.height, celPort: window.screen.width <= 415 && window.matchMedia("(orientation: portrait)").matches ? true : false, celLand: window.screen.height <= 415 && !window.matchMedia("(orientation: portrait)").matches ? true : false, pcPort: window.screen.width > 415 && window.matchMedia("(orientation: portrait)").matches ? true : false, pcLand: window.screen.height > 415 && !window.matchMedia("(orientation: portrait)").matches ? true : false });
        window.addEventListener("resize", handleResizeWindow);
        return () => {window.removeEventListener("resize", handleResizeWindow)};
  },[]);

  // console.log("ANCHO: ", size.width, " | ALTO: ", size.height, " | PORTRAIT CEL: " , size.celPort, " | LANDSCAPE CEL: ", size.celLand, " | PORTRAIT PC: ", size.pcPort, " | LANDSCAPE PC: ", size.pcLand)
  // size.celPort ? '' : size.celLand ? '' : size.pcPort ? '' : '',sx={{display: 'grid'}}

  return (
      <Box sx={{ background: 'none', display: 'flex', flexDirection: 'row', 'justify-content': 'center', position: 'absolute', width: size.celPort ? '97vw' : size.celLand ? '97vw' : size.pcPort ? '97vw' : '97vw', height: size.celPort ? '9vh' : size.celLand ? '16vh' : '4.5vh', bottom: size.celPort ? '0vh' : '0.3vh'}}>
        <Box sx={ english ? {position: 'relative', marginRight: size.celPort ? '0.5vh' : size.celLand ? '0.5vw' : size.pcPort ? '0.0vw' : '0vw', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', backgroundColor: cyan[100], width: size.celPort ? '14vw' : size.celLand ? '7vw' : size.pcPort ? '5vw' : '2.3vw', height: size.celPort ? '4.3vh' : size.celLand ? '9vh' : size.pcPort ? '3.7vh' : '3.7vh'} : {position: 'relative', marginRight: size.celPort ? '0.5vh' : size.celLand ? '0.5vw' : size.pcPort ? '0.0vw' : '0vw', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', backgroundColor: 'none', width: size.celPort ? '14vw' : size.celLand ? '7vw' : size.pcPort ? '5vw' : '2.3vw', height: size.celPort ? '4.3vh' : size.celLand ? '9vh' : size.pcPort ? '3.7vh' : '3.7vh'}} >
          <CardMedia src={lanEn} onClick={() => dispatch(languageChanger(true))} sx={{ cursor: 'pointer', display: 'flex', flexDirection: 'row', alignSelf: 'center', backgroundColor: 'none', backgroundImage: `url(${lanEn})`, width: size.celPort ? '20vw' : size.celLand ? '9vw' : size.pcPort ? '4.5vw' : '2vw', height: size.celPort ? '13vh' : size.celLand ? '9vh' : size.pcPort ? '5vh' : '5vh' , backgroundSize: size.celPort ? '13vw 4.1vh' : size.celLand ? '6.5vw 8vh' : size.pcPort ? '4vw 3.1vh' : '2vw 3vh',':hover': {'-webkit-filter': 'brightness(.9)', 'filter': 'brightness(.9)'}}}></CardMedia>
        </Box>
        <Box sx={ english ? {position: 'relative', marginRight: size.celPort ? '0.5vh' : size.celLand ? '0.5vw' : size.pcPort ? '0.0vw' : '0vw', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', backgroundColor: 'none', width: size.celPort ? '14vw' : size.celLand ? '7vw' : size.pcPort ? '5vw' : '2.3vw', height: size.celPort ? '4.3vh' : size.celLand ? '9vh' : size.pcPort ? '3.7vh' : '3.7vh'} : {position: 'relative', marginRight: size.celPort ? '0.5vh' : size.celLand ? '0.5vw' : size.pcPort ? '0.0vw' : '0vw', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', backgroundColor: cyan[100], width: size.celPort ? '14vw' : size.celLand ? '7vw' : size.pcPort ? '5vw' : '2.3vw', height: size.celPort ? '4.3vh' : size.celLand ? '9vh' : size.pcPort ? '3.7vh' : '3.7vh'}} >
          <CardMedia src={lanEs} onClick={() => dispatch(languageChanger(false))} sx={{ cursor: 'pointer', display: 'flex', flexDirection: 'row', alignSelf: 'center', backgroundColor: 'none', backgroundImage: `url(${lanEs})`, width: size.celPort ? '20vw' : size.celLand ? '9vw' : size.pcPort ? '4.5vw' : '2vw', height: size.celPort ? '13vh' : size.celLand ? '9vh' : size.pcPort ? '5vh' : '5vh' , backgroundSize: size.celPort ? '13vw 4.1vh' : size.celLand ? '6.5vw 8vh' : size.pcPort ? '4vw 3.1vh' : '2vw 3vh',':hover': {'-webkit-filter': 'brightness(.9)', 'filter': 'brightness(.9)'}}}></CardMedia>
        </Box>
      </Box>
  )
}

export default Language;
