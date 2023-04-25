import fccCertJS from '../images/fccCertJS.png';
import efSet from '../images/efSet.png';
import henry from '../images/henry.png';
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
  noSelect,
} from './commons';

  const background = Object.assign(
    {},
    flex, column, aic, jcc,
    {
      height: '93vh',
      width: '97vw',
      background: 'none',
      overflow: 'hidden'
    },
  )

  const boxUpper = Object.assign(
    {},
    flex, jcc,
    {
     width: minLand ? '97vw' : '80vw',
     height: '80vh' ,
     background: 'none',
     flexDirection: minPort ? 'column' : minLand ? 'row' : larPort ? 'column' : 'row'
    },
  )

  const card = Object.assign(
    {},
    jcc, asc,
    {
     'text-align': 'center',
      'justify-content': 'space-evenly',
      background: 'none',
      width: minPort ? '87vw' : minLand ? '33vw' : larPort ? '59vw' : '29vw',
      height: minPort ? '25vh' : minLand ? '59vh' : larPort ? '39vh' : '39vh'
    },
  )

  const title = Object.assign(
    {},
    asc, noSelect(),
    {
      background: 'none',
      height: minLand ? '13vh' : 'none',
      color: '#FFFFFF',
      paddingRight: '0vw',
      paddingTop: '0vw',
      fontSize: minPort ? '3.85vw' : minLand ? '2.1vw' : larPort ? '2.65vw' : '1.25vw',
      mixBlendMode: 'difference'
    },
  )

  const media = Object.assign(
    {},
    asc,
    {
      backgroundImage: `url(${fccCertJS})`,
      width: minPort ? '35vw' : minLand ? '32vw' : larPort ? '35vw' : '15vw',
      height: minLand ? '36vh' : '15vh',
      backgroundSize: minPort ? '35vw 15vh' : minLand ? '32vw 36vh' : larPort ? '35vw 15vh' : '15vw 15vh',
      ':hover': { '-webkit-filter': 'brightness(.9)', 'filter': 'brightness(.9)', cursor: 'pointer' }
    },
  )

  const url = Object.assign(
    {},
    asc,
    {
      color: '#FFFFFF',
      paddingRight: '0vw',
      paddingTop: '0vw',
      fontSize: minPort ? '' : minLand ? '' : larPort ? '2.35vw' : '1.15vw',
      background: 'none'
    },
  )

  const anchor = Object.assign(
    {},
    asc, noSelect(),
    {
      'textDecoration': 'none',
      color: '#FFFFFF',
      'mixBlendMode': 'difference'
    },
  )



  export { background, boxUpper, card, title, media, url, anchor }