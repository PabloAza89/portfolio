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

  

  //let image = useRef<any>(null)
  //let image = new Image();// = useRef<HTMLImageElement>(null)

  // useEffect(() => {
  //   // image.current = new Image();
  //   image.src = images[currentIndex]
    
  //   image.src = images[currentIndex]
  // }, [currentIndex, image, images])

  useEffect(() => {
    if (refCanvas.current !== null) {
      let ref = refCanvas.current
      const ctx = ref.getContext("2d");

      let image = new Image()
      image.src = images[currentIndex]
      // ref.width = image.naturalWidth
      // ref.height = image.naturalHeight
      ref.width = 1920
      ref.height = 1040
  
      //console.log("CANVAS", refCanvas.current.width)
      if (ctx !== null) {
        //context.drawImage(base_image, 100, 100);
        
        
        
        //console.log("IMAGE", image)
        //console.dir(image)
        
        
        
        
        image.onload = () => {
          //ctx.drawImage(image, 0, 0, ref.width, ref.height);
          //ctx.drawImage(image, 0, 0, 1920, 1040);
          ctx.drawImage(image, 0, 0, 1920, 1040,     // source rectangle
                             0, 0, ref.width, ref.height); // destination rectangle
          ctx.imageSmoothingEnabled = false;
          
          //ctx.imageSmoothingEnabled = true;
          //ctx.setTransform(1, 0, 0, 1, 0, 0);
          //ctx.scale(1, 1);
          //ctx.scale(2, 2);
          //console.dir(image)
        };
        
        
        //ctx.fillStyle = "green";
        //ctx.fillRect(0, 0, ref.width, ref.height);
        // ref.style.width = '300px'
        // ref.style.height = '300px'
        //ctx.drawImage(image, ref.width, ref.height);
      }
  
      
    }
  }, [currentIndex, images])
  

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
            //width="1920" height="1040"
            // width={image.current.naturalWidth}
            // height={image.current.naturalHeight}
            // width={image.current.naturalWidth}
            // height={image.current.naturalHeight}
            width={1920}
            height={1040}
            //src={images[currentIndex]}
            //alt=""
            //className={css.canvasImage}
          >
            {/* <img
              src={images[currentIndex]}
              alt=""
            ></img> */}
          </canvas>
          
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