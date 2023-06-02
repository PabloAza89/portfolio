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
}

const formContainer = ({ minPort, minLand, staticRefWidth }: formContainerI) => {
  return {
    ...flex, ...column,
    justifyContent: 'space-evenly',
    alignContent: 'space-evenly',
    top: minLand ? '-4vh' : '0vh',
    position: 'relative',
    //color: 'white',
    borderRadius: `4px`,
    background: '#5f9ea0',
    opacity: '0.95',
    width: minPort ? '85vw' : minLand ? '70vw' : '50vw',
    height: minPort ? '65vh' : minLand ? '76vh' : '76vh',
    flexFlow: minPort ? 'none' : minLand ? 'wrap' : 'none'
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
    //marginBottom: minLand ? 'none' : '2vh',
    borderRadius: `4px`,
    //height: minPort ? '50px' : minLand ? '10vh !important' : '60px',
    //minHeight: minPort ? '50px' : minLand ? '10vh !important' : '60px'
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
    //marginTop: minLand ? '3vh' : 'none',
    //marginBottom: '2vh',
    borderRadius: `4px`,
    //height: minLand ? '40vh' : 'none'
  }
}

interface clearButtonI {
  minPort: boolean,
  minLand: boolean,
  location: string
}

const clearButton = ({ minPort, minLand, location }: clearButtonI) => { // clearButton
  return {
    ...flex,
    color: 'white',
    backgroundColor: 'gray',
    alignSelf: minPort ? 'flex-end' : 'none',
    marginRight: minPort ? '5vw' : 'none',
    position: 'relative',
    ':hover': { backgroundColor: 'gray', webkitFilter: 'brightness(.95)', 'filter': 'brightness(.95)'},
    fontSize: minPort ? '3.4vw' : minLand ? '1.58vw' : '2vw',
    width: minPort ? '25vw' : minLand ? '19vw' : '10vw',
    height: minPort ? '3.6vh' : minLand ? '8vh' : 'none',
    order: minLand ? 1 : 0,
    //justifyContent: 'center'
  }
}

interface sendMessageButtonI {
  minPort: boolean,
  minLand: boolean
}

const sendMessageButton = ({ minPort, minLand }: sendMessageButtonI) => { // sendMessageButton
  return {
    ...flex,
    alignSelf: minPort ? 'center' : 'none',
    color: 'white',
    backgroundColor: 'gray',
    position: 'relative',
    ':hover': { backgroundColor: 'gray', webkitFilter: 'brightness(.95)', 'filter': 'brightness(.95)'},
    fontSize: minPort ? '3.4vw' : minLand ? '1.58vw' : '2vw',
    width: minPort ? '45vw' : minLand ? '19vw' : '10vw',
    height: minPort ? '3.6vh' : minLand ? '8vh' : 'none',
    order: minLand ? 2 : 0,
  }
}

export {
  nameBox, formContainer, background,
  clearButton, sendMessageButton, messageBox
}