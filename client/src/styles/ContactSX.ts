import {
  flex, mix, noSelect, row, column,
  relative, asc, jcc, noDeco
} from './CommonsSX';

interface backgroundI {
  minPort: boolean
}

const background = ({ minPort }: backgroundI) => {
  return {
    ...flex, ...jcc,
    flexDirection: minPort ? 'column' : 'row',
    'background': 'none',
    width: '98.8vw',
    height: '97.6vh'
  }
}

interface leftI {
  minPort: boolean
}

const left = ({ minPort }: leftI) => {
  return {
    ...flex, ...column, ...relative, ...asc,
    'background': 'none',
    width: '40vw',
    height: minPort ? '30vh' : '40vh',
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
        translate: minPort ? '0% -100vh' : '-100vw -0%',
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

interface separatorYI {
  minPort: boolean,
}

const separatorY = ({ minPort }: separatorYI) => {
  return {
    ...relative, ...asc, ...mix,
    display: minPort ? 'none' : 'flex',
    'background': 'white',
    width: '1.1vw',
    height: '40vh',
    animation: 'separatorYContact 1s',
    '@keyframes separatorYContact': {
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

interface separatorXI {
  minPort: boolean,
}

const separatorX = ({ minPort }: separatorXI) => {
  return {
    ...relative, ...asc, ...mix,
    display: minPort ? 'flex' : 'none',
    'background': 'white',    
    width: '60vw',
    height: '1.1vw',
    animation: 'separatorXContact 1s',
    '@keyframes separatorXContact': {
      '0%': {
        opacity: 0,
        translate: '-100vw 0%',
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

interface rightI {
  minPort: boolean,
}

const right = ({ minPort }: rightI) => {
  return {
    ...flex, ...column, ...relative, ...asc,
    'background': 'none',
    width: '30vw',
    height: minPort ? '40vh' : '60vh',
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
  avatar, separatorY, separatorX, textNoDeco
}


