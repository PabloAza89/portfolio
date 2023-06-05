import { flex, noSelect, row, absolute, relative, column, jcc, fixed } from './CommonsSX';
import { blue, brown, lime, red, grey } from '@mui/material/colors';

interface topBottomHelperI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
}

export const topBottomHelper = ({ minPort, minLand, medPort, medLand, larPort, larLand }: topBottomHelperI) => {
  return {
    //background: 'blue',
    display: 'flex',
    width: '20px',
    minHeight: minPort || minLand ? '1px' : medPort || medLand ? '1px' : larPort || larLand ? '90px' : '90px',
    position: 'relative'
  }
}

interface middleTopBottomI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
}

export const middleTopBottom = ({ minPort, minLand, medPort, medLand, larPort, larLand }: middleTopBottomI) => {
  return {
    //background: 'green',
    display: 'flex',
    width: 'calc(100vw - 12px)',
    minHeight: '397px',
    height: '70vh',
    //minHeight: minPort || minLand ? '1px' : medPort || medLand ? '1px' : larPort || larLand ? '90px' : '90px',
    position: 'relative',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
}

interface leftRightHelperI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
}

export const leftRightHelper = ({ minPort, minLand, medPort, medLand, larPort, larLand }: leftRightHelperI) => {
  return {
    display: larPort || larLand ? 'flex' : 'none',
    //background: 'red',
    //minHeight: '635px',
    minWidth: '22px'
  }
}

export const background = () => {
  return {
    //background: 'darkred',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 'calc(100vw - 12px)',
    height: 'calc(100vh - 12px)'
  }
}

interface mainContainerI {
  length: number
}

export const mainContainer = ({ length }:mainContainerI) => {
  return {
    //background: 'blue',
    width: `${(92*length)+200}px`,
    height: '397px', // 50 + 1 + 210 + 100 + 36 = 397
  }
}

export const skills = () => {
  return {
    background: '#b86b5a',
    width: 'fit-content',
    fontFamily: 'NillandRegular, serif',
    color: 'white',
    fontSize: '30px',
    fontWeight: '600',
    lineHeight: '1.19',
    height: '36px'
  }
}

interface chartContainerI {
  length: number
}

export const chartContainer = ({ length }:chartContainerI) => {
  return {
    background: 'rgba(128, 128, 128, 0.400)',
    display: 'flex',
    position: 'relative',
    borderRadius: '0px 10px 10px 10px',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: `${(92*length)+200}px`,
    height: '361px', // 50 + 1 + 210 + 100 = 361
    
  }
}

interface upperChartContainerI {
  length: number
}

export const upperChartContainer = ({ length }: upperChartContainerI) => {
  return {
    display: 'flex',
    position: 'relative',
    //background: 'red',
    flexDirection: 'row',
    width: `${(92*length)+200}px`,
    //flexFlow: 'wrap'
  }
}

interface upperChartContainerRightI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
}

export const upperChartContainerRight = ({ minPort, minLand, medPort, medLand, larPort, larLand }: upperChartContainerRightI) => {
  return {
    display: 'flex',
    position: minPort ? 'fixed' : 'relative',
    right: '200px',
    flexDirection: 'column',
    width: '10px',
    height: '260px',
    background: 'red',
    // background:
    // `linear-gradient(
    //   to bottom,
    //   transparent 0px, transparent 50px,
    //   steelblue 50px, steelblue 51px,
    //   transparent 51px, transparent 100px,
    //   steelblue 100px, steelblue 101px,
    //   transparent 101px, transparent 150px,
    //   steelblue 150px, steelblue 151px,
    //   transparent 151px, transparent 200px,
    //   steelblue 200px, steelblue 201px,
    //   transparent 201px, transparent 250px,
    //   steelblue 250px, steelblue 251px,
    //   transparent 251px, transparent 260px
    // )`
  }
}

interface chartRowI {
  length: number
}

export const chartRow = ({ length }: chartRowI) => {
  return {
    display: 'flex',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'end',
    //width: `${(92*length)+200}px`,
    width: `${(92*length)}px`,
    height: '210px',
    marginTop: '50px',
    borderTop: '1px solid steelblue',
    background:
    `linear-gradient(
      to bottom,
      transparent 0px, transparent 49px,
      steelblue 49px, steelblue 50px,
      transparent 50px, transparent 99px,
      steelblue 99px, steelblue 100px,
      transparent 100px, transparent 149px,
      steelblue 149px, steelblue 150px,
      transparent 150px, transparent 199px,
      steelblue 199px, steelblue 200px,
      transparent 200px, transparent 210px
    )`
  }
}

interface columnBarI {
  percentage: number
}

export const columnBar = ({ percentage }: columnBarI) => {
  return {
    background: 'transparent',
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'center',
    width: '90px',
    height: `calc(${percentage + 5}px * 2)`,
    borderBottom: '2px solid black',
    borderLeft: '2px solid black',
    borderImage: 'linear-gradient(to top, black 0px, black 20px, transparent 20px) 1'
  }
}

