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
    minWidth: minPort ? '0vh !important' : minLand ? '0vh !important' : larPort ? '0vh !important' : '35px !important',
    minHeight: minPort ? '0vh !important' : minLand ? '0vh !important' : larPort ? '0vh !important' : '35px !important',
    width: minPort ? `30px !important` : minLand ? `22px !important` : larPort ? '35px !important' : '35px !important',
    height: minPort ? `30px !important` : minLand ? `22px !important` : larPort ? '35px !important' : '35px !important',
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
    width: minPort ? `19px !important` : minLand ? `17px !important` : larPort ? '25px !important' : '25px !important',
    height: minPort ? `19px !important` : minLand ? `17px !important` : larPort ? '25px !important' : '25px !important'
  }
}

export { background, icon }