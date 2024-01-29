import {
  flex, noSelect, row, absolute, relative,
  column, jcc, jcsb, aic, aifs, jcfs, jcfe
} from './CommonsSX';
import './SkillsSX.css';
import $ from 'jquery';
import { keyframes } from '@emotion/react'

interface levelsI {
  id: number
}

interface graphDontFitI {
  levels: levelsI[],
  animRunning: boolean
}

export const graphDontFit = ({ levels, animRunning }: graphDontFitI) => {
  if (animRunning) {
    levels.forEach(e => {
      $(`.colorFixedCl${e.id}`) // stop all shakes
        .css(`animationName`,`none`)
        .css(`animationDuration`,`0s`)
        .css(`animationDelay`,`0s`)
        .css(`animationIterationCount`,`none`)
    })
  } else {
    levels.forEach(e => {
      $(`.colorFixedCl${e.id}`) // make bars shake
        .css(`animationName`,`shakeKF`)
        .css(`animationDuration`,`6s`) // entire color shake duration
        .css(`animationDelay`,`calc(2.5s + 0.${e.id}s)`) // start delay + each bar delay
        .css(`animationIterationCount`,`infinite`)
      $(`.colorFixedCl${e.id}`)
      .on('click', function(){ // on onClick bar moves
        $(`.entireBarMoveCl${e.id}`)
          .css(`animationName`,`entireBarMoveClKF`)
          .css(`animationDuration`,`2.5s`)
        $(`.entireBarMoveCl${e.id}`)
        .on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
          $(`.entireBarMoveCl${e.id}`) // return to  initial state
            .css(`animationName`,`none`)
            .css(`animationDuration`,`none`)
        })
      })
    })
  }
}

export const graphFit = (levels: levelsI[]) => {
  levels.forEach(() => {
    levels.forEach(e => {
      $(`.colorFixedCl${e.id}`) // stop all shakes
        .css(`animationName`,`none`)
        .css(`animationDuration`,`0s`)
        .css(`animationDelay`,`0s`)
        .css(`animationIterationCount`,`none`)
      $(`.entireBarMoveCl${e.id}`) // stop bar moving
        .css(`animationName`,`none`)
        .css(`animationDuration`,`none`)
    })
  })
}

export const background = () => {
  return {
    ...flex, ...relative, ...jcsb, ...column, ...aifs,
    //background: 'darkred',
    width: 'calc(100vw - 12px)',
    height: 'calc(100vh - 12px)'
  }
}

interface colorFixedI {
  graphDontFit: boolean,
  color: string,
}

export const colorFixed = ({ graphDontFit, color }: colorFixedI ) => {
  return {
    display: 'flex',
    position: graphDontFit ? 'fixed' : 'absolute',
    pointerEvents: graphDontFit ? null : 'none',
    right: '6px',
    background: color,
    width: '6px',
    height: '38px',
  }
}

interface titlesNextI {
  graphDontFit: boolean
  currentWidth: number,
}

export const titlesNext = ({ currentWidth, graphDontFit }: titlesNextI) => {
  return {
    ...flex, ...absolute,
    right: graphDontFit ? '10px' : '0px',
    background: 'rgba(128, 128, 128, 0.400)',
    width: graphDontFit ? `${94-(850-currentWidth)}px` : '98px',
    height: '100px',
  }
}

interface entireBarContainerI {
  graphDontFit: boolean,
}

export const entireBarContainer = ({ graphDontFit }: entireBarContainerI) => {
  return {
    ...flex, ...relative, ...row, ...jcsb,
    width: '200px',
    height: '49px',
    marginBottom: '1px',
    //background: 'yellow',
    alignItems: 'flex-end',
    right: graphDontFit ? '-194px' : '0px',
  }
}

interface entireBarI {
  graphDontFit: boolean,
  bgColor: string
}

