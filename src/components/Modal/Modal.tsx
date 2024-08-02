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
import { Button } from '@mui/material';

function Modal({ images, imageIndex }: any) {
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
  //let currentZoom = useRef(1) // DEFAULT ZOOM

  let imageModalEl = document.getElementById('imageModal')

  //console.log(currentZoom.current)

  console.log(currentZoom)

  const zoomIn = () => {
    setCurrentZoom((curr: any) => curr + 0.5)

  }
  useEffect(() => {
    if (imageModalEl !== null) imageModalEl.style.transform = `scale(${currentZoom})`
  }, [imageModalEl, currentZoom])

  const zoomOut = () => {
    if (currentZoom !== 1) setCurrentZoom((curr: any) => curr - 0.5)
  }
  
  return (
    <div
      id={`modalBackground`}
      className={css.background}
      //onClick={() => console.log("BBBBBBB")}
    >
      <div className={css.modalContent}>
        {/* <span class="close">&times;</span> */}
        {/* <p>Some text in the Modal..</p> */}
        <img 
          id={`imageModal`}
          src={images[currentIndex]}
          alt=""
          className={css.image}
        />

      <Button
        variant="contained"
        className={css.button}
        onClick={() => {
          //console.log("GO BACK")
          //imageIndex -= 1

          if (currentIndex === 0) {
            setCurrentIndex(images.length - 1)
          } else {
            setCurrentIndex((curr: any) => curr - 1)
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
          } else {
            setCurrentIndex((curr: any) => curr + 1)
          }
        }}
      >
        <ForwardIcon className={css.iconRight}/>
      </Button>

      <Button
        variant="contained"
        className={css.button}
        onClick={() => {
          zoomOut()
        }}
      >
        <RemoveIcon className={css.iconRight}/>
      </Button>

      <Button
        variant="contained"
        className={css.button}
        onClick={() => {
          zoomIn()
        }}
      >
        <AddIcon className={css.iconRight}/>
      </Button>

      

      </div>

      
    
    </div>
  )
}

export default Modal;