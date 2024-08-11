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
  let pos = useRef(0)
  let clickArbPos = useRef(0)
  let initialImagePosition = useRef(-480)

  useEffect(() => { // LOAD NEW IMAGE
    console.log("AA LOADED NEW IMAGE")
    //let image = new Image()
    image.current.src = images[currentIndex]
    image.current.onload = function() {
      if (refCanvas.current !== null) { //
        let ref = refCanvas.current
        let ctx = ref.getContext("2d");
        ref.width = image.current.naturalWidth
        ref.height = image.current.naturalHeight
        if (ctx !== null) ctx.drawImage(image.current, 0, 0, ref.width, ref.height) // DRAW FIRST IMAGE
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
            //console.log("ENTRO EN OTRO")
            ctx.drawImage(image.current,
              0, 0, ref.width, ref.height,
              -480, -260, ref.width * currentZoom, ref.height * currentZoom
              // LEFT  CEN   RIG
              // -0   -480   -960
              // 0, 0, ref.width, ref.height,
              // amount *1, 0, ref.width * currentZoom, ref.height * currentZoom
            );
          }
        }
    } 

  }, [currentZoom])


  //console.log("pos current", pos.current)

  let mouseDown = (e:any) => {
    pos.current = e.clientX
    clickArbPos.current = e.clientX
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
              console.log("AMOUNT SCROLLED", e.clientX - pos.current)
              
              let qq = initialImagePosition.current + (e.clientX - pos.current)
              console.log("TESTTTTTTTTTT", qq)
              ctx.drawImage(image.current,
                //-480, -260, ref.width *1.5, ref.height * 1.5,
                qq, -260, ref.width *1.5, ref.height * 1.5,
                //0, 0, ref.width, ref.height,
                //-480 + (e.clientX - pos.current), -260//, ref.width, ref.height
              );
              initialImagePosition.current = qq
                //-480, -260, ref.width * currentZoom, ref.height * currentZoom
                // LEFT  CEN   RIG
                // -0   -480   -960
                // 0, 0, ref.width, ref.height,
                // amount *1, 0, ref.width * currentZoom, ref.height * currentZoom
          }
      }
      pos.current = e.clientX
    }
  }

  const zoomIn = () => {
    setCurrentZoom((curr: any) => curr + 0.5)
  }

  const zoomOut = () => {
    setCurrentZoom((curr: any) => curr - 0.5)
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