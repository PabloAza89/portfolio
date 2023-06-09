import { flex, noSelect, row, absolute, relative, column, jcc, fixed } from './CommonsSX';
import { blue, brown, lime, red, grey } from '@mui/material/colors';

export const background = () => {
  return {
    //background: 'darkred',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    justifyContent: 'space-between',
    //alignItems: 'center',// ORIGINAL
    alignItems: 'flex-start',
    width: 'calc(100vw - 12px)', // ORIGINAL
    //width: '900px',
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
    background: 'blue',
    display: 'flex',
    width: '20px',
    minHeight: minPort ? '50px' : minLand ? '0px' : medPort || medLand ? '1px' : larPort || larLand ? '90px' : '90px',
    position: 'relative'
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
    background: 'orange',
    //display: minPort ? 'contents' : 'flex', ANTERIOR
    //alignSelf: 'left',
    display: minPort ? 'contents' : 'flex',
    // width: 'calc(100vw - 12px)', ORIGINAL
    //width: '900px',
    width: 'calc(100vw - 12px)',
    minHeight: minLand ? '261px' : '397px', // for LAR & LAND ?
    height: minLand ? '261px' : '397px',
    //minHeight: minPort || minLand ? '1px' : medPort || medLand ? '1px' : larPort || larLand ? '90px' : '90px',
    position: 'relative',
    
    justifyContent: 'space-between',
    alignItems: 'center'
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
    //display: larPort || larLand ? 'flex' : 'none',
    display: graphDontFit ? 'none' : 'flex',
    background: 'blue',
    //minHeight: '635px',
    minWidth: larPort || larLand ? '22px' : '0px',
    height: '50px',
  }
}

interface mainContainerI {
  length: number,
  minLand: boolean
}

export const mainContainer = ({ length, minLand }:mainContainerI) => {
  return {
    background: 'darkorange',
    //width: `${(92*length)+200}px`, // ORIGINAL
    //width: `914px`, // ORIGINAL
    width: `${(length*92)+200}$px`, // ORIGINAL
    // width: '500px', ACA ESCROLLEA BIEN

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
    //background: 'rgba(128, 128, 128, 0.400)',
    background: 'darkred',
    display: 'flex',
    position: 'relative',
    borderRadius: '0px 10px 10px 10px',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    //alignItems: minLand ? 'center' : 'flex-start',
    alignItems: larPort || larLand ? 'flex-start' : graphDontFit ? 'flex-start' : 'center',
    
    //width: `${width+90}px`, // dis 280, 370 ok (+90)
    width: graphDontFit ? `${width}px` : `${(length*92)+200}px`,
    height: minLand ? '261px' : '361px', // 50 + 1 + 210 + 100 = 361
    
  }
}

export const scroll = () => {
  return {
    //overflow: 'scroll', ORIGINAL
    overflow: 'auto',
  }
}

interface upperChartContainerI {
  length: number
}

export const upperChartContainer = ({ length }: upperChartContainerI) => {
  return {

    display: 'flex',
    position: 'relative',
    background: 'darkgreen',
    flexDirection: 'row',
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
    display: 'flex',
    position: larPort || larLand ? 'relative' : graphDontFit ? 'fixed' : 'relative',
    right: '0px',
    //right: '200px',
    flexDirection: 'column',
    //right: graphDontFit ? '0px' : 'none',
    width: graphDontFit ? '0px' : '200px', // WIDTH 0 FOR SCROLL 
    height: '260px',
    background: 'yellow',
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
    width: `${92*length}px`,
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
    display: 'flex',
    position: 'relative',
    width: '30px',
    height: `${(percentage  + 5)* 2}px`,
    background: 'linear-gradient(to bottom, gray 10px, darkgrey 0px)',
    //alignItems: 'flex-end',
    //justifyContent: 'center',
    textWrap: 'nowrap',
    //transform: 'rotate(90deg)',
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
    display: minLand ? 'flex' : 'none',
    position: 'absolute',
    transform: 'rotate(270deg)',
    //width: '130px',
    width: '-webkit-fill-available',
    height: '23px',
    background: 'red',
    //bottom: '60px',
    //left: '-45px',
    bottom: '9px',
    left: '9px'

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
  length: number,
  minLand: boolean,
}

export const titlesBox = ({ length, minLand }: titlesBoxI) => {
  return {
    display: minLand ? 'none' : 'flex',
    flexDirection: 'row',
    background: 'darkgreen',
    height: '100px',
    width: `${length * 92}px`,
    alignItems: 'center',
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
    width: '200px',
    height: '50px',
    display: 'flex',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    //background: 'gray',
    background: `${bgColor}80`,
    alignItems: 'flex-end',
    right: graphDontFit ? '-194px' : '0px',
    borderRadius: '10px 0px 0px 0px',
    
  }
}

interface innerLevelI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean,
}


export const innerLevel = ({ minPort, minLand, medPort, medLand, larPort, larLand }: innerLevelI) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: minPort || minLand ? '10px' : '0px',

    //paddingLeft: '0px'
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
    position: /* minPort || minLand || */ graphDontFit ? 'fixed' : 'relative',
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
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'flex-end',
    //background: 'darkorange',
    fontSize: '14px',
    color: 'white'
    
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
    marginRight: minPort || minLand ? '70px' : '30px'
  }
}