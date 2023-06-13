import {
  flex, noSelect, row, jcsb, absolute, relative,
  column, jcc, fixed, asc, jcfs
} from './CommonsSX';
import { grey } from '@mui/material/colors';

export const background = () => {
  return {
    ...column, ...jcsb, ...flex,
    //background: 'darkred',
    height: 'calc(100vh - 12px)'
  }
}

export const innerMainContainer = () => {
  return {
    ...column, ...jcsb, ...flex,
    //background: 'blue',
  }
}

export const innerTopBottomHelper = () => {
  return {
    ...flex,
    //background: 'yellow',
    minHeight: '50px'
  }
}

export const innerBlueBoxHelper = () => {
  return {
    ...flex,
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

export const topBottomHelper = ({ minPort, minLand, medPort, medLand, larPort, larLand }: topBottomHelperI) => {
  return {
    ...flex, ...relative,
    //background: 'blue',
    width: '20px',
    minHeight: minPort || minLand ? '1px' : medPort || medLand ? '1px' : larPort || larLand ? '50px' : '50px',
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

export const blueBoxHelper = ({ minPort, minLand, medPort, medLand, larPort, larLand }: blueBoxHelperI) => {
  return {
    ...flex, ...relative,
    //background: 'darkblue',
    width: '20px',
    minHeight: minPort || minLand ? '90px' : medPort || medLand ? '90px' : larPort || larLand ? '100px' : '100px',
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

export const mainContainer = ({ minPort, minLand, medPort, medLand, larPort, larLand }: mainContainerI) => {
  return {
    ...flex,
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

export const blueBox = ({ height, darkMode, minPort, minLand, medPort, medLand, larPort, staticRefWidth }: blueBoxI) => { // blueBox
  return {
    ...flex, ...column, ...relative, ...asc,
    background: darkMode ? '#253740' : '#3C6478',
    'borderRadius': `${staticRefWidth * 1}px`,
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

export const avatar = ({ height, minPort, minLand, medPort, medLand, larPort, larLand, staticRefHeight }: avatarI) => { // avatar
  return {
    ...flex, ...row, ...relative,
    width: minPort  ? '14vh' : minLand ? '20vh' : medPort ? '14vh' : medLand ? '20vh' : larPort ? '150px' : '150px', // width
    height: minPort ? '14vh' : minLand ? '20vh' : medPort ? '14vh' : medLand ? '20vh' : larPort ? '150px' : '150px', // height
    top: minPort ? '-13vh' : minLand ? '-10vh' : medPort ? '-12vh' : medLand ? '-17vh' : larPort ? '-130px' : '-130px', // top
    left: minPort ? '8vw' : minLand ? '4vw' : medPort ? '6vw' : medLand ? '4vw' : larPort ? '50px' : '50px', // left
  }
}

interface typographyI {
  mouse: number,
  darkMode: boolean,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
}

export const typography = ({ mouse, darkMode, minPort, minLand, medPort, medLand, larPort }: typographyI) => { // typography
  return {
    ...noSelect, ...jcfs, ...flex, ...column, ...asc,
    //background: 'teal',
    minWidth: minPort ? '70vw' : minLand ? '60vw' : medPort ? '70vw' : medLand ? '60vw' : '660px', // width
    width: minPort ? '70vw' : minLand ? '60vw' : medPort ? '70vw' : medLand ? '60vw' : '65vw', // width
    height: minPort ? '40vh' : minLand ? '30vh' : medPort ? '32vh' : medLand ? '40vh' : larPort ? '250px' : '250px', // height
    textAlign: 'center',
    fontSize: minPort || minLand ? `16px` : medPort || medLand ? `26px` :  larPort ? `27px` : `27px`, // fontSize
    '::-webkit-scrollbar':  minPort || minLand ? { width: '7px' } : medPort || medLand ? { width: '8.5px' } : { width: '10px' },
    '::-webkit-scrollbar-thumb': {
      'border': '10px solid',
      borderRadius: '10px'
    },
    ':hover': {
      color: 'rgba(0, 0, 0, 0.18)',
    },
    padding: '0vw 1vw 0vw 1vw',
    overflow: 'auto',
    color: mouse ? 'transparent' : 'rgba(0, 0, 0, 0.18)',
    WebkitTextFillColor: darkMode ? '#b5b3b3' : 'white',
    'transition': 'color 0.3s ease',
  }
}

export const greyBottom = () => {
  return {
    ...flex, ...fixed,
    background: grey[400],
    height: '6px',
    width: 'calc(100vw - 12px)',
    bottom: '0px',
    zIndex: 1000
  }
}