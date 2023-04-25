import { useSelector, useDispatch } from 'react-redux';
import store from '../store/store'

const width = store.getState().width;
const height = store.getState().height;
const minPort = store.getState().minPort;
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

const bgNone = {
  background: 'none'
}

const bgRed = {
  background: 'Red'
}

export {
  minPort,
  minLand,
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
  column,
  row,
  aic,
  asc,
  jcc,
  jsc,
  bgNone,
  bgRed,
  noSelect,
  jcsb
}