import {
  flex, relative, column,
  row, aic, jcc, fixed,
  jcsb, jcse, mix, noSelect
} from './CommonsSX';
import { keyframes } from '@emotion/react'

// LAR (width)    // MIN (width)    //
// 500 total      // 500 total      //
// date text      // date text      //
// 80   420       // 80   420       //
// button (w & h) // button (w & h) //
// 90 30          // 50 23          //

// 80 + 420 + 30 = 530


interface backgroundI {
  show: boolean,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean,
}


export const background = ({ show, minPort, minLand, medPort, medLand, larPort, larLand }: backgroundI) => { // background
  return {
    ...flex, ...fixed, //...column,
    flexDirection: 'row',
    top: minPort || medPort ? 'calc(17vw + 10px + 7vh)' : larPort ? 'calc(143px + 10vh)' : 'none', // medPort 17vw+10px // larPort 127+10+6
    bottom: minLand || medLand || larLand ? '20px' : 'none',
    left: '-494px', // 500 - 6
    background: 'yellow',
    width: '530px',
    justifyContent: 'end',
  }
}

interface buttonNewsI {
  show: boolean,
  darkMode: boolean,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean,
}


export const buttonNews = ({ show, darkMode, minPort, minLand, medPort, medLand, larPort, larLand }: buttonNewsI) => { // background
  return {
    ...flex,
    position: 'fixed',
    minWidth: minPort || minLand ? '20px !important' : '30px !important',
    width: minPort || minLand ? '20px !important' : '30px !important',
    minHeight: '120px !important',
    height: '120px !important',
    color: 'darkblue',
    fontSize: minPort || minLand ? '10px' : '14px',
    borderRadius: '0px',
    background: darkMode ? '#708f99' : 'lightblue',
    ':hover': {
      background: darkMode ? '#749aa6' : '#91bfcf'
    }
  }
}

interface changeLogTypoI {
  english: boolean,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean,
}

export const changeLogTypo = ({ english, minPort, minLand, medPort, medLand, larPort, larLand }: changeLogTypoI) => { // background
  return {
    display: 'flex',
    //flexDirection: 'column',
    fontFamily: 'Roboto',
    fontSize: minPort || minLand ? '11px' : english && ( larPort || larLand ) ? '14px' : '13px',
    fontWeight: '500',
    transform: 'rotate(270deg)',
    textWrap: 'nowrap',
  }
}

interface slideBoxI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean,
}

export const sliderBox = ({ minPort, minLand, medPort, medLand, larPort, larLand }: slideBoxI) => { // background
  return {
    ...flex, ...relative,
    flexDirection : 'column-reverse',
    background: 'orange',
    left: larPort ? '-30px': 'none',
    width: '500px',
    overflowX: 'hidden',
  }
}

interface eachDescriptionI {
  animRunning: boolean,
  scrollWidth: number,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean,
}

export const eachDescription = ({ animRunning, scrollWidth, minPort, minLand, medPort, medLand, larPort, larLand }: eachDescriptionI) => { // background
  return {
    ...flex, ...row, ...relative,
    //width: animRunning && minPort ? 'calc(100vw - 12px - 20px)' : animRunning && larPort ? 'calc(100vw - 12px - 30px)' : animRunning && larLand ? '500px' : 'none',
    width: animRunning ? 'none' : minPort ? 'calc(100vw - 12px - 20px)' : larPort ? 'calc(100vw - 12px - 30px)' : '500px',
    //width: '300px',
    //width: 'none',
    maxWidth: `500px`,
    height: '24px',
    minHeight: '24px',
    //background: 'gray',
  }
}

interface dateI {
  darkMode: boolean,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean,
}

export const date = ({ darkMode, minPort, minLand, medPort, medLand, larPort, larLand }: dateI) => { // background
  return {
    ...flex, ...relative, ...jcc, ...noSelect,
    width: '80px',
    minWidth: '80px',
    background: darkMode ? '#bd7979' : 'lightcoral',
    fontSize: minPort || minLand ? '12px' : '16px',
  }
}

interface textI {
  animRunning: boolean,
  darkMode: boolean,
  scrollWidth: number,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean,
}

export const text = ({ animRunning, darkMode, scrollWidth, minPort, minLand, medPort, medLand, larPort, larLand }: textI) => { // background
  return {
    ...flex, ...relative, ...noSelect,
    width: '420px',
    background: darkMode ? '#76b376' : 'lightgreen',
    //background: 'gainsboro',
    overflowY: 'hidden',
    overflowX: 'hidden',
    //overflow: animRunning ? 'visible' : 'none',
    textWrap: 'nowrap',
    fontSize: minPort || minLand ? '12px' : '16px',
  }
}