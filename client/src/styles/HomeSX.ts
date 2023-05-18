import {
  asc, column, mix, flex, jcc, noSelect, absolute, relative, row
} from './CommonsSX';

interface backgroundI {
  minPort: boolean,
  minLand: boolean,
  larPort: boolean
}

const background = ({ minPort, minLand, larPort }: backgroundI) => {
  return {
    ...flex, ...relative, ...jcc, ...asc,
    background: 'none',
    
    flexDirection: minPort ? 'column' : minLand ? 'row' : 'row',
    width: minPort ? '97vw' : minLand ? '97vw' : '97vw',
    height: minPort ? '71vh' : minLand ? '65vh' : larPort ? '60vh' : '71vh',
    
  }
}

interface leftBoxOrTopI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
}

const leftBoxOrTop = ({ minPort, minLand, medPort, medLand, larPort, larLand }: leftBoxOrTopI) => {
  return {
    /* ...relative, */ /* ...flex, ...column, */ /* ...jcc, ...asc, */
    alignSelf: medPort ? 'flex-start' : medLand ? 'flex-start' : larPort ? 'flex-start' : larLand ? 'flex-start' : 'center',
    background: 'none',
    justifyContent:  larPort ? 'end' : 'space-evenly',
    display: minPort ? 'flex' : minLand ? 'flex' : 'flex',
    flexDirection: minLand ? 'column' : 'column',
    width: minPort ? '92vw' : minLand ? '50vw' : larLand ? '40vw' : '50vw',
    height: minPort ? '45vh' : minLand ? '60vh' : medPort ? '45vh' : medLand ? '45vh' : larPort ? '35vh' : '45vh'
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
    'fontSize': minPort  ? '11.5vw' : minLand ? '4.9vw' : larPort ? '5.0vw' : percentageResizedHeight < 0.238 ? `${staticRefHeight * 1.7}px` : '6.9vh',
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
    fontSize: minPort  ? '11.5vw' : minLand ? '5.4vw' : larPort ? '5.2vw' : percentageResizedHeight < 0.238 ? `${staticRefHeight * 1.75}px` : '7.2vh',
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
    fontSize: minPort  ? '11.5vw' : minLand ? '2.9vw' : larPort ? '3.8vw' : percentageResizedHeight < 0.238 ? `${staticRefHeight * 1.1}px` : '4.5vh',
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
    background: 'none',
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
    background: 'none',
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
    width: minPort ? '19vw' : minLand ? '19vw' : medPort ? '29vw' : larPort ? '29vw' : '24vw',
    fontSize: minPort ? '4vw' : larPort ? '2.2vw' : '1.8vw',
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
    background: 'none',
    alignSelf: medPort ? 'flex-start' : 'center',
    display: minPort ? 'flex' : minLand ? 'flex' : 'flex',
    flexDirection: minPort ? 'column' : minLand ? 'column' : 'none',
    width: minPort ? '90vw' : '46vw',
    justifyContent: 'center',
    height: minPort ? '23vh' : minLand ? '60vh' : medPort ? '45vh' : larPort ? '45vh' : '71vh',
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
    position: 'fixed',
    width: medPort ? '35vw' : larPort && width < height ? '33vw' : larPort && percentageResizedWidth < 0.410 ? '29vh' : larPort && percentageResizedWidth< 0.544 ? '38vh' : larLand && percentageResizedWidth< 0.544 ? '38vh' : larLand && percentageResizedWidth< 0.777 ? '50vh' : '70vh',
    height: medPort ? '35vw' : larPort && width < height ? '33vw' : larPort && percentageResizedWidth < 0.410 ? '29vh' : larPort && percentageResizedWidth< 0.544 ? '38vh' : larLand && percentageResizedWidth< 0.544 ? '38vh' : larLand && percentageResizedWidth< 0.777 ? '50vh' : '70vh',
    minWidth: percentageResizedHeight < 0.250 ? '110px' : 'null',
    minHeight: percentageResizedHeight < 0.250 ? '110px' : 'null'
  }
}


export {
  background, leftBoxOrTop, textOne,
  textTwo, textThree, boxTechnologies,
  boxMessage, buttonMessage, boxRightOrBotton, SVG
}