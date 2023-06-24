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
  maxStaticReference: number,
  location: string,
  percentageResizedHeight: number
}

export const background = ({ minPort, minLand, medPort, medLand, larPort, larLand, maxStaticReference, location, percentageResizedHeight }: backgroundI) => {
  return {
    ...column, ...absolute, ...jcc, ...aic,
    padding: '0vw !important',
    minWidth: '0vh !important',
    width: minPort || minLand ? `30px !important`  : medPort || medLand ? `32.5px !important`  : `35px !important` ,
    height: minPort || minLand ? `30px !important`  : medPort || medLand ? `32.5px !important`  : `35px !important` ,
    top: '20px',
    left: '20px',
    transition: 'opacity .1s ease-in-out',
    opacity: '1',
    active: {
      opacity: '0',
      display: 'flex'
    }
  }
}

interface iconI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  maxStaticReference: number
}

export const icon = ({ minPort, minLand, medPort, medLand, larPort, maxStaticReference }: iconI) => {
  return {
    ...flex, ...absolute, ...column,
    transform: 'rotate(180deg)',
    minWidth: '0vh',
    width: minPort || minLand ? `20px !important`  : medPort || medLand ? `21.5px !important`  : `23px !important` ,
    height: minPort || minLand ? `20px !important`  : medPort || medLand ? `21.5px !important`  : `23px !important`
  }
}