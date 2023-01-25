import React, { useState , useRef, useEffect} from 'react';
import {Box, Button,CardMedia, Typography} from '@mui/material';
import { BrowserRouter, Navigate, Route, Routes , Link, NavLink} from "react-router-dom";
import weatherify1 from '../../images/weatherify1.png';
import weatherify2 from '../../images/weatherify2.png';
import food1 from '../../images/food1.png';
import food2 from '../../images/food2.png';
import food3 from '../../images/food3.png';
import ForwardIcon from '@mui/icons-material/Forward';
import Dialog from '@mui/material/Dialog';
import { DialogTitle } from '@mui/material';
import ReplyIcon from '@mui/icons-material/Reply';
import { grey , blue , cyan, lime} from '@mui/material/colors';
import { row, column, jc , as}from '../../styles/styles.js'
/* import styled from "@emotion/styled"; */
/* import { styled } from '@material-ui/styles'; */
/* import { styled } from '@mui/material/styles'; */
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



function Projects() {

  const [show, setShow] = useState(false)
  const [name, setName] = useState("")
  const [scrollSpeed, setScrollSpeed] = useState(30)
  /* let scrollSpeed = 30 */
  
  const [scrollName, setScrollName] = useState("3x");
  
  /* const handleChange = (event) => {
    setScroll(event.target.value);
    console.log("SCROLL", scroll)
    console.log("event", event.target.value)
  }; */
  /* const StyledBox = styled(Box) */

 /*  const StyledBox= styled(Box)({
    
}); */

  let aaa = 200

  function useHorizontalScroll() {
    const elRef = useRef();
    useEffect(() => {
      const el = elRef.current;
      if (el) {
        const onWheel = e => {
          if (e.deltaY == 0) return;
          e.preventDefault();
          console.log("SCROLL VALUE", scrollSpeed)
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
    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '93vh', width: '97vw', backgroundColor: 'none'}}>
      <Link style={{ textDecoration: 'none' }} to="/portfolio"><Button variant="contained"  sx={{position: 'absolute', top: '5vh', left: '5vh', maxWidth: '2vw', maxHeight: '2vw', minWidth: '2vw', minHeight: '2vw', justifyItems: 'center', alignContent: 'center', display: 'flex', flexDirection: 'column'}}><ForwardIcon sx={{transform: 'rotate(180deg)'}} /></Button></Link>
      {/* <StyledBox sx={{...row(),...{background:'blue'}}}> */}
      {/* <StyledBox onScroll={e => console.log(e.currentTarget.scrollLeft)} style={{ overflow: "auto" }} sx={{...row(),...{background:'blue'}}}> */}
      <Box /* onScroll={e => setScroll(e.currentTarget.scrollLeft)} */ ref={useHorizontalScroll()} style={{ overflow: "auto" }} sx={{...row(),...{background:'blue'}}}>
        <Box sx={{...column(),...{ marginLeft: '1vw' , marginTop: '1vh', background: 'red'}}}>
          <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '1vw'}}>
            <Typography sx={{ color: '#FFFFFF', fontSize: '3rem'}}>Weather App</Typography>
            <a href="https://pabloaza89.github.io/weather-app/" target="_blank" rel="noopener noreferrer"><Button variant="contained"  sx={{position: 'relative', left: '1vw', maxWidth: '2vw', maxHeight: '2vw', minWidth: '2vw', minHeight: '2vw', justifyItems: 'center', alignContent: 'center', display: 'flex', flexDirection: 'column'}}><ReplyIcon sx={{transform: 'scaleX(-1)'}} /></Button></a>
          </Box>      
          <Box sx={{background: lime[400], height: '32vh', width: '62vw', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}} >
            <CardMedia onClick={(e) => setName(weatherify1) + setShow(!show)} sx={{ alignSelf:'center', backgroundImage: `url(${weatherify1})`, width: '100%', height: '100%' ,backgroundSize: '98%'}}></CardMedia>
            <CardMedia onClick={(e) => setName(weatherify2) + setShow(!show)} sx={{ alignSelf:'center', backgroundImage: `url(${weatherify2})`, width: '100%', height: '100%' ,backgroundSize: '98%'}}></CardMedia>
          </Box>
        </Box>

        <Box sx={{...column(),...{ marginLeft: '1vw' , marginTop: '1vh', background: 'red'}}}>
          <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '1vw'}}>
            <Typography sx={{ color: '#FFFFFF', fontSize: '3rem'}}>Food App</Typography>
            <a href="https://pabloaza89.github.io/PI-Food-GH/" target="_blank" rel="noopener noreferrer"><Button variant="contained"  sx={{position: 'relative', left: '1vw', maxWidth: '2vw', maxHeight: '2vw', minWidth: '2vw', minHeight: '2vw', justifyItems: 'center', alignContent: 'center', display: 'flex', flexDirection: 'column'}}><ReplyIcon sx={{transform: 'scaleX(-1)'}} /></Button></a>
          </Box>      
          <Box sx={{background: lime[400], height: '32vh', width: '93vw', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}} >
            <CardMedia onClick={(e) => setName(food1) + setShow(!show)} sx={{ alignSelf:'center', backgroundImage: `url(${food1})`, width: '100%', height: '100%' ,backgroundSize: '98%'}}></CardMedia>
            <CardMedia onClick={(e) => setName(food2) + setShow(!show)} sx={{ alignSelf:'center', backgroundImage: `url(${food2})`, width: '100%', height: '100%' ,backgroundSize: '98%'}}></CardMedia>
            <CardMedia onClick={(e) => setName(food3) + setShow(!show)} sx={{ alignSelf:'center', backgroundImage: `url(${food3})`, width: '100%', height: '100%' ,backgroundSize: '98%'}}></CardMedia>
          </Box>
        </Box>
      </Box>

        <Dialog
              sx={{height: '71vh',  display: 'flex', flexDirection: 'row', position: 'fixed', justifyContent: 'center', top: '15vh'}}
              open={show}
              onClick={() => setShow(false)}
              fullWidth={true}
              fullScreen={true}
            >
                <CardMedia sx={{ display: 'flex', flexDirection: 'row', justifyItems: 'center', backgroundImage: `url(${name})`, width: '70vw', height: '100vw' ,backgroundSize: '98%', backgroundRepeat: 'no-repeat',}}></CardMedia>

            </Dialog>

      <Box sx={{...row(),...jc(),...{ backgroundColor: 'blue'}}}>
        <Typography sx={{...row(),...jc(),...as(),...{color: '#FFFFFF'}}}>Scroll Speed:</Typography>
        <Box sx={{...row(),...{  backgroundColor: 'blue', minWidth: '4vw' , background: 'gray'}}}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label"></InputLabel>
            <Select
              
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={scrollSpeed}
              label="Scroll"
              onChange={function(e) {setScrollSpeed(e.target.value) ; setScrollName(e.target.value); console.log(scrollSpeed) ; console.log(scrollName)}}
              
              /* onChange={e => console.log(e.target.value)} */
            >
              <MenuItem value={10} >1x</MenuItem>
              <MenuItem value={20} >2x</MenuItem>
              <MenuItem value={30} >3x</MenuItem>
              <MenuItem value={40} >4x</MenuItem>
              <MenuItem value={50} >5x</MenuItem>
              <MenuItem value={60} >6x</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>  
    </Box>
  )
}

export default Projects;