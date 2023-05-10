import { aic, column, jcc, relative } from './CommonsSX';

interface backgroundI {
  darkMode: boolean,
  minPort: boolean,
  minLand: boolean,
  larPort: boolean
}

const background = ({ darkMode, minPort, minLand, larPort }: backgroundI) => {
  return {
    ...column, ...aic, ...jcc, ...relative,
    background: darkMode ? '#48555e' : null,
    padding: '0vw !important',
    minWidth: minPort ? '0vh !important' : minLand ? '0vh !important' : larPort ? '0vh !important' : '0vh !important',
    width: minPort ? '4.5vw !important' : minLand ? '6vh !important' : larPort ? '4.5vw !important' : '4vh !important',
    height: minPort ? '4.5vw !important' : minLand ? '6vh !important' : larPort ? '4.5vw !important' : '4vh !important',
  }
}

interface iconI {
  minPort: boolean,
  minLand: boolean,
  larPort: boolean
}

const icon = ({ minPort, minLand, larPort }: iconI) => {
  return {
    transform: 'scaleX(-1)',
    padding: '0vw !important',
    width: minPort ? '4vw !important' : minLand ? '5vh !important' : larPort ? '3vw !important' : '3.5vh !important'
  }
}

export { background, icon }