import { ReactElement, useEffect, useState, useRef, ReactNode } from 'react';
import css from './ModalCSS.module.css';
import { Forward, Add, Remove, Close } from '@mui/icons-material/';
import { Button } from '@mui/material';
import { ModalI, operationI } from '../../interfaces/interfaces';

function Modal({ images, index, setShowModal, controlsOutside }: ModalI): ReactElement {

  let qq = useRef({
    start: false, // CLICK BEGINS ON BG MODAL
    end: false    // CLICK ENDS ON BG MODAL
  })

  window.onmousedown = function(e) {
    let modalDiv = document.getElementById('modalBackground');
    if (e.target === modalDiv) qq.current.start =  true
    else qq.current.start =  false
  }

  window.onmouseup = function(e) {
    let modalDiv = document.getElementById('modalBackground');
    if (e.target === modalDiv) qq.current.end =  true
    else qq.current.end =  false
    if (setShowModal !== undefined && qq.current.start && qq.current.end) setShowModal(false)
  }

  const [ currentIndex, setCurrentIndex ] = useState(index)

  const [ currentZoom, setCurrentZoom ] = useState({ val: 1, op: 'x' }) // (cZ)

  let refCanvas = useRef<HTMLCanvasElement>(null)
  let image = useRef(new Image())
  let allowMove = useRef(false)
  let arbPos = useRef({ x: 0, y: 0 }) // ARBITRARY POSITION
  let initImgPos = useRef({ x: 0, y: 0 }) // INITIAL IMAGE POSITION
  let imgPo = useRef({ x: 0, y: 0 }) // IMAGE POSITION

  useEffect(() => { // LOAD NEW IMAGE
    if (images !== undefined && currentIndex !== undefined) {
      image.current.src = images[currentIndex]
      image.current.onload = function() {
        if (refCanvas.current !== null) { //
          let ref = refCanvas.current
          let ctx = ref.getContext("2d");
          ref.width = image.current.naturalWidth
          ref.height = image.current.naturalHeight

          // e.g.:               x: 480             y: 260               // (1920 x 1040)
          initImgPos.current = { x: ref.width / -4, y: ref.height / -4 }

          imgPo.current = { x: initImgPos.current.x, y: initImgPos.current.y }

          if (ctx !== null) {
            ctx.imageSmoothingEnabled = false;
            ctx.drawImage(
              image.current,
              0, 0,
              ref.width, ref.height
            ); // FIRST IMAGE DRAW
          }
        }
      }
    }
  }, [currentIndex, images])

  useEffect(() => { // ZOOM CHANGED
    //console.log("ENTRO ACA 1")
    let operation: operationI = {
      'x': function(a: number, b: number) { return a * b },
      '/': function(a: number, b: number) { return a / b }
    }

    if (refCanvas.current !== null) {
      let ref = refCanvas.current
      let ctx = ref.getContext("2d");

      if (ctx !== null) {
        let targetZoom = currentZoom.op === 'x' ? currentZoom.val - 0.5 : currentZoom.val
        let divider = targetZoom + (targetZoom - 2) // dvdr
        let factor = divider === 0 ? 1 : 1 + (1 / divider)

      //   console.log("OLD POSITION",
      //     currentZoom.val === 1.5 && currentZoom.op === 'x' ? { x: 0, y: 0 } :
      //     imgPo.current
      // )

        //let oldPos = currentZoom.val === 1.5 && currentZoom.op === 'x' ? { x: 0, y: 0 } : imgPo.current // oldPosition
        //let oldPos = currentZoom.val === 1.5 && currentZoom.op === 'x' ? { x: 0, y: 0 } : imgPo.current // oldPosition
        let oldPos =
          currentZoom.val === 1.5 && currentZoom.op === 'x' ? { x: 0, y: 0 } :
          currentZoom.val === 2 && currentZoom.op === 'x' ? { x: 0, y: 0 } :
          { x: -480, y: -260 } // oldPosition
        console.log('oldPosition --->', oldPos);

        //let oldWid = currentZoom.val === 1.5 && currentZoom.op === 'x' ? 1920 : ref.width // oldWidth
        //let oldHei = currentZoom.val === 1.5 && currentZoom.op === 'x' ? 1040 : ref.height // oldHeight
        let oldWid = currentZoom.val === 1.5 ? ref.width : ref.width * 1 // oldWidth
        let oldHei = currentZoom.val === 1.5 ? ref.height : ref.height * 1 // oldHeight

        if (currentZoom.val === 1) imgPo.current = { x: 0, y: 0 } // WHEN 1.0 SET POSITION TO 0, 0
        else if (currentZoom.val === 1.5 && currentZoom.op === 'x') imgPo.current = { x: initImgPos.current.x, y: initImgPos.current.y } // WHEN 1.0 to 1.5 SET POSITION TO CENTER OF IMAGE
        else imgPo.current = { x: operation[currentZoom.op](imgPo.current.x, factor), y: operation[currentZoom.op](imgPo.current.y, factor) } // ELSE DO TARGET CALC

        let newPos =
          currentZoom.val === 1.5 && currentZoom.op === 'x' ? { x: -480, y: -260 } :
          currentZoom.val === 2 && currentZoom.op === 'x' ? { x: -960, y: -520 } :
          imgPo.current
        //imgPo.current // newPosition

        let newWidth = 
          currentZoom.val === 1.5 ? 960 : // OK!
          currentZoom.val === 2 ? 1920 : // 1440 maso // 1280 peor // 1920 OK PERO MUCHO ZOOM
          1440
        let newHeight =
          currentZoom.val === 1.5 ? 520 : // OK!
          currentZoom.val === 2 ? 1040 : // 780 maso // 953.33 peor // 1040 OK PERO MUCHO ZOOM
          780 // newHeight
        //  let newWidth = 960 // newWidth
        //  let newHeight = 520 // newHeight

        //let qqq: any
        let offset = 100
        //let eachFramePosX = currentZoom.val === 1.5 ? newPos.x / offset : (newPos.x + 480) / offset
        //let eachFramePosY = currentZoom.val === 1.5 ? newPos.y / offset : (newPos.y + 260) / offset
        let eachFramePosX =
          currentZoom.val === 1.5 ? -480 / offset :
          currentZoom.val === 2 ? -480 / offset :
          -480 / offset
        let eachFramePosY =
          currentZoom.val === 1.5 ? -260 / offset :
          currentZoom.val === 2 ? -260 / offset :
          -260 / offset

        // let eachFrameWidth =
        //   currentZoom.val === 1.5 ? newWidth / offset : // eachFrameWidthidht
        //   currentZoom.val === 2 ? newWidth / offset :
        //   newWidth / offset
        // let eachFrameHeight =
        //   currentZoom.val === 1.5 ? newHeight / offset : // eachFrameHeighteight
        //   currentZoom.val === 2 ? newHeight / offset : // eachFrameHeighteight
        //   newHeight / offset

        let eachFrameWidth =
          currentZoom.val === 1.5 ? 960 / offset : // eachFrameWidthidht
          currentZoom.val === 2 ? 960 / offset :
          newWidth / offset
        let eachFrameHeight =
          currentZoom.val === 1.5 ? 520 / offset : // eachFrameHeighteight
          currentZoom.val === 2 ? 520 / offset : // eachFrameHeighteight
          newHeight / offset

        let currPosX =
          currentZoom.val === 1.5 ? 0 :
          currentZoom.val === 2 ? -480 : // -480no // -240maso // 0no // 120+a la der
           -480 // currentXPosition
        let currPosY =
          currentZoom.val === 1.5 ? 0 :
          currentZoom.val === 2 ? -260 : // -260no // -130maso // 0no // 65+a la der
           -260 // currentYPosition

        let currentWidth =
          currentZoom.val === 1.5 ? 1920 :
          currentZoom.val === 2 ? 2880 :
          2880 // currenewWidthth
        let currentHeight =
          currentZoom.val === 1.5 ? 1040 :
          currentZoom.val === 2 ? 1560 :
          1560 // currentHeighteight

        let render = () => {
          if (ctx !== null && currentZoom.val !== 1) {
            console.log('currPosX --->', currPosX);
            console.log('currPosY --->', currPosY);
            console.log('currentWidth --->', currentWidth);

            ctx.drawImage(
              image.current,
              //ctx.canvas,
              //0, 0, ref.width, ref.height,
              currPosX, currPosY, // imgPo
              //operation[currentZoom.op](currPosX, factor), operation[currentZoom.op](currPosY, factor),
              currentWidth, currentHeight
              // newPos.x, newPos.y,
              // newWidth, newHeight
              //ref.width * currentZoom.val, ref.height * currentZoom.val
            );

            currPosX = currPosX + eachFramePosX
            currPosY = currPosY + eachFramePosY

            currentWidth = currentWidth + eachFrameWidth
            currentHeight = currentHeight + eachFrameHeight
          }

          //if(!paused.current) requestAnimationFrame(render);
          //if(currPosX >= newPos.x && currentZoom.val === 1.5) {
          if(currPosX >= -480 && currentZoom.val === 1.5) {
            //console.log("RENDERED")
            requestAnimationFrame(render); // CONTINUE ANIMATION, ELSE STOPS
          }
          else if(currPosX >= -960 && currentZoom.val === 2) {
            //console.log("RENDERED")
            requestAnimationFrame(render); // CONTINUE ANIMATION, ELSE STOPS
          }
          // else {
          //   cancelAnimationFrame(qqq)
          // }
          // else {
          //   ctx.drawImage(
          //     image.current,
          //     nP.x, nP.y,
          //     ref.width * currentZoom.val, ref.height * currentZoom.val
          //   );
          // }
        }

        console.log("ANIMATION START")
        render()
        console.log("ANIMATION STOPS")

        // ctx.drawImage(
        //   image.current,
        //   nP.x, nP.y,
        //   ref.width * currentZoom.val, ref.height * currentZoom.val
        // );

        //console.log("ENTRO ACA 2")

        // ctx.drawImage( // WORKING
        //   image.current,
        //   imgPo.current.x, imgPo.current.y,
        //   ref.width * currentZoom.val, ref.height * currentZoom.val
        //   //1920, 1040
        // );

        // **  // --> //            LESS --> MORE            /or/            MORE --> LESS            //
        // cZ  // --> // tZ     tZ    === dvdr // 1+(1/dvdr) /or/ tZ     tZ    === dvdr // 1+(1/dvdr) //
        // 1.0 // --> //   **** manually set to 0, 0 ****    /or/   **** manually set to 0, 0 ****    //
        // 1.5 // --> // 1.0 + (1.0 - 2) === 0 // 1.0 (man.) /or/ 1.5 + (1.5 - 2) === 1 // 2.0        //
        // 2.0 // --> // 1.5 + (1.5 - 2) === 1 // 2.0        /or/ 2.0 + (2.0 - 2) === 2 // 1.5        //
        // 2.5 // --> // 2.0 + (2.0 - 2) === 2 // 1.5        /or/ 2.5 + (2.5 - 2) === 3 // 1.33       //
        // 3.0 // --> // 2.5 + (2.5 - 2) === 3 // 1.33       /or/ 3.0 + (3.0 - 2) === 4 // 1.25       //
        // 3.5 // --> // 3.0 + (3.0 - 2) === 4 // 1.25       /or/ 3.5 + (3.5 - 2) === 5 // 1.2        //
        // 4.0 // --> // 3.5 + (3.5 - 2) === 5 // 1.2        /or/ 4.0 + (4.0 - 2) === 6 // 1.166      //
      }
    }
  }, [currentZoom])

  let mouseDown = (e:any) => {
    arbPos.current = { x: e.clientX, y: e.clientY }
    allowMove.current = true
  }

  let mouseUp = (e:any) => {
    allowMove.current = false
  }

  let mouseMove = (e:any) => {
    if (allowMove.current && currentZoom.val !== 1) {
      if (refCanvas.current !== null) {
        let ref = refCanvas.current
        let ctx = ref.getContext("2d");
        if (ctx !== null) {
          let targetXPosition = imgPo.current.x + (e.clientX - arbPos.current.x)
          let targetYPosition = imgPo.current.y + (e.clientY - arbPos.current.y)
          let factor = ((currentZoom.val * 2) - 2) * 2
          //   cZ                factor
          // ((1.5 * 2) - 2) * 2 = 2
          // ((2.0 * 2) - 2) * 2 = 4
          // ((2.5 * 2) - 2) * 2 = 6
          // ((3.0 * 2) - 2) * 2 = 8
          if (
            (targetXPosition < 0 && targetXPosition > initImgPos.current.x * factor) &&
            (targetYPosition < 0 && targetYPosition > initImgPos.current.y * factor)
          ) {
            ctx.drawImage(
              image.current,
              targetXPosition, targetYPosition,
              ref.width * currentZoom.val, ref.height * currentZoom.val
            );
            imgPo.current = { x: targetXPosition, y: targetYPosition }
console.log('imgPo.current --->', imgPo.current);
          }
        }
      }
      arbPos.current = { x: e.clientX, y: e.clientY }
    }
  }

  const zoomIn = () => setCurrentZoom((curr: any) => ({ val: curr.val + 0.5, op: 'x' }))

  const zoomOut = () => setCurrentZoom((curr: any) => ({ val: curr.val - 0.5, op: '/' }))

  const goLeftHandler = () => {
    if (images !== undefined) {
      if (currentIndex === 0) setCurrentIndex(images.length - 1)
      else setCurrentIndex((curr: any) => curr - 1)
      setCurrentZoom({ val: 1, op: 'x' })
    }
  }

  const goRightHandler = () => {
    if (images !== undefined) {
      if (currentIndex === images.length - 1) setCurrentIndex(0)
      else setCurrentIndex((curr: any) => curr + 1)
      setCurrentZoom({ val: 1, op: 'x' })
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
          disabled={ currentZoom.val === 1 ? true : false }
        >
          <Remove className={`${css.icon} ${css.right}`}/>
        </Button>

        <Button
          variant="contained"
          className={css.button}
          onClick={() => zoomIn()}
          disabled={ currentZoom.val === 8 ? true : false }
        >
          <Add className={`${css.icon} ${css.right}`}/>
        </Button>

        <Button
          variant="contained"
          className={css.button}
          onClick={() => { if (setShowModal !== undefined) setShowModal(false)} }
        >
          <Close className={`${css.icon} ${css.right}`}/>
        </Button>
        <div className={css.zoomContainer}>
          { currentZoom.val.toFixed(1) }x
        </div>
      </div>
    </div>

  return (
    <div
      id={`modalBackground`}
      className={css.modalBackground}
    >
      <div
        id={`innerModal`}
        className={css.innerModal}
      >
        <canvas
          id={`canvasImage`}
          ref={refCanvas}
          className={css.canvasImage}
          onMouseDown={(e) => mouseDown(e)}
          onMouseUp={(e) => mouseUp(e)}
          onMouseMove={(e) => mouseMove(e)}
        />
        { !controlsOutside && controls }
      </div>
      { controlsOutside && controls }
    </div>
  )
}

export default Modal;