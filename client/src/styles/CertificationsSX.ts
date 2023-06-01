import { grey } from '@mui/material/colors';
import {
  absolute, mix, noDeco, aic, asc, column,
  flex, jcc, jic, jsc, noSelect, relative,
} from './CommonsSX';

const greyTop = () => {
  return {
    background: grey[400],
    height: '6px',
    width: '100vw',
    display: 'flex',
    position: 'fixed',
    top: '0px',
    zIndex: 1000
  }
}

const greyLeft = () => {
  return {
    background: grey[400],
    height: 'calc(100vh - 12px)',
    width: '6px',
    display: 'flex',
    position: 'fixed',
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

const topBottomHelper = ({ minPort, minLand, medPort, medLand, larPort, larLand }: topBottomHelperI) => {
  return {
    background: 'none',
    display: 'flex',
    width: '20px',
    minHeight: minPort || minLand ? '1px' : medPort || medLand ? '1px' : '100px',
    position: 'relative'
  }
}

const background = () => {
  return {
    //...flex, /* ...aic, */ ...jcc,
    ...flex, ...aic,
    flexDirection: 'column',
    width: 'calc(100vw - 12px)',
    height: 'calc(100vh - 12px)',
    background: 'none',
    justifyContent: 'space-between'
    //overflow: 'hidden'
  }
}

interface genI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean
}

const mainBox = ({ minPort, minLand, medPort, medLand, larPort }: genI) => {
  return {
    ...flex,
    justifyContent: 'space-between',
    width: 'calc(100vw - 12px)',
    height: minPort || medPort || larPort ? '80vh' : '60vh',
    background: 'none',
    //flexDirection: minPort || larPort ? 'column' : minLand ? 'row' : 'row'
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

const leftRightHelper = ({ minPort, minLand, medPort, medLand, larPort, larLand }: leftRightHelperI) => {
  return {
    display: larLand ? 'flex' : 'none',
    background: 'none',
    //minHeight: '635px',
    minWidth: '20px'
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

const cardContainer = ({ minPort, minLand, medPort, medLand, larPort, larLand }: cardContainerI) => {
  return {
    display: 'flex',
    flexDirection: minPort || medPort || larPort ? 'column' : 'row',
    background: 'none',
    alignItems: 'center',

    justifyContent: 'space-evenly',
    minWidth: larLand ? '1200px' : 'none',
    width: 'calc(100vw - 12px)',
    minHeight: larPort ? '660px' : larLand ? '250px' : 'none',
    height: minPort || medPort || larPort ? '80vh' : '60vh',
    //height: '70vh'
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

const card = ({ minPort, minLand, medPort, medLand, larPort, larLand }: cardI) => { // card
  return {
    ...flex,
    display: 'flex',
    //border: '1px solid',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    background: 'none',
    alignItems: 'center',
    minWidth: minPort ? '87vw' : minLand || medPort || medLand ? '32vw' : larPort ? '400px' : '400px', // minWidth
    width: minPort ? '87vw' : medPort ? '50vw' : minLand || medLand ? '32vw' : larPort ? '400px' : '400px', // minWidth
    height: minPort ? '25vh' : medPort ? '20vh' : minLand || medLand ? '35vh' : larPort ? '220px' : '250px' // height
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

const title = ({ minPort, minLand, medPort, medLand, larPort, larLand }: titleI) => { // title
  return {
    ...noSelect, ...mix,
    background: 'none',
    //height: minLand ? '13vh' : 'none',
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

const boxMedia = ({ darkMode, minPort, minLand, medPort, medLand, larPort }: boxMediaI) => { // boxMedia
  return {
/*     ...asc, */
    'cursor': 'pointer',
    width: minPort ? '45vw' : medPort ? '25vw' : minLand || medLand ? '20vw' : larPort ? '220px' : '220px', // width
    height: minPort ? '25vw' : medPort ? '13vw' : minLand || medLand ? '10vw' : larPort ? '120px' : '120px', // height
    ':hover':
      darkMode ? {webkitFilter: 'brightness(.65)', 'filter': 'brightness(.65)'}
      : {webkitFilter: 'brightness(.9)', 'filter': 'brightness(.9)'},
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

const url = ({ minPort, minLand, medPort, medLand, larPort }: urlI) => {
  return {
    /* ...asc, */
    color: '#FFFFFF',
    paddingRight: '0vw',
    paddingTop: '0vw',
    fontSize: minPort ? '3.8vw' : medPort ? '2.3vw' : minLand || medLand ? '1.8vw' : larPort ? '20px' : '20px',
    background: 'none'
  }
}

const anchor = () => {
  return {
    ...asc, ...noSelect,...noDeco, ...mix,
    color: '#FFFFFF',
  }
}

const dialogStyle = () => {
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

const dialogPaper = ({ minPort, minLand, medPort, medLand, larPort }: dialogPaperI) => {
  return {
    sx: {  overflow: 'hidden',
      padding: '0px',
      display: 'flex',
      maxWidth: '100vw',
      maxHeight: '100vh',
      width: minPort ? '85vw' : minLand ? '85vw' : medPort ? '90vw' : medLand ? '80vw' : larPort ? '85vw' : '70vw',
      height: minPort ? '80vh' : minLand ? '80vh' : medPort ? '35vh' : medLand ? '55vh' : larPort ? '45vh' : '65vh',
      justifyContent: 'center',
      alignItems: 'center',
      '&::-webkit-scrollbar': {display: 'none'}
    }  
  }
}

interface dialogBoxI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean
}

const dialogBox = ({ minPort, minLand, medPort, medLand, larPort }: dialogBoxI) => {
  return {
    width: minPort ? 'calc(80vh - 32px)' : minLand ? 'calc(85vw - 32px)' : medPort ? 'calc(90vw - 32px)' : medLand ? 'calc(80vw - 32px)' : larPort ? 'calc(85vw - 32px)' : 'calc(70vw - 32px)',
    height: minPort ? 'calc(85vw - 32px)' : minLand ? 'calc(80vh - 32px)' : medPort ? 'calc(35vh - 32px)' : medLand ? 'calc(55vh - 32px)' : larPort ? 'calc(45vh - 32px)' : 'calc(65vh - 32px)',
    transform: minPort ? 'rotate(-90deg)' : 'none',
    padding: '0px'
  }
}

export {
  background, mainBox, card, anchor, dialogBox,
  title, boxMedia, url, dialogStyle, dialogPaper,
  greyTop, topBottomHelper, leftRightHelper,
  cardContainer, greyLeft
}