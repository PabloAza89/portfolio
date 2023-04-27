import fccCertJS from '../images/fccCertJS.png';
import efSet from '../images/efSet.png';
import henry from '../images/henry.png';
import { grey , blue , cyan, lime, brown, red} from '@mui/material/colors';
import {
  bgRed,flex, column, row, bgNone, jcsb, relative, aic, asc, jcc, noSelect,
} from './CommonsSX';

  export const mainBox = () => {
    return {
      flex, row, jcsb,
      background: 'none'
    }
  }

  export const iconBox = () => {
    return {
      flex, column, relative, aic,
      background: 'none',
      border: 'none',
      width: MinPort() ? '15vw' : MinLand() ? '7vw' : LarPort() ? '10vw' : '6vw'
    }
  }

  export const iconMedia = (url: string) => {
    return {
      asc, relative,
      border: 'none',
      backgroundRepeat: 'no-repeat',
      backgroundImage: `url(${url})`,
      width: MinPort() ? '10vw' : MinLand() ? '3.5vw' : LarPort() ? '5.5vw' : '3.5vw',
      height: MinPort() ? '10vw' : MinLand() ? '3.5vw' : LarPort() ? '5.5vw' : '3.5vw' ,
      'background-size': 'contain'
    }
  }

  export const textBox = () => {
    return {
      jcc, aic, flex, column, relative,
      background: 'none',
      border: 'none',
      width: MinPort() ? '15vw' : MinLand() ? '7vw' : LarPort() ? '10vw' : '6vw'
    }
  }

  export const title = () => {
    return {
      ...noSelect(),
      fontSize: MinPort() ? '2.9vw' : MinLand() ? '2.40vh' : LarPort() ? '1.85vw' : '0.95vw',
      border: 'none',
      color: '#FFFFFF',
      'fontWeight': 600,
      'mixBlendMode': 'difference'
    }
  }

  // export {
  //   mainBox, iconBox, iconMedia, textBox, title
  // }