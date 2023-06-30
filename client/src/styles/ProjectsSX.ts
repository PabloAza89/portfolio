import { blue } from '@mui/material/colors';
import {
  flex, relative, fixed, column, pointer,
  row, aic, asc, jcc,
  mix, noSelect
} from './CommonsSX';
import { grey } from '@mui/material/colors';
import './SkillsSX.css';

interface topBottomHelperI {
  larPort: boolean,
  larLand: boolean
}

export const topBottomHelper = ({ larPort, larLand }: topBottomHelperI) => {
  return {
    ...flex, ...relative,
    //background: 'orange',
    width: '20px',
    height: larPort || larLand ? '100px' : '1px',
    minHeight: larPort || larLand ? '100px' : '1px',
  }
}

export const background = () => {
  return {
    ...flex, ...relative, ...column,
    //background: 'red',
  }
}

export const scroll = () => {
  return {
    overflow: 'auto',
    //background: 'red',
    opacity: '0.8',
  }
}

interface solidI {
  length: number,
  minPort: boolean,
  minLand: boolean,
}

export const solid = ({ minPort, minLand, length }: solidI) => {
  return {
    ...flex, ...relative,
    background: '#5d4037',
    width: minPort || minLand ? `calc(${length} * 414px)` : `calc(${length} * 564px)`,
    height: minPort ? '9px' : minLand ? '7px' : '12px'
  }
}

interface intercalatedI {
  minPort: boolean,
  minLand: boolean,
  length: number
}

export const intercalated =  ({ length, minPort, minLand }: intercalatedI) => {
  return {
    ...flex, ...relative,
    background: 'linear-gradient(to right, transparent 70%, #5d4037 30%)',
    backgroundBlendMode: 'difference',
    backgroundSize: minPort || minLand ? '69px' : '94px',
    width: minPort || minLand ? `calc(${length} * 414px)` : `calc(${length} * 564px)`,
    height: minPort ? '20px' : minLand ? '15px' : '30px'
  }
}

interface centerStripeI {
  length: number,
  minPort: boolean,
  minLand: boolean,
}

export const centerStripe = ({ length, minPort, minLand }: centerStripeI) => {
  return {
    ...row, ...flex,
    width: minPort || minLand ? `calc(${length} * 414px)` : `calc(${length} * 564px)`,
    //background: 'yellow',
    background: '#5d4037',
    height: minPort ? '270px' : minLand ? '195px' : '340px',
  }
}

interface cardI {
  minPort: boolean,
  minLand: boolean,
  larPort: boolean
}

export const card = ({ minPort, minLand, larPort }: cardI) => {
  return {
    ...row, ...flex,
    //background: 'gray',
    height: minPort ? '270px' : minLand ? '195px' : larPort ? '347px' : '340px'
  }
}

export const cardLeft = () => {
  return {
    background: '#5d4037',
    width: '14px'
  }
}

interface boxTitleI {
  minPort: boolean,
  minLand: boolean,
  larPort: boolean,
  darkMode: boolean
}

export const boxTitle = ({ minPort, minLand, larPort, darkMode }: boxTitleI) => {
  return {
    ...flex, ...row, ...aic,
    paddingLeft: '18px',
    //background: 'blue',
    background: darkMode ? '#5f1e1e' : '#9f3434',
    height: minPort ? '50px' : minLand ? '35px' : larPort ? '60px' : '60px'
  }
}

interface titleI {
  darkMode: boolean,
  minPort: boolean,
  minLand: boolean,
  larPort: boolean
}

export const title = ({ darkMode, minPort, minLand, larPort }: titleI) => {
  return {
    ...noSelect,
    marginRight: '18px',
    fontFamily: 'Century Gothic',
    color: darkMode ? '#b5b3b3' : '#FFFFFF',
    fontSize: minPort ? '30px' : minLand ? '5vh' : larPort ? '40px' : '40px'
  }
}

export const boxMedia = () => {
  return {
    ...row, ...flex,
    border: '0px solid blue',
  }
}

interface cardMediaI {
  darkMode: boolean,
  minPort: boolean,
  minLand: boolean,
}

