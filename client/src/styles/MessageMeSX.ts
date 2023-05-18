import { useSelector } from 'react-redux';
import {
  flex, noSelect, row, column, asc,
  jsc, jcse, jcc
} from './CommonsSX';

interface formContainerI {
  staticRefWidth: number,
  minPort: boolean,
  minLand: boolean,
}

const formContainer = ({ minPort, minLand, staticRefWidth }: formContainerI) => {
  return {
    ...flex, ...column, ...asc, ...jcc,
    color: 'white',
    borderRadius: `${staticRefWidth * 1}px`,
    backgroundColor: '#5f9ea0',
    opacity: '0.95',
    width: minPort ? '85vw' : minLand ? '70vw' : '50vw',
    height: '70vh'
  }
}

interface clearButtonI {
  minPort: boolean,
  minLand: boolean,
  location: string
}

const clearButton = ({ minPort, minLand, location }: clearButtonI) => {
  return {
    ...flex, ...column,
    position: minLand && location === '/portfolio/MessageMe' ? 'absolute' : 'none',
    color: 'white',
    alignSelf: 'flex-end',
    backgroundColor: 'gray',
    ':hover': { backgroundColor: 'gray', webkitFilter: 'brightness(.95)', 'filter': 'brightness(.95)'},
    /* mixBlendMode: 'difference', */
    width: '11vw',
    marginRight: minPort ? '5vw' : '1.5vw',
    marginBottom: '2vh',
    height: minLand ? '7vh' : 'none',
    bottom: minLand ? '14vh' : 'none',
    left: minLand ? '33vw' : 'none'
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
    marginBottom: minLand ? 'none' : '2vh',
    borderRadius: `${staticRefWidth * 0.3}px`,
    height: minPort ? '50px' : minLand ? '13vh' : '60px'
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
    backgroundColor: 'white',
    opacity: '0.90',
    width: minPort ? '75vw' : minLand ? '60vw' : '47vw',
    marginTop: minLand ? '3vh' : 'none',
    marginBottom: '2vh',
    borderRadius: `${staticRefWidth * 0.3}px`,
    height: minLand ? '40vh' : 'none'
  }
}

interface sendMessageButtonI {
  minPort: boolean,
  minLand: boolean
}

const sendMessageButton = ({ minPort, minLand }: sendMessageButtonI) => {
  return {
    ...flex, ...asc,
    color: 'white',
    backgroundColor: 'gray',
    ':hover': { backgroundColor: 'gray', webkitFilter: 'brightness(.95)', 'filter': 'brightness(.95)'},
    /* mixBlendMode: 'difference', */
    width: minPort ? '45vw' : minLand ? '24vw' : '10vw',
    height: minLand ? '7vh' : 'none',
    left: minLand ? '9vw' : 'none'
  }
}

export {
  nameBox, formContainer,
  clearButton, sendMessageButton, messageBox
}