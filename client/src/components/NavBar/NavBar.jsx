import React from 'react';
import { Box, Button,  Typography} from '@mui/material';
import { BrowserRouter, Navigate, Route, Routes , Link} from "react-router-dom";
import SendIcon from '@mui/icons-material/Send';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { grey , blue } from '@mui/material/colors';
import { useSelector } from 'react-redux';
import { row, column, jc , as, noSelect }from '../../styles/styles.js'

function NavBar() {

  const english = useSelector( state => state.english )

  return (
    <Box sx={{zIndex: 1,display: 'flex', flexDirection: 'row', justifyContent:"space-between"}}>
      <Box sx={{display: 'flex', flexDirection: 'row', color: 'white', alignItems: 'center', marginLeft: '2vw'}}>
        <Typography sx={{...noSelect(),...{ fontSize: '2.5rem'}}}>{`< `}</Typography>
        <Typography sx={{...noSelect(),...{fontFamily: 'Allura', fontSize: '4rem', color: blue[600], fontWeight: 600}}}>{`Pablo Azambuyo`}</Typography>
        <Typography sx={{...noSelect(),...{ fontSize: '3rem', fontWeight: '300', animation: 'blink 1s linear infinite', '@keyframes blink': {'0%': {opacity: '0'}, '49%': {opacity: '0'}, '50%': {opacity: '1'}}}}}>{`I`}</Typography>
        <Typography sx={{...noSelect(),...{ fontSize: '2.5rem'}}}>{` />`}</Typography>
      </Box>
      <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'right',backgroundColor: 'none', width: '60vw'}}>

          <Link style={{ textDecoration: 'none' }} to="/portfolio/AboutMe" ><Button  variant="text" sx={{ color: '#FFFFFF' , textTransform: 'none', fontSize: 'larger'}} >{ english ? `About Me` : `Acerca De Mi` }</Button></Link>
          <Link style={{ textDecoration: 'none' }} to="/portfolio/Skills" ><Button variant="text" sx={{ color: '#FFFFFF', textTransform: 'none' , fontSize: 'larger'}} >{ english ? `Skills` : `Habilidades` } </Button></Link>
          <Link style={{ textDecoration: 'none' }} to="/portfolio/Projects" ><Button variant="text" sx={{ color: '#FFFFFF', textTransform: 'none', fontSize: 'larger'}}>{ english ? `Projects` : `Proyectos` }</Button></Link>
          <Link style={{ textDecoration: 'none' }} to="/portfolio/Certifications" ><Button  variant="text" sx={{ color: '#FFFFFF', textTransform: 'none', fontSize: 'larger'}}>{ english ? `Certifications` : `Certificaciones`}</Button></Link>
          <Link style={{ textDecoration: 'none' }} to="/portfolio/Contact" ><Button  variant="text" sx={{ color: '#FFFFFF', textTransform: 'none', fontSize: 'larger', marginRight: '3vw'}}>{ english ? `Contact` : `Contacto`}</Button></Link>
          <Button variant="contained"  sx={{maxWidth: '2vw', maxHeight: '2vw', minWidth: '2vw', minHeight: '2vw', justifyItems: 'center', alignContent: 'center', display: 'flex', flexDirection: 'column'}}><WbSunnyIcon /></Button>



      </Box>
    </Box>  
  )
}

export default NavBar;