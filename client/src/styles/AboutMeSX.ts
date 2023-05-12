import { flex, noSelect, row, absolute, column, jcc, fixed } from './CommonsSX';

interface backgroundI {
  staticRefWidth: number
}

const background = ({ staticRefWidth }: backgroundI) => {
  return {
    ...flex,...column,...jcc, ...fixed,
    top: `${staticRefWidth * 0.5}px`,
    right: `${staticRefWidth * 0.5}px`,
    bottom: `${staticRefWidth * 0.5}px`,
    left: `${staticRefWidth  * 0.5}px`,
    background: 'none'
  }
}

interface blueBoxI {
  staticRefWidth: number,
  darkMode: boolean,
  minPort: boolean,
  minLand: boolean,
  larPort: boolean
}

const blueBox = ({ darkMode, minPort, minLand, larPort, staticRefWidth }: blueBoxI) => {
  return {
    ...flex, ...row, ...absolute,
    background: darkMode ? '#253740' : '#3C6478',
    'borderRadius': `${staticRefWidth * 1}px`,
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    width: minPort ? '90vw' : minLand ? '70vw' : larPort ? '70vw' : '70vw',
    height: minPort ? '70vh' : minLand ? '60vh' : larPort ? '60vh' : '60vh',
    //top: larPort ? 'null' : 'null'
  }
 }

interface avatarI {
  currentHeight: number,
  minPort: boolean,
  minLand: boolean,
  larPort: boolean,
  larLand: boolean,
  staticRefHeight: number
}

const avatar = ({ currentHeight, minPort, minLand, larPort, larLand, staticRefHeight }: avatarI) => {
  return {
    ...flex, ...row, ...absolute,
    width: minPort ? '18vh' : minLand ? '20vh' : larPort ? '16.5vh' : '16.5vh',
    height: minPort ? '18vh' : minLand ? '20vh' : larPort ? '16.5vh' : '16.5vh',
    maxWidth: `${staticRefHeight * 13.7}px`,
    maxHeight: `${staticRefHeight * 13.7}px`,
    transform: larLand && currentHeight < 330 ? 'scale(0.0001) translate(100vw, -100vw)' : 'null',
    transition: 'all .5s',
    top: minPort ? '-7vh' : minLand ? '-7vh' : '-9vh' ,
    left: minPort ? '8vw' : minLand ? '7vw' : larPort ? '18vw' : '4vw',
  }
}

interface typographyI {
  maxStaticReference: number,
  darkMode: boolean,
  minPort: boolean,
  minLand: boolean,
  MedPort: boolean,
  MedLand: boolean,
  larPort: boolean,
}

const typography = ({ maxStaticReference, darkMode, minPort, minLand, MedPort, MedLand, larPort }: typographyI) => {
  return {
    ...noSelect,
   justifyContent: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '65vw',
    height: minPort ? '38vh' : minLand ? '38vh' : larPort ? '28vh' : '28vh',
    textAlign: 'center',
    fontSize: minPort ? `${maxStaticReference * 3.0}px` : minLand ? `${maxStaticReference * 3.0}px` : MedPort ? `${maxStaticReference * 2.3}px` : MedLand ? `${maxStaticReference * 2.3}px` :  larPort ? `${maxStaticReference * 1.5}px` : `${maxStaticReference * 1.5}px`,
    '::-webkit-scrollbar': { width: '10px' },
    '::-webkit-scrollbar-thumb': {
      'border': '10px solid',
      borderRadius: '10px'
    },
    ':hover': {
      color: 'rgba(0, 0, 0, 0.18)'
    },
    //padding: '20px',
    padding: '0vw 1vw 0vw 1vw',
    //margin: '100px auto',
    overflow: 'auto',
    background: 'none',
    color: 'transparent',
    WebkitTextFillColor: darkMode ? '#b5b3b3' : 'white',
    'transition': 'color 0.3s ease',
  }
}

export { background, blueBox, avatar, typography }

