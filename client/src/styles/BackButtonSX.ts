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
    width: minPort ? `30px !important` : minLand ? `30px !important`  : medPort ? `${maxStaticReference * 4.2}px !important`  : medLand ? `${maxStaticReference * 4.2}px !important`  : larPort ? `${maxStaticReference * 2.1}px !important`  : `35px !important` ,
    height: minPort ? `30px !important`  : minLand ? `30px !important`  : medPort ? `${maxStaticReference * 4.2}px !important`  : medLand ? `${maxStaticReference * 4.2}px !important`  : larPort ? `${maxStaticReference * 2.1}px !important`  : `35px !important` ,
    top: minPort ? '4vw' : minLand ? '4vh' : '33px',
    left: minPort ? '4vw' : minLand ? '4vh' : '33px',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'opacity .1s ease-in-out',
    opacity:
      larPort && location === '/portfolio/Projects' && percentageResizedHeight < 0.272 ? '0' :
      larLand && location === '/portfolio/Projects' && percentageResizedHeight < 0.341 ? '0' :
      '1',
    active: {
      opacity: '0',
      display: 'flex'
    }
  }
}

interface iconI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  maxStaticReference: number
}

const icon = ({ minPort, minLand, medPort, medLand, larPort, maxStaticReference }: iconI) => {
  return {
    ...flex, ...absolute, ...column,
    transform: 'rotate(180deg)',
    minWidth: '0vh',
    width: minPort ? `15px !important`  : minLand ? `15px !important`  : medPort ? `${maxStaticReference * 2.1}px !important`  : medLand ? `${maxStaticReference * 2.1}px !important`  : larPort ? `${maxStaticReference * 1.3}px !important`  : `25px !important` ,
    height: minPort ? `15px !important`  : minLand ? `15px !important`  : medPort ? `${maxStaticReference * 2.1}px !important`  : medLand ? `${maxStaticReference * 2.1}px !important`  : larPort ? `${maxStaticReference * 1.3}px !important`  : `25px !important`
  }
}

export { background, icon }