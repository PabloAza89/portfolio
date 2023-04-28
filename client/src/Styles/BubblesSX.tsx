import { useSelector } from 'react-redux';
import {
   bgRed,  flex, column, row, bgNone, absolute,
  relative,
} from './CommonsSX';

function BubblesSX() {

  const darkMode = useSelector( (state: {darkMode:boolean}) => state.darkMode)

  const background = () => {
    return {
      ...flex, ...relative,
      span: {
        width: '1.5vw',
        height: '1.5vw',
        background: '#4fc3dc',
        margin: '0 0.19vw',
        'border-radius': '50%',
        'box-shadow': '0 0 0 0.49vw #4fc3dc44, 0 0 2.49vw #4fc3dc, 0 0 4.99vw #4fc3dc',
        animation: `animate 15s linear infinite`,
        '@keyframes animate': {
            '0%': { transform: 'translateY(100vh) scale(0)' },
            '100%': { transform: 'translateY(-10vh) scale(1)' }
        }
      },
      'span:nth-child(even)': {
        background: '#ff2d75',
        'box-shadow': '0 0 0 0.49vw #4fc3dc44, 0 0 2.49vw #ff2d75, 0 0 4.99vw #ff2d75'
      },
       '-webkit-filter': darkMode ? 'brightness(.55)' : 'none',
      'filter': darkMode ? 'brightness(.55)' : 'none'
    }
  }

  const duration = (secs: number) => {
    return {
      'animationDuration': `calc(125s / ${secs})`
    }
  }

  return { background , duration }

}

export default BubblesSX;