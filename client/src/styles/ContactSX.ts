import {
  flex, mix, noSelect, row, column,
  relative, asc, jcc, noDeco
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
    alignItems: 'center',
    justifyContent: 'center',
  }
}

interface avatarI {
  minPort: boolean,
  minLand: boolean,
  larPort: boolean
}

const avatar = ({ minPort, minLand, larPort }: avatarI) => {
  return {
    ...relative, ...flex,
    width: minPort ? '20vh' : minLand ? '40vh' : larPort ? '16.5vh' : '45vh',
    height: minPort ? '20vh' : minLand ? '40vh' : larPort ? '16.5vh' : '45vh',
    animation: 'avatarContact 1s',
    '@keyframes avatarContact': {
      '0%': {
        opacity: 0,
        translate: '-100vw -0%',
      },
      '50%': {
        opacity: 0,
      },
      '100%': {
        opacity: 1,
        translate: '0% 0vh',
      }
    }
  }
}

const separator = () => {
  return {
    ...flex, ...relative, ...asc, ...mix,
    'background': 'white',
    width: '1.1vw',
    height: '40vh',
    animation: 'separatorContact 1s',
    '@keyframes separatorContact': {
      '0%': {
        opacity: 0,
        translate: '0% -100vh',
      },
      '50%': {
        opacity: 0,
      },
      '100%': {
        opacity: 1,
        translate: '0% 0vh',
      }
    }
  }
}

const right = () => {
  return {
    ...flex, ...column, ...relative, ...asc,
    'background': 'none',
    width: '30vw',
    height: '60vh',
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
    cursor: 'pointer', //
    animation: 'textContact 1s',
    '@keyframes textContact': {
      '0%': {
        opacity: 0,
        translate: '0% 100vh',
      },
      '50%': {
        opacity: 0,
      },
      '100%': {
        opacity: 1,
        translate: '0% 0vh',
      }
    }
  }
}

const textNoDeco = () => {
  return {
    ...noSelect, ...relative, ...mix, ...noDeco,
    fontFamily: 'Lucida Console',
    color: 'white',
  }
}

export {
  background, right, text, left,
  avatar, separator, textNoDeco
}


