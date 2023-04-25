import {
  minPort, minLand,
  medPort, medLand,
  larPort, larLand,
  currentHeight,
  staticRefWidth, staticRefHeight,
  maxStaticReference,
  flex, column,
  row, bgNone,
  bgRed
} from './commons';

const background = Object.assign(
  {},
  flex,
  row,
  {
    background: '#3C6478',
    'border-radius': `${staticRefWidth * 1}px`,
    alignSelf: 'center',
    'justify-content': 'space-evenly',
    width: minPort ? '90vw' : minLand ? '70vw' : larPort ? '70vw' : '70vw',
    height: minPort ? '70vh' : minLand ? '60vh' : larPort ? '60vh' : '60vh',
    top: larPort ? '2vh' : 'null'
  },
)

const avatar = Object.assign(
  {},
  {
    position: 'absolute',
    width: minPort ? '2.1vh' : minLand ? '3.3vh' : larPort ? '16.5vh' : '16.5vh',
    height: minPort ? '2.1vh' : minLand ? '3.3vh' : larPort ? '16.5vh' : '16.5vh',
    maxWidth: `${staticRefHeight * 13.7}px`,
    maxHeight: `${staticRefHeight * 13.7}px`,
    transform: larLand && currentHeight < 330 ? 'scale(0.0001) translate(100vw, -100vw)' : 'null',
    transition: 'all .5s',
    top: '8vh' ,
    left: larPort ? '18vw' : '16vw',
  },
)

const typography = Object.assign(
  {},
  {
    '-webkit-touch-callout': 'none',
    '-webkit-user-select': 'none',
    '-khtml-user-select': 'none',
    '-moz-user-select': 'none',
    '-ms-user-select': 'none',
    'user-select': 'none',
    'justify-content': 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '65vw',
    height: minPort ? '38vh' : minLand ? '38vh' : larPort ? '28vh' : '28vh',
    'text-align': 'center',
    fontSize: minPort ? `${maxStaticReference * 3.0}px` : minLand ? `${maxStaticReference * 3.0}px` : medPort ? `${maxStaticReference * 2.3}px` : medLand ? `${maxStaticReference * 2.3}px` :  larPort ? `${maxStaticReference * 1.5}px` : `${maxStaticReference * 1.5}px`,
    '::-webkit-scrollbar': { width: '10px' },
    '::-webkit-scrollbar-thumb': {
      'border': '10px solid',
      'border-radius': '10px'
    },
    ':hover': {
      color: 'rgba(0, 0, 0, 0.18)'
    },
    padding: '20px',
    margin: '100px auto',
    overflow: 'auto',
    color: 'transparent',
    '-webkit-text-fill-color': 'white',
    'transition': 'color 0.3s ease',
  },
)

export { background, avatar, typography }