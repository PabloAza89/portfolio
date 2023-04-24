import {
  useEnglish,
  /* useMinPort, */
  minPort,
  minLand,
  useMedPort,
  useMedLand,
  useLarPort,
  useLarLand,
  useCurrentHeight,
  useStaticRefWidth,
  useStaticRefHeight,
  useMaxStaticReference,
  flex,
  column,
  row,
  bgNone,
  bgRed
} from './commons';

const background = Object.assign(
  {},
  flex,
  row,
  {
    background: '#3C6478',
    'border-radius': `${Number(useStaticRefWidth) * 1}px`,
    alignSelf: 'center',
    'justify-content': 'space-evenly',
    width: Boolean(minPort) ? '90vw' : Boolean(minLand) ? '70vw' : Boolean(useLarPort) ? '70vw' : '70vw',
    height: Boolean(minPort) ? '70vh' : Boolean(minLand) ? '60vh' : Boolean(useLarPort) ? '60vh' : '60vh',
    top: Boolean(useLarPort) ? '2vh' : 'null'
  },
)

const avatar = Object.assign(
  {},
  {
    position: 'absolute',
    /* width: Boolean(useMinPort) ? '2.1vh' : Boolean(minLand) ? '3.3vh' : Boolean(useLarPort) ? '16.5vh' : '16.5vh', */
    width: minPort ? '2.1vh' : minLand ? '3.3vh' : Boolean(useLarPort) ? '16.5vh' : '16.5vh',
    height: Boolean(minPort) ? '2.1vh' : Boolean(minLand) ? '3.3vh' : Boolean(useLarPort) ? '16.5vh' : '16.5vh',
    maxWidth: `${Number(useStaticRefHeight) * 13.7}px`,
    maxHeight: `${Number(useStaticRefHeight) * 13.7}px`,
    transform: Boolean(useLarLand) && Number(useCurrentHeight) < 330 ? 'scale(0.0001) translate(100vw, -100vw)' : 'null',
    transition: 'all .5s',
    top: '8vh' ,
    left: Boolean(useLarPort) ? '18vw' : '16vw',
  },
)

const typography = Object.assign(
  {},
  flex,
  column,
  bgNone,
  {
    '-webkit-touch-callout': 'none', '-webkit-user-select': 'none', '-khtml-user-select': 'none', '-moz-user-select': 'none', '-ms-user-select': 'none', 'user-select': 'none',
            'justify-content': 'flex-start',
            alignSelf: 'center',
            width: '65vw',
            height: Boolean(minPort) ? '38vh' : Boolean(minLand) ? '38vh' : Boolean(useLarPort) ? '28vh' : '28vh',
            'text-align': 'center',
            fontSize: Boolean(minPort) ? `${Number(useMaxStaticReference) * 3.0}px` : Boolean(minLand) ? `${Number(useMaxStaticReference) * 3.0}px` : Boolean(useMedPort) ? `${Number(useMaxStaticReference) * 2.3}px` : Boolean(useMedLand) ? `${Number(useMaxStaticReference) * 2.3}px` :  Boolean(useLarPort) ? `${Number(useMaxStaticReference) * 1.5}px` : `${Number(useMaxStaticReference) * 1.5}px`,
            overflow: 'auto',
            color: 'rgba(0, 0, 0, 0)',
            '-webkit-text-fill-color': 'white',
            transition: 'color .8s',
            '::-webkit-scrollbar': {
              width: '8px'
            },
            '*::-webkit-scrollbar-thumb': {
              'background-clip': 'padding-box',
              'border': '10px solid transparent'
            },
            '::-webkit-scrollbar-thumb': {
              'box-shadow': 'inset 0 0 0 10px',
              'border-radius': '10px'
            },
            ':hover': { color: 'rgba(0, 0, 0, 0.18)' }
  },
)

export { background, avatar, typography, useEnglish }