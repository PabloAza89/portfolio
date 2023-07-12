import {
  flex, relative, absolute, column, jcfe,
  aic, asc, jcc, noSelect, jcse, row, jcfs,
} from './CommonsSX';
import $ from 'jquery';

export const doShake = () => {
  $('.nameInput')
    .css(`animationName`,`shakeLeftRight`)
    .css(`animationDuration`,`2.5s`)
    .css(`animationIterationCount`,`infinite`)
}

export const doNotShake = () => {
  $('.nameInput')
    .stop()
    .css(`animationName`,`none`)
    .css(`animationDuration`,`0s`)
    .css(`animationIterationCount`,`none`)
}

interface topBottomHelperI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
}

export const topBottomHelper = ({ minPort, minLand, medPort, medLand, larPort, larLand }: topBottomHelperI) => {
  return {
    ...relative,
    //background: 'blue',
    display: larPort || larLand ? 'flex' : 'none',
    width: '20px',
    minHeight: minPort || minLand ? '1px' : medPort || medLand ? '1px' : '100px',
  }
}

interface mainContainerI {
  larPort: boolean,
  larLand: boolean,
}

export const mainContainer = ({ larPort, larLand }: mainContainerI) => {
  return {
    ...aic,
    //background: 'darkred',
    display: larPort || larLand ? 'flex' : 'contents',
    minHeight: '560px',
    height: '65vh',
    width: '100%',
    justifyContent: larPort || larLand ? 'space-between' : 'center',
  }
}

interface leftRightHelperI {
  larPort: boolean,
  larLand: boolean
}

export const leftRightHelper = ({ larPort, larLand }: leftRightHelperI) => {
  return {
    display: larPort || larLand ? 'flex' : 'none',
    //background: 'darkblue',
    minHeight: '560px',
    height: '65vh',
    minWidth: '44px'
  }
}

interface backgroundI {
  larPort: boolean,
  larLand: boolean
}

export const background = ({ larPort, larLand }: backgroundI) => {
  return {
    ...flex, ...column, ...aic,
    //background: 'red',
    width: 'calc(100vw - 12px)',
    height: 'calc(100vh - 12px)',
    justifyContent: larPort || larLand ? 'space-between' : 'center',
  }
}

interface formContainerI {
  darkMode: boolean,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
}

export const formContainer = ({ minPort, minLand, medPort, medLand, darkMode }: formContainerI) => { // formContainer
  return {
    ...flex, ...column, ...jcse, ...relative,
    alignContent: 'space-evenly',
    top: minLand || medLand ? '-4vh' : '0vh',
    borderRadius: `4px`,
    background: darkMode ? '#325b5c' : '#5f9ea0',
    opacity: '0.95',
    minWidth: minPort ? '85vw' : minLand ? '70vw' : medPort ? '60vw' : medLand ? '53vw' : '400px', // minWidth
    width: minPort ? '85vw' : minLand ? '70vw' : medPort ? '60vw' : medLand ? '53vw' : '53vw', // width
    minHeight: minPort ? '70vh' : minLand ? '76vh' : medPort ? '55vh' : medLand ? '65vh' : '560px', // minHeight
    height: minPort ? '70vh' : minLand ? '76vh' : medPort ? '55vh' : medLand ? '65vh' : '65vh', // height
    maxHeight: minPort ? '70vh' : minLand ? '76vh' : medPort ? '55vh' : medLand ? '65vh' : '600px', // maxHeight
    flexFlow: minLand || medLand ? 'wrap' : 'none'
  }
}

interface labelStyleI {
  darkMode: boolean
}

export const labelStyle = ({ darkMode }: labelStyleI) => {
  return {
    ...noSelect,
    background: darkMode ? '#615f5f' : 'white',
    padding: '0px 8px',
        left: '-5px',
    borderRadius: `4px`,
    color: darkMode ? 'white' : 'rgba(0, 0, 0, 0.6)',
  }
}

interface inputStyleNameI {
  darkMode: boolean,
  length: number,
}

export const inputStyleName = ({ darkMode, length }: inputStyleNameI) => {
  return {
    color: length > 70 ? 'red' : darkMode ? 'white' : 'rgba(0, 0, 0, 0.87)',
  }
}

interface inputStyleTextI {
  darkMode: boolean,
}

export const inputStyleText = ({ darkMode }: inputStyleTextI) => {
  return {
    color: darkMode ? 'white' : 'rgba(0, 0, 0, 0.87)',
  }
}

interface nameBoxI {
  darkMode: boolean,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
}

export const nameBox = ({ minPort, minLand, medPort, medLand, darkMode }: nameBoxI) => {
  return {
    ...asc, ...flex, ...relative,
    //background: 'yellow',
    background: darkMode ? '#615f5f' : 'white',
    opacity: '0.90',
    borderRadius: `4px`,
    minWidth: minPort ? '75vw' : minLand ? '64vw' : medPort ? '52vw' : medLand ? '47vw' : '340px',
    width: minPort ? '75vw' : minLand ? '64vw' : medPort ? '52vw' : medLand ? '47vw' : '47vw',
    fieldset: {
      border: '2px solid rgb(190, 190, 174)',
    }
  }
}

interface messageBoxI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  darkMode: boolean,
}

export const messageBox = ({ minPort, minLand, medPort, medLand, darkMode }: messageBoxI) => {
  return {
    ...asc, ...flex, ...relative,
    //background: 'yellow',
    background: darkMode ? '#615f5f' : 'white',
    opacity: '0.90',
    borderRadius: '4px',
    minWidth: minPort ? '75vw' : minLand ? '64vw' : medPort ? '52vw' : medLand ? '47vw' : '340px',
    width: minPort ? '75vw' : minLand ? '64vw' : medPort ? '52vw' : medLand ? '47vw' : '47vw',
    fieldset: {
      border: '2px solid rgb(190, 190, 174)'
    }
  }
}

