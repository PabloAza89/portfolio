import { absolute, column, flex} from '../styles/CommonsSX';

interface backgroundI {
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

const background = ({ minPort, minLand, medPort, medLand, larPort, larLand, maxStaticReference, location, percentageResizedHeight }: backgroundI) => {
  return {
    ...column, ...absolute,
    padding: '0vw !important',
    minWidth: '0vh !important',
    width: minPort || minLand ? `30px !important` : medPort ? `${maxStaticReference * 4.2}px !important`  : medLand ? `${maxStaticReference * 4.2}px !important`  : larPort ? `35px !important`  : `35px !important` ,
    height: minPort || minLand ? `30px !important` : medPort ? `${maxStaticReference * 4.2}px !important`  : medLand ? `${maxStaticReference * 4.2}px !important`  : larPort ? `35px !important`  : `35px !important` ,
    //top: minPort ? '4vw' : minLand ? '4vh' : larPort || larLand ? 'none' : '33px',
    right: minPort ? '4vw' : minLand ? '5px' : medPort || medLand ? '20px' : '20px',
    bottom: minLand ? '5px' : '20px',
    justifyContent: 'center',
    alignItems: 'center',
    //transition: 'opacity .1s ease-in-out',
    opacity:
    larPort && location === '/portfolio' && percentageResizedHeight < 0.788 ? '0' :
    larLand && location === '/portfolio' && percentageResizedHeight < 0.665 ? '0' :
    (larLand || larPort) && location === '/portfolio/AboutMe' && percentageResizedHeight < 0.629 ? '0' :
    (larPort || larLand) && location === '/portfolio/Contact' && percentageResizedHeight < 0.548 ? '0' :
    larPort && location === '/portfolio/Certifications' && percentageResizedHeight < 0.829 ? '0' :
    larLand && location === '/portfolio/Certifications' && percentageResizedHeight < 0.4 ? '0' :
    (larPort || larLand) && location === '/portfolio/Projects' && percentageResizedHeight < 0.640 ? '0' :
    (larLand || larPort) && location === '/portfolio/MessageMe' && percentageResizedHeight < 0.500 ? '0' :
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


const iconDay = ({ minPort, minLand, medPort, medLand, larPort, maxStaticReference }: genI) => {
  return {
    //width: '1.6vw'
    ...flex, ...absolute, ...column,
    minWidth: '0vh',
    width: minPort || minLand ? `15px !important` : medPort ? `${maxStaticReference * 2.1}px !important`  : medLand ? `${maxStaticReference * 2.1}px !important`  : larPort ? `22px !important`  : `22px !important` ,
    height: minPort || minLand ? `15px !important` : medPort ? `${maxStaticReference * 2.1}px !important`  : medLand ? `${maxStaticReference * 2.1}px !important`  : larPort ? `22px !important`  : `22px !important`
  }
}

const iconNight = ({ minPort, minLand, medPort, medLand, larPort, maxStaticReference }: genI) => {
  return {
    //width: '1.6vw'
    ...flex, ...absolute, ...column,
    minWidth: '0vh',
    width: minPort || minLand ? `15px !important` : medPort ? `${maxStaticReference * 2.1}px !important`  : medLand ? `${maxStaticReference * 2.1}px !important`  : larPort ? `22px !important`  : `22px !important` ,
    height: minPort || minLand ? `15px !important` : medPort ? `${maxStaticReference * 2.1}px !important`  : medLand ? `${maxStaticReference * 2.1}px !important`  : larPort ? `22px !important`  : `22px !important`
  }
}

export { background, iconDay, iconNight }


