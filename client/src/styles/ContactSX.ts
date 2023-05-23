import {
  flex, mix, noSelect, row, column,
  relative, asc, jcc, noDeco
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
    background: 'orange',
    display: 'flex',
    width: '20px',
    minHeight: minPort ? '60px' : minLand ? '60px' : larPort || larLand ? '100px' : '100px',
    position: 'relative'
  }
}

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
    ...flex, ...jcc,
    flexDirection: minPort ? 'column' : 'row',
    background: 'blue',
    width: 'calc(100vw - 12px)',
    //width: 'calc(90vw - 12px)',
    //minWidth: minLand ? '375px' : '1000px',
    //left: '100px',
    //width: '90vw',
    //minHeight: larPort ? '150px' : '150px',
    height: minLand ? '220px' : larPort ? '500px' : '500px',
    alignItems: 'center'
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
    width: minPort ? '180px' : minLand ? '180px' : larPort ? '400px' : '400px',
    height: minPort ? '180px' : minLand ? '180px' : larPort ? '400px' : '400px',
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
  minLand: boolean
}

const separatorY = ({ minPort, minLand }: separatorYI) => {
  return {
    ...relative, ...asc, ...mix,
    display: minPort ? 'none' : 'flex',
    'background': 'white',
    margin: '0px 80px',
    width: minLand ? '10px' : '15px',
    height: minLand ? '180px' : '400px',
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
    height: '5px',
    margin: '23px 0px',
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
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
}

const right = ({ minPort, minLand, medPort, medLand, larPort, larLand }: rightI) => {
  return {
    ...flex, ...column, ...relative, ...asc,
    'background': 'none',
    width: minPort ? '250px' : minLand ? '150px' : '400px',
    height: minPort ? '210px' : minLand ? '150px' : '400px',
    //alignItems: 'center',
    justifyContent: 'center',
    alignItems: minPort ? 'center' : 'flex-start'
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
    fontSize: minPort ? '7vw' : minLand ? '21px' : larPort ? '33px' : '33px',
    color: darkMode ? '#b5b3b3' : 'white',
    padding: minPort ? '5px 0px' : minLand ? '5px 0px' : '15px 0px',
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
  background, right, text, topBottomHelper,
  avatar, separatorY, separatorX, textNoDeco
}