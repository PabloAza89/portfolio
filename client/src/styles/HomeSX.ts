import {
  asc, column, mix, flex, jcc, noSelect, relative, row
} from './CommonsSX';

interface backgroundI {
  minPort: boolean,
  minLand: boolean,
  larPort: boolean
}

const background = ({ minPort, minLand, larPort }: backgroundI) => {
  return {
    ...flex, ...relative, ...jcc,
    background: 'none',
    flexDirection: minPort ? 'column' : minLand ? 'row' : 'row',
    width: minPort ? '97vw' : minLand ? '97vw' : '97vw',
    height: minPort ? '71vh' : minLand ? '60vh' : larPort ? '45vh' : '71vh'
  }
}

interface bgLeftI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  larPort: boolean
}

const bgLeft = ({ minPort, minLand, medPort, larPort }: bgLeftI) => {
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

interface bgLeftUpperI {
  minPort: boolean,
  minLand: boolean,
  larPort: boolean
}

const bgLeftUpper = ({ minPort, minLand, larPort }: bgLeftUpperI) => {
  return {
    ...relative, ...flex, ...column, ...jcc, ...asc,
    background:'none',
    border: 'none',
    height: minPort ? '50vh' : minLand ? '55vh' : larPort ? '28vh' : '35vh',
    width: minPort ? '90vw' : minLand ? '45vw' : larPort ? '40vw' : '40vw'
  }
}

interface bgLeftUpperTextOneI {
  darkMode: boolean,
  minPort: boolean,
  minLand: boolean,
  larPort: boolean,
  percentageResizedHeight: number,
  staticRefHeight: number
}

let bgLeftUpperTextOne = ({ darkMode, minPort, minLand, larPort, percentageResizedHeight, staticRefHeight }: bgLeftUpperTextOneI) => {
  return {
    ...noSelect, ...mix,
    'color': darkMode ? '#b5b3b3' : '#FFFFFF',
    'fontSize': minPort  ? '11.5vw' : minLand ? '4.9vw' : larPort ? '5.0vw' : percentageResizedHeight < 0.238 ? `${staticRefHeight * 1.7}px` : '6.9vh',
    /* display: 'none' */
  }
}

interface bgLeftUpperTextTwoI {
  darkMode: boolean,
  minPort: boolean,
  minLand: boolean,
  larPort: boolean,
  percentageResizedHeight: number,
  staticRefHeight: number
}

const bgLeftUpperTextTwo = ({ darkMode, minPort, minLand, larPort, percentageResizedHeight, staticRefHeight }: bgLeftUpperTextTwoI) => {
  return {
    ...noSelect, ...mix,
    color: darkMode ? '#b5b3b3' : '#FFFFFF',
    fontSize: minPort  ? '11.5vw' : minLand ? '5.4vw' : larPort ? '5.2vw' : percentageResizedHeight < 0.238 ? `${staticRefHeight * 1.75}px` : '7.2vh',
    'inlineSize': 'max-content'
  }
}

interface bgLeftUpperTextThreeI {
  darkMode: boolean,
  minPort: boolean,
  minLand: boolean,
  larPort: boolean,
  percentageResizedHeight: number,
  staticRefHeight: number
}

const bgLeftUpperTextThree = ({ darkMode, minPort, minLand, larPort, percentageResizedHeight, staticRefHeight }: bgLeftUpperTextThreeI) => {
  return {
    ...noSelect, ...mix,
    color: darkMode ? '#b5b3b3' : '#FFFFFF',
    fontSize: minPort  ? '11.5vw' : minLand ? '2.9vw' : larPort ? '3.8vw' : percentageResizedHeight < 0.238 ? `${staticRefHeight * 1.1}px` : '4.5vh',
  }
}

interface bgLeftLowerI { 
  minPort: boolean,
  minLand: boolean,
  larPort: boolean,
  larLand: boolean,
  percentageResizedHeight: number
}

const bgLeftLower = ({ minPort, minLand, larPort, larLand, percentageResizedHeight }: bgLeftLowerI) => {
  return {
    ...jcc, ...relative, ...column, ...asc,
    background: 'none',
    left: minPort ? '-0.5vw' : minLand ? '0vw' : larPort ? '0vw' : '0vw',
    display: larPort ? 'none' : larLand && percentageResizedHeight < 0.381 ? 'none' : 'flex',
    height: minPort ? '11vh' : minLand ? '8vh' : '11vh',
    width: minPort ? '97vw' : minLand ? '50vw' : larPort ? '48vw' : '40vw'
  }
}

const minLandRightLower = ( minLand: boolean ) => {
  return {
    ...jcc,
    background: 'red',
    display: minLand ? 'flex' : 'none',
    justifyContent: 'center'
  }
}

export {
  background, bgLeft, bgLeftUpper, bgLeftUpperTextOne,
  bgLeftUpperTextTwo, bgLeftUpperTextThree, bgLeftLower,
  minLandRightLower
}