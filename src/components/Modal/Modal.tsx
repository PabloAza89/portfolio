import React, { useEffect, useState, useLayoutEffect, useRef } from 'react';
import css from './ModalCSS.module.css';
import ForwardIcon from '@mui/icons-material/Forward';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';

function Modal({ images, imageIndex, setShowModal }: any) {

  const [ currentIndex, setCurrentIndex ] = useState(imageIndex)


  //const [ currentZoom, setCurrentZoom ] = useState(1) // DEFAULT ZOOM
  const [ currentZoom, setCurrentZoom ] = useState(100) // DEFAULT ZOOM
  //let currentZoom = useRef(1) // DEFAULT ZOOM



  const zoomIn = () => {
    //setCurrentZoom((curr: any) => curr + 0.5)
    setCurrentZoom((curr: any) => curr + 50)
    //updateZoomIn()


    let imageInContainerEl = document.getElementById('imageInContainer')

    if (imageInContainerEl !== null) {
      imageInContainerEl.addEventListener("transitionend", (el) => {
        console.log("Transition ended");
        //imageInContainerEl.style.transition = `none`;
        if (imageInContainerEl !== null) {
          imageInContainerEl.style.transition = `none`;
        }
        
      });
    }
    


    let imageSCROLL = document.getElementById('imageContainer')
    console.log(percentageScrolled.x, percentageScrolled.y)
    //console.log(Number.isNaN(percentageYScrolled))
      setTimeout(() => { // SETTIMEOUT HELP TO EXECUTE FUNCTIONS IN ORDER !
        if (imageInContainerEl !== null && imageSCROLL !== null) {
         //imageInContainerEl.style.transform = `scale(${currentZoom + 0.5})`;
         //imageInContainerEl.style.scale = `${currentZoom + 0.5}`;
         //console.log("currentZoom + 50", currentZoom + 50)
         let target = currentZoom + 50
         imageInContainerEl.style.width = `${target}%`;
         imageInContainerEl.style.height = `${target}%`;

         let target2 = target / 50
         imageInContainerEl.style.scale = `calc((100% / 3) * 2)`; // 150% --> RETURN TO ORIGINAL 100%
         //imageInContainerEl.style.scale = `calc((100% / ${target2}) * ${target2 - 1})`; // 150% --> RETURN TO ORIGINAL 100%

         /* imageSCROLL.scrollWidth = 7000 */
         /* imageInContainerEl.style.transform = `translateX(-12%) translateY(-12%)`; */
          imageSCROLL.scrollTo(((imageSCROLL.scrollWidth - imageSCROLL.clientWidth) / 100) * percentageScrolled.x, ((imageSCROLL.scrollHeight - imageSCROLL.clientHeight) / 100) * percentageScrolled.y)

          /* scale: calc(100%); */
          /* scale: calc(100%); */

          imageInContainerEl.style.scale = `100%`;
          //imageInContainerEl.style.transition = `scale 2s`;
          /* imageInContainerEl.style.transition = `unset` */

          //imageInContainerEl.style.transition = `none`;

         //imageSCROLL.scrollTo(((imageSCROLL.scrollWidth - imageSCROLL.clientWidth) / 100) * percentageScrolled.x + 444, ((imageSCROLL.scrollHeight - imageSCROLL.clientHeight) / 100) * percentageScrolled.y + 444)
         //imageInContainerEl.style.transition = `transform 1s`;
         //imageSCROLL.scrollTo(((imageSCROLL.scrollWidth - imageSCROLL.clientWidth) / 100) * percentageScrolled.x, ((imageSCROLL.scrollHeight - imageSCROLL.clientHeight) / 100) * percentageScrolled.y)
         //imageSCROLL.scrollIntoView({ block: 'center', inline: 'center' });
        }
      }, 0)

      // setTimeout(() => { // SETTIMEOUT HELP TO EXECUTE FUNCTIONS IN ORDER !
      //   if (imageInContainerEl !== null && imageSCROLL !== null) {
      //     //imageInContainerEl.style.transition = `unset`;
      //     imageInContainerEl.style.transition = `scale 0s`;

      //   }
      // }, 600)

  }
  const zoomOut = () => {
    setCurrentZoom((curr: any) => curr - 0.5)
    updateZoomOut()
  }
    
   

  //const [ percentageScrolled, setPercentageScrolled ]  = useState(0)
  // const [ percentageXScrolled, setPercentageXScrolled ]  = useState(50)
  // const [ percentageYScrolled, setPercentageYScrolled ]  = useState(50)
  const [ percentageScrolled, setPercentageScrolled ]  = useState({ x: 50, y: 50 })
  //const [ percentageYScrolled, setPercentageYScrolled ]  = useState(50)
  // let percentageXScrolled = useRef(0)
  // let percentageYScrolled = useRef(0)

   //console.log("AMOUNT SCROLL", amountScroll)
   //console.log("TOTAL SCROLL", totalScroll)


  useEffect(() => {
    let imageSCROLL = document.getElementById('imageContainer')
    if (imageSCROLL !== null) {
      imageSCROLL.addEventListener("scroll", function(e: Event) {
        if (e.target !== null) {
          let target = e.target as HTMLInputElement
          console.log("SCROLLED AMOUT:", target.scrollLeft)
          // percentageXScrolled.current = (target.scrollLeft * 100) / (target.scrollWidth - target.clientWidth)
          // percentageYScrolled.current = (target.scrollTop * 100) / (target.scrollHeight - target.clientHeight)
          // setPercentageXScrolled((target.scrollLeft * 100) / (target.scrollWidth - target.clientWidth))
          // setPercentageYScrolled((target.scrollTop * 100) / (target.scrollHeight - target.clientHeight))

          // console.log("A VER 1", target.scrollLeft)
          // console.log("A VER 2", target.scrollWidth) // NOT 0
          // console.log("A VER 3", target.clientWidth) // NOT 0
          // console.log("A VER", (target.scrollLeft * 100) / (target.scrollWidth - target.clientWidth))
          if (target.scrollWidth !== target.clientWidth) { // AVOID 'NUMBER DIVIDED BY ZERO'
            // setPercentageXScrolled(Math.ceil((target.scrollLeft * 100) / (target.scrollWidth - target.clientWidth)))
            // setPercentageYScrolled(Math.ceil((target.scrollTop * 100) / (target.scrollHeight - target.clientHeight)))
            // setPercentageXScrolled((target.scrollLeft * 100) / (target.scrollWidth - target.clientWidth))
            // setPercentageYScrolled((target.scrollTop * 100) / (target.scrollHeight - target.clientHeight))
            setPercentageScrolled({
              x: (target.scrollLeft * 100) / (target.scrollWidth - target.clientWidth),
              y: (target.scrollTop * 100) / (target.scrollHeight - target.clientHeight)
              // x: Math.ceil((target.scrollLeft * 100) / (target.scrollWidth - target.clientWidth)),
              // y: Math.ceil((target.scrollTop * 100) / (target.scrollHeight - target.clientHeight))
            })
          } else {
            // setPercentageXScrolled(50)
            // setPercentageYScrolled(50)
            setPercentageScrolled({ x: 50, y: 50 })
            
          }
          
        }
      })
    }
  }, [])

  //console.log("CURRENT ZOOM", currentZoom)

  // console.log("AMOUNT SCROLL", amountScroll)
  // console.log("TOTAL SCROLL", totalScroll)



  let updateZoomIn = () => {
    let imageInContainerEl = document.getElementById('imageInContainer')
    let imageSCROLL = document.getElementById('imageContainer')
    console.log(percentageScrolled.x, percentageScrolled.y)
    //console.log(Number.isNaN(percentageYScrolled))
      setTimeout(() => { // SETTIMEOUT HELP TO EXECUTE FUNCTIONS IN ORDER !
        if (imageInContainerEl !== null && imageSCROLL !== null) {
         //imageInContainerEl.style.transform = `scale(${currentZoom + 0.5})`;
         //imageInContainerEl.style.scale = `${currentZoom + 0.5}`;
         
         imageInContainerEl.style.width = `${currentZoom + 50}%`;
         imageInContainerEl.style.height = `${currentZoom + 50}%`;
         
         imageSCROLL.scrollTo(((imageSCROLL.scrollWidth - imageSCROLL.clientWidth) / 100) * percentageScrolled.x, ((imageSCROLL.scrollHeight - imageSCROLL.clientHeight) / 100) * percentageScrolled.y)
         //imageSCROLL.scrollTo(((imageSCROLL.scrollWidth - imageSCROLL.clientWidth) / 100) * percentageScrolled.x + 444, ((imageSCROLL.scrollHeight - imageSCROLL.clientHeight) / 100) * percentageScrolled.y + 444)
         //imageInContainerEl.style.transition = `transform 1s`;
         //imageSCROLL.scrollTo(((imageSCROLL.scrollWidth - imageSCROLL.clientWidth) / 100) * percentageScrolled.x, ((imageSCROLL.scrollHeight - imageSCROLL.clientHeight) / 100) * percentageScrolled.y)
         //imageSCROLL.scrollIntoView({ block: 'center', inline: 'center' });
        }
      }, 0)

      // setTimeout(() => { // SETTIMEOUT HELP TO EXECUTE FUNCTIONS IN ORDER !
      //   if (imageSCROLL !== null) {
      //     //imageInContainerEl.style.transition = `transform 1s`;
      //     /* imageInContainerEl.style.transition = `transform 1s`; */
      //     //imageInContainerEl.style.transition = `transform 1s`;
      //     //imageInContainerEl.style.transition = `all 1s`;
      //     //imageSCROLL.scrollTo(((imageSCROLL.scrollWidth - imageSCROLL.clientWidth) / 100) * percentageScrolled.x, ((imageSCROLL.scrollHeight - imageSCROLL.clientHeight) / 100) * percentageScrolled.y)
      //    }
      // }, 200)

      // setTimeout(() => { // SETTIMEOUT HELP TO EXECUTE FUNCTIONS IN ORDER !!!
      //   if (imageSCROLL !== null) {
      //     //console.log("TOTAL TO SCROLL", imageSCROLL.scrollWidth - imageSCROLL.clientWidth)
      //     //imageSCROLL.scrollTo(Math.floor(((imageSCROLL.scrollWidth - imageSCROLL.clientWidth) / 100) * percentageXScrolled.current), Math.floor(((imageSCROLL.scrollHeight - imageSCROLL.clientHeight) / 100) * percentageYScrolled.current))
      //     //imageSCROLL.scrollTo(Math.floor(((imageSCROLL.scrollWidth - imageSCROLL.clientWidth) / 100) * percentageXScrolled), Math.floor(((imageSCROLL.scrollHeight - imageSCROLL.clientHeight) / 100) * percentageYScrolled))
      //     imageSCROLL.scrollTo(((imageSCROLL.scrollWidth - imageSCROLL.clientWidth) / 100) * percentageScrolled.x, ((imageSCROLL.scrollHeight - imageSCROLL.clientHeight) / 100) * percentageScrolled.y)
      //   }
      // }, 0)
  }

  let updateZoomOut = () => {
    let imageInContainerEl = document.getElementById('imageInContainer')
    let imageSCROLL = document.getElementById('imageContainer')
    console.log(percentageScrolled.x, percentageScrolled.y)
    //console.log(Number.isNaN(percentageYScrolled))
      setTimeout(() => { // SETTIMEOUT HELP TO EXECUTE FUNCTIONS IN ORDER !
        if (imageInContainerEl !== null && imageSCROLL !== null) {
         //imageInContainerEl.style.transform = `scale(${currentZoom - 0.5})`;
         imageInContainerEl.style.scale = `${currentZoom - 0.5}`;
         imageSCROLL.scrollTo(((imageSCROLL.scrollWidth - imageSCROLL.clientWidth) / 100) * percentageScrolled.x, ((imageSCROLL.scrollHeight - imageSCROLL.clientHeight) / 100) * percentageScrolled.y)
         
        }
      }, 0)

      // setTimeout(() => { // SETTIMEOUT HELP TO EXECUTE FUNCTIONS IN ORDER !!!
      //   if (imageSCROLL !== null) {
      //     //console.log("TOTAL TO SCROLL", imageSCROLL.scrollWidth - imageSCROLL.clientWidth)
      //     //imageSCROLL.scrollTo(Math.floor(((imageSCROLL.scrollWidth - imageSCROLL.clientWidth) / 100) * percentageXScrolled.current), Math.floor(((imageSCROLL.scrollHeight - imageSCROLL.clientHeight) / 100) * percentageYScrolled.current))
      //     //imageSCROLL.scrollTo(Math.floor(((imageSCROLL.scrollWidth - imageSCROLL.clientWidth) / 100) * percentageXScrolled), Math.floor(((imageSCROLL.scrollHeight - imageSCROLL.clientHeight) / 100) * percentageYScrolled))
      //     imageSCROLL.scrollTo(((imageSCROLL.scrollWidth - imageSCROLL.clientWidth) / 100) * percentageScrolled.x, ((imageSCROLL.scrollHeight - imageSCROLL.clientHeight) / 100) * percentageScrolled.y)
      //   }
      // }, 0)
  }



  // useEffect(() => {
  //   let imageInContainerEl = document.getElementById('imageInContainer')
  //   let imageSCROLL = document.getElementById('imageContainer')
  //   console.log(percentageScrolled.x, percentageScrolled.y)
  //   //console.log(Number.isNaN(percentageYScrolled))
  //     setTimeout(() => { // SETTIMEOUT HELP TO EXECUTE FUNCTIONS IN ORDER !
  //       if (imageInContainerEl !== null) {
  //        imageInContainerEl.style.transform = `scale(${currentZoom})`;
  //       }
  //     }, 0)

  //     setTimeout(() => { // SETTIMEOUT HELP TO EXECUTE FUNCTIONS IN ORDER !!!
  //       if (imageSCROLL !== null) {
  //         //console.log("TOTAL TO SCROLL", imageSCROLL.scrollWidth - imageSCROLL.clientWidth)
  //         //imageSCROLL.scrollTo(Math.floor(((imageSCROLL.scrollWidth - imageSCROLL.clientWidth) / 100) * percentageXScrolled.current), Math.floor(((imageSCROLL.scrollHeight - imageSCROLL.clientHeight) / 100) * percentageYScrolled.current))
  //         //imageSCROLL.scrollTo(Math.floor(((imageSCROLL.scrollWidth - imageSCROLL.clientWidth) / 100) * percentageXScrolled), Math.floor(((imageSCROLL.scrollHeight - imageSCROLL.clientHeight) / 100) * percentageYScrolled))
  //         imageSCROLL.scrollTo(((imageSCROLL.scrollWidth - imageSCROLL.clientWidth) / 100) * percentageScrolled.x, ((imageSCROLL.scrollHeight - imageSCROLL.clientHeight) / 100) * percentageScrolled.y)
  //       }
  //     }, 0)

  // }, [currentZoom, percentageScrolled])


  
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