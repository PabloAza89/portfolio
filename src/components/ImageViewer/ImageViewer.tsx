import {
  ReactElement, useEffect, useLayoutEffect, useState, useRef, ReactNode, MouseEvent, TouchEvent
} from 'react';
import css from './ImageViewerCSS.module.css';
import { Forward, Add, Remove, Close, RotateLeft, RotateRight } from '@mui/icons-material/';
import { Button } from '@mui/material';
import {
  ImageViewerI, operationI, comparisonI, currentZoomI
} from '../../interfaces/interfaces';
//import { consoleCSSParser } from './consoleCSSParser';

export const ImageViewer = ({ images, index, setShowImageViewer, controlsOutside, disableAnimation, timing, mode }: ImageViewerI): ReactElement => {

  
  
  //let rotationAngle = 0
  const [ rotationAngle, setRotationAngle ] = useState(0)

  console.log('rotationAngle --->', rotationAngle);

  // useLayoutEffect(() => {

  //   // TO RIGHT
    

  //   if (refCanvas.current !== null) {
  //     let ref = refCanvas.current
  //     initImgPos.current =
  //     rotationAngle === -90 || rotationAngle === -270 || rotationAngle === -180 ?
  //     { y: ref.width / -4, x: ref.height / -4 } :
  //     { x: ref.width / -4, y: ref.height / -4 }
  //   }

    
   

  //   //   console.log("VERTICAL MODE")
  //   //console.log("ENTRO EN ROTATION")

  //   // TO RIGHT

  //   // (360 / 90) % 2
  //   // E   O   E   O   E   // Even // Odd
  //   // 0   90  180 270 360

  //   // (360 / 90) % 2
  //   //let qq =  (rotationAngle / 90) % 2

  //   let bG = document.getElementById('modalBackground');
  //   let canvas = document.getElementById('canvasImage');
  //   if (bG !== null && canvas !== null) {
  //     // bG.style.width = '95vh';
  //     // bG.style.height = '95vw';
  //     // bG.style.transform = 'rotate(-90deg)';

  //     if ((rotationAngle / 90) % 2 === 0) {
  //       canvas.style.maxWidth = '80vw';
  //       canvas.style.maxHeight = '70vh';
  //     } else {
  //       canvas.style.maxWidth = '70vh';
  //       canvas.style.maxHeight = '80vw';
  //     }
      

      
  //     //canvas.style.transform = `rotate(${rotationValue[rotationAngle]}deg)`;
  //     canvas.style.transform = `rotate(${rotationAngle}deg)`;
  //     //canvas.style.transform = 'rotate(270deg)';
  //   }
  
  //   //}

  // }, [rotationAngle])
  // //}, [mode])

  // useEffect(() => {

  //   let iVF = document.getElementById('imageViewerForeground');
  //   //window.getComputedStyle(iVF)
  //   if (iVF !== null) {
  //     //iVF.style.
  //     //console.dir(iVF)
  //     //setCurrentZoom((curr) => (curr + 0.1))
  //     //currentZoom.current = currentZoom.current + 0.1
  //     //console.log("currentZoom", (currentZoom.current).toFixed(1))
  //     iVF.style.transform = `rotate(${rotationAngle}deg)`
  //     //console.log(window)
  //     //window.getComputedStyle(iVF)//.width
  //     //console.log(window.getComputedStyle(iVF).transform)

  //   }


  // }, [rotationAngle])

 

  let clickOnBG = useRef({ // CLICK ON BACKGROUND MODAL
    start: false, // CLICK BEGINS ON BG MODAL
    end: false    // CLICK ENDS ON BG MODAL
  })

  useEffect(() => { // DISABLES MOUSE (DESKTOP) EVENT WHEN MOUSE DRAG LEAVE CANVAS
    let canvas = document.getElementById('canvasImage')
    if (canvas !== null) canvas.onmouseout = function() { allowMove.current = false }
  }, [])

  window.onmousedown = function(e) {
    let modalDiv = document.getElementById('modalBackground');
    if (e.target === modalDiv) clickOnBG.current.start =  true
    else clickOnBG.current.start =  false
  }

  window.onmouseup = function(e) {
    let modalDiv = document.getElementById('modalBackground');
    if (e.target === modalDiv) clickOnBG.current.end =  true
    else clickOnBG.current.end =  false
    if (setShowImageViewer !== undefined && clickOnBG.current.start && clickOnBG.current.end) {
      setShowImageViewer(false)
    }
  }

  const [ currentIndex, setCurrentIndex ] = useState<number>(index !== undefined ? index : 0)

  // mORd = multiplication OR division
  // aORs = addition OR subtraction
  // lORm = less OR more
  // dF = dimensionFactor
  const [ currentZoom, setCurrentZoom ] = useState(1.0)
  //let currentZoom = useRef(1.0)//, setCurrentZoom ] = useState(1.0)
  // const [ currentZoom, setCurrentZoom ] = useState<currentZoomI>({ // (cZ)
  //   val: 1, mORd: 'x', aORs: '+', lORm: '<=', dF: 2
  // })

  let refCanvas = useRef<HTMLCanvasElement>(null)
  let imageRef = useRef(new Image())
  let allowMove = useRef(false)
  let arbPos = useRef({ x: 0, y: 0 }) // ARBITRARY POSITION
  let initImgPos = useRef({ x: 0, y: 0 }) // INITIAL IMAGE POSITION
  let imgPo = useRef({ x: 0, y: 0 }) // IMAGE POSITION


  // test //



  // test //

  useEffect(() => { // LOAD NEW IMAGE
    if (images !== undefined && currentIndex !== undefined) {
      imageRef.current.src = images[currentIndex]
      // image.current.onload = function() {
      //   if (refCanvas.current !== null) { //
      //     let ref = refCanvas.current
      //     let ctx = ref.getContext("2d");
      //     ref.width = image.current.naturalWidth
      //     ref.height = image.current.naturalHeight

      //     /* ref.width = image.current.naturalHeight
      //     ref.height = image.current.naturalWidth */

      //     // e.g.:               x: -480            y: -260               // (1920 x 1040)
      //     // WHEN 1.0 TO 1.5, SET POSITION TO CENTER OF IMAGE
      //     //initImgPos.current = { x: ref.width / -4, y: ref.height / -4 }
      //     console.log("LOADED NEW IMAGE")
      //     initImgPos.current =
      //       // rotationAngle === -90 /* || rotationAngle === 90 */ ?
      //       // { y: ref.width / -4, x: ref.height / -4 } :
      //       { x: ref.width / -4, y: ref.height / -4 }
      //     //initImgPos.current = { y: ref.width / -4, x: ref.height / -4 }

      //     imgPo.current = { x: 0, y: 0 }

      //     if (ctx !== null) {
      //       ctx.imageSmoothingEnabled = false;
      //       //ctx.rotate(90);
      //       //ctx.rotate(Math.PI)
      //       ctx.drawImage(
      //         image.current,
      //         0, 0,
      //         ref.width, ref.height
      //       ); // FIRST IMAGE DRAW
      //     }
      //   }
      // }
    }
  }, [currentIndex, images/* , rotationAngle */])

  useEffect(() => { // ZOOM CHANGED
    const operation: operationI = {
      'x': function(a: number, b: number) { return a * b },
      '/': function(a: number, b: number) { return a / b },
      '+': function(a: number, b: number) { return a + b },
      '-': function(a: number, b: number) { return a - b }
    }

    const comparison: comparisonI = {
      '<=': function(a: number, b: number) { return a <= b },
      '>=': function(a: number, b: number) { return a >= b }
    }

    // if (refCanvas.current !== null) {
    //   let ref = refCanvas.current
    //   let ctx = ref.getContext("2d");

    //   console.log("ENTRO ACA ZOOM")

    //   if (ctx !== null) {
    //     let targetZoom = currentZoom.mORd === 'x' ? currentZoom.val - 0.5 : currentZoom.val
    //     let divider = targetZoom + (targetZoom - 2) // dvdr //   0,   1,   2,   3,   4..
    //     let factor =                                // fctr // 1/2, 1/3, 1/4, 1/5, 1/6..
    //       divider === 0 ? 1 :
    //       1 + (1 / divider)

    //     // *** // LESS -> MORE // MORE -> LESS //
    //     // cZ  // dvdr // fctr // dvdr // fctr //
    //     // 1.0 // -1   // 0    // 0    // 1    //
    //     // 1.5 //  0   // 1    // 1    // 2    //
    //     // 2.0 //  1   // 2    // 2    // 1.5  //
    //     // 2.5 //  2   // 1.5  // 3    // 1.33 //
    //     // 3.0 //  3   // 1.33 // 4    // 1.25 //

    //     let halfDim = { w: ref.width / 2, h: ref.height / 2 }
    //     //let basePos = { x: imgPo.current.x, y: imgPo.current.y }
    //     let basePos =
    //       rotationAngle === -90 ?
    //       { y: imgPo.current.x, x: imgPo.current.y } :
    //       { x: imgPo.current.x, y: imgPo.current.y }
    //     //let basePos = { y: imgPo.current.x, x: imgPo.current.y }
    //     let baseDim = { w: halfDim.w * (divider + currentZoom.dF), h: halfDim.h * (divider + currentZoom.dF) };
        
    //     console.log('AAAAAA rotationAngle --->', rotationAngle);
    //     //         'x' --> halfDim.w * (divider + 2)
    //     //         '/' --> halfDim.w * (divider + 3)

    //     currentZoom.val === 1 ? imgPo.current = { x: 0, y: 0 } : // WHEN 1.0 SET POSITION TO 0, 0
    //     currentZoom.val === 1.5 && currentZoom.mORd === 'x' ? imgPo.current = { x: initImgPos.current.x, y: initImgPos.current.y } : // WHEN 1.0 TO 1.5, SET POSITION TO CENTER OF IMAGE
    //     imgPo.current = { x: operation[currentZoom.mORd](imgPo.current.x, factor), y: operation[currentZoom.mORd](imgPo.current.y, factor) } // ELSE DO TARGET CALC

    //     //let targetPosition = { x: imgPo.current.x, y: imgPo.current.y } // TARGET (UPDATED ↑↑↑) POSITION
    //     let targetPosition =
    //       rotationAngle === -90 ?
    //       { y: imgPo.current.x, x: imgPo.current.y } : // TARGET (UPDATED ↑↑↑) POSITION
    //       { x: imgPo.current.x, y: imgPo.current.y } // TARGET (UPDATED ↑↑↑) POSITION

    //     let offset = timing !== undefined && typeof timing === 'number' ? timing : 10 // ANIMATION FRAMES BETWEEN X.0 --> X.5
    //     let eachFramePos = { x: (targetPosition.x - basePos.x) / offset, y: (targetPosition.y - basePos.y) / offset } // EACH FRAME POS TO INCREASE/DECREASE
    //     let eachFrameDim = { w: halfDim.w / offset, h: halfDim.h / offset } // EACH FRAME WIDTH TO INCREASE/DECREASE // (1920 / 2) / offset

    //     let currPos = { x: basePos.x, y: basePos.y }
    //     let currentDim = { w: baseDim.w, h: baseDim.h }

    //     let targetWidth = ref.width * currentZoom.val
    //     let targetHeight = ref.height * currentZoom.val

    //     let render = () => {
    //       if (ctx !== null) {
    //         // ctx.drawImage(
    //         //   image.current,
    //         //   currPos.x, currPos.y,
    //         //   currentDim.w, currentDim.h
    //         // );

    //         currPos = { x: currPos.x + eachFramePos.x, y: currPos.y + eachFramePos.y }
    //         currentDim.w = operation[currentZoom.aORs](currentDim.w, eachFrameDim.w)
    //         currentDim.h = operation[currentZoom.aORs](currentDim.h, eachFrameDim.h)
    //       }
    //       if (comparison[currentZoom.lORm](currentDim.w, targetWidth)) requestAnimationFrame(render);
    //     }
    //     if (((currentZoom.val !== 1 && currentZoom.mORd === 'x') || currentZoom.mORd === '/')) {
    //       if (disableAnimation) { // ZOOM WITHOUT ANIMATION
    //         // ctx.drawImage(
    //         //   image.current, // NORMAL
    //         //   targetPosition.x, targetPosition.y, // NORMAL
    //         //   targetWidth, targetHeight // NORMAL
    //         //   // image.current, // VERTICAL
    //         //   // targetPosition.y, targetPosition.x, // VERTICAL
    //         //   // targetWidth, targetHeight // VERTICAL
    //         // );
    //       } else render() // RECURSIVE FUNCTION, ZOOM WITH ANIMATION
    //     }
    //   }
    // }
  }, [currentZoom, disableAnimation,/*  rotationAngle, */ timing])

  let mouseDown = (e: TouchEvent | MouseEvent) => {
    if ('touches' in e) { // TOUCH EVENT
      arbPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
      allowMove.current = true
    } else { // MOUSE EVENT
      // arbPos.current = { x: e.clientX, y: e.clientY }
      // allowMove.current = true
      arbPos.current = { x: e.clientX, y: e.clientY }
      allowMove.current = true
    }
  }

  let mouseUp = (e: TouchEvent | MouseEvent) => allowMove.current = false

  let mouseMove = (e: TouchEvent | MouseEvent) => {
//     if (allowMove.current && currentZoom.val !== 1) {
//       if (refCanvas.current !== null) {
//         let ref = refCanvas.current
//         let ctx = ref.getContext("2d");
//         if (ctx !== null) {
//           let targetXPosition;
//           let targetYPosition;

//           if ('touches' in e) { // TOUCH EVENT
//             targetXPosition = imgPo.current.x + (e.touches[0].clientX - arbPos.current.x) * 3 // '* 3' = INCREASE SPEED HERE FOR MOBILE
//             targetYPosition = imgPo.current.y + (e.touches[0].clientY - arbPos.current.y) * 3 // '* 3' = INCREASE SPEED HERE FOR MOBILE
//           } else { // MOUSE EVENT
//             // targetXPosition = imgPo.current.x + (e.clientX - arbPos.current.x) * 1 // '* 1' = INCREASE SPEED HERE FOR DESKTOP
//             // targetYPosition = imgPo.current.y + (e.clientY - arbPos.current.y) * 1 // '* 1' = INCREASE SPEED HERE FOR DESKTOP
//             targetXPosition = // '* 1' = INCREASE SPEED HERE FOR DESKTOP
//               rotationAngle === -90 ?
//               imgPo.current.x + (e.clientX - arbPos.current.x) * 1.5 :
//               rotationAngle === -180 ?
//               imgPo.current.x - (e.clientX - arbPos.current.x) * 1.5 :
//               rotationAngle === -270 ? //
//               imgPo.current.x - (e.clientX - arbPos.current.x) * 1.5 :
//               imgPo.current.x + (e.clientX - arbPos.current.x) * 1.5
// console.log('targetXPosition --->', targetXPosition);
//             targetYPosition = // '* 1' = INCREASE SPEED HERE FOR DESKTOP
//               rotationAngle === -90 ?
//               imgPo.current.y - (e.clientY - arbPos.current.y) * 1.5 :
//               rotationAngle === -180 ?
//               imgPo.current.y - (e.clientY - arbPos.current.y) * 1.5 :
//               rotationAngle === -270 ? //
//               imgPo.current.y + (e.clientY - arbPos.current.y) * 1.5 :
//               imgPo.current.y + (e.clientY - arbPos.current.y) * 1.5

//             //console.log("A VER ESTE", rotationAngle)
// //console.log('targetYPosition --->', targetYPosition);
//           }

//           let factor = ((currentZoom.val * 2) - 2) * 2
//           //   cZ                factor
//           // ((1.5 * 2) - 2) * 2 = 2
//           // ((2.0 * 2) - 2) * 2 = 4
//           // ((2.5 * 2) - 2) * 2 = 6
//           // ((3.0 * 2) - 2) * 2 = 8

//           // let savedX = targetXPosition
//             // targetXPosition = targetYPosition
//             // targetYPosition = savedX

//           if (
//             (targetXPosition < 0 && targetXPosition > initImgPos.current.x * factor) &&
//             (targetYPosition < 0 && targetYPosition > initImgPos.current.y * factor)
//           ) {
//             //rotationAngle === -90 || rotationAngle === -270 ?
//             // ctx.drawImage(
//             //   image.current,
//             //   targetYPosition,targetXPosition,
//             //   ref.width * currentZoom.val,ref.height * currentZoom.val
//             // ) :
//             // ctx.drawImage(
//             //   image.current,
//             //   targetXPosition, targetYPosition,
//             //   ref.width * currentZoom.val, ref.height * currentZoom.val
//             // ) // CONTINUE HERE
//             //imgPo.current = { x: targetXPosition, y: targetYPosition }
//             imgPo.current = { x: targetXPosition, y: targetYPosition }
//           }
//         }
//       }
//       if ('touches' in e) arbPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
//       else arbPos.current = { x: e.clientX, y: e.clientY }
//       //else arbPos.current = { x: e.clientX, y: e.clientY }
//     }
  }
  
  useEffect(() => {
    let iVF = document.getElementById('imageViewerForeground');
    //window.getComputedStyle(iVF)
    if (iVF !== null) {
      //iVF.style.
      //console.dir(iVF)
      //setCurrentZoom((curr) => (curr + 0.1))
      //currentZoom.current = currentZoom.current + 0.1
      //console.log("currentZoom", (currentZoom.current).toFixed(1))
      iVF.style.transform = `scale(${currentZoom}) rotate(${rotationAngle}deg)`
      //iVF.style.transform = `rotate(${rotationAngle}deg)`
      //console.log(window)
      //window.getComputedStyle(iVF)//.width
      //console.log(window.getComputedStyle(iVF).transform)

    }


  }, [currentZoom, rotationAngle])

  const zoomIn = () => {
    //setCurrentZoom((curr: currentZoomI) => ({ val: curr.val + 0.5, mORd: 'x', aORs: '+', lORm: '<=', dF: 2 }))
    //transform: scale(1);
    let iVF = document.getElementById('imageViewerForeground');
    //window.getComputedStyle(iVF)
    if (iVF !== null) {
      //iVF.style.
      //console.dir(iVF)
      //setCurrentZoom((curr) => (curr + 0.1))
      //currentZoom.current = currentZoom.current + 0.1
      //console.log("currentZoom", (currentZoom.current).toFixed(1))
      //iVF.style.transform = 'scale(1.1)'
      //console.log(window)
      //window.getComputedStyle(iVF)//.width
      //console.log(window.getComputedStyle(iVF).transform)

    }
    setCurrentZoom((curr) => (curr + 0.1))
  }

  const zoomOut = () => {
    //setCurrentZoom((curr: currentZoomI) => ({ val: curr.val - 0.5, mORd: '/', aORs: '-', lORm: '>=', dF: 3 }))
    //transform: scale(1);
    setCurrentZoom((curr) => (curr - 0.1))
  }

  const goLeftHandler = () => {
    if (images !== undefined) {
      if (currentIndex === 0) setCurrentIndex(images.length - 1)
      else setCurrentIndex((curr: number) => curr - 1)
      //setCurrentZoom({ val: 1, mORd: 'x', aORs: '+', lORm: '<=', dF: 2 })
    }
  }

  const goRightHandler = () => {
    if (images !== undefined) {
      if (currentIndex === images.length - 1) setCurrentIndex(0)
      else setCurrentIndex((curr: number) => curr + 1)
      //setCurrentZoom({ val: 1, mORd: 'x', aORs: '+', lORm: '<=', dF: 2 })
    }
  }

  const controls: ReactNode =
    <div
      id={`bottomBar`}
      className={css.bottomBar}
    >
      <div className={css.buttonsContainer}>
        <div className={css.imageCounter}>
          { currentIndex !== undefined && images !== undefined ? currentIndex + 1 : 0 }/{ currentIndex !== undefined && images !== undefined ? images.length : 0 }
        </div>
        <Button
          variant="contained"
          className={css.button}
          onClick={() => goLeftHandler()}
        >
          <Forward className={css.icon}/>
        </Button>

        <Button
          variant="contained"
          className={css.button}
          onClick={() => goRightHandler()}
        >
          <Forward className={`${css.icon} ${css.right}`}/>
        </Button>

        <Button
          variant="contained"
          className={css.button}
          onClick={() => zoomOut()}
          //disabled={ currentZoom === 1 ? true : false }
        >
          <Remove className={`${css.icon} ${css.right}`}/>
        </Button>

        <Button
          variant="contained"
          className={css.button}
          onClick={() => zoomIn()}
          //disabled={ currentZoom === 2.0 ? true : false }
        >
          <Add className={`${css.icon} ${css.right}`}/>
        </Button>

  

        <Button
          variant="contained"
          className={css.button}
          //onClick={() => zoomIn()}
          onClick={() => {
            setRotationAngle(curr => curr - 90)
          }}
          //disabled={ currentZoom.val === 8 ? true : false }
        >
          <RotateLeft className={css.icon}/>
        </Button>

        <Button
          variant="contained"
          className={css.button}
          //onClick={() => zoomIn()}
          onClick={() => {
            setRotationAngle(curr => curr + 90)
          }}
          // setCurrentZoom((curr: currentZoomI) => ({ val: curr.val + 0.5 }))
        >
          <RotateRight className={css.icon}/>
        </Button>



        <Button
          variant="contained"
          className={css.button}
          onClick={() => { if (setShowImageViewer !== undefined) setShowImageViewer(false) }}
        >
          <Close className={`${css.icon} ${css.right}`}/>
        </Button>
        <div className={css.zoomContainer}>
          { currentZoom.toFixed(1) }x
        </div>
      </div>
    </div>

  return (
    <div
      id={`modalBackground`}
      className={css.modalBackground}
    >
      <img
        id={`imageViewerForeground`}
        ref={imageRef}
        className={css.imageViewerForeground}
        src={
          images !== undefined ?
          images[currentIndex] :
          ""
        }
        //src={""}
        alt=""
      >
      </img>
      { controls }
    </div>
  )
}