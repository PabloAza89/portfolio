import { cyan } from '@mui/material/colors';
import lanEn from '../images/lanEn.png';
import lanEs from '../images/lanEs.png';
import { asc, relative, flex, noSelect, row, absolute, column, jcc, fixed } from './CommonsSX';

interface backgroundI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean,
  percentageResizedHeight: number,
  location: string
}

const background = ({ minPort, minLand, medPort, medLand, larPort, larLand, location, percentageResizedHeight }: backgroundI) => {
  return {
    ...asc, ...absolute,
    background: 'red',
    display: 'flex',
    pointerEvents:  larPort && percentageResizedHeight < 0.272 ? 'none' : larLand && percentageResizedHeight < 0.272 ? 'none' : 'null',
    transition: 'opacity .1s ease-in-out',
    opacity:
      larPort && location === '/portfolio' && percentageResizedHeight < 0.33 ? '0' :
      larLand && location === '/portfolio' && percentageResizedHeight < 0.33 ? '0' :
      larPort && location === '/portfolio/Projects' && percentageResizedHeight < 0.272 ? '0' :
      larLand && location === '/portfolio/Projects' && percentageResizedHeight < 0.272 ? '0' :
      '1',
    'active': {
      'opacity': '0',
      'display': 'flex'
      },
    flexDirection: 'row',
    justifyContent: 'center',
    width: minPort ? '40vw' : minLand ? '30vw' : medPort ? '40vw' : medLand ? '30vw' : larPort ? '40vw' :' 30vw',
    height: minPort ? '9vh' : minLand ? '16vh' : medPort ? '20vw' : larPort ? '15vh' : '15vh',
    bottom: minPort ? '0vh' : '0.3vh'
  }
}

interface genI {
  english: boolean,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  maxStaticReference: number
}

const lanEnFlag = ({ english, minPort, minLand, medPort, medLand, larPort, maxStaticReference }: genI) => {
  return {
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    background: `url(${lanEn})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    border: english ? `solid ${cyan[100]} ${maxStaticReference * 0.3}px` : `solid transparent ${maxStaticReference * 0.3}px`,
    height: minPort ? '10vw' : minLand ? '5.2vw' : medPort ? '8vw' : medLand ? '6vw' : larPort ? '4.9vw' : '3.1vw',
    width: minPort ? '15vw' : minLand ? '7.6vw' : medPort ? '11.7vw' : medLand ? '9vw' : larPort ? '7.1vw' : '4.4vw',
    ':hover': {
      webkitFilter: 'brightness(.9)',
      'filter': 'brightness(.9)'
    }
  }
}

const lanEsFlag = ({ english, minPort, minLand, medPort, medLand, larPort, maxStaticReference }: genI) => {
  return {
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    background: `url(${lanEs})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    border: english ? `solid transparent ${maxStaticReference * 0.3}px` : `solid ${cyan[100]} ${maxStaticReference * 0.3}px`,
    height: minPort ? '10vw' : minLand ? '5.2vw' : medPort ? '8vw' : medLand ? '6vw' : larPort ? '4.9vw' : '3.1vw',
    width: minPort ? '15vw' : minLand ? '7.6vw' : medPort ? '11.7vw' : medLand ? '9vw' : larPort ? '7.1vw' : '4.4vw',
    ':hover': {
      webkitFilter: 'brightness(.9)',
      'filter': 'brightness(.9)'
    }
  }
}

export { background, lanEnFlag, lanEsFlag }