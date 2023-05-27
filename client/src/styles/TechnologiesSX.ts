import {
  aic, asc, column, mix, flex, jcc,
  jcsb, noSelect, relative, row
} from './CommonsSX';

interface backgroundI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
}

const background = ({ minPort, minLand, medPort, medLand, larPort, larLand }: backgroundI) => { // background
  return {
    order: medPort || larPort ? '1' : '0',
    ...asc, ...flex, ...aic,
    background: 'blue',
    overflow: 'auto',
    //minWidth: minPort ? '96vw' : minLand ? '55vw' : medPort ? 'calc(100vw - 12px)' : larPort ? '96vw' : '600px', // minWidth
    width: minPort ? '96vw' : minLand ? '55vw' : medPort ? 'calc(100vw - 12px)' : larPort ? 'calc(100vw - 12px)' : 'calc(100vw - 12px)', // width
    minHeight: medPort || medLand ? '70px' : larPort ? '45px' : `89px`, // minHeight
    //paddingLeft: larLand ? '5px' : '20px',
    //marginRight: larPort ? 'calc(111px + 3px)' : 'null',
    //paddingRight: larLand ? '5px' : '20px',
    color: '#FFFFFF',
    alignSelf: larPort ? 'flex-start' : 'flex-start',
    justifyContent:
      minPort ? 'space-around' :
      minLand ? 'space-evenly' :
      //larPort ? 'space-around' :
      larPort ? 'space-between' :
      //larLand ? 'space-evenly' :
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

const iconBox = ({ minPort, minLand, medPort, medLand, larPort }: iconBoxI) => {
  return {
    ...flex, ...column, ...relative, ...aic,
    background: 'yellow',
    border: 'none',
    width: minPort ? '15vw' : minLand ? '7vw' : medPort ? '70px' : medLand ? '7vw' : larPort ? '111px' : '100px'
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

const iconMedia = ({ url, minPort, minLand, medPort, medLand, larPort }: iconMediaI) => {
  return {
    ...asc, ...relative,
    border: 'none',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${url})`,
    width: minPort ? '10vw' : minLand ? '3.5vw' : medPort ? '70px' : medLand ? '5vw' : larPort ? '111px' : '100px',
    height: minPort ? '10vw' : minLand ? '3.5vw' : medPort ? '45px' : medLand ? '5vw' : larPort ? '65px' : '65px' ,
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

const title = ({ darkMode, minPort, minLand, medPort, medLand, larPort }: titleI) => {
  return {
    ...noSelect, ...mix,
    fontSize: minPort ? '2.9vw' : minLand ? '2.40vh' : medPort ? '12px' : medLand ? '1.3vw' : larPort ? '16px' : '16px',
    border: 'none',
    color: darkMode ? '#b5b3b3' : '#FFFFFF',
    fontWeight: 600
  }
}

export {
  iconBox, iconMedia, title, background
 }