import { useSelector } from 'react-redux';
import fccCertJS from '../images/fccCertJS.png';
import efSet from '../images/efSet.png';
import henry from '../images/henry.png';
import { grey , blue , cyan, lime, brown, red} from '@mui/material/colors';
import {
  bgRed,flex, column, row, bgNone, jcsb, relative, aic, asc, jcc, noSelect,
} from './CommonsSX';

function TechnologiesSX() {

  const darkMode = useSelector( (state: {darkMode:boolean}) => state.darkMode)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const MedPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const MedLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)
  const staticRefWidth = useSelector((state: {staticRefWidth:number}) => state.staticRefWidth)  // OJO staticRefWidth
  const staticRefHeight = useSelector((state: {staticRefHeight:number}) => state.staticRefHeight)  // OJO QUE FUNC CON {store.getState().staticRefHeight TAMBIEN
  const maxStaticReference = useSelector((state: {maxStaticReference:number}) => state.maxStaticReference) // OJO store.getState().maxStaticReference
  const currentHeight = useSelector((state: {currentHeight:number}) => state.currentHeight)

  const mainBox = () => {
    return {
      flex, row, jcsb,
      background: 'none'
    }
  }

  const iconBox = () => {
    return {
      flex, column, relative, aic,
      background: 'none',
      border: 'none',
      width: minPort ? '15vw' : minLand ? '7vw' : larPort ? '10vw' : '6vw'
    }
  }

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

  const textBox = () => {
    return {
      jcc, aic, flex, column, relative,
      background: 'none',
      border: 'none',
      width: minPort ? '15vw' : minLand ? '7vw' : larPort ? '10vw' : '6vw'
    }
  }

  const title = () => {
    return {
      ...noSelect(),
      fontSize: minPort ? '2.9vw' : minLand ? '2.40vh' : larPort ? '1.85vw' : '0.95vw',
      border: 'none',
      color: darkMode ? '#b5b3b3' : '#FFFFFF',
      'fontWeight': 600,
      'mixBlendMode': 'difference'
    }
  }

  return { mainBox, iconBox, iconMedia, textBox, title }

}

export default TechnologiesSX;