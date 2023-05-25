import {
  asc, column, mix, flex, jcc, noSelect, absolute, relative, row
} from './CommonsSX';
import { blue, brown, lime, red, grey } from '@mui/material/colors';

interface backgroundI {
  minPort: boolean,
  minLand: boolean,
  larPort: boolean
}

const background = ({ minPort, minLand, larPort }: backgroundI) => {
  return {
    display: 'flex',
    position: 'relative',
    justifyContent: larPort ? 'center' : 'none',
    //justifyContent: 'space-between',
    flexDirection: 'row',
    minWidth: larPort ? '817px' : 'none',
    width: 'calc(100vw - 12px)',
    //height: 'calc(100vh - 12px)',
    //...flex, ...relative, ...jcc, ...asc,
    background: 'gray',
    //flexDirection: minPort ? 'column' : minLand ? 'row' : 'row',
    //width: minPort ? '97vw' : minLand ? '97vw' : '97vw',
    height: minPort ? '71vh' : minLand ? '65vh' : larPort ? '75vh' : '75vh',
    
  }
}



interface leftBoxI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
}

const leftBox = ({ minPort, minLand, medPort, medLand, larPort, larLand }: leftBoxI) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    background: 'maroon',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    minWidth: /* minPort ? '90vw' :  */'817px',
    width: minPort ? '90vw' : '50%',
    minHeight: minPort ? '23vh' : minLand ? '60vh' : medPort ? '45vh' : larPort ? '500px' : '500px',
    height: minPort ? '23vh' : minLand ? '60vh' : medPort ? '45vh' : larPort ? '75vh' : '75vh',
  }
}

interface textLeftBoxOrTopI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
}

const textLeftBoxOrTop = ({ minPort, minLand, medPort, medLand, larPort, larLand }: textLeftBoxOrTopI) => {
  return {
    /* ...relative, */ /* ...flex, ...column, */ /* ...jcc, ...asc, */
    //alignSelf: medPort ? 'flex-start' : medLand ? 'flex-start' : larPort ? 'flex-start' : larLand ? 'flex-start' : 'center',
    background: 'red',
    justifyContent: 'space-around',
    //justifyContent:  larPort ? 'end' : 'space-evenly',
    display: 'flex',
    flexDirection: 'column',
    minWidth: minPort ? '92vw' : minLand ? '50vw' : larPort ? '460px' : '460px',
    width: minPort ? '92vw' : minLand ? '50vw' : larPort ? '700px' : '700px',
    minHeight: minPort ? '45vh' : minLand ? '60vh' : medPort ? '45vh' : medLand ? '45vh' : larPort ? '300px' : '300px',
    height: minPort ? '45vh' : minLand ? '60vh' : medPort ? '45vh' : medLand ? '45vh' : larPort ? '300px' : '300px'
  }
}

interface textOneI {
  darkMode: boolean,
  minPort: boolean,
  minLand: boolean,
  larPort: boolean,
  percentageResizedHeight: number,
  staticRefHeight: number
}

const textOne = ({ darkMode, minPort, minLand, larPort, percentageResizedHeight, staticRefHeight }: textOneI) => {
  return {
    ...noSelect, ...mix, ...relative, ...flex,
    'color': darkMode ? '#b5b3b3' : '#FFFFFF',
    'fontSize': minPort  ? '11.5vw' : minLand ? '4.9vw' : larPort ? '50px' : '50px',
    /* display: 'none' */
  }
}

interface textTwoI {
  darkMode: boolean,
  minPort: boolean,
  minLand: boolean,
  larPort: boolean,
  percentageResizedHeight: number,
  staticRefHeight: number
}

const textTwo = ({ darkMode, minPort, minLand, larPort, percentageResizedHeight, staticRefHeight }: textTwoI) => {
  return {
    ...noSelect, ...mix,
    color: darkMode ? '#b5b3b3' : '#FFFFFF',
    fontSize: minPort  ? '11.5vw' : minLand ? '5.4vw' : larPort ? '57px' : '57px',
    'inlineSize': 'max-content'
  }
}

interface textThreeI {
  darkMode: boolean,
  minPort: boolean,
  minLand: boolean,
  larPort: boolean,
  percentageResizedHeight: number,
  staticRefHeight: number
}

const textThree = ({ darkMode, minPort, minLand, larPort, percentageResizedHeight, staticRefHeight }: textThreeI) => {
  return {
    ...noSelect, ...mix,
    color: darkMode ? '#b5b3b3' : '#FFFFFF',
    fontSize: minPort  ? '11.5vw' : minLand ? '2.9vw' : larPort ? '33px' : '33px',
  }
}

interface boxTechnologiesI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean,
  percentageResizedHeight: number
}

