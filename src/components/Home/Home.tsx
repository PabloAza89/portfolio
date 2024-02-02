import { useEffect } from 'react';
import { Button, SvgIcon } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { ReactComponent as MySvg } from '../../images/home.svg';
import Technologies from '../Technologies/Technologies';
import css from './HomeCSS.module.css';
import $ from 'jquery';

function Home() {

  const english = useSelector((state: {english:boolean}) => state.english)

  useEffect(() => {
    $(function() {
      $('#homeBackground').on("scroll", function() {
        let el = document.getElementById("backgroundScrollEffect")
        if (el !== null) {
          //console.log("QQ", ($(`#testTest1`).scrollTop()))
          if ($(this).scrollTop() === 0) {
            el.style.background = "rgba(0, 0, 0, 0)";
            el.style.boxShadow = "none";
          } else {
            /* el.style.background = "rgba(255, 255, 255, 0.05)"; */
            /* el.style.background = "rgba(255, 0, 0, 0.2)"; */
            el.style.background = "rgb(0 135 255 / 20%) ";
            el.style.boxShadow = "0 0 .5em rgba(255, 255, 255, 0.5)";
          }
        }
      });
    });
  })

  return (
    <div id={`homeBackground`} className={css.background}>
      <div className={css.leftContainer}>
        <div className={css.textContainer}>
          <div className={css.textOne}>{ english ? `Hi ! I'm` : `Hola ! Soy `}</div>
          <div className={css.textTwo}>{ english ? `Pablo Azambuyo` : `Pablo Azambuyo`}</div>
          <div className={css.textThree}>{ english ? `and I'm a Fullstack Developer.` : `un Desarrollador Fullstack.`}</div>
        </div>
        <Technologies />
        <Link className={css.buttonContainer} to="/MessageMe">
          <Button
            className={css.buttonMessage}
            variant='outlined'
          >{ english ? `Message` : `Mensaje` }</Button>
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