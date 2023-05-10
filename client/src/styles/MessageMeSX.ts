import { useSelector } from 'react-redux';
import {
  flex, noSelect, row, column, asc,
  jsc, jcse, jcc
} from './CommonsSX';

interface backgroundI {
  staticRefWidth: number,
  darkMode: boolean,
  minPort: boolean,
  minLand: boolean,
  larPort: boolean
}

const background = ({ staticRefWidth, darkMode, minPort, minLand, larPort }: backgroundI) => {
  return {
    ...flex, ...row,
    background: darkMode ? '#253740' : '#3C6478',
    borderRadius: `${staticRefWidth * 1}px`,
    alignSelf: 'center',
    width: minPort ? '90vw' : minLand ? '70vw' : larPort ? '70vw' : '70vw',
    height: minPort ? '70vh' : minLand ? '60vh' : larPort ? '60vh' : '60vh',
    top: larPort ? '2vh' : 'null'
  }
}

interface genI {
  staticRefWidth: number
}

const formContainer = ({ staticRefWidth }: genI) => {
  return {
    ...flex, ...column, ...asc, ...jcc,
    color: 'white',
    borderRadius: `${staticRefWidth * 1}px`,
    backgroundColor: '#5f9ea0',
    opacity: '0.95',
    width: '50vw',
    height: '70vh'
  }
}

const clearButton = () => {
  return {
    ...flex, ...column,
    color: 'white',
    alignSelf: 'flex-end',
    backgroundColor: 'gray',
    ':hover': { backgroundColor: 'gray', webkitFilter: 'brightness(.95)', 'filter': 'brightness(.95)'},
    /* mixBlendMode: 'difference', */
    width: '10vw',
    marginRight: '1.5vw',
    marginBottom: '2vh'
  }
}

const nameBox = ({ staticRefWidth }: genI) => {
  return {
    ...flex, ...column, ...asc,
    color: 'white',
    backgroundColor: 'white',
    opacity: '0.90',
    width: '47vw',
    marginBottom: '2vh',
    borderRadius: `${staticRefWidth * 0.3}px`,
  }
}

const messageBox = ({ staticRefWidth }: genI) => {
  return {
    ...flex, ...column, ...asc,
    color: 'white',
    backgroundColor: 'white',
    opacity: '0.90',
    width: '47vw',
    marginBottom: '2vh',
    borderRadius: `${staticRefWidth * 0.3}px`
  }
}

const sendMessageButton = () => {
  return {
    ...flex, ...asc,
    color: 'white',
    backgroundColor: 'gray',
    ':hover': { backgroundColor: 'gray', webkitFilter: 'brightness(.95)', 'filter': 'brightness(.95)'},
    /* mixBlendMode: 'difference', */
    width: '10vw'
  }
}

export {
  background, nameBox, formContainer,
  clearButton, sendMessageButton, messageBox
}