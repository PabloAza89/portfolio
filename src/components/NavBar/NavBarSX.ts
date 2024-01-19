import { blue } from '@mui/material/colors';
import {
  flex,
  row, aic, asc, jcc,
  noDeco, mix, noSelect
} from '../../styles/CommonsSX';

interface genI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
}

export const background = ({ minPort, minLand, medPort, medLand, larPort, larLand }: genI) => { // background
  return {
    /* ...flex, */
    /* background: 'blue', */ /* DEV */
    //flexDirection: minPort || medPort || larPort ? 'column' : 'row',
    flexDirection: 'row',
    paddingTop: '10px',
    color: '#FFFFFF',
    top: '0px',
    /* height: '30%', */
    //minWidth: minPort || medPort ? 'none' : minLand || medLand ? 'none' : larPort ? '526px' : '677px', // minWidth
    //minHeight: minPort || medPort ? '17vw' : minLand ? '5vw' : medLand ? '70px' : larPort ? '127px' : '100px', // minHeight
    //height: minPort || medPort ? '17vw' : minLand ? '5vw' : medLand ? '70px' : larPort ? '127px' : '100px', //height
    //justifyContent: minLand || minLand || medLand || larLand ? 'space-between' : 'none',
    flexWrap: 'wrap',
    //justifyContent: 'center',
    //justifyContent: 'space-between',
    justifyContent: 'space-around',
    display: 'flex',
    position: 'relative',
    /* position: 'absolute', */
    /* position: 'sticky', */ /*  */
    /* top: '-50px', */ /*  */
    /* top: '0px', */ /*  */
    /* zIndex: '4000', */
    /* mixBlendMode: 'difference' */
    /* mixBlendMode: 'difference', */
    /* boxShadow: "0 0 .5em red" */
    /* mixBlendMode: 'difference', */
    /* mixBlendMode:  */
    /* isolation: 'isolate', */
    /* zIndex: '3' */
    /* zIndex: 4 */
  }
}

export const mainLeft = ({ minPort, minLand, medPort, medLand, larPort, larLand }: genI) => { // mainLeft
  return {
    ...flex, ...row, ...aic, ...jcc,
    position: 'relative',
    /* background: 'red', */ /* DEV */
    //width: '100%',
    width: '500px',
    minWidth: '500px',
    maxWidth: '500px',
    //minWidth: minPort || minLand || medPort || medLand ? '30vw' : larPort ? '491px' : '580px', // minWidth
    //height: minPort || medPort ? '11vw' : minLand ? '5vw' : medLand ? '70px' : '82px', // height
    color: '#FFFFFF',
    //'alignSelf': minPort || minLand || medPort || larPort ? 'start' : 'center',
    alignSelf: 'center',
    //marginLeft: minPort || minLand || medPort || medLand ? '2vw' : larPort || larLand ? '25px' : 'none',
    //marginBottom: '-10px',
    /* mixBlendMode: 'difference' */
  }
}

interface mainRightI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
}

