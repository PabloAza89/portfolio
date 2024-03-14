import { useEffect, useRef, useState } from 'react';
import { Button, SvgIcon } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { ReactComponent as MySvg } from '../../images/home.svg';
import Technologies from '../Technologies/Technologies';
import css from './HomeCSS.module.css';

function Home() {

  const english = useSelector((state: {english:boolean}) => state.english)

  useEffect(() => {
    let el = document.getElementById("homeBackground")
    let target = document.getElementById("backgroundScrollEffect")
    if (el !== null) {
      el.addEventListener("scroll", () => {
        if (el !== null && target !== null) {
          if (el.scrollTop === 0) {
            target.style.background = "rgba(0, 0, 0, 0)";
            target.style.boxShadow = "none";
          } else {
            target.style.background = "rgb(0 135 255 / 20%) ";
            target.style.boxShadow = "0 0 .5em rgba(255, 255, 255, 0.5)";
          }
        }
      })
    }
  })

  //const [ difference, setDifference ] = useState<number>(0)

  const homeBGHandler: () => void = () => {
    let el = (document.querySelector(`[class*="HomeCSS_background"]`) as HTMLElement)
    if (el !== null) {
      //console.log("A cli", el.clientWidth)
      //console.log("B off", el.offsetWidth)
      //console.log("C scr", el.scrollWidth)
      document.documentElement.style.setProperty("--diff", `${el.offsetWidth - el.clientWidth}`);
      //document.documentElement.style.setProperty("--diff", `${el.offsetWidth - el.scrollWidth}`);
    }
  }

  useEffect(() => {
    homeBGHandler()
    window.addEventListener('resize', homeBGHandler);
    return () => window.removeEventListener('resize', homeBGHandler);
  },[])

  window.addEventListener('load', function() {
    homeBGHandler()
  })

  return (
    <div id={`homeBackground`} /* onLoad={() => homeBGHandler()} */ className={css.background}>
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