import React, { useState , useRef, useEffect} from 'react';
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
      minPort: window.screen.width < 425 && window.matchMedia("(orientation: portrait)").matches ? true : false,
      minLand: window.screen.height < 425 && !window.matchMedia("(orientation: portrait)").matches ? true : false,
      medPort: window.screen.width >= 425 && window.screen.width <= 825 && window.matchMedia("(orientation: portrait)").matches ? true : false,
      medLand: window.screen.height >= 425 && window.screen.height <= 825 && !window.matchMedia("(orientation: portrait)").matches ? true : false,
      larPort: window.screen.width > 825 && window.matchMedia("(orientation: portrait)").matches ? true : false,
      larLand: window.screen.height > 825 && !window.matchMedia("(orientation: portrait)").matches ? true : false,
      staticRefWidth: window.screen.width / 100,
      staticRefHeight: window.screen.height / 100,
      maxStaticReference: ( window.screen.width >= window.screen.height ) ? window.screen.width / 100 : window.screen.height / 100,
      currentWidth: window.innerWidth,
      currentHeight: window.innerHeight,
      percentageResizedHeight: window.innerHeight / window.screen.height,
      percentageResizedWidth: window.innerWidth / window.screen.width
    });
  
    useEffect(() => {
        const handleResizeWindow = () => setSize({
          width: window.screen.width,
          height: window.screen.height,
          minPort: window.screen.width < 425 && window.matchMedia("(orientation: portrait)").matches ? true : false,
          minLand: window.screen.height < 425 && !window.matchMedia("(orientation: portrait)").matches ? true : false,
          medPort: window.screen.width >= 425 && window.screen.width <= 825 && window.matchMedia("(orientation: portrait)").matches ? true : false,
          medLand: window.screen.height >= 425 && window.screen.height <= 825 && !window.matchMedia("(orientation: portrait)").matches ? true : false,
          larPort: window.screen.width > 825 && window.matchMedia("(orientation: portrait)").matches ? true : false,
          larLand: window.screen.height > 825 && !window.matchMedia("(orientation: portrait)").matches ? true : false,
          staticRefWidth: window.screen.width / 100,
          staticRefHeight: window.screen.height / 100,
          maxStaticReference: ( window.screen.width >= window.screen.height ) ? window.screen.width / 100 : window.screen.height / 100,
          currentWidth: window.innerWidth,
          currentHeight: window.innerHeight,
          percentageResizedHeight: window.innerHeight / window.screen.height,
          percentageResizedWidth: window.innerWidth / window.screen.width
        });
          window.addEventListener("resize", handleResizeWindow);
          return () => {window.removeEventListener("resize", handleResizeWindow)};
    },[]);

   // console.log("ANCHO: ", size.width, " | ALTO: ", size.height, " | PORTRAIT CEL: " , size.minPort, " | LANDSCAPE CEL: ", size.minLand, " | PORTRAIT PC: ", size.larPort, " | LANDSCAPE PC: ", size.larLand)
  // size.minPort ? '' : size.minLand ? '' : size.medPort ? '' : size.medLand ? '' : size.larPort ? '' : '',
  // console.log("MAX REFERENCE", size.staticRefWidth, "MAX STATIC", size.maxStaticReference)

  

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '93vh', width: '97vw', background: 'none'}}>
      <BackButton />
      <Box sx={{
        background: '#3C6478',
        'border-radius': `${size.staticRefWidth * 1}px`,
        /* background: 'brown', */
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'row',
        'justify-content': 'space-evenly',
        width: size.minPort ? '90vw' : size.minLand ? '70vw' : size.larPort ? '70vw' : '70vw',
        height: size.minPort ? '70vh' : size.minLand ? '60vh' : size.larPort ? '60vh' : '60vh',
        top: size.larPort ? '2vh' : 'null'
      }} >
        <Avatar
          alt="Pablo Azambuyo"
          src={profile}
          sx={{
            position: 'absolute',
            /* width: size.minPort ? '2.1vh' : size.minLand ? '3.3vh' : size.larPort ? '2.4vh' : `${size.staticRefWidth * 8.5}px`,
            height: size.minPort ? '2.1vh' : size.minLand ? '3.3vh' : size.larPort ? '2.4vh' : `${size.staticRefWidth * 8.5}px`, */
            width: size.minPort ? '2.1vh' : size.minLand ? '3.3vh' : size.larPort ? '16.5vh' : '16.5vh',
            height: size.minPort ? '2.1vh' : size.minLand ? '3.3vh' : size.larPort ? '16.5vh' : '16.5vh',
            maxWidth: `${size.staticRefHeight * 13.7}px`,
            maxHeight: `${size.staticRefHeight * 13.7}px`,

            transform: size.larLand && size.currentHeight < 330 ? 'scale(0.0001) translate(100vw, -100vw)' : 'null',
            /* transform : size.larLand && size.currentHeight < 330 ? 'translateX(10px) rotate(10deg) translateY(5px)' : 'null', */
            transition: 'all .5s',
            

            top: '8vh' ,
            left: size.larPort ? '18vw' : '16vw',

            /* transition: 'opacity .01s ease-in-out',
            opacity: size.larLand && size.currentHeight < 330 ? '0' : '1',
            'active': {
              'opacity': '0',
              'display': 'flex'
             }, */
          }}
        />
        <Typography sx={{...{
            '-webkit-touch-callout': 'none', '-webkit-user-select': 'none', '-khtml-user-select': 'none', '-moz-user-select': 'none', '-ms-user-select': 'none', 'user-select': 'none',
            'justify-content': 'flex-start',
            display: 'flex',
            flexDirection: 'column',
            background: 'red',
            alignSelf: 'center',
            /* marginTop: '3vh', */
            /* padding: '200px', */
            width: '65vw',
            height: size.minPort ? '38vh' : size.minLand ? '38vh' : size.larPort ? '28vh' : '28vh',
            'text-align': 'center',
            /* margin: '100px auto', */
            fontSize: size.minPort ? `${size.maxStaticReference * 3.0}px` : size.minLand ? `${size.maxStaticReference * 3.0}px` : size.medPort ? `${size.maxStaticReference * 2.3}px` : size.medLand ? `${size.maxStaticReference * 2.3}px` :  size.larPort ? `${size.maxStaticReference * 1.5}px` : `${size.maxStaticReference * 1.5}px`,
            /* 'border-radius': '30px', */
            overflow: 'auto',
            color: 'rgba(0, 0, 0, 0)',
            '-webkit-text-fill-color': 'white',
            transition: 'color .8s',
            '::-webkit-scrollbar': {
              width: '8px' },
            '*::-webkit-scrollbar-thumb': {
              'background-clip': 'padding-box',
              'border': '10px solid transparent' },
            '::-webkit-scrollbar-thumb': {
              'box-shadow': 'inset 0 0 0 10px',
              'border-radius': '10px' },
            ':hover': { color: 'rgba(0, 0, 0, 0.18)' }
          }}}>
            { english ?
             `Hi ! Im Pablo ! I worked almost 10 years on a paint selling shop. I was working as store manager and also as sales consultant in almost 5 years. In february of 2022 I wanted to give a turn on my life introducing in the world of programming, and I studied proudly on Henry ! On this academy I studied Fullstack Developer career, learning Javascript as my first language, including Node JS, React, Redux and Sequelize technologies. Other of my passions is the music, particullary play the piano, I consider myself as a melomaniac person !`
              : `Hola ! Soy Pablo ! Trabajé 10 años en una pinturería. Me desempeñé como encargado de la misma, atendiendo al público, desde hace 5 años. Desde febrero de 2022 quise darle un cambio de rumbo a mi vida incursionando en el mundo de la programación, por lo cual estudié orgullosamente en Henry ! En la misma academia estudié para ser Fullstack Developer, aprendiendo Javascript como lenguaje principal junto con tecnologías como Node JS, React, Redux y Sequelize. Otra de mis pasiones es la música, particularmente tocar el piano, me considero una persona melómana !`
            }
        </Typography>
      </Box>
    </Box>
  )
}

export default AboutMe;
