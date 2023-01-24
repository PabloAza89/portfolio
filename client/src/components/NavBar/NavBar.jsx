import React from 'react';
import { Box, Button,  Typography} from '@mui/material';
import { BrowserRouter, Navigate, Route, Routes , Link} from "react-router-dom";
import SendIcon from '@mui/icons-material/Send';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { grey , blue } from '@mui/material/colors';

function NavBar() {

  return (
    <Box sx={{zIndex: 1,display: 'flex', flexDirection: 'row', justifyContent:"space-between"}}>
      <Box sx={{display: 'flex', flexDirection: 'row', color: 'white', alignItems: 'center', marginLeft: '2vw'}}>
        <Typography sx={{ fontSize: '2.5rem'}}>{`< `}</Typography>
        <Typography sx={{ fontFamily: 'Allura', fontSize: '4rem', color: blue[600], fontWeight: 600}}>{`Pablo Azambuyo`}</Typography>
        <Typography sx={{ fontSize: '3rem', fontWeight: '300', animation: 'blink 1s linear infinite', '@keyframes blink': {'0%': {opacity: '0'}, '49%': {opacity: '0'}, '50%': {opacity: '1'}}}}>{`I`}</Typography>
        <Typography sx={{ fontSize: '2.5rem'}}>{` />`}</Typography>
      </Box>
      <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'right',backgroundColor: 'none', width: '60vw'}}>

          <Link style={{ textDecoration: 'none' }} to="/AboutMe" ><Button  variant="text" sx={{ color: '#FFFFFF' , textTransform: 'none', fontSize: 'larger'}} >About Me</Button></Link>
          <Link style={{ textDecoration: 'none' }} to="/Skills" ><Button variant="text" sx={{ color: '#FFFFFF', textTransform: 'none' , fontSize: 'larger'}} >Skills</Button></Link>
          <Link style={{ textDecoration: 'none' }} to="/Achievements" ><Button variant="text" sx={{ color: '#FFFFFF', textTransform: 'none', fontSize: 'larger'}}>Achievements</Button></Link>
          <Link style={{ textDecoration: 'none' }} to="/Certifications" ><Button  variant="text" sx={{ color: '#FFFFFF', textTransform: 'none', fontSize: 'larger'}}>Certifications</Button></Link>
          <Link style={{ textDecoration: 'none' }} to="/Contact" ><Button  variant="text" sx={{ color: '#FFFFFF', textTransform: 'none', fontSize: 'larger', marginRight: '3vw'}}>Contact</Button></Link>
          <Button variant="contained"  sx={{maxWidth: '2vw', maxHeight: '2vw', minWidth: '2vw', minHeight: '2vw', justifyItems: 'center', alignContent: 'center', display: 'flex', flexDirection: 'column'}}><WbSunnyIcon /></Button>



      </Box>
    </Box>  
  )
}

export default NavBar;