export const mainRight = ({ minPort, minLand, medPort, medLand, larPort, larLand }: mainRightI) => { // mainRight
  return {
    ...asc, ...flex, ...aic,
    /* background: 'yellow', */ /* DEV */
    overflow: 'auto',
    width: 'min(100%, 800px)',
    //width: minLand ? '55vw' : minPort || medPort ? 'calc(100vw - 12px)' : medLand ? '60vw' : larPort ? '93vw' : '50vw', // width
    minHeight: minPort || medPort ? '6vw' : minLand ? '5vw' : medLand ? '70px' : '45px', // minHeight
    //paddingLeft: minPort || minLand || medPort ? '0px' : larLand ? '20px' : '20px',
    //paddingRight: medLand ? '35px' : larLand ? '50px' : '20px',
    color: '#FFFFFF',
    //alignSelf: larPort ? 'flex-start' : 'unset',
    justifyContent:
      minPort || minLand || minLand || medPort ? 'space-around' :
      larPort ? 'space-between' :
      'space-between',
    /* mixBlendMode: 'difference' */
    /* isolation: 'auto', */
    /* isolation: 'isolate', */
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
    //fontSize: minPort || medPort  ? '5vw' : minLand || medLand ? '2.3vw' : '54px', // fontSize
    fontSize: 'min(8vw, 54px)',
    width: minPort || medPort ? '6vw' : minLand || medLand ? '3.5vw' : '38px', // width
    //height: minPort || medPort ? '8vw' : minLand || medLand ? '3.5vw' :'80px', // height
    textAlign: 'center',
    mixBlendMode: 'difference',
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
    display: 'flex',
    position: 'relative',
    //background: 'navy',
    fontFamily: 'Allura',
    //fontSize: minPort || medPort  ? '7vw' : minLand || medLand ? '3.4vw' : '60px', // fontSize
    fontSize: 'min(10vw, 60px)',
    color: blue[600],
    fontWeight: 600,
    //height: minPort || medPort ? '10vw' : minLand || medLand ? '4.7vw' : '82px', // height
    textAlign: 'center',
    //top: '4px',
    top: 'min(0.7vw, 7px)',
    /* mixBlendMode: 'difference', */
    /* isolation: 'auto', */
    /* isolation: 'isolate', */
    /* isolation: 'isolate', */
    /* zIndex: '6000 !important' */
    /* isolation: 'isolate', */
   /*  zIndex: '6000 !important', */
  }
}

export const blink = ({ minPort, minLand, medPort, medLand, larPort }: genII) => { // blink
  return {
    ...noSelect, ...mix,
    //background: 'darkgray',
    width: minPort || medPort ? '2vw' : minLand ||medLand ? '13px' : '11px', // width
    //height: minPort || medPort ? '8vw' : minLand ||medLand ? '3.5vw' : larPort ? '80px' : '80px', // height
    //fontSize: minPort || medPort  ? '5vw' : minLand || medLand ? '2.3vw' : larPort ? '54px' : '54px', // fontSize
    fontSize: 'min(8vw, 54px)',
    fontWeight: '300',
    animation: 'blink 1s linear infinite',
    '@keyframes blink': {
      '0%': { opacity: '0' },
      '49%': { opacity: '0' },
      '50%': { opacity: '1' }
    },
    textAlign: 'center',
    mixBlendMode: 'difference',
  }
}

export const greaterThan = ({ minPort, minLand, medPort, medLand, larPort }: genII) => { // greaterThan
  return {
    ...noSelect, ...mix,
    //background: 'yellow',
    //fontSize: minPort || medPort  ? '5vw' : minLand || medLand ? '2.3vw' : larPort ? '54px' : '54px', // fontSize
    fontSize: 'min(8vw, 54px)',
    width: minPort || medPort ? '6vw' : minLand || medLand ? '2.1vw' : '55px', // width
    //height: minPort || medPort ? '8vw' : minLand || medLand ? '3.5vw' : larPort ? '80px' : '80px', // height
    textAlign: 'center',
    mixBlendMode: 'difference',
  }
}

export const item = () => {
  return {
    transition: 'all .1s ease-in-out',
    //':hover': { transform: 'scale(1.05)' }
    //':hover': { fontSize: '110%' }
  }
}

interface textItemI {
  darkMode: boolean,
  minPort: boolean,
  minLand: boolean,
  medLand: boolean,
  medPort: boolean,
  larPort: boolean,
  larLand: boolean
}

export const textItem = ({ darkMode, minPort, minLand, medLand, medPort, larPort, larLand }: textItemI) => { // textItem
  return {
    ...noDeco, ...noSelect, ...mix,
    //background: 'red',
    marginLeft: larPort || larLand ? `10px` : '0px',
    marginRight: larPort || larLand ? `10px` : '0px',
    minWidth: 'max-content',
    color: darkMode ? '#b5b3b3' : '#FFFFFF',
    //fontSize: minPort || medPort ? '3vw' :  minLand || medLand ? '1.8vw' : larPort ? '23px' : `23px`, // fontSize
    fontSize: `min(3.7vw, 23px)`,
    fontFamily: 'Roboto',
    fontWeight: '600',
    mixBlendMode: 'difference',
    /* mixBlendMode: 'difference' */
    /* mixBlendMode: 'difference !important' */
  }
}