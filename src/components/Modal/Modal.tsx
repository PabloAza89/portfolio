import React, { useEffect, useState, useLayoutEffect, useRef, RefObject } from 'react';
import css from './ModalCSS.module.css';
import ForwardIcon from '@mui/icons-material/Forward';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';

function Modal({ images, imageIndex, setShowModal }: any) {

  const [ currentIndex, setCurrentIndex ] = useState(imageIndex)

  const [ currentZoom, setCurrentZoom ] = useState(100) // DEFAULT ZOOM


  let refCanvas = useRef<HTMLCanvasElement>(null)
    

  useEffect(() => {
    //image.src = images[imageIndex]
    console.log("imageIndex", currentIndex)
    let image = new Image()
    image.src = images[currentIndex]
    image.onload = function() {
      //if (!refCanvas.current) return
      if (refCanvas.current !== null) {
        let ref = refCanvas.current
        const ctx = ref.getContext("2d");
        console.log("image.naturalWidth", image.naturalWidth)
        console.log("image.naturalHeight", image.naturalHeight)
  
        ref.width = image.naturalWidth
        ref.height = image.naturalHeight
  
        if (ctx !== null) {
  
          ctx.drawImage(image, 0, 0, ref.width, ref.height);
          ctx.imageSmoothingEnabled = false;

        }
    
        
      }

    }

    
  }, [images, currentIndex])
  

  const zoomIn = () => {

      
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
          //onClick={() => { zoomOut() }}
          disabled={ currentZoom === 100 ? true : false }
        >
          <RemoveIcon className={css.iconRight}/>
        </Button>

        <Button
          variant="contained"
          className={css.button}
          onClick={() => { zoomIn() }}
          disabled={ currentZoom === 800 ? true : false }
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
          {(currentZoom / 100).toFixed(1)} x
        </div>

      </div>
    </div>
  )
}

export default Modal;