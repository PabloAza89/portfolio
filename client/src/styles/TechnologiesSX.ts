import {
  flex, relative, absolute, column,
  aic, asc, jcc, jcfe,
  noDeco, mix, noSelect
} from './CommonsSX';
import $ from 'jquery';

interface arrayI {
  id: number,
}

export const hover = (array: arrayI[]) => {
  array.forEach(e => {
    $(`.container${e.id}`).on("mouseenter", function () {
      $(`.titleClass${e.id}`).css('transition', 'all .1s ease-in-out').css('transform', 'scale(1.1)')
      $(`.iconClass${e.id}`).css('transition', 'all .1s ease-in-out').css('transform', 'scale(1.1)')
    }).on("mouseleave", function () {
      $(`.titleClass${e.id}`).css('transition', 'all .1s ease-in-out').css('transform', 'scale(1)')
      $(`.iconClass${e.id}`).css('transition', 'all .1s ease-in-out').css('transform', 'scale(1)')
    })
  })
}

interface backgroundI {
  currentWidth: number,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
}

export const background = ({ currentWidth, minPort, minLand, medPort, medLand, larPort, larLand }: backgroundI) => { // background (DO NOT USE 'POSITION' !)
  return {
    order: minPort || medPort || larPort ? '1' : '0',
    ...asc, ...flex, ...aic,
    overflow: 'auto',
    width: minPort ? '100%' : medPort ? '85%' : minLand || medLand ? '100%' : larPort ? 'calc(100vw - 12px)' : larLand && currentWidth <= 655 ? 'calc(100vw - 67px)' : '100%', // width
    height: minPort ? 'calc(10vw + 4.5vw + 2%)' : minLand ? 'calc(4.5vw + 1.8vw + 2%)' : medPort ? 'calc(6vw + 3.5vw + 2%)' : medLand ? 'calc(5vw + 2vw + 2%)' : larPort ? 'calc(55px + 21px + 2%)' : 'calc(65px + 24px + 2%)',
    alignSelf: 'flex-start',
    justifyContent:
      minPort ? 'space-around' :
      minLand ? 'space-evenly' :
      larPort ? 'space-between' :
      'space-between',
  }
}

interface containerI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean
}

export const container = ({ minPort, minLand, medPort, medLand, larPort }: containerI) => { // iconBox
  return {
    ...flex, ...column, ...relative, ...noDeco,
    //background: 'red',
    width: minPort ? '15vw' : minLand ? '7vw' : medPort ? '12vw' : medLand ? '7vw' : larPort ? '111px' : '100px', // width
    height: minPort ? 'calc(10vw + 4.5vw)' : minLand ? 'calc(4.5vw + 1.8vw)' : medPort ? 'calc(6vw + 3.5vw)' : medLand ? 'calc(5vw + 2vw)' : larPort ? 'calc(55px + 21px)' : 'calc(65px + 24px)',
  }
}

interface iconBoxI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean
}

export const iconBox = ({ minPort, minLand, medPort, medLand, larPort }: iconBoxI) => { // iconBox
  return {
    ...flex, ...mix, ...column, ...relative, ...noDeco, ...jcfe,
    //background: 'yellow',
    border: 'none',
    width: minPort ? '15vw' : minLand ? '7vw' : medPort ? '12vw' : medLand ? '7vw' : larPort ? '111px' : '100px', // width
    height: minPort ? 'calc(10vw + 4.5vw)' : minLand ? 'calc(4.5vw + 1.8vw)' : medPort ? 'calc(6vw + 3.5vw)' : medLand ? 'calc(5vw + 2vw)' : larPort ? 'calc(55px + 21px)' : 'calc(65px + 24px)',
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

export const iconMedia = ({ url, minPort, minLand, medPort, medLand, larPort }: iconMediaI) => { // iconMedia
  return {
    ...absolute, ...flex,
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${url})`,
    //background: 'blue',
    width: minPort ? '15vw' : minLand ? '7vw' : medPort ? '12vw' : medLand ? '7vw' : larPort ? '111px' : '100px', // width
    height: minPort ? '10vw' : minLand ? '4.5vw' : medPort ? '6vw' : medLand ? '5vw' : larPort ? '55px' : '65px' , // height
    backgroundSize: 'contain',
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

export const title = ({ darkMode, minPort, minLand, medPort, medLand, larPort }: titleI) => { // title
  return {
    ...noSelect, ...flex, ...relative, ...jcc,
    fontSize: minPort ? '2.9vw' : minLand ? '2.40vh' : medPort ? '12px' : medLand ? '1.3vw' : larPort ? '14px' : '16px', // fontSize
    color: darkMode ? '#b5b3b3' : '#FFFFFF',
    fontWeight: 600,
    width: minPort ? '15vw' : minLand ? '7vw' : medPort ? '12vw' : medLand ? '7vw' : larPort ? '111px' : '100px', // width
    height: minPort ? '4.5vw' : minLand ? '1.8vw' : medPort ? '3.5vw' : medLand ? '2vw' : larPort ? '21px' : '24px',
    //background: 'red',
  }
}