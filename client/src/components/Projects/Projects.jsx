import React, { useState } from 'react';
import {Box, Button,CardMedia, Typography} from '@mui/material';
import { BrowserRouter, Navigate, Route, Routes , Link} from "react-router-dom";
import weatherify1 from '../../images/weatherify1.png';
import weatherify2 from '../../images/weatherify2.png';
import ForwardIcon from '@mui/icons-material/Forward';
import Dialog from '@mui/material/Dialog';
import { DialogTitle } from '@mui/material';

function Projects() {

  const [show, setShow] = useState(false)
  const [name, setName] = useState("")


  return (
    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '93vh', width: '97vw', backgroundColor: 'none'}}>
      <Link style={{ textDecoration: 'none' }} to="/portfolio"><Button variant="contained"  sx={{position: 'absolute', top: '5vh', left: '5vh', maxWidth: '2vw', maxHeight: '2vw', minWidth: '2vw', minHeight: '2vw', justifyItems: 'center', alignContent: 'center', display: 'flex', flexDirection: 'column'}}><ForwardIcon sx={{transform: 'rotate(180deg)'}} /></Button></Link>
      <Box sx={{background: 'red', height: '32vh', width: '62vw', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}} >
        <CardMedia onClick={(e) => setName(weatherify1) + setShow(!show)} sx={{ alignSelf:'center', backgroundImage: `url(${weatherify1})`, width: '100%', height: '100%' ,backgroundSize: '98%'}}></CardMedia>
        <CardMedia onClick={(e) => setName(weatherify2) + setShow(!show)} sx={{ alignSelf:'center', backgroundImage: `url(${weatherify2})`, width: '100%', height: '100%' ,backgroundSize: '98%'}}></CardMedia>






      </Box>
      
        <Dialog
              sx={{height: '71vh',  display: 'flex', flexDirection: 'row', position: 'fixed', justifyContent: 'center', top: '15vh'}}
              open={show}
              onClick={() => setShow(false)}
              fullWidth={true}
              fullScreen={true}
            >
                <CardMedia sx={{ display: 'flex', flexDirection: 'row', justifyItems: 'center', backgroundImage: `url(${name})`, width: '70vw', height: '100vw' ,backgroundSize: '98%', backgroundRepeat: 'no-repeat',}}></CardMedia>

            </Dialog>
      
    </Box>
  )
}

export default Projects;