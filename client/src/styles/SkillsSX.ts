import {
  flex, noSelect, row, absolute, relative,
  column, jcc, fixed, jcsb, aic, aifs, jcfs,
} from './CommonsSX';

export const background = () => {
  return {
    ...flex, ...relative, ...jcsb, ...column, ...aifs,
    //background: 'darkred',
    width: 'calc(100vw - 12px)',
    height: 'calc(100vh - 12px)'
  }
}

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
    ...flex, ...relative,
    //background: 'blue',
    width: '20px',
    minHeight: minPort ? '50px' : minLand ? '0px' : medPort || medLand ? '1px' : larPort || larLand ? '90px' : '90px',
  }
}

interface middleI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
}

export const middle = ({ minPort, minLand, medPort, medLand, larPort, larLand }: middleI) => {
  return {
    ...relative, ...jcsb, ...aic,
    //background: 'orange',
    display: minPort ? 'contents' : 'flex',
    width: 'calc(100vw - 12px)',
    minHeight: minLand ? '260px' : '397px',
    height: minLand ? '260px' : '397px',
  }
}

interface leftRightHelperI {
  graphDontFit: boolean,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
}

export const leftRightHelper = ({ graphDontFit, minPort, minLand, medPort, medLand, larPort, larLand }: leftRightHelperI) => {
  return {
    display: graphDontFit ? 'none' : 'flex',
    //background: 'blue',
    minWidth: larPort || larLand ? '0px' : '0px',
    height: '50px',
  }
}

interface mainContainerI {
  length: number,
  minLand: boolean
}

export const mainContainer = ({ length, minLand }:mainContainerI) => {
  return {
    //background: 'darkorange',
    width: `${(length*92)+200}$px`,
    height: minLand ? '261px' : '397px', // 50 + 1 + 210 + 100 + 36 = 397
  }
}

interface skillsI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
}

