import { flex, noSelect, row, absolute, relative, column, jcc, fixed } from './CommonsSX';
import { blue, brown, lime, red, grey } from '@mui/material/colors';

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
    background: 'blue',
    display: 'flex',
    width: '20px',
    minHeight: minPort || minLand ? '1px' : medPort || medLand ? '1px' : larPort || larLand ? '100px' : '100px',
    position: 'relative'
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
    background: 'darkblue',
    display: 'flex',
    width: '20px',
    minHeight: minPort || minLand ? '90px' : medPort || medLand ? '90px' : larPort || larLand ? '100px' : '100px',
    position: 'relative'
  }
}

interface backgroundI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
}

const background = ({ minPort, minLand, medPort, medLand, larPort, larLand }: backgroundI) => {
  return {
    /* ...flex,  */...jcc,
    display: 'flex',
    flexDirection: minPort ? 'column' : 'column',
    background: 'red',
    width: 'calc(100vw - 12px)',
    height: minPort ? '500px' : minLand ? '80vh' : larPort ? '520px' : '520px',
    alignItems: 'center'
  }
}

interface blueBoxI {
  height: number,
  staticRefWidth: number,
  darkMode: boolean,
  minPort: boolean,
  minLand: boolean,
  larPort: boolean
}

const blueBox = ({ height, darkMode, minPort, minLand, larPort, staticRefWidth }: blueBoxI) => {
  return {
    ...flex, ...column, ...relative,
    background: darkMode ? '#253740' : '#3C6478',
    'borderRadius': `${staticRefWidth * 1}px`,
    alignSelf: 'center',
    justifyContent: minLand ? 'space-between' : 'space-evenly',
    minWidth: minPort ? '85vw' : minLand ? '70vw' : larPort ? '200px' : '200px',
    width: minPort ? '85vw' : minLand ? '70vw' : larPort ? '70vw' : '70vw',
    minHeight: minPort ? '500px' : minLand && height <= 280 ? '150px' : minLand && height > 280 ? '220px' : larPort ? '520px' : '520px',
    height: minPort ? '500px' : minLand && height <= 280 ? '150px' : minLand && height > 280 ? '220px' : larPort ? '520px' : '520px',
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

const avatar = ({ height, minPort, minLand, medPort, medLand, larPort, larLand, staticRefHeight }: avatarI) => {
  return {
    ...flex, ...row, ...relative,
    width: minPort  ? '90px' : minLand && height <= 280 ? '65px' : minLand && height > 280 ? '90px' : medPort || medLand ? '120px' : larPort ? '150px' : '150px',
    height: minPort ? '90px' : minLand && height <= 280 ? '65px' : minLand && height > 280 ? '90px' : medPort || medLand ? '120px' : larPort ? '150px' : '150px',
    top: minPort ? '-50px' : minLand && height <= 280 ? '-35px' : minLand && height > 280 ? '-50px' : medPort || medLand ? '-80px' : larPort ? '-70px' : '-70px',
    left: minPort ? '45px' : minLand && height <= 280 ? '45px' : minLand && height > 280 ? '45px' : larPort ? '50px' : '50px',
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

const typography = ({ maxStaticReference, darkMode, minPort, minLand, medPort, medLand, larPort }: typographyI) => {
  return {
    ...noSelect,
    background: 'teal',
    justifyContent: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    //marginTop: minPort || minLand ? '-40px' : medPort || medLand ? '-40px' : 'none',
    width: minPort ? '70vw' : minLand ? '60vw' : '65vw',
    height: minPort ? '40vh' : minLand ? '30vh' : medPort || medLand ? '300px' : larPort ? '250px' : '250px',
    textAlign: 'center',
    fontSize: minPort || minLand ? `16px` : medPort || medLand ? `26px` :  larPort ? `27px` : `27px`,
    '::-webkit-scrollbar': { width: '10px' },
    '::-webkit-scrollbar-thumb': {
      'border': '10px solid',
      borderRadius: '10px'
    },
    ':hover': {
      color: 'rgba(0, 0, 0, 0.18)'
    },
    //padding: '20px',
    padding: '0vw 1vw 0vw 1vw',
    //margin: '100px auto',
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
  background, blueBox, avatar, typography, topBottomHelper,
  greyBottom, blueBoxHelper
}

