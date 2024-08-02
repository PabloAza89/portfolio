import { useEffect, useState, useRef } from 'react';
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
//function Modal({ images }: any) {

  // var modal = document.getElementById("modalBackground");

  // window.onclick = function(event) {
  //   // if (event.target !== null) {
  //   //   console.log("event.target", event.target.id)
  //   // }
    
  //   console.log("event.target", event.target)
  //   //console.dir("event.target", event.target)

  //   if (event.target === modal) {
  //     //modal.style.display = "none";
  //     console.log("ACAAA")
  //   }
  // }

  //console.log("IMAGE INDEX", imageIndex)

  const [ currentIndex, setCurrentIndex ] = useState(imageIndex)
  //console.log('✌️currentIndex --->', currentIndex);

  const [ currentZoom, setCurrentZoom ] = useState(1) // DEFAULT ZOOM

  let imageModalEl = document.getElementById('imageModal')

  //console.log(currentZoom)

  const zoomIn = () => {
    setCurrentZoom((curr: any) => curr + 0.5)

  }
  useEffect(() => {
    if (imageModalEl !== null) imageModalEl.style.transform = `scale(${currentZoom})`
  }, [imageModalEl, currentZoom])

  const zoomOut = () => {
    if (currentZoom !== 1) setCurrentZoom((curr: any) => curr - 0.5)
  }

  useEffect(() => { // MOUSE GRAB & DRAG EFFECT ON MOUSE DEVICES
    const el = document.getElementById('modalContent');
    if (el !== null) {
      const mouseEnterOnScore = () => {
        console.log("MOUSE ENTERRRRRRR")
        //if (heightDev <= 550) el.style.cursor = 'grab'; // GRAB WHEN ENTER (MOUSEENTER)
        //el.style.cursor = 'grab'; // GRAB WHEN ENTER (MOUSEENTER)
        if (el !== null) el.style.cursor = 'grab';
        let pos = { top: 0, left: 0, x: 0, y: 0 };

        const mouseDownHandler = function (e: any) {
          el.style.cursor = 'grabbing';
          el.style.userSelect = 'none';
          pos = {
            left: el.scrollLeft,
            top: el.scrollTop,
            x: e.clientX,
            y: e.clientY,
          }
          //if (heightDev <= 550) {
          if (true) {
            el.addEventListener('mousemove', mouseMoveHandler)
            el.addEventListener('mouseup', mouseUpHandler)
          } 
          // else {
          //   el.removeEventListener('mousemove', mouseMoveHandler);
          //   el.removeEventListener('mouseup', mouseUpHandler);
          //   el.style.cursor = 'default';
          // }
        }

        const mouseMoveHandler = function (e: any) { // HOW MUCH MOUSE HAS MOVED
          const dx = e.clientX - pos.x;
          const dy = e.clientY - pos.y;
          el.scrollTop = pos.top - dy;
          el.scrollLeft = pos.left - dx;
        }

        const mouseUpHandler = function () {
          console.log("MOUSE LEAVEE")
          el.style.cursor = 'grab'
          el.style.removeProperty('user-select')
          el.removeEventListener('mousemove', mouseMoveHandler)
          el.removeEventListener('mouseup', mouseUpHandler)
        }

        el.addEventListener('mousedown', mouseDownHandler);
        el.addEventListener('mouseleave', function() {
          console.log("MOUSE LEAVEE")
          el.removeEventListener('mouseup', mouseUpHandler);
          el.removeEventListener('mousedown', mouseDownHandler)
          el.removeEventListener('mousemove', mouseMoveHandler);
          el.style.cursor = 'default'
        })
      }
      el.addEventListener("mouseenter", mouseEnterOnScore)

      return () => el.removeEventListener("mouseenter", mouseEnterOnScore)
    }
  })
  
  return (
    <div
      id={`modalBackground`}
      className={css.background}
      //onClick={() => console.log("BBBBBBB")}
    >
      <div className={css.modalContainer}>
        <div
          className={css.modalContent}
          id={`modalContent`}
        >

          <img 
            id={`imageModal`}
            src={images[currentIndex]}
            alt=""
            className={css.image}
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
            >
              <RemoveIcon className={css.iconRight}/>
            </Button>

            <Button
              variant="contained"
              className={css.button}
              onClick={() => { zoomIn() }}
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
      

      
    
    </div>
  )
}

export default Modal;