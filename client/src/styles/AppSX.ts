import { grey } from '@mui/material/colors';
import {
  flex, relative, absolute, column, 
  asc, jcc
  } from './CommonsSX';

interface backgroundI {
  darkMode: boolean
}

export const background = ({ darkMode }: backgroundI) => {
  return {
    ...relative, ...flex, ...jcc,
    backgroundColor: darkMode ? grey[800] : grey[400],
    overflow: 'hidden',
    width: '100vw',
    height: '100vh',
  }
}

interface blackWhiteI {
  darkMode: boolean,
  location: string
}

export const blackWhite = ( { darkMode, location }: blackWhiteI ) => {
  return {
    ...relative, ...flex, ...column, ...asc,
    width: 'calc(100vw - 12px)',
    height: 'calc(100vh - 12px)',
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
}

export const topBottomHelper = ({ minPort, minLand, medPort, medLand, larPort }: topBottomHelperI) => {
  return {
    ...flex, ...relative,
    //background: 'orange',
    width: '20px',
    minHeight: minPort ? '60px' : minLand ? '35px' : medPort || medLand ? '65px' : larPort ? '70px' : '85px',
  }
}

interface greyBottomI {
  darkMode: boolean,
}

export const greyBottom = ({ darkMode }: greyBottomI) => {
  return {
    ...flex, ...absolute,
    //background: 'darkred',
    background: darkMode ? grey[800] : grey[400],
    height: '6px',
    width: 'calc(100vw - 12px)',
    bottom: '0px',
    zIndex: 1000
  }
}

interface greyRightI {
  darkMode: boolean,
}

export const greyRight = ({ darkMode }: greyRightI) => {
  return {
    ...flex, ...absolute,
    background: darkMode ? grey[800] : grey[400],
    //background: 'orange',
    height: '100vh',
    width: '6px',
    right: '0px',
    zIndex: 1000
  }
}