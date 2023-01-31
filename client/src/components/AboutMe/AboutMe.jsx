import React, {useState, useEffect} from 'react';
import {Box, Button, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import profile from '../../images/profile.png';
import ForwardIcon from '@mui/icons-material/Forward';
import { grey , blue , cyan, lime, brown, red} from '@mui/material/colors';
import { row, column, jc , as, noSelect, prtr, wi, he, or}from '../../Styles/Styles'
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import BackButton from '../BackButton/BackButton';

function AboutMe() {

  const english = useSelector( state => state.english )

  const [size, setSize] = useState({
    width: window.screen.width,
    height: window.screen.height,
    celPort: window.screen.width <= 415 && window.matchMedia("(orientation: portrait)").matches ? true : false,
    celLand: window.screen.height <= 415 && !window.matchMedia("(orientation: portrait)").matches ? true : false
  });

  useEffect(() => {
      const handleResizeWindow = () => setSize({width: window.screen.width, height: window.screen.height, celPort: window.screen.width <= 415 && window.matchMedia("(orientation: portrait)").matches ? true : false, celLand: window.screen.height <= 415 && !window.matchMedia("(orientation: portrait)").matches ? true : false });
        window.addEventListener("resize", handleResizeWindow);
        return () => {window.removeEventListener("resize", handleResizeWindow)};
  },[]);

  console.log("ANCHO: ", size.width, " | ALTO: ", size.height, " | PORTRAIT CEL: " , size.celPort, " | LANDSCAPE CEL: ", size.celLand)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '93vh', width: '97vw', backgroundColor: 'none'}}>
      <BackButton />
      <Box sx={{...row(),...as(),...{ backgroundColor: '#3C6478', width: size.celPort ? '90vw' : size.celLand ? '70vw' : '70vw', height: size.celPort ? '70vh' : size.celLand ? '60vh' : '60vh', top: wi() < he() ? '2vh' : null}}}>
        <Avatar
          alt="Pablo Azambuyo"
          src={profile}
          sx={{ position: 'absolute', width: size.width < size.height ? '15vh' : '20vh', height: size.width < size.height ? '15vh' : '20vh', top: '-8vh' , left: '2vw'}}
        />
        <Typography sx={{...noSelect(),...as(),...{color: '#FFFFFF', marginLeft: '7vw', paddingRight: '5vw', paddingTop: size.celPort ? '4vh' : size.celLand ? '10vh' : '4vw', fontSize: size.celPort ? '2.1vh' : size.celLand ? '3.3vh' : he() < wi() ? '2.4vh' : '1.9vh'}}}>{ english ? `Hi ! Im Pablo ! I worked almost 10 years on a paint selling shop. I was working as store manager and also as sales consultant in almost 5 years. In february of 2022 I wanted to give a turn on my life introducing in the world of programming, and I studied proudly on Henry ! On this academy I studied Fullstack Developer career, learning Javascript as my first language, including Node JS, React, Redux and Sequelize technologies. Other of my passions is the music, particullary play the piano, I consider myself as a melomaniac person !` : `Hola ! Soy Pablo ! Trabajé 10 años en una pinturería. Me desempeñé como encargado de la misma, atendiendo al público, desde hace 5 años. Desde febrero de 2022 quise darle un cambio de rumbo a mi vida incursionando en el mundo de la programación, por lo cual estudié orgullosamente en Henry ! En la misma academia estudié para ser Fullstack Developer, aprendiendo el principal lenguaje Javascript junto con tecnologías como Node JS, React, Redux y Sequelize. Otra de mis pasiones es la musica, particularmente tocar el piano, me considero una persona melómana !`}</Typography>
      </Box>
    </Box>
  )
}

export default AboutMe;
