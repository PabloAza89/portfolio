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
    paddingTop: minLand ? '2px' : '10px',
    color: '#FFFFFF',
    minWidth: minPort || medPort ? 'none' : minLand || medLand ? 'none' : larPort ? 'calc(100vw - 12px)' : '677px', // minWidth 
    minHeight: minPort || medPort ? '17vw' : minLand ? '5vw' : medLand ? '70px' : larPort ? '127px' : '100px', // minHeight
    height: minPort || medPort ? '17vw' : minLand ? '5vw' : medLand ? '70px' : larPort ? '127px' : '100px', //height
    justifyContent: minLand || minLand || medLand || larLand ? 'space-between' : 'none'
  }
}

const mainLeft = ({ staticRefWidth, minPort, minLand, medPort, medLand, larPort, larLand }: genI) => { // mainLeft
  return {
    ...flex, ...row, ...aic,
    background: 'red',
    alignItems: 'center',
    minWidth: minPort || minLand || medPort || medLand ? '30vw' : larPort ? '82px' : '580px', // minWidth
    height: minPort || medPort ? '11vw' : minLand ? '5vw' : medLand ? '70px' : larPort ? '82px' : '100px', // height
    color: '#FFFFFF',
    'alignSelf': minPort || minLand || medPort || larPort ? 'start' : 'center',
    marginLeft: minLand || medPort || medLand ? '1vw' : larPort || larLand ? '25px' : 'none',
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
    width: minLand ? '55vw' : minPort || medPort ? 'calc(100vw - 12px)' : medLand ? '60vw' : larPort ? '93vw' : '50vw', // width
    minHeight: minPort || medPort ? '6vw' : minLand ? '5vw' : medLand ? '70px' : larPort ? '45px' : `100px`, // minHeight
    paddingLeft: minPort || minLand || medPort ? 'none' : larLand ? '20px' : '20px',
    //paddingRight: larLand ? '25px' : '10px',
    paddingRight: larLand ? '50px' : '20px',
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

const lessThan = ({ minPort, minLand, medPort, medLand, larPort }: genII) => { // lessThan
  return {
    ...noSelect,
    background: 'darkgray',
    fontSize: medPort  ? '5vw' : minLand || medLand ? '2.3vw' : larPort ? '54px' : '54px', // fontSize
    //marginRight: minPort ? '1.5vw' : minLand ? '1.4vw' : larPort ? '1.1vw' : '1.1vw',
    width: minPort || medPort ? '3vw' : minLand || medLand ? '20px' : larPort ? '30px' : '27px', // width
    height: minPort || medPort ? '8vw' : minLand || medLand ? '3.5vw' : larPort ? '80px' : '80px', // height
    //height: '100%', // height
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

const name = ({ minPort, minLand, medPort, medLand, larPort }: nameI) => { // name
  return {
    ...noSelect,
    background: 'navy',
    fontFamily: 'Allura',
    fontSize: minPort || medPort  ? '7vw' : minLand || medLand ? '3.4vw' : larPort ? '60px' : '73px', // fontSize
    color: blue[600],
    fontWeight: 600,
    //minWidth: medPort ? '330px' : medLand ? '175px' : larPort ? '390px' : '470px', // minWidth
    height: minPort || medPort ? '10vw' : minLand || medLand ? '4.7vw' : larPort ? '82px' : '100px', // height
    //height: '100%', // height
    textAlign: 'center'
  }
}

const blink = ({ minPort, minLand, medPort, medLand, larPort }: genII) => { // blink
  return {
    ...noSelect,
    //marginTop: '0.5vh',
    background: 'darkgray',
    width: minPort || medPort ? '2vw' : minLand ||medLand ? '13px' : larPort ? '15px' : '11px', // width
    height: minPort || medPort ? '8vw' : minLand ||medLand ? '3.5vw' : larPort ? '80px' : '80px', // height
    //height: '100%', // height
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

const greaterThan = ({ minPort, minLand, medPort, medLand, larPort }: genII) => { // greaterThan
  return {
    ...noSelect,
    background: 'yellow',
    fontSize: minPort || medPort  ? '5vw' : minLand || medLand ? '2.3vw' : larPort ? '54px' : '54px', // fontSize
    //marginLeft: minPort ? '0.2vw' : minLand ? '1.0vw' : larPort ? '0.8vw' : '0.3vw',
    width: minPort || medPort ? '6vw' : minLand || medLand ? '30px' : larPort ? '60px' : '55px', // width
    height: minPort || medPort ? '8vw' : minLand || medLand ? '3.5vw' : larPort ? '80px' : '80px', // height
    //height: '100%', // height
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

const textItem = ({ staticRefWidth, darkMode, minPort, minLand, medLand, medPort, larPort, larLand }: textItemI) => { // textItem
  return {
    ...noDeco, ...noSelect, ...mix,
    background: 'none',
    marginLeft: `10px`,
    marginRight: `10px`,
    minWidth: 'max-content',
    color: darkMode ? '#b5b3b3' : '#FFFFFF',
    fontSize: minPort || medPort ? '3vw' :  minLand || medLand ? '1.8vw' : larPort ? '23px' : `23px`, // fontSize
    fontFamily: 'Roboto',
    fontWeight: '600'
  }
}

export {
  background, mainLeft, lessThan, name,
  blink, greaterThan, mainRight, textItem
}