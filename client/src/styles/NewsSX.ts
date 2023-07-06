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

// const growAnim = (percentage: number) => { return keyframes({ from: { height: `0px` }, to: { height: `${(percentage  + 5)* 2}px` } }) }
// const growAnim = (percentage: number) => { return keyframes({ from: { height: `0px` }, to: { height: `${(percentage  + 5)* 2}px` } }) }

export const background = ({ show, minPort, minLand, medPort, medLand, larPort, larLand }: backgroundI) => { // background
  return {
    ...flex, ...fixed, //...column,
    flexDirection: 'row',
    top: larPort ? '200px' : 'none',
    bottom: larLand ? '20px' : 'none',
    //left: '-494px', // 500 - 6
    left: '-494px', // 500 - 6
    //left: '-510px', // 500 - 6
    //left: '6px', // 500 - 6
    //left: animToRight ? '6px' : '-494px', // 500 - 6
    background: 'yellow',
    //width: '90px',
    width: '530px',
    //minWidth: '530px',
    //width: '90vw',
    //maxWidth: '530px',



    //height: 'fit-content',
    //height: '300px',
    //height: show ? 'fit-content' : '30px',
    justifyContent: 'end',
    //animation: show ? 
    // `${keyframes({ '0%': { transform: 'translateX(100px)' }, '100%': { transform: 'translateX(400px)' } })} 1s linear` :
    // `${keyframes({ '0%': { transform: 'translateX(500px)' }, '100%': { transform: 'translateX(0px)' } })} 1s linear`

    // '@keyframes': {
    //   '0%': { transform: 'translateX(100px)' },
    //   '100%': { transform: 'translateX(200px)' }
    // }
  }
}

interface buttonNewsI {
  show: boolean,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean,
}


export const buttonNews = ({ show, minPort, minLand, medPort, medLand, larPort, larLand }: buttonNewsI) => { // background
  return {
    ...flex,
    position: larLand ? 'relative' : 'fixed',
    //position: 'relative',
    //position: 'fixed',
    minWidth: '30px !important',
    width: '30px !important',
    minHeight: '120px !important',
    height: '120px !important',
    color: 'darkblue',
    fontSize: minPort || minLand ? '10px' : '14px',
    borderRadius: '0px',
    background: 'lightblue',
    ':hover': {
      background: '#91bfcf'
    }
  }
}

export const changeLogTypo = () => { // background
  return {
    display: 'flex',
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontWeight: '500',
    transform: 'rotate(270deg)',
  }
}

export const sliderBox = () => { // background
  return {
    ...flex, ...relative,
    flexDirection : 'column-reverse',
    background: 'orange',
    width: '500px',
    //height: '300px',
    overflowX: 'hidden',
    //overflowY: 'scroll',
  }
}

interface eachDescriptionI {
  scrollWidth: number
}

export const eachDescription = ({ scrollWidth }: eachDescriptionI) => { // background
  return {
    ...flex, ...row, ...relative,
    //width: `${500 - scrollWidth}px`,
    //width: '500px',
    //width: '88vw',
    width: 'calc(100vw - 12px - 30px)',
    maxWidth: `500px`,
    //width: `80vw`,
    //maxWidth: `${500}px`,
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
    //#c97b7b
  }
}

interface textI {
  darkMode: boolean,
  scrollWidth: number,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean,
}

export const text = ({ darkMode, scrollWidth, minPort, minLand, medPort, medLand, larPort, larLand }: textI) => { // background
  return {
    ...flex, ...relative, ...noSelect,
    //width: `400px`,
    //width: `${420 - scrollWidth}px`,
    //width: `400px`,
    //width: `420px`,
    //width: '90vw',
    width: '420px',
    background: darkMode ? '#76b376' : 'lightgreen',
    //background: 'gainsboro',
    overflowY: 'hidden',
    overflowX: 'hidden',
    textWrap: 'nowrap',
    fontSize: minPort || minLand ? '12px' : '16px',
  }
}