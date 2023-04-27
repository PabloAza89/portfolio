import React from 'react';
import {Box, Button,CardMedia, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import ForwardIcon from '@mui/icons-material/Forward';
import { jc , as, noSelect, prtr, wi, he, or}from '../../styles/StylesSX'
import { useSelector, useDispatch } from 'react-redux';
import { background, icon } from '../../styles/BackButtonSX';
import {
  MinPort, MinLand, MedPort, MedLand, LarPort, LarLand,
  CurrentHeight, bgRed, StaticRefWidth, StaticRefHeight,
  MaxStaticReference, flex, column, row, bgNone, Width, Height,
  PercentageResizedHeight, PercentageResizedWidth
} from '../../styles/CommonsSX';

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
