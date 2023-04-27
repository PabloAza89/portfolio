import React, { useState , useRef, useEffect} from 'react';

import { setWidth, setHeight, setMinPort, setMinLand,
  setMedPort, setMedLand, setLarPort, setLarLand,
  setStaticRefWidth, setStaticRefHeight, setMaxStaticReference,
  setMinStaticReference, setCurrentWidth, setCurrentHeight,
  setPercentageResizedHeight, setPercentageResizedWidth, setMinRatioReference } from '../actions';
import { useSelector, useDispatch } from 'react-redux';
import store from '../store/store'



function Set() {

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
      dispatch(setMinStaticReference(( window.screen.width <= window.screen.height ) ? window.screen.width / 100 : window.screen.height / 100))
      dispatch(setCurrentWidth(window.innerWidth))
      dispatch(setCurrentHeight(window.innerHeight))
      dispatch(setPercentageResizedHeight(window.innerHeight / window.screen.height))
      dispatch(setPercentageResizedWidth(window.innerWidth / window.screen.width))
      dispatch(setMinRatioReference(window.innerWidth / window.screen.width <= window.innerHeight / window.screen.height  ? (window.innerWidth / window.screen.width) / (window.innerHeight / window.screen.height) : (window.innerHeight / window.screen.height) / (window.innerWidth / window.screen.width)))
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    /* minPort = store.getState().minPort */


    return () => window.removeEventListener("resize", handleResize);
  }, []);
}


export default Set;