import { blue } from '@mui/material/colors';
import {
  flex, relative, absolute, fixed, column, pointer,
  row, aic, aifs, asc, jcc, jcfe, jcfs, jcsa,
  jcsb, jcse, jsc, jic, noDeco, mix, noSelect
} from './CommonsSX';
//import "@fontsource/allura";


interface genI {
  staticRefWidth: number,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
}

export const background = ({ staticRefWidth, minPort, minLand, medPort, medLand, larPort, larLand }: genI) => { // background
  return {
    ...flex,
    //background: 'blue',
    flexDirection: minPort || medPort || larPort ? 'column' : 'row',
    paddingTop: minLand ? '10px' : '10px',
    color: '#FFFFFF',
    minWidth: minPort || medPort ? 'none' : minLand || medLand ? 'none' : larPort ? '526px' : '677px', // minWidth 
    minHeight: minPort || medPort ? '17vw' : minLand ? '5vw' : medLand ? '70px' : larPort ? '127px' : '100px', // minHeight
    height: minPort || medPort ? '17vw' : minLand ? '5vw' : medLand ? '70px' : larPort ? '127px' : '100px', //height
    justifyContent: minLand || minLand || medLand || larLand ? 'space-between' : 'none'
  }
}

export const mainLeft = ({ staticRefWidth, minPort, minLand, medPort, medLand, larPort, larLand }: genI) => { // mainLeft
  return {
    ...flex, ...row, ...aic, ...jcc,
    //background: 'red',
    minWidth: minPort || minLand || medPort || medLand ? '30vw' : larPort ? '491px' : '580px', // minWidth
    height: minPort || medPort ? '11vw' : minLand ? '5vw' : medLand ? '70px' : larPort ? '82px' : '100px', // height
    color: '#FFFFFF',
    'alignSelf': minPort || minLand || medPort || larPort ? 'start' : 'center',
    marginLeft: minPort || minLand || medPort || medLand ? '2vw' : larPort || larLand ? '25px' : 'none',
  }
}

interface mainRightI {
  staticRefWidth: number,
  percentageResizedWidth: number,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
}

export const mainRight = ({ staticRefWidth, percentageResizedWidth, minPort, minLand, medPort, medLand, larPort, larLand }: mainRightI) => { // mainRight
  return {
    ...asc, ...flex, ...aic,
    //background: 'yellow',
    overflow: 'auto',
    width: minLand ? '55vw' : minPort || medPort ? 'calc(100vw - 12px)' : medLand ? '60vw' : larPort ? '93vw' : '50vw', // width
    minHeight: minPort || medPort ? '6vw' : minLand ? '5vw' : medLand ? '70px' : larPort ? '45px' : `100px`, // minHeight
    paddingLeft: minPort || minLand || medPort ? '0px' : larLand ? '20px' : '20px',
    paddingRight: medLand ? '35px' : larLand ? '50px' : '20px',
    color: '#FFFFFF',
    alignSelf: larPort ? 'flex-start' : 'unset',
    justifyContent:
      minPort || minLand || minLand || medPort ? 'space-around' :
      larPort ? 'space-between' :
      'space-between',
  }
}

interface genII {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean
}

export const lessThan = ({ minPort, minLand, medPort, medLand, larPort }: genII) => { // lessThan
  return {
    ...noSelect, ...mix,
    //background: 'darkgray',
    fontSize: minPort || medPort  ? '5vw' : minLand || medLand ? '2.3vw' : larPort ? '54px' : '54px', // fontSize
    width: minPort || medPort ? '6vw' : minLand || medLand ? '3.5vw' : larPort ? '45px' : '45px', // width
    height: minPort || medPort ? '8vw' : minLand || medLand ? '3.5vw' : larPort ? '80px' : '80px', // height
    textAlign: 'center'
  }
}

interface nameI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean
}

export const name = ({ minPort, minLand, medPort, medLand, larPort }: nameI) => { // name
  return {
    ...noSelect,
    //background: 'navy',
    fontFamily: 'Allura',
    fontSize: minPort || medPort  ? '7vw' : minLand || medLand ? '3.4vw' : larPort ? '60px' : '73px', // fontSize
    color: blue[600],
    fontWeight: 600,
    height: minPort || medPort ? '10vw' : minLand || medLand ? '4.7vw' : larPort ? '82px' : '100px', // height
    textAlign: 'center'
  }
}

export const blink = ({ minPort, minLand, medPort, medLand, larPort }: genII) => { // blink
  return {
    ...noSelect, ...mix,
    //background: 'darkgray',
    width: minPort || medPort ? '2vw' : minLand ||medLand ? '13px' : larPort ? '15px' : '11px', // width
    height: minPort || medPort ? '8vw' : minLand ||medLand ? '3.5vw' : larPort ? '80px' : '80px', // height
    fontSize: minPort || medPort  ? '5vw' : minLand || medLand ? '2.3vw' : larPort ? '54px' : '54px', // fontSize
    fontWeight: '300',
    animation: 'blink 1s linear infinite',
    '@keyframes blink': {
      '0%': { opacity: '0' },
      '49%': { opacity: '0' },
      '50%': { opacity: '1' }
    },
    textAlign: 'center'
  }
}

export const greaterThan = ({ minPort, minLand, medPort, medLand, larPort }: genII) => { // greaterThan
  return {
    ...noSelect, ...mix,
    //background: 'yellow',
    fontSize: minPort || medPort  ? '5vw' : minLand || medLand ? '2.3vw' : larPort ? '54px' : '54px', // fontSize
    width: minPort || medPort ? '6vw' : minLand || medLand ? '2.1vw' : larPort ? '60px' : '55px', // width
    height: minPort || medPort ? '8vw' : minLand || medLand ? '3.5vw' : larPort ? '80px' : '80px', // height
    textAlign: 'center'
  }
}

export const test = () => {
  return {
    transition: 'all .1s ease-in-out',
    //':hover': { transform: 'scale(1.05)' }
    ':hover': { fontSize: '110%' }

  }
}

interface textItemI {
  staticRefWidth: number,
  darkMode: boolean,
  minPort: boolean,
  minLand: boolean,
  medLand: boolean,
  medPort: boolean,
  larPort: boolean,
  larLand: boolean
}

export const textItem = ({ staticRefWidth, darkMode, minPort, minLand, medLand, medPort, larPort, larLand }: textItemI) => { // textItem
  return {
    ...noDeco, ...noSelect, ...mix,
    //background: 'red',
    marginLeft: larPort || larLand ? `10px` : '0px',
    marginRight: larPort || larLand ? `10px` : '0px',
    minWidth: 'max-content',
    color: darkMode ? '#b5b3b3' : '#FFFFFF',
    fontSize: minPort || medPort ? '3vw' :  minLand || medLand ? '1.8vw' : larPort ? '23px' : `23px`, // fontSize
    fontFamily: 'Roboto',
    fontWeight: '600',
  }
}