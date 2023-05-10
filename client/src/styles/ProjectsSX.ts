import { blue, brown, lime, red } from '@mui/material/colors';
import {
  aic, asc, column, mix, fixed, flex,
  jcc, jcsb, jic, noSelect, row
} from './CommonsSX';

interface backgroundI {
  minPort: boolean,
  minLand: boolean,
  larPort: boolean,
  staticRefWidth: number
}

const background = ({ minPort, minLand, larPort, staticRefWidth }: backgroundI) => {
  return {
    ...flex, ...column, ...jcc, ...fixed,
    marginTop: minPort ? '23vh' : minLand ? '17vh' : larPort ? '24vh' : '12vh',
    height: minPort ? '50vh' : minLand ? '60vh' : larPort ? '53vh' : '74vh',
    //width: '98.8vw',
    right: `${staticRefWidth * 0.5}px`,
    left: `${staticRefWidth * 0.5}px`,
    //width: '97vw',
    background: 'darkslateblue'
  }
}

interface scrollI {
  minPort: boolean,
  minLand: boolean
}

const scroll = ({ minPort, minLand }: scrollI) => {
  return {
    overflow: 'auto',
    background: 'none',
    opacity: '0.8',
    marginBottom: minPort ? '0vh' : minLand ? '0vh' : '1vh'
  }
}

interface boxUpperStripeI {
  minPort: boolean,
  larPort: boolean
}

const boxUpperStripe = ({ minPort, larPort }: boxUpperStripeI) => {
  return {
    ...column,
    background: 'none',
    width: '158vw',
    height: minPort ? '3vh' : larPort ? '3vh' : '6vh',
    marginBottom: '0px',
  }
}

const solid = () => {
  return {
    ...row,
    background: brown[700],
    width: '158vw',
    height: '1.3vh'
  }
}

interface intercalatedI {
  minPort: boolean,
  larPort: boolean
}

const intercalated =  ({ minPort, larPort }: intercalatedI) => {
  return {
    ...row,
    'background': 'linear-gradient(to right, transparent 70%, #5d4037 30%)',
    backgroundBlendMode: 'difference',
    backgroundSize: minPort ? '13vw 7vw' : larPort ? '11vw 7vw' : '7vw 7vw',
    width: '158vw',
    height: '3.5vh'
  }
}

const mainStripe = () => {
  return {
    ...row, ...flex,
    background: brown[700],
    width: '158vw'
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
    ...column, ...flex,
    marginLeft: '1vw' ,
    background: darkMode ? '#6e1b1b' : red[800],
    height: minPort ? '20vh' : minLand ? '44vh' : larPort ? '20vh' : '40vh'
  }
}

interface boxTitleI {
  minPort: boolean,
  minLand: boolean,
  larPort: boolean
}

const boxTitle = ({ minPort, minLand, larPort }: boxTitleI) => {
  return {
    ...flex, ...row, ...aic,
    marginLeft: '1vw',
    background: 'none',
    height: minPort ? '8vh' : minLand ? '8vh' : larPort ? '5vh' : '8vh'
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
    marginRight: minPort ? '1.3vw' : minLand ? '0.9vw' : larPort ? '1.3vw' : '0.9vw',
    fontFamily: 'Century Gothic',
    color: darkMode ? '#b5b3b3' : '#FFFFFF',
    fontSize: minPort ? '4.5vw' : minLand ? '5vh' : larPort ? '3.6vw' : '5vh'
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
    height: minPort ? '32vh' : minLand ? '36vh' : larPort ? '15vh' : '32vh',
    width: `${length * 31}vw`
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
    'backgroundImage': `url(${url})`,
    width: '100%', height: '100%',
    backgroundSize: minPort ? '30vw 15vh' : minLand ? '30vw 33vh' : larPort ? '30vw 14vh' : '30vw 30vh',
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
    minWidth: larPort ? '10vw' : larLand ? '10vw' : larPort ? '35vw' : '10vw',
    display: minLand ? 'none' : minPort ? 'none' : 'flex'
  }
}

const textLower = ( larPort: boolean ) => {
  return {
    ...jcc, ...asc, ...row, ...mix,
    color: '#FFFFFF',
    fontSize: larPort ? '2.5vh' : '1.5vw',
    top: '0.1vh'
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
    height: larPort ? '5vh' : '6vh',
    width: larPort ? '11vw' : '4.0vw',
    fontSize: larPort ? '2vh': '1vw'
  }
}

export {
  background, scroll, boxUpperStripe, solid, intercalated,
  mainStripe, card, boxTitle, title, boxMedia, cardMedia,
  dialog, dialogMedia, boxLower, textLower, select
}