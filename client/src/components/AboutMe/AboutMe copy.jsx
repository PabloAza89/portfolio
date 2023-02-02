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
    celLand: window.screen.height <= 415 && !window.matchMedia("(orientation: portrait)").matches ? true : false,
    pcPort: window.screen.width > 415 && window.matchMedia("(orientation: portrait)").matches ? true : false,
    pcLand: window.screen.height > 415 && !window.matchMedia("(orientation: portrait)").matches ? true : false,
    staticSize: window.screen.width / 100
  });

  useEffect(() => {
      const handleResizeWindow = () => setSize({
        width: window.screen.width,
        height: window.screen.height,
        celPort: window.screen.width <= 415 && window.matchMedia("(orientation: portrait)").matches ? true : false,
        celLand: window.screen.height <= 415 && !window.matchMedia("(orientation: portrait)").matches ? true : false,
        pcPort: window.screen.width > 415 && window.matchMedia("(orientation: portrait)").matches ? true : false,
        pcLand: window.screen.height > 415 && !window.matchMedia("(orientation: portrait)").matches ? true : false,
        staticSize: window.screen.width / 100
      });
        window.addEventListener("resize", handleResizeWindow);
        return () => {window.removeEventListener("resize", handleResizeWindow)};
  },[]);

  console.log("ANCHO: ", size.width, " | ALTO: ", size.height, " | PORTRAIT CEL: " , size.celPort, " | LANDSCAPE CEL: ", size.celLand, " | PORTRAIT PC: ", size.pcPort, " | LANDSCAPE PC: ", size.pcLand)
  // size.celPort ? '' : size.celLand ? '' : size.pcPort ? '' : '',

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '93vh', width: '97vw', backgroundColor: 'none'}}>
      <BackButton />
      <Box sx={{
        background: '#3C6478',
        /* background: 'brown', */
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'row',
        'justify-content': 'space-evenly',
        width: size.celPort ? '90vw' : size.celLand ? '70vw' : '70vw',
        height: size.celPort ? '70vh' : size.celLand ? '60vh' : '60vh', top: size.pcPort ? '2vh' : null
      }} >
        <Avatar
          alt="Pablo Azambuyo"
          src={profile}
          sx={{
            position: 'absolute',
            /* width: size.celPort ? '2.1vh' : size.celLand ? '3.3vh' : size.pcPort ? '2.4vh' : `${size.staticSize * 8.5}px`,
            height: size.celPort ? '2.1vh' : size.celLand ? '3.3vh' : size.pcPort ? '2.4vh' : `${size.staticSize * 8.5}px`, */
            width: size.celPort ? '2.1vh' : size.celLand ? '3.3vh' : size.pcPort ? '2.4vh' : '8.5vw',
            height: size.celPort ? '2.1vh' : size.celLand ? '3.3vh' : size.pcPort ? '2.4vh' : '8.5vw',
            minWidth: '8.5vw',
            minHeight: '8.8vw',
            top: '8vh' ,
            left: '16vw'
          }}
        />
        <Typography sx={{...noSelect(),...as(),...{
          /* background: 'red', */
          'backgroundColor': 'rgba(0,0,0,0)',
          /* color: '#FFFFFF', */
          width: '65vw',
          height: '45vh',
          'text-align': 'center',
          'overflow': 'auto',
          /* '-webkit-background-clip': 'text', */
          /* '-webkit-text-fill-color': 'transparent', */
          /* transition: 'background-color .8s', */

          color: 'rgba(0, 0, 0, 0)',
          '-webkit-text-fill-color': 'black',
          'box-shadow': '0 1px 6px rgba(0, 0, 0, 0.2)',
          transition: 'color .3s ease',


          /* fontWeight: '400', */
          /* marginLeft: '7vw', */
          /* paddingRight: size.pcPort ? '5vw' : '6vw', */
          /* paddingTop: size.celPort ? '4vh' : size.celLand ? '10vh' : size.pcPort ? '4vw' : '4vw', */
          fontSize: size.celPort ? '2.1vh' : size.celLand ? '3.3vh' : size.pcPort ? '2.4vh' : `${size.staticSize * 1.42}px`,
          '::-webkit-scrollbar': {

          },
          '::-webkit-scrollbar-thumb': {
            width: '26px',
            'border-radius': '13px',
            'background-clip': 'padding-box',
            border: '10px solid transparent'
          },
          '::-webkit-scrollbar-thumb': {        
            'box-shadow': 'inset 0 0 0 10px'
          },
          ':hover': {
            color: 'rgba(0, 0, 0, 0.3)'
          }
          }}}>
            { english ?
             `Hi ! Im Pablo ! I worked almost 10 years on a paint selling shop. I was working as store manager and also as sales consultant in almost 5 years. In february of 2022 I wanted to give a turn on my life introducing in the world of programming, and I studied proudly on Henry ! On this academy I studied Fullstack Developer career, learning Javascript as my first language, including Node JS, React, Redux and Sequelize technologies. Other of my passions is the music, particullary play the piano, I consider myself as a melomaniac person !`
              : `Hola ! Soy Pablo ! Trabajé 10 años en una pinturería. Me desempeñé como encargado de la misma, atendiendo al público, desde hace 5 años. Desde febrero de 2022 quise darle un cambio de rumbo a mi vida incursionando en el mundo de la programación, por lo cual estudié orgullosamente en Henry ! En la misma academia estudié para ser Fullstack Developer, aprendiendo el principal lenguaje Javascript junto con tecnologías como Node JS, React, Redux y Sequelize. Otra de mis pasiones es la musica, particularmente tocar el piano, me considero una persona melómana !`
            }
        </Typography>
      </Box>
    </Box>
  )
}

export default AboutMe;
