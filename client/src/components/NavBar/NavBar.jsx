import React, {useState, useEffect} from 'react';
import { Box, Button,  Typography, View, TextareaAutosize} from '@mui/material';
import { BrowserRouter, Navigate, Route, Routes , Link} from "react-router-dom";
import SendIcon from '@mui/icons-material/Send';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { grey , blue } from '@mui/material/colors';
import { useSelector } from 'react-redux';
import { row, column, jc , as, noSelect, prtr, wi, he, or} from '../../Styles/Styles'

function NavBar() {

  const english = useSelector( state => state.english )

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

  return (
    <Box sx={{ background: 'none', justifyContent: 'space-evenly', display: 'flex', flexDirection: size.celPort ? 'column' : size.celLand ? 'row' : 'row', marginTop: '1vh', height: size.celPort ? '30vw' : size.celLand ? '7vw' :'15vh'}}>
      <Box sx={{ 
        display: 'flex',
        flexDirection: 'row',
        background: 'none',
        width: size.celPort ? '60vw' : size.celLand ? '35vw' : '33vw',
        color: 'white',
        alignItems: 'center',
        'align-self': 'center',
        height: size.celPort ? '7vh' : size.celLand ? '13vh' : '13vh',
        marginLeft: '2vw'
      }}>
        <Typography sx={{...noSelect(),...{ 
          fontSize: size.celPort ? '6vw' : size.celLand ? '2.8vw' : '2.8vw',
          marginRight: size.celPort ? '1.5vw' : size.celLand ? '1.4vw' : size.pcPort ? '1.1vw' : '1.1vw'
        }}}>{`<`}</Typography>
        <Typography sx={{...noSelect(),...{
          marginTop: '0.5vh',
          fontFamily: 'Allura',
          fontSize: size.celPort ? '7.5vw' : size.celLand ? '3.8vw' : size.pcPort ? '4.1vw' : '3.8vw',
          color: blue[600],
          fontWeight: 600
        }}}>{`Pablo Azambuyo`}</Typography>
        <Typography sx={{...noSelect(),...{
          marginTop: '0.5vh',
          fontSize: size.celPort ? '6vw' : size.celLand ? '2.8vw' : '2.8vw',
          fontWeight: '300',
          animation: 'blink 1s linear infinite',
          '@keyframes blink': {
            '0%': { opacity: '0'},
            '49%': {opacity: '0'},
            '50%': {opacity: '1'}
          }
        }}}>{`I`}</Typography>
        <Typography sx={{...noSelect(),...{
          fontSize: size.celPort ? '6vw' : size.celLand ? '2.8vw' : '2.8vw',
          marginLeft: size.celPort ? '0.2vw' : size.celLand ? '1.0vw' : size.pcPort ? '0.8vw' : '0.3vw'
        }}}>{`/>`}</Typography>
      </Box>
      <Box sx={{ background: 'none', 'align-self': 'center', display: 'flex', flexDirection: 'row', justifyContent: size.celPort ? 'space-around' : size.celLand ? 'space-evenly' : size.pcPort ? 'space-evenly' : 'space-evenly', alignItems: 'center', width: size.celPort ? '96vw' : size.celLand ? '58vw' : '60vw', height: size.celPort ? '7vh' : size.celLand ? '7vh' : '13vh' }}>
        <Link style={{ background: 'none', textDecoration: 'none', color: '#FFFFFF', fontSize: size.celPort ? '3.2vw' : size.celLand ? '1.3vw' : size.pcPort ? '1.9vw' : '1.3vw', fontFamily: 'Roboto', fontWeight: '600', 'mix-blend-mode': 'difference' }} to="/portfolio/AboutMe" >{ english ? `About Me` : `Acerca De Mi` }</Link>
        <Link style={{ background: 'none', textDecoration: 'none', color: '#FFFFFF', fontSize: size.celPort ? '3.2vw' : size.celLand ? '1.3vw' : size.pcPort ? '1.9vw' : '1.3vw', fontFamily: 'Roboto', fontWeight: '600', 'mix-blend-mode': 'difference' }} to="/portfolio/Skills" >{ english ? `Skills` : `Habilidades` } </Link>
        <Link style={{ background: 'none', textDecoration: 'none', color: '#FFFFFF', fontSize: size.celPort ? '3.2vw' : size.celLand ? '1.3vw' : size.pcPort ? '1.9vw' : '1.3vw', fontFamily: 'Roboto', fontWeight: '600', 'mix-blend-mode': 'difference' }} to="/portfolio/Projects" >{ english ? `Projects` : `Proyectos` }</Link>
        <Link style={{ background: 'none', textDecoration: 'none', color: '#FFFFFF', fontSize: size.celPort ? '3.2vw' : size.celLand ? '1.3vw' : size.pcPort ? '1.9vw' : '1.3vw', fontFamily: 'Roboto', fontWeight: '600', 'mix-blend-mode': 'difference' }} to="/portfolio/Certifications" >{ english ? `Certifications` : `Certificaciones`}</Link>
        <Link style={{ background: 'none', textDecoration: 'none', color: '#FFFFFF', fontSize: size.celPort ? '3.2vw' : size.celLand ? '1.3vw' : size.pcPort ? '1.9vw' : '1.3vw', fontFamily: 'Roboto', fontWeight: '600', 'mix-blend-mode': 'difference' }} to="/portfolio/Contact" >{ english ? `Contact` : `Contacto`}</Link>
        {/* <Button variant="contained" sx={{ position: wi() < '415' ? 'absolute' : 'null', top: wi() < '415' ? '2vh' : null, padding: '0px !important', 'min-width': '2.1vw !important', 'max-width': '2.1vw !important', 'min-height': '2.1vw !important', 'max-height': '2.1vw !important'}}><WbSunnyIcon sx={{width: '1.6vw'}}/></Button> */}
      </Box>
    </Box>
  )
}

export default NavBar;