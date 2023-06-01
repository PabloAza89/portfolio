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
    //background: 'gray',
    display: 'flex',
    position: 'relative',
    justifyContent: minPort ? 'space-evenly' : medPort || larPort ? 'center' : minLand ? 'space-evenly' : medLand ? 'space-evenly' : 'flex-start',
    paddingLeft: larLand ? '55px' : 'none',
    /* paddingRight: larLand ? '55px' : 'none', */
    alignItems: larPort ? 'none' : 'center',
    flexDirection: minPort || medPort || larPort ? 'column-reverse' : 'row',
    minWidth: minPort || minLand || medPort || medLand ? 'calc(100vw - 12px)' : larPort ? '666px' : '600px', // minWidth
    width: 'calc(100vw - 12px)', // width
    minHeight: minPort ? '80vh' : medPort ? '74vh' : minLand ? '76vh' : medLand ? '76vh' : larPort ? '624px' : '543px', // minHeight
    height: minPort ? '80vh' : medPort ? '74vh' : minLand ? '76vh' : medLand ? '76vh' : larPort ? '74vh' : '75vh', // height
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
    //background: 'maroon',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: larPort ? 'flex-start' : 'space-evenly',
    alignContent: 'space-evenly',
    alignItems: 'center',
    minWidth: minPort || medPort ? 'calc(100vw - 12px)' : minLand || medLand ? '48vw' : larPort ? '666px' : '600px', // minWidth
    width: minPort || medPort ? 'calc(100vw - 12px)' : minLand || medLand ? '48vw' : larPort ? 'calc(100vw - 12px)' : '47%', // width
    minHeight: minPort ? '40vh' : medPort ? '37vh' : minLand ? '76vh' : medLand ? '69vh' : larPort ? '312px' : '546px', // minHeight
    height: minPort ? '40vh' : medPort ? '37vh' : minLand ? '76vh' : medLand ? '69vh' : larPort ? '37vh' : '100%', // height
    flexFlow: minPort ? 'none' : medPort || larPort ? 'wrap' : 'none'
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
    //background: 'purple',
    position: 'relative',
    justifyContent: 'center',
    display: 'flex',
    minWidth: minPort ? '40h' : medPort ? '50h' : minLand ? '76vh' : medLand ? '65vh' : larPort ? 'calc(100vw - 12px)' : '631px', // minWidth
    width: minPort ? '40h' : medPort ? '50vh' : minLand ? '76vh' : medLand ? '65vh' : larPort ? 'calc(100vw - 12px)' : '50%', // width
    minHeight: minPort ? '40h' : medPort ? '37vh' : minLand ? '76vh' : medLand ? '65vh' : larPort ? '312px' : '546px', // minHeight
    height: minPort ? '40h' : medPort ? '37vh' : minLand ? '76vh' : medLand ? '65vh' : larPort ? '37vh' : '100%', // height
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
    //background: 'red',
    position: 'relative',
    minWidth: minPort ? '38vh' : medPort ? '48vh' : minLand ? '75vh' : medLand ? '64vh' : larPort ? '422px' : '546px', // minWidth
    width: minPort ? '38vh' : medPort ? '48h' : minLand ? '75vh' : medLand ? '64vh' : larPort ? '50vh' : '70vh', // width
    minHeight: minPort ? '38vh' : medPort ? '36vh' : minLand ? '75vh' : medLand ? '64vh' : larPort ? '312px' : '546px', // minHeight
    height: minPort ? '38vh' : medPort ? '36vh' : minLand ? '75vh' : medLand ? '64vh' : larPort ? '37vh' : '70vh', // height
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
    //background: 'teal',
    justifyContent: 'space-evenly',
    alignItems: larPort ? 'center' : 'none',
    display: 'flex',
    flexDirection: 'column',
    minWidth: minPort ? 'fit-content' : medPort ? 'fit-content' : minLand ? '44vw' : medLand ? '44vw' : larPort ? '100vw' : '600px', // minWidth
    width: minPort ? 'fit-content' : medPort ? 'fit-content' : minLand ? '44vw' : medLand ? '44vw' : larPort ? '100vw' : '44vw', // width
    minHeight: minPort ? '18vh' : medPort ? '22vh' : minLand ? '40vh' : medLand ? '40vh' : larPort ? '180px' : '300px', // minHeight
    height: minPort ? '18vh' : medPort ? '22vh' : minLand ? '40vh' : medLand ? '40vh' : larPort ? '22vh' : '300px', // height
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

interface auxLarPortI {
  larPort: boolean
}

const auxLarPort = ({ larPort }: auxLarPortI) => { // auxLarPort
  return {
    //background: 'darkblue',
    display: larPort ? 'flex' : 'contents',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    minWidth: 'fit-content', // minWidth
    width: 'fit-content', // width
    minHeight: '180px', // minHeight
    height: '22vh', // height
  }
}

const textOne = ({ darkMode, minPort, minLand, medPort, medLand, larPort, percentageResizedHeight, staticRefHeight }: textOneI) => { // textOne
  return {
    ...noSelect, ...mix, ...relative, ...flex,
    //lineHeight: minPort || minLand || medPort || medLand ? '1.0' : '1.5',
    lineHeight: '1.0',
    paddingLeft: larPort ? '15px' : 'none',
    color: darkMode ? '#b5b3b3' : '#FFFFFF',
    fontSize: minPort ? '8vw' : medPort ? '7vw' : minLand ? '3.7vw' : medLand ? '3.7vw' : larPort ? '55px' : '65px', // fontSize
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
    //lineHeight: minPort || minLand || medPort || medLand ? '1.0' : '1.5',
    lineHeight: '1.0',
    paddingLeft: larPort ? '15px' : 'none',
    color: darkMode ? '#b5b3b3' : '#FFFFFF',
    fontSize: minPort ? '9vw' : medPort ? '8vw' : minLand ? '4vw' : medLand ? '4vw' : larPort ? '57px' : '67px', // fontSize
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
    //lineHeight: minPort || minLand || medPort || medLand ? '1.0' : '1.5',
    lineHeight: '1.0',
    paddingLeft: larPort ? '15px' : 'none',
    color: darkMode ? '#b5b3b3' : '#FFFFFF',
    fontSize: minPort ? '6vw' : medPort ? '5.3vw' : minLand ? '2.9vw' : medLand ? '2.9vw' : larPort ? '30px' : '42px', // fontSize
  }
}

interface boxButtonI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
}

const boxButton = ({ minPort, minLand, medPort, medLand, larPort, larLand }: boxButtonI) => { // boxButton
  return {
    //width: minPort ? '48vw' : medPort || larPort ? '50%' : minLand || medLand ? '30vw' : '370px', // width
    width: larPort ? '100vw' : '100%', // width
    //background: 'gold',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
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
    width: minPort ? '55vw' : medPort ? '55vw' : minLand ? '23vw' : medLand ? '30vw' : larPort ? '320px' : '370px', // width
    color:'#FFFFFF',
    fontSize: minPort ? '4vw' : minLand ? '1.8vw' : medPort ? '4vw' : medLand ? '2.4vw' : larPort ? '24px' : '28px', // fontSize
    mixBlendMode: 'difference',
  }
}

export {
  background, boxTypography, textOne,
  textTwo, textThree, buttonMessage,
  imageSVG, boxTextTechMessage, boxSVG,
  boxButton, auxLarPort
}