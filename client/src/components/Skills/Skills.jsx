import React, { useState , useRef, useEffect} from 'react';
import {Box, Button,CardMedia, Typography} from '@mui/material';
import { BrowserRouter, Navigate, Route, Routes , Link} from "react-router-dom";
import gear from '../../images/gear.png';
import ForwardIcon from '@mui/icons-material/Forward';
import BackButton from '../BackButton/BackButton';
import UnderConstruction from '../UnderConstruction/UnderConstruction';
import { useSelector, useDispatch } from 'react-redux';
import {
  setWidth,
  setHeight,
  setMinPort,
  setMinLand,
  setMedPort,
  setMedLand,
  setLarPort,
  setLarLand,
  setStaticRefWidth,
  setStaticRefHeight,
  setMaxStaticReference,
  setCurrentWidth,
  setCurrentHeight,
  setPercentageResizedHeight,
  setPercentageResizedWidth
} from '../../actions';

function Skills() {
  const dispatch = useDispatch()

  useEffect(() => {
    function handleResize() {
      dispatch(setWidth(window.screen.width))
      dispatch(setHeight(window.screen.height))
      dispatch(setMinPort(window.screen.width < 425 && window.matchMedia("(orientation: portrait)").matches ? true : false))
      dispatch(setMinLand(window.screen.height < 425 && !window.matchMedia("(orientation: portrait)").matches ? true : false))
      dispatch(setMedPort(window.screen.width >= 425 && window.screen.width <= 825 && window.matchMedia("(orientation: portrait)").matches ? true : false))
      dispatch(setMedLand(window.screen.height >= 425 && window.screen.height <= 825 && !window.matchMedia("(orientation: portrait)").matches ? true : false))
      dispatch(setLarPort(window.screen.width > 825 && window.matchMedia("(orientation: portrait)").matches ? true : false))
      dispatch(setLarLand(window.screen.height > 825 && !window.matchMedia("(orientation: portrait)").matches ? true : false))
      dispatch(setStaticRefWidth(window.screen.width / 100))
      dispatch(setStaticRefHeight(window.screen.height / 100))
      dispatch(setMaxStaticReference((window.screen.width >= window.screen.height ) ? window.screen.width / 100 : window.screen.height / 100))
      dispatch(setCurrentWidth(window.innerWidth))
      dispatch(setCurrentHeight(window.innerHeight))
      dispatch(setPercentageResizedHeight(window.innerHeight / window.screen.height))
      dispatch(setPercentageResizedWidth(window.innerWidth / window.screen.width))
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const width = useSelector( state => state.width )
  const height = useSelector( state => state.height )
  const minPort = useSelector( state => state.minPort )
  const minLand = useSelector( state => state.minLand )
  const medPort = useSelector( state => state.medPort )
  const medLand = useSelector( state => state.medLand )
  const larPort = useSelector( state => state.larPort )
  const larLand = useSelector( state => state.larLand )
  const staticRefWidth = useSelector( state => state.staticRefWidth )
  const staticRefHeight = useSelector( state => state.staticRefHeight )
  const maxStaticReference = useSelector( state => state.maxStaticReference )
  const currentWidth = useSelector( state => state.currentWidth )
  const currentHeight = useSelector( state => state.currentHeight )
  const percentageResizedHeight = useSelector( state => state.percentageResizedHeight )
  const percentageResizedWidth = useSelector( state => state.percentageResizedWidth )  

  return (

    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '93vh', width: '97vw', background: 'none'}}>
      <BackButton />
      <UnderConstruction />
    </Box>
  )
}

export default Skills;