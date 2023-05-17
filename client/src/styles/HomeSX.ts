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
    ...flex, ...relative, ...jcc, ...asc,
    background: 'red',
    flexDirection: minPort ? 'column' : minLand ? 'row' : 'row',
    width: minPort ? '97vw' : minLand ? '97vw' : '97vw',
    height: minPort ? '71vh' : minLand ? '65vh' : larPort ? '60vh' : '71vh'
  }
}

interface leftBoxI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  larPort: boolean
}

interface bgLeftUpperI {
  minPort: boolean,
  minLand: boolean,
  larPort: boolean
}

const bgLeftUpper = ({ minPort, minLand, larPort }: bgLeftUpperI) => {
  return {
    ...relative, ...flex, ...column, ...jcc, ...asc,
    background: 'yellow',
    border: 'none',
    height: minPort ? '50vh' : minLand ? '55vh' : larPort ? '28vh' : '35vh',
    width: minPort ? '90vw' : minLand ? '45vw' : larPort ? '40vw' : '40vw'
  }
}

const leftBox = ({ minPort, minLand, medPort, larPort }: leftBoxI) => {
  return {
    /* ...relative, */ /* ...flex, ...column, */ /* ...jcc, ...asc, */
    background: 'none',
    justifyContent: 'space-evenly',
    display: minPort ? 'contents' : minLand ? 'flex' : 'flex',
    flexDirection: minLand ? 'column' : 'column',
    width: minPort || minLand ? '50vw' : '50vw',
    height: minPort ? '40vh' : minLand ? '60vh' : larPort ? '45vh' : '71vh'
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
  larPort: boolean,
  larLand: boolean,
  percentageResizedHeight: number
}

// const boxTechnologiesCenter = ({ medPort, larPort }: boxTechnologiesCenterI ) => {
//   return {
//     background: 'yellow',
//     display: larPort || medPort ? 'flex' : 'none',
//     position: 'absolute',
//     width: '85vw',
//     height: '10vh',
//     flexDirection: 'column',
//     //top: larPort ? '46.5vh' : 'none',
//     bottom: '0vh',
//     justifyContent: larPort ? 'center' : 'none',
//   }
// }

const boxTechnologies = ({ minPort, minLand, medPort, larPort, larLand, percentageResizedHeight }: boxTechnologiesI) => {
  return {
    ...jcc, /* ...relative, */ ...column, ...asc,

    position: minPort || minLand || larPort ? 'relative' : 'absolute',
    background: 'darkBlue',
    //left: minPort ? '-0.5vw' : minLand ? '0vw' : larPort ? '0vw' : '0vw',
    //display: larPort ? 'none' : 'flex',
    display: 'flex',
    bottom: medPort ? '0vh' : 'none',
    //display: medlarPort ? 'none' : larLand  ? 'flex' : 'flex',
    height: minPort ? '11vh' : minLand ? '20vh' : '11vh',
    //justifyContent: 'center',
    width: minPort ? '97vw' : minLand ? '50vw' : medPort || larPort ? '85vw' : '40vw'
  }
}

// const boxMessageMinLand = ( minLand: boolean ) => {
//   return {
//     ...jcc,
//     background: 'yellow',
//     display: minLand ? 'flex' : 'none',
//     justifyContent: 'center',
//   }
// }

interface boxMessageI {
  minLand: boolean,
  medPort: boolean
}

const boxMessage = ({ minLand, medPort }: boxMessageI ) => {
  return {
    background: 'red',
    alignItems: medPort ? 'flex-start' : 'center',
    display: minLand ? 'flex' : 'flex',
    justifyContent: 'center',
    position: 'relative',
    height: '10vh'
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
    background: 'gray',
    padding: '0px !important',
    minWidth: minPort ? '53vw !important' : minLand ? '9vw !important' : '2vw !important',
    /* maxWidth: '29vw !important', */
    minHeight: minPort ? '10vw !important' : minLand ? '2.1vw !important' : '4.1vh !important',
    /* maxHeight: '2.1vw !important', */
    color:'#FFFFFF',
    width: minPort ? '19vw' : minLand ? '19vw' : medPort ? '29vw' : larPort ? '29vw' : '24vw',
    marginLeft: minPort ? '0vw' : minLand ? '10vw' : '16vw',
    marginTop: minPort ? '1.5vw' : minLand ? '1.5vw' : '1.9vw',
    /* fontSize: minPort ? '3.8vw' : minLand ? '1.05vw' : larPort ? `${staticRefWidth * 0.559}px` : larLand&& percentageResizedWidth< 0.559 ? `${staticRefWidth * 0.559}px` : `${percentageResizedWidth* 22.5}px`, */
    fontSize: minPort ? '4vw' : larPort ? '2.2vw' : '1.8vw',

    mixBlendMode: 'difference'
  }
}

interface boxRightSVGI {
  minPort: boolean,
  minLand: boolean,
  larPort: boolean
}

const boxRightSVG = ({ minPort, minLand, larPort }: boxRightSVGI ) => {
  return {
    background: 'darkGray',
    display: minPort ? 'none' : minLand ? 'flex' : 'flex',
    flexDirection: minLand ? 'column' : 'none',
    width: '46vw',
    justifyContent: 'center',
    height: larPort ? '45vh' : '71vh',
    alignItems: 'center',
    /* minHeight: larLand&&  percentageResizedHeight< 0.313 ? 'none' : 'null'  */
  }
}

interface SVGI {
  width: number,
  height: number,
  minLand: boolean,
  medPort: boolean,
  larPort: boolean,
  larLand: boolean,
  percentageResizedHeight: number,
  percentageResizedWidth: number
}

const SVG = ({ width, height, minLand, medPort, larPort, larLand, percentageResizedHeight, percentageResizedWidth }: SVGI ) => {
  return {
    display: minLand ? 'none' : 'flex',
    position: 'fixed',
    width: medPort ? '35vw' : larPort && width < height ? '33vw' : larPort && percentageResizedWidth < 0.410 ? '29vh' : larPort && percentageResizedWidth< 0.544 ? '38vh' : larLand && percentageResizedWidth< 0.544 ? '38vh' : larLand && percentageResizedWidth< 0.777 ? '50vh' : '70vh',
    height: medPort ? '35vw' : larPort && width < height ? '33vw' : larPort && percentageResizedWidth < 0.410 ? '29vh' : larPort && percentageResizedWidth< 0.544 ? '38vh' : larLand && percentageResizedWidth< 0.544 ? '38vh' : larLand && percentageResizedWidth< 0.777 ? '50vh' : '70vh',
    minWidth: percentageResizedHeight < 0.250 ? '110px' : 'null',
    minHeight: percentageResizedHeight < 0.250 ? '110px' : 'null'
  }
}

// interface boxTechnologiesCenterI {
//   medPort: boolean,
//   larPort: boolean
// }



export {
  background, leftBox, bgLeftUpper, textOne,
  textTwo, textThree, boxTechnologies,
 /*  boxMessageMinLand, */ boxMessage, buttonMessage, boxRightSVG,
  SVG, //boxTechnologiesCenter
}