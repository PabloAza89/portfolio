import { flex, noSelect, row, absolute, relative, column, jcc, fixed } from './CommonsSX';
import { blue, brown, lime, red, grey } from '@mui/material/colors';

export const background = () => {
  return {
    background: 'darkred',
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    //flexDirection: 'column',
    width: 'calc(100vw - 12px)',
    height: 'calc(100vh - 12px)'
  }
}

export const mainContainer = () => {
  return {
    background: 'lightgray',
    display: 'flex',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    //flexDirection: 'column',
    width: '70vw',
    height: '60vh'
  }
}

export const chartRow = () => {
  return {
    display: 'flex',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'end',
    width: '50vw',
    height: '210px',
    borderTop: '1px solid blueviolet',
    /* borderBottom: '1px solid blueviolet', */
    // background:
    //   `linear-gradient(
    //     to bottom,
    //     transparent 0px, transparent 49px,
    //     blueviolet 49px, blueviolet 50px,
    //     transparent 50px, transparent 99px,
    //     blueviolet 99px, blueviolet 100px,
    //     transparent 100px, transparent 149px,
    //     blueviolet 149px, blueviolet 150px,
    //     transparent 150px, transparent 199px
    //   )`
    background:
    `linear-gradient(
      to bottom,
      transparent 0px, transparent 49px,
      blueviolet 49px, blueviolet 50px,
      transparent 50px, transparent 99px,
      blueviolet 99px, blueviolet 100px,
      transparent 100px, transparent 149px,
      blueviolet 149px, blueviolet 150px,
      transparent 150px, transparent 199px,
      blueviolet 199px, blueviolet 200px,
      transparent 200px, transparent 210px
    )`
  }
}

interface levelI {
  percentage: number
}

export const level = ({ percentage }: levelI) => {
  return {
    background: 'transparent',
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    //justifyContent: 'end',
    width: '50px',
    height: `calc(${percentage + 5}px * 2)`,
    marginLeft: '10px',
    marginRight: '10px',
  }
}

// 025 + 10.5 + 035.5 // EXAMPLES
// 050 + 21.0 + 071.0
// 075 + 31.5 + 106.5
// 100 + 42.0 + 142.0

export const leftSide = ({ percentage }: levelI) => {
  return {
    
    width: '10px',
    height: `${(percentage + 5)* 2}px`,
    background: `
      linear-gradient(45deg, transparent 7px, silver 7px, silver ${(percentage + 5) + (0.415 * (percentage + 5))}px, gray 0px)`
  }
}

export const centerSide = ({ percentage }: levelI) => {
  return {
    width: '30px',
    height: `${(percentage  + 5)* 2}px`,
    background: 'linear-gradient(to bottom, gray 10px, darkgrey 0px)'
  }
}

export const rightSide = ({ percentage }: levelI) => {
  return {
    display: 'flex',
    //flexDirection: 'column-reverse',
    width: '10px',
    height: `${(percentage + 5) * 2}px`,
    background: `
      linear-gradient(180deg, #0000 10px, darkgrey 0),
      linear-gradient(225deg, #0000 7px, gray 7px)`
      
  }
}
