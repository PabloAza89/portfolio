import { flex, relative } from './CommonsSX';

interface backgroundI {
  darkMode: boolean,
  width: number,
  height: number
}

const background = ({ darkMode, width, height }: backgroundI) => {

  return {
    ...flex,
    left: '0px',
    position: 'fixed',
    minWidth: `${width}px`,
    //width: '1920px',
    minHeight: `${height}px`,
    //height: '1080px',
    justifyContent: 'space-evenly',
    span: {
      minWidth: '27px',
      width: '27px',
      //width: '1.5vw',
      minHeight: '27px',
      
      height: '27px',
      //height: '1.5vw',
      background: '#4fc3dc',
      //margin: '0 0.19vw',
      //margin: '0 1px',
      borderRadius: '50%',
      boxShadow: '0 0 0 0.49vw #4fc3dc44, 0 0 2.49vw #4fc3dc, 0 0 4.99vw #4fc3dc',
      animation: `animate 17s linear infinite`,
      '@keyframes animate': {
          /* '0%': { transform: 'translateY(100vh) scale(0)' },
          '100%': { transform: 'translateY(-30vh) scale(1)' } */
          '0%': { transform: `translateY(${height}px) scale(0)` },
          '100%': { transform: 'translateY(0px) scale(1)' }
      }
    },
    'span:nth-of-type(even)': {
      background: '#ff2d75',
      boxShadow: '0 0 0 0.49vw #4fc3dc44, 0 0 2.49vw #ff2d75, 0 0 4.99vw #ff2d75'
    },
    webkitFilter: darkMode ? 'brightness(.55)' : 'none',
    filter: darkMode ? 'brightness(.55)' : 'none'
  }
}

interface durationI {
  secs: number
}

const duration = ({ secs }: durationI) => {
  return {
    'animationDuration': `calc(125s / ${secs})`
  }
}

export { background , duration }
