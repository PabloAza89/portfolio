import { blue, brown, lime, red } from '@mui/material/colors';
import {
  aic, asc, column, mix, fixed, flex,
  jcc, jcsb, jic, noSelect, row, relative
} from './CommonsSX';

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
    //...flex, ...column, ...jcc, ...relative,
    display: 'flex',
    //display: '-webkit-box',
    position: 'relative',
    flexDirection: 'column',

    //height: minPort ? '50vh' : minLand ? '60vh' : larPort ? '600px' : `calc(${staticRefHeight}*50px)`, // '80px' IS %
    //height: /* minPort ? '50vh' : minLand ? '60vh' : larPort ? '600px' : */ `350px`, // '80px' IS %
    height: '550px',
    background: 'yellow',
    //top: '100px',
    //marginTop: '-200px',
    //paddingTop: '10px',
    //bottom: 0,
    //top: `calc(${staticRefHeight}*10px)`
    //top: `100px`
    //paddingTop: '100px',
    //marginTop: '100px',
    //top: `calc((1080 / 100) * 11px)`
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
  length: number
}

const solid = ({ length }: solidI) => {
  return {
    //...row,
    display: 'flex',
    position: 'relative',
    background: brown[700],
    width: `calc(${length} * 530px)`,
    height: '12px'
  }
}

interface intercalatedI {
  minPort: boolean,
  larPort: boolean,
  length: number
}

const intercalated =  ({ length, minPort, larPort }: intercalatedI) => {
  return {
    //...row,
    display: 'flex',
    position: 'relative',
    'background': 'linear-gradient(to right, transparent 70%, #5d4037 30%)',
    backgroundBlendMode: 'difference',
    backgroundSize: /* minPort ? '13vw 7vw' : larPort ? '100px' : */ '100px',
    width: `calc(${length}*600px)`,
    height: '30px'
  }
}

const centerStripe = () => {
  return {
    ...row, ...flex,
    background: brown[700],
    height: '340px',
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
    background: 'gray',
    //background: darkMode ? '#6e1b1b' : red[800],
    height: minPort ? '20vh' : minLand ? '44vh' : larPort ? '347px' : '340px'
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
    /* marginLeft: '1vw', */
    width: `calc(${length}*200px)`,
    background: 'darkslateblue',
    height: minPort ? '8vh' : minLand ? '8vh' : larPort ? '60px' : '60px'

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
    fontFamily: 'Century Gothic',
    color: darkMode ? '#b5b3b3' : '#FFFFFF',
    fontSize: minPort ? '4.5vw' : minLand ? '5vh' : larPort ? '40px' : '40px'
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
    width: `${length * 560}px`
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
    width: '550px', height: '280px',
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
    background: 'gray',
    //minWidth: larPort ? '10vw' : larLand ? '10vw' : larPort ? '35vw' : '20vw',
    //width: larPort ? '10vw' : larLand ? '10vw' : larPort ? '35vw' : '00vw',
    display: minLand ? 'none' : minPort ? 'none' : 'flex'
  }
}

const textLower = ( larPort: boolean ) => {
  return {
    ...jcc, ...asc, ...row, ...mix,
    color: '#FFFFFF',
    fontSize: larPort ? '2.5vh' : '23px',
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
    height: larPort ? '5vh' : '45px',
    width: larPort ? '11vw' : '65px',
    fontSize: larPort ? '2vh': '17px'
  }
}

export {
  background, scroll, solid, intercalated,
  centerStripe, card, boxTitle, title, boxMedia, cardMedia,
  dialog, dialogMedia, boxLower, textLower, select
}