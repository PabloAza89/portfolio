import { useEffect, useState, useRef } from 'react';
import css from './ModalCSS.module.css';
import ForwardIcon from '@mui/icons-material/Forward';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';

function Modal({ images, imageIndex, setShowModal }: any) {

  const [ currentIndex, setCurrentIndex ] = useState(imageIndex)

  const [ currentZoom, setCurrentZoom ] = useState({ val: 1, op: 'x' }) // (cZ)

  let refCanvas = useRef<HTMLCanvasElement>(null)
  let image = useRef(new Image())
  let allowMove = useRef(false)
  let arbPos = useRef({ x: 0, y: 0 }) // ARBITRARY POSITION
  let initImgPos = useRef({ x: 0, y: 0 }) // INITIAL IMAGE POSITION
  let imgPo = useRef({ x: 0, y: 0 }) // IMAGE POSITION

  useEffect(() => { // LOAD NEW IMAGE
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
          ctx.drawImage(image.current, 0, 0, ref.width, ref.height) // FIRST IMAGE DRAW
        }
      }
    }
  }, [currentIndex, images])

  useEffect(() => { // ZOOM CHANGED
    let operation:any = {
      'x': function(a: any, b: any){ return a*b},
      '/': function(a: any, b: any){ return a/b}
    }

    if (refCanvas.current !== null) {
      let ref = refCanvas.current
      let ctx = ref.getContext("2d");

      if (ctx !== null) {
        let targetZoom = currentZoom.op === 'x' ? currentZoom.val - 0.5 : currentZoom.val
        let divider = targetZoom + (targetZoom - 2) // dvdr
        let factor = divider === 0 ? 1 : 1 + (1 / divider)

        if (currentZoom.val === 1) imgPo.current = { x: 0, y: 0 } // WHEN 1.0 SET POSITION TO 0, 0
        else if (currentZoom.val === 1.5 && currentZoom.op === 'x') imgPo.current = { x: initImgPos.current.x, y: initImgPos.current.y } // WHEN 1.0 to 1.5 SET POSITION TO CENTER OF IMAGE
        else imgPo.current = { x: operation[currentZoom.op](imgPo.current.x, factor), y: operation[currentZoom.op](imgPo.current.y, factor) } // ELSE DO TARGET CALC

        ctx.drawImage(image.current,
          0, 0, ref.width, ref.height,
          imgPo.current.x, imgPo.current.y, ref.width * currentZoom.val, ref.height * currentZoom.val
        );

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
            ctx.drawImage(image.current, targetXPosition, targetYPosition, ref.width * currentZoom.val, ref.height * currentZoom.val);
            imgPo.current = { x: targetXPosition, y: targetYPosition }
          }
        }
      }
      arbPos.current = { x: e.clientX, y: e.clientY }
    }
  }

  const zoomIn = () => setCurrentZoom((curr: any) => ({ val: curr.val + 0.5, op: 'x' }))

  const zoomOut = () => setCurrentZoom((curr: any) => ({ val: curr.val - 0.5, op: '/' }))

  const goLeftHandler = () => {
    if (currentIndex === 0) setCurrentIndex(images.length - 1)
    else setCurrentIndex((curr: any) => curr - 1)
    setCurrentZoom({ val: 1, op: 'x' })
  }

  const goRightHandler = () => {
    if (currentIndex === images.length - 1) setCurrentIndex(0)
    else setCurrentIndex((curr: any) => curr + 1)
    setCurrentZoom({ val: 1, op: 'x' })
  }

  return (
    <div
      id={`modalBackground`}
      className={css.modalBackground}
    >
      <div className={css.innerModal}>
          <canvas
            id={`canvasImage`}
            ref={refCanvas}
            className={css.canvasImage}
            onMouseDown={(e) => mouseDown(e)}
            onMouseUp={(e) => mouseUp(e)}
            onMouseMove={(e) => mouseMove(e)}
          />

          <div style={{outline: "1px solid", height: "100%", width: '100%', zIndex: '20000', pointerEvents: 'none', position: 'absolute' }}>
            <svg width='100%' height='100%' viewBox='0 0 100 100' preserveAspectRatio='none'>
              <line x1="0" y1="0" x2="100" y2="100" vectorEffect="non-scaling-stroke" stroke="red" />
              <line x1="0" y1="100" x2="100" y2="0" vectorEffect="non-scaling-stroke" stroke="red" />
            </svg>
          </div>

      </div>
      <div className={css.buttonsContainer}>
        <Button
          variant="contained"
          className={css.button}
          onClick={() => goLeftHandler()}
        >
          <ForwardIcon className={css.iconLeft}/>
        </Button>

        <Button
          variant="contained"
          className={css.button}
          onClick={() => goRightHandler()}
        >
          <ForwardIcon className={css.iconRight}/>
        </Button>

        <Button
          variant="contained"
          className={css.button}
          onClick={() => zoomOut()}
          disabled={ currentZoom.val === 1 ? true : false }
        >
          <RemoveIcon className={css.iconRight}/>
        </Button>

        <Button
          variant="contained"
          className={css.button}
          onClick={() => zoomIn()}
          disabled={ currentZoom.val === 8 ? true : false }
        >
          <AddIcon className={css.iconRight}/>
        </Button>

        <Button
          variant="contained"
          className={css.button}
          onClick={() => setShowModal(false)}
        >
          <CloseIcon className={css.iconRight}/>
        </Button>
        <div>
          {currentZoom.val.toFixed(1)}x
        </div>

      </div>
    </div>
  )
}

export default Modal;