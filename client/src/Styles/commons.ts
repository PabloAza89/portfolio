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

const flex = {
  display: 'flex'
}

 const column = {
  flexDirection: 'column'
}

 const row = {
  flexDirection: 'row'
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
  column,
  row,
  bgNone,
  bgRed
}