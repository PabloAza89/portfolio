import { useEffect, useState, useRef } from 'react';
import css from './ModalCSS.module.css';
import ForwardIcon from '@mui/icons-material/Forward';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';

function Modal({ images, imageIndex, setShowModal }: any) {

  const [ currentIndex, setCurrentIndex ] = useState(imageIndex)

  const [ currentZoom, setCurrentZoom ] = useState(1) // DEFAULT ZOOM // (cZ)

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
        

        //if (currentZoom === 1) imgPo.current = { x: 0, y: 0 } // RESET POS TO CENTER
        //if (currentZoom === 1) imgPo.current = { x: -480, y: -260 } // RESET POS TO CENTER
        // else if (currentZoom === 1.5) imgPo.current = { x: initImgPos.current.x * 1, y: initImgPos.current.y * 1 } // RESET POS TO CENTER
        // else if (currentZoom === 2) imgPo.current = { x: initImgPos.current.x * 2, y: initImgPos.current.y * 2 } // RESET POS TO CENTER
        // else if (currentZoom === 2.5) imgPo.current = { x: initImgPos.current.x * 3, y: initImgPos.current.y * 3 } // RESET POS TO CENTER
        // else if (currentZoom === 3) imgPo.current = { x: initImgPos.current.x * 4, y: initImgPos.current.y * 4 } // RESET POS TO CENTER

        let preZoom = currentZoom - 0.5
        let factorFactor = preZoom + (preZoom - 2)
        
        let targetFactor = factorFactor === 0 ? 1 : 1 + (1 / factorFactor)
console.log('targetFactor --->', targetFactor);
        //let targetFactor = 1 + ( 1 / factorFactor)

        //let parsedFactorFactor = factorFactor === 0 ?

        let factor = currentZoom + (currentZoom - 2)


        let factor2 = currentZoom === 1 ? 0 : 1 + (1 / factor)
        console.log('factor --->', factor);
        console.log('factor2 --->', factor2);
        console.log('imgPo --->', imgPo.current);
        console.log('imgPo.current.x * factor2 --->', imgPo.current.x * factor2);

        if (currentZoom === 1) imgPo.current = { x: -480, y: -260 } // RESET POS TO CENTER
        else imgPo.current = { x: imgPo.current.x * targetFactor, y: imgPo.current.y * targetFactor }

        // if (currentZoom === 1) imgPo.current = { x: 0, y: 0 } // RESET POS TO CENTER
        // else if (currentZoom === 1.5) imgPo.current = { x: imgPo.current.x * 1, y: imgPo.current.y * 1 } // RESET POS TO CENTER
        // else if (currentZoom === 2) imgPo.current = { x: imgPo.current.x * 2, y: imgPo.current.y * 2 } // RESET POS TO CENTER
        // else if (currentZoom === 2.5) imgPo.current = { x: imgPo.current.x * 1.5, y: imgPo.current.y * 1.5 } // RESET POS TO CENTER
        // else if (currentZoom === 3) imgPo.current = { x: imgPo.current.x * 1.25, y: imgPo.current.y * 1.25 } // RESET POS TO CENTER

        //imgPo.current = { x: initImgPos.current.x * factor, y: initImgPos.current.y * factor }

        

        

        ctx.drawImage(image.current,
          0, 0, ref.width, ref.height,
          //imgPo.current.x * factor, imgPo.current.y * factor, ref.width * currentZoom, ref.height * currentZoom
          //imgPo.current.x, imgPo.current.y, ref.width * currentZoom, ref.height * currentZoom
          imgPo.current.x, imgPo.current.y, ref.width * currentZoom, ref.height * currentZoom
        );

        // if (currentZoom === 1) {
        //   ctx.drawImage(image.current,
        //     0, 0, ref.width, ref.height,
        //     imgPo.current.x * 0, imgPo.current.y * 0, ref.width * currentZoom, ref.height * currentZoom
        //     // 0 0
        //   );
        // }
        
        // else if (currentZoom === 1.5) {
        //   ctx.drawImage(image.current,
        //     0, 0, ref.width, ref.height,
        //     imgPo.current.x * 1, imgPo.current.y * 1, ref.width * currentZoom, ref.height * currentZoom
        //     // 480 260
        //   );
        // }

        // else if (currentZoom === 2) {
        //   ctx.drawImage(image.current,
        //     0, 0, ref.width, ref.height,
        //     imgPo.current.x * 2, imgPo.current.y * 2, ref.width * currentZoom, ref.height * currentZoom
        //   );
        // }

        // else if (currentZoom === 2.5) {
        //   ctx.drawImage(image.current,
        //     0, 0, ref.width, ref.height,
        //     imgPo.current.x * 3, imgPo.current.y * 3, ref.width * currentZoom, ref.height * currentZoom
        //   );
        // }

        // if (currentZoom === 1) {
        //   ctx.drawImage(image.current,
        //     0, 0, ref.width, ref.height,
        //     0, 0, ref.width * currentZoom, ref.height * currentZoom
        //   );
        // }
        // else if (currentZoom === 1.5) {
        //   ctx.drawImage(image.current,
        //     0, 0, ref.width, ref.height,
        //     -480 * 1, -260 * 1, ref.width * currentZoom, ref.height * currentZoom
        //   );
        // } 
        // else if (currentZoom === 2.0) {
        //   ctx.drawImage(image.current,
        //     0, 0, ref.width, ref.height,
        //     -960 , -520, ref.width * currentZoom, ref.height * currentZoom
        //   );
        // } 
        // cZ     cZ         factor
        // 1.0 + (1.0 - 2) === 0
        // 1.5 + (1.5 - 2) === 1
        // 2.0 + (2.0 - 2) === 2
        // 2.5 + (2.5 - 2) === 3
        // 3.0 + (3.0 - 2) === 4
        // 3.5 + (3.5 - 2) === 5
        // 4.0 + (4.0 - 2) === 6
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
          let factor = ((currentZoom * 2) - 2) * 2
          //   cZ                factor
          // ((1.5 * 2) - 2) * 2 = 2
          // ((2.0 * 2) - 2) * 2 = 4
          // ((2.5 * 2) - 2) * 2 = 6
          // ((3.0 * 2) - 2) * 2 = 8
          if (
            (targetXPosition < 0 && targetXPosition > initImgPos.current.x * factor) &&
            (targetYPosition < 0 && targetYPosition > initImgPos.current.y * factor)
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
          {/* <svg width='100%' height='100%' viewBox='0 0 100 100' preserveAspectRatio='none'>
            <line x1="0" y1="0" x2="100" y2="100" vectorEffect="non-scaling-stroke" stroke="red" />
          </svg> */}

          <canvas
            id={`canvasImage`}
            ref={refCanvas}
            //onClick={(e) => test(e)}
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