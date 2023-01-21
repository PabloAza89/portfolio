import React from 'react';
import About from '../About/About';
import { Box, Button,  Typography} from '@mui/material';
import { BrowserRouter, Navigate, Route, Routes , Link} from "react-router-dom";

function NavBar() {

  return (
    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'right'}}>
      
        <Link style={{ textDecoration: 'none' }} to="/AboutMe" ><Button  variant="text">ABOUT ME</Button></Link>
        <Link style={{ textDecoration: 'none' }} to="/Skills" ><Button variant="text">SKILLS</Button></Link>
        <Link style={{ textDecoration: 'none' }} to="/Achievements" ><Button variant="text">ACHIEVEMENTS</Button></Link>
        <Link style={{ textDecoration: 'none' }} to="/Certifications" ><Button  variant="text">CERTIFICATIONS</Button></Link>
        <Link style={{ textDecoration: 'none' }} to="/Contact" ><Button  variant="text">CONTACT</Button></Link>

   
      
    </Box>
  )
}

export default NavBar;