interface lengthContainerI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean,
}

export const lengthContainer = ({ minPort, minLand, medPort, medLand, larPort, larLand }: lengthContainerI) => {
  return {
    ...flex, ...row, ...jcc, ...aic,
    position: minLand || medLand ? 'relative' : 'absolute',
    marginLeft: minPort ? '5vw' : medPort ? '4.3vw' : larPort || larLand ? 'max(30px, 3vw);' : 'none',
    top: minPort ? '4.5%' : medPort ? '6%' : larPort || larLand ? '4.5%' : 'none', // none === minLand || medLand
    //background: 'yellow',
    fontWeight: 500,
    width: minPort ? '23vw' : minLand ? '11vw' : medPort ? '13vw' : medLand ? '9vw' : '100px',
    order: minLand || medLand ? 1 : 0,
  }
}

interface leftCounterI {
  length: number,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
}

export const leftCounter = ({ length, minPort, minLand, medPort, medLand }: leftCounterI) => {
  return {
    ...flex, ...relative, ...jcfe,
    top: minLand || medLand ? '0%' : '4%',
    //background: 'gray',
    color: length > 1250 ? 'red' : 'white',
    fontWeight: 500,
    fontSize: minPort ? '3.4vw' : minLand ? '1.58vw' : medPort ? '1.9vw' : medLand ? '1.32vw' : '16px',
    width: '50%',
  }
}

interface rightCounterI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
}

export const rightCounter = ({ minPort, minLand, medPort, medLand }: rightCounterI) => {
  return {
    ...flex, ...relative, ...jcfs,
    top: minLand || medLand ? '0%' : '4%',
    //background: 'lightgray',
    color: 'white',
    fontWeight: 500,
    fontSize: minPort ? '3.4vw' : minLand ? '1.58vw' : medPort ? '1.9vw' : medLand ? '1.32vw' : '16px',
    width: '50%',
  }
}

interface clearButtonI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
}

export const clearButton = ({ minPort, minLand, medPort, medLand, larPort, larLand }: clearButtonI) => { // clearButton
  return {
    ...flex, ...relative,
    color: 'white',
    background: 'gray',
    alignSelf: 'flex-end',
    padding: '0px !important',
    lineHeight: 'unset',
    marginRight: minPort ? '5vw' : medPort ? '4.3vw' : larPort || larLand ? 'max(30px, 3vw);' : 'none',
    ':hover': { backgroundColor: 'gray', webkitFilter: 'brightness(.95)', 'filter': 'brightness(.95)'},
    fontSize: minPort ? '3.4vw' : minLand ? '1.58vw' : medPort ? '1.9vw' : medLand ? '1.32vw' : '16px', // fontSize
    width: minPort ? '20vw' : minLand ? '11vw' : medPort ? '12vw' : medLand ? '9vw' : '90px', // width
    height: minPort ? '5.8vw' : minLand ? '3.1vw' : medPort ? '3.9vw' : medLand ? '2.8vw' : '32px', // height
    order: minLand || medLand ? 1 : 0,
  }
}

interface sendMessageButtonI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
}

export const sendMessageButton = ({ minPort, minLand, medPort, medLand }: sendMessageButtonI) => { // sendMessageButton
  return {
    ...flex, ...relative, ...asc,
    padding: '0px !important',
    lineHeight: 'unset',
    color: 'white',
    background: 'gray',
    ':hover': { backgroundColor: 'gray', webkitFilter: 'brightness(.95)', 'filter': 'brightness(.95)'},
    fontSize: minPort ? '3.4vw' : minLand ? '1.58vw' : medPort ? '1.9vw' : medLand ? '1.32vw' : '16px', // fontSize
    width: minPort ? '40vw' : minLand ? '19vw' : medPort ? '22vw' : medLand ? '17vw' : '160px', // width
    height: minPort ? '5.8vw' : minLand ? '3.1vw' : medPort ? '3.9vw' : medLand ? '2.8vw' : '32px', // height
    order: minLand || medLand ? 2 : 0,
  }
}

export const loadingText = () => {
  return {
    fontSize: '12px',
    //color: 'white',
    color: 'black',
    fontWeight: '900',
    animation: 'flickerAnimation 1.2s infinite',
    '@keyframes flickerAnimation': {
      '0%': { opacity: 1 },
      '50%': { opacity: 0 },
      '100%': { opacity: 1 }
    },
  }
}

interface messageLoadingSpinnerI {
  show: boolean
}

export const messageLoadingSpinner = ({ show }: messageLoadingSpinnerI) => {
  return {
    ...absolute, ...jcc, ...aic,
    display: show ? 'flex' : 'none',
    //display: 'flex',
    alignContent: 'center',
    width: '100%',
    height: '100px',
    zIndex: 1000,
   'div': {
      ...absolute,
      boxSizing: 'border-box',
      display: 'block',
      width: '150px',
      height: '150px',
      margin: '8px',
      border: '8px solid #fff',
      borderRadius: '50%',
      animation: 'lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite',
      //borderColor: '#fff transparent transparent transparent',
      borderColor: 'black transparent transparent transparent',
    },
   'div:nth-of-type(1)': {
      animationDelay: '-0.45s'
    },
     'div:nth-of-type(2)': {
      animationDelay: '-0.3s'
    },
    'div:nth-of-type(3)': {
      animationDelay: '-0.15s'
    },
    '@keyframes lds-ring': {
      '0%': {
        transform: 'rotate(0deg)'
      },
      '100%': {
        transform: 'rotate(360deg)'
      }
    }
  }
}