export const skills = ({ minPort, minLand, medPort, medLand, larPort, larLand }: skillsI) => {
  return {
    ...noSelect,
    display: minLand ? 'none' : 'flex',
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
  graphDontFit: boolean,
  length: number,
  width: number,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
}

export const chartContainer = ({ graphDontFit, width, length, minPort, minLand, medPort, medLand, larPort, larLand }:chartContainerI) => {
  return {
    ...flex, ...relative, ...column, ...jcfs,
    alignItems: larPort || larLand ? 'flex-start' : graphDontFit ? 'flex-start' : 'center',
    width: graphDontFit ? `${width}px` : `${(length*92)+200}px`,
    height: minLand ? '261px' : '361px', // 50 + 1 + 210 + 100 = 361
  }
}

interface scrollI {
  minLand: boolean
}

export const scroll = ({ minLand }: scrollI) => {
  return {
    overflow: 'auto',
    borderRadius: minLand ? '0px 0px 10px 0px' : '0px 0px 10px 10px',
    height: minLand ? '261px' : '361px',
    background:
    `linear-gradient(
      to bottom,
      rgba(128, 128, 128, 0.400) 0px, rgba(128, 128, 128, 0.400) 49px,
      steelblue 49px, steelblue 50px,
      rgba(128, 128, 128, 0.400) 50px, rgba(128, 128, 128, 0.400) 99px,
      steelblue 99px, steelblue 100px,
      rgba(128, 128, 128, 0.400) 100px, rgba(128, 128, 128, 0.400) 149px,
      steelblue 149px, steelblue 150px,
      rgba(128, 128, 128, 0.400) 150px, rgba(128, 128, 128, 0.400) 199px,
      steelblue 199px, steelblue 200px,
      rgba(128, 128, 128, 0.400) 200px, rgba(128, 128, 128, 0.400) 249px,
      steelblue 249px, steelblue 250px,
      rgba(128, 128, 128, 0.400) 250px
    )`
  }
}

interface upperChartContainerI {
  length: number
}

export const upperChartContainer = ({ length }: upperChartContainerI) => {
  return {
    ...flex, ...relative, ...row,
    //background: 'darkgreen',
  }
}

interface upperChartContainerRightI {
  graphDontFit: boolean,
  width: number,
  length: number,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
}

export const upperChartContainerRight = ({ graphDontFit, width, length, minPort, minLand, medPort, medLand, larPort, larLand }: upperChartContainerRightI) => {
  return {
    ...flex, ...column,
    position: graphDontFit ? 'fixed' : 'relative',
    right: graphDontFit ? '200px' : '0px',
    width: graphDontFit ? '0px' : '200px',
    height: '260px',
    //background: 'yellow',
  }
}

interface chartRowI {
  length: number
}

export const chartRow = ({ length }: chartRowI) => {
  return {
    ...flex, ...relative, ...row, ...jcfs,
    alignItems: 'end',
    width: `${92*length}px`,
    height: '211px',
    marginTop: '50px',
  }
}

interface columnBarI {
  darkMode: boolean,
  percentage: number
}

export const columnBar = ({ percentage, darkMode }: columnBarI) => {
  return {
    ...flex, ...relative, ...row, ...jcc,
    background: 'transparent',
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

export const leftSide = ({ darkMode, percentage }: columnBarI) => {
  return {
    width: '10px',
    height: `${(percentage + 5)* 2}px`,
    background: darkMode ? 
      `linear-gradient(45deg, transparent 7px, silver 7px, #141414 ${(percentage + 5) + (0.415 * (percentage + 5))}px, gray 0px)` :
      `linear-gradient(45deg, transparent 7px, silver 7px, silver ${(percentage + 5) + (0.415 * (percentage + 5))}px, gray 0px)`,
  }
}

export const centerSide = ({ darkMode, percentage }: columnBarI) => {
  return {
    ...flex, ...relative,
    width: '30px',
    height: `${(percentage  + 5)* 2}px`,
    background: darkMode ?
      'linear-gradient(to bottom, gray 10px, #595959 0px)' :
      'linear-gradient(to bottom, gray 10px, darkgrey 0px)',
    textWrap: 'nowrap',
  }
}

interface onlyMinLandI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
}

export const onlyMinLand = ({ minPort, minLand, medPort, medLand, larPort, larLand }: onlyMinLandI) => {
  return {
    ...absolute,
    display: minLand ? 'flex' : 'none',
    transform: 'rotate(270deg)',
    width: '-webkit-fill-available',
    height: '23px',
    //background: 'red',
    bottom: '9px',
    left: '9px',
  }
}

export const rightSide = ({ darkMode, percentage }: columnBarI) => {
  return {
    ...flex,
    width: '10px',
    height: `${(percentage + 5) * 2}px`,
    background: darkMode ?
      `linear-gradient(180deg, #0000 10px, #595959 0),
      linear-gradient(225deg, #0000 7px, gray 7px)` :
      `linear-gradient(180deg, #0000 10px, darkgrey 0),
      linear-gradient(225deg, #0000 7px, gray 7px)`
  }
}

interface titlesBoxI {
  length: number,
  minLand: boolean,
}

export const titlesBox = ({ length, minLand }: titlesBoxI) => {
  return {
    ...row, ...aic, ...noSelect,
    display: minLand ? 'none' : 'flex',
    //background: 'darkgreen',
    height: '100px',
    width: `${length * 92}px`,
    paddingLeft: '57px',
    paddingRight: '45px',
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
    fontWeight: 600,
  }
}

interface levelI {
  graphDontFit: boolean,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean,
  bgColor: string
}

export const level = ({ graphDontFit, minPort, minLand, medPort, medLand, larPort, larLand, bgColor }: levelI) => {
  return {
    ...flex, ...relative, ...row, ...jcsb,
    width: '200px',
    height: '49px',
    marginBottom: '1px',
    background: graphDontFit ? `${bgColor}80` : 'none',
    //background: `red`,
    alignItems: 'flex-end',
    right: graphDontFit ? '-194px' : '0px',
    borderRadius: '10px 0px 0px 0px',
  }
}

interface innerLevelI {
  graphDontFit: boolean,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean,
}

export const innerLevel = ({ graphDontFit, minPort, minLand, medPort, medLand, larPort, larLand }: innerLevelI) => {
  return {
    ...flex, ...column, ...noSelect,
    //paddingLeft: minPort || minLand ? '10px' : '0px',
    paddingLeft: graphDontFit ? '10px' : '0px',
  }
}

interface colorLevelI {
  graphDontFit: boolean,
  color: string,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
}

export const colorLevel = ({ graphDontFit, minPort, minLand, medPort, medLand, larPort, larLand, color }: colorLevelI ) => {
  return {
    display: minPort ? 'flex' : 'flex',
    position: graphDontFit ? 'fixed' : 'relative',
    right: '6px',
    background: color,
    width: '6px',
    height: '38px',
    //marginBottom: '0px',
  }
}

export const levelTitle = () => {
  return {
    ...row, ...relative,
    display: 'inline',
    width: '135px',
    height: '20px',
    justifyContent: 'flex-end',
    //background: 'darkorange',
    fontSize: '14px',
    color: 'white',
  }
}

interface imageSVGI {
  graphDontFit: boolean,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean,
}

export const boxSVG = ({ graphDontFit, minPort, minLand, medPort, medLand, larPort, larLand }: imageSVGI) => {
  return {
    ...flex, ...relative, ...jcc, ...aic,
    //background: 'gray',
    width: '50px',
    height: '50px',
  }
}

export const imageSVG = ({ graphDontFit, minPort, minLand, medPort, medLand, larPort, larLand }: imageSVGI ) => {
  return {
    width: '45px',
    height: '45px',
    //marginRight: minPort || minLand ? '55px' : '40px',
    marginRight: graphDontFit ? '65px' : '40px',
  }
}