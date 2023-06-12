import { useSelector } from 'react-redux';
import {
  flex, noSelect, row, column, asc,
  jsc, jcse, jcc
} from './CommonsSX';

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
    //background: 'blue',
    display: larPort || larLand ? 'flex' : 'none',
    width: '20px',
    minHeight: minPort || minLand ? '1px' : medPort || medLand ? '1px' : '100px',
    position: 'relative'
  }
}

interface mainContainerI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean,
}

export const mainContainer = ({ minPort, minLand, medPort, medLand, larPort, larLand }: mainContainerI) => {
  return {
    //background: 'darkred',
    display: larPort || larLand ? 'flex' : 'contents',
    minHeight: '560px',
    height: '65vh',
    width: '100%',
    alignItems: 'center',
    justifyContent: larPort || larLand ? 'space-between' : 'center',
  }
}

interface leftRightHelperI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
}

export const leftRightHelper = ({ minPort, minLand, medPort, medLand, larPort, larLand }: leftRightHelperI) => {
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
    //background: 'red',
    display: 'flex',
    width: 'calc(100vw - 12px)',
    height: 'calc(100vh - 12px)',
    flexDirection: 'column',
    justifyContent: larPort || larLand ? 'space-between' : 'center',
    alignItems: 'center'
  }
}

interface formContainerI {
  darkMode: boolean,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
}

export const formContainer = ({ minPort, minLand, medPort, medLand, larPort, larLand, darkMode }: formContainerI) => { // formContainer
  return {
    ...flex, ...column,
    justifyContent: 'space-evenly',
    alignContent: 'space-evenly',
    top: minLand || medLand ? '-4vh' : '0vh',
    position: 'relative',
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
    background: darkMode ? '#615f5f' : 'white',
    padding: '0px 8px',
    left: '-5px',
    borderRadius: `4px`,
    color: darkMode ? 'white' : 'none',
  }
}

interface inputStyleI {
  darkMode: boolean
}

export const inputStyle = ({ darkMode }: inputStyleI) => {
  return {
    color: darkMode ? 'white' : 'none',
  }
}

interface nameBoxI {
  darkMode: boolean,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
}

export const nameBox = ({ minPort, minLand, medPort, medLand, larPort, larLand, darkMode }: nameBoxI) => {
  return {
     ...asc,
    display: 'flex',
    position: 'relative',
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
  larPort: boolean,
  larLand: boolean
  darkMode: boolean,
}

export const messageBox = ({ minPort, minLand, medPort, medLand, larPort, larLand, darkMode }: messageBoxI) => {
  return {
    ...asc,
    display: 'flex',
    position: 'relative',
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

interface clearButtonI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
  location: string
}

export const clearButton = ({ minPort, minLand, medPort, medLand, larPort, larLand, location }: clearButtonI) => { // clearButton
  return {
    display: 'flex',
    position: 'relative',
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
  larPort: boolean,
  larLand: boolean
}

export const sendMessageButton = ({ minPort, minLand, medPort, medLand, larPort, larLand,  }: sendMessageButtonI) => { // sendMessageButton
  return {
    display: 'flex',
    position: 'relative',
    alignSelf: 'center',
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
    mixBlendMode: 'difference',
    fontSize: '12px',
    color: 'white',
    fontWeight: '700',
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
    //background: 'red',
    display: show ? 'flex' : 'none',
    position: 'absolute',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100px',
    zIndex: 900,
    mixBlendMode: 'difference',
   'div': {
      boxSizing: 'border-box',
      display: 'block',
      position: 'absolute',
      width: '150px',
      height: '150px',
      margin: '8px',
      border: '8px solid #fff',
      borderRadius: '50%',
      animation: 'lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite',
      borderColor: '#fff transparent transparent transparent',
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