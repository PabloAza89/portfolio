import { flex, relative } from './CommonsSX';

interface backgroundI {
  darkMode: boolean,
  width: number,
  height: number,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
}

const background = ({ darkMode, width, height, minPort, minLand, medPort, medLand, larPort, larLand }: backgroundI) => {

  return {
    ...flex,
    left: '0px',
    position: 'fixed',
    minWidth: `${width}px`,
    minHeight: `${height}px`,
    justifyContent: 'space-evenly',
    span: {
      width: minPort || minLand ? '10px' : medPort || medLand ? '18px' : '27px',
      height: minPort || minLand ? '10px' : medPort || medLand ? '18px' : '27px',
      background: '#4fc3dc',
      borderRadius: '50%',
      boxShadow: '0 0 0 0.49vw #4fc3dc44, 0 0 2.49vw #4fc3dc, 0 0 4.99vw #4fc3dc',
      animation: `animate 17s linear infinite`,
      '@keyframes animate': {
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
