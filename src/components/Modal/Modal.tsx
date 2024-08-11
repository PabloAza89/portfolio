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
  // let ref: any
  // if (refCanvas.current !== null) {
  //   ref = refCanvas.current
  // }

  let image = useRef(new Image())
  // let ref: any
  // let ctx: any
  // if (refCanvas.current !== null) {
  //   ref = refCanvas.current
  //   ctx = ref.getContext("2d");
  // }
    
  const [ amount, setAmount ] = useState(0)

  
  let allowMove = useRef(false)
  let pos = useRef(0)
console.log('pos --->', pos);
  //let initPos = useRef(0)
  let clickArbPos = useRef(0)
  //const [ initPos, setInitPos ] = useState(0)
  let targetPos = useRef(0)
  //let scrolled = useRef(0)
  const [ scrolled, setScrolled ] = useState(0)
  //let currentPos = useRef(-480)
  let initialImagePosition = useRef(-480)
  const [ imagePosition, setImagePosition ] = useState(-480)
console.log('imagePosition --->', imagePosition);
//console.log('scrolled --->', scrolled.current);
//console.log('targetPos --->', targetPos.current);

  //let image = new Image()
  


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

  // useEffect(() => { // CHANGE POSITION

  //   if (refCanvas.current !== null) {
  //     let ref = refCanvas.current
  //     let ctx = ref.getContext("2d");

  //       if (ctx !== null) {
  //         //console.log('currentZoom --->', currentZoom);
  //           //console.log("ENTRO EN OTRO")
  //           ctx.drawImage(ctx.canvas, pos.current, 0 ////, ref.width, ref.height,
  //             //-480, -260, ref.width * currentZoom, ref.height * currentZoom
  //             // LEFT  CEN   RIG
  //             // -0   -480   -960
  //             // 0, 0, ref.width, ref.height,
  //             // amount *1, 0, ref.width * currentZoom, ref.height * currentZoom
  //           );
          
  //       }
  //   } 

  // }, [])


  //console.log("pos current", pos.current)

  let mouseDown = (e:any) => {
    //console.log("MOUSE DOWN")
    //console.log("MOUSE DOWN", e.clientX)
    //console.log("MOUSE DOWN", e.clientX)
    //setAmount(e.clientX)
    //console.log("MOUSE DOWN clientX", e.clientX)
    pos.current = e.clientX
    clickArbPos.current = e.clientX
    //setInitPos(e.clientX)
    allowMove.current = true
  }

  let mouseUp = (e:any) => {
    //console.log("MOUSE UP")
    console.log("MOUSE UP", e.clientX)
    //setAmount()
    //setAmount((curr: any) => e.clientX - curr)
    allowMove.current = false
    //initialImagePosition.current = initialImagePosition.current + (e.clientX - clickArbPos.current)
    //setImagePosition(initialImagePosition.current + (e.clientX - clickArbPos.current))
  }

  let mouseMove = (e:any) => {
    //console.log("MOUSE UP")
    //if (allowMove.current && currentZoom > 1) {
    if (allowMove.current) {

    
      //console.log("MOUSE MOVE clientX", e.clientX)
      //console.log("MOUSE MOVE", e)
      //console.log("MOUSE MOVE", e.target.value)
      //setAmount(e.clientX)
      //pos.current = e.clientX - pos.current
      //targetPos.current = e.clientX - pos.current
      // scrolled.current = e.clientX - initPos.current
      // console.log('scrolled.current --->', scrolled.current);
      //setScrolled(e.clientX - initPos)
      //setScrolled(e.clientX - initPos.current)
      //currentPos.current = e.clientX - initPos.current
      //console.log("ASDASD", e.clientX - clickArbPos.current ) // RESTA EN BASE DE X PUNTO, EN TOTAL
      //console.log("ASDASD", initialImagePosition.current - e.clientX) // RESTA EN BASE DE X PUNTO, EN TOTAL
      //console.log("ASDASDSAD", pos.current - e.clientX)
      //console.log("ASDASDSAD", e.clientX - pos.current)

      if (refCanvas.current !== null) {
        let ref = refCanvas.current
        let ctx = ref.getContext("2d");
  
          if (ctx !== null) {
            //console.log('currentZoom --->', currentZoom);
              //console.log("ENTRO EN OTRO")
              //console.log("RRRRRRRRRRRRRRR", pos.current)
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

    

      //console.log("BBBBBBBBBB", (e.clientX - initPos.current) - initPos.current)
      //setImagePosition(initialImagePosition.current + (e.clientX - clickArbPos.current))
      //setImagePosition(initialImagePosition.current - (e.clientX - clickArbPos.current))
      //setImagePosition((clickArbPos.current- e.clientX) + initialImagePosition.current)
      //setImagePosition(initialImagePosition.current + (clickArbPos.current- e.clientX))
      //setCurrentPos((curr: any) => curr - (e.clientX - initPos.current))
      //setCurrentPos(initPos.current - (e.clientX - initPos.current))
      //console.log('scrolled.current --->', scrolled.current);
      
    }
    
  }

  //console.log("AMOUNTTTT", amount)

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
          {/* {(currentZoom / 100).toFixed(1)} x */}
          {currentZoom.toFixed(1)} x
        </div>

      </div>
    </div>
  )
}

export default Modal;