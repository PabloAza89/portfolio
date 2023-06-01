import { flex, noSelect, row, absolute, relative, column, jcc, fixed } from './CommonsSX';
import { blue, brown, lime, red, grey } from '@mui/material/colors';

const background = () => {
  return {
    //background: 'darkred',
    display: 'flex',
    position: 'relative',
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: 'calc(100vh - 12px)'
  }
}

const innerMainContainer = () => {
  return {
    //background: 'blue',
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'column'
  }
}

const innerTopBottomHelper = () => {
  return {
    display: 'flex', 
    //background: 'yellow',
    minHeight: '50px'
  }
}

const innerBlueBoxHelper = () => {
  return {
    display: 'flex',
    //background: 'yellow',
    height: '0px'
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
    //background: 'blue',
    display: 'flex',
    width: '20px',
    minHeight: minPort || minLand ? '1px' : medPort || medLand ? '1px' : larPort || larLand ? '50px' : '50px',
    position: 'relative'
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
    display: larPort || larLand ? 'flex' : 'none',
    //background: 'red',
    minHeight: '635px',
    minWidth: '70px'
  }
}

interface blueBoxHelperI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
}

const blueBoxHelper = ({ minPort, minLand, medPort, medLand, larPort, larLand }: blueBoxHelperI) => {
  return {
    //background: 'darkblue',
    display: 'flex',
    width: '20px',
    minHeight: minPort || minLand ? '90px' : medPort || medLand ? '90px' : larPort || larLand ? '100px' : '100px',
    position: 'relative'
  }
}

interface mainContainerI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean,
}

const mainContainer = ({ minPort, minLand, medPort, medLand, larPort, larLand }: mainContainerI) => {
  return {
    //display: larPort || larLand ? 'flex' : 'none',
    display: 'flex',
    height: '100%',
    justifyContent: larPort || larLand ? 'space-between' : 'center',
  }
}

interface blueBoxI {
  height: number,
  staticRefWidth: number,
  darkMode: boolean,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean
}

const blueBox = ({ height, darkMode, minPort, minLand, medPort, medLand, larPort, staticRefWidth }: blueBoxI) => { // blueBox
  return {
    ...flex, ...column, ...relative,
    background: darkMode ? '#253740' : '#3C6478',
    'borderRadius': `${staticRefWidth * 1}px`,
    alignSelf: 'center',
    justifyContent: minLand ? 'space-between' : 'space-evenly',
    minWidth: minPort ? '85vw' : minLand ? '70vw' : medPort ? '80vw' : medLand ? '70vw' : larPort ? '710px' : '710px', // minWidth
    width: minPort ? '85vw' : minLand ? '70vw' : medPort ? '80vw' : medLand ? '70vw' : larPort ? '70vw' : '70vw', // width
    minHeight: minPort ? '60vh' : minLand ? '55vh' : medPort ? '50vh' : medLand ? '60vh' : larPort ? '450px' : '450px', // minHeight
    height: minPort ? '60vh' : minLand ? '55vh' : medPort ? '50vh' : medLand ? '60vh' : larPort ? '450px' : '450px', // height
  }
 }

interface avatarI {
  height: number,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean,
  staticRefHeight: number
}

const avatar = ({ height, minPort, minLand, medPort, medLand, larPort, larLand, staticRefHeight }: avatarI) => { // avatar
  return {
    ...flex, ...row, ...relative,
    width: minPort  ? '14vh' : minLand ? '20vh' : medPort ? '14vh' : medLand ? '20vh' : larPort ? '150px' : '150px', // width
    height: minPort ? '14vh' : minLand ? '20vh' : medPort ? '14vh' : medLand ? '20vh' : larPort ? '150px' : '150px', // height
    top: minPort ? '-13vh' : minLand ? '-10vh' : medPort ? '-12vh' : medLand ? '-17vh' : larPort ? '-130px' : '-130px', // top
    left: minPort ? '8vw' : minLand ? '4vw' : medPort ? '6vw' : medLand ? '4vw' : larPort ? '50px' : '50px', // left
  }
}

interface typographyI {
  maxStaticReference: number,
  darkMode: boolean,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
}

const typography = ({ maxStaticReference, darkMode, minPort, minLand, medPort, medLand, larPort }: typographyI) => { // typography
  return {
    ...noSelect,
    //background: 'teal',
    justifyContent: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    minWidth: minPort ? '70vw' : minLand ? '60vw' : medPort ? '70vw' : medLand ? '60vw' : '660px', // width
    width: minPort ? '70vw' : minLand ? '60vw' : medPort ? '70vw' : medLand ? '60vw' : '65vw', // width
    height: minPort ? '40vh' : minLand ? '30vh' : medPort ? '32vh' : medLand ? '40vh' : larPort ? '250px' : '250px', // height
    textAlign: 'center',
    fontSize: minPort || minLand ? `16px` : medPort || medLand ? `26px` :  larPort ? `27px` : `27px`, // fontSize
    '::-webkit-scrollbar': { width: '10px' },
    '::-webkit-scrollbar-thumb': {
      'border': '10px solid',
      borderRadius: '10px'
    },
    ':hover': {
      color: 'rgba(0, 0, 0, 0.18)'
    },
    padding: '0vw 1vw 0vw 1vw',
    overflow: 'auto',
    color: 'transparent',
    WebkitTextFillColor: darkMode ? '#b5b3b3' : 'white',
    'transition': 'color 0.3s ease',
  }
}

const greyBottom = () => {
  return {
    background: grey[400],
    height: '6px',
    width: 'calc(100vw - 12px)',
    display: 'flex',
    position: 'fixed',
    bottom: '0px',
    zIndex: 1000
  }
}

export {
  blueBox, avatar, typography, topBottomHelper,
  greyBottom, blueBoxHelper, mainContainer, leftRightHelper,
  background, innerMainContainer, innerTopBottomHelper,
  innerBlueBoxHelper
}

