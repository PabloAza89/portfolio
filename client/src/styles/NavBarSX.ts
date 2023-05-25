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
    flexDirection: minPort ? 'column' : minLand ? 'row' : larPort ? 'column' : 'row',
    paddingTop: '10px',
    color: '#FFFFFF',
    height: minPort ? '30vw' : minLand ? '7vw' : larPort ? '174px' : '87px',
    minHeight: larPort ? '174px' : `87px`,
    justifyContent: minLand ? 'left' : 'none',
    
  }
}

const mainLeft = ({ staticRefWidth, minPort, minLand, medPort, medLand, larPort }: genI) => {
  return {
    ...flex, ...row, ...aic,
    background: 'red',
    alignItems: 'center',
    minWidth: minPort ? '60vw' : minLand ? '35vw' : medPort || medLand ? '430px' : larPort ? '58vw' : '520px',
    color: '#FFFFFF',
    'alignSelf': minPort ? 'start' : larPort ? 'start' : 'center',
    height: minPort ? '7vh' : minLand ? '13vh' : medPort || medLand ? '70px' : larPort ? '87px' : '87px',
    //minHeight: larPort ? '11vw' : `${staticRefWidth * 2.9}px`,
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
    fontSize: minPort ? '6vw' : minLand ? '2.8vw' : medPort || medLand ? '45px' : larPort ? '50px' : '50px',
    marginRight: minPort ? '1.5vw' : minLand ? '1.4vw' : larPort ? '1.1vw' : '1.1vw',
    height: medPort || medLand ? '70px' : '87px',
    
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
    fontSize: minPort ? '7.5vw' : minLand ? '3.8vw' : medPort || medLand ? '50px' : larPort ? '65px' : '65px',
    color: blue[600],
    fontWeight: 600,
    minWidth: medPort || medLand ? '330px' : '410px',
    height: medPort || medLand ? '70px' : '87px',
    background: 'gray',
    textAlign: 'center'
  }
}

const blink = ({ minPort, minLand, medPort, medLand, larPort }: genII) => {
  return {
    ...noSelect,
    marginTop: '0.5vh',
    height: medPort || medLand ? '70px' : '87px',
    fontSize: minPort ? '6vw' : minLand ? '2.8vw' : medPort || medLand ? '45px' : larPort ? '50px' : '50px',
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
    fontSize: minPort ? '6vw' : minLand ? '2.8vw' : medPort || medLand ? '45px' : larPort ? '50px' : '50px',
    marginLeft: minPort ? '0.2vw' : minLand ? '1.0vw' : larPort ? '0.8vw' : '0.3vw',
    height: medPort || medLand ? '70px' : '87px',
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
    // overflow: 'auto', background: 'none', opacity: '0.8', marginBottom: minPort ? '0vh' : minLand ? '0vh' : '1vh'
    overflow: 'auto',
    width: minPort ? '96vw' : minLand ? '55vw' : larPort ? '96vw' : '68vw',
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
    fontSize: minPort ? '3.2vw' : minLand ? '1.3vw' : medPort || medLand ? '20px' : larPort ? '24px' : `24px`,
    fontFamily: 'Roboto',
    fontWeight: '600'
  }
}

export {
  background, mainLeft, lessThan, name,
  blink, greaterThan, scroll, textItem
}