import React, { useState , useRef, useEffect} from 'react';
import {Box, Button,CardMedia, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import weatherify1 from '../../images/weatherify1.png';
import weatherify2 from '../../images/weatherify2.png';
import food1 from '../../images/food1.png';
import food2 from '../../images/food2.png';
import food3 from '../../images/food3.png';
import ForwardIcon from '@mui/icons-material/Forward';
import Dialog from '@mui/material/Dialog';
import ReplyIcon from '@mui/icons-material/Reply';
import { grey , blue , cyan, lime, brown, red} from '@mui/material/colors';
import { row, column, jc , as, noSelect }from '../../styles/styles.js'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ScrollContainer from 'react-indiana-drag-scroll';
import { useSelector } from 'react-redux';

function Projects() {

  const english = useSelector( state => state.english )

  const [show, setShow] = useState(false)
  const [name, setName] = useState("")
  const [scrollSpeed, setScrollSpeed] = useState(30)
  const [scrollName, setScrollName] = useState("3x");

  function useHorizontalScroll() {
    const elRef = useRef();
    useEffect(() => {
      const el = elRef.current;
      if (el) {
        const onWheel = e => {
          if (e.deltaY == 0) return;
          e.preventDefault();
          el.scrollTo({
            left: el.scrollLeft + e.deltaY * scrollSpeed,
            behavior: "smooth"
          });
        };
        el.addEventListener("wheel", onWheel);
        return () => el.removeEventListener("wheel", onWheel);
      }
    }, [scrollSpeed]);
    return elRef;
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '93vh', width: '97vw', backgroundColor: 'none'}}>

      <Link style={{ textDecoration: 'none' }} to="/portfolio"><Button variant="contained"  sx={{position: 'absolute', top: '5vh', left: '5vh', maxWidth: '2vw', maxHeight: '2vw', minWidth: '2vw', minHeight: '2vw', justifyItems: 'center', alignContent: 'center', display: 'flex', flexDirection: 'column'}}><ForwardIcon sx={{transform: 'rotate(180deg)'}} /></Button></Link>
        <ScrollContainer innerRef={useHorizontalScroll()} style={{overflow: 'auto', backgroundColor: 'none', opacity: '0.8', marginBottom: '1vh'}}>

          <Box sx={{...column(),...{ backgroundColor: 'none', width: '158vw', height: '6vh', marginBottom: '0px'}}}>
            <Box sx={{...row(),...{ background: brown[700], width: '158vw', height: '2vh'}}}></Box>
            <Box sx={{...row(),...{'background': 'linear-gradient(to right, transparent 70%, #5d4037 30%)', 'background-blend-mode': 'difference', 'background-size': '7vw 7vw', width: '158vw', height: '6vh'}}}></Box>
            <Box sx={{...row(),...{ background: brown[700], width: '158vw', height: '2vh'}}}></Box>
          </Box>
          <Box sx={{...row(),...{background: brown[700], width: '158vw'}}} >
            <Box sx={{...column(),...{  marginLeft: '1vw' , background: red[800]}}}>

              <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '1vw'}}>

                <Typography sx={{...noSelect(),...{ fontFamily: 'Century Gothic', color: '#FFFFFF', fontSize: '3rem'}}}>{ english ? `Weather App` : `Aplicación del Clima` }</Typography>
                <a href="https://pabloaza89.github.io/weather-app/" target="_blank" rel="noopener noreferrer"><Button variant="contained"  sx={{position: 'relative', left: '1vw', maxWidth: '2vw', maxHeight: '2vw', minWidth: '2vw', minHeight: '2vw', justifyItems: 'center', alignContent: 'center', display: 'flex', flexDirection: 'column'}}><ReplyIcon sx={{transform: 'scaleX(-1)'}} /></Button></a>
              </Box>
              <Box sx={{background: lime[400], height: '32vh', width: '62vw',  display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}} >
                <CardMedia onClick={(e) => setName(weatherify1) + setShow(!show)} sx={{ alignSelf:'center', backgroundImage: `url(${weatherify1})`, width: '100%', height: '100%' ,backgroundSize: '98%', ':hover': {'-webkit-filter': 'brightness(.9)', 'filter': 'brightness(.9)'}}}></CardMedia>
                <CardMedia onClick={(e) => setName(weatherify2) + setShow(!show)} sx={{ alignSelf:'center', backgroundImage: `url(${weatherify2})`, width: '100%', height: '100%' ,backgroundSize: '98%', ':hover': {'-webkit-filter': 'brightness(.9)', 'filter': 'brightness(.9)'}}}></CardMedia>
              </Box>
            </Box>
            <Box sx={{...column(),...{ marginLeft: '1vw' ,marginBottom: '0vw', background: red[800]}}}>
              <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '1vw'}}>
                <Typography sx={{...noSelect(),...{ fontFamily: 'Century Gothic', color: '#FFFFFF', fontSize: '3rem'}}}>{ english ? `Food App` : `Aplicación de Comidas` }</Typography>
                <a href="https://pabloaza89.github.io/PI-Food-GH/" target="_blank" rel="noopener noreferrer"><Button variant="contained"  sx={{position: 'relative', left: '1vw', maxWidth: '2vw', maxHeight: '2vw', minWidth: '2vw', minHeight: '2vw', justifyItems: 'center', alignContent: 'center', display: 'flex', flexDirection: 'column'}}><ReplyIcon sx={{transform: 'scaleX(-1)'}} /></Button></a>
              </Box>
              <Box sx={{background: lime[400], height: '32vh', width: '93vw', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}} >
                <CardMedia onClick={(e) => setName(food1) + setShow(!show)} sx={{ alignSelf:'center', backgroundImage: `url(${food1})`, width: '100%', height: '100%' ,backgroundSize: '98%', ':hover': {'-webkit-filter': 'brightness(.9)', 'filter': 'brightness(.9)'}}}></CardMedia>
                <CardMedia onClick={(e) => setName(food2) + setShow(!show)} sx={{ alignSelf:'center', backgroundImage: `url(${food2})`, width: '100%', height: '100%' ,backgroundSize: '98%', ':hover': {'-webkit-filter': 'brightness(.9)', 'filter': 'brightness(.9)'}}}></CardMedia>
                <CardMedia onClick={(e) => setName(food3) + setShow(!show)} sx={{ alignSelf:'center', backgroundImage: `url(${food3})`, width: '100%', height: '100%' ,backgroundSize: '98%', ':hover': {'-webkit-filter': 'brightness(.9)', 'filter': 'brightness(.9)'}}}></CardMedia>
              </Box>
            </Box>
          </Box>
          <Box sx={{...column(),...{ backgroundColor: 'none', width: '158vw', height: '6vh'}}}>
            <Box sx={{...row(),...{ background: brown[700], width: '158vw', height: '2vh'}}}></Box>
            <Box sx={{...row(),...{ 'background': 'linear-gradient(to right, transparent 70%, #5d4037 30%)', 'background-blend-mode': 'difference', 'background-size': '7vw 7vw', width: '158vw', height: '6vh'}}}></Box>
            <Box sx={{...row(),...{ background: brown[700], width: '158vw', height: '2vh'}}}></Box>
          </Box>
        </ScrollContainer>

        <Dialog
              sx={{height: '71vh',  display: 'flex', flexDirection: 'row', position: 'fixed', justifyContent: 'center', top: '15vh'}}
              open={show}
              onClick={() => setShow(false)}
              fullWidth={true}
              fullScreen={true}
            >
          <CardMedia sx={{ display: 'flex', flexDirection: 'row', justifyItems: 'center', backgroundImage: `url(${name})`, width: '70vw', height: '100vw' ,backgroundSize: '98%', backgroundRepeat: 'no-repeat',}}></CardMedia>
        </Dialog>

      <Box sx={{...row(),...as(),...{ backgroundColor: 'none', minWidth: '10vw'}}}>
        <Typography sx={{...row(),...jc(),...as(),...noSelect(),...{color: '#000000', fontSize: '1.25rem', top: '0.1vh'}}}>{ english ? `Scroll Wheel Speed:  ` : `Velocidad de Rueda de Desplazamiento:  ` }</Typography>
        <Box sx={{...row(),...{  backgroundColor: 'blue', minWidth: '3vw' , background: blue[500]}}}>
          <FormControl >
            <InputLabel id="demo-simple-select-label"></InputLabel>
            <Select
              sx={{color: '#FFFFFF', fontSize: '1.1rem' }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={scrollSpeed}
              label="Scroll"
              onChange={function(e) {setScrollSpeed(e.target.value) ; setScrollName(e.target.value); console.log(scrollSpeed) ; console.log(scrollName)}}
            >
              <MenuItem value={10} >1x</MenuItem>
              <MenuItem value={30} >2x</MenuItem>
              <MenuItem value={50} >3x</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
    </Box>
  )
}

export default Projects;
