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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'end',
    width: '50vw',
    height: '80vh',
  }
}

// export const level = () => {
//   return {
//     background: 'burlywood',
//     display: 'flex',
//     flexDirection: 'row',
//     position: 'relative',
//     //justifyContent: 'end',
//     width: '40px',
//     height: '300px',
//     marginLeft: '10px',
//     marginRight: '10px',
//   }
// }

// export const leftSide = () => {
//   return {
//     width: '10px',
//     height: '300px',
//     background: 
//       `linear-gradient(45deg, red 6px, silver 6px, silver 212px, gray 212px)`
//   }
// }

// export const centerSide = () => {
//   return {
//     width: '30px',
//     height: '300px',
//     background: 'linear-gradient(to bottom, gray 8px, dimgrey 8px)'
//   }
// }

// export const rightSide = () => {
//   return {
//     width: '10px',
//     height: '300px',
//     background:
//       `linear-gradient(45deg, transparent 212px, orange 0px),
//       linear-gradient(180deg, gray 8px, dimgrey 0px)`,
      
//   }
// }

interface levelI {
  percentage: number
}

export const level = ({ percentage }: levelI) => {
  return {
    background: 'burlywood',
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    //justifyContent: 'end',
    width: '40px',
    height: `calc(${percentage}px * 2)`,
    marginLeft: '10px',
    marginRight: '10px',
  }
}

export const leftSide = ({ percentage }: levelI) => {
  return {
    // 025 + 10.5 + 035.5
    // 050 + 21.0 + 071.0
    // 075 + 31.5 + 106.5
    // 100 + 42.0 + 142.0
    width: '10px',
    height: `${percentage * 2}px`,
    background: 
      `linear-gradient(45deg, red 6px, silver 6px, silver ${percentage + (0.42 * percentage)}px, gray 0px)`
  }
}

export const centerSide = () => {
  return {
    width: '30px',
    height: '300px',
    background: 'linear-gradient(to bottom, gray 8px, dimgrey 8px)'
  }
}

export const rightSide = () => {
  return {
    width: '10px',
    height: '300px',
    background:
      `linear-gradient(45deg, transparent 212px, orange 0px),
      linear-gradient(180deg, gray 8px, dimgrey 0px)`,
      
  }
}
