import { useSelector } from 'react-redux';
import fccCertJS from '../images/fccCertJS.png';
import efSet from '../images/efSet.png';
import henry from '../images/henry.png';
import { grey , blue , cyan, lime, brown, red} from '@mui/material/colors';
import {
 bgRed, flex, column, row, bgNone,
 jcc, aic, noSelect, jcsb, asc, fixed, jic
} from './CommonsSX';

function ProjectsSX() {

  const english = useSelector((state: {english:boolean}) => state.english)
  const width = useSelector((state: {width: number}) => state.width)
  const height = useSelector((state: {height: number}) => state.height)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)
  const staticRefWidth = useSelector((state: {staticRefWidth:number}) => state.staticRefWidth)
  const staticRefHeight = useSelector((state: {staticRefHeight:number}) => state.staticRefHeight)
  const maxStaticReference = useSelector((state: {maxStaticReference: number}) => state.maxStaticReference)
  const currentWidth = useSelector((state: {currentWidth:number}) => state.currentWidth)
  const currentHeight = useSelector((state: {currentHeight:number}) => state.currentHeight)
  const percentageResizedHeight = useSelector((state: {percentageResizedHeight:number}) => state.percentageResizedHeight)
  const percentageResizedWidth = useSelector((state: {percentageResizedWidth:number}) => state.percentageResizedWidth)

const background = () => {
    return {
      ...flex, ...column, ...jcc,
      marginTop: minPort ? '23vh' : minLand ? '17vh' : larPort ? '24vh' : '12vh',
      height: minPort ? '50vh' : minLand ? '60vh' : larPort ? '53vh' : '74vh',
      width: '98.8vw',
      background: 'none'
    }
  }

const scroll = () => {
    return {
      overflow: 'auto',
      background: 'none',
      opacity: '0.8',
      marginBottom: minPort ? '0vh' : minLand ? '0vh' : '1vh'
    }
}

 const boxUpperStripe = () => {
    return {
      ...column,
      background: 'none',
      width: '158vw',
      height: minPort ? '3vh' : larPort ? '3vh' : '6vh',
      marginBottom: '0px',
    }
 }

  const solid = () => {
    return {
      ...row,
      background: brown[700],
      width: '158vw',
      height: '1.3vh'
    }
  }

  const intercalated =  () => {
    return {
      ...row,
      'background': 'linear-gradient(to right, transparent 70%, #5d4037 30%)',
      'background-blend-mode': 'difference',
      'background-size': minPort ? '13vw 7vw' : larPort ? '11vw 7vw' : '7vw 7vw',
      width: '158vw',
      height: '3.5vh'
    }
  }

  const mainStripe = () => {
    return {
      ...row, ...flex,
      background: brown[700],
      width: '158vw'
    }
  }

  const card = () => {
    return {
      ...column, ...flex,
      marginLeft: '1vw' ,
      background: red[800],
      height: minPort ? '20vh' : minLand ? '44vh' : larPort ? '20vh' : '40vh'
    }
  }

  const boxTitle = () => {
    return {
      ...flex, ...row, ...aic,
      marginLeft: '1vw',
      background: 'none',
      height: minPort ? '8vh' : minLand ? '8vh' : larPort ? '5vh' : '8vh'
    }
  }

  const title = () => {
    return {
      ...noSelect(),
      marginRight: minPort ? '1.3vw' : minLand ? '0.9vw' : larPort ? '1.3vw' : '0.9vw',
      fontFamily: 'Century Gothic',
      color: '#FFFFFF',
      fontSize: minPort ? '4.5vw' : minLand ? '5vh' : larPort ? '3.6vw' : '5vh'
    }
  }

  const boxMedia = (length: number) => {
    return {
      ...row, ...jcsb, ...flex,
      background: lime[400],
      height: minPort ? '32vh' : minLand ? '36vh' : larPort ? '15vh' : '32vh',
      width: `${length * 31}vw`
    }
  }

  const cardMedia = (url: string) => {
    return {
      ...asc,
      'cursor': 'pointer',
      'backgroundImage': `url(${url})`,
      width: '100%', height: '100%',
      backgroundSize: minPort ? '30vw 15vh' : minLand ? '30vw 33vh' : larPort ? '30vw 14vh' : '30vw 30vh',
      ':hover': {'-webkit-filter': 'brightness(.9)', 'filter': 'brightness(.9)'}
    }
  }

  const dialog = () => {
    return {
      ...flex, ...fixed, ...row,
      minHeight: minPort ? '70%' : 'none',
      maxHeight: minPort ? '70%' : 'none',
      minWidth: minPort ? '80vw' : 'none',
      maxWidth: minPort ? '80vw' : 'none',
      height: minPort ? '71%' : '71vh',
      width: minPort ? '100%' : 'none',
      top: minPort ? '15vh' : '15vh',
      left: minPort ? '10vw' : '15vw'
    }
  }

  const dialogMedia = (name: string) => {
    return {
      ...flex, ...row, ...jic,
      'margin-block': minPort ? 'auto' : 'none',
      transform: minPort ? 'rotate(-90deg)' : 'none',
      backgroundImage: `url(${name})`,
      width: minPort ? '80vw' : '70vw',
      height: minPort ? '35vh' : '100vh',
      backgroundSize: minPort ? '78vw 30vh' : larPort ? '67vw 68vh' : '68vw 68vh',
      backgroundRepeat: 'no-repeat'
    }
  }

  const boxLower = () => {
    return {
      ...asc, ...row, ...noSelect(),
      background: 'none',
      minWidth: larPort ? '10vw' : larLand ? '10vw' : larPort ? '35vw' : '10vw',
      display: minLand ? 'none' : minPort ? 'none' : 'flex'
    }
  }

  const textLower = () => {
    return {
      ...jcc, ...asc, ...row,
      color: '#FFFFFF',
      fontSize: larPort ? '2.5vh' : '1.5vw',
      top: '0.1vh',
      mixBlendMode: 'difference'
    }
  }

  const select = () => {
    return {
      color: '#FFFFFF',
      background: blue[500],
      height: larPort ? '5vh' : '6vh',
      width: larPort ? '11vw' : '4.0vw',
      fontSize: larPort ? '2vh': '1vw'
    }
  }

  return {
    background, scroll, boxUpperStripe, solid, intercalated, mainStripe,
    card, boxTitle, title, boxMedia, cardMedia, dialog, dialogMedia, boxLower,
    textLower, select
  }

}

export default ProjectsSX;