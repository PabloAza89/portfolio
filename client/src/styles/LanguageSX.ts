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
    background: 'none',
    display: 'flex',
    pointerEvents:
      //(larPort || larLand) && location === '/portfolio' && percentageResizedHeight < 0.660 ? 'none' :
      (larPort || larLand) && location === '/portfolio' && percentageResizedHeight < 0.665 ? 'none' :
      larPort && location === '/portfolio/Projects' && percentageResizedHeight < 0.773 ? 'none' :
      larLand && location === '/portfolio/Projects' && percentageResizedHeight < 0.731 ? 'none' :
      (larPort || larLand) && location === '/portfolio/Contact' && percentageResizedHeight < 0.642 ? 'none' :
      (larPort || larLand) && location === '/portfolio/AboutMe' && percentageResizedHeight < 0.664 ? 'none' :
      'null',
    //transition: 'opacity .1s ease-in-out',
    opacity:
      //larPort && location === '/portfolio' && percentageResizedHeight < 0.844 ? '0' :
      (larPort || larLand) && location === '/portfolio' && percentageResizedHeight < 0.665 ? '0' :
      larPort && location === '/portfolio/Projects' && percentageResizedHeight < 0.773 ? '0' :
      larLand && location === '/portfolio/Projects' && percentageResizedHeight < 0.731 ? '0' :
      (larPort || larLand) && location === '/portfolio/Contact' && percentageResizedHeight < 0.642 ? '0' :
      (larLand || larPort) && location === '/portfolio/AboutMe' && percentageResizedHeight < 0.664 ? '0' :
      '1',
    'active': {
      'opacity': '0',
      'display': 'flex'
      },
    flexDirection: 'row',
    justifyContent: 'center',
    bottom: minPort || minLand ? '2vh' : medPort || medLand ? '3vh' : '3vh'
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
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    border: english ? `solid ${cyan[100]} 2px` : `solid transparent 2px`,
    height: minPort ? '25px' : minLand ? '25px' : medPort ? '36px' : medLand ? '36px' : larPort ? '42px' : '42px',
    width: minPort ? '37px' : minLand ? '37px' : medPort ? '50px' : medLand ? '50px' : larPort ? '60px' : '60px',
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
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    border: english ? `solid transparent 2px` : `solid ${cyan[100]} 2px`,
    height: minPort ? '25px' : minLand ? '25px' : medPort ? '36px' : medLand ? '36px' : larPort ? '42px' : '42px',
    width: minPort ? '37px' : minLand ? '37px' : medPort ? '50px' : medLand ? '50px' : larPort ? '60px' : '60px',
    ':hover': {
      webkitFilter: 'brightness(.9)',
      'filter': 'brightness(.9)'
    }
  }
}

export { background, lanEnFlag, lanEsFlag }