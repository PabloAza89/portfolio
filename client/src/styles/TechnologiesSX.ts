import {
  aic, asc, column, mix, flex, jcc,
  jcsb, noSelect, relative, row, noDeco,
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
    ...asc, ...flex, ...aic, ...relative,
    //background: 'blue',
    overflow: 'auto',
    maxWidth: minPort ? '100%' : medPort ? '85%' : minLand || medLand ? '100%' : larPort ? 'calc(100vw - 12px)' : larLand && currentWidth <= 655 ? 'calc(100vw - 67px)' : '100%', // width
    width: minPort ? '100%' : medPort ? '85%' : minLand || medLand ? '100%' : larPort ? 'calc(100vw - 12px)' : larLand && currentWidth <= 655 ? 'calc(100vw - 67px)' : '100%', // width
    color: '#FFFFFF',
    alignSelf: 'flex-start',
    justifyContent:
      minPort ? 'space-around' :
      minLand ? 'space-evenly' :
      larPort ? 'space-between' :
      'space-between',
    background: 'inherit',
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
    ...flex, ...column, ...relative, ...aic, ...noDeco,
    //background: 'yellow',
    border: 'none',
    width: minLand ? '7vw' : minPort || medPort ? '70px' : medLand ? '7vw' : larPort ? '111px' : '100px', // width
    //zIndex: 20004,
    background: 'inherit',
    //zIndex: 2000,
    color: 'white',
    transition: 'all .2s ease-in-out',
    ':hover': { transform: 'scale(1.1)' }
    
    //mixBlendMode: 'difference',
    //transition: 'all .2s ease-in-out',
    //':hover': { transform: 'scale(1.1)', color: 'white', mixBlendMode: 'difference'}
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
    ...asc, ...relative, ...flex,
    border: 'none',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${url})`,
    width: minPort ? '10vw' : minLand ? '3.5vw' : medPort ? '70px' : medLand ? '5vw' : larPort ? '111px' : '100px', // width
    height: minPort ? '10vw' : minLand ? '3.5vw' : medPort ? '45px' : medLand ? '5vw' : larPort ? '55px' : '65px' , // height
    backgroundSize: 'contain',
    //transition: 'all .2s ease-in-out',
    //':hover': { transform: 'scale(1.1)' }
    //mixBlendMode: 'none',
    
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
    ...noSelect, ...flex, ...relative,
    fontSize: minPort ? '2.9vw' : minLand ? '2.40vh' : medPort ? '12px' : medLand ? '1.3vw' : larPort ? '14px' : '16px', // fontSize
    //color: darkMode ? '#b5b3b3' : '#FFFFFF',
    color: 'white',
    fontWeight: 600,
    background: 'inherit',
    mixBlendMode: 'difference',
    //transition: 'all .2s ease-in-out',
    //':hover': { transform: 'scale(1.1)' }
    
    // ':hover:after': {
    //   mixBlendMode: 'difference',
    // }
    
    //color: '#000000',
    //zIndex: 20005,
    //transition: 'all .2s ease-in-out',
    //transform: 'translate3d(0, 0, 0)',
    ':hover::before': { mixBlendMode: 'difference' },
    ':hover::after': { mixBlendMode: 'difference' },
    

  }
}

export {
  iconBox, iconMedia, title, background
}