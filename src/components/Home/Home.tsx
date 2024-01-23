import { useState } from 'react';
import { Box, Button, SvgIcon, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { ReactComponent as MySvg } from '../../images/home.svg';
import Technologies from '../Technologies/Technologies';
//import * as s from '../../styles/HomeSX';
import css from './HomeCSS.module.css';
import $ from 'jquery';
import javascript from '../../images/javascript.png';
import material from '../../images/material.png';
import node from '../../images/node.png';
import react from '../../images/react.png';
import redux from '../../images/redux.png';
import sequelize from '../../images/sequelize.png';

function Home() {

  const darkMode = useSelector((state: {darkMode:boolean}) => state.darkMode)
  const english = useSelector((state: {english:boolean}) => state.english)

  $(function() {
    $('#testTest1').on("scroll", function() {
      let qq = document.getElementById("testTest2")
      if (qq !== null) {
        console.log("QQ", ($(`#testTest1`).scrollTop()))
        if ($(this).scrollTop() === 0) {
          /* qq.style.background = "blue"; */
          qq.style.background = "rgba(0, 0, 0, 0)";
          qq.style.boxShadow = "none";
        } else {
          qq.style.background = "rgba(255, 255, 255, 0.05)";
          //qq.style.boxShadow = "0 0 .5em rgba(255, 255, 255, 0.5)";
          qq.style.boxShadow = "0 0 .5em rgba(255, 255, 255, 0.5)";
          //qq.style.boxShadow = "0px 0px .5em rgba(255, 255, 255, 0.1)";
        }
      }
    });
  });

  return (
    <div id={`testTest1`} className={css.background}>
      <div className={css.leftContainer}>
        <div className={css.textContainer}>
          <div className={css.textOne}>{ english ? `Hi ! I'm` : `Hola ! Soy `}</div>
          <div className={css.textTwo}>{ english ? `Pablo Azambuyo` : `Pablo Azambuyo`}</div>
          <div className={css.textThree}>{ english ? `and I'm a Fullstack Developer.` : `y soy un Desarrollador Fullstack.`}</div>
        </div>
        <Technologies />
        <Link className={css.buttonContainer} to="/MessageMe">
          <Button
            className={css.buttonMessage}
            variant='outlined'
          >{ english ? `Message Me` : `Envíame un mensaje` }</Button>
        </Link>
      </div>
      <div className={css.rightContainer}>
        <SvgIcon
          className={css.imageSVG}
          preserveAspectRatio="none"
        >
          <MySvg/>
        </SvgIcon>
      </div>
  </div>
  )
}

export default Home;