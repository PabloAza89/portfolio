import React, { useState , useRef, useEffect} from 'react';
import { Box, Button,  Typography, View, TextareaAutosize} from '@mui/material';
import { BrowserRouter, Navigate, Route, Routes , Link} from "react-router-dom";
import SendIcon from '@mui/icons-material/Send';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { grey , blue } from '@mui/material/colors';
import { useSelector } from 'react-redux';
import ScrollContainer from 'react-indiana-drag-scroll';
import { row, column, jc , as, noSelect, prtr, wi, he, or} from '../../Styles/Styles'

function NavBar() {

  const english = useSelector(state => state.english)
  const minPort = useSelector(state => state.minPort)
  const minLand = useSelector(state => state.minLand)
  const medPort = useSelector(state => state.medPort)
  const medLand = useSelector(state => state.medLand)
  const larPort = useSelector(state => state.larPort)
  const larLand = useSelector(state => state.larLand)
  const staticRefWidth = useSelector(state => state.staticRefWidth)

  function useHorizontalScroll() {
    const elRef = useRef();
    useEffect(() => {
      const el = elRef.current;
      if (el) {
        const onWheel = e => {
          if (e.deltaY == 0) return;
          e.preventDefault();
          el.scrollTo({
            left: el.scrollLeft + e.deltaY * 4,
            behavior: "smooth"
          });
        };
        el.addEventListener("wheel", onWheel);
        return () => el.removeEventListener("wheel", onWheel);
      }
    }, [/* scrollSpeed */]);
    return elRef;
  }

  return (
    <Box sx={{
      background: 'red',
      justifyContent: 'space-evenly',
      display: 'flex',
      flexDirection: minPort ? 'column' : minLand ? 'row' : larPort ? 'column' : 'row',
      marginTop: '1vh',
      height: minPort ? '30vw' : minLand ? '7vw' : larPort ? '20vh' : '15vh',
      
      /* minHeight: size.pcLand ? '11vw' : '15vw' */

    }}>
      <Box sx={{ 
        display: 'flex',
        flexDirection: 'row',
        background: 'blue',
        width: minPort ? '60vw' : minLand ? '35vw' : larPort ? '58vw' : '33vw',
        color: 'white',
        alignItems: 'center',
        'align-self': minPort ? 'start' : larPort ? 'start' : 'center',
        height: minPort ? '7vh' : minLand ? '13vh' : larPort ? '13vh' : '13vh',
        marginLeft: '2vw'
      }}>
        <Typography sx={{...noSelect(),...{ 
          fontSize: minPort ? '6vw' : minLand ? '2.8vw' : larPort ? '3.8vw' : '2.8vw',
          marginRight: minPort ? '1.5vw' : minLand ? '1.4vw' : larPort ? '1.1vw' : '1.1vw'
        }}}>{`<`}</Typography>
        <Typography sx={{...noSelect(),...{
          marginTop: '0.5vh',
          fontFamily: 'Allura',
          fontSize: minPort ? '7.5vw' : minLand ? '3.8vw' : larPort ? '6.1vw' : '3.8vw',
          color: blue[600],
          fontWeight: 600
        }}}>{`Pablo Azambuyo`}</Typography>
        <Typography sx={{...noSelect(),...{
          marginTop: '0.5vh',
          fontSize: minPort ? '6vw' : minLand ? '2.8vw' : larPort ? '4.5vw' : '2.8vw',
          fontWeight: '300',
          animation: 'blink 1s linear infinite',
          '@keyframes blink': {
            '0%': { opacity: '0' },
            '49%': { opacity: '0' },
            '50%': { opacity: '1' }
          }
        }}}>{`I`}</Typography>
        <Typography sx={{...noSelect(),...{
          fontSize: minPort ? '6vw' : minLand ? '2.8vw' : larPort ? '3.8vw' : '2.8vw',
          marginLeft: minPort ? '0.2vw' : minLand ? '1.0vw' : larPort ? '0.8vw' : '0.3vw'
        }}}>{`/>`}</Typography>
      </Box>
      <ScrollContainer style={{
        background: 'green',
        // overflow: 'auto', background: 'none', opacity: '0.8', marginBottom: minPort ? '0vh' : minLand ? '0vh' : '1vh' 
        overflow: 'auto',
        'align-self': 'center',
        display: 'flex',
        /* flexDirection: 'row', */
        justifyContent: minPort ? 'space-around' : minLand ? 'space-evenly' : larPort ? 'space-evenly' : 'flex-start',
        alignItems: 'center',
        width: minPort ? '96vw' : minLand ? '58vw' : larPort ? '96vw' : '60vw',
        height: minPort ? '7vh' : minLand ? '7vh' : larPort ? '10vh' : '13vh'
        }}
        innerRef={useHorizontalScroll()}
      >
        <Link style={{ 
          background: 'none',
          marginLeft: `${staticRefWidth * 0.5}px`,
          marginRight: `${staticRefWidth * 0.5}px`,
          'min-width': 'fit-content',
          textDecoration: 'none', color: '#FFFFFF',
          fontSize: minPort ? '3.2vw' : minLand ? '1.3vw' : larPort ? '2.6vw' : /* '1.3vw' */ `${staticRefWidth * 1.2}px`,
          fontFamily: 'Roboto',
          fontWeight: '600',
          'mix-blend-mode': 'difference'
        }}
        to="/portfolio/AboutMe"
      >{ english ? `About Me` : `Acerca De Mi` }</Link>
        <Link style={{ background: 'none', marginLeft: `${staticRefWidth * 0.5}px`, marginRight: `${staticRefWidth * 0.5}px`, 'min-width': 'fit-content', textDecoration: 'none', color: '#FFFFFF', fontSize: minPort ? '3.2vw' : minLand ? '1.3vw' : larPort ? '2.6vw' : `${staticRefWidth * 1.2}px`, fontFamily: 'Roboto', fontWeight: '600', 'mix-blend-mode': 'difference' }} to="/portfolio/Skills" >{ english ? `Skills` : `Habilidades` } </Link>
        <Link style={{ background: 'none', marginLeft: `${staticRefWidth * 0.5}px`, marginRight: `${staticRefWidth * 0.5}px`, 'min-width': 'fit-content', textDecoration: 'none', color: '#FFFFFF', fontSize: minPort ? '3.2vw' : minLand ? '1.3vw' : larPort ? '2.6vw' : `${staticRefWidth * 1.2}px`, fontFamily: 'Roboto', fontWeight: '600', 'mix-blend-mode': 'difference' }} to="/portfolio/Projects" >{ english ? `Projects` : `Proyectos` }</Link>
        <Link style={{ background: 'none', marginLeft: `${staticRefWidth * 0.5}px`, marginRight: `${staticRefWidth * 0.5}px`, 'min-width': 'fit-content', textDecoration: 'none', color: '#FFFFFF', fontSize: minPort ? '3.2vw' : minLand ? '1.3vw' : larPort ? '2.6vw' : `${staticRefWidth * 1.2}px`, fontFamily: 'Roboto', fontWeight: '600', 'mix-blend-mode': 'difference' }} to="/portfolio/Certifications" >{ english ? `Certifications` : `Certificaciones`}</Link>
        <Link style={{ background: 'none', marginLeft: `${staticRefWidth * 0.5}px`, marginRight: `${staticRefWidth * 0.5}px`, 'min-width': 'fit-content', textDecoration: 'none', color: '#FFFFFF', fontSize: minPort ? '3.2vw' : minLand ? '1.3vw' : larPort ? '2.6vw' : `${staticRefWidth * 1.2}px`, fontFamily: 'Roboto', fontWeight: '600', 'mix-blend-mode': 'difference' }} to="/portfolio/Contact" >{ english ? `Contact` : `Contacto`}</Link>
        {/* <Button variant="contained" sx={{ position: wi() < '415' ? 'absolute' : 'null', top: wi() < '415' ? '2vh' : null, padding: '0px !important', 'min-width': '2.1vw !important', 'max-width': '2.1vw !important', 'min-height': '2.1vw !important', 'max-height': '2.1vw !important'}}><WbSunnyIcon sx={{width: '1.6vw'}}/></Button> */}
      </ScrollContainer>
    </Box>
  )
}

export default NavBar;