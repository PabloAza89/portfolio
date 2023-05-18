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
    width: minPort || minLand? `30px !important` : medPort ? `${maxStaticReference * 4.2}px !important`  : medLand ? `${maxStaticReference * 4.2}px !important`  : larPort ? `${maxStaticReference * 2.1}px !important`  : `${maxStaticReference * 2.1}px !important` ,
    height: minPort || minLand? `30px !important` : medPort ? `${maxStaticReference * 4.2}px !important`  : medLand ? `${maxStaticReference * 4.2}px !important`  : larPort ? `${maxStaticReference * 2.1}px !important`  : `${maxStaticReference * 2.1}px !important` ,
    top: minPort ? '4vw' : minLand ? '4vh' : '0.9vh',
    right: minPort ? '4vw' : minLand ? '4vh' : '0.9vh',
    bottom: minPort ? 'none' : minLand ? 'none' : 'none',
    justifyContent: 'center',
    alignItems: 'center',
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
    width: minPort || minLand ? `15px !important` : medPort ? `${maxStaticReference * 2.1}px !important`  : medLand ? `${maxStaticReference * 2.1}px !important`  : larPort ? `${maxStaticReference * 1.3}px !important`  : `${maxStaticReference * 1.3}px !important` ,
    height: minPort || minLand ? `15px !important` : medPort ? `${maxStaticReference * 2.1}px !important`  : medLand ? `${maxStaticReference * 2.1}px !important`  : larPort ? `${maxStaticReference * 1.3}px !important`  : `${maxStaticReference * 1.3}px !important`
  }
}

const iconNight = ({ minPort, minLand, medPort, medLand, larPort, maxStaticReference }: genI) => {
  return {
    //width: '1.6vw'
    ...flex, ...absolute, ...column,
    minWidth: '0vh',
    width: minPort || minLand ? `15px !important` : medPort ? `${maxStaticReference * 2.1}px !important`  : medLand ? `${maxStaticReference * 2.1}px !important`  : larPort ? `${maxStaticReference * 1.3}px !important`  : `${maxStaticReference * 1.3}px !important` ,
    height: minPort || minLand ? `15px !important` : medPort ? `${maxStaticReference * 2.1}px !important`  : medLand ? `${maxStaticReference * 2.1}px !important`  : larPort ? `${maxStaticReference * 1.3}px !important`  : `${maxStaticReference * 1.3}px !important`
  }
}

export { background, iconDay, iconNight }


