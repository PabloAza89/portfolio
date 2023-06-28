import {
  flex, fixed, jcse
} from './CommonsSX';

interface backgroundI {
  fullScreen: boolean,
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

export const background = ({ fullScreen, darkMode, width, height, minPort, minLand, medPort, medLand }: backgroundI) => {
  return {
    ...flex, ...fixed, ...jcse,
    '--vpHeight': fullScreen ? `${height}px` : `calc(${height}px - 150px)`, // from bottom, where animation start from
    left: '0px',
    minWidth: `${width}px !important`,
    width: `${width}px !important`,
    span: {
      width: minPort || minLand ? '10px' : medPort || medLand ? '18px' : '22px',
      height: minPort || minLand ? '10px' : medPort || medLand ? '18px' : '22px',
      background: '#4fc3dc',
      borderRadius: '50%',
      boxShadow: '0 0 0 0.49vw #4fc3dc44, 0 0 2.49vw #4fc3dc, 0 0 4.99vw #4fc3dc',
      animation: `animate 17s linear infinite`,
      '@keyframes animate': {
          '0%': { transform: `translateY(var(--vpHeight)) scale(0)`  },
          '100%': { transform: 'translateY(-30px) scale(1)' }
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

export const duration = ({ secs }: durationI) => {
  return {
    'animationDuration': `calc(125s / ${secs})`
  }
}