import { grey } from '@mui/material/colors';
import {
  mix, noDeco, aic, asc, column,
  flex, jcc, noSelect, relative,
  jcse, fixed, jcsb, pointer
} from './CommonsSX';
import $ from 'jquery';

interface arrayI {
  id: number,
}

export const hover = (array: arrayI[]) => {
  array.forEach(e => {
    $(`.cardClass${e.id}`).on("mouseenter", function () {
      $(`.titleClass${e.id}`).css('transition', 'all .2s ease-in-out').css('transform', 'scale(1.1)')
      $(`.imageClass${e.id}`).css('transition', 'all .2s ease-in-out').css('transform', 'scale(1.1)')
      $(`.urlClass${e.id}`).css('transition', 'all .2s ease-in-out').css('transform', 'scale(1.1)').css('mix-blend-mode', 'difference')
    }).on("mouseleave", function () {
      $(`.titleClass${e.id}`).css('transition', 'all .2s ease-in-out').css('transform', 'scale(1)')
      $(`.imageClass${e.id}`).css('transition', 'all .2s ease-in-out').css('transform', 'scale(1)')
      $(`.urlClass${e.id}`).css('transition', 'all .2s ease-in-out').css('transform', 'scale(1)')
    })
  })
}

interface greyTopI {
  darkMode: boolean,
}

export const greyTop = ({ darkMode }: greyTopI) => {
  return {
    ...flex, ...fixed,
    background: darkMode ? grey[800] : grey[400],
    height: '6px',
    width: '100vw',
    top: '0px',
    zIndex: 1000
  }
}

interface greyLeftI {
  darkMode: boolean,
}

export const greyLeft = ({ darkMode }: greyLeftI) => {
  return {
    ...flex, ...fixed,
    background: darkMode ? grey[800] : grey[400],
    height: 'calc(100vh - 12px)',
    width: '6px',
    left: '0px',
    zIndex: 1000
  }
}

interface topBottomHelperI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
}

export const topBottomHelper = ({ minPort, minLand, medPort, medLand, larPort, larLand }: topBottomHelperI) => {
  return {
    ...flex, ...relative,
    //background: 'red',
    width: '20px',
    minHeight: minPort || minLand ? '1px' : medPort || medLand ? '1px' : '120px',
  }
}

export const background = () => {
  return {
    ...flex, ...aic, ...column, ...jcsb,
    background: 'none',
    width: 'calc(100vw - 12px)',
    height: 'calc(100vh - 12px)',
  }
}

interface genI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
}

export const mainBox = ({ minPort, minLand, medPort, medLand, larPort, larLand }: genI) => {
  return {
    ...flex, ...jcsb,
    //background: 'darkred',
    width: 'calc(100vw - 12px)',
    minHeight: larLand ? '220px' : 'none',
    height: minPort || medPort || larPort ? '80vh' : '50vh',
  }
}

interface leftRightHelperI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
}

export const leftRightHelper = ({ minPort, minLand, medPort, medLand, larPort, larLand }: leftRightHelperI) => {
  return {
    display: larLand ? 'flex' : 'none',
    //background: 'yellow',
    minWidth: '44px',
  }
}

interface cardContainerI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
}

export const cardContainer = ({ minPort, minLand, medPort, medLand, larPort, larLand }: cardContainerI) => {
  return {
    ...flex, ...aic, ...jcse,
    flexDirection: minPort || medPort || larPort ? 'column' : 'row',
    //background: 'blue',
    minWidth: larLand ? '1200px' : 'none',
    width: 'calc(100vw - 12px)',
    minHeight: larPort ? '720px' : larLand ? '220px' : 'none',
    height: minPort || medPort || larPort ? '80vh' : '50vh',
  }
}

interface cardI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
}

