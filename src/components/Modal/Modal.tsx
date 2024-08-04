import React, { useEffect, useState, useLayoutEffect, useRef } from 'react';
import css from './ModalCSS.module.css';
import ForwardIcon from '@mui/icons-material/Forward';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';

function Modal({ images, imageIndex, setShowModal }: any) {

  const [ currentIndex, setCurrentIndex ] = useState(imageIndex)


  const [ currentZoom, setCurrentZoom ] = useState(1) // DEFAULT ZOOM
  //let currentZoom = useRef(1) // DEFAULT ZOOM



  const zoomIn = () => setCurrentZoom((curr: any) => curr + 0.5)
  const zoomOut = () => setCurrentZoom((curr: any) => curr - 0.5)
    
   

  //const [ percentageScrolled, setPercentageScrolled ]  = useState(0)
  let percentageScrolled = useRef(0)

   //console.log("AMOUNT SCROLL", amountScroll)
   //console.log("TOTAL SCROLL", totalScroll)


  useEffect(() => {
    let imageSCROLL = document.getElementById('imageContainer')
    if (imageSCROLL !== null) {
      imageSCROLL.addEventListener("scroll", function(e: Event) {
        if (e.target !== null) {
          let target = e.target as HTMLInputElement
          //console.log("SCROLLED AMOUT:", target.scrollLeft)
          percentageScrolled.current = (target.scrollLeft * 100) / (target.scrollWidth - target.clientWidth)
        }
      })
    }
  }, [])

  //console.log("CURRENT ZOOM", currentZoom)

  // console.log("AMOUNT SCROLL", amountScroll)
  // console.log("TOTAL SCROLL", totalScroll)



  
    let imageInContainerEl = document.getElementById('imageInContainer')
    let imageSCROLL = document.getElementById('imageContainer')

  

  useEffect(() => {

    
      setTimeout(() => { // SETTIMEOUT HELP TO EXECUTE FUNCTIONS IN ORDER !
        if (imageInContainerEl !== null) {
         imageInContainerEl.style.transform = `scale(${currentZoom})`;
        }
      }, 0)
      
        // if (refDiv.current !== null) {
        //   console.log("refDiv.current", (refDiv.current as HTMLElement).scrollWidth)
        // }

        setTimeout(() => { // SETTIMEOUT HELP TO EXECUTE FUNCTIONS IN ORDER !!!
          if (imageSCROLL !== null) {
            //console.log("TOTAL TO SCROLL", imageSCROLL.scrollWidth - imageSCROLL.clientWidth)
            imageSCROLL.scrollTo(((imageSCROLL.scrollWidth - imageSCROLL.clientWidth) / 100) * percentageScrolled.current, 0)
          }
        }, 0)

        // if (imageSCROLL !== null) {
        //   //console.log("TOTAL TO SCROLL", imageSCROLL.scrollWidth - imageSCROLL.clientWidth)
        //   imageSCROLL.scrollTo(((imageSCROLL.scrollWidth - imageSCROLL.clientWidth) / 100) * percentageScrolled.current, 0)
        // }




  }, [currentZoom, imageInContainerEl, imageSCROLL])


  
  return (
    <div
      id={`modalBackground`}
      className={css.modalBackground}
      //onClick={() => console.log("BBBBBBB")}
    >
      <div className={css.innerModal}>
        <div
          className={css.imageContainer}
          id={`imageContainer`}
          //ref={refDiv}
          //onScroll={() => console.log("SCROLL")}
          //onScrollCapture={() => console.log("SCROLL")}
        >

          <img
            id={`imageInContainer`}
            src={images[currentIndex]}
            alt=""
            className={css.imageInContainer}
          />

        

          

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
              //currentZoom.current = 1
            } else {
              setCurrentIndex((curr: any) => curr - 1)
              setCurrentZoom(1)
              //currentZoom.current = 1
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
              //currentZoom.current = 1
            } else {
              setCurrentIndex((curr: any) => curr + 1)
              setCurrentZoom(1)
              //currentZoom.current = 1
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
          disabled={ currentZoom === 8.0 ? true : false }
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

      </div>
    
    </div>
  )
}

export default Modal;