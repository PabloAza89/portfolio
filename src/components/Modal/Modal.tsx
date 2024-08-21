import { ReactElement, useEffect, useState, useRef, ReactNode } from 'react';
import css from './ModalCSS.module.css';
import { Forward, Add, Remove, Close } from '@mui/icons-material/';
import { Button } from '@mui/material';
import { ModalI, operationI, comparisonI } from '../../interfaces/interfaces';

function Modal({ images, index, setShowModal, controlsOutside }: ModalI): ReactElement {

  let clickOnBG = useRef({ // CLICK ON BACKGROUND MODAL
    start: false, // CLICK BEGINS ON BG MODAL
    end: false    // CLICK ENDS ON BG MODAL
  })

  window.onmousedown = function(e) {
    let modalDiv = document.getElementById('modalBackground');
    if (e.target === modalDiv) clickOnBG.current.start =  true
    else clickOnBG.current.start =  false
  }

  window.onmouseup = function(e) {
    let modalDiv = document.getElementById('modalBackground');
    if (e.target === modalDiv) clickOnBG.current.end =  true
    else clickOnBG.current.end =  false
    if (setShowModal !== undefined && clickOnBG.current.start && clickOnBG.current.end) setShowModal(false)
  }

  const [ currentIndex, setCurrentIndex ] = useState(index)

  // (cZ) // mORd = multiplication or divition // aORs = addition OR substraction // less OR more // baseWidth
  const [ currentZoom, setCurrentZoom ] = useState({
    val: 1, mORd: 'x', aORs: '+', lORm: '<=', bW: 2
  })

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

          //imgPo.current = { x: initImgPos.current.x, y: initImgPos.current.y }
          imgPo.current = { x: 0, y: 0 }

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

    if (refCanvas.current !== null) {
      let ref = refCanvas.current
      let ctx = ref.getContext("2d");

      if (ctx !== null) {
        let targetZoom = currentZoom.mORd === 'x' ? currentZoom.val - 0.5 : currentZoom.val
        let divider = targetZoom + (targetZoom - 2) // dvdr
        let factor =
          divider === 0 ? 1 :
          1 + (1 / divider)

        //console.log("divider", divider)
        console.log("factor", factor)

        let basePosX = imgPo.current.x
        let basePosY = imgPo.current.y

        let halfWidth = ref.width / 2
        let halfHeight = ref.height / 2

        let baseWidth = halfWidth * (divider + currentZoom.bW) //'x' ? halfWidth * (divider + 2) : halfWidth * (divider + 3) // baseWidth
          //                            (1920 / 2) * (0 + 2) // EN 1.5 === 1920
          //                            (1920 / 2) * (1 + 2) // EN 2.0 === 2880
          //                            (1920 / 2) * (2 + 2) // EN 2.5 === 3840
          //   (1920 / 2) * (0 + 3) // EN 1.5 === 2880
          //   (1920 / 2) * (1 + 3) // EN 2.0 === 3840
          //   (1920 / 2) * (2 + 3) // EN 2.5 === 4800

        let baseHeight =
          currentZoom.mORd === 'x' ? halfHeight * (divider + 2) : // baseHeight
          halfHeight * (divider + 3)

        if (currentZoom.val === 1) imgPo.current = { x: 0, y: 0 } // WHEN 1.0 SET POSITION TO 0, 0
        else if (currentZoom.val === 1.5 && currentZoom.mORd === 'x') imgPo.current = { x: initImgPos.current.x, y: initImgPos.current.y } // WHEN 1.0 to 1.5 SET POSITION TO CENTER OF IMAGE
        else imgPo.current = { x: operation[currentZoom.mORd](imgPo.current.x, factor), y: operation[currentZoom.mORd](imgPo.current.y, factor) } // ELSE DO TARGET CALC

        let targetPositionX = imgPo.current.x // TARGET (UPDATED ↑↑↑) POSITION
        let targetPositionY = imgPo.current.y // TARGET (UPDATED ↑↑↑) POSITION

        let offset = 10 // ANIMATION FRAMES BETWEEN X.0 --> X.5
        let eachFramePosX = (targetPositionX - basePosX) / offset // EACH FRAME POS TO INCREASE/DECREASE
        let eachFramePosY = (targetPositionY - basePosY) / offset // EACH FRAME POS TO INCREASE/DECREASE
        let eachFrameWidth = halfWidth / offset // EACH FRAME WIDTH TO INCREASE/DECREASE // (1920 / 2) / offset
        let eachFrameHeight = halfHeight / offset // EACH FRAME TO INCREASE/DECREASE

        let currPosX = basePosX
        let currPosY = basePosY
        let currentWidth = baseWidth
        let currentHeight = baseHeight

        let targetWidth = ref.width * currentZoom.val

        let render = () => {
          if (ctx !== null) {
            ctx.drawImage(
              image.current,
              currPosX, currPosY, // imgPo
              currentWidth, currentHeight
            );
            currPosX = currPosX + eachFramePosX
            currPosY = currPosY + eachFramePosY
            currentWidth = operation[currentZoom.aORs](currentWidth, eachFrameWidth)
            currentHeight = operation[currentZoom.aORs](currentHeight, eachFrameHeight)
          }
          if (comparison[currentZoom.lORm](currentWidth, targetWidth)) requestAnimationFrame(render);
        }

      if (((currentZoom.val !== 1 && currentZoom.mORd === 'x') || currentZoom.mORd === '/')) render()

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

  const zoomIn = () => setCurrentZoom((curr: any) => ({ val: curr.val + 0.5, mORd: 'x', aORs: '+', lORm: '<=', bW: 2 }))

  const zoomOut = () => setCurrentZoom((curr: any) => ({ val: curr.val - 0.5, mORd: '/', aORs: '-', lORm: '>=', bW: 3 }))

  const goLeftHandler = () => {
    if (images !== undefined) {
      if (currentIndex === 0) setCurrentIndex(images.length - 1)
      else setCurrentIndex((curr: any) => curr - 1)
      setCurrentZoom({ val: 1, mORd: 'x', aORs: '+', lORm: '<=', bW: 2 })
    }
  }

  const goRightHandler = () => {
    if (images !== undefined) {
      if (currentIndex === images.length - 1) setCurrentIndex(0)
      else setCurrentIndex((curr: any) => curr + 1)
      setCurrentZoom({ val: 1, mORd: 'x', aORs: '+', lORm: '<=', bW: 2 })
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