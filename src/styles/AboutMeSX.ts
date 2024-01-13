import {
  flex, noSelect, row, jcsb, relative,
  column, asc, jcfs
} from './CommonsSX';

export const background = () => {
  return {
    // /* ...column, */ /* ...jcsb, */ ...flex,
    // background: 'darkred',
    // //height: 'calc(100vh - 12px)',
    // height: '100vh',
    // width: 'calc(100vw - 12px)',
    // //justifyContent: 'center',
    // display: 'flex',
    // position: 'relative',
    justifyContent: 'center',

    //...flex, ...aic, ...column, ...jcsb,
    display: 'flex',
    position: 'relative',
    background: 'none',
    width: 'calc(100vw - 12px)',
    //height: 'calc(100vh - 12px)',
    height: '100vh',
    //height: 'fit-content',

  }
}

export const innerMainContainer = () => {
  return {
    ...column, ...jcsb, ...flex,
    //background: 'blue',
  }
}

export const innerTopBottomHelper = () => {
  return {
    ...flex,
    //background: 'yellow',
    minHeight: '50px'
  }
}

export const innerBlueBoxHelper = () => {
  return {
    ...flex,
    //background: 'yellow',
    height: '0px'
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
    //background: 'blue',
    width: '20px',
    minHeight: minPort || minLand ? '1px' : medPort || medLand ? '1px' : larPort || larLand ? '50px' : '50px',
  }
}

interface leftRightHelperI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
}

export const leftRightHelper = ({ larPort, larLand }: leftRightHelperI) => {
  return {
    display: larPort || larLand ? 'flex' : 'none',
    //background: 'red',
    minHeight: '635px',
    minWidth: '70px'
  }
}

interface mainContainerI {
  larPort: boolean,
  larLand: boolean,
}

export const mainContainer = ({ larPort, larLand }: mainContainerI) => {
  return {
    background: 'orange', /* DEV */
    // ...flex,
    // position: 'relative',
    // //height: '100%',
    // width: '90vw',
    // height: '100vh',
    // background: 'orange', /* DEV */
    // //justifyContent: larPort || larLand ? 'space-between' : 'center',
    // minHeight: '650px',
    // overflow: 'scroll',

    ...flex, //...jcsb,
    flexWrap: 'wrap',
    justifyContent: 'center',
    //minHeight: larLand ? '220px' : 'none',
    //height: minPort || medPort || larPort ? '80vh' : '50vh',
    overflow: 'scroll',
    maxHeight: '100vh',
    //maxHeight: '600px',
    //minHeight: '600px',
    // '::-webkit-scrollbar': {
    //   width: '0px',
    //   height: '0px',
    // },
    position: 'relative',
    //alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '90vw',

  }
}

interface blueBoxI {
  darkMode: boolean,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean
}

export const blueBox = ({ darkMode, minPort, minLand, medPort, medLand, larPort }: blueBoxI) => { // blueBox
  return {
    ...flex, ...column, ...relative, ...asc,
    background: darkMode ? '#253740' : '#3C6478',
    borderRadius: minPort || minLand ? `10px` : medPort || medLand ? `15px` : `20px`,
    justifyContent: minLand ? 'space-between' : 'space-evenly',
    //minWidth: minPort ? '85vw' : minLand ? '70vw' : medPort ? '80vw' : medLand ? '70vw' : larPort ? '710px' : '710px', // minWidth
    //width: minPort ? '85vw' : minLand ? '70vw' : medPort ? '80vw' : medLand ? '70vw' : larPort ? '70vw' : '70vw', // width
    minHeight: minPort ? '60vh' : minLand ? '55vh' : medPort ? '50vh' : medLand ? '60vh' : '450px', // minHeight
    height: minPort ? '60vh' : minLand ? '55vh' : medPort ? '50vh' : medLand ? '60vh' : '450px', // height
    padding: '0px 20px',
    marginTop: '90px',
  }
 }

interface avatarI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
}

export const avatar = ({ minPort, minLand, medPort, medLand, larPort }: avatarI) => { // avatar
  return {
    ...flex, ...row, ...relative,
    width: minPort  ? '14vh' : minLand ? '20vh' : medPort ? '14vh' : medLand ? '20vh' : larPort ? '150px' : '150px', // width
    height: minPort ? '14vh' : minLand ? '20vh' : medPort ? '14vh' : medLand ? '20vh' : larPort ? '150px' : '150px', // height
    top: minPort ? '-13vh' : minLand ? '-10vh' : medPort ? '-12vh' : medLand ? '-17vh' : larPort ? '-130px' : '-130px', // top
    left: minPort ? '8vw' : minLand ? '4vw' : medPort ? '6vw' : medLand ? '4vw' : '30px', // left
  }
}

interface typographyI {
  mouse: number,
  darkMode: boolean,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
}

export const typography = ({ mouse, darkMode, minPort, minLand, medPort, medLand, larPort }: typographyI) => { // typography
  return {
    ...noSelect, ...jcfs, ...flex, ...column, ...asc,
    //background: 'teal',
    //minWidth: minPort ? '70vw' : minLand ? '60vw' : medPort ? '70vw' : medLand ? '60vw' : '660px', // width
    //width: minPort ? '70vw' : minLand ? '60vw' : medPort ? '70vw' : medLand ? '60vw' : '65vw', // width
    height: minPort ? '40vh' : minLand ? '30vh' : medPort ? '32vh' : medLand ? '40vh' : larPort ? '250px' : '250px', // height
    textAlign: 'center',
    fontSize: minPort || minLand ? `16px` : medPort || medLand ? `26px` :  larPort ? `27px` : `27px`, // fontSize
    '::-webkit-scrollbar':  minPort || minLand ? { width: '7px' } : medPort || medLand ? { width: '8.5px' } : { width: '10px' },
    '::-webkit-scrollbar-thumb': {
      'border': '10px solid',
      borderRadius: '10px'
    },
    ':hover': {
      color: 'rgba(0, 0, 0, 0.18)',
    },
    padding: '0vw 1vw 0vw 1vw',
    overflow: 'auto',
    color: mouse ? 'transparent' : 'rgba(0, 0, 0, 0.18)',
    WebkitTextFillColor: darkMode ? '#b5b3b3' : 'white',
    'transition': 'color 0.3s ease',
  }
}