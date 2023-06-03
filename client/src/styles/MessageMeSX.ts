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

const topBottomHelper = ({ minPort, minLand, medPort, medLand, larPort, larLand }: topBottomHelperI) => {
  return {
    background: 'blue',
    display: larPort || larLand ? 'flex' : 'none',
    width: '20px',
    minHeight: minPort || minLand ? '1px' : medPort || medLand ? '1px' : larPort || larLand ? '50px' : '50px',
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

const mainContainer = ({ minPort, minLand, medPort, medLand, larPort, larLand }: mainContainerI) => {
  return {
    background: 'darkred',
    display: larPort || larLand ? 'flex' : 'contents',
    minHeight: '400px',
    height: '65vh',
    width: '100%',
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

const leftRightHelper = ({ minPort, minLand, medPort, medLand, larPort, larLand }: leftRightHelperI) => {
  return {
    display: larPort || larLand ? 'flex' : 'none',
    background: 'darkblue',
    minHeight: '400px',
    height: '65vh',
    minWidth: '112px'
  }
}

interface backgroundI {
  larPort: boolean,
  larLand: boolean
}

const background = ({ larPort, larLand }: backgroundI) => {
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
  staticRefWidth: number,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
}

const formContainer = ({ minPort, minLand, medPort, medLand, larPort, larLand, staticRefWidth }: formContainerI) => { // formContainer
  return {
    ...flex, ...column,
    justifyContent: 'space-evenly',
    //justifyContent: 'center',
    alignContent: 'space-evenly',
    top: minLand || medLand ? '-4vh' : '0vh', //  DO NOT USE !
    position: 'relative',
    borderRadius: `4px`,
    background: '#5f9ea0',
    opacity: '0.95',
    minWidth: minPort ? '85vw' : minLand ? '70vw' : medPort ? '60vw' : medLand ? '53vw' : '400px', // minWidth
    width: minPort ? '85vw' : minLand ? '70vw' : medPort ? '60vw' : medLand ? '53vw' : '53vw', // width
    //minHeight: minPort ? '65vh' : minLand ? '76vh' : medPort ? '55vh' : '400px', // minHeight
    height: minPort ? '70vh' : minLand ? '76vh' : medPort ? '55vh' : '65vh', // height
    //maxHeight: larPort || larLand ? '950px' : 'calc(100vh - 12px)', // maxHeight
    flexFlow: minLand || medLand ? 'wrap' : 'none'
  }
}

interface nameBoxI {
  staticRefWidth: number,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
}

const nameBox = ({ minPort, minLand, medPort, medLand, larPort, larLand, staticRefWidth }: nameBoxI) => {
  return {
    /* ...flex, */ ...asc,
    display: 'flex',
    position: 'relative',
    background: 'yellow',
    opacity: '0.90',
    borderRadius: `4px`,
    //minWidth: larPort || larLand ? '350px' : 'none',
    width: minPort ? '75vw' : minLand ? '64vw' : medPort ? '52vw' : '47vw',

  }
}

interface messageBoxI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
  staticRefWidth: number
}

const messageBox = ({ minPort, minLand, medPort, medLand, larPort, larLand, staticRefWidth }: messageBoxI) => {
  return {
    ...asc,
    display: 'flex',
    position: 'relative',
    background: 'yellow',
    opacity: '0.90',
    borderRadius: '4px',
    width: minPort ? '75vw' : minLand ? '64vw' : medPort ? '52vw' : '47vw',
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

const clearButton = ({ minPort, minLand, medPort, medLand, larPort, larLand, location }: clearButtonI) => { // clearButton
  return {
    //...flex,
    display: 'flex',
    position: 'relative',
    color: 'white',
    background: 'gray',
    alignSelf: 'flex-end',
    padding: '0px !important',
    lineHeight: 'unset',
    marginRight: minPort ? '5vw' : medPort ? '6.5vw' : larPort || larLand ? '3vw' : 'none',
    
    ':hover': { backgroundColor: 'gray', webkitFilter: 'brightness(.95)', 'filter': 'brightness(.95)'},
    fontSize: minPort ? '3.4vw' : minLand ? '1.58vw' : medPort ? '1.9vw' : medLand ? '1.32vw' : '16px', // fontSize
    width: minPort ? '20vw' : minLand ? '11vw' : medPort ? '12vw' : medLand ? '9vw' : '90px', // width
    height: minPort ? '5.8vw' : minLand ? '3.1vw' : medPort ? '3.9vw' : medLand ? '2.8vw' : '160px', // height
    
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

const sendMessageButton = ({ minPort, minLand, medPort, medLand, larPort, larLand,  }: sendMessageButtonI) => { // sendMessageButton
  return {
    //...flex,
    display: 'flex',
    position: 'relative',
    alignSelf: 'center',
    padding: '0px !important',
    lineHeight: 'unset',
    color: 'white',
    background: 'gray',
    //position: 'relative',
    ':hover': { backgroundColor: 'gray', webkitFilter: 'brightness(.95)', 'filter': 'brightness(.95)'},
    fontSize: minPort ? '3.4vw' : minLand ? '1.58vw' : medPort ? '1.9vw' : medLand ? '1.32vw' : '16px', // fontSize
    width: minPort ? '40vw' : minLand ? '19vw' : medPort ? '22vw' : medLand ? '17vw' : '160px', // width
    height: minPort ? '5.8vw' : minLand ? '3.1vw' : medPort ? '3.9vw' : medLand ? '2.8vw' : '160px', // height
    
    order: minLand || medLand ? 2 : 0,
  }
}

export {
  nameBox, formContainer, background, topBottomHelper,
  clearButton, sendMessageButton, messageBox, mainContainer,
  leftRightHelper
}