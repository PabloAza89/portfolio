import React, { useEffect, useState, useLayoutEffect, useRef } from 'react';
import css from './ModalCSS.module.css';
import ForwardIcon from '@mui/icons-material/Forward';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';

function Modal({ images, imageIndex, setShowModal }: any) {

  const [ currentIndex, setCurrentIndex ] = useState(imageIndex)

  const [ currentZoom, setCurrentZoom ] = useState(100) // DEFAULT ZOOM

   //const [ percentageScrolled, setPercentageScrolled ]  = useState({ x: 50, y: 50 })
   let percentageScrolled = useRef({ x: 50, y: 50 })

  const zoomIn = () => {
    setCurrentZoom((curr: any) => curr + 50)
    let imageInContainerEl = document.getElementById('imageInContainer')
    let imageSCROLL = document.getElementById('imageContainer')

    if (imageInContainerEl !== null) {
      imageInContainerEl.addEventListener("transitionend", (el) => {
        if (imageInContainerEl !== null) imageInContainerEl.style.transition = `none`
      });
    }

    // ZOOM-IN
    setTimeout(() => { // SETTIMEOUT HELP TO EXECUTE FUNCTIONS IN ORDER ! // ZOOM-IN
      if (imageInContainerEl !== null && imageSCROLL !== null) {

        //percentageScrolled.current = { x: 50, y: 50 }

        let target = currentZoom + 50
        imageInContainerEl.style.width = `${target}%`;
        imageInContainerEl.style.height = `${target}%`;

        //console.log("EVENT FIRED !! currentZoom", currentZoom)

        if (currentZoom === 100) {
          percentageScrolled.current = { x: 50, y: 50 }
        }

        let target2 = target / 50
        imageInContainerEl.style.scale = `calc((100% / ${target2}) * ${target2 - 1})`; // 150% --> RETURN TO ORIGINAL SCALE (100%) // e.g.: calc((100% / 3) * 2)

        //console.log("PERCENTAGE SCROLLED X", percentageScrolled.x)
        //console.log("PERCENTAGE SCROLLED Y", percentageScrolled.y)
        console.log("PERCENTAGE SCROLLED X", percentageScrolled.current.x)
        console.log("PERCENTAGE SCROLLED Y", percentageScrolled.current.y)

        console.log("TOTAL WIDTH", imageSCROLL.scrollWidth - imageSCROLL.clientWidth)
        console.log("TOTAL HEIGHT", imageSCROLL.scrollHeight - imageSCROLL.clientHeight)
        // console.log("XXX ", ((imageSCROLL.scrollWidth - imageSCROLL.clientWidth) / 100) * percentageScrolled.x)
        // console.log("YYY ", ((imageSCROLL.scrollHeight - imageSCROLL.clientHeight) / 100) * percentageScrolled.y)
        console.log("XXX ", ((imageSCROLL.scrollWidth - imageSCROLL.clientWidth) / 100) * percentageScrolled.current.x)
        console.log("YYY ", ((imageSCROLL.scrollHeight - imageSCROLL.clientHeight) / 100) * percentageScrolled.current.y)
        //imageSCROLL.scrollTo(((imageSCROLL.scrollWidth - imageSCROLL.clientWidth) / 100) * percentageScrolled.x, ((imageSCROLL.scrollHeight - imageSCROLL.clientHeight) / 100) * percentageScrolled.y)
        imageSCROLL.scrollTo(((imageSCROLL.scrollWidth - imageSCROLL.clientWidth) / 100) * percentageScrolled.current.x, ((imageSCROLL.scrollHeight - imageSCROLL.clientHeight) / 100) * percentageScrolled.current.y)
        //imageSCROLL.scrollTo(((imageSCROLL.scrollWidth - imageSCROLL.clientWidth) / 100) * 50, ((imageSCROLL.scrollHeight - imageSCROLL.clientHeight) / 100) * 50)
        //imageSCROLL.scrollTo(50, 50)

        //imageInContainerEl.style.transformOrigin = `${percentageScrolled.x}% ${percentageScrolled.y}%`;
        imageInContainerEl.style.transformOrigin = `${percentageScrolled.current.x}% ${percentageScrolled.current.y}%`;
        //imageInContainerEl.style.transformOrigin = `50% 50%`;
        imageInContainerEl.style.scale = `100%`;
        imageInContainerEl.style.transition = `scale 2000ms linear`;

        

      }
    }, 0)
  }

  const zoomOut = () => {
    setCurrentZoom((curr: any) => curr - 50)
    let imageInContainerEl = document.getElementById('imageInContainer')
    let imageSCROLL = document.getElementById('imageContainer')

    if (imageInContainerEl !== null) {
      imageInContainerEl.addEventListener("transitionend", (el) => {
        if (imageInContainerEl !== null) imageInContainerEl.style.transition = `none`
      });
    }
    // ZOOM-OUT
    setTimeout(() => { // SETTIMEOUT HELP TO EXECUTE FUNCTIONS IN ORDER ! // ZOOM-OUT
      if (imageInContainerEl !== null && imageSCROLL !== null) {

        let target = currentZoom - 50
        imageInContainerEl.style.width = `${target}%`;
        imageInContainerEl.style.height = `${target}%`;

        

        let target2 = currentZoom / 50

        console.log("currentZoom", currentZoom)
        // console.log("target2", target2)
        // console.log("target2 + 1", target2 + 1)

        //imageInContainerEl.style.scale = `calc((100% / ${target2}) * ${target2 - 1})`; // 150% --> RETURN TO ORIGINAL SCALE (100%) // e.g.: calc((100% / 3) * 2)
        //imageInContainerEl.style.scale = `calc((${currentZoom}% / ${target2}) * ${target2 + 1})`; // 100% --> RETURN TO ORIGINAL SCALE (150%) // e.g.: calc((100% / 3) * 2)

        imageInContainerEl.style.scale = `150%`; // 100% --> RETURN TO ORIGINAL SCALE (150%) // e.g.: calc((100% / 3) * 2)

        //imageSCROLL.scrollTo(((imageSCROLL.scrollWidth - imageSCROLL.clientWidth) / 100) * percentageScrolled.x, ((imageSCROLL.scrollHeight - imageSCROLL.clientHeight) / 100) * percentageScrolled.y)

        

        //imageInContainerEl.style.transformOrigin = `${percentageScrolled.x}% ${percentageScrolled.y}%`;
        //imageInContainerEl.style.transformOrigin = `${percentageScrolled.x / 2}% ${percentageScrolled.y / 2}%`;
        //imageInContainerEl.style.transformOrigin = `0% 0%`;

        //imageInContainerEl.style.transition = `scale 400ms linear`;
        

       

        //imageInContainerEl.style.transformOrigin = `${percentageScrolled.x/3}% ${percentageScrolled.y/3}%`;
        //imageInContainerEl.style.transformOrigin = `${(percentageScrolled.x/3)*2}% ${(percentageScrolled.y/3)*2}%`;
        //console.log("percentageScrolled.x", percentageScrolled.x, "percentageScrolled.y", percentageScrolled.y)
        //imageInContainerEl.style.transformOrigin = `0% 0%`; // ON CENTER
        //imageInContainerEl.style.transformOrigin = `0% 0%`; // BOTTOM LEFT // 25% 0%
        //console.log("CURRENT ZOOOOOOm", currentZoom)
        if (currentZoom === 150) imageSCROLL.scrollTo(0, 0)
        else imageSCROLL.scrollTo(((imageSCROLL.scrollWidth - imageSCROLL.clientWidth) / 100) * percentageScrolled.current.x, ((imageSCROLL.scrollHeight - imageSCROLL.clientHeight) / 100) * percentageScrolled.current.y)
        //imageSCROLL.scrollTo(((imageSCROLL.scrollWidth - imageSCROLL.clientWidth) / 100) * percentageScrolled.x, ((imageSCROLL.scrollHeight - imageSCROLL.clientHeight) / 100) * percentageScrolled.y)
        
        //imageSCROLL.scrollTo(0, 0)

        //imageInContainerEl.style.transformOrigin = `0% 0%`; //
        //imageInContainerEl.style.transformOrigin = `50% 50%`; //
        //imageInContainerEl.style.transformOrigin = `100% 100%`; //
        //imageInContainerEl.style.transition = `width 5000ms linear, height 5000ms linear`;
        //imageInContainerEl.style.transformOrigin = `33% 0%`; // FROM LEFT-TOP (X-Y) OK !
        //imageInContainerEl.style.transformOrigin = `33% 50%`; // FROM LEFT-CENTER (X-Y) OK !
        //imageInContainerEl.style.transformOrigin = `33% 100%`; // FROM LEFT-BOTTOM (X-Y) OK !

        //imageInContainerEl.style.transformOrigin = `50% 0%`; // FROM CENTER-TOP (X-Y) OK !
        imageInContainerEl.style.transformOrigin = `50% 50%`; // FROM CENTER-CENTER (X-Y) OK !
        //imageInContainerEl.style.transformOrigin = `50% 100%`; // FROM CENTER-BOTTOM (X-Y) OK !
        
        //imageInContainerEl.style.transformOrigin = `66% 0%`; // FROM RIGHT-TOP (X-Y) OK !
        //imageInContainerEl.style.transformOrigin = `66% 50%`; // FROM RIGHT-CENTER (X-Y) OK !
        //imageInContainerEl.style.transformOrigin = `66% 100%`; // FROM RIGHT-BOTTOM (X-Y) OK !
        imageInContainerEl.style.scale = `100%`;
        imageInContainerEl.style.transition = `scale 2000ms linear`;
        
        
        
        //imageSCROLL.scrollTo(((imageSCROLL.scrollWidth - imageSCROLL.clientWidth) / 100) * percentageScrolled.x, ((imageSCROLL.scrollHeight - imageSCROLL.clientHeight) / 100) * percentageScrolled.y)
        //imageInContainerEl.style.transformOrigin = `66% 66%`;
        //imageInContainerEl.style.transformOrigin = `150% 150%`;
        //imageInContainerEl.style.transformOrigin = `0% 0%`;

        //imageInContainerEl.style.transformOrigin = `25% 50%`; //
        
        //imageInContainerEl.style.transition = `scale 500ms linear`;
        

        //imageInContainerEl.style.transformOrigin = `50% 50%`;
        //imageInContainerEl.style.transition = `all 100ms linear`;
        //imageInContainerEl.style.transformOrigin = `${percentageScrolled.x}% ${percentageScrolled.y}%`;

        //percentageScrolled.current = { x: 50, y: 50 }

      }
    }, 0)

    // setTimeout(() => { // SETTIMEOUT HELP TO EXECUTE FUNCTIONS IN ORDER !
    //   //setPercentageScrolled({ x: 50, y: 50 })
    //   percentageScrolled.current = { x: 50, y: 50 }

    // }, 0)

    // setTimeout(() => { // SETTIMEOUT HELP TO EXECUTE FUNCTIONS IN ORDER !
    //   if (imageInContainerEl !== null && imageSCROLL !== null) {

    //     let target = currentZoom - 50
    //     //imageInContainerEl.style.width = `${target}%`;
    //     //imageInContainerEl.style.height = `${target}%`;

        

    //     let target2 = currentZoom / 50

    //     console.log("currentZoom", currentZoom)
    //     console.log("target2", target2)
    //     console.log("target2 + 1", target2 + 1)

    //     //imageInContainerEl.style.scale = `calc((100% / ${target2}) * ${target2 - 1})`; // 150% --> RETURN TO ORIGINAL SCALE (100%) // e.g.: calc((100% / 3) * 2)
    //     //imageInContainerEl.style.scale = `calc((${currentZoom}% / ${target2}) * ${target2 + 1})`; // 100% --> RETURN TO ORIGINAL SCALE (150%) // e.g.: calc((100% / 3) * 2)

    //     imageSCROLL.scrollTo(((imageSCROLL.scrollWidth - imageSCROLL.clientWidth) / 100) * percentageScrolled.x, ((imageSCROLL.scrollHeight - imageSCROLL.clientHeight) / 100) * percentageScrolled.y)

    //     //imageInContainerEl.style.transformOrigin = `${percentageScrolled.x}% ${percentageScrolled.y}%`;
    //     imageInContainerEl.style.transformOrigin = `50% 50%`;
    //     imageInContainerEl.style.scale = `100%`;
    //     //imageInContainerEl.style.transition = `scale 100ms linear`;

    //   }
    // }, 0)
  }

  let imageSCROLL = document.getElementById('imageContainer')

  useEffect(() => {
    
    if (imageSCROLL !== null) {
      imageSCROLL.addEventListener("scroll", function(e: Event) {
        //console.log("EVENT FIRED !!")
        if (e.target !== null) {
          let target = e.target as HTMLInputElement // AVOID 'NUMBER DIVIDED BY ZERO'
          
          // if (target.scrollWidth !== target.clientWidth) setPercentageScrolled({
          //   x: (target.scrollLeft * 100) / (target.scrollWidth - target.clientWidth),
          //   y: (target.scrollTop * 100) / (target.scrollHeight - target.clientHeight)
          // })
          // else setPercentageScrolled({ x: 50, y: 50 })
          //console.log("EVENT FIRED !! target.scrollWidth", target.scrollWidth)
          //console.log("EVENT FIRED !! target.clientWidth", target.clientWidth)
          if (target.scrollWidth !== target.clientWidth) {
            //console.log("EVENT FIRED !!, SET TO X AMOUNT")
            percentageScrolled.current = {
              x: (target.scrollLeft * 100) / (target.scrollWidth - target.clientWidth),
              y: (target.scrollTop * 100) / (target.scrollHeight - target.clientHeight)
            }
          }
          else {
            //console.log("EVENT FIRED !!, SET TO 0")
            percentageScrolled.current = { x: 50, y: 50 }
          }
        }
      })
    }
  }, [imageSCROLL])

  let updateZoomOut = () => {
    let imageInContainerEl = document.getElementById('imageInContainer')
    let imageSCROLL = document.getElementById('imageContainer')
    //console.log(percentageScrolled.x, percentageScrolled.y)
    console.log(percentageScrolled.current.x, percentageScrolled.current.y)
    //console.log(Number.isNaN(percentageYScrolled))
      setTimeout(() => { // SETTIMEOUT HELP TO EXECUTE FUNCTIONS IN ORDER !
        if (imageInContainerEl !== null && imageSCROLL !== null) {
         //imageInContainerEl.style.transform = `scale(${currentZoom - 0.5})`;
         imageInContainerEl.style.scale = `${currentZoom - 0.5}`;
         //imageSCROLL.scrollTo(((imageSCROLL.scrollWidth - imageSCROLL.clientWidth) / 100) * percentageScrolled.x, ((imageSCROLL.scrollHeight - imageSCROLL.clientHeight) / 100) * percentageScrolled.y)
         imageSCROLL.scrollTo(((imageSCROLL.scrollWidth - imageSCROLL.clientWidth) / 100) * percentageScrolled.current.x, ((imageSCROLL.scrollHeight - imageSCROLL.clientHeight) / 100) * percentageScrolled.current.y)
         
         
        }
      }, 0)

  }

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
            //id={css.imageInContainer}
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

      </div>
    
    </div>
  )
}

export default Modal;