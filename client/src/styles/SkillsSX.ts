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
    background: 'gray',
    display: 'flex',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    //flexDirection: 'column',
    width: '70vw',
    height: '50vh'
  }
}

export const chartRow = () => {
  return {
    background: 'lightblue',
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50vw',
    height: '80vh',
  }
}

export const level = () => {
  return {
    background: 'burlywood',
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    //justifyContent: 'end',
    width: '40px',
    height: '300px',
  }
}

export const leftSide = () => {
  return {
    width: '10px',
    height: '300px',
    background: 
      `linear-gradient(45deg, red 3%, orange 3%, orange 97%, red 97%)`
    // background: 
    //   `linear-gradient(45deg, #0000 212px, #93429e 0px),
    //   linear-gradient(to bottom, blue 20px, green 20px),
    //   linear-gradient(45deg, #0000 20px, #93429e 0px)`
  }
}

export const centerSide = () => {
  return {
    width: '30px',
    height: '300px',
    background: 'linear-gradient(to bottom, blue 0px, blue 3%, green 3%)'
  }
}

export const rightSide = () => {
  return {
    width: '10px',
    height: '300px',
    background:
      `linear-gradient(45deg, transparent 97%, orange 0px),
      linear-gradient(180deg, red 3%, orange 0px)`,
      
  }
}
