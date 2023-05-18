import { blue } from '@mui/material/colors';
import { aic, asc, mix, flex, jcse, noDeco, noSelect, row } from './CommonsSX';

interface genI {
  staticRefWidth: number,
  minPort: boolean,
  minLand: boolean,
  larPort: boolean
}

const background = ({ staticRefWidth, minPort, minLand, larPort }: genI) => {
  return {
    ...jcse, ...flex,
    background: 'none',
    flexDirection: minPort ? 'column' : minLand ? 'row' : larPort ? 'column' : 'row',
    marginTop: '1vh',
    color: '#FFFFFF',
    height: minPort ? '30vw' : minLand ? '7vw' : larPort ? '20vh' : '15vh',
    minHeight: larPort ? '11vw' : `${staticRefWidth * 3.5}px`,
    justifyContent: minLand ? 'left' : 'none'
  }
}

const mainLeft = ({ staticRefWidth, minPort, minLand, larPort }: genI) => {
  return {
    ...flex, ...row, ...aic,
    background: 'none',
    width: minPort ? '60vw' : minLand ? '35vw' : larPort ? '58vw' : '33vw',
    color: '#FFFFFF',
    'alignSelf': minPort ? 'start' : larPort ? 'start' : 'center',
    height: minPort ? '7vh' : minLand ? '13vh' : larPort ? '13vh' : '13vh',
    minHeight: larPort ? '11vw' : `${staticRefWidth * 2.9}px`,
    marginLeft: '2vw'
  }
}

interface genII {
  minPort: boolean,
  minLand: boolean,
  larPort: boolean
}

const lessThan = ({ minPort, minLand, larPort }: genII) => {
  return {
    ...noSelect,
    fontSize: minPort ? '6vw' : minLand ? '2.8vw' : larPort ? '3.8vw' : '2.8vw',
    marginRight: minPort ? '1.5vw' : minLand ? '1.4vw' : larPort ? '1.1vw' : '1.1vw'
  }
}

const name = ({ minPort, minLand, larPort }: genII) => {
  return {
    ...noSelect,
    marginTop: '0.5vh',
    fontFamily: 'Allura',
    fontSize: minPort ? '7.5vw' : minLand ? '3.8vw' : larPort ? '6.1vw' : '3.8vw',
    color: blue[600],
    fontWeight: 600
  }
}

const blink = ({ minPort, minLand, larPort }: genII) => {
  return {
    ...noSelect,
    marginTop: '0.5vh',
    fontSize: minPort ? '6vw' : minLand ? '2.8vw' : larPort ? '4.5vw' : '2.8vw',
    fontWeight: '300',
    animation: 'blink 1s linear infinite',
    '@keyframes blink': {
      '0%': { opacity: '0' },
      '49%': { opacity: '0' },
      '50%': { opacity: '1' }
    }
  }
}

const greaterThan = ({ minPort, minLand, larPort }: genII) => {
  return {
    ...noSelect,
    fontSize: minPort ? '6vw' : minLand ? '2.8vw' : larPort ? '3.8vw' : '2.8vw',
    marginLeft: minPort ? '0.2vw' : minLand ? '1.0vw' : larPort ? '0.8vw' : '0.3vw'
  }
}

interface scrollI {
  staticRefWidth: number,
  percentageResizedWidth: number,
  minPort: boolean,
  minLand: boolean,
  larPort: boolean,
  larLand: boolean
}

const scroll = ({ staticRefWidth, percentageResizedWidth, minPort, minLand, larPort, larLand }: scrollI) => {
  return {
    ...asc, ...flex, ...aic,
    background: 'none',
    // overflow: 'auto', background: 'none', opacity: '0.8', marginBottom: minPort ? '0vh' : minLand ? '0vh' : '1vh'
    overflow: 'auto',
    minHeight: larPort ? '11vw' : `${staticRefWidth * 2.9}px`,
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
    width: minPort ? '96vw' : minLand ? '55vw' : larPort ? '96vw' : '60vw',
    height: minPort ? '7vh' : minLand ? '7vh' : larPort ? '10vh' : '13vh'
  }
}

interface textItemI {
  staticRefWidth: number,
  darkMode: boolean,
  minPort: boolean,
  minLand: boolean,
  larPort: boolean
}

const textItem = ({ staticRefWidth, darkMode, minPort, minLand, larPort }: textItemI) => {
  return {
    ...noDeco, ...noSelect, ...mix,
    background: 'none',
    marginLeft: `${staticRefWidth * 0.5}px`,
    marginRight: `${staticRefWidth * 0.5}px`,
    minWidth: 'fit-content',
    color: darkMode ? '#b5b3b3' : '#FFFFFF',
    fontSize: minPort ? '3.2vw' : minLand ? '1.3vw' : larPort ? '3vw' : `${staticRefWidth * 1.2}px`,
    fontFamily: 'Roboto',
    fontWeight: '600'
  }
}

export {
  background, mainLeft, lessThan, name,
  blink, greaterThan, scroll, textItem
}