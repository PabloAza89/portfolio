import React from 'react';
import {Box, Button,CardMedia, Typography} from '@mui/material';
import { BrowserRouter, Navigate, Route, Routes , Link} from "react-router-dom";
/* import gear from '../../images/gear.png'; */
/* import ForwardIcon from '@mui/icons-material/Forward'; */
import BackButton from '../BackButton/BackButton';
import UnderConstruction from '../UnderConstruction/UnderConstruction';
import contact from '../../styles/ContactSX'


function Contact() {

  return (
    <Box sx={contact}>
      <BackButton />
      <UnderConstruction />
    </Box>
  )
}

export default Contact;