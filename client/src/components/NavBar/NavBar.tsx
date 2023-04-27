import React, { useState , useRef, useEffect} from 'react';
import { Box, Button,  Typography, TextareaAutosize} from '@mui/material';
import { BrowserRouter, Navigate, Route, Routes , Link} from "react-router-dom";
import SendIcon from '@mui/icons-material/Send';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { grey , blue } from '@mui/material/colors';
import { useSelector } from 'react-redux';
import ScrollContainer from 'react-indiana-drag-scroll';
import { row, column, jc , as, noSelect, prtr, wi, he, or} from '../../styles/StylesSX'

function NavBar() {

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

  function useHorizontalScroll() {
    const elRef = React.useRef<HTMLInputElement>(null);
    useEffect(() => {
      const el:any = elRef.current;
      if (el) {
        const onWheel = (e:any) => {
          if (e.deltaY === 0) return;
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
      background: 'none',
      justifyContent: 'space-evenly',
      display: 'flex',
      flexDirection: minPort ? 'column' : minLand ? 'row' : larPort ? 'column' : 'row',
      marginTop: '1vh',
      color: '#FFFFFF',
      height: minPort ? '30vw' : minLand ? '7vw' : larPort ? '20vh' : '15vh',
      minHeight: larPort ? '11vw' : `${staticRefWidth * 3.5}px`

    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        background: 'none',
        width: minPort ? '60vw' : minLand ? '35vw' : larPort ? '58vw' : '33vw',
        color: '#FFFFFF',
        alignItems: 'center',
        'align-self': minPort ? 'start' : larPort ? 'start' : 'center',
        height: minPort ? '7vh' : minLand ? '13vh' : larPort ? '13vh' : '13vh',
        minHeight: larPort ? '11vw' : `${staticRefWidth * 2.9}px`,
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
        background: 'none',
        // overflow: 'auto', background: 'none', opacity: '0.8', marginBottom: minPort ? '0vh' : minLand ? '0vh' : '1vh'
        overflow: 'auto',
        minHeight: larPort ? '11vw' : `${staticRefWidth * 2.9}px`,
        alignSelf: 'center',
        color: '#FFFFFF',
        display: 'flex',
        /* flexDirection: 'row', */
        justifyContent:
          minPort ? 'space-around' :
          minLand ? 'space-evenly' :
          larPort && percentageResizedWidth > 0.305 ? 'space-evenly' :
          larPort ? 'flex-start' :
          larLand && percentageResizedWidth < 0.504 ?
          'flex-start' :
          'space-evenly',
          // percentageResizedWidth 0.504
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
          minWidth: 'fit-content',
          textDecoration: 'none', color: '#FFFFFF',
          fontSize: minPort ? '3.2vw' : minLand ? '1.3vw' : larPort ? `${staticRefWidth * 1.2}px` : `${staticRefWidth * 1.2}px`,
          fontFamily: 'Roboto',
          fontWeight: '600',
          mixBlendMode: 'difference'
        }}
        to="/portfolio/AboutMe"
      >{ english ? `About Me` : `Acerca De Mi` }</Link>
        <Link style={{
          background: 'none',
          marginLeft: `${staticRefWidth * 0.5}px`,
          marginRight: `${staticRefWidth * 0.5}px`, minWidth: 'fit-content',
          textDecoration: 'none',
          color: '#FFFFFF',
          fontSize: minPort ? '3.2vw' : minLand ? '1.3vw' : larPort ? `${staticRefWidth * 1.2}px` : `${staticRefWidth * 1.2}px`,
          fontFamily: 'Roboto',
          fontWeight: '600',
          mixBlendMode: 'difference'
          }}
          to="/portfolio/Skills"
        >{ english ? `Skills` : `Habilidades` } </Link>
        <Link style={{ 
          background: 'none',
          marginLeft: `${staticRefWidth * 0.5}px`,
          marginRight: `${staticRefWidth * 0.5}px`, minWidth: 'fit-content',
          textDecoration: 'none',
          color: '#FFFFFF',
          fontSize: minPort ? '3.2vw' : minLand ? '1.3vw' : larPort ? `${staticRefWidth * 1.2}px` : `${staticRefWidth * 1.2}px`,
          fontFamily: 'Roboto',
          fontWeight: '600', mixBlendMode: 'difference' }}
          to="/portfolio/Projects"
          >{ english ? `Projects` : `Proyectos` }</Link>
        <Link style={{
          background: 'none',
          marginLeft: `${staticRefWidth * 0.5}px`,
          marginRight: `${staticRefWidth * 0.5}px`, minWidth: 'fit-content',
          textDecoration: 'none',
          color: '#FFFFFF',
          fontSize: minPort ? '3.2vw' : minLand ? '1.3vw' : larPort ? `${staticRefWidth * 1.2}px` : `${staticRefWidth * 1.2}px`,
          fontFamily: 'Roboto',
          fontWeight: '600', mixBlendMode: 'difference' }}
          to="/portfolio/Certifications"
        >{ english ? `Certifications` : `Certificaciones`}</Link>
        <Link style={{
          background: 'none',
          marginLeft: `${staticRefWidth * 0.5}px`,
          marginRight: `${staticRefWidth * 0.5}px`, minWidth: 'fit-content',
          textDecoration: 'none',
          color:'#FFFFFF',
          fontSize: minPort ? '3.2vw' : minLand ? '1.3vw' : larPort ? `${staticRefWidth * 1.2}px` : `${staticRefWidth * 1.2}px`,
          fontFamily: 'Roboto',
          fontWeight: '600',
          mixBlendMode: 'difference' }}
          to="/portfolio/Contact"
        >{ english ? `Contact` : `Contacto`}</Link>
        {/* <Button variant="contained" sx={{ position: wi() < '415' ? 'absolute' : 'null', top: wi() < '415' ? '2vh' : null, padding: '0px !important', minWidth: '2.1vw !important', 'max-width': '2.1vw !important', 'min-height': '2.1vw !important', 'max-height': '2.1vw !important'}}><WbSunnyIcon sx={{width: '1.6vw'}}/></Button> */}
      </ScrollContainer>
    </Box>
  )
}

export default NavBar;