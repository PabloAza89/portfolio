import {
  flex, mix, noSelect, row, column,
  relative, asc, jcc, noDeco
} from './CommonsSX';
import { blue, brown, lime, red, grey } from '@mui/material/colors';

const background = () => {
  return {
    //background: 'orange',
    display: 'flex',
    position: 'relative',
    justifyContent: 'space-between',
    flexDirection: 'column',
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

const topBottomHelper = ({ minPort, minLand, medPort, medLand, larPort, larLand }: topBottomHelperI) => {
  return {
    //background: 'darkblue',
    display: 'flex',
    width: '20px',
    minHeight: minPort || minLand || medPort || medLand ? '1px' : '100px',
    position: 'relative'
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

const mainContainer = ({ minPort, minLand, medPort, medLand, larPort, larLand }: mainContainerI) => {
  return {
    ...flex, ...jcc,
    flexDirection: minPort ? 'column' : 'row',
    //background: 'teal',
    width: 'calc(100vw - 12px)',
    minWidth: minPort || minLand || medPort || medLand ? 'none' : larPort ? '900px' : '900px',
    height: minLand ? '220px' : medLand ? '350px' : larPort ? '500px' : '500px',
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

const separatorY = ({ minPort, minLand, medPort, medLand }: separatorYI) => {
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

const separatorX = ({ minPort }: separatorXI) => {
  return {
    ...relative, ...asc, ...mix,
    display: minPort ? 'flex' : 'none',
    background: 'white',
    width: '170px',
    height: '7px',
    margin: '4vw 0px', // only MinPort
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

const typographyBox = ({ minPort, minLand, medPort, medLand, larPort, larLand }: typographyBoxI) => { // typographyBox
  return {
    ...flex, ...column, ...relative, ...asc,
    //'background': 'red',
    width: minPort ? '160px' : minLand ? '120px' : medPort || medLand ? '160px' : '230px', // width
    height: minPort ? '230px' : minLand ? '180px' : medPort || medLand ? '300px' : '400px', // height
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
    padding: minPort ? '5px 0px' : minLand ? '5px 0px' : medPort || medLand ? '9px 0px' : '15px 0px',
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
  mainContainer, typographyBox, text, topBottomHelper,
  avatar, separatorY, separatorX, textNoDeco, background,
}