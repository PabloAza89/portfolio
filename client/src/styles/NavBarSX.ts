import { blue } from '@mui/material/colors';
import { aic, asc, mix, flex, jcse, noDeco, noSelect, row } from './CommonsSX';

interface genI {
  staticRefWidth: number,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
}

const background = ({ staticRefWidth, minPort, minLand, medPort, medLand, larPort, larLand }: genI) => { // background
  return {
    /* ...jcse, */ ...flex,
    background: 'blue',
    flexDirection: minPort || medPort || larPort ? 'column' : 'row',
    paddingTop: '10px',
    color: '#FFFFFF',
    minWidth: medPort ? 'none' : medLand ? 'none' : larPort ? 'calc(100vw - 12px)' : '677px', // minWidth 
    minHeight: medPort ? '140px' : medLand ? '70px' : larPort ? '127px' : '100px', // minHeight
    height: minPort ? '30vw' : minLand ? '7vw' : medPort ? '140px' : medLand ? '70px' : larPort ? '127px' : '100px', //height
    justifyContent: minLand ? 'left' : medLand || larLand ? 'space-between' : 'none'
  }
}

const mainLeft = ({ staticRefWidth, minPort, minLand, medPort, medLand, larPort, larLand }: genI) => { // mainLeft
  return {
    ...flex, ...row, ...aic,
    background: 'red',
    alignItems: 'center',
    minWidth: minPort ? '60vw' : minLand ? '35vw' : medPort ? '430px' : medLand ? '250px' : larPort ? '82px' : '580px', // minWidth
    height: minPort ? '7vh' : minLand ? '13vh' : medPort || medLand ? '70px' : larPort ? '82px' : '100px', // height
    color: '#FFFFFF',
    'alignSelf': minPort || medPort || larPort ? 'start' : 'center',
    marginLeft: '25px',
    justifyContent: 'center'
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

const mainRight = ({ staticRefWidth, percentageResizedWidth, minPort, minLand, medPort, medLand, larPort, larLand }: mainRightI) => { // mainRight
  return {
    ...asc, ...flex, ...aic,
    background: 'yellow',
    overflow: 'auto',
    //minWidth: minPort ? '96vw' : minLand ? '55vw' : medPort ? 'calc(100vw - 12px)' : larPort ? '96vw' : '640px', // width
    width: minPort ? '96vw' : minLand ? '55vw' : medPort ? 'calc(100vw - 12px)' : medLand ? '30vw' : larPort ? '93vw' : '50vw', // width
    minHeight: medPort || medLand ? '70px' : larPort ? '45px' : `100px`, // minHeight
    paddingLeft: larLand ? '20px' : '20px',
    //paddingRight: larLand ? '25px' : '10px',
    paddingRight: larLand ? '50px' : '20px',
    color: '#FFFFFF',
    alignSelf: larPort ? 'flex-start' : 'unset',
    justifyContent:
      minPort ? 'space-around' :
      minLand ? 'space-evenly' :
      //larPort ? 'space-around' :
      larPort ? 'space-between' :
      //larLand ? 'space-evenly' :
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

const lessThan = ({ minPort, minLand, medPort, medLand, larPort }: genII) => {
  return {
    ...noSelect,
    background: 'darkgray',
    fontSize: minPort ? '6vw' : minLand ? '2.8vw' : medPort ? '45px' : medLand ? '30px' : larPort ? '54px' : '54px', // fontSize
    //marginRight: minPort ? '1.5vw' : minLand ? '1.4vw' : larPort ? '1.1vw' : '1.1vw',
    width: medPort ? '70px' : medLand ? '40px' : larPort ? '30px' : '27px', // width
    height: medPort ? '70px' : medLand ? '40px' : larPort ? '80px' : '80px', // height
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

const name = ({ minPort, minLand, medPort, medLand, larPort }: nameI) => {
  return {
    ...noSelect,
    background: 'navy',
    //marginTop: '0.5vh',
    fontFamily: 'Allura',
    fontSize: minPort ? '7.5vw' : minLand ? '3.8vw' : medPort ? '50px' : medLand ? '27px' : larPort ? '60px' : '73px', // fontSize
    color: blue[600],
    fontWeight: 600,
    minWidth: medPort ? '330px' : medLand ? '180px' : larPort ? '390px' : '470px', // minWidth
    height: medPort ? '70px' : medLand ? '40px' : larPort ? '82px' : '100px', // height
    textAlign: 'center'
  }
}

const blink = ({ minPort, minLand, medPort, medLand, larPort }: genII) => {
  return {
    ...noSelect,
    //marginTop: '0.5vh',
    background: 'darkgray',
    width: medPort ? '70px' : medLand ? '40px' : larPort ? '15px' : '11px', // width
    height: medPort ? '70px' : medLand ? '40px' : larPort ? '80px' : '80px', // height
    fontSize: minPort ? '6vw' : minLand ? '2.8vw' : medPort ? '45px' : medLand ? '30px' : larPort ? '54px' : '54px', // fontSize
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

const greaterThan = ({ minPort, minLand, medPort, medLand, larPort }: genII) => {
  return {
    ...noSelect,
    background: 'yellow',
    fontSize: minPort ? '6vw' : minLand ? '2.8vw' : medPort ? '45px' : medLand ? '30px' : larPort ? '54px' : '54px', // fontSize
    //marginLeft: minPort ? '0.2vw' : minLand ? '1.0vw' : larPort ? '0.8vw' : '0.3vw',
    width: medPort ? '70px' : medLand ? '40px' : larPort ? '60px' : '55px', // width
    height: medPort ? '70px' : medLand ? '40px' : larPort ? '80px' : '80px', // height
    textAlign: 'center'
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

const textItem = ({ staticRefWidth, darkMode, minPort, minLand, medLand, medPort, larPort, larLand }: textItemI) => {
  return {
    ...noDeco, ...noSelect, ...mix,
    background: 'none',
    marginLeft: `10px`,
    marginRight: `10px`,
    minWidth: 'max-content',
    color: darkMode ? '#b5b3b3' : '#FFFFFF',
    fontSize: minPort ? '3.2vw' : minLand ? '1.3vw' : medPort ? '20px' : medLand ? '18px' : larPort ? '23px' : `23px`, // fontSize
    fontFamily: 'Roboto',
    fontWeight: '600'
  }
}

export {
  background, mainLeft, lessThan, name,
  blink, greaterThan, mainRight, textItem
}