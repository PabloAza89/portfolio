import React from 'react';
import {Box, Button,CardMedia, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import ForwardIcon from '@mui/icons-material/Forward';
import { useSelector, useDispatch } from 'react-redux';
import BackButtonSX from '../../styles/BackButtonSX';
import {
  bgRed, flex, column, row, bgNone } from '../../styles/CommonsSX';

function BackButton() {

  return (
    <Link style={{ textDecoration: 'none' }} to="/portfolio">
      <Button variant="contained"  sx={BackButtonSX().background}>
        <ForwardIcon sx={BackButtonSX().icon}/>
      </Button>
    </Link>
  )
}

export default BackButton;
