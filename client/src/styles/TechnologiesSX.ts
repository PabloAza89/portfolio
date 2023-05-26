import {
  aic, asc, column, mix, flex, jcc,
  jcsb, noSelect, relative, row
} from './CommonsSX';

interface backgroundI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
}

const background = ({ minPort, minLand, medPort, medLand, larPort, larLand }: backgroundI) => {
  return {
    ...flex, ...column,
    background: 'blue',
    width: medPort ? 'calc(100vw - 12px)' : medLand ? '48vw' : '800px',
    minWidth: medPort ? '95vw' : medLand ? '48vw' : '800px',
    height: medPort ? '70px' : medLand ? 'calc(5vw + 25px)' : '90px',
    order: medPort ? '1' : 'none',
  }
}

const mainBox = () => {
  return {
    ...flex, ...row, ...jcsb,
    background: 'none'
  }
}

interface iconBoxI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean
}

const iconBox = ({ minPort, minLand, medPort, medLand, larPort }: iconBoxI) => {
  return {
    ...flex, ...column, ...relative, ...aic,
    background: 'yellow',
    border: 'none',
    width: minPort ? '15vw' : minLand ? '7vw' : medPort ? '70px' : medLand ? '7vw' : larPort ? '90px' : '90px'
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

const iconMedia = ({ url, minPort, minLand, medPort, medLand, larPort }: iconMediaI) => {
  return {
    ...asc, ...relative,
    border: 'none',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${url})`,
    width: minPort ? '10vw' : minLand ? '3.5vw' : medPort ? '70px' : medLand ? '5vw' : larPort ? '90px' : '90px',
    height: minPort ? '10vw' : minLand ? '3.5vw' : medPort ? '45px' : medLand ? '5vw' : larPort ? '65px' : '65px' ,
    backgroundSize: 'contain'
  }
}

interface textBoxI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean
}

const textBox = ({ minPort, minLand, medPort, medLand, larPort }: textBoxI) => {
  return {
    ...jcc, ...aic, ...flex, ...column, ...relative,
    background: 'darkblue',
    border: 'none',
    width: minPort ? '15vw' : minLand ? '7vw' : medPort ? '70px' : medLand ? '7vw' : larPort ? '90px' : '90px', // width
    height: minPort ? '15vw' : minLand ? '7vw' : medPort ? '25px' : medLand ? '25px' : larPort ? '25px' : '25px' // height
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

const title = ({ darkMode, minPort, minLand, medPort, medLand, larPort }: titleI) => {
  return {
    ...noSelect, ...mix,
    fontSize: minPort ? '2.9vw' : minLand ? '2.40vh' : medPort ? '12px' : medLand ? '1.3vw' : larPort ? '16px' : '16px',
    border: 'none',
    color: darkMode ? '#b5b3b3' : '#FFFFFF',
    'fontWeight': 600
  }
}

export {
  mainBox, iconBox, iconMedia, textBox,
  title, background
 }