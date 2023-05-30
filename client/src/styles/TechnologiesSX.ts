import {
  aic, asc, column, mix, flex, jcc,
  jcsb, noSelect, relative, row
} from './CommonsSX';

interface backgroundI {
  currentWidth: number,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
}

const background = ({ currentWidth, minPort, minLand, medPort, medLand, larPort, larLand }: backgroundI) => { // background
  return {
    order: minPort || medPort || larPort ? '1' : '0',
    ...asc, ...flex, ...aic,
    background: 'blue',
    overflow: 'auto',
    width: minLand ? '55vw' : minPort || medPort ? '100%' : medLand ? '100%' : larPort ? 'calc(100vw - 12px)' : larLand && currentWidth <= 655 ? 'calc(100vw - 67px)' : '100%', // width
    color: '#FFFFFF',
    alignSelf: larPort ? 'flex-start' : 'flex-start',
    justifyContent:
      minPort ? 'space-around' :
      minLand ? 'space-evenly' :
      larPort ? 'space-between' :
      'space-between',


  }
}

interface iconBoxI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean
}

const iconBox = ({ minPort, minLand, medPort, medLand, larPort }: iconBoxI) => { // iconBox
  return {
    ...flex, ...column, ...relative, ...aic,
    background: 'yellow',
    border: 'none',
    width: minLand ? '7vw' : minPort || medPort ? '70px' : medLand ? '7vw' : larPort ? '111px' : '100px' // width
  }
}

interface iconMediaI {
  url: string,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean
}

const iconMedia = ({ url, minPort, minLand, medPort, medLand, larPort }: iconMediaI) => { // iconMedia
  return {
    ...asc, ...relative,
    border: 'none',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${url})`,
    width: minPort ? '10vw' : minLand ? '3.5vw' : medPort ? '70px' : medLand ? '5vw' : larPort ? '111px' : '100px', // width
    height: minPort ? '10vw' : minLand ? '3.5vw' : medPort ? '45px' : medLand ? '5vw' : larPort ? '65px' : '65px' , // height
    backgroundSize: 'contain'
  }
}

interface titleI {
  darkMode: boolean,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean
}

const title = ({ darkMode, minPort, minLand, medPort, medLand, larPort }: titleI) => { // title
  return {
    ...noSelect, ...mix,
    fontSize: minPort ? '2.9vw' : minLand ? '2.40vh' : medPort ? '12px' : medLand ? '1.3vw' : larPort ? '16px' : '16px', // fontSize
    border: 'none',
    color: darkMode ? '#b5b3b3' : '#FFFFFF',
    fontWeight: 600
  }
}

export {
  iconBox, iconMedia, title, background
 }