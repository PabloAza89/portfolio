import { absolute, column, flex, mix, jcc, aic, noSelect, relative } from '../styles/CommonsSX';

interface backgroundI {
  height: number,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean,
  location: string,
  percentageResizedHeight: number
}

export const errorGif = () => {
  return {
    ...flex, ...relative, ...noSelect,
    width: '400px',
    height: '400px',
  }
}

export const message = () => {
  return {
    ...flex, ...relative, ...noSelect, ...mix,
    color: 'white',
    fontSize: '35px',
  }
}