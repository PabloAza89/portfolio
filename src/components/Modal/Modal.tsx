import React, { useEffect, useState, useRef } from 'react';
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
  let posX = useRef(0)
  let posY = useRef(0)

                            // LEFT  CEN   RIG  --> X
                            // -0   -480   -960 --> X (1920)

                            // -520  --> Y (1040)
                            // -260  --> Y
                            // 0     --> Y

  let initialImagePositionX = useRef(0) // 1920 / -4 = -480
  let initialImagePositionY = useRef(0) // 1040 / -4 = -260

  let imagePositionX = useRef(0) // 1920 / -4 = -480
  let imagePositionY = useRef(0) // 1040 / -4 = -260

  useEffect(() => { // AA LOAD NEW IMAGE
    console.log("AA LOADED NEW IMAGE")
    image.current.src = images[currentIndex]
    image.current.onload = function() {
      if (refCanvas.current !== null) { //
        let ref = refCanvas.current
        let ctx = ref.getContext("2d");
        ref.width = image.current.naturalWidth
        ref.height = image.current.naturalHeight

        initialImagePositionX.current = ref.width / -4 // 1920 / -4 = -480
        initialImagePositionY.current = ref.height / -4 // 1040 / -4 = -260

        imagePositionX.current = initialImagePositionX.current
        imagePositionY.current = initialImagePositionY.current

        if (ctx !== null) ctx.drawImage(image.current, 0, 0, ref.width, ref.height) // FIRST IMAGE DRAW
      }
    }
  }, [currentIndex, images])

  useEffect(() => { // AA ZOOM CHANGED
    console.log("AA ZOOM CHANGED")
    if (refCanvas.current !== null) {
      let ref = refCanvas.current
      let ctx = ref.getContext("2d");

      if (ctx !== null) {
        console.log('currentZoom --->', currentZoom);
        // ctx.drawImage(image.current, // OKK
        //              0, 0, ref.width, ref.height,
        //              0, 0, ref.width * currentZoom, ref.height * currentZoom
        // )

        if (currentZoom === 1) {
          //console.log("ENTRO EN ESTE")
          ctx.drawImage(image.current,
            0, 0, ref.width, ref.height,
            0, 0, ref.width * currentZoom, ref.height * currentZoom
          );
        } else {
          ctx.drawImage(image.current,
            0, 0, ref.width, ref.height,
            initialImagePositionX.current, initialImagePositionY.current, ref.width * currentZoom, ref.height * currentZoom
            //ref.width / -4, ref.height / -4, ref.width * currentZoom, ref.height * currentZoom
            //-480, -260, ref.width * currentZoom, ref.height * currentZoom
          );
        }
      }
    }
  }, [currentZoom])


  //console.log("pos current", posX.current)

  let mouseDown = (e:any) => {
    posX.current = e.clientX
    posY.current = e.clientY
    allowMove.current = true
  }

  let mouseUp = (e:any) => {
    allowMove.current = false
  }

  let mouseMove = (e:any) => {
    if (allowMove.current) {

      if (refCanvas.current !== null) {
        let ref = refCanvas.current
        let ctx = ref.getContext("2d");
        if (ctx !== null) {
          let targetXPosition = imagePositionX.current + (e.clientX - posX.current)
          //console.log("QQ", qq > -960)
          //if (qq < 0 && qq > initialImagePositionX.current) {
          if (targetXPosition < 0 && targetXPosition > -960) {

            //console.log("AAAAAAAAAAAAAAAAA", ref.width / -4)

            ctx.drawImage(image.current, targetXPosition, -260, ref.width * currentZoom, ref.height * currentZoom);
            imagePositionX.current = targetXPosition
          }
          //-480, -260, ref.width * currentZoom, ref.height * currentZoom
          // LEFT  CEN   RIG
          // -0   -480   -960
          // 0, 0, ref.width, ref.height,
          // amount *1, 0, ref.width * currentZoom, ref.height * currentZoom
        }
      }
      posX.current = e.clientX
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
          {currentZoom.toFixed(1)} x
        </div>

      </div>
    </div>
  )
}

export default Modal;