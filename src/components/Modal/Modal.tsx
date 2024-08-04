import React, { useEffect, useState, useLayoutEffect, useRef } from 'react';
/* import ForwardIcon from '@mui/icons-material/Forward'; */
import css from './ModalCSS.module.css';
import ForwardIcon from '@mui/icons-material/Forward';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { Diversity1Rounded } from '@mui/icons-material';

function Modal({ images, imageIndex, setShowModal }: any) {

  const [ currentIndex, setCurrentIndex ] = useState(imageIndex)


  const [ currentZoom, setCurrentZoom ] = useState(1) // DEFAULT ZOOM
  //let currentZoom = useRef(1) // DEFAULT ZOOM

  //const refDiv = useRef(null);


  //console.log(currentZoom)
  //console.log(currentZoom.current)

  // useEffect(() => {
  //   let imageSCROLLa = document.getElementById('imageContainer')
  //   if (imageSCROLLa !== null) {
  //     //console.log("PERCENTAGE SCROLLED", percentageScrolled.current)
  //     console.dir(imageSCROLLa)
  //   }
  // }, [])
  
  //let el = document.getElementById('imageInContainer')

  // useEffect(() => {
  //   let err = document.getElementById('imageInContainer')
  //   if (err !== null) {
  //     console.log("rrr", err.scrollWidth)
  //   }
  // })
  const zoomIn = () => {
    
    //let el = document.getElementById('imageInContainer')
    setCurrentZoom((curr: any) => curr + 0.5)

    
      //el.style.transform = `scale(${currentZoom + 0.5})`;
      //console.log("MAX SCROLL", el.scrollWidth - el.clientWidth)
      //console.log("MAX SCROLL", el.scrollWidth)
      //el.scrollTo(((el.scrollWidth - el.clientWidth) / 100) * percentageScrolled.current, 0)
      
      // .then(() => {
      //   if (el !== null) {
      //     el.style.transform = `scale(${currentZoom})`;
      //   }
      // })
      // .then(() => {
        
      // })
    
    

    //   let calc = Math.floor(((imageSCROLL.scrollWidth - imageSCROLL.clientWidth) / 100) * percentageScrolled.current)

    //   console.log("NEXT SCROLL", calc)

    //   imageSCROLL.scrollTo(calc, 0)

    
  }

  const zoomOut = () => { if (currentZoom !== 1) {
    setCurrentZoom((curr: any) => curr - 0.5)
    
    //let imageInContainerEl = document.getElementById('imageInContainer')!.style.transform = `scale(${currentZoom})`;
    //  imageInContainerEl.style.transform = `scale(${currentZoom})`;




  } }
  //const zoomOut = () => { if (currentZoom.current !== 1) currentZoom.current = currentZoom.current - 0.5 }

  //let imageInContainerEl = document.getElementById('imageInContainer')
  //let imageSCROLL = document.getElementById('imageContainer')

  // let totalScroll = useRef(0)
  // let amountScroll = useRef(0)
  // let percentageScrolled = useRef(0)
  const [ totalScroll, setTotalScroll ]  = useState(0)
  const [ amountScroll, setAmountScroll ]  = useState(0)
  //const [ percentageScrolled, setPercentageScrolled ]  = useState(0)
  let percentageScrolled = useRef(0)

   //console.log("AMOUNT SCROLL", amountScroll)
   //console.log("TOTAL SCROLL", totalScroll)
   
  
  //let scrollToX = useRef(0)
  //let scrollToX = useRef(0)


  // useEffect(() => {
  //   console.log("PERCENTAGE", percentageScrolled.current)
  // }, [percentageScrolled])

  useEffect(() => {
    let imageSCROLL = document.getElementById('imageContainer')
    if (imageSCROLL !== null) {
      imageSCROLL.addEventListener("scroll", function(e: Event) {
        if (e.target !== null) {
          let target = e.target as HTMLInputElement
          // setTotalScroll(target.scrollWidth - target.clientWidth)
          // setAmountScroll(target.scrollLeft)
          //setPercentageScrolled((amountScroll * 100) / totalScroll)
          // console.dir(imageSCROLL)
          console.log("SCROLLED AMOUT:", target.scrollLeft)
          // console.log("SCROLLED PERCENTAGE:", (target.scrollLeft * 100) / (target.scrollWidth - target.clientWidth))
          //setPercentageScrolled((target.scrollLeft * 100) / (target.scrollWidth - target.clientWidth))
          percentageScrolled.current = (target.scrollLeft * 100) / (target.scrollWidth - target.clientWidth)
          //console.log("PERCENTAGE", percentageScrolled.current)
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

    // if (imageSCROLL !== null) {
    //   //totalScroll.current = imageSCROLL.scrollWidth - imageSCROLL.clientWidth
    //   //amountScroll.current = imageSCROLL.scrollLeft
    //   setTotalScroll(imageSCROLL.scrollWidth - imageSCROLL.clientWidth)
    //   setAmountScroll(imageSCROLL.scrollLeft)
    //   //percentageScrolled.current = (amountScroll.current * 100) / totalScroll.current

    //   // console.log("AAA AMOUNT SCROLL", amountScroll.current)
    //   // console.log("AAA TOTAL SCROLL", totalScroll.current)
    //   // console.log("AAA A VER", (totalScroll.current / 100) * percentageScrolled.current)
    //   //console.log("AAA 2 A VER", percentageScrolled.current)
      
    //   //imageSCROLL.scrollTo((totalScroll.current / 100) * percentageScrolled.current, 0)
    //   //imageSCROLL.scrollTo((totalScroll / 100) * percentageScrolled, 0)
  

    // }

    //console.log("ZOOM CHANGED !!")

    

    // if (imageInContainerEl !== null) {
    //   //imageInContainerEl.style.transform = `scale(${currentZoom.current})`;
      
    //   imageInContainerEl.style.transform = `scale(${currentZoom})`;
    //   //imageInContainerEl.style.transform = `scale(${asd.value})`;

    //   //console.log("PERCENTAGE SCROLLED", percentageScrolled)
    //   //console.log("imageSCROLL.scrollWidth", imageSCROLL.scrollWidth)
    //   //console.log("imageSCROLL.clientWidth", imageSCROLL.clientWidth)
      

    // }

    // let imageSCROLL = document.getElementById('imageContainer')

    // let qq = document.getElementById('imageContainer')!.scrollWidth
    // console.log("QQ", qq)

    

    // if (imageSCROLL !== null) {
    //   //console.log("TESTTTTTTT", imageSCROLL.scrollWidth)
    //   console.log("TOTAL TO SCROLL", imageSCROLL.scrollWidth - imageSCROLL.clientWidth)

    //   //let calc = Math.floor(((imageSCROLL.scrollWidth - imageSCROLL.clientWidth) / 100) * percentageScrolled)
    //   //let calc = Math.floor(((imageSCROLL.scrollWidth - imageSCROLL.clientWidth) / 100) * percentageScrolled.current)

    //   //console.log("NEXT SCROLL", calc)

    //   //imageSCROLL.scrollTo(calc, 0)

    // }

    // async function aa() {
        
    //   // await new Promise<void>((resolve) => {
    //   //     //console.log(i);
    //   //     setCurrentZoom((curr: any) => curr + 0.5)
    //   //     resolve();
    //   // });

    //   await new Promise<void>((resolve) => {
    //     //console.log(i);
    //     if (imageInContainerEl !== null) {
    //       setTimeout(() => { // SETTIMEOUT HELP TO EXECUTE FUNCTIONS IN ORDER !
    //         imageInContainerEl.style.transform = `scale(${currentZoom})`;
    //       }, 0)
          
    //     }
    //     resolve();
    //   });

    //   // await new Promise<void>((resolve) => {
    //   //   //console.log(i);
    //   //   setTimeout(() => {}, 0)
    //   //   resolve()
    //   // });

    //   await new Promise<void>((resolve) => {
    //     //console.log(i);
    //     if (refDiv.current !== null) {
    //       console.log("refDiv.current", (refDiv.current as HTMLElement).scrollWidth)
    //     }
        
    //     // let imageSCROLL2 = document.getElementById('imageContainer')
    //     //   if (imageSCROLL2 !== null) {
    //     //        // el.style.transform = `scale(${currentZoom + 0.5})`;
    //     //        //console.log("TOTAL", Math.floor(((el.scrollWidth - el.clientWidth) / 100) * percentageScrolled.current))
    //     //        console.log("TOTAL", imageSCROLL2.scrollWidth)
    //     //   }
    //     resolve();
    //   });

      // await new Promise<void>((resolve) => {
      //   //console.log(i);
      //   let ell = document.getElementById('imageInContainer')
      //   if (ell !== null) {
      //        // el.style.transform = `scale(${currentZoom + 0.5})`;
      //        //console.log("TOTAL", Math.floor(((el.scrollWidth - el.clientWidth) / 100) * percentageScrolled.current))
      //        console.log("TOTAL", ell.scrollWidth)
      //   }
      //   resolve();
      // });
      
    // }
    // aa()

    
      setTimeout(() => { // SETTIMEOUT HELP TO EXECUTE FUNCTIONS IN ORDER !
        if (imageInContainerEl !== null) {
         imageInContainerEl.style.transform = `scale(${currentZoom})`;
        }
      }, 0)
      
        // if (refDiv.current !== null) {
        //   console.log("refDiv.current", (refDiv.current as HTMLElement).scrollWidth)
        // }

        if (imageSCROLL !== null) {
          console.log("TOTAL TO SCROLL", imageSCROLL.scrollWidth - imageSCROLL.clientWidth)
        }
    
    
    
      // if (imageInContainerEl !== null && imageSCROLL !== null) {
      //   imageInContainerEl.style.transform = `scale(${currentZoom})`;
        
      //   //imageInContainerEl.style.transform = `translate(50%, 50%);`
      //   imageSCROLL.scrollTo(((imageSCROLL.scrollWidth - imageSCROLL.clientWidth) / 100) * percentageScrolled.current, 0)
      // }

      // async function fetchMyAPI() {
      //   if (imageInContainerEl !== null && imageSCROLL !== null) {
      //     imageInContainerEl.style.transform = `scale(${currentZoom})`;
          
      //     //imageInContainerEl.style.transform = `translate(50%, 50%);`
      //     return imageSCROLL
      //   }
      // }
      // fetchMyAPI().then((imageSCROLL) => {
      //   if (imageSCROLL !== undefined) {
      //     imageSCROLL.scrollTo(((imageSCROLL.scrollWidth - imageSCROLL.clientWidth) / 100) * percentageScrolled.current, 0)
      //   }
        
      // })

      //console.log("NEW ZOOM")

      //setPercentageScrolled((amountScroll * 100) / totalScroll)
      //setPercentageScrolled((target.scrollLeft * 100) / (target.scrollWidth - target.clientWidth))

      // if (imageSCROLL !== null) {
      //           //imageSCROLL.scrollTo((totalScroll.current / 100) * percentageScrolled.current, 0)
      //   //imageSCROLL.scrollTo((totalScroll / 100) * percentageScrolled, 0)
      //  imageSCROLL.scrollTo(((imageSCROLL.scrollWidth - imageSCROLL.clientWidth) / 100) * percentageScrolled, 0)
      // }

      // if (imageSCROLL !== null) {
      //   //totalScroll.current = imageSCROLL.scrollWidth - imageSCROLL.clientWidth
      //   //amountScroll.current = imageSCROLL.scrollLeft
      //   //setTotalScroll(imageSCROLL.scrollWidth - imageSCROLL.clientWidth)
      //   //setAmountScroll(imageSCROLL.scrollLeft)
      //   //setPercentageScrolled((amountScroll * 100) / totalScroll)
      //   imageSCROLL.scrollTo((amountScroll * 100) / totalScroll, 0)
      //   //percentageScrolled.current = (amountScroll.current * 100) / totalScroll.current
  
      //   // console.log("AAA AMOUNT SCROLL", amountScroll.current)
      //   // console.log("AAA TOTAL SCROLL", totalScroll.current)
      //   // console.log("AAA A VER", (totalScroll.current / 100) * percentageScrolled.current)
      //   //console.log("AAA 2 A VER", percentageScrolled.current)
        
      //   //imageSCROLL.scrollTo((totalScroll.current / 100) * percentageScrolled.current, 0)
      //   //imageSCROLL.scrollTo((totalScroll / 100) * percentageScrolled, 0)
    
  
      // }

      
      
    
    

   

    // if (imageSCROLL !== null) {
    //   setTotalScroll(imageSCROLL.scrollWidth - imageSCROLL.clientWidth)
    // }

    // if (imageSCROLL !== null) {
    //     //totalScroll.current = imageSCROLL.scrollWidth - imageSCROLL.clientWidth
    //     //amountScroll.current = imageSCROLL.scrollLeft
    //     setTotalScroll(imageSCROLL.scrollWidth - imageSCROLL.clientWidth)
    //     setAmountScroll(imageSCROLL.scrollLeft)
    //     //percentageScrolled.current = (amountScroll.current * 100) / totalScroll.current

    //     // console.log("AAA AMOUNT SCROLL", amountScroll.current)
    //     // console.log("AAA TOTAL SCROLL", totalScroll.current)
    //     // console.log("AAA A VER", (totalScroll.current / 100) * percentageScrolled.current)
    //     //console.log("AAA 2 A VER", percentageScrolled.current)
        
    //     //imageSCROLL.scrollTo((totalScroll.current / 100) * percentageScrolled.current, 0)
    //     imageSCROLL.scrollTo((totalScroll / 100) * percentageScrolled, 0)
    

    // }

    
    


  //}, [currentZoom, imageInContainerEl, imageSCROLL, percentageScrolled, totalScroll])
  //}, [currentZoom, imageInContainerEl, imageSCROLL, percentageScrolled])
  //}, [currentZoom, percentageScrolled])
  }, [currentZoom])
  //})

  // useEffect(() => { // MOUSE GRAB & DRAG EFFECT ON MOUSE DEVICES
  //   const el = document.getElementById('imageContainer');
  //   if (el !== null) {
  //     const mouseEnterOnScore = () => {
  //       console.log("MOUSE ENTERRRRRRR")
  //       //if (heightDev <= 550) el.style.cursor = 'grab'; // GRAB WHEN ENTER (MOUSEENTER)
  //       //el.style.cursor = 'grab'; // GRAB WHEN ENTER (MOUSEENTER)
  //       if (el !== null) el.style.cursor = 'grab';
  //       let pos = { top: 0, left: 0, x: 0, y: 0 };

  //       const mouseDownHandler = function (e: any) {
  //         el.style.cursor = 'grabbing';
  //         el.style.userSelect = 'none';
  //         pos = {
  //           left: el.scrollLeft,
  //           top: el.scrollTop,
  //           x: e.clientX,
  //           y: e.clientY,
  //         }
  //         //if (heightDev <= 550) {
  //         if (true) {
  //           el.addEventListener('mousemove', mouseMoveHandler)
  //           el.addEventListener('mouseup', mouseUpHandler)
  //         } 
  //         // else {
  //         //   el.removeEventListener('mousemove', mouseMoveHandler);
  //         //   el.removeEventListener('mouseup', mouseUpHandler);
  //         //   el.style.cursor = 'default';
  //         // }
  //       }

  //       const mouseMoveHandler = function (e: any) { // HOW MUCH MOUSE HAS MOVED
  //         const dx = e.clientX - pos.x;
  //         const dy = e.clientY - pos.y;
  //         el.scrollTop = pos.top - dy;
  //         el.scrollLeft = pos.left - dx;
  //       }

  //       const mouseUpHandler = function () {
  //         console.log("MOUSE LEAVEE")
  //         el.style.cursor = 'grab'
  //         el.style.removeProperty('user-select')
  //         el.removeEventListener('mousemove', mouseMoveHandler)
  //         el.removeEventListener('mouseup', mouseUpHandler)
  //       }

  //       el.addEventListener('mousedown', mouseDownHandler);
  //       el.addEventListener('mouseleave', function() {
  //         console.log("MOUSE LEAVEE")
  //         el.removeEventListener('mouseup', mouseUpHandler);
  //         el.removeEventListener('mousedown', mouseDownHandler)
  //         el.removeEventListener('mousemove', mouseMoveHandler);
  //         el.style.cursor = 'default'
  //       })
  //     }
  //     el.addEventListener("mouseenter", mouseEnterOnScore)

  //     return () => el.removeEventListener("mouseenter", mouseEnterOnScore)
  //   }
  // })
  
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