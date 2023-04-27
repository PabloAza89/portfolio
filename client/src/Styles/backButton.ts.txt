import {
  minPort, minLand,
  medPort, medLand,
  larPort, larLand,
  currentHeight,
  staticRefWidth, staticRefHeight,
  maxStaticReference,
  flex, column,
  row, bgNone,
  bgRed, absolute
} from './commons';

const background = Object.assign(
  {},
  column, absolute,
  {
    padding: '0vw !important',
    minWidth: minPort ? '0vh !important' : minLand ? '0vh !important' : medPort ? '0vh !important' : medLand ? '0vh !important' : larPort ? '0vh !important' : '0vh !important',
    width: minPort ? `${maxStaticReference * 5.2}px !important` : minLand ? `${maxStaticReference * 5.2}px !important` : medPort ? `${maxStaticReference * 4.2}px !important` : medLand ? `${maxStaticReference * 4.2}px !important` : larPort ? `${maxStaticReference * 2.1}px !important` : `${maxStaticReference * 2.1}px !important`,
    height: minPort ? `${maxStaticReference * 5.2}px !important` : minLand ? `${maxStaticReference * 5.2}px !important` : medPort ? `${maxStaticReference * 4.2}px !important` : medLand ? `${maxStaticReference * 4.2}px !important` : larPort ? `${maxStaticReference * 2.1}px !important` : `${maxStaticReference * 2.1}px !important`,
    top: minPort ? '4.5vh' : minLand ? '6vh' : '5vh',
    left: minPort ? '84.5vw' : minLand ? '88vw' : '6vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
)

const icon = Object.assign(
  {},
  flex, absolute,
  {
    padding: '0vw 0vw 0vw 0vw !important',
    transform: 'rotate(180deg)',
    minWidth: minPort ? '0vh !important' : minLand ? '0vh !important' : medPort ? '0vh !important' : medLand ? '0vh !important' : larPort ? '0vh !important' : '0vh !important',
    width: minPort ? `${maxStaticReference * 3.7}px !important` : minLand ? `${maxStaticReference * 3.7}px !important` : medPort ? `${maxStaticReference * 2.1}px !important` : medLand ? `${maxStaticReference * 2.1}px !important` : larPort ? `${maxStaticReference * 1.3}px !important` : `${maxStaticReference * 1.3}px !important`,
    height: minPort ? `${maxStaticReference * 3.7}px !important` : minLand ? `${maxStaticReference * 3.7}px !important` : medPort ? `${maxStaticReference * 2.1}px !important` : medLand ? `${maxStaticReference * 2.1}px !important` : larPort ? `${maxStaticReference * 1.3}px !important` : `${maxStaticReference * 1.3}px !important`
  },
)

export { background , icon}