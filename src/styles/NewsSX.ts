import {
  flex, relative, row,
  jcc, fixed, noSelect
} from './CommonsSX';
import $ from 'jquery';

// LAR (width)    // MIN (width)    //
// 500 total      // 500 total      //
// date text      // date text      //
// 80   420       // 80   420       //
// button (w & h) // button (w & h) //
// 90 30          // 50 23          //

// 80 + 420 + 30 = 530

interface arrayI {
  id: number
}

interface colorAndHoverI {
  array: arrayI[]
}

export const colorAndHoverIsDark = ({ array }: colorAndHoverI) => {
  array.forEach(e => {
    $(`.text${e.id}`)
      .stop(true, true)
      .css("background", "#76b376")
      .animate({scrollLeft: 0}, 0)
    $(`.date${e.id}`)
      .css("background", "#bd7979")
    $(`.text${e.id}`).on("mouseenter", function() {
      $(`.text${e.id}`)
        .css("background", "lightgreen")
        .stop(true, true)
        .delay(400)
        .animate({scrollLeft: 420}, 8000)
      $(`.date${e.id}`)
        .css("background", "lightcoral")
    })
    $(`.text${e.id}`).on("mouseleave", function() {
      $(`.text${e.id}`)
        .stop(true, true)
        .css("background", "#76b376")
        .animate({scrollLeft: 0}, 0)
      $(`.date${e.id}`)
        .css("background", "#bd7979")
    })
  })
}

export const colorAndHoverNotDark = ({ array }: colorAndHoverI) => {
  array.forEach(e => {
    $(`.text${e.id}`)
      .stop(true, true)
      .css("background", "lightgreen")
      .animate({scrollLeft: 0}, 0)
    $(`.date${e.id}`)
      .css("background", "lightcoral")
    $(`.text${e.id}`).on("mouseenter", function() {
      $(`.text${e.id}`)
        .css("background", "#76b376")
        .stop(true, true)
        .delay(400)
        .animate({scrollLeft: 420}, 8000)
      $(`.date${e.id}`)
        .css("background", "#bd7979")
    })
    $(`.text${e.id}`).on("mouseleave", function() {
      $(`.text${e.id}`)
        .stop(true, true)
        .css("background", "lightgreen")
        .animate({scrollLeft: 0}, 0)
      $(`.date${e.id}`)
        .css("background", "lightcoral")
    })
  })
}

interface isRunningI {
  current: boolean
}

interface shownHiddenI {
  animRunning: boolean,
  isRunning: isRunningI,
  minPort: boolean,
  minLand: boolean,
  setAnimRunning: Function
}

export const shownHiddenPort = ({ animRunning, isRunning, minPort, minLand, setAnimRunning }: shownHiddenI) => { // SHOWN -> HIDDEN  // PORT
  $(`.buttonShow`)
    .stop()
    .css("left", "6px")
  $(`.dateAndText`)
    .css("left", "500px")
  if (!animRunning) {
    $(`.buttonShow`)
      .css(`animationName`,`shake`)
      .css(`animationDuration`,`6s`)
      .css(`animationDelay`,`3s`)
      .css(`animationIterationCount`,`infinite`)
  }
  $(`#buttonShow`).on("click", function() {
    $(`#buttonShow`)
      .stop()
      .css(`animationName`,`none`)
      .css(`animationDuration`,`0s`)
      .css(`animationDelay`,`0s`)
      .css(`animationIterationCount`,`none`)
    $(`.dateAndText`)
      .stop()
      .animate( { left: minPort || minLand ? -20 : -30 }, { queue: false, easing: 'easeOutCubic', duration: 800, complete: function() {
        isRunning.current = false;
        if (!isRunning.current) setAnimRunning(false)
      }})
  })
}

