import {
  aic, asc, column, mix, flex, jcc,
  jcsb, noSelect, relative, row
} from './CommonsSX';

const mainBox = () => {
  return {
    ...flex, ...row, ...jcsb,
    background: 'none'
  }
}

interface iconBoxI {
  minPort: boolean,
  minLand: boolean,
  larPort: boolean
}

const iconBox = ({ minPort, minLand, larPort }: iconBoxI) => {
  return {
    ...flex, ...column, ...relative, ...aic,
    background: 'none',
    border: 'none',
    width: minPort ? '15vw' : minLand ? '7vw' : larPort ? '10vw' : '6vw'
  }
}

interface iconMediaI {
  url: string,
  minPort: boolean,
  minLand: boolean,
  larPort: boolean
}

const iconMedia = ({ url, minPort, minLand, larPort }: iconMediaI) => {
  return {
    ...asc, ...relative,
    border: 'none',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${url})`,
    width: minPort ? '10vw' : minLand ? '3.5vw' : larPort ? '5.5vw' : '3.5vw',
    height: minPort ? '10vw' : minLand ? '3.5vw' : larPort ? '5.5vw' : '3.5vw' ,
    backgroundSize: 'contain'
  }
}

interface textBoxI {
  minPort: boolean,
  minLand: boolean,
  larPort: boolean
}

const textBox = ({ minPort, minLand, larPort }: textBoxI) => {
  return {
    ...jcc, ...aic, ...flex, ...column, ...relative,
    background: 'none',
    border: 'none',
    width: minPort ? '15vw' : minLand ? '7vw' : larPort ? '10vw' : '6vw'
  }
}

interface titleI {
  darkMode: boolean,
  minPort: boolean,
  minLand: boolean,
  larPort: boolean
}

const title = ({ darkMode, minPort, minLand, larPort }: titleI) => {
  return {
    ...noSelect, ...mix,
    fontSize: minPort ? '2.9vw' : minLand ? '2.40vh' : larPort ? '1.85vw' : '0.95vw',
    border: 'none',
    color: darkMode ? '#b5b3b3' : '#FFFFFF',
    'fontWeight': 600
  }
}

export { mainBox, iconBox, iconMedia, textBox, title }