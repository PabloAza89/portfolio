import { cyan } from '@mui/material/colors';
import lanEn from '../images/lanEn.png';
import lanEs from '../images/lanEs.png';
import { asc, relative, flex, noSelect, row, absolute, column, jcc, fixed } from './CommonsSX';

interface backgroundI {
  minPort: boolean,
  minLand: boolean,
  larPort: boolean,
  larLand: boolean,
  percentageResizedHeight: number,
  location: string
}

const background = ({ minPort, minLand, larPort, larLand, location, percentageResizedHeight }: backgroundI) => {
  return {
    ...asc, ...relative,
    background: 'red',
    /* display: larLand && size.currentHeight < 300 ? 'none' : 'flex', */
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
    //position: 'absolute',
    //width: minPort ? '97vw' : minLand ? '97vw' : larPort ? '97vw' : '97vw',
    width: '30vw' ,
    height: minPort ? '9vh' : minLand ? '16vh' : larPort ? '15vh' : '15vh',
    bottom: minPort ? '0vh' : '0.3vh'
  }
}

interface flagContourEnI {
  english: boolean,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  maxStaticReference: number
}

const flagContourEn = ({ english, minPort, minLand, medPort, medLand, larPort, maxStaticReference }: flagContourEnI) => {
  return {
    position: 'relative',
    marginRight: minPort ? '0.5vh' : minLand ? '0.5vw' : medPort ? `${maxStaticReference * 0.1}px` : medLand ? `${maxStaticReference * 0.1}px` : larPort ? `${maxStaticReference * 0.1}px` : `${maxStaticReference * 0.1}px`,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: english ? cyan[100] : 'none',
    width: minPort ? '14vw' : minLand ? '7vw' : medPort ? `${maxStaticReference * 7.3}px` : medLand ? `${maxStaticReference * 7.3}px` : larPort ? `${maxStaticReference * 2.7}px` : `${maxStaticReference * 2.7}px`,
    height: minPort ? '4.3vh' : minLand ? '9vh' : medPort ? `${maxStaticReference * 5.3}px` : medLand ? `${maxStaticReference * 5.3}px` : larPort ? `${maxStaticReference * 1.9}px` : `${maxStaticReference * 1.9}px`
  }
}

interface lanEnFlagI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  maxStaticReference: number
}

const lanEnFlag = ({ minPort, minLand, medPort, medLand, larPort, maxStaticReference }: lanEnFlagI) => {
  return {
    background: 'null',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundImage: `url(${lanEn})`,
    width: minPort ? '20vw' : minLand ? '9vw' : medPort ? `${maxStaticReference * 7.3}px` : medLand ? `${maxStaticReference * 7.3}px` : larPort ? `${maxStaticReference * 2.5}px` : `${maxStaticReference * 2.5}px`,
    height: minPort ? '13vh' : minLand ? '9vh' : medPort ? `${maxStaticReference * 7.3}px` : medLand ? `${maxStaticReference * 7.3}px` : larPort ? `${maxStaticReference * 2.6}px` : `${maxStaticReference * 2.6}px`,
    backgroundSize: minPort ? '13vw 4.1vh' : minLand ? '6.5vw 8vh' : medPort ? `${maxStaticReference * 6.7}px` : medLand ? `${maxStaticReference * 6.7}px` : larPort ? `${maxStaticReference * 2.5}px ${maxStaticReference * 1.6}px` : `${maxStaticReference * 2.5}px ${maxStaticReference * 1.6}px`,
    ':hover': {
      webkitFilter: 'brightness(.9)',
      'filter': 'brightness(.9)'
    }
  }
}

interface flagContourEsI {
  english: boolean,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  maxStaticReference: number
}

const flagContourEs = ({ english, minPort, minLand, medPort, medLand, larPort, maxStaticReference }: flagContourEsI) => {
  return {
    position: 'relative',
    /* marginRight: minPort ? '0.5vh' : minLand ? '0.5vw' : larPort ? '0.0vw' : '0vw', */
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: english ? 'none' : cyan[100],
    width: minPort ? '14vw' : minLand ? '7vw' : medPort ? `${maxStaticReference * 7.3}px` : medLand ? `${maxStaticReference * 7.3}px` : larPort ? `${maxStaticReference * 2.7}px` : `${maxStaticReference * 2.7}px`,
    height: minPort ? '4.3vh' : minLand ? '9vh' : medPort ? `${maxStaticReference * 5.3}px` : medLand ? `${maxStaticReference * 5.3}px` : larPort ? `${maxStaticReference * 1.9}px` : `${maxStaticReference * 1.9}px`
  }
}

interface lanEsFlagI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  maxStaticReference: number
}

const lanEsFlag = ({ minPort, minLand, medPort, medLand, larPort, maxStaticReference }: lanEsFlagI) => {
  return {
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: 'none',
    backgroundImage: `url(${lanEs})`,
    width: minPort ? '20vw' : minLand ? '9vw' : medPort ? `${maxStaticReference * 7.3}px` : medLand ? `${maxStaticReference * 7.3}px` : larPort ? `${maxStaticReference * 2.5}px` : `${maxStaticReference * 2.5}px`,
    height: minPort ? '13vh' : minLand ? '9vh' : medPort ? `${maxStaticReference * 7.3}px` : medLand ? `${maxStaticReference * 7.3}px` : larPort ? `${maxStaticReference * 2.6}px` : `${maxStaticReference * 2.6}px`,
    backgroundSize: minPort ? '13vw 4.1vh' : minLand ? '6.5vw 8vh' : medPort ? `${maxStaticReference * 6.7}px` : medLand ? `${maxStaticReference * 6.7}px` : larPort ? `${maxStaticReference * 2.5}px ${maxStaticReference * 1.6}px` : `${maxStaticReference * 2.5}px ${maxStaticReference * 1.6}px`,
    ':hover': { webkitFilter: 'brightness(.9)', 'filter': 'brightness(.9)'}
  }
}

export { background, flagContourEn, lanEnFlag, flagContourEs, lanEsFlag }