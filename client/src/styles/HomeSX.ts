import {
  asc, column, mix, flex, jcc, noSelect, absolute, relative, row
} from './CommonsSX';
import { blue, brown, lime, red, grey } from '@mui/material/colors';

interface backgroundI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean,
}

const background = ({ minPort, minLand, medPort, medLand, larPort, larLand }: backgroundI) => { // background
  return {
    display: 'flex',
    position: 'relative',
    justifyContent: minPort || medPort || larPort ? 'center' : 'flex-start',
    paddingLeft: medLand ? '13px' : larLand ? '55px' : 'none',
    alignItems: 'center',
    flexDirection: minPort || medPort || larPort ? 'column-reverse' : 'row',
    minWidth: minPort || medPort ? 'none' : larPort ? '666px' : '600px', // minWidth
    width: 'calc(100vw - 12px)', // width
    minHeight: minLand ? 'none' : minPort || medPort ? '73vh' : medLand ? 'none' : larPort ? '624px' : '543px', // minHeight
    height: minLand ? '65vh' : minPort || medPort ? '73vh' : medLand ? '69vh' : larPort ? '73vh' : '75vh', // height
    background: 'gray',
  }
}

interface boxTextTechMessageI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
}

 const boxTextTechMessage = ({ minPort, minLand, medPort, medLand, larPort, larLand }: boxTextTechMessageI) => { // boxTextTechMessage
  return {
    display: 'flex',
    flexDirection: 'column',
    background: 'maroon',
    //justifyContent: larPort ? 'space-between' : 'flex-start',
    //justifyContent: 'flex-start',
    justifyContent: larPort ? 'none' : 'space-evenly',
    //justifyContent: 'none',
    alignItems: 'center',
    minWidth: minLand ? 'calc(100vw - 12px)' : minPort || medPort ? 'calc(100vw - 12px)' : medLand ? '48vw' : larPort ? '666px' : '600px', // minWidth
    width: minLand ? 'calc(100vw - 12px)' : minPort || medPort ? 'calc(100vw - 12px)' : medLand ? '48vw' : larPort ? 'calc(100vw - 12px)' : '47%', // width
    minHeight: minLand ? '60vh' : minPort || medPort ? '38vh' : medLand ? '69vh' : larPort ? '300px' : '546px', // minHeight
    height: minLand ? '60vh' : minPort || medPort ? '38vh' : medLand ? '69vh' : larPort ? '35vh' : '100%', // height
    flexFlow: minPort || medPort || larPort ? 'wrap' : 'none'
    //flexFlow: 'wrap',
    //marginLeft: '2%'
  }
}

interface boxSVGI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean
}

const boxSVG = ({ minPort, minLand, medPort, medLand, larPort }: boxSVGI ) => { // boxSVGI
  return {
    background: 'purple',
    position: 'relative',
    justifyContent: 'center',
    //display: larPort ? 'none' : 'flex',
    display: 'flex',
    minWidth: minLand ? '60vh' : minPort || medPort ? '38h' : medLand ? '49vw' : larPort ? '295px' : '631px', // minWidth
    width: minLand ? '60vh' : minPort || medPort ? '38vh' : medLand ? '49vw' : larPort ? '35vh' : '50%', // width
    minHeight: minLand ? '60vh' : minPort || medPort ? '32vh' : medLand ? '69vh' : larPort ? '295px' : '546px', // minHeight
    height:minLand ? '60vh' : minPort || medPort ? '32vh' : medLand ? '69vh' : larPort ? '35vh' : '100%', // height
    // display: 'flex',
    alignItems: 'center'
  }
}

interface imageSVGI {
  width: number,
  height: number,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean,
  percentageResizedHeight: number,
  percentageResizedWidth: number
}

const imageSVG = ({ width, height, minPort, minLand, medPort, medLand, larPort, larLand, percentageResizedHeight, percentageResizedWidth }: imageSVGI ) => { // imageSVG
  return {
    display: 'flex',
    background: 'red',
    position: 'relative',
    minWidth: minLand ? '60vh' : minPort || medPort ? '38vh' : medLand ? '63vh' : larPort ? '295px' : '546px', // minWidth
    width: minLand ? '60vh' : minPort || medPort ? '38vh' : medLand ? '63vh' : larPort ? '35vh' : '70vh', // width
    minHeight: minLand ? '60vh' : minPort || medPort ? '32vh' : medLand ? '63vh' : larPort ? '295px' : '546px', // minHeight
    height: minLand ? '60vh' : minPort || medPort ? '32vh' : medLand ? '63vh' : larPort ? '35vh' : '70vh', // height
  }
}

