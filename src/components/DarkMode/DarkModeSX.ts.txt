import { absolute, column, flex, jcc, aic } from '../styles/CommonsSX';

interface backgroundI {
  height: number,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean,
  location: string,
  percentageResizedHeight: number
}

export const background = ({ height, minPort, minLand, medPort, medLand, larPort, larLand, location, percentageResizedHeight }: backgroundI) => {
  return {
    ...column, /* ...absolute, */ ...jcc, ...aic,
    position: 'fixed',
    /* position: 'absolute', */
    zIndex: 1000,
    padding: '0vw !important',
    minWidth: '0vh !important',
    width: minPort || minLand ? `30px !important` : medPort || medLand ? `32.5px !important` : `35px !important` ,
    height: minPort || minLand ? `30px !important` : medPort || medLand ? `32.5px !important` : `35px !important` ,
    right: '20px',
    /* right: '6px', */
    top:
      minLand && height <= 380 && location === '/Skills' ? '20px' : 'none',
    bottom:
      minLand && height <= 380 && location === '/Skills' ? 'none' :
      minLand ? '20px' : '20px',
    // pointerEvents:
    //   larPort && location === '/' && percentageResizedHeight < 0.788 ? 'none' :
    //   larLand && location === '/' && percentageResizedHeight < 0.665 ? 'none' :
    //   (larLand || larPort) && location === '/AboutMe' && percentageResizedHeight < 0.629 ? 'none' :
    //   (larPort || larLand) && location === '/Contact' && percentageResizedHeight < 0.548 ? 'none' :
    //   larPort && location === '/Certifications' && percentageResizedHeight < 0.829 ? 'none' :
    //   larLand && location === '/Certifications' && percentageResizedHeight < 0.4 ? 'none' :
    //   (larPort || larLand) && location === '/Projects' && percentageResizedHeight < 0.640 ? 'none' :
    //   (larLand || larPort) && location === '/MessageMe' && percentageResizedHeight < 0.693 ? 'none' :
    //   (larLand || larPort) && location === '/Skills' && percentageResizedHeight < 0.536 ? 'none' :
    //   null,
    // opacity:
    //   larPort && location === '/' && percentageResizedHeight < 0.788 ? '0' :
    //   larLand && location === '/' && percentageResizedHeight < 0.665 ? '0' :
    //   (larLand || larPort) && location === '/AboutMe' && percentageResizedHeight < 0.629 ? '0' :
    //   (larPort || larLand) && location === '/Contact' && percentageResizedHeight < 0.548 ? '0' :
    //   larPort && location === '/Certifications' && percentageResizedHeight < 0.829 ? '0' :
    //   larLand && location === '/Certifications' && percentageResizedHeight < 0.4 ? '0' :
    //   (larPort || larLand) && location === '/Projects' && percentageResizedHeight < 0.640 ? '0' :
    //   (larLand || larPort) && location === '/MessageMe' && percentageResizedHeight < 0.693 ? '0' :
    //   (larLand || larPort) && location === '/Skills' && percentageResizedHeight < 0.536 ? '0' :
    //   '1',
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
}

export const iconDay = ({ minPort, minLand, medPort, medLand, larPort }: genI) => {
  return {
    ...flex, ...absolute, ...column,
    minWidth: '0vh',
    width: minPort || minLand ? `17px !important` : medPort || medLand ? `19.5px !important`  : `22px !important` ,
    height: minPort || minLand ? `17px !important` : medPort || medLand ? `19.5px !important`  : `22px !important`
  }
}

export const iconNight = ({ minPort, minLand, medPort, medLand, larPort }: genI) => {
  return {
    ...flex, ...absolute, ...column,
    minWidth: '0vh',
    width: minPort || minLand ? `17px !important` : medPort || medLand ? `18.5px !important`  : `20px !important` ,
    height: minPort || minLand ? `17px !important` : medPort || medLand ? `18.5px !important`  : `20px !important`
  }
}


