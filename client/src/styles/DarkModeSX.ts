import { absolute, column, flex, jcc, aic } from '../styles/CommonsSX';

interface backgroundI {
  height: number,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean,
  maxStaticReference: number,
  location: string,
  percentageResizedHeight: number
}

export const background = ({ height, minPort, minLand, medPort, medLand, larPort, larLand, maxStaticReference, location, percentageResizedHeight }: backgroundI) => {
  return {
    ...column, ...absolute, ...jcc, ...aic,
    padding: '0vw !important',
    minWidth: '0vh !important',
    width: minPort || minLand ? `30px !important` : medPort || medLand ? `32.5px !important` : `35px !important` ,
    height: minPort || minLand ? `30px !important` : medPort || medLand ? `32.5px !important` : `35px !important` ,
    right: '20px',
    top:
      minLand && height <= 380 && location === '/portfolio/Skills' ? '20px' : 'none',
    bottom:
      minLand && height <= 380 && location === '/portfolio/Skills' ? 'none' :
      minLand ? '20px' : '20px',
    pointerEvents:
      larPort && location === '/portfolio' && percentageResizedHeight < 0.788 ? 'none' :
      larLand && location === '/portfolio' && percentageResizedHeight < 0.665 ? 'none' :
      (larLand || larPort) && location === '/portfolio/AboutMe' && percentageResizedHeight < 0.629 ? 'none' :
      (larPort || larLand) && location === '/portfolio/Contact' && percentageResizedHeight < 0.548 ? 'none' :
      larPort && location === '/portfolio/Certifications' && percentageResizedHeight < 0.829 ? 'none' :
      larLand && location === '/portfolio/Certifications' && percentageResizedHeight < 0.4 ? 'none' :
      (larPort || larLand) && location === '/portfolio/Projects' && percentageResizedHeight < 0.640 ? 'none' :
      (larLand || larPort) && location === '/portfolio/MessageMe' && percentageResizedHeight < 0.680 ? 'none' :
      (larLand || larPort) && location === '/portfolio/Skills' && percentageResizedHeight < 0.536 ? 'none' :
      'null',
    opacity:
      larPort && location === '/portfolio' && percentageResizedHeight < 0.788 ? '0' :
      larLand && location === '/portfolio' && percentageResizedHeight < 0.665 ? '0' :
      (larLand || larPort) && location === '/portfolio/AboutMe' && percentageResizedHeight < 0.629 ? '0' :
      (larPort || larLand) && location === '/portfolio/Contact' && percentageResizedHeight < 0.548 ? '0' :
      larPort && location === '/portfolio/Certifications' && percentageResizedHeight < 0.829 ? '0' :
      larLand && location === '/portfolio/Certifications' && percentageResizedHeight < 0.4 ? '0' :
      (larPort || larLand) && location === '/portfolio/Projects' && percentageResizedHeight < 0.640 ? '0' :
      (larLand || larPort) && location === '/portfolio/MessageMe' && percentageResizedHeight < 0.680 ? '0' :
      (larLand || larPort) && location === '/portfolio/Skills' && percentageResizedHeight < 0.536 ? '0' :
      '1',
    'active': {
      'opacity': '0',
      'display': 'flex'
    },
  }
}

interface genI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  maxStaticReference: number
}

export const iconDay = ({ minPort, minLand, medPort, medLand, larPort, maxStaticReference }: genI) => {
  return {
    ...flex, ...absolute, ...column,
    minWidth: '0vh',
    width: minPort || minLand ? `17px !important` : medPort || medLand ? `19.5px !important`  : `22px !important` ,
    height: minPort || minLand ? `17px !important` : medPort || medLand ? `19.5px !important`  : `22px !important`
  }
}

export const iconNight = ({ minPort, minLand, medPort, medLand, larPort, maxStaticReference }: genI) => {
  return {
    ...flex, ...absolute, ...column,
    minWidth: '0vh',
    width: minPort || minLand ? `17px !important` : medPort || medLand ? `18.5px !important`  : `20px !important` ,
    height: minPort || minLand ? `17px !important` : medPort || medLand ? `18.5px !important`  : `20px !important`
  }
}

