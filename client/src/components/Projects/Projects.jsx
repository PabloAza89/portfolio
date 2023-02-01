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
import { row, column, jc , as, noSelect, prtr, wi, he, or}from '../../Styles/Styles'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ScrollContainer from 'react-indiana-drag-scroll';
import { useSelector } from 'react-redux';
import BackButton from '../BackButton/BackButton';
import GoToLinkButton from '../GoToLinkButton/GoToLinkButton';
import DialogContent from '@mui/material/DialogContent';

function Projects() {

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

  // console.log("ANCHO: ", size.width, " | ALTO: ", size.height, " | PORTRAIT CEL: " , size.celPort, " | LANDSCAPE CEL: ", size.celLand, " | PORTRAIT PC: ", size.pcPort, " | LANDSCAPE PC: ", size.pcLand)

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
    <Box sx={{ display: 'flex', marginTop: size.celPort ? '23vh' : size.celLand ? '17vh' : size.pcPort ? '24vh' : '12vh', flexDirection: 'column', justifyContent: 'center', height: size.celPort ? '50vh' : size.celLand ? '60vh' : size.pcPort ? '53vh' : '73vh' , width: '97vw', background: 'none'}}>
        <BackButton />
        <ScrollContainer innerRef={useHorizontalScroll()} style={{overflow: 'auto', background: 'none', opacity: '0.8', marginBottom: size.celPort ? '0vh' : size.celLand ? '0vh' : '1vh' }}>

          <Box sx={{...column(),...{ background: 'none', width: '158vw', height: size.celPort ? '3vh' : size.pcPort ? '3vh' : '6vh', marginBottom: '0px'}}}>
            <Box sx={{...row(),...{ background: brown[700], width: '158vw', height: '2vh'}}}></Box>
            <Box sx={{...row(),...{'background': 'linear-gradient(to right, transparent 70%, #5d4037 30%)', 'background-blend-mode': 'difference', 'background-size': size.celPort ? '13vw 7vw' : size.pcPort ? '11vw 7vw' : '7vw 7vw', width: '158vw', height: '6vh'}}}></Box>
            <Box sx={{...row(),...{ background: brown[700], width: '158vw', height: '2vh'}}}></Box>
          </Box>
          <Box sx={{...row(),...{background: brown[700], width: '158vw'}}} >

            <Box sx={{...column(),...{  marginLeft: '1vw' , background: red[800], height: size.celPort ? '20vh' : size.celLand ? '44vh' : size.pcPort ? '20vh' : '40vh' }}}>
              <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '1vw', background: 'none', height: size.celPort ? '8vh' : size.celLand ? '8vh' : size.pcPort ? '5vh' : '8vh' }}>
                <Typography sx={{...noSelect(),...{ marginRight: size.celPort ? '1.3vw' : size.celLand ? '0.9vw' : size.pcPort ? '1.3vw' : '0.9vw', fontFamily: 'Century Gothic', color: '#FFFFFF', fontSize: size.celPort ? '4.5vw' : size.celLand ? '5vh' : size.pcPort ? '3.6vw' : '5vh' }}}>{ english ? `Weather App` : `Aplicación del Clima` }</Typography>
                <GoToLinkButton link={"https://pabloaza89.github.io/weather-app/"}/>
              </Box>
              <Box sx={{background: lime[400], height: size.celPort ? '32vh' : size.celLand ? '36vh' : size.pcPort ? '15vh' : '32vh', width: '62vw',  display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}} >
                <CardMedia onClick={(e) => setName(weatherify1) + setShow(!show)} sx={{ cursor: 'pointer', alignSelf:'center', backgroundImage: `url(${weatherify1})`, width: '100%', height: '100%' ,backgroundSize: size.celPort ? '30vw 15vh' : size.celLand ? '30vw 33vh' : size.pcPort ? '30vw 14vh' : '30vw 30vh', ':hover': {'-webkit-filter': 'brightness(.9)', 'filter': 'brightness(.9)'}}}></CardMedia>
                <CardMedia onClick={(e) => setName(weatherify2) + setShow(!show)} sx={{ cursor: 'pointer', alignSelf:'center', backgroundImage: `url(${weatherify2})`, width: '100%', height: '100%' ,backgroundSize: size.celPort ? '30vw 15vh' : size.celLand ? '30vw 33vh' : size.pcPort ? '30vw 14vh' : '30vw 30vh', ':hover': {'-webkit-filter': 'brightness(.9)', 'filter': 'brightness(.9)'}}}></CardMedia>
              </Box>
            </Box>

            <Box sx={{...column(),...{  marginLeft: '1vw' , background: red[800], height: size.celPort ? '20vh' : size.celLand ? '44vh' : size.pcPort ? '20vh' : '40vh' }}}>
              <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '1vw', background: 'none', height: size.celPort ? '8vh' : size.celLand ? '8vh' : size.pcPort ? '5vh' : '8vh' }}>
              <Typography sx={{...noSelect(),...{ marginRight: size.celPort ? '1.3vw' : size.celLand ? '0.9vw' : size.pcPort ? '1.3vw' : '0.9vw', fontFamily: 'Century Gothic', color: '#FFFFFF', fontSize: size.celPort ? '4.5vw' : size.celLand ? '5vh' : size.pcPort ? '3.6vw' : '5vh' }}}>{ english ? `Food App` : `Aplicación de Comidas` }</Typography>
                <GoToLinkButton link={"https://pabloaza89.github.io/PI-Food-GH/"}/>
              </Box>
              <Box sx={{background: lime[400], height: size.celPort ? '32vh' : size.celLand ? '36vh' : size.pcPort ? '15vh' : '32vh', width: '93vw',  display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}} >
                <CardMedia onClick={(e) => setName(food1) + setShow(!show)} sx={{ cursor: 'pointer', alignSelf:'center', backgroundImage: `url(${food1})`, width: '100%', height: '100%' ,backgroundSize: size.celPort ? '30vw 15vh' : size.celLand ? '30vw 33vh' :size.pcPort ? '30vw 14vh' : '30vw 30vh', ':hover': {'-webkit-filter': 'brightness(.9)', 'filter': 'brightness(.9)'}}}></CardMedia>
                <CardMedia onClick={(e) => setName(food2) + setShow(!show)} sx={{ cursor: 'pointer', alignSelf:'center', backgroundImage: `url(${food2})`, width: '100%', height: '100%' ,backgroundSize: size.celPort ? '30vw 15vh' : size.celLand ? '30vw 33vh' :size.pcPort ? '30vw 14vh' : '30vw 30vh', ':hover': {'-webkit-filter': 'brightness(.9)', 'filter': 'brightness(.9)'}}}></CardMedia>
                <CardMedia onClick={(e) => setName(food3) + setShow(!show)} sx={{ cursor: 'pointer', alignSelf:'center', backgroundImage: `url(${food3})`, width: '100%', height: '100%' ,backgroundSize: size.celPort ? '30vw 15vh' :  size.celLand ? '30vw 33vh' :size.pcPort ? '30vw 14vh' : '30vw 30vh', ':hover': {'-webkit-filter': 'brightness(.9)', 'filter': 'brightness(.9)'}}}></CardMedia>
              </Box>
            </Box>

          </Box>
          <Box sx={{...column(),...{ background: 'none', width: '158vw', height: size.celPort ? '3vh' : size.pcPort ? '3vh' : '6vh', marginBottom: '0px'}}}>
            <Box sx={{...row(),...{ background: brown[700], width: '158vw', height: '2vh'}}}></Box>
            <Box sx={{...row(),...{ 'background': 'linear-gradient(to right, transparent 70%, #5d4037 30%)', 'background-blend-mode': 'difference', 'background-size': size.celPort ? '13vw 7vw' : size.pcPort ? '11vw 7vw' : '7vw 7vw', width: '158vw', height: '6vh'}}}></Box>
            <Box sx={{...row(),...{ background: brown[700], width: '158vw', height: '2vh'}}}></Box>
          </Box>

        </ScrollContainer>

        <Dialog
          sx={{ minHeight: size.celPort ? '70%' : 'none', maxHeight: size.celPort ? '70%' : 'none', minWidth: size.celPort ? '80vw' : 'none', maxWidth: size.celPort ? '80vw' : 'none', height: size.celPort ? '71%' : '71vh', width: size.celPort ? '100%' : 'none', display: 'flex', flexDirection: size.celPort ? 'row' : 'row', position: 'fixed', top: size.celPort ? '15vh' : '15vh', left: size.celPort ? '10vw' : '15vw' }} 
          open={size.celLand || size.pcPort || size.pcLand ? show : null}
          onClick={() => setShow(false)}
          fullWidth={true}
          fullScreen={true} 
        > 
          <CardMedia sx={{ 'margin-block': size.celPort ? 'auto' : 'none', transform: size.celPort ? 'rotate(-90deg)' : 'none', display: 'flex', flexDirection: 'row', justifyItems: 'center' , backgroundImage: `url(${name})`, width: size.celPort ? '80vw' : '70vw', height: size.celPort ? '35vh' : '100vh', backgroundSize: size.celPort ? '78vw 30vh' : size.pcPort ? '67vw 68vh' : '68vw 68vh', backgroundRepeat: 'no-repeat',}}></CardMedia>
        </Dialog>




       
      

      
      <Dialog
        open={size.celPort ? show : null}
        onClick={() => setShow(false)}
        style={{ maxWidth: "100%", maxHeight: "100vh", '&::-webkit-scrollbar': {display: 'none'} }}
      >
        <DialogContent sx={{ 'justify-content': 'center', 'align-items': 'center', padding: '0vh 8vw 0vh 8vw', display: 'flex', 'flexDirection': 'row', background: 'white', height: 'calc((30vw - 64px) + (72vh - 64px))', overflow: "hidden", '&::-webkit-scrollbar': {display: 'none'} }}>
        
        
          <img
            style={{ width: 'calc(72vh - 64px)', height: '70vw', transform: 'rotate(-90deg)' , margin: '0vh 0vw 0vh 0vw', '&::-webkit-scrollbar': {display: 'none'}}}
            
             src={name}
           alt="project"
           /> 
        </DialogContent>
      </Dialog>


      <Box sx={{...row(),...as(),...{ background: 'none', minWidth: size.pcPort ? '10vw' : size.pclLand ? '10vw' : size.pcPort ? '35vw' : '10vw', display: size.celLand ? 'none' : size.celPort ? 'none' : 'flex' }}}>
        <Typography sx={{...row(),...jc(),...as(),...noSelect(),...{color: '#FFFFFF', fontSize: size.pcPort ? '2.5vh' : '1.5vw', top: '0.1vh', 'mix-blend-mode': 'difference' }}}>{ english ? `Scroll Wheel Speed:  ` : `Velocidad de Rueda de Desplazamiento:  ` }</Typography>
        <FormControl >
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select
            sx={{color: '#FFFFFF', fontSize: '1.1rem', background: blue[500], height: size.pcPort ? '5vh' : '6vh', width: size.pcPort ? '11vw' : '4.0vw', fontSize: size.pcPort ? '2vh': '1vw' }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={scrollSpeed}
            label="Scroll"
            onChange={function(e) {setScrollSpeed(e.target.value) ; setScrollName(e.target.value)}}
          >
            <MenuItem value={10} >1x</MenuItem>
            <MenuItem value={30} >2x</MenuItem>
            <MenuItem value={50} >3x</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  )
}

export default Projects;
