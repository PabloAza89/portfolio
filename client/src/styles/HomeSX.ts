import {
  asc, column, mix, flex, jcc, noSelect, absolute, relative, row
} from './CommonsSX';
import { blue, brown, lime, red, grey } from '@mui/material/colors';

interface backgroundI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean
}

const background = ({ minPort, minLand, medPort, medLand, larPort }: backgroundI) => { // background
  return {
    display: 'flex',
    position: 'relative',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: medPort || larPort ? 'column-reverse' : 'row',
    minWidth: larPort ? '668px' : '1282px',
    width: 'calc(100vw - 12px)',
    minHeight: minPort ? 'none' : minLand ? 'none' : medPort ? 'none' : medLand ? 'none' : larPort ? '624px' : '543px', // minHeight
    height: minPort ? '71vh' : minLand ? '65vh' : medPort ? '69vh' : medLand ? '69vh' : larPort ? '73vh' : '75vh', // height
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
    justifyContent: 'space-evenly',
    alignItems: 'center',
    minWidth: medPort ? 'calc(100vw - 12px)' : medLand ? '48vw' : larPort ? '668px' : '680px', // minWidth
    width:  minPort ? '90vw' : medPort ? 'calc(100vw - 12px)' : medLand ? '48vw' : larPort ? 'calc(100vw - 12px)' : '48vw', // width
    minHeight: minPort ? '23vh' : minLand ? '60vh' : medPort ? '35vh' : medLand ? '69vh' : larPort ? '300px' : '524px', // minHeight
    height: minPort ? '23vh' : minLand ? '60vh' : medPort ? '35vh' : medLand ? '69vh' : larPort ? '35vh' : '70vh', // height
    flexFlow: medPort || larPort ? 'wrap' : 'none'
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
    display: minPort ? 'none' : minLand ? 'none' : 'flex',
    background: 'red',
    position: 'relative',
    minHeight: minPort ? '23vh' : minLand ? '60vh' : medPort ? '29vh' : medLand ? '65vh' : larPort ? '300px' : '524px', // minHeight
    height: minPort ? '23vh' : minLand ? '60vh' : medPort ? '29vh' : medLand ? '65vh' : larPort ? '35vh' : '70vh', // height
    minWidth: minPort ? '23vh' : minLand ? '60vh' : medPort ? '42vh' : medLand ? '65vh' : larPort ? '300px' : '524px', // minWidth
    width: minPort ? '23vh' : minLand ? '60vh' : medPort ? '42vh' : medLand ? '65vh' : larPort ? '35vh' : '70vh', // width
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
    minWidth: minPort ? '92vw' : minLand ? '50vw' : medPort ? '48vw' : medLand ? '48vw' : larPort ? '325px' : '600px', // minWidth
    width: minPort ? '92vw' : minLand ? '50vw' : medPort ? '48vw' : medLand ? '48vw' : larPort ? '48vw' : '44vw', // width
    minHeight: minPort ? '45vh' : minLand ? '60vh' : medPort ? '25vh' : medLand ? '45vh' : larPort ? '200px' : '300px', // minHeight
    height: minPort ? '45vh' : minLand ? '60vh' : medPort ? '25vh' : medLand ? '45vh' : larPort ? '200px' : '300px', // height
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
    color: darkMode ? '#b5b3b3' : '#FFFFFF',
    fontSize: minPort  ? '11.5vw' : minLand ? '4.9vw' : medPort ? '7vw' : medLand ? '5.5vw' : larPort ? '30px' : '65px', // fontSize
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
    color: darkMode ? '#b5b3b3' : '#FFFFFF',
    fontSize: minPort  ? '11.5vw' : minLand ? '5.4vw' : medPort ? '6vw' : medLand ? '6vw' : larPort ? '35px' : '67px', // fontSize
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
    color: darkMode ? '#b5b3b3' : '#FFFFFF',
    fontSize: minPort  ? '11.5vw' : minLand ? '2.9vw' : medPort ? '4vw' : medLand ? '3.7vw' : larPort ? '24px' : '42px', // fontSize
  }
}

interface buttonMessageI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean
}

const buttonMessage = ({ minPort, minLand, medPort, medLand, larPort }: buttonMessageI ) => {
  return {
    background: 'none',
    padding: '0px !important',
    minWidth: minPort ? '53vw !important' : minLand ? '9vw !important' : medPort ? '48vw' : larPort ? '325px' : '2vw !important', // minWidth
    width: minPort ? '19vw' : minLand ? '19vw' : medPort ? '48vw' : medLand ? '290px' : larPort ? '48vw' : '370px', // width
    minHeight: minPort ? '10vw !important' : minLand ? '2.1vw !important' : '4.1vh !important', // minHeight
    color:'#FFFFFF',
    fontSize: minPort ? '4vw' : medPort ? '20px' : medLand ? '22px' : larPort ? '29px' : '29px', // fontSize
    mixBlendMode: 'difference',
  }
}

export {
  background, boxTypography, textOne,
  textTwo, textThree, buttonMessage,
  imageSVG, boxTextTechMessage
}