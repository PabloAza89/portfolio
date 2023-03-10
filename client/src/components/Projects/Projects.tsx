import React, { useState , useRef, useEffect, WheelEvent} from 'react';
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

  const english = useSelector((state: {english:boolean}) => state.english)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)

  const [show, setShow] = useState<boolean>(false)
  const [name, setName] = useState<string>("")
  const [scrollSpeed, setScrollSpeed] = useState<any>(30)

  function useHorizontalScroll() {
    const elRef = React.useRef<HTMLInputElement>(null);
    useEffect(() => {
      const el:any = elRef.current;
      if (el) {
        const onWheel = (e:any) => {
          if (e.deltaY === 0) return;
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
    <Box sx={{ display: 'flex', marginTop: minPort ? '23vh' : minLand ? '17vh' : larPort ? '24vh' : '12vh', flexDirection: 'column', justifyContent: 'center', height: minPort ? '50vh' : minLand ? '60vh' : larPort ? '53vh' : '73vh' , width: '97vw', background: 'none'}}>
        <BackButton />
        <ScrollContainer innerRef={useHorizontalScroll()} style={{ overflow: 'auto', background: 'none', opacity: '0.8', marginBottom: minPort ? '0vh' : minLand ? '0vh' : '1vh' }}>

          <Box sx={{...column(),...{ background: 'none', width: '158vw', height: minPort ? '3vh' : larPort ? '3vh' : '6vh', marginBottom: '0px'}}}>
            <Box sx={{...row(),...{ background: brown[700], width: '158vw', height: '2vh'}}}></Box>
            <Box sx={{...row(),...{'background': 'linear-gradient(to right, transparent 70%, #5d4037 30%)', 'background-blend-mode': 'difference', 'background-size': minPort ? '13vw 7vw' : larPort ? '11vw 7vw' : '7vw 7vw', width: '158vw', height: '6vh'}}}></Box>
            <Box sx={{...row(),...{ background: brown[700], width: '158vw', height: '2vh'}}}></Box>
          </Box>
          <Box sx={{...row(),...{background: brown[700], width: '158vw'}}} >

            <Box sx={{...column(),...{  marginLeft: '1vw' , background: red[800], height: minPort ? '20vh' : minLand ? '44vh' : larPort ? '20vh' : '40vh' }}}>
              <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '1vw', background: 'none', height: minPort ? '8vh' : minLand ? '8vh' : larPort ? '5vh' : '8vh' }}>
                <Typography sx={{...noSelect(),...{ marginRight: minPort ? '1.3vw' : minLand ? '0.9vw' : larPort ? '1.3vw' : '0.9vw', fontFamily: 'Century Gothic', color: '#FFFFFF', fontSize: minPort ? '4.5vw' : minLand ? '5vh' : larPort ? '3.6vw' : '5vh' }}}>{ english ? `Weather App` : `Aplicaci??n del Clima` }</Typography>
                <GoToLinkButton link={"https://pabloaza89.github.io/weather-app/"}/>
              </Box>
              <Box sx={{background: lime[400], height: minPort ? '32vh' : minLand ? '36vh' : larPort ? '15vh' : '32vh', width: '62vw',  display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}} >
                <CardMedia onClick={() => {setName(weatherify1); setShow(!show)}} sx={{ cursor: 'pointer', alignSelf:'center', backgroundImage: `url(${weatherify1})`, width: '100%', height: '100%' ,backgroundSize: minPort ? '30vw 15vh' : minLand ? '30vw 33vh' : larPort ? '30vw 14vh' : '30vw 30vh', ':hover': {'-webkit-filter': 'brightness(.9)', 'filter': 'brightness(.9)'}}}></CardMedia>
                <CardMedia onClick={() => {setName(weatherify2); setShow(!show)}} sx={{ cursor: 'pointer', alignSelf:'center', backgroundImage: `url(${weatherify2})`, width: '100%', height: '100%' ,backgroundSize: minPort ? '30vw 15vh' : minLand ? '30vw 33vh' : larPort ? '30vw 14vh' : '30vw 30vh', ':hover': {'-webkit-filter': 'brightness(.9)', 'filter': 'brightness(.9)'}}}></CardMedia>
              </Box>
            </Box>

            <Box sx={{...column(),...{  marginLeft: '1vw' , background: red[800], height: minPort ? '20vh' : minLand ? '44vh' : larPort ? '20vh' : '40vh' }}}>
              <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '1vw', background: 'none', height: minPort ? '8vh' : minLand ? '8vh' : larPort ? '5vh' : '8vh' }}>
              <Typography sx={{...noSelect(),...{ marginRight: minPort ? '1.3vw' : minLand ? '0.9vw' : larPort ? '1.3vw' : '0.9vw', fontFamily: 'Century Gothic', color: '#FFFFFF', fontSize: minPort ? '4.5vw' : minLand ? '5vh' : larPort ? '3.6vw' : '5vh' }}}>{ english ? `Food App` : `Aplicaci??n de Comidas` }</Typography>
                <GoToLinkButton link={"https://pabloaza89.github.io/PI-Food-GH/"}/>
              </Box>
              <Box sx={{background: lime[400], height: minPort ? '32vh' : minLand ? '36vh' : larPort ? '15vh' : '32vh', width: '93vw',  display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}} >
                <CardMedia onClick={() => {setName(food1); setShow(!show)}} sx={{ cursor: 'pointer', alignSelf:'center', backgroundImage: `url(${food1})`, width: '100%', height: '100%' ,backgroundSize: minPort ? '30vw 15vh' : minLand ? '30vw 33vh' :larPort ? '30vw 14vh' : '30vw 30vh', ':hover': {'-webkit-filter': 'brightness(.9)', 'filter': 'brightness(.9)'}}}></CardMedia>
                <CardMedia onClick={() => {setName(food2); setShow(!show)}} sx={{ cursor: 'pointer', alignSelf:'center', backgroundImage: `url(${food2})`, width: '100%', height: '100%' ,backgroundSize: minPort ? '30vw 15vh' : minLand ? '30vw 33vh' :larPort ? '30vw 14vh' : '30vw 30vh', ':hover': {'-webkit-filter': 'brightness(.9)', 'filter': 'brightness(.9)'}}}></CardMedia>
                <CardMedia onClick={() => {setName(food3); setShow(!show)}} sx={{ cursor: 'pointer', alignSelf:'center', backgroundImage: `url(${food3})`, width: '100%', height: '100%' ,backgroundSize: minPort ? '30vw 15vh' :  minLand ? '30vw 33vh' :larPort ? '30vw 14vh' : '30vw 30vh', ':hover': {'-webkit-filter': 'brightness(.9)', 'filter': 'brightness(.9)'}}}></CardMedia>
              </Box>
            </Box>

          </Box>
          <Box sx={{...column(),...{ background: 'none', width: '158vw', height: minPort ? '3vh' : larPort ? '3vh' : '6vh', marginBottom: '0px'}}}>
            <Box sx={{...row(),...{ background: brown[700], width: '158vw', height: '2vh'}}}></Box>
            <Box sx={{...row(),...{ background: 'linear-gradient(to right, transparent 70%, #5d4037 30%)', 'background-blend-mode': 'difference', 'background-size': minPort ? '13vw 7vw' : larPort ? '11vw 7vw' : '7vw 7vw', width: '158vw', height: '6vh'}}}></Box>
            <Box sx={{...row(),...{ background: brown[700], width: '158vw', height: '2vh'}}}></Box>
          </Box>

        </ScrollContainer>

        <Dialog
          sx={{ minHeight: minPort ? '70%' : 'none', maxHeight: minPort ? '70%' : 'none', minWidth: minPort ? '80vw' : 'none', maxWidth: minPort ? '80vw' : 'none', height: minPort ? '71%' : '71vh', width: minPort ? '100%' : 'none', display: 'flex', flexDirection: minPort ? 'row' : 'row', position: 'fixed', top: minPort ? '15vh' : '15vh', left: minPort ? '10vw' : '15vw' }}
          open={minLand || larPort || larLand ? show : false}
          onClick={() => {setShow(false)}}
          fullWidth={true}
          fullScreen={true}
        >
          <CardMedia sx={{ 'margin-block': minPort ? 'auto' : 'none', transform: minPort ? 'rotate(-90deg)' : 'none', display: 'flex', flexDirection: 'row', justifyItems: 'center' , backgroundImage: `url(${name})`, width: minPort ? '80vw' : '70vw', height: minPort ? '35vh' : '100vh', backgroundSize: minPort ? '78vw 30vh' : larPort ? '67vw 68vh' : '68vw 68vh', backgroundRepeat: 'no-repeat',}}></CardMedia>
        </Dialog>

      <Dialog
        open={minPort ? show : false}
        onClick={() => {setShow(false)}}
        sx={{ maxWidth: "100%", maxHeight: "100vh", '&::-webkit-scrollbar': {display: 'none'} }}
      >
        <DialogContent sx={{ 'justify-content': 'center', 'align-items': 'center', padding: '0vh 8vw 0vh 8vw', display: 'flex', 'flexDirection': 'row', background: 'white', height: 'calc((30vw - 64px) + (72vh - 64px))', overflow: "hidden", '&::-webkit-scrollbar': {display: 'none'} }}>
          <img
            style={{ width: 'calc(72vh - 64px)', height: '70vw', transform: 'rotate(-90deg)' , margin: '0vh 0vw 0vh 0vw'/* , '&::-webkit-scrollbar': {display: 'none'} */}}
            src={name}
            alt="project"
          />
        </DialogContent>
      </Dialog>

      <Box sx={{...row(),...as(),...{ background: 'none', minWidth: larPort ? '10vw' : larLand ? '10vw' : larPort ? '35vw' : '10vw', display: minLand ? 'none' : minPort ? 'none' : 'flex' }}}>
        <Typography sx={{...row(),...jc(),...as(),...noSelect(),...{color: '#FFFFFF', fontSize: larPort ? '2.5vh' : '1.5vw', top: '0.1vh', mixBlendMode: 'difference' }}}>{ english ? `Scroll Wheel Speed:????` : `Velocidad de Rueda de Desplazamiento:????` }</Typography>
        <FormControl >
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select
            sx={{color: '#FFFFFF', background: blue[500], height: larPort ? '5vh' : '6vh', width: larPort ? '11vw' : '4.0vw', fontSize: larPort ? '2vh': '1vw' }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={scrollSpeed}
            label="Scroll"
            onChange={(e) => setScrollSpeed(parseInt(e.target.value))}
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
