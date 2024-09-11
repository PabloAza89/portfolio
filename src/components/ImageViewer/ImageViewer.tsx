import {
  ReactElement, useEffect, useLayoutEffect, useState, useRef, ReactNode, MouseEvent, TouchEvent
} from 'react';
import css from './ImageViewerCSS.module.css';
import { Forward, Add, Remove, Close, RotateLeft, RotateRight, Flip, RestartAlt, Cached, VolunteerActivismOutlined } from '@mui/icons-material/';
import { Button } from '@mui/material';
import {
  ImageViewerI, operationI, comparisonI, currentZoomI
} from '../../interfaces/interfaces';
//import { consoleCSSParser } from './consoleCSSParser';

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
  //   let modalDiv = document.getElementById('modalBackground');
  //   if (e.target === modalDiv) clickOnBG.current.start =  true
  //   else clickOnBG.current.start =  false
  // }

  // window.onmouseup = function(e) {
  //   let modalDiv = document.getElementById('modalBackground');
  //   if (e.target === modalDiv) clickOnBG.current.end =  true
  //   else clickOnBG.current.end =  false
  //   if (setShowImageViewer !== undefined && clickOnBG.current.start && clickOnBG.current.end) {
  //     setShowImageViewer(false)
  //   }
  // }

  const [ currentIndex, setCurrentIndex ] = useState<number>(index !== undefined ? index : 0)

  

  

  //const [ rotationAngle, setRotationAngle ] = useState(0)

  const [ imagePos, setImagePos ] = useState({
    x: 0,
    y: 0,
  })

  const [ imageProps, setImageProps ] = useState({
    zoomX: 1.0,
    zoomY: 1.0,
    angle: 0,
  })

  //console.log('rotationAngle --->', rotationAngle);
  
  //let currentZoom = useRef(1.0)//, setCurrentZoom ] = useState(1.0)
  // const [ currentZoom, setCurrentZoom ] = useState<currentZoomI>({ // (cZ)
  //   val: 1, mORd: 'x', aORs: '+', lORm: '<=', dF: 2
  // })

  //let refCanvas = useRef<HTMLCanvasElement>(null)
  let imageRef = useRef(new Image())
  
  
  //let initImgPos = useRef({ x: 0, y: 0 }) // INITIAL IMAGE POSITION
  let imgPo = useRef({ x: 0, y: 0 }) // IMAGE POSITION


  // const [ currentPos, setCurrentPos ] = useState({
  //   x: 0,
  //   y: 0
  // })

  let currentPos = useRef({
      x: 0,
      y: 0
  })

  // const [ left, setLeft ] = useState(0)
  // const [ top, setTop ] = useState(0)

  // let left = 0;
  // let top = 0;

  // useEffect(() => {

  //   console.log("currentPos", currentPos.x)

  //   let iVF = document.getElementById('imageViewerForeground');
  //   //window.getComputedStyle(iVF)
  //   if (iVF !== null) {
  //     //iVF.style.
  //     //console.dir(iVF)
  //     //setCurrentZoom((curr) => (curr + 0.1))
  //     //currentZoom.current = currentZoom.current + 0.1
  //     //console.log("currentZoom", (currentZoom.current).toFixed(1))
      
      
  //     //iVF.style.transform = `scale(${imageProps.zoomX}, ${imageProps.zoomY}) rotate(${imageProps.angle}deg)`
  //     iVF.style.translate = `${currentPos.x}px ${currentPos.y}px`
  //     // iVF.style.left = `${currentPos.x}px`
  //     // iVF.style.top = `${currentPos.y}px`
  //     // translate(-100px, 0px)
      
  //     //console.log('imageProps --->', imageProps);

  //     //translate(${imagePos.x}, ${imagePos.y})

  //     //iVF.style.transform = `rotate(${rotationAngle}deg)`
  //     //console.log(window)
  //     //window.getComputedStyle(iVF)//.width
  //     //console.log(window.getComputedStyle(iVF).transform)

  //   }



  // }, [currentPos])

  let allowMove = useRef(false)
  let arbPos = useRef({ x: 0, y: 0 }) // ARBITRARY POSITION

  useEffect(() => { // LOAD NEW IMAGE
    if (images !== undefined && currentIndex !== undefined) {
      imageRef.current.src = images[currentIndex]

    }
  }, [currentIndex, images])


  let mouseDown = (e: TouchEvent | MouseEvent) => {
    console.log("MOUSE DOWN")
    if ('touches' in e) { // TOUCH EVENT
      arbPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
      allowMove.current = true
    } else { // MOUSE EVENT
      // arbPos.current = { x: e.clientX, y: e.clientY }
      // allowMove.current = true
      arbPos.current = { x: e.clientX, y: e.clientY }
      console.log("START POSITION", e.clientX)
      allowMove.current = true
    }
  }

  let mouseUp = (e: TouchEvent | MouseEvent) => allowMove.current = false

  let targetXPosition
  let targetYPosition

  let mouseMove = (e: TouchEvent | MouseEvent) => {

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
        console.log("A VER", e.clientX - arbPos.current.x) // CONTINUE HERE
        

        arbPos.current = {
          x: e.clientX,
          y: e.clientY
        }

        //console.log("currentPos", currentPos)

        //console.log("arbPos.current.x", arbPos.current.x)
        //console.log("e.clientX", e.clientX)

      }
    }

