import { blue, brown, lime, red } from '@mui/material/colors';
import {
  aic, asc, column, mix, fixed, flex,
  jcc, jcsb, jic, noSelect, row, relative
} from './CommonsSX';

interface topHelperI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
  
}

const topHelper = ({ minPort, minLand, medPort, medLand, larPort, larLand }: topHelperI) => {
  return {
    display: 'flex',
    width: '20px',
    height: minPort ? '26vh' : minLand ? '15vh' : medPort ? '26vh' : medLand ? '17vh' : larPort ? '28vh' : '22vh',
    minHeight: '8px',
    background: 'orange',
    position: 'relative'
  }
}

interface backgroundI {
  minPort: boolean,
  minLand: boolean,
  larPort: boolean,
  staticRefWidth: number,
  staticRefHeight: number,
  percentageResizedHeight: number,
  height: number
}

const background = ({ minPort, minLand, larPort, staticRefWidth, staticRefHeight, percentageResizedHeight, height }: backgroundI) => {
  return {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    height: minPort ? '370px' : minLand ? '270px' : larPort ? '550px' : '520px',
    background: 'yellow'
  }
}

interface scrollI {
  minPort: boolean,
  minLand: boolean
}

const scroll = ({ minPort, minLand }: scrollI) => {
  return {
  /*   display: 'flex',
    position: 'relative', */
    overflow: 'auto',
    background: 'none',
    opacity: '0.8',
    //marginBottom: minPort ? '0vh' : minLand ? '0vh' : '1vh'
  }
}

interface solidI {
  length: number,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
}

const solid = ({ minPort, minLand, medPort, medLand, larPort, larLand, length }: solidI) => {
  return {
    //...row,
    display: 'flex',
    position: 'relative',
    background: brown[700],
    width: minPort || minLand ? `calc(${length} * 414px)` : `calc(${length} * 564px)`,
    height: minPort ? '9px' : minLand ? '7px' : '12px'
  }
}

interface intercalatedI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
  length: number
}

const intercalated =  ({ length, minPort, minLand, medPort, medLand, larPort, larLand }: intercalatedI) => {
  return {
    display: 'flex',
    position: 'relative',
    'background': 'linear-gradient(to right, transparent 70%, #5d4037 30%)',
    backgroundBlendMode: 'difference',
    backgroundSize: minPort || minLand ? '69px' : '94px',
    width: minPort || minLand ? `calc(${length} * 414px)` : `calc(${length} * 564px)`,
    height: minPort ? '20px' : minLand ? '15px' : '30px'
  }
}

interface centerStripeI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
  
}

const centerStripe = ({ minPort, minLand, medPort, medLand, larPort, larLand }: centerStripeI) => {
  return {
    ...row, ...flex,
    background: brown[700],
    height: minPort ? '270px' : minLand ? '195px' : '340px',
    //width: '100px'
  }
}

interface cardI {
  darkMode: boolean,
  minPort: boolean,
  minLand: boolean,
  larPort: boolean
}

const card = ({ darkMode, minPort, minLand, larPort }: cardI) => {
  return {
    ...row, ...flex,
    /* marginLeft: '1vw' , */
    /* zIndex: 1000, */
    /* width: '500px', */
    background: 'orange',
    //background: darkMode ? '#6e1b1b' : red[800],
    height: minPort ? '270px' : minLand ? '195px' : larPort ? '347px' : '340px'
  }
}

interface boxTitleI {
  minPort: boolean,
  minLand: boolean,
  larPort: boolean,
  length: number

}

const boxTitle = ({ length, minPort, minLand, larPort }: boxTitleI) => {
  return {
    ...flex, ...row, ...aic,
    //marginLeft: '18px',
    paddingLeft: '18px',
    //width: `calc(${length}*200px)`,
    background: 'darkslateblue',
    height: minPort ? '50px' : minLand ? '35px' : larPort ? '60px' : '60px'

  }
}

interface titleI {
  darkMode: boolean,
  minPort: boolean,
  minLand: boolean,
  larPort: boolean
}

