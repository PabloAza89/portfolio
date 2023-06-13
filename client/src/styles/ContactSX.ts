import {
  flex, relative, absolute, fixed, column, pointer,
  row, aic, aifs, asc, jcc, jcfe, jcfs, jcsa,
  jcsb, jcse, jsc, jic, noDeco, mix, noSelect
} from './CommonsSX';

export const background = () => {
  return {
    ...flex, ...relative, ...jcsb, ...column,
    //background: 'orange',
    height: 'calc(100vh - 12px)'
  }
}

interface topBottomHelperI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
}

export const topBottomHelper = ({ minPort, minLand, medPort, medLand, larPort, larLand }: topBottomHelperI) => {
  return {
    ...flex, ...relative,
    //background: 'darkblue',
    width: '20px',
    minHeight: minPort || minLand || medPort || medLand ? '1px' : '100px',
  }
}

interface mainContainerI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
}

export const mainContainer = ({ minPort, minLand, medPort, medLand, larPort, larLand }: mainContainerI) => {
  return {
    ...flex, ...jcc, ...aic,
    flexDirection: minPort ? 'column' : 'row',
    //background: 'teal',
    width: 'calc(100vw - 12px)',
    minWidth: minPort || minLand || medPort || medLand ? 'none' : larPort ? '900px' : '900px',
    height: minLand ? '220px' : medLand ? '350px' : larPort ? '500px' : '500px',
  }
}

interface avatarI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean
}

export const avatar = ({ minPort, minLand, medPort, medLand, larPort }: avatarI) => {
  return {
    ...relative, ...flex,
    width: minPort ? '180px' : minLand ? '180px' : medPort || medLand ? '250px' : larPort ? '400px' : '400px',
    height: minPort ? '180px' : minLand ? '180px' : medPort || medLand ? '250px' : larPort ? '400px' : '400px',
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

export const separatorY = ({ minPort, minLand, medPort, medLand }: separatorYI) => {
  return {
    ...relative, ...asc, ...mix,
    display: minPort ? 'none' : 'flex',
    background: 'white',
    margin: minLand || medPort || medLand ? '0px 4vw' : '0px 40px', // : larPort || larLand
    width: minLand ? '7px' : '15px',
    height: minLand ? '180px' : medPort || medLand ? '250px' : '400px',
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

export const separatorX = ({ minPort }: separatorXI) => {
  return {
    ...relative, ...asc, ...mix,
    display: minPort ? 'flex' : 'none',
    background: 'white',
    width: '170px',
    height: '7px',
    margin: '4vw 0px', // only on MinPort
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

interface typographyBoxI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
}

export const typographyBox = ({ minPort, minLand, medPort, medLand, larPort, larLand }: typographyBoxI) => { // typographyBox
  return {
    ...flex, ...column, ...relative, ...asc, ...jcc,
    //'background': 'red',
    width: minPort ? '160px' : minLand ? '120px' : medPort || medLand ? '160px' : '230px', // width
    height: minPort ? '230px' : minLand ? '180px' : medPort || medLand ? '300px' : '400px', // height
    alignItems: minPort ? 'center' : 'flex-start',
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

export const text = ({ darkMode, minPort, minLand, medPort, medLand, larPort }: textI) => {
  return {
    ...noSelect, ...relative, ...mix, ...pointer,
    fontFamily: 'Lucida Console',
    fontSize: minPort ? '23px' : minLand ? '20px' : medPort || medLand ? '26px' : larPort ? '39px' : '39px',
    color: darkMode ? '#b5b3b3' : 'white',
    padding: minPort ? '5px 0px' : minLand ? '5px 0px' : medPort || medLand ? '9px 0px' : '15px 0px',
    transition: 'all .2s ease-in-out',
    ':hover': { transform: 'scale(1.1)' },
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

export const textNoDeco = () => {
  return {
    ...noSelect, ...relative, ...mix, ...noDeco,
    fontFamily: 'Lucida Console',
    color: 'white',
  }
}