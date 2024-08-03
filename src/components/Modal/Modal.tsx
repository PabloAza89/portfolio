import React, { useEffect, useState, useRef } from 'react';
import {/*  Button, */ SvgIcon } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { HomeSvg } from '../../images/images';
import Technologies from '../Technologies/Technologies';
/* import ForwardIcon from '@mui/icons-material/Forward'; */
import css from './ModalCSS.module.css';
import ForwardIcon from '@mui/icons-material/Forward';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';

function Modal({ images, imageIndex, setShowModal }: any) {

  const [ currentIndex, setCurrentIndex ] = useState(imageIndex)


  const [ currentZoom, setCurrentZoom ] = useState(1) // DEFAULT ZOOM

  //console.log(currentZoom)

  const zoomIn = () => {
    
    
    setCurrentZoom((curr: any) => curr + 0.5)

    
  }
  const zoomOut = () => { if (currentZoom !== 1) setCurrentZoom((curr: any) => curr - 0.5) }

  let imageInContainerEl = document.getElementById('imageInContainer')
  let imageSCROLL = document.getElementById('imageContainer')

  // let totalScroll = useRef(0)
  // let amountScroll = useRef(0)
  // let percentageScrolled = useRef(0)
  const [ totalScroll, setTotalScroll ]  = useState(0)
  const [ amountScroll, setAmountScroll ]  = useState(0)
  const [ percentageScrolled, setPercentageScrolled ]  = useState(0)

  // console.log("AMOUNT SCROLL", amountScroll)
  // console.log("TOTAL SCROLL", totalScroll)
  
  //let scrollToX = useRef(0)
  //let scrollToX = useRef(0)

  useEffect(() => {
    if (imageSCROLL !== null) {


      imageSCROLL.addEventListener("scrollend", function(e: Event) {
          //console.dir(event.target)
        //console.log("TOTAL", e.target.scrollWidth - e.target.clientWidth)
        //console.log("AMOUNT", e.target.scrollLeft)
        //console.log("PERCENTAGE", (e.target.scrollLeft * 100) / (e.target.scrollWidth - e.target.clientWidth))

        // totalScroll.current = e.target.scrollWidth - e.target.clientWidth
        // amountScroll.current = e.target.scrollLeft
        // percentageScrolled.current = (amountScroll.current * 100) / totalScroll.current

        

        if (e.target !== null) {
          let target = e.target as HTMLInputElement
          setTotalScroll(target.scrollWidth - target.clientWidth)
          setAmountScroll(target.scrollLeft)
          console.log("EVENT FIRED !")
        }
        
        ///setPercentageScrolled((amountScroll * 100) / totalScroll)

        

        //scrollToX.current = (totalScroll.current / 100) * percentageScrolled.current
        //console.log("A VER", (totalScroll.current / 100) * percentageScrolled.current)
        //console.log("PERCENTAGE", percentageScrolled.current)

        // console.log("AMOUNT SCROLL", amountScroll.current)
        // console.log("TOTAL SCROLL", totalScroll.current)

        // imageSCROLL.scrollTo(scrollToX, 0)
        //imageSCROLL.scrollTo(0, 0)

      })

      //return () => imageSCROLL.remove()
      
    }
    
    
  //}, [amountScroll, imageSCROLL, totalScroll])
  }, [imageSCROLL])

  //console.log("CURRENT ZOOM", currentZoom)

  // console.log("AMOUNT SCROLL", amountScroll)
  // console.log("TOTAL SCROLL", totalScroll)



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
    
      if (imageInContainerEl !== null) {
        imageInContainerEl.style.transform = `scale(${currentZoom})`;
        //imageInContainerEl.style.transform = `translate(50%, 50%);`
      }

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
  }, [amountScroll, currentZoom, imageInContainerEl, imageSCROLL, totalScroll])

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

      </div>
    
    </div>
  )
}

export default Modal;