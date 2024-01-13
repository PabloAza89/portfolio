import { Box, Button, SvgIcon, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { ReactComponent as MySvg } from '../../images/home.svg';
import Technologies from '../Technologies/Technologies';
//import * as s from '../../styles/HomeSX';
import css from '../../styles/HomeCSS.module.css';

function Home() {

  const darkMode = useSelector((state: {darkMode:boolean}) => state.darkMode)
  const english = useSelector((state: {english:boolean}) => state.english)

  return (
    <div className={css.background}>
      <div className={css.boxTextTechMessage}>
        <div className={css.boxTypography}>
          <div className={css.auxLarPort}>
            <div className={css.textOne}>{ english ? `Hi ! I'm` : `Hola ! Soy `}</div>
            <div className={css.textTwo}>{ english ? `Pablo Azambuyo` : `Pablo Azambuyo`}</div>
            <div className={css.textThree}>{ english ? `and I'm a Fullstack Developer.` : `y soy un Desarrollador Fullstack.`}</div>
          </div>
        </div>
        <Technologies />
        <div className={css.boxButton}>
          <Link style={{ textDecoration: 'none' }} to="/MessageMe">
            <Button
              className={css.buttonMessage}
              variant='outlined'
            >{ english ? `Message Me` : `Envíame un mensaje` }</Button>
          </Link>
        </div>
      </div>
      <div className={css.boxSVG}>
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