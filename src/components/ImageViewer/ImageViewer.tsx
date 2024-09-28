import React, {
  ReactElement, useEffect, useLayoutEffect, useState, /* EventTarget, */ useRef, ReactNode, /* MouseEvent, */ /* TouchEvent */
} from 'react';
import css from './ImageViewerCSS.module.css';
import {
  Forward, Add, Remove, Close, RotateLeft, RotateRight,
  Flip, Cached, LockOutlined, Settings,
  PlayCircleOutline, LockOpenOutlined, PauseCircleOutline,
  //Add, Remove
} from '@mui/icons-material/';
import { Button, Switch } from '@mui/material';
import {
  ImageViewerI, operationI, comparisonI, currentZoomI
} from '../../interfaces/interfaces';
//import { consoleCSSParser } from './consoleCSSParser';
import { Input } from '@mui/base/Input';

export const ImageViewer = ({ images, index, setShowImageViewer, controlsOutside, disableAnimation, timing, mode }: ImageViewerI): ReactElement => {

  // let clickOnBG = useRef({ // CLICK ON BACKGROUND MODAL
  //   start: false, // CLICK BEGINS ON BG MODAL
  //   end: false    // CLICK ENDS ON BG MODAL
  // })

  // useEffect(() => { // DISABLES MOUSE (DESKTOP) EVENT WHEN MOUSE DRAG LEAVE CANVAS
  //   let canvas = document.getElementById('canvasImage')
  //   if (canvas !== null) canvas.onmouseout = function() { allowMove.current = false }
  // }, [])

  // window.onmousedown = function(e) {
  //   let modalDiv = document.getElementById('IVBackground');
  //   if (e.target === modalDiv) clickOnBG.current.start =  true
  //   else clickOnBG.current.start =  false
  // }

  // window.onmousedown = function(e) {
  //   let modalDiv = document.getElementById('IVBackground');
  //   if (e.target === modalDiv) clickOnBG.current.start =  true
  //   else clickOnBG.current.start =  false
  // }

  let minIntervalValue = 0 // MINIMUM INTERVAL VALUE
  let maxIntervalValue = 5 // MAXIMUN INTERVAL VALUE
  let defIntervalValue = 1 // DEFAULT INTERVAL VALUE

  let minZoom = '0.0'
  let maxZoom = '5.0'


  window.onmouseup = function(e: MouseEvent) {
    allowMove.current = false // STOP DRAG & MOUSE UP OUTSIDE WINDOW
  }

  window.onmousedown = function(e: MouseEvent) {

    let setInterval = document.getElementById('IVSetInterval');

    let parent = (e.target as HTMLElement).parentNode
    if (parent !== null && parent !== setInterval && parent.parentNode !== setInterval) {
      console.log("AFUERA") // CLICK OUTSIDE IVSetInterval

      setPlayInterval(curr => {
        return (
          curr === "" ?
          (defIntervalValue).toFixed(1) :
          parseFloat(curr).toFixed(1)
        )
      })

    }

  }

  window.onmousemove = function(e: MouseEvent) {
    //console.log("MOOVINGGG")

        //console.log("MOVEMENT")
        if (allowMove.current) {
          if ('touches' in e) { // TOUCH EVENT
            // targetXPosition = imgPo.current.x + (e.touches[0].clientX - arbPos.current.x) * 3 // '* 3' = INCREASE SPEED HERE FOR MOBILE
            // targetYPosition = imgPo.current.y + (e.touches[0].clientY - arbPos.current.y) * 3 // '* 3' = INCREASE SPEED HERE FOR MOBILE
          } else { // MOUSE EVENT
            // targetXPosition = imgPo.current.x + (e.clientX - arbPos.current.x) * 1 // '* 1' = INCREASE SPEED HERE FOR DESKTOP
            // targetYPosition = imgPo.current.y + (e.clientY - arbPos.current.y) * 1 // '* 1' = INCREASE SPEED HERE FOR DESKTOP
            // targetXPosition = imgPo.current.x + (e.clientX - arbPos.current.x) * 1 // '* 1' = INCREASE SPEED HERE FOR DESKTOP
            // targetYPosition = imgPo.current.y + (e.clientY - arbPos.current.y) * 1 // '* 1' = INCREASE SPEED HERE FOR DESKTOP
    
            // arbPos.current = { x: e.clientX - arbPos.current.x, y: e.clientY - arbPos.current.y }
    
    
    
            // setCurrentPos((curr) => ({
            //   x: curr.x + -1,
            //   y: curr.y + -1,
            // }))
    
            let qq = e.clientX - arbPos.current.x
            let ww = e.clientY - arbPos.current.y
    
            // setCurrentPos((curr) => ({
            //   x: curr.x + e.clientX - arbPos.current.x,
            //   y: curr.y + e.clientY - arbPos.current.y
            // }))
    
            currentPos.current = {
              x: currentPos.current.x + (e.clientX - arbPos.current.x),
              y: currentPos.current.y + (e.clientY - arbPos.current.y),
            }
    
            let iVF = document.getElementById('imageViewerForeground');
            if (iVF !== null) {
              iVF.style.transition = `unset`;
              iVF.style.left = `${currentPos.current.x}px`;
              iVF.style.top = `${currentPos.current.y}px`;
            }
    
            // setLeft(curr => curr + qq)
            // setTop(curr => curr + ww)
    
            // left = left + qq
            // top = top + ww
    
            // setCurrentPos((curr) => ({
            //   x: curr.x + (e.clientX - arbPos.current.x),
            //   y: curr.y + (e.clientY - arbPos.current.y),
            // }))
    
            //console.log("A VER", arbPos.current.x)
            //console.log("A VER", e.clientX - arbPos.current.x) // CONTINUE HERE
    
    
            arbPos.current = {
              x: e.clientX,
              y: e.clientY
            }
    
    
          }
        }

  }

  // window.onmouseup = function(e) {
  //   let modalDiv = document.getElementById('IVBackground');
  //   if (e.target === modalDiv) clickOnBG.current.end =  true
  //   else clickOnBG.current.end =  false
  //   if (setShowImageViewer !== undefined && clickOnBG.current.start && clickOnBG.current.end) {
  //     setShowImageViewer(false)
  //   }
  // }

  const [ currentIndex, setCurrentIndex ] = useState<number>(index !== undefined ? index : 0)

  const [ imageProps, setImageProps ] = useState({
    zoomX: 1.0,
    zoomY: 1.0,
    angle: 0,
  })

  //console.log("zoomX", imageProps.zoomX)
  console.log("zoomX", Math.abs(imageProps.zoomX).toFixed(1))

  //console.log("zoomX", imageProps.zoomX)

  let imageRef = useRef(new Image())

  //let initImgPos = useRef({ x: 0, y: 0 }) // INITIAL IMAGE POSITION
  let imgPo = useRef({ x: 0, y: 0 }) // IMAGE POSITION


  let currentPos = useRef({
      x: 0,
      y: 0
  })



  let allowMove = useRef(false)
  let arbPos = useRef({ x: 0, y: 0 }) // ARBITRARY POSITION

  useEffect(() => { // LOAD NEW IMAGE
    console.log("ENTRO ACA")

    // if (locked) {

    // } else {
    //   handleRestoreWithoutAnimation()
    // }

    if (images !== undefined && currentIndex !== undefined) {
      imageRef.current.src = images[currentIndex]

      // let iVF = document.getElementById('imageViewerForeground');
      // if (iVF !== null) {
      //   iVF.style.transition = `transform .2s, left .2s, top .2s`;
      // }

    }


    // let qq = async () => {
    //   if (images !== undefined && currentIndex !== undefined) {
    //     imageRef.current.src = images[currentIndex]

    //     // let iVF = document.getElementById('imageViewerForeground');
    //     // if (iVF !== null) {
    //     //   iVF.style.transition = `transform .2s, left .2s, top .2s`;
    //     // }
    //   }
    // }

    // qq().then(() => {
    //   handlerRestore()
    // })
  // eslint-disable-next-line react-hooks/exhaustive-deps

    // let iVF = document.getElementById('imageViewerForeground');
    // if (iVF !== null) {
    //   //if (enableImageAnimation) iVF.style.transition = `transform .2s`;
    //   if (enableImageAnimation) iVF.style.transition = `transform .2s, left .2s, top .2s`;
    //   else iVF.style.transition = `unset`;
    //   iVF.ontransitionend = () => { if (iVF !== null) iVF.style.transition = `transform .2s` }

    //   if (!enableLockPosition || !locked) { // LOCK POSITION HANDLER
    //     iVF.style.left = `0px`;
    //     iVF.style.top = `0px`;
    //     currentPos.current = { x: 0, y: 0 }
    //   }

    // }

    

    handlerAnimationTransition()
  }, [currentIndex, images])


  let mouseDown = (e: React.TouchEvent | React.MouseEvent) => {
    //console.log("EEEEE", e.target)

    let elOne = document.getElementById('IVBackground');
    let elTwo = document.getElementById('imageViewerForeground');

    if (e.target === elOne || e.target === elTwo) { //console.log("RIGHT CLICKED !")
      //console.log("MOUSE DOWN")
      if ('touches' in e) { // TOUCH EVENT
        arbPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
        allowMove.current = true
      } else { // MOUSE EVENT
        // arbPos.current = { x: e.clientX, y: e.clientY }
        // allowMove.current = true
        arbPos.current = { x: e.clientX, y: e.clientY }
        //console.log("START POSITION", e.clientX)
        allowMove.current = true
      }
    }
    
  }

  let mouseUp = (e: React.TouchEvent | React.MouseEvent) => allowMove.current = false

  let targetXPosition
  let targetYPosition

  let handlerMouseMove = (e: React.TouchEvent | React.MouseEvent) => {
    //console.log("MOVEMENT")
    if (allowMove.current) {
      if ('touches' in e) { // TOUCH EVENT
        targetXPosition = imgPo.current.x + (e.touches[0].clientX - arbPos.current.x) * 3 // '* 3' = INCREASE SPEED HERE FOR MOBILE
        targetYPosition = imgPo.current.y + (e.touches[0].clientY - arbPos.current.y) * 3 // '* 3' = INCREASE SPEED HERE FOR MOBILE
      } else { // MOUSE EVENT
        // targetXPosition = imgPo.current.x + (e.clientX - arbPos.current.x) * 1 // '* 1' = INCREASE SPEED HERE FOR DESKTOP
        // targetYPosition = imgPo.current.y + (e.clientY - arbPos.current.y) * 1 // '* 1' = INCREASE SPEED HERE FOR DESKTOP
        // targetXPosition = imgPo.current.x + (e.clientX - arbPos.current.x) * 1 // '* 1' = INCREASE SPEED HERE FOR DESKTOP
        // targetYPosition = imgPo.current.y + (e.clientY - arbPos.current.y) * 1 // '* 1' = INCREASE SPEED HERE FOR DESKTOP

        // arbPos.current = { x: e.clientX - arbPos.current.x, y: e.clientY - arbPos.current.y }



        // setCurrentPos((curr) => ({
        //   x: curr.x + -1,
        //   y: curr.y + -1,
        // }))

        let qq = e.clientX - arbPos.current.x
        let ww = e.clientY - arbPos.current.y

        // setCurrentPos((curr) => ({
        //   x: curr.x + e.clientX - arbPos.current.x,
        //   y: curr.y + e.clientY - arbPos.current.y
        // }))

        currentPos.current = {
          x: currentPos.current.x + (e.clientX - arbPos.current.x),
          y: currentPos.current.y + (e.clientY - arbPos.current.y),
        }

        let iVF = document.getElementById('imageViewerForeground');
        if (iVF !== null) {
          iVF.style.left = `${currentPos.current.x}px`
          iVF.style.top = `${currentPos.current.y}px`
        }

        // setLeft(curr => curr + qq)
        // setTop(curr => curr + ww)

        // left = left + qq
        // top = top + ww

        // setCurrentPos((curr) => ({
        //   x: curr.x + (e.clientX - arbPos.current.x),
        //   y: curr.y + (e.clientY - arbPos.current.y),
        // }))

        //console.log("A VER", arbPos.current.x)
        //console.log("A VER", e.clientX - arbPos.current.x) // CONTINUE HERE


        arbPos.current = {
          x: e.clientX,
          y: e.clientY
        }


      }
    }


  }

  useEffect(() => {
    let iVF = document.getElementById('imageViewerForeground');
    if (iVF !== null) {
      iVF.style.transform = `
        scale(${imageProps.zoomX}, ${imageProps.zoomY})
        rotate(${imageProps.angle}deg)
      `
    }
  }, [imageProps])

  const zoomOut = () => {
    console.log("ACA")
    // setImageProps((curr) => ({
    //   ...curr,
    //   zoomX: Math.abs(curr.zoomX).toFixed(1) === minZoom ? curr.zoomX : curr.zoomX < 0 ? curr.zoomX + 0.1 : curr.zoomX - 0.1,
    //   zoomY: Math.abs(curr.zoomX).toFixed(1) === minZoom ? curr.zoomY : curr.zoomY < 0 ? curr.zoomY + 0.1 : curr.zoomY - 0.1,
    // }))
    setImageProps((curr) => {
      // ...curr,
      // zoomX: Math.abs(curr.zoomX).toFixed(1) === minZoom ? curr.zoomX : curr.zoomX < 0 ? curr.zoomX + 0.1 : curr.zoomX - 0.1,
      // zoomY: Math.abs(curr.zoomX).toFixed(1) === minZoom ? curr.zoomY : curr.zoomY < 0 ? curr.zoomY + 0.1 : curr.zoomY - 0.1,
      let obj = {...curr}
      let zoomReached = Math.abs(curr.zoomX).toFixed(1) === minZoom
      obj.zoomX = zoomReached ? curr.zoomX : curr.zoomX < 0 ? curr.zoomX + 0.1 : curr.zoomX - 0.1;
      obj.zoomY = zoomReached ? curr.zoomY : curr.zoomY < 0 ? curr.zoomY + 0.1 : curr.zoomY - 0.1;
      return obj
    })
  }

  const zoomIn = () => {
    //console.log("ACA")
    setImageProps((curr) => {
      //...curr,
      //let obj = ...curr
      let obj = {...curr}
      let zoomReached = Math.abs(curr.zoomX).toFixed(1) === maxZoom
      obj.zoomX = zoomReached ? curr.zoomX : curr.zoomX < 0 ? curr.zoomX - 0.1 : curr.zoomX + 0.1;
      obj.zoomY = zoomReached ? curr.zoomY : curr.zoomY < 0 ? curr.zoomY - 0.1 : curr.zoomY + 0.1;
      return obj
      // zoomX: curr.zoomX < 0 ? curr.zoomX - 0.1 : curr.zoomX + 0.1,
      // zoomY: curr.zoomY < 0 ? curr.zoomY - 0.1 : curr.zoomY + 0.1,
    })
  }

  const [ locked, setLocked ] = useState(false)
  //const [ locked, setLocked ] = useState(true)
  //const [ showSettings, setShowSettings ] = useState(false)
  const [ showSettings, setShowSettings ] = useState(true)
  const [ enableLockPosition, setEnableLockPosition ] = useState(true)
  const [ enableLockZoom, setEnableLockZoom ] = useState(true)
  const [ enableLockFlip, setEnableLockFlip ] = useState(true)
  const [ enableLockRotate, setEnableLockRotate ] = useState(true)

  const [ enableImageAnimation, setEnableImageAnimation ] = useState(true)
  const [ enableButtonsAnimation, setEnableButtonsAnimation ] = useState(true)
  const [ slideStarted, setSlideStarted ] = useState(false)
  //const [ playInterval, setPlayInterval ] = useState(1000)
  const [ playInterval, setPlayInterval ] = useState("1.0")
  //const playInterval = useRef(1000)
  //console.log('playInterval VALUE', playInterval);
  //console.log('playInterval TYPE', typeof playInterval);

  const lockSettings = () => {

    if (enableButtonsAnimation) root.setProperty('--IVFadeMenu', '0.4s');
    else root.setProperty('--IVFadeMenu', '0s');
    setLocked(!locked)
  }
  const handleSetEnableLockPosition = () => setEnableLockPosition(!enableLockPosition)
  const handleSetEnableLockZoom = () => setEnableLockZoom(!enableLockZoom)
  const handleSetEnableLockFlip = () => setEnableLockFlip(!enableLockFlip)
  const handleSetEnableLockRotate = () => setEnableLockRotate(!enableLockRotate)
  const handleShowSettings = () => setShowSettings(!showSettings)

  const handlerKeyDown = (e: any) => {

    let key = e.key
    if (
      key !== "0" && key !== "1" && key !== "2" && key !== "3" &&
      key !== "4" && key !== "5" && key !== "6" && key !== "7" &&
      key !== "8" && key !== "9" && key !== "." && key !== "," &&
      key !== "Delete" && key !== "Backspace" &&
      key !== "ArrowLeft" && key !== "ArrowRight"
    ) e.preventDefault()
  }

  const handlerSetPlayInterval = ({ type, value, min, max, def }: any) => {
    switch (type) {
      case 'decrementButton':
        setPlayInterval(curr => {
          let op = parseFloat(curr) - 0.5
          return isNaN(op) ? (def).toFixed(1) : op <= min ? (min).toFixed(1) : (op).toFixed(1) // ADD '.0' WHEN NUMBER IS 2,3, etc..
        })

      break;
      case 'incrementButton':
        setPlayInterval(curr => {
          let op = parseFloat(curr) + 0.5
          return isNaN(op) ? (def).toFixed(1) : op >= max ? (max).toFixed(1) : (op).toFixed(1) // ADD '.0' WHEN NUMBER IS 2,3, etc..
        })

      break;
      case 'directChange':
        console.log("VALUE 1", value)

        let val = parseFloat(value)

        let valueParsed =
          value
            .replace(/[.|,]/, "D") // CONVERT FIRST '.|,' to 'D' (Decimal) FLAG
            .replace(/[.|,]/g, "") // DELETE ALL OTHERS '.|,'
            .replace(/[D]/g, ".") // CONVERT 'D' to '.'
            .replace(/(?<=\d*\.\d).*/, "") // ONLY ONE DECIMAL ALLOWED

          // qq.replace(/(?<=\d*\.\d).*/, "")

        //console.log("VALUE 2", qq) // ALLOW ONLY 1 DECIMAL
        //(/\d+\.\d{1}$/g).test("123.0") // CHECK DECIMALS // CONTINUE HERE
        setPlayInterval(curr =>
          {
            console.log("A VER", valueParsed)
            return (
              valueParsed > max ? // NUMBER EXCEEDS MAX VALUE
              (max).toFixed(1) :
              valueParsed < min ? // NUMBER EXCEEDS MIN VALUE
              (min).toFixed(1) :
              // isNaN(valueParsed) ?
              // value :
              valueParsed
              //valueParsed
            )
          }
        )
    }

  }

  const handleSetEnableImageAnimation = () => setEnableImageAnimation(!enableImageAnimation)
  const handleSetEnableButtonsAnimation = () => setEnableButtonsAnimation(!enableButtonsAnimation)
  const handleSetSlideStarted = () => {
    setSlideStarted(!slideStarted)
  }

  useEffect(() => { // IMAGE TRANSITION HANDLER
    let iVF = document.getElementById('imageViewerForeground');
    if (iVF !== null) {
      if (enableImageAnimation) iVF.style.transition = `transform .2s`;
      else iVF.style.transition = `unset`;
    }
  }, [enableImageAnimation])



  let root = document.documentElement.style

  // CONTINUE WITH FADE VAR & FADE BUTTONS
  useEffect(() => { // BUTTONS TRANSITION HANDLER
    if (enableButtonsAnimation) root.setProperty('--IVFade', '0.4s');
    else root.setProperty('--IVFade', '0s');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enableButtonsAnimation])

  const handlerAnimationTransition = () => {
    let iVF = document.getElementById('imageViewerForeground');
    if (iVF !== null) {
      if (enableImageAnimation) iVF.style.transition = `transform .2s, left .2s, top .2s`;
      else iVF.style.transition = `unset`;
      iVF.ontransitionend = () => { if (iVF !== null) iVF.style.transition = `transform .2s` }

      if (!enableLockPosition || !locked) { // LOCK POSITION HANDLER
        iVF.style.left = `0px`;
        iVF.style.top = `0px`;
        currentPos.current = { x: 0, y: 0 }
      }
    }

    setImageProps(
      (curr) =>
      ({
        ...curr,
        zoomX:
          (enableLockZoom && enableLockFlip && locked) ? curr.zoomX : // ZOOM & FLIP LOCKED
          (enableLockZoom && locked) ? Math.abs(curr.zoomX) : // ZOOM LOCKED ONLY (CONVERT NUMBER TO POSITIVE)
          (enableLockFlip && locked && curr.zoomX < 0) ? -1.0 : // X FLIP LOCKED ONLY (NEGATIVE NUMBER --> -1.0 || POSITIVE NUMBER --> 1.0 )
          1.0, // DEFAULT VALUE
        zoomY:
          (enableLockZoom && enableLockFlip && locked) ? curr.zoomY : // ZOOM & FLIP LOCKED
          (enableLockZoom && locked) ? Math.abs(curr.zoomY) : // ZOOM LOCKED ONLY (CONVERT NUMBER TO POSITIVE)
          (enableLockFlip && locked && curr.zoomY < 0) ? -1.0 : // X FLIP LOCKED ONLY (NEGATIVE NUMBER --> -1.0 || POSITIVE NUMBER --> 1.0 )
          1.0, // DEFAULT VALUE
        angle: (enableLockRotate && locked) ? curr.angle : 0 // LOCK ROTATE HANDLER
      })
    )

    //if (!enableLockPosition || !locked) currentPos.current = { x: 0, y: 0 } // LOCK POSITION HANDLER
  }

  const handlerGoLeft = () => {
    if (images !== undefined) {
      if (currentIndex === 0) setCurrentIndex(images.length - 1)
      else setCurrentIndex((curr: number) => curr - 1)

      handlerAnimationTransition()
    }
  }

  let handlerGoRight = () => {
    //console.log("bbb", bbb)
    if (images !== undefined) {
      if (currentIndex === images.length - 1) setCurrentIndex(0)
      else setCurrentIndex((curr: number) => curr + 1)
      handlerAnimationTransition()
    }
  }

  const handlerRestore = () => {
    setImageProps({
      zoomX: 1.0,
      zoomY: 1.0,
      angle: 0,
    })
    let iVF = document.getElementById('imageViewerForeground');
    if (iVF !== null) {
      iVF.style.transition = enableImageAnimation ? `transform .2s, left .2s, top .2s` : `unset`;
      iVF.style.left = `0px`;
      iVF.style.top = `0px`;
      iVF.ontransitionend = () => { if (iVF !== null) iVF.style.transition = `transform .2s` }
    }
    currentPos.current = { x: 0, y: 0 }
  }

  const interval = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => { // SLIDE TRANSITION ICON & INTERVAL HANDLER
    clearInterval(interval.current) // CLEAR INTERVAL IF playInterval CHANGES..
    if (slideStarted) {
      root.setProperty('--IVPlayOpacity', '0')
      interval.current = setInterval(() => {
        console.log("currentIndex", currentIndex)
        if (images !== undefined) {
          setCurrentIndex(
            (curr: number) =>
            curr === images.length - 1 ? 0 : curr + 1
          )
        }
      }, parseFloat(playInterval) * 1000)
    }
    else {
      root.setProperty('--IVPlayOpacity', '1')
      clearInterval(interval.current)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slideStarted, playInterval, currentIndex])

  const handleRestoreWithoutAnimation = () => {

    let iVF = document.getElementById('imageViewerForeground');
    if (iVF !== null) {
      //iVF.style.transition = `transform .2s, left .2s, top .2s`;
      iVF.style.transition = `none`;
      iVF.style.left = `0px`;
      iVF.style.top = `0px`;
      //iVF.ontransitionend = () => { if (iVF !== null) iVF.style.transition = `transform .2s` }
    }

    setImageProps({
      zoomX: 1.0,
      zoomY: 1.0,
      angle: 0,
    })

    currentPos.current = { x: 0, y: 0 }
  }

  const flipX = () => setImageProps((curr) => ({ ...curr, zoomX: curr.zoomX * -1 }))
  const flipY = () => setImageProps((curr) => ({ ...curr, zoomY: curr.zoomY * -1 }))
  const rotateLeft = () => setImageProps((curr) => ({ ...curr, angle: curr.angle - 90 }))
  const rotateRight = () => setImageProps((curr) => ({ ...curr, angle: curr.angle + 90 }))



  //let color = 'yellow';
  //let color = useRef('yellow');



  // const active = `rgb(255, 255, 255)`; // WHITE
  // const inactive = `rgb(158, 158, 158)`; // GRAY
  // const disabled = `rgb(77, 77, 77)`; // SAME AS BG BAR COLOR

  const color: any = {
    active: 'rgb(255, 255, 255)', // WHITE
    inactive: 'rgb(158, 158, 158)', // GRAY
    disabled: 'rgb(77, 77, 77)' // SAME AS BG BAR COLOR
  }

  const [ styles, setStyles ] = useState<any>({
    pos: {
      id: 'pos',
      width: 84,
      left: 0, //                           ↓ UNUSED ↓
      line: { left: color.disabled, center: color.disabled, right: color.disabled },
      body: { left: color.disabled, center: color.disabled, right: color.disabled }
    },
    afterPos: {
      id: 'afterPos',
      width: 84,
      left: 84,
      line: { left: color.disabled, center: color.disabled, right: color.disabled },
      body: { left: color.disabled, center: color.disabled, right: color.disabled }
    },
    zoom: {
      id: 'zoom',
      width: 84,
      left: 168,
      line: { left: color.disabled, center: color.disabled, right: color.disabled },
      body: { left: color.disabled, center: color.disabled, right: color.disabled }
    },
    flip: {
      id: 'flip',
      width: 84,
      left: 252,
      line: { left: color.disabled, center: color.disabled, right: color.disabled },
      body: { left: color.disabled, center: color.disabled, right: color.disabled }
    },
    rotate: {
      id: 'rotate',
      width: 84,
      left: 336,
      line: { left: color.disabled, center: color.disabled, right: color.disabled },
      body: { left: color.disabled, center: color.disabled, right: color.disabled }
    },
    lock: {
      id: 'lock',
      width: 42,
      left: 420,
      line: { left: color.disabled, center: color.disabled, right: color.disabled },
      body: { left: color.disabled, center: color.disabled, right: color.disabled }
    }
  })



  useEffect(() => {

    let copyStyles: any = {...styles} // COPY STATE

    const updater = (e: any) => {
      let target = Object.keys(e)[0]

      e[target].forEach((x: any) => {
        let obj: any = copyStyles
        let dir = x.split('.')
        while (dir.length > 1) obj = obj[dir.shift()]
        obj[dir.shift()] = color[target];
      })
    }

    let lines = [
      'pos.line.center',  'pos.line.right','afterPos.line.left', 'afterPos.line.center', 'afterPos.line.right', 'zoom.line.left', // 0 - 5
      'zoom.line.center', 'zoom.line.right', 'flip.line.left', // 6 - 8
      'flip.line.center', 'flip.line.right', 'rotate.line.left', // 9 - 11
      'rotate.line.center', 'rotate.line.right', 'lock.line.left' // 12 - 14
    ]

    

    // BUTTON BACKGROUND & LINES COLOR

    if (enableLockPosition)
      if (locked) updater({ active: [ 'pos.body.center', ...lines ] })
      else updater({ inactive: [ 'pos.body.center', ...lines ] })
    else updater({ disabled: [ 'pos.body.center', ...lines ] })
    if (enableLockZoom)
      if (locked) updater({ active: [ 'zoom.body.center', ...lines.slice(6) ] })
      else updater({ inactive: [ 'zoom.body.center', ...lines.slice(6) ] })
    else updater({ disabled: [ 'zoom.body.center' ] })
    if (enableLockFlip)
      if (locked) updater({ active: [ 'flip.body.center', ...lines.slice(9) ] })
      else updater({ inactive: [ 'flip.body.center', ...lines.slice(9) ] })
    else updater({ disabled: [ 'flip.body.center' ] })
    if (enableLockRotate)
      if (locked) updater({ active: [ 'rotate.body.center', ...lines.slice(12) ] })
      else updater({ inactive: [ 'rotate.body.center', ...lines.slice(12) ] })
    else updater({ disabled: [ 'rotate.body.center' ] })
    if (locked) { updater({ active: [ 'lock.body.center', 'lock.line.center' ] }); root.setProperty('--IVLock', color.active); root.setProperty('--IVLockOpacity', '1') }
    else { updater({ inactive: [ 'lock.body.center', 'lock.line.center' ] }); root.setProperty('--IVLock', color.inactive); root.setProperty('--IVLockOpacity', '0') }

    // BUTTON BACKGROUND SIMULATED BORDER-RADIUS
    if (enableLockZoom && enableLockFlip)
      if (locked) updater({ active: [ 'zoom.body.right', 'flip.body.left' ] })
      else updater({ inactive: [ 'zoom.body.right', 'flip.body.left' ] })
    else updater({ disabled: [ 'zoom.body.right', 'flip.body.left' ] })
    if (enableLockFlip && enableLockRotate)
      if (locked) updater({ active: [ 'flip.body.right', 'rotate.body.left' ] })
      else updater({ inactive: [ 'flip.body.right', 'rotate.body.left' ] })
    else updater({ disabled: [ 'flip.body.right', 'rotate.body.left' ] })
    if (enableLockRotate)
      if (locked) updater({ active: [ 'rotate.body.right', 'lock.body.left' ] })
      else updater({ inactive: [ 'rotate.body.right', 'lock.body.left' ] })
    else updater({ disabled: [ 'rotate.body.right', 'lock.body.left' ] })

    setStyles(copyStyles) // UPDATE STATE

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locked, enableLockPosition, enableLockZoom, enableLockFlip, enableLockRotate])

  useEffect(() => {
    let lS = document.getElementById('lockSettings');
    if (lS !== null) showSettings ? lS.style.bottom = `49px` : lS.style.bottom = `-200px`
  }, [showSettings])

  const MuiButton = ({ style, classButton, onClick, Icon, classIcon, styleIcon }: any) => {
    return (
      <Button
        disableElevation={true}
        style={style}
        variant="contained"
        className={`${classButton}`}
        onClick={() => onClick ? onClick() : null}
      >
        { Array.isArray(Icon) ? Icon.map((I: any, i: any) => { return <I key={i} className={`${classIcon[i]}`} /> }) : <Icon className={`${classIcon}`} /> }
      </Button>
    )
  }

  const MuiSwitch = ({onClick, checked}:any) => {
    return (
      <Switch
        onClick={onClick}
        checked={checked}
        className={css.switch}
        classes={{
          track: checked ? `${css.track} ${css.trackEnabled}` : `${css.track} ${css.trackDisabled}`,
          thumb: css.thumb,
          switchBase:  css.switchBase,
          checked: css.checked,
          colorPrimary: css.colorPrimary
        }}
      />
    )
  }

  const NumberInput = ({ value, min, max, def }:any) => {
    return (
      <div
        style={{ display: 'flex', flexDirection: 'row', /* background: 'green', */ width: 'fit-content' }}
        id={`IVSetInterval`}
      >
        <div
          id={`decrementButton`}
          className={css.numberInputButton}
          onClick={(e) => handlerSetPlayInterval({ type: (e.target as HTMLDivElement).id, min, def })}
          children={
            <Remove className={css.incrementButtonIcon} fontSize="small" />
          }
          style={{
            background: value === min.toFixed(1) ? 'rgba(0, 0, 0, 0.2)' : '#78909c',
            color: value === min.toFixed(1) ? 'rgba(0, 0, 0, 0.2)' : '#212121'
          }}
        />
        <Input
          value={value}
          onKeyDown={e => handlerKeyDown(e)}
          onChange={(e) => handlerSetPlayInterval({ type: `directChange`, value: e.target.value, max, min })} // - + BUTTONS HANDLER
          onPaste={(e) => e.preventDefault()}
          autoComplete={'off'}
          slotProps={{
            input: { className: css.numberInputInput, id: `numberInputUser` },
          }}
        />
        <div
          id={`incrementButton`}
          className={css.numberInputButton}
          onClick={(e) => handlerSetPlayInterval({ type: (e.target as HTMLDivElement).id, max, def })}
          children={
            <Add className={css.incrementButtonIcon} fontSize="small" />
          }
          style={{
            background: value === max.toFixed(1) ? 'rgba(0, 0, 0, 0.2)' : '#78909c',
            color: value === max.toFixed(1) ? 'rgba(0, 0, 0, 0.2)' : '#212121'
          }}
        />
      </div>
    )
  }




  const outlineButtons = (el:any) => {

    return (
      <div key={el.id} className={css.buttonOutline} style={{ left: el.left, width: el.width }}>
        <svg width={el.width} height="42" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={`background${el.id}`} x1="100%" x2="0%"> {/* SIMULATED BORDER-RADIUS */}
              <stop className={css.fade} offset="50%" stopColor={el.body.right} />
              <stop className={css.fade} offset="50%" stopColor={el.body.left} />
            </linearGradient>
            <linearGradient id={`line${el.id}`} x1="100%" x2="0%"> {/* BG TOP/BOTTOM LINE */}
              <stop className={css.fade} offset="50%" stopColor={el.line.right} />
              <stop className={css.fade} offset="50%" stopColor={el.line.left} />
            </linearGradient>
            <clipPath id="upperSide" clipPathUnits="userSpaceOnUse"> {/* FG TOP LINE */}
              <rect width={el.width} height="1.5" />
            </clipPath>
            <clipPath id="centerSide" clipPathUnits="userSpaceOnUse"> {/* FG CENTER */}
              <rect width={el.width} height="39.2" y="1.4" /> {/* OVERLAPPING NEEDED TO HIDE GLITCHES */}
            </clipPath>
            <clipPath id="LowerSide" clipPathUnits="userSpaceOnUse"> {/* FG BOTTOM LINE */}
              <rect width={el.width} height="1.5" y="40.5" />
            </clipPath>
          </defs>

          <rect className={css.fade} width={el.width} height="42" fill={`url(#background${el.id})`} /> {/* SIMULATED BORDER-RADIUS */}
          <rect className={css.fade} width={el.width} height="1.5" fill={`url(#line${el.id})`} /> {/* BG TOP LINE */}
          <rect className={css.fade} width={el.width} height="1.5" y="40.5" fill={`url(#line${el.id})`} /> {/* BG BOTTOM LINE */}
          <rect className={css.fade} width={el.width} height="42" rx="7.5" ry="7.5" fill={el.body.center} clipPath="url(#centerSide)" /> {/* BODY CENTER */}
          <rect className={css.fade} width={el.width} height="42" rx="7.5" ry="7.5" fill={el.line.center} clipPath="url(#upperSide)" /> {/* LINE CENTER TOP */}
          <rect className={css.fade} width={el.width} height="42" rx="7.5" ry="7.5" fill={el.line.center} clipPath="url(#LowerSide)" /> {/* LINE CENTER BOTTOM */}

        </svg>
      </div>
    )
  }

  // const [ menu, setMenu ] = useState({
  //   a: { display: 'flex', color: locked ? color.active : color.inactive },
  //   b: { display: 'none', color: color.disabled },
  //   c: { display: 'none', color: color.disabled },
  
  // })

  const [ menu, setMenu ] = useState({
    a: true,
    b: false,
    c: false,
  })

  const handlerMenuSelect = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    root.setProperty('--IVFadeMenu', '0s');

    setMenu((curr:any) => {
      const updated: any = {};
      Object.keys(curr).forEach(key => {
        return updated[key] = false
      })
      updated[(e.target as HTMLDivElement).id.slice(-1).toLowerCase()] = true
      return updated
    })

    // if (iVF !== null) {
    //   //iVF.style.transition = `background 1ms, color 1ms`; // background var(--IVFade), color var(--IVFade)
    //   //iVF.ontransitionend = () => { console.log("TERMINOO") }
    //   iVF.style.transition = `background var(--IVFade), color var(--IVFade)`
    // }

    // if (iVF !== null) {
    //   iVF.style.transition = `background var(--IVFade), color var(--IVFade)`;
    // }

  }

  // const handlerMenuSelect = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  //   //console.log("EEE", (e.target as HTMLDivElement).id.slice(-1).toLowerCase())
  //   setMenu((curr:any) => {
  //     //return curr.map((e: any) => e)
  //     const updated: any = {};
  //     Object.keys(curr).forEach(key => {
  //       return updated[key] = { display: 'none', color: color.disabled }
  //     })
  //     updated[(e.target as HTMLDivElement).id.slice(-1).toLowerCase()] = { display: 'flex', color: locked ? color.active : color.inactive }
  //     return updated
  //   })
  // }

  return (
    <div
      id={`IVBackground`}
      className={css.IVBackground}
      onMouseDown={(e) => mouseDown(e)} // MOUSE START
      //onMouseMove={(e) => handlerMouseMove(e)} // MOUSE MOVE
      onMouseUp={(e) => mouseUp(e)} // MOUSE END
    >
      <img
       // style={{ left, top }}
        id={`imageViewerForeground`}
        ref={imageRef}
        className={css.imageViewerForeground}
        onDragStart={(e) => e.preventDefault()}
        src={
          images !== undefined ?
          images[currentIndex] :
          ""
        }
        //src={""}
        alt=""
      >
      </img>


      <div
        id={`bottomBar`}
        className={css.bottomBar}
        // onMouseDown={() => {
        //   allowMove.current = false
        // }}
        // onMouseMove={(e) => {
        //   //console.log("MOVEMENT")
        //   allowMove.current = false
        // }}
      >
        <div className={css.buttonsContainer}>
          <div className={css.imageCounter}>
            { currentIndex !== undefined && images !== undefined ? currentIndex + 1 : 0 }/{ currentIndex !== undefined && images !== undefined ? images.length : 0 }
          </div>




            { Object.keys(styles).map((e: any) => { return outlineButtons(styles[e]) }) }


          {
            MuiButton({ // GO LEFT
              classButton: css.button,
              onClick: handlerGoLeft,
              Icon: Forward,
              classIcon: `${css.icon} ${css.rotateX}`
            })
          }


          {
            MuiButton({ // GO RIGHT
              classButton: css.button,
              onClick: handlerGoRight,
              Icon: Forward,
              classIcon: css.icon
            })
          }


          {
            MuiButton({ // RESTORE
              classButton: css.button,
              onClick: handlerRestore,
              Icon: Cached,
              classIcon: css.icon
            })
          }


          {
            MuiButton({ // PLAY
              classButton: css.button,
              onClick: handleSetSlideStarted,
              Icon: [ PlayCircleOutline, PauseCircleOutline ], // PauseCircleOutline,
              classIcon: [ `${css.icon} ${css.playOpacity}`, `${css.icon} ${css.pauseOpacity}` ]
            })
          }



          {
            MuiButton({ // ZOOM OUT
              classButton: css.button,
              onClick: zoomOut,
              Icon: Remove,
              classIcon: css.icon
            })
          }



          {
            MuiButton({ // ZOOM IN
              classButton: css.button,
              onClick: zoomIn,
              Icon: Add,
              classIcon: css.icon
            })
          }



          {
            MuiButton({ // FLIP X
              classButton: css.button,
              onClick: flipX,
              Icon: Flip,
              classIcon: `${css.icon} ${css.rotateX}`
            })
          }

          {
            MuiButton({ // FLIP Y
              classButton: css.button,
              onClick: flipY,
              Icon: Flip,
              classIcon: `${css.icon} ${css.rotateY}`
            })
          }


          {
            MuiButton({ // ROTATE LEFT
              classButton: css.button,
              onClick: rotateLeft,
              Icon: RotateLeft,
              classIcon: `${css.icon} ${css.rotateX}`
            })
          }

          {
            MuiButton({ // ROTATE RIGHT
              classButton: css.button,
              onClick: rotateRight,
              Icon: RotateRight,
              classIcon: `${css.icon} ${css.rotateX}`
            })
          }



          <div className={css.lockContainer}>
            {
              MuiButton({ // LOCK
                classButton: `${css.button} ${css.iconLock}`,
                onClick: lockSettings,
                Icon: [ LockOpenOutlined, LockOutlined ],
                classIcon: [ css.icon, `${css.icon} ${css.lockOpacity}` ]
              })
            }
          </div>

          {
            MuiButton({ // SETTINGS
              classButton: css.button,
              onClick: handleShowSettings,
              Icon: Settings,
              classIcon: css.icon
            })
          }

          {
            MuiButton({ // CLOSE
              classButton: css.button,
              onClick: setShowImageViewer,
              Icon: Close,
              classIcon: css.icon
            })
          }

          <div className={css.zoomContainer}>
            { (Math.abs(imageProps.zoomX)).toFixed(1) }x
          </div>
        </div>
      </div>

      <div
        id={`lockSettings`}
        className={css.lockSettings}
      >
        <div className={css.menuLeftMain}>
          <div
            id={`menuLeftA`}
            className={css.menuLeftSub}
            onClick={(e) => handlerMenuSelect(e)}
            style={{
              background:
                menu.a && locked ?
                color.active :
                menu.a ?
                color.inactive :
                color.disabled,
              color:
                menu.a && locked ?
                color.disabled :
                '#ffffff'
            }}
          >
             Lock over:
          </div>
          <div
            id={`menuLeftB`}
            className={css.menuLeftSub}
            onClick={(e) => handlerMenuSelect(e)}
            style={{
              background:
                menu.b && locked ?
                color.active :
                menu.b ?
                color.inactive :
                color.disabled,
              color:
                menu.b && locked ?
                color.disabled :
                '#ffffff'
            }}
          >
             Animation over:
          </div>
          <div
            id={`menuLeftC`}
            className={css.menuLeftSub}
            onClick={(e) => handlerMenuSelect(e)}
            style={{
              background:
                menu.c && locked ?
                color.active :
                menu.c ?
                color.inactive :
                color.disabled,
              color:
                menu.c && locked ?
                color.disabled :
                '#ffffff'
            }}
          >
             Timings:
          </div>
        </div>
        <div className={css.menuRightMain}>
          <div
            className={css.menuRightSub}
            style={{
              display:
                menu.a ? 'flex' : 'none',
                background: locked ? color.active : color.inactive,
                color: locked ? color.disabled : '#ffffff'
            }}
          >
            <div className={css.eachSwitch}>
              { MuiSwitch({ onClick: handleSetEnableLockPosition, checked: enableLockPosition ? true : false }) }
               Position
            </div>
            <div className={css.eachSwitch}>
              { MuiSwitch({ onClick: handleSetEnableLockZoom, checked: enableLockZoom ? true : false }) }
               Zoom
            </div>
            <div className={css.eachSwitch}>
              { MuiSwitch({ onClick: handleSetEnableLockFlip, checked: enableLockFlip ? true : false }) }
               Flip
            </div>
            <div className={css.eachSwitch}>
              { MuiSwitch({ onClick: handleSetEnableLockRotate, checked: enableLockRotate ? true : false }) }
               Rotate
            </div>
          </div>
          <div
            className={css.menuRightSub}
            style={{
              display: menu.b ? 'flex' : 'none',
              background: locked ? color.active : color.inactive,
              color: locked ? color.disabled : '#ffffff'
            }}
          >
            <div className={css.eachSwitch}>
              { MuiSwitch({ onClick: handleSetEnableImageAnimation, checked: enableImageAnimation ? true : false }) }
               Image
            </div>
            <div className={css.eachSwitch}>
              { MuiSwitch({ onClick: handleSetEnableButtonsAnimation, checked: enableButtonsAnimation ? true : false }) }
               Buttons
            </div>
          </div>
          <div
            className={css.menuRightSub}
            style={{
              display: menu.c ? 'flex' : 'none',
              background: locked ? color.active : color.inactive,
              color: locked ? color.disabled : '#ffffff'
            }}
          >
            <div className={css.eachSwitch3}>
              Play interval (secs):
              {
                NumberInput({
                  value: playInterval,
                  min: minIntervalValue,
                  max: maxIntervalValue,
                  def: defIntervalValue
                })
              }
            </div>
          </div>
        </div>



      </div>
    </div>
  )
}