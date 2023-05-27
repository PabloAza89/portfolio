import { blue } from '@mui/material/colors';
import { aic, asc, mix, flex, jcse, noDeco, noSelect, row } from './CommonsSX';

interface genI {
  staticRefWidth: number,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean
}

const background = ({ staticRefWidth, minPort, minLand, medPort, medLand, larPort }: genI) => {
  return {
    ...jcse, ...flex,
    background: 'blue',
    flexDirection: minPort || medPort || larPort ? 'column' : 'row',
    paddingTop: '10px',
    color: '#FFFFFF',
    height: minPort ? '30vw' : minLand ? '7vw' : medPort ? '140px' : medLand ? '70px' : larPort ? '174px' : '87px',
    minHeight: medPort ? '140px' : medLand ? '70px' : larPort ? '174px' : `87px`,
    justifyContent: minLand ? 'left' : 'none'
  }
}

const mainLeft = ({ staticRefWidth, minPort, minLand, medPort, medLand, larPort }: genI) => {
  return {
    ...flex, ...row, ...aic,
    background: 'red',
    alignItems: 'center',
    minWidth: minPort ? '60vw' : minLand ? '35vw' : medPort ? '430px' : medLand ? '250px' : larPort ? '58vw' : '520px',
    height: minPort ? '7vh' : minLand ? '13vh' : medPort || medLand ? '70px' : larPort ? '87px' : '87px',
    color: '#FFFFFF',
    'alignSelf': minPort || medPort || larPort ? 'start' : 'center',
    marginLeft: '2vw',
  }
}

interface genII {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean
}

const lessThan = ({ minPort, minLand, medPort, medLand, larPort }: genII) => {
  return {
    ...noSelect,
    fontSize: minPort ? '6vw' : minLand ? '2.8vw' : medPort ? '45px' : medLand ? '30px' : larPort ? '50px' : '50px',
    marginRight: minPort ? '1.5vw' : minLand ? '1.4vw' : larPort ? '1.1vw' : '1.1vw',
    height: medPort ? '70px' : medLand ? '40px' : '87px',
    
  }
}

interface nameI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean
}

const name = ({ minPort, minLand, medPort, medLand, larPort }: nameI) => {
  return {
    ...noSelect,
    //marginTop: '0.5vh',
    fontFamily: 'Allura',
    fontSize: minPort ? '7.5vw' : minLand ? '3.8vw' : medPort ? '50px' : medLand ? '27px' : larPort ? '65px' : '65px',
    color: blue[600],
    fontWeight: 600,
    minWidth: medPort ? '330px' : medLand ? '180px' : '410px',
    height: medPort ? '70px' : medLand ? '40px' : '87px',
    background: 'gray',
    textAlign: 'center'
  }
}

const blink = ({ minPort, minLand, medPort, medLand, larPort }: genII) => {
  return {
    ...noSelect,
    marginTop: '0.5vh',
    height: medPort ? '70px' : medLand ? '40px' : '87px',
    fontSize: minPort ? '6vw' : minLand ? '2.8vw' : medPort ? '45px' : medLand ? '30px' : larPort ? '50px' : '50px',
    fontWeight: '300',
    animation: 'blink 1s linear infinite',
    '@keyframes blink': {
      '0%': { opacity: '0' },
      '49%': { opacity: '0' },
      '50%': { opacity: '1' }
    }
  }
}

const greaterThan = ({ minPort, minLand, medPort, medLand, larPort }: genII) => {
  return {
    ...noSelect,
    fontSize: minPort ? '6vw' : minLand ? '2.8vw' : medPort ? '45px' : medLand ? '30px' : larPort ? '50px' : '50px',
    marginLeft: minPort ? '0.2vw' : minLand ? '1.0vw' : larPort ? '0.8vw' : '0.3vw',
    height: medPort ? '70px' : medLand ? '40px' : '87px',
  }
}

interface scrollI {
  staticRefWidth: number,
  percentageResizedWidth: number,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
}

const scroll = ({ staticRefWidth, percentageResizedWidth, minPort, minLand, medPort, medLand, larPort, larLand }: scrollI) => {
  return {
    ...asc, ...flex, ...aic,
    background: 'yellow',
    overflow: 'auto', 
    width: minPort ? '96vw' : minLand ? '55vw' : medPort ? 'calc(100vw - 12px)' : larPort ? '96vw' : '68vw',
    minHeight: medPort || medLand ? '70px' : larPort ? '87px' : `87px`,
    color: '#FFFFFF',
    /* flexDirection: 'row', */
    justifyContent:
      minPort ? 'space-around' :
      minLand ? 'space-evenly' :
      larPort && percentageResizedWidth > 0.305 ? 'space-evenly' :
      larPort ? 'flex-start' :
      larLand && percentageResizedWidth < 0.504 ?
      'flex-start' :
      'space-evenly',
      // percentageResizedWidth 0.504
    
    //height: minPort ? '7vh' : minLand ? '7vh' : larPort ? '10vh' : '13vh'
  }
}

interface textItemI {
  staticRefWidth: number,
  darkMode: boolean,
  minPort: boolean,
  minLand: boolean,
  medLand: boolean,
  medPort: boolean,
  larPort: boolean
}

const textItem = ({ staticRefWidth, darkMode, minPort, minLand, medLand, medPort, larPort }: textItemI) => {
  return {
    ...noDeco, ...noSelect, ...mix,
    background: 'none',
    marginLeft: `${staticRefWidth * 0.5}px`,
    marginRight: `${staticRefWidth * 0.5}px`,
    minWidth: 'fit-content',
    color: darkMode ? '#b5b3b3' : '#FFFFFF',
    fontSize: minPort ? '3.2vw' : minLand ? '1.3vw' : medPort ? '20px' : medLand ? '18px' : larPort ? '24px' : `24px`,
    fontFamily: 'Roboto',
    fontWeight: '600'
  }
}

export {
  background, mainLeft, lessThan, name,
  blink, greaterThan, scroll, textItem
}