export const card = ({ minPort, minLand, medPort, medLand, larPort, larLand }: cardI) => { // card
  return {
    ...flex, ...relative, ...column, ...aic, ...jcsb,
    //background: 'orange',
    minWidth: minPort ? '87vw' : minLand || medPort || medLand ? '32vw' : '400px', // minWidth
    width: minPort ? '87vw' : medPort ? '50vw' : minLand || medLand ? '32vw' : '400px', // minWidth
    height: minPort ? '25vh' : medPort ? '20vh' : minLand || medLand ? '35vh' : '220px', // height
  }
}

interface titleI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
}

export const title = ({ minPort, minLand, medPort, medLand, larPort, larLand }: titleI) => { // title
  return {
    ...noSelect, ...mix,
    //background: 'Red',
    color: '#FFFFFF',
    fontSize: minPort ? '4.1vw': medPort ? '2.5vw' : minLand || medLand ? '1.6vw' : larPort ? '20px' : '20px', // fontSize
  }
}

interface boxMediaI {
  darkMode: boolean,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean
}

export const boxMedia = ({ darkMode, minPort, minLand, medPort, medLand, larPort }: boxMediaI) => { // boxMedia
  return {
    ...pointer, ...noSelect,
    //background: 'red',
    width: minPort ? '45vw' : medPort ? '25vw' : minLand || medLand ? '20vw' : larPort ? '220px' : '220px', // width
    height: minPort ? '25vw' : medPort ? '13vw' : minLand || medLand ? '10vw' : larPort ? '120px' : '120px', // height
    ':hover': darkMode ?
      { webkitFilter: 'brightness(.65)', 'filter': 'brightness(.65)' } :
      { webkitFilter: 'brightness(.9)', 'filter': 'brightness(.9)/* ' },
    webkitFilter: darkMode ? 'brightness(.6)' : 'none',
    'filter': darkMode ? 'brightness(.6)' : 'none',
    zIndex: 1000,
  }
}

interface urlI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean
}

export const url = ({ minPort, minLand, medPort, medLand, larPort }: urlI) => {
  return {
    color: '#FFFFFF',
    paddingRight: '0vw',
    paddingTop: '0vw',
    fontSize: minPort ? '3.8vw' : medPort ? '2.3vw' : minLand || medLand ? '1.8vw' : larPort ? '20px' : '20px',
    //background: 'gray',
  }
}

export const anchor = () => {
  return {
    ...asc, ...noSelect,...noDeco, ...mix,
    color: '#FFFFFF',
  }
}

export const dialogStyle = () => {
  return {
    maxWidth: '100vw',
    maxHeight: '100vh',
    padding: '0px'
  }
}

interface dialogPaperI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean
}

export const dialogPaper = ({ minPort, minLand, medPort, medLand, larPort }: dialogPaperI) => {
  return {
    ...flex, ...jcc, ...aic,
    overflow: 'hidden',
    padding: '0px',
    maxWidth: '100vw',
    maxHeight: '100vh',
    width: minPort ? '85vw' : minLand ? '85vw' : medPort ? '90vw' : medLand ? '80vw' : larPort ? '85vw' : '70vw',
    height: minPort ? '80vh' : minLand ? '80vh' : medPort ? '35vh' : medLand ? '55vh' : larPort ? '45vh' : '65vh',
    '&::-webkit-scrollbar': {display: 'none'}
  }
}

interface dialogBoxI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean
}

export const dialogBox = ({ minPort, minLand, medPort, medLand, larPort }: dialogBoxI) => {
  return {
    width: minPort ? 'calc(80vh - 32px)' : minLand ? 'calc(85vw - 32px)' : medPort ? 'calc(90vw - 32px)' : medLand ? 'calc(80vw - 32px)' : larPort ? 'calc(85vw - 32px)' : 'calc(70vw - 32px)',
    height: minPort ? 'calc(85vw - 32px)' : minLand ? 'calc(80vh - 32px)' : medPort ? 'calc(35vh - 32px)' : medLand ? 'calc(55vh - 32px)' : larPort ? 'calc(45vh - 32px)' : 'calc(65vh - 32px)',
    transform: minPort ? 'rotate(-90deg)' : 'none',
    padding: '0px'
  }
}