import { useSelector } from 'react-redux';
import store from '../store/store'

function select(state: any) {
  return state
}

let currentValue: any
function handleChange() {
  let previousValue = currentValue
  currentValue = select(store.getState())

  if (previousValue !== currentValue) {
    console.log("TEST 123", currentValue)
  }
}

let unsubscribe = store.subscribe(handleChange)
handleChange()

let minPorttt

function Get() {

  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)

  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)
  const staticRefWidth = useSelector((state: {staticRefWidth:number}) => state.staticRefWidth)
  const staticRefHeight = useSelector((state: {staticRefHeight:number}) => state.staticRefHeight)
  const minRatioReference = useSelector((state: {minRatioReference:number}) => state.minRatioReference)
  const percentageResizedHeight = useSelector((state: {percentageResizedHeight:number}) => state.percentageResizedHeight)
  const percentageResizedWidth = useSelector((state: {percentageResizedWidth:number}) => state.percentageResizedWidth)
  /* const  = useSelector((state: {:number}) => state.) */

  return {
    minPort, minLand, medPort,medLand, larPort, larLand, staticRefHeight,
    staticRefWidth, minRatioReference, percentageResizedHeight, percentageResizedWidth
  }
}

export { minPorttt, unsubscribe }

export default Get;