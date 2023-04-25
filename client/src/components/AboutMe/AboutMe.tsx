import React, { useState , useRef, useEffect} from 'react';
import {Box, Button, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import profile from '../../images/profile.png';
import ForwardIcon from '@mui/icons-material/Forward';
import { grey , blue , cyan, lime, brown, red} from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import BackButton from '../BackButton/BackButton';
import { useSelector, useDispatch } from 'react-redux';
import { avatar, typography, background } from '../../styles/aboutMe';
import {
  minPort, minLand,
  medPort, medLand,
  larPort, larLand,
  currentHeight,
  staticRefWidth, staticRefHeight,
  maxStaticReference,
  flex, column,
  row, bgNone,
  bgRed
} from '../../styles/commons';

function AboutMe() {

  const english = useSelector((state: {english:boolean}) => state.english)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '93vh', width: '97vw', background: 'none'}}>
      <BackButton />
      <Box sx={background}>
        <Avatar
          alt="Pablo Azambuyo"
          src={profile}
          sx={avatar}
        />
        
        <Typography sx={{...{
            /* '-webkit-touch-callout': 'none', '-webkit-user-select': 'none', '-khtml-user-select': 'none', '-moz-user-select': 'none', '-ms-user-select': 'none', 'user-select': 'none', */
            'justify-content': 'flex-start',
            display: 'flex',
            flexDirection: 'column',
            background: 'none',
            alignSelf: 'center',    
            width: '65vw',
            height: minPort ? '38vh' : minLand ? '38vh' : larPort ? '28vh' : '28vh',
            'text-align': 'center',         
            fontSize: minPort ? `${maxStaticReference * 3.0}px` : minLand ? `${maxStaticReference * 3.0}px` : medPort ? `${maxStaticReference * 2.3}px` : medLand ? `${maxStaticReference * 2.3}px` :  larPort ? `${maxStaticReference * 1.5}px` : `${maxStaticReference * 1.5}px`,

              'overflow-y': 'scroll',
              'overflow-x': 'hidden',

              /* color: 'rgba(0, 0, 0, 0)', */

              /* 'color': 'rgba(0,0,0,0)', */
              /* '-webkit-background-clip': 'text', */
              /* 'background-clip': 'padding-box', */

              /* '-webkit-text-fill-color': 'transparent', */
              '-webkit-text-fill-color': 'white',
              transition: 'color .8s',
              
          
          ':hover': {
             color: 'rgba(0,0,0,0.18)',
          },
          '::-webkit-scrollbar': {
              width: '8px',
              height: '8px',
          },
          /* '::-webkit-scrollbar-track': {
              display: 'none',
          }, */
          '::-webkit-scrollbar-thumb': {
            /* 'box-shadow': 'inset 0 0 0 30px', */
             'background-clip': 'padding-box',
              'border-radius': '10px',
              'background-color': 'inherit',
              'box-shadow': 'inset 0 0 0 10px',
              
          }
          
          }}}>
          { english ?
            `Hi ! Im Pablo ! I worked almost 10 years on a paint selling shop. I was working as store manager and also as sales consultant in almost 5 years. In february of 2022 I wanted to give a turn on my life introducing in the world of programming, and I studied proudly on Henry ! On this academy I studied Fullstack Developer career, learning Javascript as my first language, including Node JS, React, Redux and Sequelize technologies. Other of my passions is the music, particullary play the piano, I consider myself as a melomaniac person !`
            : `Hola ! Soy Pablo ! Trabajé 10 años en una pinturería. Me desempeñé como encargado de la misma, atendiendo al público, desde hace 5 años. Desde febrero de 2022 quise darle un cambio de rumbo a mi vida incursionando en el mundo de la programación, por lo cual estudié orgullosamente en Henry ! En la misma academia estudié para ser Fullstack Developer, aprendiendo Javascript como lenguaje principal junto con tecnologías como Node JS, React, Redux y Sequelize. Otra de mis pasiones es la música, particularmente tocar el piano, me considero una persona melómana !`}
        </Typography>
      </Box>
    </Box>
  )
}

export default AboutMe;
