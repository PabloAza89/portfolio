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
    background: 'transparent',
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
    background: 'none',
    width: 'calc(100vw - 12px)',
    minWidth: minPort ? '375px' : minLand ? '375px' : medPort || medLand ? '768px' : larPort ? '1000px' : '1000px',
    height: minLand ? '220px' : larPort ? '500px' : '500px',
    alignItems: 'center'
  }
}

interface avatarI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean
}

const avatar = ({ minPort, minLand, medPort, medLand, larPort }: avatarI) => {
  return {
    ...relative, ...flex,
    width: minPort ? '180px' : minLand ? '180px' : medPort || medLand ? '300px' : larPort ? '400px' : '400px',
    height: minPort ? '180px' : minLand ? '180px' : medPort || medLand ? '300px' : larPort ? '400px' : '400px',
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
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
}

const separatorY = ({ minPort, minLand, medPort, medLand }: separatorYI) => {
  return {
    ...relative, ...asc, ...mix,
    display: minPort ? 'none' : 'flex',
    'background': 'white',
    margin: minLand || medPort || medLand? '0px 40px' : '0px 40px',
    width: minLand ? '10px' : '15px',
    height: minLand ? '180px' : medPort || medLand ? '300px' : '400px',
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
  minPort: boolean
}

const separatorX = ({ minPort }: separatorXI) => {
  return {
    ...relative, ...asc, ...mix,
    display: minPort ? 'flex' : 'none',
    'background': 'white',
    width: '180px',
    height: '10px',
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
    width: minPort ? '250px' : minLand ? '150px' : medPort || medLand ? '250px' : '400px',
    height: minPort ? '230px' : minLand ? '150px' : medPort || medLand ? '250px' : '400px',
    //alignItems: 'center',
    justifyContent: 'center',
    alignItems: minPort ? 'center' : 'flex-start'
  }
}

interface textI {
  darkMode: boolean,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean
}

const text = ({ darkMode, minPort, minLand, medPort, medLand, larPort }: textI) => {
  return {
    ...noSelect, ...relative, ...mix,
    fontFamily: 'Lucida Console',
    fontSize: minPort ? '23px' : minLand ? '20px' : medPort || medLand ? '26px' : larPort ? '39px' : '39px',
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