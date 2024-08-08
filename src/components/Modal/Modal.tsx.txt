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

  let percentageScrolled = useRef({ x: 50, y: 50 })

  let refDiv = useRef<HTMLDivElement>(null)

  const zoomIn = () => {
    setCurrentZoom((curr: any) => curr + 50)
    let imageInContainerEl = document.getElementById('imageInContainer')
    let imageSCROLL = document.getElementById('imageContainer')

    if (imageInContainerEl !== null) {
      imageInContainerEl.style.translate = '0% 0%'
      imageInContainerEl.style.transformOrigin = `50% 50%`
    }

    if (imageInContainerEl !== null) {
      imageInContainerEl.addEventListener("transitionend", (el) => {
        if (imageInContainerEl !== null) imageInContainerEl.style.transition = `none`
      });
    }

    // ZOOM-IN
    setTimeout(() => { // SETTIMEOUT HELP TO EXECUTE FUNCTIONS IN ORDER ! // ZOOM-IN
      if (imageInContainerEl !== null && imageSCROLL !== null) {

        let target = currentZoom + 50
        imageInContainerEl.style.width = `${target}%`;
        imageInContainerEl.style.height = `${target}%`;

        if (currentZoom === 100) {
          percentageScrolled.current = { x: 50, y: 50 }
        }

        let target2 = target / 50
        imageInContainerEl.style.scale = `calc((100% / ${target2}) * ${target2 - 1})`; // 150% --> RETURN TO ORIGINAL SCALE (100%) // e.g.: calc((100% / 3) * 2)
        
        imageSCROLL.scrollTo(((imageSCROLL.scrollWidth - imageSCROLL.clientWidth) / 100) * percentageScrolled.current.x, ((imageSCROLL.scrollHeight - imageSCROLL.clientHeight) / 100) * percentageScrolled.current.y)
        imageInContainerEl.style.transformOrigin = `${percentageScrolled.current.x}% ${percentageScrolled.current.y}%`;
        imageInContainerEl.style.scale = `100%`;
        imageInContainerEl.style.transition = `all 1000ms linear`;

      }
    }, 0)
  }

  const zoomOut = () => {
    setCurrentZoom((curr: any) => curr - 50)
    let imageInContainerEl = document.getElementById('imageInContainer')
    let imageSCROLL = document.getElementById('imageContainer')

    if (imageInContainerEl !== null) {
      imageInContainerEl.addEventListener("transitionend", (el) => {
        if (imageInContainerEl !== null) {
          imageInContainerEl.style.transition = `none`;
        }
      });
    }
    // ZOOM-OUT
    setTimeout(() => { // SETTIMEOUT HELP TO EXECUTE FUNCTIONS IN ORDER ! // ZOOM-OUT
      if (imageInContainerEl !== null && imageSCROLL !== null) {

        let target = currentZoom - 50
        imageInContainerEl.style.width = `${target}%`;
        imageInContainerEl.style.height = `${target}%`;

        let target2 = currentZoom / 50

        //imageInContainerEl.style.scale = `calc((100% / ${target2}) * ${target2 - 1})`; // 150% --> RETURN TO ORIGINAL SCALE (100%) // e.g.: calc((100% / 3) * 2)
        //imageInContainerEl.style.scale = `calc((${currentZoom}% / ${target2}) * ${target2 + 1})`; // 100% --> RETURN TO ORIGINAL SCALE (150%) // e.g.: calc((100% / 3) * 2)

        //imageInContainerEl.style.scale = `150%`; // 100% --> RETURN TO ORIGINAL SCALE (150%) // e.g.: calc((100% / 3) * 2)
        //imageInContainerEl.style.transform = `scale(150%)`
        //imageInContainerEl.style.scale = `${currentZoom}%`; // 100% --> RETURN TO ORIGINAL SCALE (150%) // e.g.: calc((100% / 3) * 2)
        
        //imageInContainerEl.style.transformOrigin = `${((1 / 3) * percentageScrolled.current.x) + (100 / 3)}% ${percentageScrolled.current.y}%`; // OK
        //imageInContainerEl.style.transformOrigin = `${((1 / 3) * percentageScrolled.current.x) + (100 / 3)}% ${percentageScrolled.current.y}%`; // OK

        //imageSCROLL.scrollTo(((imageSCROLL.scrollWidth - imageSCROLL.clientWidth) / 100) * percentageScrolled.current.x, ((imageSCROLL.scrollHeight - imageSCROLL.clientHeight) / 100) * percentageScrolled.current.y)
       
        if (currentZoom === 150) {
          //imageInContainerEl.style.transformOrigin = `${((1 / 3) * percentageScrolled.current.x) + (100 / 3)}% ${percentageScrolled.current.y}%`; // OK
          //imageInContainerEl.style.transform = `translate(${((1 / 3) * percentageScrolled.current.x) + (100 / 3)}%, ${percentageScrolled.current.y}%) scale(100%) translate(${(((1 / 3) * percentageScrolled.current.x) + (100 / 3)) * -1}%, ${percentageScrolled.current.y * -1}%)`
          imageInContainerEl.animate([
            {
              transformOrigin: `${((1 / 3) * percentageScrolled.current.x) + (100 / 3)}% ${percentageScrolled.current.y}%`,
              scale: `150%`,
            },
            {
              scale: `100%`,
            }
          ], {
            duration: 1000,
            iterations: 1
          });
        }
        else {
          imageInContainerEl.animate([
            {
              translate: `${((25/100) * percentageScrolled.current.x) * -1}% ${((25/100) * percentageScrolled.current.y) * -1}%`, // OKKKKKKKKKKKKKKK
              width: '200%',
              height: '200%'
            },
            {
              width: '150%',
              height: '150%',
            },
          ], {
            duration: 1000,
            iterations: 1
          });
        }

        if (currentZoom === 150) {
          imageSCROLL.scrollTo(0, 0)
        }
        else {
          //imageSCROLL.scrollTo(0, 120) // OK LEFT CENTER
          //imageSCROLL.scrollTo(90, 120) // OK CENTER CENTER // 92
          //imageSCROLL.scrollTo(184, 120) // OK RIGHT CENTER // 184 // SEGUIR ACA
          //console.log("RESULT AAAAAAAAAAA", (((imageSCROLL.scrollWidth - imageSCROLL.clientWidth) / (10/3)) / 100) * percentageScrolled.current.x)
          //console.log("RESULT BBBBBBBBBBB", (((imageSCROLL.scrollHeight - imageSCROLL.clientHeight) / (10/3)) / 100) * percentageScrolled.current.y)
          //imageSCROLL.scrollTo((((imageSCROLL.scrollWidth - imageSCROLL.clientWidth) / (10/3)) / 100) * percentageScrolled.current.x, 120) // OKKKKKKKKKKKKK
          imageSCROLL.scrollTo((((imageSCROLL.scrollWidth - imageSCROLL.clientWidth) / (10/3)) / 100) * percentageScrolled.current.x, (((imageSCROLL.scrollHeight - imageSCROLL.clientHeight) / 2) / 100) * percentageScrolled.current.y) // OKKKKKKKKKKKKK
        }

        //imageInContainerEl.style.transformOrigin = `33% 0%`; // FROM LEFT-TOP (X-Y) OK !
        //imageInContainerEl.style.transformOrigin = `33% 50%`; // FROM LEFT-CENTER (X-Y) OK ! ***
        //imageInContainerEl.style.transformOrigin = `33% 100%`; // FROM LEFT-BOTTOM (X-Y) OK !

        //imageInContainerEl.style.transformOrigin = `50% 0%`; // FROM CENTER-TOP (X-Y) OK !
        //imageInContainerEl.style.transformOrigin = `50% 50%`; // FROM CENTER-CENTER (X-Y) OK !
        //imageInContainerEl.style.transformOrigin = `50% 100%`; // FROM CENTER-BOTTOM (X-Y) OK !
        
        //imageInContainerEl.style.transformOrigin = `66% 0%`; // FROM RIGHT-TOP (X-Y) OK !
        //imageInContainerEl.style.transformOrigin = `66% 50%`; // FROM RIGHT-CENTER (X-Y) OK !
        //imageInContainerEl.style.transformOrigin = `66% 100%`; // FROM RIGHT-BOTTOM (X-Y) OK !
        //imageInContainerEl.style.transformOrigin = `${percentageScrolled.current.x}% ${percentageScrolled.current.y}%`;

        //((1 / 3) * %) + (100 / 3) // OK !!!
        console.log("currentZoom", currentZoom)
      }
    }, 0)
  }
  useEffect(() => {
    let imageSCROLL = document.getElementById('imageContainer')
    
    if (imageSCROLL !== null) {
      imageSCROLL.addEventListener("scroll", function(e: Event) {
        //console.log("EVENT FIRED !!")
        if (e.target !== null) {
          let target = e.target as HTMLInputElement // AVOID 'NUMBER DIVIDED BY ZERO'
          console.log("AMOUNT SCROLLED X", target.scrollLeft)
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
  }, []) 

  return (
    <div
      id={`modalBackground`}
      className={css.modalBackground}
    >
      <div className={css.innerModal}>
        <div
          className={css.imageContainer}
          id={`imageContainer`}
          ref={refDiv}
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