export const hiddenShowPort = ({ animRunning, isRunning, minPort, minLand, setAnimRunning }: shownHiddenI) => { // HIDDEN -> SHOWN // PORT
  $(`.buttonShow`)
    .stop()
    .css("left", "6px")
  $(`.dateAndText`)
    .css("left", minPort || minLand ? "-20px" : "-30px")
  if (!animRunning) {
    $(`.buttonShow`)
      .css(`animationName`,`shake`)
      .css(`animationDuration`,`6s`)
      .css(`animationDelay`,`3s`)
      .css(`animationIterationCount`,`infinite`)
  }
  $(`#buttonShow`).on("click", function() {
    $(`#buttonShow`)
      .stop()
      .css(`animationName`,`none`)
      .css(`animationDuration`,`0s`)
      .css(`animationDelay`,`0s`)
      .css(`animationIterationCount`,`none`)
    $(`.dateAndText`)
      .stop()
      .animate( { left: 500 }, { queue: false, easing: 'easeOutCubic', duration: 1500, complete: function() {
        isRunning.current = false;
        if (!isRunning.current) setAnimRunning(false)
      }})
  })
}

export const showHiddenLand = ({ animRunning, isRunning, minPort, minLand, setAnimRunning }: shownHiddenI) => { // SHOWN -> HIDDEN // LAND
  if (!animRunning) {
    $(`.buttonShow`)
      .css("left", "506px")
    $(`.dateAndText`)
      .css("left", minPort || minLand ? "480px" : "470px")
  }
  if (!animRunning) {
    $(`.buttonShow`)
      .css(`animationName`,`shake`)
      .css(`animationDuration`,`6s`)
      .css(`animationDelay`,`3s`)
      .css(`animationIterationCount`,`infinite`)
  }
  $(`.buttonShow`).on("click", function() {
    $(`.dateAndText`)
      .stop()
      .animate( { left: minPort || minLand ? -20 : -30}, { queue: false, easing: 'easeOutCubic', duration: 800, complete: function() {
        isRunning.current = false;
        if (!isRunning.current) setAnimRunning(false)
      }})
    $(`.buttonShow`)
      .stop()
      .css(`animationName`,`none`)
      .css(`animationDuration`,`0s`)
      .css(`animationDelay`,`0s`)
      .css(`animationIterationCount`,`none`)
      .animate( { left: 6}, { queue: false, easing: 'easeOutCubic', duration: 800, complete: function() {
        isRunning.current = false;
        if (!isRunning.current) setAnimRunning(false)
      }})
  })
}

export const hiddenShownLand = ({ animRunning, isRunning, minPort, minLand, setAnimRunning }: shownHiddenI) => { // HIDDEN -> SHOWN // LAND
  if (!animRunning) {
    $(`.buttonShow`)
      .css("left", "6px")
    $(`.dateAndText`)
      .css("left", minPort || minLand ? "-20px" : "-30px")
  }
  if (!animRunning) {
    $(`.buttonShow`)
      .css(`animationName`,`shake`)
      .css(`animationDuration`,`6s`)
      .css(`animationDelay`,`3s`)
      .css(`animationIterationCount`,`infinite`)
  }
  $(`.buttonShow`).on("click", function() {
    $(`.dateAndText`)
      .animate( { left: minPort || minLand ? 480 : 470 }, { queue: false, easing: 'easeOutCubic', duration: 1500, complete: function() {
        isRunning.current = false;
        if (!isRunning.current) setAnimRunning(false)
      }})
    $(`.buttonShow`)
      .css(`animationName`,`none`)
      .css(`animationDuration`,`0s`)
      .css(`animationDelay`,`0s`)
      .css(`animationIterationCount`,`none`)
      .animate( { left: 506 }, { queue: false, easing: 'easeOutCubic', duration: 1500, complete: function() {
        isRunning.current = false;
        if (!isRunning.current) setAnimRunning(false)
      }})
  })
}

interface backgroundI {
  minPort: boolean,
  minLand: boolean,
  medPort: boolean,
  medLand: boolean,
  larPort: boolean,
  larLand: boolean,
}

