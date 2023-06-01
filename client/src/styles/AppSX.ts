import { grey } from '@mui/material/colors';
import { column, flex, relative, fixed } from './CommonsSX';

interface backgroundI {
  darkMode: boolean
}

const background = ({ darkMode }: backgroundI) => {
  return {
    ...relative, ...flex,
    backgroundColor: darkMode ? grey[800] : grey[400],
    overflow: 'hidden',
    width: '100vw',
    height: '100vh',
    justifyContent: 'center'
  }
}

interface blackWhiteI {
  staticRefWidth: number,
  darkMode: boolean,
  location: string
}

const blackWhite = ( { staticRefWidth, darkMode, location }: blackWhiteI ) => {
  return {
    /* ...fixed, */ ...flex, ...column,
    position: 'relative',
    width: 'calc(100vw - 12px)',
    height: 'calc(100vh - 12px)',
    alignSelf: 'center',
    justifyContent: 
      location === '/portfolio'  ? 'space-between' :
      location === '/portfolio/MessageMe'  ? 'center' :
      location === '/portfolio/Contact' ||  location === '/portfolio/AboutMe' ? 'space-between' :
      'none',
    background: darkMode ? 'linear-gradient(to bottom right, #2b2b2b 49.9%, #696868 50.1%)' : 'linear-gradient(to bottom right, black 49.9%,white 50.1%)'
  }
}

interface topBottomHelperI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean,
}

const topBottomHelper = ({ minPort, minLand, medPort, medLand, larPort, larLand }: topBottomHelperI) => {
  return {
    //background: 'orange',
    display: 'flex',
    width: '20px',
    minHeight: minPort ? '60px' : minLand ? '35px' : medPort || medLand ? '65px' : larPort ? '70px' : '85px',
    position: 'relative'
  }
}

interface greyBottomI {
  darkMode: boolean,
}

const greyBottom = ({ darkMode }: greyBottomI) => {
  return {
    background: darkMode ? grey[800] : grey[400],
    height: '6px',
    width: 'calc(100vw - 12px)',
    display: 'flex',
    position: 'fixed',
    bottom: '0px',
    zIndex: 1000
  }
}

interface greyRightI {
  darkMode: boolean,
}

const greyRight = ({ darkMode }: greyRightI) => {
  return {
    background: darkMode ? grey[800] : grey[400],
    //background: 'orange',
    height: '100vh',
    width: '6px',
    display: 'flex',
    position: 'absolute',
    right: '0px',
    zIndex: 1000
  }
}

export {
  background, blackWhite, greyBottom, greyRight,
  topBottomHelper
}