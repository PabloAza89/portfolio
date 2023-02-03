import React, { useState , useRef, useEffect} from 'react';
import {Box, Button,CardMedia, Typography} from '@mui/material';
import { BrowserRouter, Navigate, Route, Routes , Link} from "react-router-dom";
import gear from '../../images/gear.png';
import ForwardIcon from '@mui/icons-material/Forward';
import BackButton from '../BackButton/BackButton';
import UnderConstruction from '../UnderConstruction/UnderConstruction';
import { useSelector, useDispatch } from 'react-redux';

function Skills() {

  // const width = useSelector(state => state.width)
  // const height = useSelector(state => state.height)
  // const minPort = useSelector(state => state.minPort)
  // const minLand = useSelector(state => state.minLand)
  // const medPort = useSelector(state => state.medPort)
  // const medLand = useSelector(state => state.medLand)
  // const larPort = useSelector(state => state.larPort)
  // const larLand = useSelector(state => state.larLand)
  // const staticRefWidth = useSelector(state => state.staticRefWidth)
  // const staticRefHeight = useSelector(state => state.staticRefHeight)
  // const maxStaticReference = useSelector(state => state.maxStaticReference)
  // const currentWidth = useSelector(state => state.currentWidth)
  // const currentHeight = useSelector(state => state.currentHeight)
  // const percentageResizedHeight = useSelector(state => state.percentageResizedHeight)
  // const percentageResizedWidth = useSelector(state => state.percentageResizedWidth)

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '93vh', width: '97vw', background: 'none'}}>
      <BackButton />
      <UnderConstruction />
    </Box>
  )
}

export default Skills;