interface boxTypographyI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
}

const boxTypography = ({ minPort, minLand, medPort, medLand, larPort, larLand }: boxTypographyI) => { // boxTypography
  return {
    background: 'teal',
    justifyContent: 'space-around',    
    display: 'flex',
    flexDirection: 'column',
    minWidth: minLand ? '50vw' : minPort || medPort ? '48vw' : medLand ? '48vw' : larPort ? '325px' : '600px', // minWidth
    //width: minPort ? '92vw' : minLand ? '50vw' : medPort ? '48vw' : medLand ? '48vw' : larPort ? '48vw' : '44vw', // width
    width: minLand ? '50vw' : minPort || medPort ? '48vw' : medLand ? '48vw' : larPort ? '50%' : '44vw', // width
    minHeight: minLand ? '60vh' : minPort || medPort ? '25vh' : medLand ? '45vh' : larPort ? '200px' : '300px', // minHeight
    height: minLand ? '60vh' : minPort || medPort ? '25vh' : medLand ? '45vh' : larPort ? '200px' : '300px', // height
  }
}

interface textOneI {
  darkMode: boolean,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  percentageResizedHeight: number,
  staticRefHeight: number
}

const textOne = ({ darkMode, minPort, minLand, medPort, medLand, larPort, percentageResizedHeight, staticRefHeight }: textOneI) => { // textOne
  return {
    ...noSelect, ...mix, ...relative, ...flex,
    paddingLeft: larPort ? '15px' : 'none',
    color: darkMode ? '#b5b3b3' : '#FFFFFF',
    fontSize: minLand ? '4.9vw' : minPort || medPort ? '5.5vw' : medLand ? '5.5vw' : larPort ? '30px' : '65px', // fontSize
  }
}

interface textTwoI {
  darkMode: boolean,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  percentageResizedHeight: number,
  staticRefHeight: number
}

const textTwo = ({ darkMode, minPort, minLand, medPort, medLand, larPort, percentageResizedHeight, staticRefHeight }: textTwoI) => { // textTwo
  return {
    ...noSelect, ...mix,
    paddingLeft: larPort ? '15px' : 'none',
    color: darkMode ? '#b5b3b3' : '#FFFFFF',
    fontSize: minLand ? '5.4vw' : minPort || medPort ? '6vw' : medLand ? '6vw' : larPort ? '35px' : '67px', // fontSize
    inlineSize: 'max-content',
  }
}

interface textThreeI {
  darkMode: boolean,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  percentageResizedHeight: number,
  staticRefHeight: number
}

const textThree = ({ darkMode, minPort, minLand, medPort, medLand, larPort, percentageResizedHeight, staticRefHeight }: textThreeI) => { // textThree
  return {
    ...noSelect, ...mix,
    paddingLeft: larPort ? '15px' : 'none',
    color: darkMode ? '#b5b3b3' : '#FFFFFF',
    fontSize: minLand ? '2.9vw' : minPort || medPort ? '4vw' : medLand ? '3.5vw' : larPort ? '24px' : '42px', // fontSize
  }
}

interface buttonMessageI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean
}

const buttonMessage = ({ minPort, minLand, medPort, medLand, larPort }: buttonMessageI ) => { //buttonMessage
  return {
    background: 'none',
    padding: '0px !important',
    minWidth: minLand ? '9vw !important' : minPort || medPort ? '48vw' : larPort ? '320px' : '2vw !important', // minWidth
    width: minLand ? '19vw' : minPort || medPort ? '48vw' : medLand ? '290px' : larPort ? '40%' : '370px', // width
    //minHeight: minPort ? '10vw !important' : minLand ? '2.1vw !important' : '4.1vh !important', // minHeight
    color:'#FFFFFF',
    fontSize: minPort ? '3.5vw' : medPort || medLand ? '2.4vw' : larPort ? '28px' : '28px', // fontSize
    mixBlendMode: 'difference',
    //order: medPort || larPort ? '6' : 'none',
  }
}

export {
  background, boxTypography, textOne,
  textTwo, textThree, buttonMessage,
  imageSVG, boxTextTechMessage, boxSVG
}