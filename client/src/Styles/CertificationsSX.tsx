import { useSelector } from 'react-redux';
import { absolute, aic, asc, column, flex, jcc, jic, jsc, noSelect, relative
} from './CommonsSX';

function CertificationsSX() {

  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)

const background = () => {
    return {
      ...flex, ...column, ...aic, ...jcc,
      height: '93vh',
      width: '97vw',
      background: 'none',
      overflow: 'hidden'
    }
}

const boxUpper = () => {
    return {
      ...flex, ...jcc,
     width: minLand ? '97vw' : '80vw',
     height: '80vh' ,
     background: 'none',
     flexDirection: minPort ? 'column' : minLand ? 'row' : larPort ? 'column' : 'row'
    }
}

const card = () => {
  return {
      ...flex, ...asc, ...column,
      'text-align': 'center',
      'justifyContent': 'space-evenly',
      background: 'none',
      width: minPort ? '87vw' : minLand ? '33vw' : larPort ? '59vw' : '29vw',
      height: minPort ? '25vh' : minLand ? '59vh' : larPort ? '39vh' : '39vh'
    }
}

const title = () => {
    return {
    ...asc, ...noSelect(),
      background: 'none',
      height: minLand ? '13vh' : 'none',
      color: '#FFFFFF',
      paddingRight: '0vw',
      paddingTop: '0vw',
      fontSize: minPort ? '3.85vw' : minLand ? '2.1vw' : larPort ? '2.65vw' : '1.25vw',
      mixBlendMode: 'difference'
    }
  }

const media = (url: string) => {
    return {
      backgroundImage: `url(${url})`,
      'zIndex': 10,
      'align-self': 'center',
      width: minPort ? '35vw' : minLand ? '32vw' : larPort ? '35vw' : '15vw',
      height: minLand ? '36vh' : '15vh',
      backgroundSize: minPort ? '35vw 15vh' : minLand ? '32vw 36vh' : larPort ? '35vw 15vh' : '15vw 15vh',
      ':hover': { '-webkit-filter': 'brightness(.9)', 'filter': 'brightness(.9)', cursor: 'pointer' }
    }
  }

const url = () => {
    return {
      ...asc,
      color: '#FFFFFF',
      paddingRight: '0vw',
      paddingTop: '0vw',
      fontSize: minPort ? '' : minLand ? '' : larPort ? '2.35vw' : '1.15vw',
      background: 'none'
    }
}

const anchor = () => {
    return {
      asc, ...noSelect(),
      'textDecoration': 'none',
      color: '#FFFFFF',
      'mix-blend-mode': 'difference'
    }
}

const dialog = () => {
  return {
     ...flex, ...absolute, ...jsc,
      height: '83vh',
      width: '60vw',
      backgroundColor: 'none',
      top: '8vh',
      left: '14vw'
    }
}

const dialogMedia = (url: string) => {
    return {
      ...flex, ...relative, ...column, ...jic,
      backgroundImage: `url(${url})`,
      width: '72.1vw',
      height: '84vh',
      backgroundSize: '70vw 80vh',
      backgroundRepeat: 'no-repeat'
    }
  }

  return { background, boxUpper, card, anchor, title, media, url, dialog, dialogMedia }

}

export default CertificationsSX;
