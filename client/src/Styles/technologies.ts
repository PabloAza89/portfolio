import fccCertJS from '../images/fccCertJS.png';
import efSet from '../images/efSet.png';
import henry from '../images/henry.png';
import { grey , blue , cyan, lime, brown, red} from '@mui/material/colors';
import {
  minPort, minLand,
  medPort, medLand,
  larPort, larLand,
  currentHeight,
  staticRefWidth, staticRefHeight,
  maxStaticReference,
  flex, column,
  row, bgNone,
  bgRed, absolute,
  relative, aic,
  jcc, asc,
  noSelect, jsc,
  jcsb, fixed,
  jic
} from './commons';

  const mainBox = Object.assign(
    {},
    flex, row, jcsb,
    {
      background: 'none'
    }
  )

  const iconBox = Object.assign(
    {},
    flex, column, relative, aic,
    {
      background: 'none',
      border: 'none',
      width: minPort ? '15vw' : minLand ? '7vw' : larPort ? '10vw' : '6vw'
    }
  )

  const iconMedia = (url: string) => {
    return {
      asc, relative,
      border: 'none',
      backgroundRepeat: 'no-repeat',
      backgroundImage: `url(${url})`,
      width: minPort ? '10vw' : minLand ? '3.5vw' : larPort ? '5.5vw' : '3.5vw',
      height: minPort ? '10vw' : minLand ? '3.5vw' : larPort ? '5.5vw' : '3.5vw' ,
      'background-size': 'contain'
    }
  }

  const textBox = Object.assign(
    {},
    jcc, aic, flex, column, relative,
    {
      background: 'none',
      border: 'none',
      width: minPort ? '15vw' : minLand ? '7vw' : larPort ? '10vw' : '6vw'
    }
  )

  const title = Object.assign(
    {},
    noSelect(),
    {
      fontSize: minPort ? '2.9vw' : minLand ? '2.40vh' : larPort ? '1.85vw' : '0.95vw',
      border: 'none',
      color: '#FFFFFF',
      'fontWeight': 600,
      'mixBlendMode': 'difference'
    }
  )

  export {
    mainBox, iconBox, iconMedia, textBox, title
  }