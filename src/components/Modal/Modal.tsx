import React, { useEffect, useState, useLayoutEffect, useRef, RefObject } from 'react';
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
    
  const [ amount, setAmount ] = useState(0)

  useEffect(() => {
    console.log("currentZoom", currentZoom)
    //console.log("LAUNCHED")
    let image = new Image()
    image.src = images[currentIndex]
    image.onload = function() {
      if (refCanvas.current !== null) {
        let ref = refCanvas.current
        const ctx = ref.getContext("2d");
        console.log("image.naturalWidth", image.naturalWidth)
        console.log("image.naturalHeight", image.naturalHeight)
  
        //ref.width = image.naturalWidth * currentZoom
        //ref.width = (image.naturalWidth * currentZoom) * 1.5
        //ref.height = image.naturalHeight * currentZoom * 1.5
        //ref.width = 2000
        //ref.height = image.naturalHeight * currentZoom
        ref.width = image.naturalWidth
        ref.height = image.naturalHeight
  
        if (ctx !== null) {

          ctx.imageSmoothingEnabled = false;
          //ctx.drawImage(image, 0, 0, ref.width, ref.height);
          
          console.log("currentZoom", currentZoom)

          //drawImage(image,
          //  sx, sy, sWidth, sHeight,
          //  dx, dy, dWidth, dHeight)
          // ctx.drawImage(image,
          //   0, 0, ref.width, ref.height,
          //   0, 0, ref.width * currentZoom, ref.height * currentZoom
          // );
          // width  1920 // 960 // 480
          // height 1040 // 520 // 260
          if (currentZoom === 1) {
            ctx.drawImage(image,
              0, 0, ref.width, ref.height,
              0, 0, ref.width * currentZoom, ref.height * currentZoom
            );
          } else {
            ctx.drawImage(image,
              0, 0, ref.width, ref.height,
              -960, -260, ref.width * currentZoom, ref.height * currentZoom
              // LEFT CEN RIG
              // -0 -480 -960
              // 0, 0, ref.width, ref.height,
              // amount *1, 0, ref.width * currentZoom, ref.height * currentZoom
            );
          }
          
          //ctx.translate(100, 100); 
          //ctx.drawImage(image, 0, 0, 1920, 1040);
          
          //ctx.scale(currentZoom, currentZoom);
        }
      }
    }
  }, [images, currentIndex, currentZoom, amount])

  

  let mouseDown = (e:any) => {
    //console.log("MOUSE DOWN")
    //console.log("MOUSE DOWN", e.clientX)
    console.log("MOUSE DOWN", e.clientX)
    setAmount(e.clientX)
  }

  let mouseUp = (e:any) => {
    //console.log("MOUSE UP")
    console.log("MOUSE UP", e.clientX)
    //setAmount()
    setAmount((curr: any) => e.clientX - curr)
  }

  let mouseMove = (e:any) => {
    //console.log("MOUSE UP")
    console.log("MOUSE MOVE", e.clientX)
    setAmount(e.clientX)
  }

  console.log("AMOUNTTTT", amount)

  // useEffect(() => {
  //   console.log("currentZoom", currentZoom)
  //   let image = new Image()
  //   image.src = images[currentIndex]
  //   image.onload = function() {
  //     if (refCanvas.current !== null) {
  //       let ref = refCanvas.current
  //       const ctx = ref.getContext("2d");

  //       if (ctx !== null) {
  //         ctx.drawImage(image, 0, 0, ref.width, ref.height);
  //         //ctx.scale(currentZoom, currentZoom);
  //         ctx.scale(currentZoom, currentZoom);

  //       }
    
        
  //     }
  //   }
  // }, [currentIndex, currentZoom, images, refCanvas])
  

  const zoomIn = () => {
    //setCurrentZoom((curr: any) => curr + 50)
    setCurrentZoom((curr: any) => curr + 0.5)
      
  }

  const zoomOut = () => {
    //setCurrentZoom((curr: any) => curr + 50)
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
            //onMouseDown={(e) => mouseDown(e)}
            //onMouseUp={(e) => mouseUp(e)}
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
          {/* {(currentZoom / 100).toFixed(1)} x */}
          {currentZoom.toFixed(1)} x
        </div>

      </div>
    </div>
  )
}

export default Modal;