const title = ({ darkMode, minPort, minLand, larPort }: titleI) => {
  return {
    ...noSelect,
    //marginRight: minPort ? '1.3vw' : minLand ? '0.9vw' : larPort ? '1.3vw' : '0.9vw',
    marginRight: '18px',
    fontFamily: 'Century Gothic',
    color: darkMode ? '#b5b3b3' : '#FFFFFF',
    fontSize: minPort ? '30px' : minLand ? '5vh' : larPort ? '40px' : '40px'
  }
}

interface boxMediaI {
  length: number,
  darkMode: boolean,
  minPort: boolean,
  minLand: boolean,
  larPort: boolean
}

const boxMedia = ({ length, darkMode, minPort, minLand, larPort }: boxMediaI) => {
  return {
    ...row, ...jcsb, ...flex,
    background: darkMode ? '#6a6e2e' : lime[400],
    //height: minPort ? '32vh' : minLand ? '36vh' : larPort ? '280px' : '280px',
    //width: `${length * 560}px`
  }
}

interface cardMediaI {
  url: string,
  darkMode: boolean,
  minPort: boolean,
  minLand: boolean,
  larPort: boolean
}

const cardMedia = ({ url, darkMode, minPort, minLand, larPort }: cardMediaI) => {
  return {
    ...asc,
    'cursor': 'pointer',
    width: minPort ? '400px' : minLand ? '400px' : '550px',
    height: minPort ? '220px' : minLand ? '160px' : '280px',
    ':hover':
      darkMode ? {webkitFilter: 'brightness(.65)', 'filter': 'brightness(.65)'}
      : {webkitFilter: 'brightness(.9)', 'filter': 'brightness(.9)'},
    webkitFilter: darkMode ? 'brightness(.6)' : 'none',
    'filter': darkMode ? 'brightness(.6)' : 'none'
  }
}

const dialog = ( minPort: boolean ) => {
  return {
    ...flex, ...fixed, ...row,
    minHeight: minPort ? '70%' : 'none',
    maxHeight: minPort ? '70%' : 'none',
    minWidth: minPort ? '80vw' : 'none',
    maxWidth: minPort ? '80vw' : 'none',
    height: minPort ? '71%' : '71vh',
    width: minPort ? '100%' : 'none',
    top: minPort ? '15vh' : '15vh',
    left: minPort ? '10vw' : '15vw'
  }
}

interface dialogMediaI {
  name: string,
  minPort: boolean,
  larPort: boolean
}

const dialogMedia = ({ name, minPort, larPort }: dialogMediaI) => {
  return {
    ...flex, ...row, ...jic,
    'margin-block': minPort ? 'auto' : 'none',
    transform: minPort ? 'rotate(-90deg)' : 'none',
    backgroundImage: `url(${name})`,
    width: minPort ? '80vw' : '70vw',
    height: minPort ? '35vh' : '100vh',
    backgroundSize: minPort ? '78vw 30vh' : larPort ? '67vw 68vh' : '68vw 68vh',
    backgroundRepeat: 'no-repeat'
  }
}

interface boxLowerI {
  minPort: boolean,
  minLand: boolean,
  larPort: boolean,
  larLand: boolean
}

const boxLower = ({ minPort, minLand, larPort, larLand }: boxLowerI) => {
  return {
    ...asc, ...row, ...noSelect,
    background: 'none',
    marginTop: '10px',
    //minWidth: larPort ? '10vw' : larLand ? '10vw' : larPort ? '35vw' : '20vw',
    //width: larPort ? '10vw' : larLand ? '10vw' : larPort ? '35vw' : '00vw',
    display: minLand ? 'none' : minPort ? 'none' : 'flex'
  }
}

const textLower = ( larPort: boolean ) => {
  return {
    ...jcc, ...asc, ...row, ...mix,
    color: '#FFFFFF',
    fontSize: larPort ? '23px' : '23px',
    //top: '0px'
  }
}

interface selectI {
  darkMode: boolean,
  larPort: boolean
}

const select = ({ darkMode, larPort }: selectI) => {
  return {
    color: '#FFFFFF',
    background: darkMode ? '#48555e' : blue[500],
    height: larPort ? '45px' : '45px',
    width: larPort ? '65px' : '65px',
    fontSize: larPort ? '17px': '17px'
  }
}

export {
  background, scroll, solid, intercalated,
  centerStripe, card, boxTitle, title, boxMedia, cardMedia,
  dialog, dialogMedia, boxLower, textLower, select, topHelper
}