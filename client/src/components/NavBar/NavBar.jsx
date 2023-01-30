import React, {useState, useEffect} from 'react';
import { Box, Button,  Typography, View, TextareaAutosize} from '@mui/material';
import { BrowserRouter, Navigate, Route, Routes , Link} from "react-router-dom";
import SendIcon from '@mui/icons-material/Send';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { grey , blue } from '@mui/material/colors';
import { useSelector } from 'react-redux';
import { row, column, jc , as, noSelect, prtr, wi, he, or} from '../../Styles/Styles'
import s from "./NavBar.module.css";

function NavBar() {
  // width: wi() < '415' ? '90vw' :

  const english = useSelector( state => state.english )

  const [size, setSize] = useState({
    width: window.screen.width,
    height: window.screen.height,
    celPort: window.screen.width <= 415 && window.matchMedia("(orientation: portrait)").matches ? true : false,
    celLand: window.screen.height <= 415 && !window.matchMedia("(orientation: portrait)").matches ? true : false
  });

  useEffect(() => {
      const handleResizeWindow = () => setSize({width: window.screen.width, height: window.screen.height, celPort: window.screen.width < 415 && window.matchMedia("(orientation: portrait)").matches ? true : false, celLand: window.screen.height < 415 && !window.matchMedia("(orientation: portrait)").matches ? true : false });
        window.addEventListener("resize", handleResizeWindow);
        return () => {window.removeEventListener("resize", handleResizeWindow)};
  },[]);

  console.log("ANCHO: ", size.width, " | ALTO: ", size.height, " | PORTRAIT: " , size.celPort, " | LANDSCAPE: ", size.celLand)

  return (
    <Box sx={{display: 'flex', flexDirection: size.celPort ? 'column' : size.celLand ? 'row' : 'row', justifyContent:"space-between", background: 'none', marginTop: '1vh', height: size.celPort ? '30vw' : size.celLand ? '7vw' :'15vh'}}>
      <Box sx={{display: 'flex', flexDirection: 'row', background: 'none', width: size.celPort ? '60vw' : size.celLand ? '35vw' : '33vw', color: 'white', alignItems: 'center', height: size.celPort ? '7vh' : size.celLand ? '13vh' : '13vh', marginLeft: '2vw'}}>
        <Typography sx={{...noSelect(),...{ fontSize: size.celPort ? '6vw' : size.celLand ? '2.8vw' : '2.8vw'}}}>{`< `}</Typography>
        <Typography sx={{...noSelect(),...{fontFamily: 'Allura', fontSize: size.celPort ? '6vw' : size.celLand ? '2.8vw' : '2.8vw', color: blue[600], fontWeight: 600}}}>{`Pablo Azambuyo`}</Typography>
        <Typography sx={{...noSelect(),...{ fontSize: size.celPort ? '6vw' : size.celLand ? '2.8vw' : '2.8vw', fontWeight: '300', animation: 'blink 1s linear infinite', '@keyframes blink': {'0%': {opacity: '0'}, '49%': {opacity: '0'}, '50%': {opacity: '1'}}}}}>{`I`}</Typography>
        <Typography sx={{...noSelect(),...{ fontSize: size.celPort ? '6vw' : size.celLand ? '2.8vw' : '2.8vw'}}}>{` />`}</Typography>
      </Box>
      <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: size.celPort ? 'space-between' : 'right', alignItems: 'center', background: 'none', width: size.celPort ? '96vw' : size.celLand ? '60vw' : '60vw', height: size.celPort ? '7vh' : size.celLand ? '7vh' : '13vh' }}>
        <Button variant="text" sx={{ margin: size.celPort ? '0vw' : size.celLand ? '0.5vw' : '0.5vw', padding: '0vw !important', 'min-width': size.celPort ? '20vw !important' : size.celLand ? '9.1vw !important' : '5.1vw !important', 'max-width': '8.1vw !important', 'min-height': '3.1vw !important', 'max-height': '3.1vw !important', display: 'flex', color: '#FFFFFF', textTransform: 'none', fontSize: size.celPort ? '3.1vw' : size.celLand ? '1.3vw' : '1.1vw', background: 'none'}} ><Link style={{background: 'none', textDecoration: 'none', color: '#FFFFFF', 'mix-blend-mode': 'difference' }} to="/portfolio/AboutMe" >{ english ? `About Me` : `Acerca De Mi` }</Link></Button>
        <Button variant="text" sx={{ margin: size.celPort ? '0vw' : size.celLand ? '0.5vw' : '0.5vw', padding: '0px !important', 'min-width': size.celPort ? '20vw !important' : size.celLand ? '9.1vw !important' : '5.1vw !important', 'max-width': '8.1vw !important', 'min-height': '3.1vw !important', 'max-height': '3.1vw !important', display: 'flex', color: '#FFFFFF', textTransform: 'none', fontSize: size.celPort ? '3.1vw' : size.celLand ? '1.3vw' : '1.1vw', background: 'none'}} ><Link style={{ textDecoration: 'none', color: '#FFFFFF', 'mix-blend-mode': 'difference'}} to="/portfolio/Skills" >{ english ? `Skills` : `Habilidades` } </Link></Button>
        <Button variant="text" sx={{ margin: size.celPort ? '0vw' : size.celLand ? '0.5vw' : '0.5vw', padding: '0px !important', 'min-width': size.celPort ? '20vw !important' : size.celLand ? '9.1vw !important' : '5.1vw !important', 'max-width': '8.1vw !important', 'min-height': '3.1vw !important', 'max-height': '3.1vw !important', display: 'flex', color: '#FFFFFF', textTransform: 'none', fontSize: size.celPort ? '3.1vw' : size.celLand ? '1.3vw' : '1.1vw', background: 'none'}} ><Link style={{background: 'none', textDecoration: 'none', color: '#FFFFFF', 'mix-blend-mode': 'difference' }} to="/portfolio/Projects" >{ english ? `Projects` : `Proyectos` }</Link></Button>
        <Button variant="text" sx={{ margin: size.celPort ? '0vw' : size.celLand ? '0.5vw' : '0.5vw', padding: '0px !important', 'min-width': size.celPort ? '20vw !important' : size.celLand ? '9.1vw !important' : '5.1vw !important', 'max-width': '8.1vw !important', 'min-height': '3.1vw !important', 'max-height': '3.1vw !important', display: 'flex', color: '#FFFFFF', textTransform: 'none', fontSize: size.celPort ? '3.1vw' : size.celLand ? '1.3vw' : '1.1vw', background: 'none'}} ><Link style={{ textDecoration: 'none' , color: '#FFFFFF', 'mix-blend-mode': 'difference'}} to="/portfolio/Certifications" >{ english ? `Certifications` : `Certificaciones`}</Link></Button>
        <Button variant="text" sx={{ margin: size.celPort ? '0vw' : size.celLand ? '0.5vw' : '0.5vw', padding: '0px !important', 'min-width': size.celPort ? '20vw !important' : size.celLand ? '9.1vw !important' : '5.1vw !important', 'max-width': '8.1vw !important', 'min-height': '3.1vw !important', 'max-height': '3.1vw !important', display: 'flex', color: '#FFFFFF', textTransform: 'none', fontSize: size.celPort ? '3.1vw' : size.celLand ? '1.3vw' : '1.1vw', background: 'none', marginRight: '3vw'}}><Link style={{ textDecoration: 'none', color: '#FFFFFF', 'mix-blend-mode': 'difference' }} to="/portfolio/Contact" >{ english ? `Contact` : `Contacto`}</Link></Button>
        {/* <Button variant="contained" sx={{ position: wi() < '415' ? 'absolute' : 'null', top: wi() < '415' ? '2vh' : null, padding: '0px !important', 'min-width': '2.1vw !important', 'max-width': '2.1vw !important', 'min-height': '2.1vw !important', 'max-height': '2.1vw !important'}}><WbSunnyIcon sx={{width: '1.6vw'}}/></Button> */}
      </Box>
    </Box>
  )
}

export default NavBar;