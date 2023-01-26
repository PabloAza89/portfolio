import React from 'react';
import {Box, Button,CardMedia, Typography} from '@mui/material';
import home from '../../images/home.svg';
import react from '../../images/react.png';
import javascript from '../../images/javascript.png';
import node from '../../images/node.png';
import redux from '../../images/redux.png';
import sequelize from '../../images/sequelize.png';
import material from '../../images/material.png';
import { BrowserRouter, Navigate, Route, Routes , Link} from "react-router-dom";
import { useSelector } from 'react-redux';
import { row, column, jc , as, noSelect }from '../../styles/styles.js'

function Home() {

  const english = useSelector( state => state.english )

  return (
    <Box sx={{  display: 'flex', flexDirection: 'row'}}>
      <Box sx={{   display: 'flex', flexDirection: 'column', backgroundColor:'none' , height: '80vh', width: '60vw',justifyContent: 'center', marginLeft: '3vw'}}>
        <Typography sx={{...noSelect(),...{color:'#FFFFFF', fontSize: '5rem' }}}>{english ? `Hi ! I'm Pablo Azambuyo` : `Hola ! Soy Pablo Azambuyo`}</Typography>
        <Typography sx={{...noSelect(),...{color:'#FFFFFF', fontSize: '2.5rem', marginLeft: '6vw'}}}>{english ? `and I'm a Fullstack Developer.` : `y soy un Desarrollador Fullstack.`}</Typography>
        <Box sx={{   display: 'flex', flexDirection: 'column', backgroundColor: 'none', height: '8vh', width: '40vw' , marginTop: '2.2vh', marginBottom: '1.5vh'}}>
          <Box sx={{  display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Box sx={{ display: 'flex', flexDirection: 'column', position: 'relative', border: 'none', width: '6vw'}}>
              <CardMedia sx={{ alignSelf:'center',border: 'none', position: 'relative', backgroundRepeat: 'no-repeat', backgroundImage: `url(${react})`, width: '4rem', height: '4rem' }}></CardMedia>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', position: 'relative', border: 'none', width: '6vw'}}>
              <CardMedia sx={{ alignSelf:'center',border: 'none', position: 'relative', backgroundRepeat: 'no-repeat', backgroundImage: `url(${redux})`, width: '4rem', height: '4rem' }}></CardMedia>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', position: 'relative', border: 'none', width: '6vw'}}>
              <CardMedia sx={{ alignSelf:'center',border: 'none', position: 'relative', backgroundRepeat: 'no-repeat', backgroundImage: `url(${javascript})`, width: '4rem', height: '4rem' }}></CardMedia>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', position: 'relative', border: 'none', width: '6vw'}}>
              <CardMedia sx={{ alignSelf:'center',border: 'none', position: 'relative', backgroundRepeat: 'no-repeat', backgroundImage: `url(${node})`, width: '4rem', height: '4rem' }}></CardMedia>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', position: 'relative', border: 'none', width: '6vw'}}>
              <CardMedia sx={{ alignSelf:'center',border: 'none', position: 'relative', backgroundRepeat: 'no-repeat', backgroundImage: `url(${sequelize})`, width: '4rem', height: '4rem' }}></CardMedia>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', position: 'relative', border: 'none', width: '6vw' , alignSelf: 'center'}}>
              <CardMedia sx={{ alignSelf:'center', border: 'none', position: 'relative', backgroundRepeat: 'no-repeat', backgroundImage: `url(${material})`, width: '5rem', height: '3.9rem' }}></CardMedia>
            </Box>

          </Box>
          <Box sx={{  display: 'flex', flexDirection: 'row',justifyContent: 'space-between'}}>
            <Box sx={{ display: 'flex', flexDirection: 'column', position: 'relative', border: 'none', width: '6vw'}}>
              <Typography align="center" sx={{...noSelect(),...{border: 'none', color: '#FFFFFF', fontWeight: 600, 'mix-blend-mode': 'difference'}}}>React</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', position: 'relative', border: 'none', width: '6vw'}}>
              <Typography align="center" sx={{...noSelect(),...{border: 'none', color: '#FFFFFF', fontWeight: 600, 'mix-blend-mode': 'difference'}}}>Redux</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', position: 'relative', border: 'none', width: '6vw'}}>
              <Typography align="center" sx={{...noSelect(),...{border: 'none', color: '#FFFFFF', fontWeight: 600, 'mix-blend-mode': 'difference'}}}>Javascript</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', position: 'relative', border: 'none', width: '6vw'}}>
              <Typography align="center" sx={{...noSelect(),...{border: 'none', color: '#FFFFFF', fontWeight: 600, 'mix-blend-mode': 'difference'}}} >Node.js</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', position: 'relative', border: 'none', width: '6vw'}}>
              <Typography align="center" sx={{...noSelect(),...{border: 'none', color: '#FFFFFF', fontWeight: 600, 'mix-blend-mode': 'difference'}}}>Sequelize</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', position: 'relative', border: 'none', width: '6vw'}}>
              <Typography align="center" sx={{...noSelect(),...{border: 'none', color: '#FFFFFF', fontWeight: 600, 'mix-blend-mode': 'difference'}}}>Material UI</Typography>
            </Box>
          </Box>


        </Box>
        <Link style={{ textDecoration: 'none' }} to="/portfolio/AboutMe"><Button sx={{color:'#FFFFFF', width: '15rem', marginLeft: '10vw', marginTop: '1.5vw'}} variant='outlined'>{ english ? `Know about me` : `Conoceme` }</Button></Link>

      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' ,justifyContent: 'center', marginLeft: '-9vw'}} >
        <CardMedia
          sx={{
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            mixBlendMode: 'normal',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${home})`,
            width: '50rem',
            height: '40rem',
            backgroundSize: '90%',
          }}>
        </CardMedia>
      </Box>

  </Box>
  )
}

export default Home;