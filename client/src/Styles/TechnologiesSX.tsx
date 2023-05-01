import { useSelector } from 'react-redux';
import { aic, asc, column, flex, jcc, jcsb, noSelect, relative, row
} from './CommonsSX';

function TechnologiesSX() {

  const darkMode = useSelector( (state: {darkMode:boolean}) => state.darkMode)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)

  const mainBox = () => {
    return {
      ...flex, ...row, ...jcsb,
      background: 'none'
    }
  }

  const iconBox = () => {
    return {
      ...flex, ...column, ...relative, ...aic,
      background: 'none',
      border: 'none',
      width: minPort ? '15vw' : minLand ? '7vw' : larPort ? '10vw' : '6vw'
    }
  }

  const iconMedia = (url: string) => {
    return {
      ...asc, ...relative,
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
      ...jcc, ...aic, ...flex, ...column, ...relative,
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
      'mix-blend-mode': 'difference'
    }
  }

  return { mainBox, iconBox, iconMedia, textBox, title }

}

export default TechnologiesSX;