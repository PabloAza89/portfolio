import { useSelector, useDispatch } from 'react-redux';
import store from '../store/store'

 const useEnglish = () => {
  return useSelector((state: {english:boolean}) => state.english)
}

 const useWidth = () => {
  return useSelector((state: {width: number}) => state.width)
}

 const useHeight = () => {
  return useSelector((state: {height: number}) => state.height)
}


/* const MinPort = () => {
  return useSelector((state: {minPort:boolean}) => state.minPort)
} */

/*  const useMinPort = useSelector((state: {minPort:boolean}) => state.minPort) */

 const minPort = store.getState().minPort;

 const minLand = store.getState().minLand;


 /* const useMinLand = () => {
  return useSelector((state: {minLand:boolean}) => state.minLand)
} */

 const useMedPort = () => {
  return useSelector((state: {medPort:boolean}) => state.medPort)
}

const useMedLand = () => {
  return useSelector((state: {medLand:boolean}) => state.medLand)
}

 const useLarPort = () => {
  return useSelector((state: {larPort:boolean}) => state.larPort)
}
 const useLarLand = () => {
  return useSelector((state: {larLand:boolean}) => state.larLand)
}

 const useStaticRefWidth = () => {
  return useSelector((state: {staticRefWidth:number}) => state.staticRefWidth)
}

 const useStaticRefHeight = () => {
  return useSelector((state: {staticRefHeight:number}) => state.staticRefHeight)
}

 const useMaxStaticReference = () => {
  return useSelector((state: {maxStaticReference:number}) => state.maxStaticReference)
}

 const useCurrentWidth = () => {
  return useSelector((state: {currentWidth:number}) => state.currentWidth)
}

 const useCurrentHeight = () => {
  return useSelector((state: {currentHeight:number}) => state.currentHeight)
}

 const usePercentageResizedHeight = () => {
  return useSelector((state: {percentageResizedHeight:number}) => state.percentageResizedHeight)
}

 const usePercentageResizedWidth = () => {
  return useSelector((state: {percentageResizedWidth:number}) => state.percentageResizedWidth)
}

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
  useEnglish,
  minPort,
  
  minLand,
  useMedPort,
  useMedLand,
  useLarPort,
  useLarLand,
  useCurrentHeight,
  useStaticRefWidth,
  useStaticRefHeight,
  useMaxStaticReference,
  flex,
  column,
  row,
  bgNone,
  bgRed
}