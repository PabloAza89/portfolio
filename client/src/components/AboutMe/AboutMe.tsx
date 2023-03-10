import React, { useState , useRef, useEffect} from 'react';
import {Box, Button, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import profile from '../../images/profile.png';
import ForwardIcon from '@mui/icons-material/Forward';
import { grey , blue , cyan, lime, brown, red} from '@mui/material/colors';
import { row, column, jc , as, noSelect, prtr, wi, he, or}from '../../Styles/Styles'
import Avatar from '@mui/material/Avatar';
import BackButton from '../BackButton/BackButton';
import { useSelector, useDispatch } from 'react-redux';

function AboutMe() {

  const english = useSelector((state: {english:boolean}) => state.english)
  const width = useSelector((state: {width: number}) => state.width)
  const height = useSelector((state: {height: number}) => state.height)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)
  const staticRefWidth = useSelector((state: {staticRefWidth:number}) => state.staticRefWidth)
  const staticRefHeight = useSelector((state: {staticRefHeight:number}) => state.staticRefHeight)
  const maxStaticReference = useSelector((state: {maxStaticReference: number}) => state.maxStaticReference)
  const currentWidth = useSelector((state: {currentWidth:number}) => state.currentWidth)
  const currentHeight = useSelector((state: {currentHeight:number}) => state.currentHeight)
  const percentageResizedHeight = useSelector((state: {percentageResizedHeight:number}) => state.percentageResizedHeight)
  const percentageResizedWidth = useSelector((state: {percentageResizedWidth:number}) => state.percentageResizedWidth)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '93vh', width: '97vw', background: 'none'}}>
      <BackButton />
      <Box sx={{
        background: '#3C6478',
        'border-radius': `${staticRefWidth * 1}px`,
        /* background: 'brown', */
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'row',
        'justify-content': 'space-evenly',
        width: minPort ? '90vw' : minLand ? '70vw' : larPort ? '70vw' : '70vw',
        height: minPort ? '70vh' : minLand ? '60vh' : larPort ? '60vh' : '60vh',
        top: larPort ? '2vh' : 'null'
      }} >
        <Avatar
          alt="Pablo Azambuyo"
          src={profile}
          sx={{
            position: 'absolute',
            /* width: minPort ? '2.1vh' : minLand ? '3.3vh' : larPort ? '2.4vh' : `${staticRefWidth * 8.5}px`,
            height: minPort ? '2.1vh' : minLand ? '3.3vh' : larPort ? '2.4vh' : `${staticRefWidth * 8.5}px`, */
            width: minPort ? '2.1vh' : minLand ? '3.3vh' : larPort ? '16.5vh' : '16.5vh',
            height: minPort ? '2.1vh' : minLand ? '3.3vh' : larPort ? '16.5vh' : '16.5vh',
            maxWidth: `${staticRefHeight * 13.7}px`,
            maxHeight: `${staticRefHeight * 13.7}px`,

            transform: larLand && currentHeight < 330 ? 'scale(0.0001) translate(100vw, -100vw)' : 'null',
            /* transform : larLand && currentHeight < 330 ? 'translateX(10px) rotate(10deg) translateY(5px)' : 'null', */
            transition: 'all .5s',


            top: '8vh' ,
            left: larPort ? '18vw' : '16vw',

            /* transition: 'opacity .01s ease-in-out',
            opacity: larLand && currentHeight < 330 ? '0' : '1',
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
            background: 'none',
            alignSelf: 'center',
            /* marginTop: '3vh', */
            /* padding: '200px', */
            width: '65vw',
            height: minPort ? '38vh' : minLand ? '38vh' : larPort ? '28vh' : '28vh',
            'text-align': 'center',
            /* margin: '100px auto', */
            fontSize: minPort ? `${maxStaticReference * 3.0}px` : minLand ? `${maxStaticReference * 3.0}px` : medPort ? `${maxStaticReference * 2.3}px` : medLand ? `${maxStaticReference * 2.3}px` :  larPort ? `${maxStaticReference * 1.5}px` : `${maxStaticReference * 1.5}px`,
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
              : `Hola ! Soy Pablo ! Trabaj?? 10 a??os en una pinturer??a. Me desempe???? como encargado de la misma, atendiendo al p??blico, desde hace 5 a??os. Desde febrero de 2022 quise darle un cambio de rumbo a mi vida incursionando en el mundo de la programaci??n, por lo cual estudi?? orgullosamente en Henry ! En la misma academia estudi?? para ser Fullstack Developer, aprendiendo Javascript como lenguaje principal junto con tecnolog??as como Node JS, React, Redux y Sequelize. Otra de mis pasiones es la m??sica, particularmente tocar el piano, me considero una persona mel??mana !`
            }
        </Typography>
      </Box>
    </Box>
  )
}

export default AboutMe;