export const cardMedia = ({ darkMode, minPort, minLand }: cardMediaI) => {
  return {
    ...flex, ...asc, ...pointer, ...noSelect,
    width: minPort || minLand ? '400px' : '550px',
    height: minPort ? '220px' : minLand ? '160px' : '280px',
    ':hover': darkMode ?
      { webkitFilter: 'brightness(.65)', 'filter': 'brightness(.65)', transform: 'scale(1.01)' } :
      { webkitFilter: 'brightness(.9)', 'filter': 'brightness(.9)', transform: 'scale(1.01)' },
    webkitFilter: darkMode ? 'brightness(.6)' : 'none',
    'filter': darkMode ? 'brightness(.6)' : 'none',
    transition: 'all .2s ease-in-out',
    zIndex: 900,
    animation: `none`,
  }
}

interface placeholderI {
  darkMode?: boolean,
  loaded: boolean,
  minPort: boolean,
  minLand: boolean,
}

export const placeholderBackground = ({ darkMode, loaded, minPort, minLand }: placeholderI) => {
  return {
    ...noSelect, ...relative,
    //display: 'flex',
    display: loaded ? 'none' : 'flex',
    marginLeft: minPort || minLand ? '-400px' : '-550px',
    background: darkMode ? '#196b6b' : 'darkcyan',
    width: minPort || minLand ? '400px' : '550px',
    height: minPort ? '220px' : minLand ? '160px' : '280px',
    zIndex: 900,
  }
}

export const placeholderAnimation = ({ loaded, minPort, minLand }: placeholderI) => {
  return {
    ...noSelect, ...relative,
    //display: 'flex',
    display: loaded ? 'none' : 'flex',
    marginLeft: minPort ? '-310px' : minLand ? '-280px' : '-415px', // 90 + 220 = 310                       120 + 160 = 280                        135 + 280 = 415
    marginRight: minPort ? '90px' : minLand ? '120px' : '135px',    // 90 + 220 + 90 = 400 (minPort 220) // 120 + 160 + 120 = 400 (minLand 160) // 135 + 280 + 135 = 550 (med & lar)
    width: minPort ? '220px' : minLand ? '160px' : '280px',
    height: minPort ? '220px' : minLand ? '160px' : '280px',
    zIndex: 901,
    animation: `abc .8s linear infinite`,
    animationTimingFunction: 'steps(12, end)',
    '@keyframes abc': {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' }, // 99.96
    }
  }
}

interface betweenMediaI {
  indexOf: number,
  length: number,
  darkMode: boolean
}

export const betweenMedia = ({ darkMode, indexOf, length }: betweenMediaI) => {
  return {
    display: indexOf === length ? 'none' : 'flex',
    background: darkMode ? '#71735e' : '#d3d79f',
    width: '14px'
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

interface boxLowerI {
  height: number,
  minPort: boolean,
  minLand: boolean,
  medLand: boolean,
}

export const boxLower = ({ height, minPort, minLand, medLand }: boxLowerI) => {
  return {
    ...asc, ...row, ...noSelect,
    background: 'none',
    marginTop: '10px',
    display: minLand || minPort ? 'none' : medLand && height <= 600 ? 'none' : 'flex'
  }
}

export const textLower = ( larPort: boolean ) => {
  return {
    ...jcc, ...asc, ...row, ...mix,
    color: '#FFFFFF',
    fontSize: larPort ? '23px' : '23px',
  }
}

interface selectI {
  darkMode: boolean,
  larPort: boolean
}

export const select = ({ darkMode, larPort }: selectI) => {
  return {
    color: '#FFFFFF',
    background: darkMode ? '#48555e' : blue[500],
    height: larPort ? '45px' : '45px',
    width: larPort ? '65px' : '65px',
    fontSize: larPort ? '17px': '17px'
  }
}

export const lowerHelper = () => {
  return {
    ...flex, ...fixed,
    background: grey[400],
    height: '26px',
    width: 'calc(100vw - 12px)',
    bottom: '0px',
    zIndex: 1000
  }
}