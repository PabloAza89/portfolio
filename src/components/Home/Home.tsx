import { Box, Button, SvgIcon, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { ReactComponent as MySvg } from '../../images/home.svg';
import Technologies from '../Technologies/Technologies';
//import * as s from '../../styles/HomeSX';
import css from '../../styles/HomeCSS.module.css';
import $ from 'jquery';

function Home() {

  const darkMode = useSelector((state: {darkMode:boolean}) => state.darkMode)
  const english = useSelector((state: {english:boolean}) => state.english)

  $(function() {
    $('#testTest1').on("scroll", function() {
      let qq = document.getElementById("testTest2")
      if (qq !== null) {
        console.log("QQ", ($(`#testTest1`).scrollTop()))
        if ($(this).scrollTop() === 0) {
          qq.style.background = "blue";
        } else {
          qq.style.background = "red";
        }
      }
    });
  });

  return (
    <div id={`testTest1`} className={css.background}>
      <div className={css.leftContainer}>
        <div className={css.auxLarPort}>
          <div className={css.textOne}>{ english ? `Hi ! I'm` : `Hola ! Soy `}</div>
          <div className={css.textTwo}>{ english ? `Pablo Azambuyo` : `Pablo Azambuyo`}</div>
          <div className={css.textThree}>{ english ? `and I'm a Fullstack Developer.` : `y soy un Desarrollador Fullstack.`}</div>
        </div>
        <Technologies />
        <Link style={{ textDecoration: 'none' }} to="/MessageMe">
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