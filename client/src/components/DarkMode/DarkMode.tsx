import React from 'react';
import {Box, Button,CardMedia, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import ForwardIcon from '@mui/icons-material/Forward';
import { useSelector, useDispatch } from 'react-redux';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeSX from '../../styles/DarkModeSX';
import {
  bgRed, flex, column, row, bgNone } from '../../styles/CommonsSX';

function DarkMode() {

  return (
    <Link style={{ textDecoration: 'none' }} to="/portfolio">
      <Button variant="contained" sx={DarkModeSX().background}>
        <WbSunnyIcon sx={DarkModeSX().icon}/>
      </Button>
    </Link>
  )
}

export default DarkMode;
