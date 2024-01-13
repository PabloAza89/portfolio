import {
  flex, absolute, column,
  aic, jcc
  } from './CommonsSX';

interface backgroundI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean,
  location: string,
}

export const background = ({ minPort, minLand, medPort, medLand }: backgroundI) => {
  return {
    ...column, ...absolute, ...jcc, ...aic,
    padding: '0vw !important',
    minWidth: '0vh !important',
    width: minPort || minLand ? `30px !important`  : medPort || medLand ? `32.5px !important`  : `35px !important` ,
    height: minPort || minLand ? `30px !important`  : medPort || medLand ? `32.5px !important`  : `35px !important` ,
    //top: '20px',
    bottom: '20px',
    left: '20px',
    zIndex: '1',
  }
}

interface iconI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
}

export const icon = ({ minPort, minLand, medPort, medLand }: iconI) => {
  return {
    ...flex, ...absolute, ...column,
    transform: 'rotate(180deg)',
    minWidth: '0vh',
    width: minPort || minLand ? `20px !important`  : medPort || medLand ? `21.5px !important`  : `23px !important` ,
    height: minPort || minLand ? `20px !important`  : medPort || medLand ? `21.5px !important`  : `23px !important`
  }
}