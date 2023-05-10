import {
  flex, mix, noSelect, row, column,
  absolute, relative, asc, jcc
} from './CommonsSX';

const background = () => {
  return {
    ...flex, ...row, ...jcc,
    'background': 'none',
    width: '98.8vw',
    height: '97.6vh'
  }
}

const left = () => {
  return {
    ...flex, ...column, ...relative, ...asc,
    'background': 'none',
    width: '40vw',
    height: '40vh',
    /* left: '3vw', */
    alignItems: 'center',
    justifyContent: 'center',
    /* 'margin-bottom': '2vh' */
  }
}

interface avatarI {
  minPort: boolean,
  minLand: boolean,
  larPort: boolean,
  larLand: boolean,
  currentHeight: number
}

const avatar = ({ minPort, minLand, larPort, larLand, currentHeight }: avatarI) => {
  return {
    ...relative, ...flex,
    width: minPort ? '2.1vh' : minLand ? '3.3vh' : larPort ? '16.5vh' : '45vh',
    height: minPort ? '2.1vh' : minLand ? '3.3vh' : larPort ? '16.5vh' : '45vh',
    transform: larLand && currentHeight < 330 ? 'scale(0.0001) translate(100vw, -100vw)' : 'null',
    transition: 'all .5s'
  }
}

const separator = () => {
  return {
    ...flex, /* ...column, */ ...relative, ...asc, ...mix,
    'background': 'white',
    width: '1.1vw',
    height: '40vh',
    /* right: '2vw', */
    /* alignItems: 'center', */
    /* justifyContent: 'center', */
  }
}

const right = () => {
  return {
    ...flex, ...column, ...relative, ...asc,
    'background': 'none',
    width: '30vw',
    height: '60vh',
    /* right: '2vw', */
    alignItems: 'center',
    justifyContent: 'center'
  }
}

interface textI {
  darkMode: boolean,
  minPort: boolean,
  minLand: boolean,
  larPort: boolean
}

const text = ({ darkMode, minPort, minLand, larPort }: textI) => {
  return {
    ...noSelect, ...relative, ...mix,
    fontFamily: 'Lucida Console',
    fontSize: minPort ? '7vw' : minLand ? '3vw' : larPort ? '6vw' : '2.1vw',
    color: darkMode ? '#b5b3b3' : 'white',
    padding: '1vw',
  }
}

export { background, right, text, left, avatar, separator }


