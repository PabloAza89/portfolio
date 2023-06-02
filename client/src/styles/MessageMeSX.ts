import { useSelector } from 'react-redux';
import {
  flex, noSelect, row, column, asc,
  jsc, jcse, jcc
} from './CommonsSX';

const background = () => {
  return {
    background: 'red',
    display: 'flex',
    width: 'calc(100vw - 12px)',
    height: 'calc(100vh - 12px)',
    flexDirection: 'column',
    justifyContent: 'center',
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

const formContainer = ({ minPort, minLand, medPort, medLand, larPort, larLand, staticRefWidth }: formContainerI) => {
  return {
    ...flex, ...column,
    justifyContent: 'space-evenly',
    alignContent: 'space-evenly',
    top: minLand || medLand ? '-4vh' : '0vh',
    position: 'relative',
    borderRadius: `4px`,
    background: '#5f9ea0',
    opacity: '0.95',
    width: minPort ? '85vw' : minLand ? '70vw' : medPort ? '60vw' : medLand ? '53vw' : '76vw',
    height: minPort ? '65vh' : minLand ? '76vh' : medPort ? '55vh' : '76vh',
    flexFlow: minLand || medLand || larLand ? 'wrap' : 'none'
  }
}

interface nameBoxI {
  staticRefWidth: number,
  minPort: boolean,
  minLand: boolean
}

const nameBox = ({ minPort, minLand, staticRefWidth }: nameBoxI) => {
  return {
    ...flex, ...column, ...asc,
    color: 'white',
    backgroundColor: 'white',
    opacity: '0.90',
    width: minPort ? '75vw' : minLand ? '60vw' : '47vw',
    borderRadius: `4px`,
  }
}

interface messageBoxI {
  minPort: boolean,
  minLand: boolean,
  staticRefWidth: number
}

const messageBox = ({ minPort, minLand, staticRefWidth }: messageBoxI) => {
  return {
    ...flex, ...column, ...asc,
    color: 'white',
    background: 'white',
    opacity: '0.90',
    width: minPort ? '75vw' : minLand ? '60vw' : '47vw',
    borderRadius: `4px`,
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
    ...flex,
    color: 'white',
    backgroundColor: 'gray',
    alignSelf: minPort || medPort || larPort ? 'flex-end' : 'none',
    marginRight: minPort ? '5vw' : medPort ? '6.5vw' : medLand ? '3vw' : 'none',
    position: 'relative',
    ':hover': { backgroundColor: 'gray', webkitFilter: 'brightness(.95)', 'filter': 'brightness(.95)'},
    fontSize: minPort ? '3.4vw' : minLand ? '1.58vw' : medPort ? '1.9vw' : medLand ? '1.5vw' : '20px', // fontSize
    width: minPort ? '23vw' : minLand ? '11vw' : medPort ? '12vw' : medLand ? '9vw' : '110px', // width
    height: minPort ? '7vw' : minLand ? '3.5vw' : medPort ? '4.5vw' : medLand ? '3.2vw' : '45px',  // height
    order: minLand || medLand || larLand ? 1 : 0,
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
    ...flex,
    alignSelf: minPort || medPort || medLand ? 'center' : 'none',
    color: 'white',
    backgroundColor: 'gray',
    position: 'relative',
    ':hover': { backgroundColor: 'gray', webkitFilter: 'brightness(.95)', 'filter': 'brightness(.95)'},
    fontSize: minPort ? '3.4vw' : minLand ? '1.58vw' : medPort ? '1.9vw' : medLand ? '1.5vw' : '20px', // fontSize
    width: minPort ? '40vw' : minLand ? '19vw' : medPort ? '22vw' : medLand ? '17vw' : '220px', // width
    height: minPort ? '7vw' : minLand ? '3.5vw' : medPort ? '4.5vw' : medLand ? '3.2vw' : '45px', // height
    order: minLand || medLand || larLand ? 2 : 0,
  }
}

export {
  nameBox, formContainer, background,
  clearButton, sendMessageButton, messageBox
}