//       if ('touches' in e) arbPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
//       else arbPos.current = { x: e.clientX, y: e.clientY }

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
      
      
      //iVF.style.transform = `scale(${imageProps.zoomX}, ${imageProps.zoomY}) rotate(${imageProps.angle}deg)`
      iVF.style.transform = `
        scale(${imageProps.zoomX}, ${imageProps.zoomY})
        rotate(${imageProps.angle}deg)
      `
      // translate(-100px, 0px)
      
      //console.log('imageProps --->', imageProps);

      //translate(${imagePos.x}, ${imagePos.y})

      //iVF.style.transform = `rotate(${rotationAngle}deg)`
      //console.log(window)
      //window.getComputedStyle(iVF)//.width
      //console.log(window.getComputedStyle(iVF).transform)

    }


  //}, [currentZoom, rotationAngle])
  }, [imageProps/* , imagePos */])

  const zoomIn = () => {
    
    //setImageProps((curr) => ({ ...curr, zoomX: curr.zoomX + 0.1, zoomY: curr.zoomY + 0.1 }))

    setImageProps((curr) => ({
      //...curr, zoomX: curr.zoomX + 0.1, zoomY: curr.zoomY + 0.1
      ...curr,
      zoomX: curr.zoomX < 0 ? curr.zoomX - 0.1 : curr.zoomX + 0.1,
      zoomY: curr.zoomY < 0 ? curr.zoomY - 0.1 : curr.zoomY + 0.1,
    }))
  }

  const zoomOut = () => {
    
    //setImageProps((curr) => ({ ...curr, zoomX: curr.zoomX - 0.1, zoomY: curr.zoomY - 0.1 }))

    setImageProps((curr) => ({
      ...curr,
      zoomX: curr.zoomX < 0 ? curr.zoomX + 0.1 : curr.zoomX - 0.1,
      zoomY: curr.zoomY < 0 ? curr.zoomY + 0.1 : curr.zoomY - 0.1,
    }))

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
          <Forward className={`${css.icon} ${css.flipIcon}`}/>
        </Button>


        <Button
          variant="contained"
          className={css.button}
          //onClick={() => zoomIn()}
          onClick={() => {
            //setImageProps((curr) => ({ ...curr, zoomX: curr.zoomX * -1 }))
            setImageProps({
              zoomX: 1.0,
              zoomY: 1.0,
              angle: 0,
            })
            let iVF = document.getElementById('imageViewerForeground');
            if (iVF !== null) {
              iVF.style.transition = `transform 2s, left 2s, top 2s`;
              iVF.style.left = `0px`;
              iVF.style.top = `0px`;
              iVF.ontransitionend = () => {
                console.log("TRANSITION END")
                if (iVF !== null) {
                  iVF.style.transition = `transform 2s`;
                  //iVF.ontransitionend = () => {}
                }
              }
            }
            currentPos.current = {x:0,y:0}
          }}
          //disabled={ currentZoom.val === 8 ? true : false }
        >
          <Cached className={`${css.icon}`}/>
        </Button>





        <Button
          variant="contained"
          className={css.button}
          onClick={() => zoomOut()}
          //disabled={ currentZoom === 1 ? true : false }
        >
          <Remove className={`${css.icon} ${css.flipIcon}`}/>
        </Button>

        <Button
          variant="contained"
          className={css.button}
          onClick={() => zoomIn()}
          //disabled={ currentZoom === 2.0 ? true : false }
        >
          <Add className={`${css.icon} ${css.flipIcon}`}/>
        </Button>







        <Button
          variant="contained"
          className={css.button}
          //onClick={() => zoomIn()}
          onClick={() => {
            //setRotationAngle(curr => curr - 90)
            //setCurrentZoom((curr) => ({ ...curr, x: curr.x * -1 }))
            setImageProps((curr) => ({ ...curr, zoomX: curr.zoomX * -1 }))
          }}
          //disabled={ currentZoom.val === 8 ? true : false }
        >
          <Flip className={`${css.icon} ${css.flipIcon}`}/>
        </Button>


        <Button
          variant="contained"
          className={css.button}
          //onClick={() => zoomIn()}
          onClick={() => {
            //setRotationAngle(curr => curr - 90)
            //setCurrentZoom((curr) => ({ ...curr, y: curr.y * -1 }))

            setImageProps((curr) => ({ ...curr, zoomY: curr.zoomY * -1 }))


          }}
          //disabled={ currentZoom.val === 8 ? true : false }
        >
          <Flip className={`${css.icon} ${css.flipIconTest}`}/>
        </Button>






  

        <Button
          variant="contained"
          className={css.button}
          //onClick={() => zoomIn()}
          onClick={() => {
            //setRotationAngle(curr => curr - 90)

            setImageProps((curr) => ({ ...curr, angle: curr.angle - 90 }))


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
            //setRotationAngle(curr => curr + 90)
            setImageProps((curr) => ({ ...curr, angle: curr.angle + 90 }))
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
          <Close className={`${css.icon} ${css.flipIcon}`}/>
        </Button>
        <div className={css.zoomContainer}>
          { imageProps.zoomX.toFixed(1) }x
        </div>
      </div>
    </div>

  return (
    <div
      id={`modalBackground`}
      className={css.modalBackground}
      onMouseDown={(e) => mouseDown(e)} // MOUSE START
      onMouseMove={(e) => mouseMove(e)} // MOUSE MOVE
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
      { controls }
    </div>
  )
}