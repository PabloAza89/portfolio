import { ReactElement, useEffect, useState, useRef, ReactNode, useMemo, useLayoutEffect } from 'react';
import css from './ModalCSS.module.css';
import { Forward, Add, Remove, Close } from '@mui/icons-material/';
import { Button } from '@mui/material';
import { ModalI } from '../../interfaces/interfaces';

function Modal({ images, index, setShowModal, controlsOutside }: ModalI): ReactElement {

  // useMemo(() => {
  //   //filterTodos(todos, tab)
  //   console.log(images, index)
  // },[images, index]);

  const myValue = useMemo(() => {
    return index;
   },[index]);

   console.log('myValue --->', myValue);

  // useLayoutEffect(() => {
  //   console.log("imagesimagesimages", images)
  //   console.log("indexindexindex", index)

  // }, [images, index])

  // let qq = images
  // let ww = index

  // console.log("imagesimagesimages", qq)
  // console.log("indexindexindex", ww)

  // useMemo(() => {
  //   //filterTodos(todos, tab)
  //   console.log(images, index)
  // },[images, index, setShowModal, controlsOutside]);

  window.onclick = function(e) {
    if (setShowModal !== undefined) {
      let modalDiv = document.getElementById('modalBackground');
      if (e.target === modalDiv) setShowModal(false)
    }
  }

  const [ currentIndex, setCurrentIndex ] = useState(index)

  const [ currentZoom, setCurrentZoom ] = useState({ val: 1, op: 'x' }) // (cZ)

  let refCanvas = useRef<HTMLCanvasElement>(null)
  let image = useRef(new Image())
  //let image = useRef()
  let allowMove = useRef(false)
  let arbPos = useRef({ x: 0, y: 0 }) // ARBITRARY POSITION
  let initImgPos = useRef({ x: 0, y: 0 }) // INITIAL IMAGE POSITION
  let imgPo = useRef({ x: 0, y: 0 }) // IMAGE POSITION

  useEffect(() => { // LOAD NEW IMAGE
    console.log("AAAAAAAAAAAAAAA")

    

    if (images !== undefined && currentIndex !== undefined) {
      //console.log("inner AAAAAAAAAAAAAAA")

      //image.current = new Image()

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
    }
  }, [currentIndex, images])

  useEffect(() => { // ZOOM CHANGED
    console.log("BBBBBBBBBBBBBBB")
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
    //console.log("CCCCCCCCCCCCCCCCCCCCCC")
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
          <Forward className={css.iconLeft}/>
        </Button>

        <Button
          variant="contained"
          className={css.button}
          onClick={() => goRightHandler()}
        >
          <Forward className={css.iconRight}/>
        </Button>

        <Button
          variant="contained"
          className={css.button}
          onClick={() => zoomOut()}
          disabled={ currentZoom.val === 1 ? true : false }
        >
          <Remove className={css.iconRight}/>
        </Button>

        <Button
          variant="contained"
          className={css.button}
          onClick={() => zoomIn()}
          disabled={ currentZoom.val === 8 ? true : false }
        >
          <Add className={css.iconRight}/>
        </Button>

        <Button
          variant="contained"
          className={css.button}
          onClick={() => { if (setShowModal !== undefined) setShowModal(false)} }
        >
          <Close className={css.iconRight}/>
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