// 025 + 10.5 + 035.5 // EXAMPLES
// 050 + 21.0 + 071.0
// 075 + 31.5 + 106.5
// 100 + 42.0 + 142.0

// each barr 90 + 2 (92) + green 200

export const leftSide = ({ percentage }: columnBarI) => {
  return {
    
    width: '10px',
    height: `${(percentage + 5)* 2}px`,
    background: `
      linear-gradient(45deg, transparent 7px, silver 7px, silver ${(percentage + 5) + (0.415 * (percentage + 5))}px, gray 0px)`
  }
}

export const centerSide = ({ percentage }: columnBarI) => {
  return {
    width: '30px',
    height: `${(percentage  + 5)* 2}px`,
    background: 'linear-gradient(to bottom, gray 10px, darkgrey 0px)'
  }
}

export const rightSide = ({ percentage }: columnBarI) => {
  return {
    display: 'flex',
    width: '10px',
    height: `${(percentage + 5) * 2}px`,
    background: `
      linear-gradient(180deg, #0000 10px, darkgrey 0),
      linear-gradient(225deg, #0000 7px, gray 7px)`
  }
}

interface titlesBoxI {
  length: number
}

export const titlesBox = ({ length }: titlesBoxI) => {
  return {
    display: 'flex',
    flexDirection: 'row',
    //background: 'darkgreen',
    height: '100px',
    width: `${length * 92}px`,
    alignItems: 'center',
    paddingLeft: '57px',
  }
}

export const titles = () => {
  return {
    width: '130px',
    height: '30px',
    background: 'gray',
    transform: 'rotate(45deg) skew(135deg)',
    margin: '0px -14px',
    lineHeight: 1.9,
    paddingLeft: '5px',
  }
}

interface overlappingI {
  length: number,
  minPort: boolean,
}

export const overlapping = ({ length, minPort }: overlappingI) => {
  return {
    //width: minPort ? '200px' : `${(92*length)+200}px`,
    width: minPort ? '200px' : `200px`,
    //right: minPort ? '0px' : 'unset',
    //width: `200px`,
    //height: '361px', // 50 + 1 + 210 + 100 = 361
    height: '50px', // 50 + 1 + 210 + 100 = 361
    //right: minPort ? '-194px' : 'unset',
    right: minPort ? '6px' : '0px',
    top: '0px',
    //left: '10px',
    display: minPort ? 'flex' : 'flex',
    position: minPort ? 'fixed' : 'relative',
    flexDirection: 'column',
    //justifyContent: 'flex-end',
    alignItems: 'flex-end',
    //background: 'blue',
    // animation: 'rightToLeft 1s',
    // '@keyframes rightToLeft': {
    //   '0%': {
    //     translate: '100vw 0%',
    //   },
    //   '50%': {
    //   },
    //   '100%': {
    //     translate: '0% 0vw',
    //   }
    // }
  }
}

interface levelI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
}

export const level = ({ minPort, minLand, medPort, medLand, larPort, larLand }: levelI) => {
  return {
    width: '200px',
    height: '50px',
    display: 'flex',
    //top: '20px',
    //right: '-200px',
    position: minPort ? 'relative' : 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    background: 'green',
    alignItems: 'flex-end',
   /*  animation: 'rightToLeft 1s',
    '@keyframes rightToLeft': {
      '0%': {
        translate: '100vw 0%',
      },
      '50%': {
      },
      '100%': {
        translate: '0% 0vw',
      }
    } */
  }
}

export const innerLevel = () => {
  return {
    display: 'flex',
    flexDirection: 'column'
  }
}

interface colorLevelI {
  color: string,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
}

export const colorLevel = ({ minPort, minLand, medPort, medLand, larPort, larLand, color }: colorLevelI ) => {
  return {
    display: minPort ? 'flex' : 'flex',
    position: minPort ? 'fixed' : 'relative',
    right: '6px',
    //top: '200px',
    background: color,
    width: '6px',
    height: '38px',
  }
}

export const levelTitle = () => {
  return {
    width: '135px',
    height: '20px',
    display: 'inline',
    flexDirection: 'column',
    position: 'relative',
    justifyContent: 'flex-end',
    //background: 'darkorange',
    fontSize: '14px',
  }
}

interface imageSVGI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean,
}

export const boxSVG = ({ minPort, minLand, medPort, medLand, larPort, larLand }: imageSVGI) => {
  return {
    position: 'relative',
    justifyContent: 'center',
    //background: 'gray',
    display: 'flex',
    width: '50px', // width
    height: '50px', // height
    alignItems: 'center'
  }
}

export const imageSVG = ({ minPort, minLand, medPort, medLand, larPort, larLand }: imageSVGI ) => { // imageSVG
  return {
    width: '45px', // width
    height: '45px', // height,
    marginRight: '30px'
  }
}