export const entireBar = ({ graphDontFit, bgColor }: entireBarI) => {
  return {
    ...flex, ...row, ...jcsb, ...relative,
    width: '200px',
    height: '49px',
    marginBottom: '0px',
    background: graphDontFit ? `${bgColor}80` : 'none',
    //background: 'darkred',
    alignItems: 'flex-end',
    borderRadius: '10px 0px 0px 0px',
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
}

export const middle = ({ minPort, minLand }: middleI) => {
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
  larPort: boolean,
  larLand: boolean
}

export const leftRightHelper = ({ graphDontFit, larPort, larLand }: leftRightHelperI) => {
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
  minLand: boolean,
}

export const skills = ({ minLand }: skillsI) => {
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
  currentWidth: number,
  minLand: boolean,
}

export const chartContainer = ({ graphDontFit, currentWidth, length, minLand }:chartContainerI) => {
  return {
    ...flex, ...relative, ...column, ...jcfs,
    //background: 'red',
    alignItems: 'flex-start',
    width: graphDontFit ? `${currentWidth}px` : `${(length*92)+200}px`,
    height: minLand ? '261px' : '361px', // 50 + 1 + 210 + 100 = 361
  }
}

interface scrollI {
  graphDontFit: boolean,
  minLand: boolean
}

export const scroll = ({ graphDontFit, minLand }: scrollI) => {
  return {
    overflow: 'auto',
    borderRadius: graphDontFit ? '0px 0px 10px 0px' : minLand ? '0px 0px 10px 0px' : '0px 0px 10px 10px',
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
      rgba(128, 128, 128, 0.400) 250px, rgba(128, 128, 128, 0.400) 261px,
      transparent 261px, transparent
    )`
  }
}

export const upperChartContainer = () => {
  return {
    ...flex, ...relative, ...row,
    //background: 'darkgreen',
    height: '261px',
  }
}

interface upperChartContainerRightI {
  graphDontFit: boolean,
}

export const upperChartContainerRight = ({ graphDontFit }: upperChartContainerRightI) => {
  return {
    ...flex, ...column,
    position: graphDontFit ? 'fixed' : 'relative',
    right: graphDontFit ? '200px' : '0px',
    width: graphDontFit ? '0px' : '200px',
    height: '261px',
    //background: 'yellow',
    zIndex: 3
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
  id: number,
  darkMode: boolean,
  percentage: number
}

const growAnim = (percentage: number) => { return keyframes({ from: { height: `0px` }, to: { height: `${(percentage  + 5)* 2}px` } }) }
const growAnimDuration: number = 1.2
//const growAnimDuration: number = 10

export const columnBar = ({ percentage }: columnBarI) => {
  return {
    ...flex, ...relative, ...row, ...jcc,
    width: '90px',
    height: `calc(${percentage + 5}px * 2)`,
    animation: `${growAnim(percentage)} ${growAnimDuration}s linear`,
    borderBottom: '2px solid black',
    borderLeft: '2px solid black',
    borderImage: 'linear-gradient(to top, black 0px, black 20px, transparent 20px) 1',
    overflow: 'hidden',
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
    animation: `${growAnim(percentage)} ${growAnimDuration}s linear`,
    background: darkMode ?
      `linear-gradient(225deg, gray 7px, #141414 7px, transparent),
        linear-gradient(45deg, #0000 7px, silver 0)` :
      `linear-gradient(225deg, gray 7px, silver 7px, transparent),
        linear-gradient(45deg, #0000 7px, silver 0)`
  }
}

export const centerSide = ({ darkMode, percentage }: columnBarI) => {
  return {
    ...flex, ...relative, ...aic, ...jcfs,
    width: '30px',
    height: `${(percentage  + 5)* 2}px`,
    animation: `${growAnim(percentage)} ${growAnimDuration}s linear`,
    flexDirection: 'column-reverse',
    background: darkMode ?
      'linear-gradient(to bottom, gray 10px, #595959 0px)' :
      'linear-gradient(to bottom, gray 10px, darkgrey 10px)',
    //background: 'blue',
    textWrap: 'nowrap',
  }
}

interface fixedToppingI {
  darkMode: boolean,
  minLand: boolean
}

export const fixedToppingMinLand = ({ darkMode, minLand }: fixedToppingI) => {
  return {
    ...row, ...absolute,
    display:  minLand ? 'flex' : 'none',
    //background: `linear-gradient(180deg, darkblue 10px, darkred 0)`,
    background:  darkMode ?
      `linear-gradient(180deg, gray 10px, #595959 0)` :
      `linear-gradient(180deg, gray 10px, darkgrey 0)`,
    marginLeft: '0px',
    width: '30px',
    height: '20px',
    zIndex: 1,
  }
}

interface onlyMinLandI {
  minLand: boolean,
  percentage: number,
}

export const onlyMinLand = ({ minLand, percentage }: onlyMinLandI) => {
  return {
    ...absolute, ...aic, ...jcfe, ...column,
    display: minLand ? 'flex' : 'none',
    width: '37px',
    height: `${((percentage + 5)* 2)}px`,
    animation: `${growAnim(percentage)} ${growAnimDuration}s linear`,
    //background: 'blue',
    textWrap: 'nowrap',
    bottom: '0px',
    marginLeft: '33px',
    overflow: 'hidden',
  }
}

export  const titlesOnlyMinLand = () => {
  return {
    ...flex, ...relative,
    transform: 'rotate(270deg)',
    //background: 'darkred',
    width: '180px',
    marginBottom: '90px',
  }
}

export const rightSide = ({ darkMode, percentage }: columnBarI) => {
  return {
    ...flex,
    width: '10px',
    height: `${(percentage + 5) * 2}px`,
    animation: `${growAnim(percentage)} ${growAnimDuration}s linear`,
    background: darkMode ?
      `linear-gradient(180deg, #0000 10px, #595959 0),
       linear-gradient(225deg, #0000 7px, gray 7px)` :
      `linear-gradient(180deg, #0000 10px, darkgrey 0),
       linear-gradient(225deg, #0000 7px, gray 7px)`,
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
    background: 'rgba(128, 128, 128, 0.400)',
    borderRadius: '0px 0px 0px 10px',
    height: '100px',
    width: `${length * 92}px`,
    paddingLeft: '57px',
    paddingRight: '45px',
    borderColor: 'transparent',
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

interface innerLevelI {
  graphDontFit: boolean,
}

export const innerLevel = ({ graphDontFit }: innerLevelI) => {
  return {
    ...flex, ...column, ...noSelect,
    paddingLeft: graphDontFit ? '10px' : '0px',
  }
}

export const levelTitle = () => {
  return {
    ...row, ...relative, ...jcfe,
    display: 'inline',
    width: '135px',
    height: '20px',
    //background: 'darkorange',
    fontSize: '14px',
    color: 'white',
  }
}

export const boxSVG = () => {
  return {
    ...flex, ...relative, ...jcc, ...aic,
    //background: 'gray',
    width: '49px',
    height: '49px',
  }
}

interface imageSVGI {
  graphDontFit: boolean,
}

export const imageSVG = ({ graphDontFit }: imageSVGI ) => {
  return {
    width: '45px',
    height: '45px',
    marginRight: graphDontFit ? '65px' : '58px',
  }
}