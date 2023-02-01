import React, { useState , useRef, useEffect} from 'react';
import {Box, Button,CardMedia, Typography , Dialog} from '@mui/material';
import { Link } from "react-router-dom";
import fccCertJS from '../../images/fccCertJS.png';
import efSet from '../../images/efSet.png';
import henry from '../../images/henry.png';
import ForwardIcon from '@mui/icons-material/Forward';
import { grey , blue , cyan, lime, brown, red} from '@mui/material/colors';
import { row, column, jc , as, noSelect }from '../../Styles/Styles'
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import BackButton from '../BackButton/BackButton';
import Bubbles from '../Bubbles/Bubbles';

function Certifications() {

  const english = useSelector( state => state.english )

  const [show, setShow] = useState(false)
  const [name, setName] = useState("")

  const [size, setSize] = useState({
    width: window.screen.width,
    height: window.screen.height,
    celPort: window.screen.width <= 415 && window.matchMedia("(orientation: portrait)").matches ? true : false,
    celLand: window.screen.height <= 415 && !window.matchMedia("(orientation: portrait)").matches ? true : false,
    pcPort: window.screen.width > 415 && window.matchMedia("(orientation: portrait)").matches ? true : false,
    pcLand: window.screen.height > 415 && !window.matchMedia("(orientation: portrait)").matches ? true : false,
  });

  useEffect(() => {
      const handleResizeWindow = () => setSize({width: window.screen.width, height: window.screen.height, celPort: window.screen.width <= 415 && window.matchMedia("(orientation: portrait)").matches ? true : false, celLand: window.screen.height <= 415 && !window.matchMedia("(orientation: portrait)").matches ? true : false, pcPort: window.screen.width > 415 && window.matchMedia("(orientation: portrait)").matches ? true : false, pcLand: window.screen.height > 415 && !window.matchMedia("(orientation: portrait)").matches ? true : false });
        window.addEventListener("resize", handleResizeWindow);
        return () => {window.removeEventListener("resize", handleResizeWindow)};
  },[]);

  console.log("ANCHO: ", size.width, " | ALTO: ", size.height, " | PORTRAIT CEL: " , size.celPort, " | LANDSCAPE CEL: ", size.celLand, " | PORTRAIT PC: ", size.pcPort, " | LANDSCAPE PC: ", size.pcLand)
  // size.celPort ? '' : size.celLand ? '' : size.pcPort ? '' : '',
  
  // <Box sx={{...row(),...jc(),...{ justifyItems: 'center', width: '80vw', height: '80vh' , background: 'linear-gradient(110deg, #fdcd3b 60%, #ffed4b 60%)'}}}>

  return (

      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '93vh', width: '97vw', background: 'none', overflow: 'hidden'}}>

        <Bubbles />
        <BackButton />

        <Box sx={{...jc(),...{ display: 'flex', justifyItems: 'center', width: size.celLand ? '97vw' : '80vw', height: '80vh' , background: 'none', flexDirection: size.celPort ? 'column' : size.celLand ? 'row' : size.pcPort ? 'column' : 'row'}}}>
          <Box sx={{...column(),...jc(),...as(),...{
            'text-align': 'center',
            'justify-content': 'space-evenly',
            background: 'none', 
            width: size.celPort ? '87vw' : size.celLand ? '33vw' : size.pcPort ? '59vw' : '29vw', 
            height: size.celPort ? '25vh' : size.celLand ? '59vh' : size.pcPort ? '39vh' : '39vh'
          }}}>
            <Typography sx={{...noSelect(),...as(),...{
              background: 'none',
              height: size.celLand ? '13vh' : 'none',
              color: '#FFFFFF',
              paddingRight: '0vw',
              paddingTop: '0vw',
              fontSize: size.celPort ? '3.85vw' : size.celLand ? '2.1vw' : size.pcPort ? '2.65vw' : '1.25vw',
              'mix-blend-mode': 'difference'
            }}}>{ english ? `JavaScript Algorithms and Data Structures` : `Algoritmos Javascript y Estructura de Datos` }</Typography>
            <CardMedia onClick={(e) => setName(fccCertJS) + setShow(!show)} sx={{
              alignSelf:'center',
              backgroundImage: `url(${fccCertJS})`,
              width: size.celPort ? '35vw' : size.celLand ? '32vw' : size.pcPort ? '35vw' : '15vw',
              height: size.celLand ? '36vh' : '15vh',
              backgroundSize: size.celPort ? '35vw 15vh' : size.celLand ? '32vw 36vh' : size.pcPort ? '35vw 15vh' : '15vw 15vh',
              ':hover': { '-webkit-filter': 'brightness(.9)', 'filter': 'brightness(.9)', cursor: 'pointer' }
            }} />
            <Typography sx={{...noSelect(),...as(),...{ 
              color: '#FFFFFF', 
              paddingRight: '0vw', 
              paddingTop: '0vw',
              fontSize: size.celPort ? '' : size.celLand ? '' : size.pcPort ? '2.35vw' : '1.15vw'
            }}}>
              <a style={{ textDecoration: 'none' , color: '#FFFFFF', 'mix-blend-mode': 'difference'}} 
                href="https://www.freecodecamp.org/certification/fcc4dacfa43-3a86-4f27-9ef6-4b74318b8b7a/javascript-algorithms-and-data-structures"
                target="_blank"
                rel="noopener noreferrer"
              >https://freecodecamp.org</a>
            </Typography>
          </Box>

          <Box sx={{...column(),...jc(),...as(),...{
            'text-align': 'center',
            'justify-content': 'space-evenly',
            background: 'none', 
            width: size.celPort ? '87vw' : size.celLand ? '33vw' : size.pcPort ? '59vw' : '29vw', 
            height: size.celPort ? '25vh' : size.celLand ? '59vh' : size.pcPort ? '39vh' : '39vh'
          }}}>
            <Typography sx={{...noSelect(),...as(),...{
              background: 'none',
              height: size.celLand ? '13vh' : 'none',
              color: '#FFFFFF',
              paddingRight: '0vw',
              paddingTop: '0vw',
              fontSize: size.celPort ? '3.85vw' : size.celLand ? '2.1vw' : size.pcPort ? '2.65vw' : '1.25vw',
              'mix-blend-mode': 'difference'
            }}}>{ english ? `Full Stack Web Developer` : `Desarrollador Web Full Stack`}</Typography>
            <CardMedia onClick={(e) => setName(henry) + setShow(!show)} sx={{ 
              alignSelf:'center',
              backgroundImage: `url(${henry})`,
              width: size.celPort ? '35vw' : size.celLand ? '32vw' : size.pcPort ? '35vw' : '15vw',
              height: size.celLand ? '36vh' : '15vh',
              backgroundSize: size.celPort ? '35vw 15vh' : size.celLand ? '32vw 36vh' : size.pcPort ? '35vw 15vh' : '15vw 15vh',
              ':hover': { '-webkit-filter': 'brightness(.9)', 'filter': 'brightness(.9)', cursor: 'pointer' }
            }} />
            <Typography sx={{...noSelect(),...as(),...{ 
              color: '#FFFFFF', 
              paddingRight: '0vw', 
              paddingTop: '0vw',
              fontSize: size.celPort ? '' : size.celLand ? '' : size.pcPort ? '2.35vw' : '1.15vw'
            }}}>
              <a style={{ textDecoration: 'none' , color: '#FFFFFF', 'mix-blend-mode': 'difference'}} 
                href="https://certificates.soyhenry.com/cert?id=19eebce3-e6a8-4e6f-ac26-7e1b28852f54"
                target="_blank"
                rel="noopener noreferrer"
              >https://soyhenry.com</a>
            </Typography>
          </Box>

          <Box sx={{...column(),...jc(),...as(),...{
            'text-align': 'center',
            'justify-content': 'space-evenly',
            background: 'none', 
            width: size.celPort ? '87vw' : size.celLand ? '33vw' : size.pcPort ? '59vw' : '29vw', 
            height: size.celPort ? '25vh' : size.celLand ? '59vh' : size.pcPort ? '39vh' : '39vh'
          }}}>
            <Typography sx={{...noSelect(),...as(),...{
              background: 'none',
              height: size.celLand ? '13vh' : 'none',
              color: '#FFFFFF',
              paddingRight: '0vw',
              paddingTop: '0vw',
              fontSize: size.celPort ? '3.85vw' : size.celLand ? '2.1vw' : size.pcPort ? '2.65vw' : '1.25vw',
              'mix-blend-mode': 'difference'
            }}}>{ english ? `English B2 (Upper Intermediate)` : `Inglés B2 (Intermedio Superior)`}</Typography>
            <CardMedia onClick={(e) => setName(efSet) + setShow(!show)} sx={{ 
              alignSelf:'center',
              backgroundImage: `url(${efSet})`,
              width: size.celPort ? '35vw' : size.celLand ? '32vw' : size.pcPort ? '35vw' : '15vw',
              height: size.celLand ? '36vh' : '15vh',
              backgroundSize: size.celPort ? '35vw 15vh' : size.celLand ? '32vw 36vh' : size.pcPort ? '35vw 15vh' : '15vw 15vh',
              ':hover': { '-webkit-filter': 'brightness(.9)', 'filter': 'brightness(.9)', cursor: 'pointer' }
            }} />
            <Typography sx={{...noSelect(),...as(),...{ 
              color: '#FFFFFF', 
              paddingRight: '0vw', 
              paddingTop: '0vw',
              fontSize: size.celPort ? '' : size.celLand ? '' : size.pcPort ? '2.35vw' : '1.15vw'
            }}}>
              <a style={{ textDecoration: 'none' , color: '#FFFFFF', 'mix-blend-mode': 'difference'}} 
                href="https://www.efset.org/cert/T92ez2"
                target="_blank"
                rel="noopener noreferrer"
              >https://efset.org</a>
            </Typography>
          </Box>          
        </Box>

        <Dialog
          sx={{height: '83vh', width: '60vw', backgroundColor: 'none', display: 'flex', position: 'absolute', justifySelf: 'center', top: '8vh', left: '14vw'}}
          open={show}
          onClick={() => setShow(false)}
          fullWidth={true}
          fullScreen={true}
        >
          <CardMedia sx={{ display: 'flex', position: 'relative', flexDirection: 'column', justifyItems: 'center', backgroundImage: `url(${name})`, width: '72.1vw', height: '84vh' ,backgroundSize: '70vw 80vh', backgroundRepeat: 'no-repeat'}}></CardMedia>
        </Dialog>
      </Box>
  )
}

export default Certifications;