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
    background: 'none',
    display: 'flex',
    width: '20px',
    minHeight: minPort ? '60px' : minLand ? '60px' : larPort || larLand ? '100px' : '100px',
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
    background: 'none',
    display: 'flex',
    width: '20px',
    minHeight: minPort ? '60px' : minLand ? '40px' : medPort || medLand ? '90px' : larPort || larLand ? '100px' : '100px',
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
    ...flex, ...jcc,
    flexDirection: minPort ? 'column' : 'row',
    background: 'none',
    width: 'calc(100vw - 12px)',
    height: minPort ? '500px' : minLand ? '220px' : larPort ? '520px' : '520px',
    alignItems: 'center'
  }
}

interface blueBoxI {
  staticRefWidth: number,
  darkMode: boolean,
  minPort: boolean,
  minLand: boolean,
  larPort: boolean
}

const blueBox = ({ darkMode, minPort, minLand, larPort, staticRefWidth }: blueBoxI) => {
  return {
    ...flex, ...column, ...relative,
    background: darkMode ? '#253740' : '#3C6478',
    'borderRadius': `${staticRefWidth * 1}px`,
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    minWidth: minPort ? '330px' : minLand ? '70vw' : larPort ? '200px' : '200px',
    width: minPort ? '330px' : minLand ? '70vw' : larPort ? '70vw' : '70vw',
    minHeight: minPort ? '500px' : minLand ? '220px' : larPort ? '520px' : '520px',
    height: minPort ? '500px' : minLand ? '220px' : larPort ? '520px' : '520px',
  }
 }

interface avatarI {
  currentHeight: number,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean,
  staticRefHeight: number
}

const avatar = ({ currentHeight, minPort, minLand, medPort, medLand, larPort, larLand, staticRefHeight }: avatarI) => {
  return {
    ...flex, ...row, ...relative,
    width: minPort || minLand ? '100px' : medPort || medLand || larPort ? '150px' : '150px',
    height: minPort || minLand ? '100px' : medPort || medLand || larPort ? '150px' : '150px',
    top: minPort || minLand ? '-60px' : medPort || medLand ? '-80px' : larPort ? '-70px' : '-70px',
    left: minPort || minLand ? '40px' : larPort ? '50px' : '50px',
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
    background: 'none',
    justifyContent: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    marginTop: minPort || minLand ? '-40px' : medPort || medLand ? '-40px' : 'none',
    width: minPort ? '290px' : '65vw',
    height: minPort ? '350px' : minLand ? '110px' : medPort || medLand ? '300px' : larPort ? '250px' : '250px',
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

