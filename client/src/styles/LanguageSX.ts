import { cyan } from '@mui/material/colors';
import { 
  asc, relative, flex, noSelect, row,
  absolute, column, jcc, fixed, pointer
} from './CommonsSX';

interface backgroundI {
  height: number,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean,
  percentageResizedHeight: number,
  location: string
}

export const background = ({ height, minPort, minLand, medPort, medLand, larPort, larLand, location, percentageResizedHeight }: backgroundI) => {
  return {
    ...asc, ...absolute, ...flex, ...row, ...jcc,
    //background: 'red',
    pointerEvents:
      larPort && location === '/portfolio' && percentageResizedHeight < 0.788 ? 'none' :
      larLand && location === '/portfolio' && percentageResizedHeight < 0.665 ? 'none' :
      (larPort || larLand) && location === '/portfolio/Projects' && percentageResizedHeight < 0.640 ? 'none' :
      (larPort || larLand) && location === '/portfolio/Contact' && percentageResizedHeight < 0.548 ? 'none' :
      (larLand || larPort) && location === '/portfolio/AboutMe' && percentageResizedHeight < 0.629 ? 'none' :
      larPort && location === '/portfolio/Certifications' && percentageResizedHeight < 0.829 ? 'none' :
      larLand && location === '/portfolio/Certifications' && percentageResizedHeight < 0.4 ? 'none' :
      (larLand || larPort) && location === '/portfolio/MessageMe' && percentageResizedHeight < 0.680 ? 'none' :
      (larLand || larPort) && location === '/portfolio/Skills' && percentageResizedHeight < 0.536 ? 'none' :
      'null',
    opacity:
      larPort && location === '/portfolio' && percentageResizedHeight < 0.788 ? '0' :
      larLand && location === '/portfolio' && percentageResizedHeight < 0.665 ? '0' :
      (larPort || larLand) && location === '/portfolio/Projects' && percentageResizedHeight < 0.640 ? '0' :
      (larPort || larLand) && location === '/portfolio/Contact' && percentageResizedHeight < 0.548 ? '0' :
      (larLand || larPort) && location === '/portfolio/AboutMe' && percentageResizedHeight < 0.629 ? '0' :
      larPort && location === '/portfolio/Certifications' && percentageResizedHeight < 0.829 ? '0' :
      larLand && location === '/portfolio/Certifications' && percentageResizedHeight < 0.4 ? '0' :
      (larLand || larPort) && location === '/portfolio/MessageMe' && percentageResizedHeight < 0.680 ? '0' :
      (larLand || larPort) && location === '/portfolio/Skills' && percentageResizedHeight < 0.536 ? '0' :
      '1',
    'active': {
      'opacity': '0',
      'display': 'flex'
      },
    top: 
      minLand && height <= 380 && location === '/portfolio/Skills' ? '20px' : 'none',
    bottom: 
      minLand && height <= 380 && location === '/portfolio/Skills' ? 'none' :
      '20px'
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

export const lanEnFlag = ({ english, minPort, minLand, medPort, medLand, larPort, maxStaticReference }: genI) => {
  return {
    ...flex, ...row, ...asc, ...pointer,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    border: english ? `solid ${cyan[100]} 2px` : `solid transparent 2px`,
    height: minPort ? '25px' : minLand ? '25px' : medPort ? '36px' : medLand ? '36px' : larPort ? '42px' : '42px',
    width: minPort ? '37px' : minLand ? '37px' : medPort ? '50px' : medLand ? '50px' : larPort ? '60px' : '60px',
    ':hover': {
      webkitFilter: 'brightness(.9)',
      'filter': 'brightness(.9)',
      transform: 'scale(1.01)'
    },
    transition: 'all .1s ease-in-out',
  }
}

export const lanEsFlag = ({ english, minPort, minLand, medPort, medLand, larPort, maxStaticReference }: genI) => {
  return {
    ...flex, ...row, ...asc, ...pointer,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    border: english ? `solid transparent 2px` : `solid ${cyan[100]} 2px`,
    height: minPort ? '25px' : minLand ? '25px' : medPort ? '36px' : medLand ? '36px' : larPort ? '42px' : '42px',
    width: minPort ? '37px' : minLand ? '37px' : medPort ? '50px' : medLand ? '50px' : larPort ? '60px' : '60px',
    ':hover': {
      webkitFilter: 'brightness(.9)',
      'filter': 'brightness(.9)',
      transform: 'scale(1.01)'
    },
    transition: 'all .1s ease-in-out',
  }
}