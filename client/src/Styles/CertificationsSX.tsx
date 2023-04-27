import fccCertJS from '../images/fccCertJS.png';
import efSet from '../images/efSet.png';
import henry from '../images/henry.png';
import {
  bgRed, flex, column, row, bgNone, aic, jcc, asc,
  noSelect, absolute, jsc, relative,
} from './CommonsSX';

export const background = () => {
    return {
      flex, column, aic, jcc,
      height: '93vh',
      width: '97vw',
      background: 'none',
      overflow: 'hidden'
    }
}

export const boxUpper = () => {
    return {
      flex, jcc,
     width: MinLand() ? '97vw' : '80vw',
     height: '80vh' ,
     background: 'none',
     flexDirection: MinPort() ? 'column' : MinLand() ? 'row' : LarPort() ? 'column' : 'row'
    }
}

export const card = () => {
  return {
      flex, asc, column,
      'text-align': 'center',
      'justifyContent': 'space-evenly',
      background: 'none',
      width: MinPort() ? '87vw' : MinLand() ? '33vw' : LarPort() ? '59vw' : '29vw',
      height: MinPort() ? '25vh' : MinLand() ? '59vh' : LarPort() ? '39vh' : '39vh'
    }
}

export const title = () => {
    return {
    asc, ...noSelect(),
    
      background: 'none',
      height: MinLand() ? '13vh' : 'none',
      color: '#FFFFFF',
      paddingRight: '0vw',
      paddingTop: '0vw',
      fontSize: MinPort() ? '3.85vw' : MinLand() ? '2.1vw' : LarPort() ? '2.65vw' : '1.25vw',
      mixBlendMode: 'difference'
    }
  }

export const media = (url: string) => {
    return {
      backgroundImage: `url(${url})`,
      'zIndex': 10,
      'align-self': 'center',
      width: MinPort() ? '35vw' : MinLand() ? '32vw' : LarPort() ? '35vw' : '15vw',
      height: MinLand() ? '36vh' : '15vh',
      backgroundSize: MinPort() ? '35vw 15vh' : MinLand() ? '32vw 36vh' : LarPort() ? '35vw 15vh' : '15vw 15vh',
      ':hover': { '-webkit-filter': 'brightness(.9)', 'filter': 'brightness(.9)', cursor: 'pointer' }
    }
  }

export const url = () => {
    return {
      asc,
      color: '#FFFFFF',
      paddingRight: '0vw',
      paddingTop: '0vw',
      fontSize: MinPort() ? '' : MinLand() ? '' : LarPort() ? '2.35vw' : '1.15vw',
      background: 'none'
    }
}

export const anchor = () => {
    return {
    asc, ...noSelect(),
    
      'textDecoration': 'none',
      color: '#FFFFFF',
      'mix-blend-mode': 'difference'
    }
}

export const dialog = () => {
  return {
    flex, absolute, jsc,
    
      height: '83vh',
      width: '60vw',
      backgroundColor: 'none',
      top: '8vh',
      left: '14vw'
    }
}

export const dialogMedia = (url: string) => {
    return {
      flex,
      relative,
      column,
      justifyItems: 'center',
      backgroundImage: `url(${url})`,
      width: '72.1vw',
      height: '84vh',
      backgroundSize: '70vw 80vh',
      backgroundRepeat: 'no-repeat'
    }
  }


