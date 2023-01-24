import React from 'react';
import {Box, Button,CardMedia, Typography} from '@mui/material';
import { BrowserRouter, Navigate, Route, Routes , Link} from "react-router-dom";
import gear from '../../images/gear.png';
import ForwardIcon from '@mui/icons-material/Forward';

function Certifications() {

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '93vh', width: '97vw', backgroundColor: 'none'}}>
      <Link style={{ textDecoration: 'none' }} to="/"><Button variant="contained"  sx={{position: 'absolute', top: '5vh', left: '5vh', maxWidth: '2vw', maxHeight: '2vw', minWidth: '2vw', minHeight: '2vw', justifyItems: 'center', alignContent: 'center', display: 'flex', flexDirection: 'column'}}><ForwardIcon sx={{transform: 'rotate(180deg)'}} /></Button></Link>
      <Typography sx={{fontFamily: 'Lucida Console', fontSize: '1.5rem' , color: 'white', position: 'absolute', fontWeight: 600, top: '20vh', left: '9vw'}}>SECTION UNDER CONSTRUCTION !</Typography>
      <CardMedia sx={{ left: '30vw',  border: 'none', position: 'absolute', backgroundRepeat: 'no-repeat', backgroundImage: `url(${gear})`, width: '26rem', height: '26rem' , animation: 'spinRight 5s linear infinite', '@keyframes spinRight': {'100%': {transform: 'rotate(360deg)'},'0%': {transform: 'rotate(0deg)'}}}}></CardMedia>
      <CardMedia sx={{ left: '49vw', top: '20vh', border: 'none', position: 'absolute', backgroundRepeat: 'no-repeat', backgroundImage: `url(${gear})`, width: '15rem', height: '15rem' , animation: 'spinLeft 5s linear infinite', '@keyframes spinLeft': {'0%': {transform: 'rotate(360deg)'},'100%': {transform: 'rotate(0deg)'}}}}></CardMedia>
      <CardMedia sx={{ left: '47.7vw', top: '62vh', border: 'none', position: 'absolute', backgroundRepeat: 'no-repeat', backgroundImage: `url(${gear})`, width: '9rem', height: '9rem' , animation: 'spinLeft 2.5s linear infinite', '@keyframes spinLeft': {'0%': {transform: 'rotate(360deg)'},'100%': {transform: 'rotate(0deg)'}}}}></CardMedia>
      <Typography sx={{fontFamily: 'Monaco', fontSize: '1.1rem' , color: 'white', position: 'absolute', fontWeight: 600, top: '11vh', left: '78vw', 'mix-blend-mode': 'difference'}}>SECTION UNDER CONSTRUCTION !</Typography>
      <Typography sx={{fontFamily: 'Verdana', fontSize: '1.8rem' , color: 'white', position: 'absolute', fontWeight: 400, top: '88vh', left: '50vw', 'mix-blend-mode': 'difference'}}>Section Under Construction !</Typography>
    </Box>
  )
}

export default Certifications;