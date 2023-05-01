import { useSelector } from 'react-redux';
import { asc, column, flex, jcc, noSelect, relative, row
} from './CommonsSX';

function HomeSX() {

  const darkMode = useSelector( (state: {darkMode:boolean}) => state.darkMode)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)
  const staticRefHeight = useSelector((state: {staticRefHeight:number}) => state.staticRefHeight)  // OJO QUE FUNC CON {store.getState().staticRefHeight TAMBIEN
  const percentageResizedHeight = useSelector((state: {percentageResizedHeight:number}) => state.percentageResizedHeight)

const background = () => {
  return {
    ...flex, ...relative, ...jcc,
    background: 'none',
    flexDirection: minPort ? 'column' : minLand ? 'row' : 'row',
    width: minPort ? '97vw' : minLand ? '97vw' : '97vw',
    height: minPort ? '71vh' : minLand ? '60vh' : larPort ? '45vh' : '71vh'
  }
}

const bgLeft = () => {
  return {
    ...relative,
    background: 'none',
    justifyContent: medPort ? 'space-evenly' : 'center',
    display: minPort || minLand ? 'contents' : 'flex',
    flexDirection: minPort ? 'column' : minLand ? 'row' : 'column',
    width: minPort ? '97vw' : minLand ? '97vw' : '50vw',
    height: minPort ? '40vh' : minLand ? '60vh' : larPort ? '45vh' : '71vh'
  }
}

const bgLeftUpper = () => {
  return {
    ...relative, ...flex, ...column, ...jcc, ...asc,
    background:'none',
    border: 'none',
    height: minPort ? '50vh' : minLand ? '55vh' : larPort ? '28vh' : '35vh',
    width: minPort ? '90vw' : minLand ? '45vw' : larPort ? '40vw' : '40vw'
  }
}

let bgLeftUpperTextOne = () => {
  return {
    ...noSelect(),
    'color': darkMode ? '#b5b3b3' : '#FFFFFF',
    'fontSize': minPort  ? '11.5vw' : minLand ? '4.9vw' : larPort ? '5.0vw' : percentageResizedHeight < 0.238 ? `${staticRefHeight * 1.7}px` : '6.9vh',
    'mix-blend-mode': 'difference',
    /* display: 'none' */
  }
}

const bgLeftUpperTextTwo = () => {
  return {
    ...noSelect(),
    color: darkMode ? '#b5b3b3' : '#FFFFFF',
    fontSize: minPort  ? '11.5vw' : minLand ? '5.4vw' : larPort ? '5.2vw' : percentageResizedHeight < 0.238 ? `${staticRefHeight * 1.75}px` : '7.2vh',
    'mix-blend-mode': 'difference',
    'inline-size': 'max-content'
  }
}

const bgLeftUpperTextThree = () => {
  return {
    ...noSelect(),
    color: darkMode ? '#b5b3b3' : '#FFFFFF',
    fontSize: minPort  ? '11.5vw' : minLand ? '2.9vw' : larPort ? '3.8vw' : percentageResizedHeight < 0.238 ? `${staticRefHeight * 1.1}px` : '4.5vh',
    'mix-blend-mode': 'difference'
  }
}

const bgLeftLower = () => {
  return {
    ...jcc, ...relative, ...column, ...asc,
    background: 'none',
    left: minPort ? '-0.5vw' : minLand ? '0vw' : larPort ? '0vw' : '0vw',
    display: larPort ? 'none' : larLand && percentageResizedHeight < 0.381 ? 'none' : 'flex',
    height: minPort ? '11vh' : minLand ? '8vh' : '11vh',
    width: minPort ? '97vw' : minLand ? '50vw' : larPort ? '48vw' : '40vw'
  }
}

const minLandRightLower = () => {
  return {
    ...jcc,
    background: 'red',
    display: minLand ? 'flex' : 'none',
    justifyContent: 'center'
  }
}

return { background, bgLeft, bgLeftUpper, bgLeftUpperTextOne,
  bgLeftUpperTextTwo, bgLeftUpperTextThree, bgLeftLower,minLandRightLower }

}

export default HomeSX;