export const background = ({ minPort, minLand, medPort, medLand, larPort, larLand }: backgroundI) => { // background
  return {
    ...flex, ...fixed, ...row,
    top: minPort || medPort ? 'calc(17vw + 10px + 7vh)' : larPort ? 'calc(143px + 10vh)' : 'none', // medPort 17vw+10px // larPort 127+10+6
    bottom: minLand || medLand || larLand ? '20px' : 'none',
    left: '-494px', // 500 - 6
    //background: 'yellow',
    width: minPort || minLand ? '520px' : '530px',
    justifyContent: 'end',
  }
}

interface buttonNewsI {
  darkMode: boolean,
  minPort: boolean,
  minLand: boolean,
}


export const buttonNews = ({ darkMode, minPort, minLand }: buttonNewsI) => {
  return {
    ...flex, ...fixed,
    minWidth: minPort || minLand ? '20px !important' : '30px !important',
    width: minPort || minLand ? '20px !important' : '30px !important',
    minHeight: '120px !important',
    height: '120px !important',
    color: 'darkblue',
    fontSize: minPort || minLand ? '10px' : '14px',
    borderRadius: '0px',
    background: darkMode ? '#708f99' : 'lightblue',
    ':hover': {
      background: darkMode ? '#749aa6' : '#91bfcf'
    }
  }
}

interface changeLogTypoI {
  english: boolean,
  minPort: boolean,
  minLand: boolean,
  larPort: boolean,
  larLand: boolean,
}

export const changeLogTypo = ({ english, minPort, minLand, larPort, larLand }: changeLogTypoI) => {
  return {
    ...flex,
    fontFamily: 'Roboto',
    fontSize: minPort || minLand ? '11px' : english && ( larPort || larLand ) ? '14px' : '13px',
    fontWeight: '500',
    transform: 'rotate(270deg)',
    textWrap: 'nowrap',
  }
}

interface sliderBoxI {
  larPort: boolean,
  darkMode: boolean
}

export const sliderBox = ({ larPort, darkMode }: sliderBoxI) => {
  return {
    ...flex, ...relative,
    flexDirection : 'column-reverse',
    //background: 'red', /* DEV */
    left: larPort ? '-30px': 'none',
    width: '500px',
    height: '168px', // 24 * 7
    background:
      darkMode ?
      `linear-gradient(
        to right,
        #bd7979 0px, #bd7979 80px,
        #76b376 80px, #76b376 500px
      )` :
      `linear-gradient(
        to right,
        lightcoral 0px, lightcoral 80px,
        lightgreen 80px, lightgreen 500px
      )`
  }
}

export const buttonsContainer = () => {
  return {
    ...flex,
    position: 'absolute',
    top: '-20px',
    flexDirection : 'row',
    /* background: 'orange', */ /* DEV */
    height: '20px'
  }
}

interface eachDescriptionI {
  animRunning: boolean,
  show: boolean,
  minPort: boolean,
  larPort: boolean,
}

export const eachDescription = ({ animRunning, show, minPort, larPort }: eachDescriptionI) => {
  return {
    ...flex, ...row, ...relative,
    width: animRunning ? 'none' : minPort && show ? 'calc(100vw - 12px - 20px)' : larPort && show ? 'calc(100vw - 12px - 30px)' : '500px',
    maxWidth: `500px`,
    height: '24px',
    minHeight: '24px',
  }
}

interface dateI {
  darkMode: boolean,
  minPort: boolean,
  minLand: boolean,
}

export const date = ({ darkMode, minPort, minLand }: dateI) => {
  return {
    ...flex, ...relative, ...jcc, ...noSelect,
    width: '80px',
    minWidth: '80px',
    background: darkMode ? '#bd7979' : 'lightcoral',
    fontSize: minPort || minLand ? '14px' : '16px',
  }
}

interface textI {
  darkMode: boolean,
  minPort: boolean,
  minLand: boolean,
}

export const text = ({ darkMode, minPort, minLand }: textI) => {
  return {
    ...flex, ...relative, ...noSelect,
    width: '420px',
    background: darkMode ? '#76b376' : 'lightgreen',
    //background: 'gainsboro',
    overflowY: 'hidden',
    overflowX: 'hidden',
    textWrap: 'nowrap',
    fontSize: minPort || minLand ? '14px' : '16px',
  }
}