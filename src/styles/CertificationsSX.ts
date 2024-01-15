import {
  mix, noDeco, aic, asc, column,
  flex, jcc, noSelect, relative,
  jcse, jcsb, pointer
} from './CommonsSX';
import $ from 'jquery';

interface arrayI {
  id: number
}

interface loadedI {
  loaded: boolean
}

interface hoverI {
  array: arrayI[];
  loaded: loadedI[];
}

export const hover = ({ array, loaded }: hoverI) => {
  array.forEach(e => {
    if (loaded[array.indexOf(e)].loaded) {
      $(`.cardClass${e.id}`).on("mouseenter", function () {
        $(`.titleClass${e.id}`).css('transition', 'all .2s ease-in-out').css('transform', 'scale(1.1)')
        $(`.imageClass${e.id}`).css('transition', 'all .2s ease-in-out').css('transform', 'scale(1.1)')
        $(`.urlClass${e.id}`).css('transition', 'all .2s ease-in-out').css('transform', 'scale(1.1)').css('mix-blend-mode', 'difference')
      }).on("mouseleave", function () {
        $(`.titleClass${e.id}`).css('transition', 'all .2s ease-in-out').css('transform', 'scale(1)')
        $(`.imageClass${e.id}`).css('transition', 'all .2s ease-in-out').css('transform', 'scale(1)')
        $(`.urlClass${e.id}`).css('transition', 'all .2s ease-in-out').css('transform', 'scale(1)')
      })
    }
  })
}

interface topBottomHelperI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
}

export const topBottomHelper = ({ minPort, minLand, medPort, medLand }: topBottomHelperI) => {
  return {
    ...flex, ...relative,
    //background: 'red',
    width: '20px',
    minHeight: minPort || minLand ? '1px' : medPort || medLand ? '1px' : '120px',
  }
}

export const background = () => {
  return {
    //...flex, ...aic, ...column, ...jcsb,
    display: 'flex',
    position: 'relative',
    background: 'none',
    width: 'calc(100vw - 12px)',
    //height: 'calc(100vh - 12px)',
    height: '100vh',
    //height: 'fit-content',
  }
}

interface genI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
}

export const mainBox = ({ minPort, medPort, larPort, larLand }: genI) => {
  return {
    ...flex, //...jcsb,
    background: 'darkred', /* DEV */
    flexWrap: 'wrap',
    justifyContent: 'center',
    //minHeight: larLand ? '220px' : 'none',
    //height: minPort || medPort || larPort ? '80vh' : '50vh',
    /* overflow: 'scroll', */
    maxHeight: 'calc(100vh - 12px)',
    // '::-webkit-scrollbar': {
    //   width: '0px',
    //   height: '0px',
    // },
    position: 'relative',
    //alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '100vw',

    overflow: 'auto',
    overflowX: 'hidden',
    '::-webkit-scrollbar': {
      width: '6px',
      backgroundColor: '#F5F5F5'
    },
    '::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.3)',
      backgroundColor: '#F5F5F5'
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: '#000000',
      border: '5px solid #555555',
    },
    /* marginTop: '6px',
    marginBottom: '12px' */
  }
}

// .scoreTable::-webkit-scrollbar {
//   width: 0px;
//   height: 0px;
// }

interface leftRightHelperI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
}

export const leftRightHelper = ({ larLand }: leftRightHelperI) => {
  return {
    display: larLand ? 'flex' : 'none',
    //background: 'yellow',
    minWidth: '44px',
  }
}

interface cardI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
}

export const card = ({ minPort, minLand, medPort, medLand }: cardI) => { // card
  return {
    ...flex, ...relative, ...column, ...aic, //...jcsb,
    //background: 'orange',
    minWidth: minPort ? '87vw' : minLand || medPort || medLand ? '32vw' : '400px', // minWidth
    width: minPort ? '87vw' : medPort ? '50vw' : minLand || medLand ? '32vw' : '400px', // minWidth
    height: minPort ? '25vh' : medPort ? '20vh' : minLand || medLand ? '35vh' : '220px', // height
    justifyContent: 'space-evenly',
  }
}

interface titleI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean
}

export const title = ({ minPort, minLand, medPort, medLand, larPort }: titleI) => { // title
  return {
    ...noSelect, ...mix,
    //background: 'Red',
    color: '#FFFFFF',
    fontSize: minPort ? '4.1vw': medPort ? '2.5vw' : minLand || medLand ? '1.6vw' : '20px', // fontSize
  }
}

interface boxMediaI {
  darkMode: boolean,
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean
}

