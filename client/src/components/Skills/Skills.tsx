import React, { useState , useRef, useEffect} from 'react';
import {Box, Button,CardMedia, Typography} from '@mui/material';
import { BrowserRouter, Navigate, Route, Routes , Link} from "react-router-dom";
import gear from '../../images/gear.png';
import ForwardIcon from '@mui/icons-material/Forward';
import BackButton from '../BackButton/BackButton';
import UnderConstruction from '../UnderConstruction/UnderConstruction';
import { useSelector, useDispatch } from 'react-redux';

function Skills() {

  // const width = useSelector((state: {width: number}) => state.width)
  // const height = useSelector((state: {height: number}) => state.height)
  // const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  // const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  // const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  // const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
  // const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  // const larLand = useSelector((state: {larLand:boolean}) => state.larLand)
  // const staticRefWidth = useSelector((state: {staticRefWidth:number}) => state.staticRefWidth)
  // const staticRefHeight = useSelector((state: {staticRefHeight:number}) => state.staticRefHeight)
  // const maxStaticReference = useSelector((state: {maxStaticReference: number}) => state.maxStaticReference)
  // const currentWidth = useSelector((state: {currentWidth:number}) => state.currentWidth)
  // const currentHeight = useSelector((state: {currentHeight:number}) => state.currentHeight)
  // const percentageResizedHeight = useSelector((state: {percentageResizedHeight:number}) => state.percentageResizedHeight)
  // const percentageResizedWidth = useSelector((state: {percentageResizedWidth:number}) => state.percentageResizedWidth)

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '93vh', width: '97vw', background: 'none'}}>
      <BackButton />
      <UnderConstruction />
    </Box>
  )
}

export default Skills;