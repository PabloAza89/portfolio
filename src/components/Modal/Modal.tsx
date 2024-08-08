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

  // const canvas = (document.getElementById("canvasImage") as HTMLCanvasElement).getContext("2d") as CanvasRenderingContext2D;
  // if (canvas !== null) {
  //   //const ctx = canvas.getContext("2d");
  //   canvas.fillStyle = "gray";
  //   canvas.fillRect(10, 10, 150, 100);
  //   // ctx.fillStyle = "green";
  //   // ctx.fillRect(10, 10, 150, 100);
  // }

  let refCanvas = useRef<HTMLCanvasElement>(null)

  //const canvas = document.getElementById("canvasImage") as HTMLCanvasElement;
  if (refCanvas.current !== null) {
    const ctx = refCanvas.current.getContext("2d");

    console.log("CANVAS", refCanvas.current.width)
    if (ctx !== null) {
      ctx.fillStyle = "green";
      ctx.fillRect(20, 0, 100, 100);
    }

    
  }
  

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
            //src={images[currentIndex]}
            //alt=""
            //className={css.canvasImage}
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