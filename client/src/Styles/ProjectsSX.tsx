import fccCertJS from '../images/fccCertJS.png';
import efSet from '../images/efSet.png';
import henry from '../images/henry.png';
import { grey , blue , cyan, lime, brown, red} from '@mui/material/colors';
import {
 bgRed, flex, column, row, bgNone,
 jcc, aic, noSelect, jcsb, asc, fixed, jic
} from './CommonsSX';

export const background = () => {
    return {
      flex, column, jcc,
      marginTop: MinPort() ? '23vh' : MinLand() ? '17vh' : LarPort() ? '24vh' : '12vh',
      height: MinPort() ? '50vh' : MinLand() ? '60vh' : LarPort() ? '53vh' : '74vh',
      width: '98.8vw',
      background: 'none'
    }
  }

export const scroll = () => {
    return {
    
      overflow: 'auto',
      background: 'none',
      opacity: '0.8',
      marginBottom: MinPort() ? '0vh' : MinLand() ? '0vh' : '1vh'
    }
}

 export const boxUpperStripe = () => {
    return {
      column,
      background: 'none',
      width: '158vw',
      height: MinPort() ? '3vh' : LarPort() ? '3vh' : '6vh',
      marginBottom: '0px',
    }
 }

  export const solid = () => {
    return {
      row,
      background: brown[700],
      width: '158vw',
      height: '1.3vh'
    }
  }

  export const intercalated =  () => {
    return {
      row,
      'background': 'linear-gradient(to right, transparent 70%, #5d4037 30%)',
      'background-blend-mode': 'difference',
      'background-size': MinPort() ? '13vw 7vw' : LarPort() ? '11vw 7vw' : '7vw 7vw',
      width: '158vw',
      height: '3.5vh'
    }
  }

  export const mainStripe = () => {
    return {
      row, flex,
      background: brown[700],
      width: '158vw'
    }
  }

  export const card = () => {
    return {
      column, flex,
      marginLeft: '1vw' ,
      background: red[800],
      height: MinPort() ? '20vh' : MinLand() ? '44vh' : LarPort() ? '20vh' : '40vh'
    }
  }

  export const boxTitle = () => {
    return {
      flex, row, aic,
      marginLeft: '1vw',
      background: 'none',
      height: MinPort() ? '8vh' : MinLand() ? '8vh' : LarPort() ? '5vh' : '8vh'
    }
  }

  export const title = () => {
    return {
      ...noSelect(),
      marginRight: MinPort() ? '1.3vw' : MinLand() ? '0.9vw' : LarPort() ? '1.3vw' : '0.9vw',
      fontFamily: 'Century Gothic',
      color: '#FFFFFF',
      fontSize: MinPort() ? '4.5vw' : MinLand() ? '5vh' : LarPort() ? '3.6vw' : '5vh'
    }
  }

  export const boxMedia = (length: number) => {
    return {
      row, jcsb, flex,
      background: lime[400],
      height: MinPort() ? '32vh' : MinLand() ? '36vh' : LarPort() ? '15vh' : '32vh',
      width: `${length * 31}vw`
    }
  }

  export const cardMedia = (url: string) => {
    return {
      asc,
      'cursor': 'pointer',
      'backgroundImage': `url(${url})`,
      width: '100%', height: '100%',
      backgroundSize: MinPort() ? '30vw 15vh' : MinLand() ? '30vw 33vh' : LarPort() ? '30vw 14vh' : '30vw 30vh',
      ':hover': {'-webkit-filter': 'brightness(.9)', 'filter': 'brightness(.9)'}
    }
  }

  export const dialog = () => {
    return {
      flex, fixed, row,
      minHeight: MinPort() ? '70%' : 'none',
      maxHeight: MinPort() ? '70%' : 'none',
      minWidth: MinPort() ? '80vw' : 'none',
      maxWidth: MinPort() ? '80vw' : 'none',
      height: MinPort() ? '71%' : '71vh',
      width: MinPort() ? '100%' : 'none',
      top: MinPort() ? '15vh' : '15vh',
      left: MinPort() ? '10vw' : '15vw'
    }
  }

  export const dialogMedia = (name: string) => {
    return {
      flex, row, jic,
      'margin-block': MinPort() ? 'auto' : 'none',
      transform: MinPort() ? 'rotate(-90deg)' : 'none',
      backgroundImage: `url(${name})`,
      width: MinPort() ? '80vw' : '70vw',
      height: MinPort() ? '35vh' : '100vh',
      backgroundSize: MinPort() ? '78vw 30vh' : LarPort() ? '67vw 68vh' : '68vw 68vh',
      backgroundRepeat: 'no-repeat'
    }
  }

  export const boxLower = () => {
    return {
      asc, row, ...noSelect(),
      background: 'none',
      minWidth: LarPort() ? '10vw' : LarLand() ? '10vw' : LarPort() ? '35vw' : '10vw',
      display: MinLand() ? 'none' : MinPort() ? 'none' : 'flex'
    }
  }

  export const textLower = () => {
    return {
      jcc, asc, row,
      color: '#FFFFFF',
      fontSize: LarPort() ? '2.5vh' : '1.5vw',
      top: '0.1vh',
      mixBlendMode: 'difference'
    }
  }

  export const select = () => {
    return {
      color: '#FFFFFF',
      background: blue[500],
      height: LarPort() ? '5vh' : '6vh',
      width: LarPort() ? '11vw' : '4.0vw',
      fontSize: LarPort() ? '2vh': '1vw'
    }
  }

  