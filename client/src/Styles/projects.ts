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
  jcsb
} from './commons';

  const background = Object.assign(
    {},
    flex, column, jcc,
    {
      marginTop: minPort ? '23vh' : minLand ? '17vh' : larPort ? '24vh' : '12vh',
      height: minPort ? '50vh' : minLand ? '60vh' : larPort ? '53vh' : '73vh',
      width: '97vw',
      background: 'none'
    },
  )

  const scroll = Object.assign(
    {},
    {
      overflow: 'auto',
      background: 'none',
      opacity: '0.8',
      marginBottom: minPort ? '0vh' : minLand ? '0vh' : '1vh'
    },
  )

  const boxUpperStripe = Object.assign(
    {},
    column,
    {
      background: 'none',
      width: '158vw',
      height: minPort ? '3vh' : larPort ? '3vh' : '6vh',
      marginBottom: '0px',
    },
  )

  const solid = Object.assign(
    {},
    row,
    {
      background: brown[700],
      width: '158vw',
      height: '2vh'
    },
  )

  const intercalated = Object.assign(
    {},
    row,
    {
      'background': 'linear-gradient(to right, transparent 70%, #5d4037 30%)',
      'background-blend-mode': 'difference',
      'background-size': minPort ? '13vw 7vw' : larPort ? '11vw 7vw' : '7vw 7vw',
      width: '158vw',
      height: '6vh'
    },
  )

  const mainStripe = Object.assign(
    {},
    row, flex,
    {
      background: brown[700],
      width: '158vw'
    },
  )

  const card = Object.assign(
    {},
    column, flex,
    {
      marginLeft: '1vw' ,
      background: red[800],
      height: minPort ? '20vh' : minLand ? '44vh' : larPort ? '20vh' : '40vh'
    },
  )

  const boxTitle = Object.assign(
    {},
    flex, row, aic,
    {
      marginLeft: '1vw',
      background: 'none',
      height: minPort ? '8vh' : minLand ? '8vh' : larPort ? '5vh' : '8vh'
    },
  )

  const title = Object.assign(
    {},
    noSelect(),
    {
      marginRight: minPort ? '1.3vw' : minLand ? '0.9vw' : larPort ? '1.3vw' : '0.9vw',
      fontFamily: 'Century Gothic',
      color: '#FFFFFF',
      fontSize: minPort ? '4.5vw' : minLand ? '5vh' : larPort ? '3.6vw' : '5vh'
    },
  )

  const boxMedia = Object.assign(
    {},
    row, jcsb, flex,
    {
      background: lime[400],
      height: minPort ? '32vh' : minLand ? '36vh' : larPort ? '15vh' : '32vh',
      width: '62vw',
      display: 'none'
    },
  )

  export { background, scroll, boxUpperStripe, solid, intercalated, mainStripe, card, boxTitle, title, boxMedia }