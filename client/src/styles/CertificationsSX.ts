import {
  absolute, mix, noDeco, aic, asc, column,
  flex, jcc, jic, jsc, noSelect, relative
} from './CommonsSX';

const background = () => {
  return {
    ...flex, ...column, ...aic, ...jcc,
    width: 'calc(100vw - 12px)',
    height: 'calc(100vh - 12px)',
    background: 'none',
    overflow: 'hidden'
  }
}

interface genI {
  minPort: boolean,
  minLand: boolean,
  larPort: boolean
}

const boxUpper = ({ minPort, minLand, larPort }: genI) => {
  return {
    ...flex, ...jcc,
    width: minLand ? '97vw' : '80vw',
    height: '80vh' ,
    background: 'none',
    flexDirection: minPort ? 'column' : minLand ? 'row' : larPort ? 'column' : 'row'
  }
}

const card = ({ minPort, minLand, larPort }: genI) => {
  return {
    ...flex, ...asc, ...column,
    textAlign: 'center',
    'justifyContent': 'space-evenly',
    background: 'none',
    width: minPort ? '87vw' : minLand ? '33vw' : larPort ? '59vw' : '29vw',
    height: minPort ? '25vh' : minLand ? '59vh' : larPort ? '39vh' : '39vh'
  }
}

const title = ({ minPort, minLand, larPort }: genI) => {
  return {
    ...asc, ...noSelect, ...mix,
    background: 'none',
    height: minLand ? '13vh' : 'none',
    color: '#FFFFFF',
    paddingRight: '0vw',
    paddingTop: '0vw',
    fontSize: minPort ? '3.85vw' : minLand ? '2.1vw' : larPort ? '2.65vw' : '1.25vw'
  }
}

interface mediaI {
  url: string,
  minPort: boolean,
  minLand: boolean,
  larPort: boolean
}

const media = ({ url, minPort, minLand, larPort }: mediaI) => {
  return {
    backgroundImage: `url(${url})`,
    'zIndex': 10,
    'alignSelf': 'center',
    width: minPort ? '35vw' : minLand ? '32vw' : larPort ? '35vw' : '15vw',
    height: minLand ? '36vh' : '15vh',
    backgroundSize: minPort ? '35vw 15vh' : minLand ? '32vw 36vh' : larPort ? '35vw 15vh' : '15vw 15vh',
    ':hover': { webkitFilter: 'brightness(.9)', 'filter': 'brightness(.9)', cursor: 'pointer' }
  }
}

const url = ({ minPort, minLand, larPort }: genI) => {
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
    ...asc, ...noSelect,...noDeco, ...mix,
    color: '#FFFFFF',
  }
}

const dialogStyle = () => {
  return {
    maxWidth: '100vw',
    maxHeight: '100vh',
    padding: '0px'
  }
}

interface dialogPaperI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean
}

const dialogPaper = ({ minPort, minLand, medPort, medLand, larPort }: dialogPaperI) => {
  return {
    sx: {  overflow: 'hidden',
      padding: '0px',
      display: 'flex',
      maxWidth: '100vw',
      maxHeight: '100vh',
      width: minPort ? '85vw' : minLand ? '85vw' : medPort ? '90vw' : medLand ? '80vw' : larPort ? '85vw' : '70vw',
      height: minPort ? '80vh' : minLand ? '80vh' : medPort ? '35vh' : medLand ? '55vh' : larPort ? '45vh' : '65vh',
      justifyContent: 'center',
      alignItems: 'center',
      '&::-webkit-scrollbar': {display: 'none'}
    }  
  }
}

interface dialogBoxI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean
}

const dialogBox = ({ minPort, minLand, medPort, medLand, larPort }: dialogBoxI) => {
  return {
    width: minPort ? 'calc(80vh - 32px)' : minLand ? 'calc(85vw - 32px)' : medPort ? 'calc(90vw - 32px)' : medLand ? 'calc(80vw - 32px)' : larPort ? 'calc(85vw - 32px)' : 'calc(70vw - 32px)',
    height: minPort ? 'calc(85vw - 32px)' : minLand ? 'calc(80vh - 32px)' : medPort ? 'calc(35vh - 32px)' : medLand ? 'calc(55vh - 32px)' : larPort ? 'calc(45vh - 32px)' : 'calc(65vh - 32px)',
    transform: minPort ? 'rotate(-90deg)' : 'none',
    padding: '0px'
  }
}

export {
  background, boxUpper, card, anchor, dialogBox,
  title, media, url, dialogStyle, dialogPaper
}