export const boxMedia = ({ darkMode, minPort, minLand, medPort, medLand, larPort }: boxMediaI) => { // boxMedia
  return {
    display: 'flex',
    ...pointer, ...noSelect,
    //background: 'red',
    width: minPort ? '45vw' : medPort ? '25vw' : minLand || medLand ? '20vw' : '220px', // width
    height: minPort ? '25vw' : medPort ? '13vw' : minLand || medLand ? '10vw' : '120px', // height
    'filter': darkMode ?
      'brightness(.6)' :
      'none',
    ':hover': darkMode ?
      { filter: 'brightness(.65)' } :
      { filter: 'brightness(.9)' },
    zIndex: 1000,
  }
}

export const boxMediaWrapper = ({ darkMode, minPort, minLand, medPort, medLand, larPort }: boxMediaI) => { // boxMedia
  return {
    display: 'flex', ...noSelect,
    width: minPort ? '45vw' : medPort ? '25vw' : minLand || medLand ? '20vw' : '220px', // width
    height: minPort ? '25vw' : medPort ? '13vw' : minLand || medLand ? '10vw' : '120px', // height
  }
}

interface placeholderI {
  darkMode?: boolean,
  loaded: boolean
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
}

export const placeholderBackground = ({ darkMode, loaded, minPort, minLand, medPort, medLand }: placeholderI) => {
  return {
    ...relative, ...noSelect,
    //display: 'flex',
    display: loaded ? 'none' : 'flex',
    background: darkMode ? '#a66d28' : 'darkorange',
    marginLeft: minPort ? '-45vw' : medPort ? '-25vw' : minLand || medLand ? '-20vw' : '-220px',
    width: minPort ? '45vw' : medPort ? '25vw' : minLand || medLand ? '20vw' : '220px', // width
    height: minPort ? '25vw' : medPort ? '13vw' : minLand || medLand ? '10vw' : '120px', // height
    zIndex: 1000,
  }
}

export const placeholderAnimation = ({ loaded, minPort, minLand, medPort, medLand }: placeholderI) => {
  return {
    ...noSelect, ...relative,
    //display: 'flex',
    display: loaded ? 'none' : 'flex',
    marginLeft: minPort ? '-35vw' : medPort ? '-19vw' : minLand || medLand ? '-15vw' : '-170px', // minPort (45+25/2) | medPort (25+13/2) | minLand || medLand (20+10/2) | lar (120+220/2)
    width: minPort ? '25vw' : medPort ? '13vw' : minLand || medLand ? '10vw' : '120px', // width
    height: minPort ? '25vw' : medPort ? '13vw' : minLand || medLand ? '10vw' : '120px', // height
    zIndex: 1001,
    animation: `cert .8s linear infinite`,
    animationTimingFunction: 'steps(12, end)',
    '@keyframes cert': {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' },
    }
  }
}

interface urlI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean
}

export const url = ({ minPort, minLand, medPort, medLand, larPort }: urlI) => {
  return {
    color: '#FFFFFF',
    paddingRight: '0vw',
    paddingTop: '0vw',
    fontSize: minPort ? '3.8vw' : medPort ? '2.3vw' : minLand || medLand ? '1.8vw' : larPort ? '20px' : '20px',
    //background: 'gray',
  }
}

interface anchorI {
  loaded: boolean
}

export const anchor = ({ loaded }: anchorI) => {
  return {
    ...asc, ...noSelect,...noDeco, ...mix,
    color: '#FFFFFF',
    pointerEvents: loaded ? null : 'none',
  }
}

export const dialogStyle = () => {
  return {
    maxWidth: '100vw',
    maxHeight: '100vh',
    padding: '0px'
  }
}

interface dialogPaperI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean
}

export const dialogPaper = ({ minPort, minLand, medPort, medLand, larPort }: dialogPaperI) => {
  return {
    ...flex, ...jcc, ...aic,
    overflow: 'hidden',
    padding: '0px',
    maxWidth: '100vw',
    maxHeight: '100vh',
    width: minPort ? '85vw' : minLand ? '85vw' : medPort ? '90vw' : medLand ? '80vw' : larPort ? '85vw' : '70vw',
    height: minPort ? '80vh' : minLand ? '80vh' : medPort ? '35vh' : medLand ? '55vh' : larPort ? '45vh' : '65vh',
    '&::-webkit-scrollbar': { display: 'none' }
  }
}

interface dialogBoxI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean
}

export const dialogBox = ({ minPort, minLand, medPort, medLand, larPort }: dialogBoxI) => {
  return {
    width: minPort ? 'calc(80vh - 32px)' : minLand ? 'calc(85vw - 32px)' : medPort ? 'calc(90vw - 32px)' : medLand ? 'calc(80vw - 32px)' : larPort ? 'calc(85vw - 32px)' : 'calc(70vw - 32px)',
    height: minPort ? 'calc(85vw - 32px)' : minLand ? 'calc(80vh - 32px)' : medPort ? 'calc(35vh - 32px)' : medLand ? 'calc(55vh - 32px)' : larPort ? 'calc(45vh - 32px)' : 'calc(65vh - 32px)',
    transform: minPort ? 'rotate(-90deg)' : 'none',
    padding: '0px'
  }
}