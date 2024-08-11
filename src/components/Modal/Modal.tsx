import { useEffect, useState, useRef } from 'react';
import css from './ModalCSS.module.css';
import ForwardIcon from '@mui/icons-material/Forward';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';

function Modal({ images, imageIndex, setShowModal }: any) {

  const [ currentIndex, setCurrentIndex ] = useState(imageIndex)

  const [ currentZoom, setCurrentZoom ] = useState(1) // DEFAULT ZOOM

  let refCanvas = useRef<HTMLCanvasElement>(null)
  let image = useRef(new Image())

  let allowMove = useRef(false)
  let arbPos = useRef({ x: 0, y: 0 }) // ARBITRARY POSITION

                            // LEFT  CEN   RIG  --> X
                            // -0   -480   -960 --> X (1920)

                            // -520  --> Y (1040)
                            // -260  --> Y
                            // 0     --> Y

  // 1920 / -4 = -480
  // 1040 / -4 = -260
  let initImgPos = useRef({ x: 0, y: 0 }) // INITIAL IMAGE POSITION


  // SAME AS ABOVE
  let imgPo = useRef({ x: 0, y: 0 }) // IMAGE POSITION


  useEffect(() => { // AA LOAD NEW IMAGE
    console.log("AA LOADED NEW IMAGE")
    image.current.src = images[currentIndex]
    image.current.onload = function() {
      if (refCanvas.current !== null) { //
        let ref = refCanvas.current
        let ctx = ref.getContext("2d");
        ref.width = image.current.naturalWidth
        ref.height = image.current.naturalHeight

        //                                     480               260
        initImgPos.current = { x: ref.width / -4, y: ref.height / -4 }

        imgPo.current = { x: initImgPos.current.x, y: initImgPos.current.y }

        if (ctx !== null) {
          //ctx.imageSmoothingEnabled = false;
          ctx.drawImage(image.current, 0, 0, ref.width, ref.height) // FIRST IMAGE DRAW
        }
      }
    }
  }, [currentIndex, images])

  useEffect(() => { // AA ZOOM CHANGED
    console.log("AA ZOOM CHANGED")
    if (refCanvas.current !== null) {
      let ref = refCanvas.current
      let ctx = ref.getContext("2d");

      if (ctx !== null) {
        //console.log('currentZoom --->', currentZoom);
        console.log('imgPo --->', imgPo.current);

        if (currentZoom === 1) imgPo.current = { x: initImgPos.current.x, y: initImgPos.current.y } // RESET POS TO CENTER
        

        let factor = currentZoom + (currentZoom - 2)

        ctx.drawImage(image.current,
          0, 0, ref.width, ref.height,
          imgPo.current.x * factor, imgPo.current.y * factor, ref.width * currentZoom, ref.height * currentZoom
        );
        // 1.0 = 0 // + -1.0 --> 1.0 - 2 --> -1 === currentZoom + -1      === 1 - 1 === 0
        // 1.5 = 1 // + -0.5 --> 1.5 - 2 --> -0.5 === currentZoom + -0.5
        // 2.0 = 2 // + 0
        // 2.5 = 3 // + 0.5 --> 2.5 - 2 --> 0.5 === currentZoom + 0.5
        // 3.0 = 4 // + 1
        // 3.5 = 5 // + 1.5 --> 3.5 - 2 --> 1.5 === currentZoom + 1.5
        // 4.0 = 6 // + 2.0
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
    if (allowMove.current && currentZoom !== 1) {
      //console.log('arbPos.current --->', arbPos.current);
      //console.log('initImgPos --->', initImgPos.current);
      console.log('imgPo --->', imgPo.current); // reset to normal // 480 260
      if (refCanvas.current !== null) {
        let ref = refCanvas.current
        let ctx = ref.getContext("2d");
        if (ctx !== null) {
          let targetXPosition = imgPo.current.x + (e.clientX - arbPos.current.x)
          let targetYPosition = imgPo.current.y + (e.clientY - arbPos.current.y)
          if (
            (targetXPosition < 0 && targetXPosition > initImgPos.current.x * 2) &&
            (targetYPosition < 0 && targetYPosition > initImgPos.current.y * 2)
          ) {
            ctx.drawImage(image.current, targetXPosition, targetYPosition, ref.width * currentZoom, ref.height * currentZoom);
            imgPo.current = { x: targetXPosition, y: targetYPosition }
          }
        }
      }
      arbPos.current = { x: e.clientX, y: e.clientY }

    }
  }

  const zoomIn = () => setCurrentZoom((curr: any) => curr + 0.5)

  const zoomOut = () => setCurrentZoom((curr: any) => curr - 0.5)

  return (
    <div
      id={`modalBackground`}
      className={css.modalBackground}
    >
      <div className={css.innerModal}>
          <canvas
            id={`canvasImage`}
            ref={refCanvas}
            //onClick={(e) => test(e)}
            className={css.canvasImage}
            onMouseDown={(e) => mouseDown(e)}
            onMouseUp={(e) => mouseUp(e)}
            onMouseMove={(e) => mouseMove(e)}
          />
      </div>
      <div className={css.buttonsContainer}>
        <Button
          variant="contained"
          className={css.button}
          onClick={() => {
            if (currentIndex === 0) {
              setCurrentIndex(images.length - 1)
              setCurrentZoom(1)
            } else {
              setCurrentIndex((curr: any) => curr - 1)
              setCurrentZoom(1)
            }
          }}
        >
          <ForwardIcon className={css.iconLeft}/>
        </Button>

        <Button
          variant="contained"
          className={css.button}
          onClick={() => {
            if (currentIndex === images.length - 1) {
              setCurrentIndex(0)
              setCurrentZoom(1)
            } else {
              setCurrentIndex((curr: any) => curr + 1)
              setCurrentZoom(1)
            }
          }}
        >
          <ForwardIcon className={css.iconRight}/>
        </Button>

        <Button
          variant="contained"
          className={css.button}
          onClick={() => { zoomOut() }}
          disabled={ currentZoom === 1 ? true : false }
        >
          <RemoveIcon className={css.iconRight}/>
        </Button>

        <Button
          variant="contained"
          className={css.button}
          onClick={() => { zoomIn() }}
          disabled={ currentZoom === 8 ? true : false }
        >
          <AddIcon className={css.iconRight}/>
        </Button>

        <Button
          variant="contained"
          className={css.button}
          onClick={() => { setShowModal(false) }}
        >
          <CloseIcon className={css.iconRight}/>
        </Button>
        <div>
          {currentZoom.toFixed(1)}x
        </div>

      </div>
    </div>
  )
}

export default Modal;