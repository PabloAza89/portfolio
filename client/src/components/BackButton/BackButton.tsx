import React from 'react';
import {Box, Button,CardMedia, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import ForwardIcon from '@mui/icons-material/Forward';
import { jc , as, noSelect, prtr, wi, he, or}from '../../styles/styles'
import { useSelector, useDispatch } from 'react-redux';
import { background, icon } from '../../styles/backButton';
import {
  minPort, minLand,
  medPort, medLand,
  larPort, larLand,
  currentHeight, bgRed,
  staticRefWidth, staticRefHeight,
  maxStaticReference,
  flex, column,
  row, bgNone,
} from '../../styles/commons';

function BackButton() {

  return (
    <Link style={{ textDecoration: 'none' }} to="/portfolio">
      <Button variant="contained"  sx={background}>
        <ForwardIcon sx={icon}/>
      </Button>
    </Link>
  )
}

export default BackButton;
