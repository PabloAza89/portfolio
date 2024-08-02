import { useEffect } from 'react';
import { Button, SvgIcon } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { HomeSvg } from '../../images/images';
import Technologies from '../Technologies/Technologies';
import css from './ModalCSS.module.css';

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

  console.log("IMAGE INDEX", imageIndex)
  
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
          src={images[imageIndex]}
          alt=""
          className={css.image}
        />
      </div>
    
    </div>
  )
}

export default Modal;