const boxTechnologies = ({ minPort, minLand, medPort, medLand, larPort, larLand, percentageResizedHeight }: boxTechnologiesI) => {
  return {
    ...jcc, /* ...relative, */ ...column, ...asc,
    position: medPort ? 'absolute' : medLand ? 'absolute' : larPort ? 'absolute' : larLand ? 'absolute ' : 'relative',
    background: 'green',
    display: 'flex',
    bottom: medPort ? '2vh' : medLand ? '13vh' : larPort ? '0vh' : larLand ? '15vh' : 'none',
    height: minPort ? '11vh' : minLand ? '20vh' : '11vh',
    left: medPort ? '3vw' : medLand ? '3vw' : larPort ? '3vw' : larLand ? '3vw' : 'none',
    width: minPort ? '97vw' : minLand ? '45vw' : medPort ? '90vw':  medLand ? '45vw' : larPort ? '90vw' : '45vw'
  }
}

interface boxMessageI {
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
}

const boxMessage = ({ minLand, medPort, medLand, larPort, larLand }: boxMessageI ) => {
  return {
    background: 'teal',
    alignItems: medPort ? 'flex-start' : 'center',
    display: minLand ? 'flex' : 'flex',
    justifyContent: 'center',
    bottom: medPort ? '13vh' : medLand ? '2vh' : larPort ? '10vh' : larLand ? '4vh' : 'none',
    left: medPort ? '20vw' : medLand ? '20vw' : larPort ? '15vw' : larLand ? '17vw' : 'none',
    position: medPort ? 'absolute' : medLand ? 'absolute' : larPort ? 'absolute' : larLand ? 'absolute' : 'relative',
    height: medPort ? '8vh' : '10vh'
  }
}

interface buttonMessageI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  larPort: boolean
}

const buttonMessage = ({ minPort, minLand, medPort, larPort }: buttonMessageI ) => {
  return {
    background: 'none',
    padding: '0px !important',
    minWidth: minPort ? '53vw !important' : minLand ? '9vw !important' : '2vw !important',
    minHeight: minPort ? '10vw !important' : minLand ? '2.1vw !important' : '4.1vh !important',
    color:'#FFFFFF',
    width: minPort ? '19vw' : minLand ? '19vw' : medPort ? '29vw' : larPort ? '370px' : '370px',
    fontSize: minPort ? '4vw' : larPort ? '31px' : '31px',
    mixBlendMode: 'difference'
  }
}

interface boxRightOrBottonI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  larPort: boolean
}

const boxRightOrBotton = ({ minPort, minLand, medPort, larPort }: boxRightOrBottonI ) => {
  return {
    background: 'brown',
    position: 'relative',
    justifyContent: 'center',
    //alignSelf: medPort ? 'flex-start' : 'center',
    display: larPort ? 'none' : 'flex',
    //flexDirection: minPort ? 'column' : minLand ? 'column' : 'none',
    minWidth: minPort ? '23vh' : minLand ? '60vh' : medPort ? '45vh' : larPort ? '75vh' : '500px',
    width: minPort ? '90vw' : '50%',
    //justifyContent: 'center',
    minHeight: minPort ? '23vh' : minLand ? '60vh' : medPort ? '45vh' : larPort ? '75vh' : '500px',
    height: minPort ? '23vh' : minLand ? '60vh' : medPort ? '45vh' : larPort ? '75vh' : '75vh',
    alignItems: 'center'
  }
}

interface SVGI {
  width: number,
  height: number,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  larPort: boolean,
  larLand: boolean,
  percentageResizedHeight: number,
  percentageResizedWidth: number
}

const SVG = ({ width, height, minPort, minLand, medPort, larPort, larLand, percentageResizedHeight, percentageResizedWidth }: SVGI ) => {
  return {
    display: minPort ? 'none' : minLand ? 'none' : 'flex',
    background: 'red',
    position: 'fixed',    
    minHeight: minPort ? '23vh' : minLand ? '60vh' : medPort ? '45vh' : larPort ? '75vh' : '500px',
    //height: medPort ? '35vw' : larPort ? '600px' : '500px',
    minWidth: '500px',
    //width: medPort ? '35vw' : larPort ? '600px' : '500px',
    //minHeight: percentageResizedHeight < 0.250 ? '110px' : 'null'
  }
}

const greyBottom = () => {
  return {
    background: grey[400],
    height: '6px',
    width: 'calc(100vw - 12px)',
    display: 'flex',
    position: 'fixed',
    bottom: '0px',
    zIndex: 1000
  }
}

const greyRight = () => {
  return {
    //background: grey[400],
    background: 'blue',
    height: '100vh',
    width: '6px',
    display: 'flex',
    position: 'absolute',
    right: '0px',
    zIndex: 1000
  }
}

export {
  background, textLeftBoxOrTop, textOne,
  textTwo, textThree, boxTechnologies,
  boxMessage, buttonMessage, boxRightOrBotton,
  SVG, greyBottom, greyRight, leftBox
}