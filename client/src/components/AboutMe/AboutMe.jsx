import React from 'react';
import {Box, Button, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import profile from '../../images/profile.png';
import ForwardIcon from '@mui/icons-material/Forward';
import { grey , blue , cyan, lime, brown, red} from '@mui/material/colors';
import { row, column, jc , as, noSelect}from '../../styles/styles.js'
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';

function AboutMe() {

  const english = useSelector( state => state.english )

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '93vh', width: '97vw', backgroundColor: 'none'}}>
      <Link style={{ textDecoration: 'none' }} to="/portfolio"><Button variant="contained"  sx={{position: 'absolute', top: '5vh', left: '5vh', maxWidth: '2vw', maxHeight: '2vw', minWidth: '2vw', minHeight: '2vw', justifyItems: 'center', alignContent: 'center', display: 'flex', flexDirection: 'column'}}><ForwardIcon sx={{transform: 'rotate(180deg)'}} /></Button></Link>
      <Box sx={{...row(),...as(),...{ backgroundColor: 'gray', width: '70vw', height: '60vh'}}}>
        <Avatar
          alt="Pablo Azambuyo"
          src={profile}
          sx={{ width: '20vh', height: '20vh', top: '-8vh' , left: '2vw'}}
        />
        <Typography sx={{...noSelect(),...as(),...{color: '#FFFFFF', paddingRight: '10vw', paddingTop: '3vw',fontSize: '1.8rem'}}}>{ english ? `Hi ! Im Pablo ! I worked almost 10 years on a paint selling shop. I was working as store manager and also as sales consultant in almost 5 years. In february of 2022 I wanted to give a turn on my life introducing in the world of programming, and I studied proudly on Henry ! On this academy I studied Fullstack Developer career, learning Javascript as my first language, including Node JS, React, Redux and Sequelize technologies. Other of my passions is the music, particullary play the piano, I consider myself as a melomaniac person !` : `Hola ! Soy Pablo ! Trabajé 10 años en una pinturería. Me desempeñé como encargado de la misma, atendiendo al público, desde hace 5 años. Desde febrero de 2022 quise darle un cambio de rumbo a mi vida incursionando en el mundo de la programación, por lo cual estudié orgullosamente en Henry ! En la misma academia estudié para ser Fullstack Developer, aprendiendo el principal lenguaje Javascript junto con tecnologías como Node JS, React, Redux y Sequelize. Otra de mis pasiones es la musica, particularmente tocar el piano, me considero una persona melómana !`}</Typography>
      </Box>
    </Box>
  )
}

export default AboutMe;
