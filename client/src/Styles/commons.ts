/* import React, { useState , useRef, useEffect} from 'react'; */
/* import { useSelector, useDispatch } from 'react-redux'; */
import store from '../store/store'

import {
  setWidth, setHeight, setMinPort, setMinLand,
  setMedPort, setMedLand, setLarPort, setLarLand,
  setStaticRefWidth, setStaticRefHeight, setMaxStaticReference,
  setMinStaticReference, setCurrentWidth, setCurrentHeight,
  setPercentageResizedHeight, setPercentageResizedWidth, setMinRatioReference
} from '../actions';


  /* store.dispatch(setMinPort(window.screen.width < 425 && window.matchMedia("(orientation: portrait)").matches ? true : false)) */


const width = store.getState().width;
const height = store.getState().height;




function select(state: any) {
  return state
}

const minPortx = () => { 
  let currentValue = select(store.getState())
  return currentValue
}

let unsubscribe = store.subscribe(minPortx)




const minPort = store.getState().minPort

const minLand = store.getState().minLand;



const medPort = store.getState().medPort;
const medLand = store.getState().medLand;
const larPort = store.getState().larPort;
const larLand = store.getState().larLand;
const staticRefWidth = store.getState().staticRefWidth;
const staticRefHeight = store.getState().staticRefHeight;
const maxStaticReference = store.getState().maxStaticReference;
const currentWidth = store.getState().currentWidth;
const currentHeight = store.getState().currentHeight;
const percentageResizedHeight = store.getState().percentageResizedHeight;
const percentageResizedWidth = store.getState().percentageResizedWidth;
const minRatioReference = store.getState().minRatioReference;

const MMinLand = () => {

}

const noSelect = () => {
  return {'-webkit-touch-callout': 'none', '-webkit-user-select': 'none', '-khtml-user-select': 'none', '-moz-user-select': 'none', '-ms-user-select': 'none', 'user-select': 'none'}
}

const flex = {
  display: 'flex'
}

const relative = {
  position: 'relative'
}

const absolute = {
  position: 'absolute'
}

const fixed = {
  position: 'fixed'
}

 const column = {
  flexDirection: 'column'
}

const row = {
  flexDirection: 'row'
}

const aic = {
  alignItems: 'center'
}

const asc = {
  alignSelf: 'center'
}

const jcc = {
  justifyContent: 'center'
}

const jcsb = {
  justifyContent: 'space-between'
}

const jsc = {
  justifySelf: 'center'
}

const jic = {
  justifyItems: 'center'
}

const bgNone = {
  background: 'none'
}

const bgRed = {
  background: 'Red'
}

export {
  width,
  height,
  minPort,
  minLand,
  MMinLand,
  medPort,
  medLand,
  larPort,
  larLand,
  currentHeight,
  staticRefWidth,
  staticRefHeight,
  maxStaticReference,
  flex,
  absolute,
  relative,
  fixed,
  column,
  row,
  aic,
  asc,
  jcc,
  jsc,
  jic,
  bgNone,
  bgRed,
  noSelect,
  jcsb,
  percentageResizedHeight,
  percentageResizedWidth,
  minRatioReference,
  minPortx
}