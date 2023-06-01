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
    justifyContent: minPort || minLand || medPort || larPort ? 'center' : 'flex-start',
    paddingLeft: medLand ? '13px' : larLand ? '55px' : 'none',
    alignItems: 'center',
    flexDirection: minPort || medPort || larPort ? 'column-reverse' : 'row',
    minWidth: minPort || medPort ? 'none' : larPort ? '666px' : '600px', // minWidth
    width: 'calc(100vw - 12px)', // width
    minHeight: minPort || medPort ? '73vh' : minLand ? '65vh' : medLand ? 'none' : larPort ? '624px' : '543px', // minHeight
    height: minPort || medPort ? '73vh' : minLand ? '65vh' : medLand ? '69vh' : larPort ? '73vh' : '75vh', // height
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
    justifyContent: larPort ? 'flex-start' : 'space-evenly',
    alignItems: 'center',
    minWidth: minPort || medPort ? 'calc(100vw - 12px)' : minLand || medLand ? '48vw' : larPort ? '666px' : '600px', // minWidth
    width: minPort || medPort ? 'calc(100vw - 12px)' : minLand || medLand ? '48vw' : larPort ? 'calc(100vw - 12px)' : '47%', // width
    minHeight: minPort || medPort ? '38vh' : minLand ? '65vh' : medLand ? '69vh' : larPort ? '300px' : '546px', // minHeight
    height: minPort || medPort ? '38vh' : minLand ? '65vh' : medLand ? '69vh' : larPort ? '35vh' : '100%', // height
    flexFlow: minPort || medPort || larPort ? 'wrap' : 'none'
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
    display: 'flex',
    minWidth: minPort || medPort ? '38h' : minLand ? '75vh' : medLand ? '49vw' : larPort ? '295px' : '631px', // minWidth
    width: minPort || medPort ? '38vh' : minLand ? '75vh' : medLand ? '49vw' : larPort ? '35vh' : '50%', // width
    minHeight: minPort || medPort ? '32vh' : minLand ? '65vh' : medLand ? '69vh' : larPort ? '295px' : '546px', // minHeight
    height: minPort || medPort ? '32vh' : minLand ? '65vh' : medLand ? '69vh' : larPort ? '35vh' : '100%', // height
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
    minWidth: minPort || medPort ? '38vh' : minLand ? '75vh' : medLand ? '63vh' : larPort ? '295px' : '546px', // minWidth
    width: minPort || medPort ? '38vh' : minLand ? '75vh' : medLand ? '63vh' : larPort ? '35vh' : '70vh', // width
    minHeight: minPort || medPort ? '32vh' : minLand ? '65vh' : medLand ? '63vh' : larPort ? '295px' : '546px', // minHeight
    height: minPort || medPort ? '32vh' : minLand ? '65vh' : medLand ? '63vh' : larPort ? '35vh' : '70vh', // height
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
    justifyContent: 'space-evenly',
    display: 'flex',
    flexDirection: 'column',
    minWidth: minPort || medPort ? '48vw' : minLand || medLand ? '48vw' : larPort ? '300px' : '600px', // minWidth
    width: minPort || medPort ? '48vw' : minLand || medLand ? '48vw' : larPort ? '40%' : '44vw', // width
    minHeight: minPort || medPort ? '25vh' : minLand || medLand ? '45vh' : larPort ? '200px' : '300px', // minHeight
    height:minPort || medPort ? '25vh' : minLand || medLand ? '45vh' : larPort ? '200px' : '300px', // height
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
    lineHeight: minLand ? '1.0' : '1.5',
    paddingLeft: larPort ? '15px' : 'none',
    color: darkMode ? '#b5b3b3' : '#FFFFFF',
    fontSize: minPort || medPort ? '5.5vw' : minLand || medLand ? '5.5vw' : larPort ? '30px' : '65px', // fontSize
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
    lineHeight: minPort ? '0' : minLand ? '1.0' : '1.5',
    paddingLeft: larPort ? '15px' : 'none',
    color: darkMode ? '#b5b3b3' : '#FFFFFF',
    fontSize: minPort || medPort ? '6vw' : minLand || medLand ? '6vw' : larPort ? '35px' : '67px', // fontSize
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
    lineHeight: minLand ? '1.0' : '1.5',
    paddingLeft: larPort ? '15px' : 'none',
    color: darkMode ? '#b5b3b3' : '#FFFFFF',
    fontSize: minPort || medPort ? '4vw' : minLand || medLand ? '3.5vw' : larPort ? '24px' : '42px', // fontSize
  }
}

const boxButton = () => {
  return {
    width: '57%',
    background: 'gold',
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
    //minWidth: minPort || medPort ? '48vw' : larPort ? '40% !important' : '370px !important', // minWidth
    width: minPort || medPort ? '48vw' : minLand || medLand ? '290px' : larPort ? '350px' : '370px', // width
    color:'#FFFFFF',
    fontSize: minPort ? '4vw' : minLand ? '1.8vw' : medPort || medLand ? '2.4vw' : larPort ? '28px' : '28px', // fontSize
    mixBlendMode: 'difference',
  }
}

export {
  background, boxTypography, textOne,
  textTwo, textThree, buttonMessage,
  imageSVG, boxTextTechMessage, boxSVG,
  boxButton
}