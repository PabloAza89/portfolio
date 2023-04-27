/* import './App.css'; */
import React, { useState , useRef, useEffect} from 'react';
import { setWidth, setHeight, setMinPort, setMinLand,
  setMedPort, setMedLand, setLarPort, setLarLand,
  setStaticRefWidth, setStaticRefHeight, setMaxStaticReference,
  setMinStaticReference, setCurrentWidth, setCurrentHeight,
  setPercentageResizedHeight, setPercentageResizedWidth, setMinRatioReference } from '../actions';
import { useSelector, useDispatch } from 'react-redux';
//import { larPort, medPort } from './commons';

/* import {
  minPort, minLand, MMinLand, medPort, medLand, larPort, larLand,
  currentHeight, bgRed, staticRefWidth, staticRefHeight,
  maxStaticReference, flex, column, row, bgNone, width, height,
  percentageResizedHeight, percentageResizedWidth, minRatioReference
} from './styles/commons'; */

function ResizeController() {

 /*  public get height() {
    return window.innerHeight;
  } */

  const dispatch = useDispatch()

 /*  useEffect(() => {
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
      dispatch(setMinStaticReference(( window.screen.width <= window.screen.height ) ? window.screen.width / 100 : window.screen.height / 100))
      dispatch(setCurrentWidth(window.innerWidth))
      dispatch(setCurrentHeight(window.innerHeight))
      dispatch(setPercentageResizedHeight(window.innerHeight / window.screen.height))
      dispatch(setPercentageResizedWidth(window.innerWidth / window.screen.width))
      dispatch(setMinRatioReference(window.innerWidth / window.screen.width <= window.innerHeight / window.screen.height  ? (window.innerWidth / window.screen.width) / (window.innerHeight / window.screen.height) : (window.innerHeight / window.screen.height) / (window.innerWidth / window.screen.width)))
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []); */

        /* const minPort = useSelector((state: {minPort:boolean}) => state.minPort) */
        // const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
        // const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
        // const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
        // const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
        // const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
        // const larLand = useSelector((state: {larLand:boolean}) => state.larLand)
        //const staticRefWidth = useSelector((state: {staticRefWidth:number}) => state.staticRefWidth)
        //const minRatioReference = useSelector((state: {minRatioReference:number}) => state.minRatioReference)

        //console.log("OTRO", " MIN PORT: " , minPort, " | MIN LAND: ", minLand, " | MED PORT: ", medPort, " | MED LAND: ", medLand, " | LAR PORT: ", larPort, " | LAR LAND: ", larLand)

  /* return {minPort: minPort, minLand : minLand, medPort : medPort,
    medLand: medLand, larPort: larPort, larLand : larLand} */

    return /* {minPort, minLand, medPort,medLand, larPort, larLand} */
}

export default ResizeController;