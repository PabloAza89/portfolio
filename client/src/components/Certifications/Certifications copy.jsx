import React, { useState , useRef, useEffect} from 'react';
import {Box, Button,CardMedia, Typography , Dialog} from '@mui/material';
import { Link } from "react-router-dom";
import fccCertJS from '../../images/fccCertJS.png';
import efSet from '../../images/efSet.png';
import henry from '../../images/henry.png';
import ForwardIcon from '@mui/icons-material/Forward';
import { grey , blue , cyan, lime, brown, red} from '@mui/material/colors';
import { row, column, jc , as, noSelect }from '../../styles/styles.js'
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import s from "./Certifications.module.css";

function Certifications() {

  const english = useSelector( state => state.english )

  const [show, setShow] = useState(false)
  const [name, setName] = useState("")

  //background: linear-gradient(115deg, rgb(211, 255, 215) 0%, rgb(0, 0, 0) 100%), radial-gradient(90% 100% at 50% 0%, rgb(200, 200, 200) 0%, rgb(22, 0, 45) 100%), radial-gradient(100% 100% at 80% 0%, rgb(250, 255, 0) 0%, rgb(36, 0, 0) 100%), radial-gradient(150% 210% at 100% 0%, rgb(112, 255, 0) 0%, rgb(20, 175, 125) 0%, rgb(0, 10, 255) 100%), radial-gradient(100% 100% at 100% 30%, rgb(255, 77, 0) 0%, rgba(0, 200, 255, 1) 100%), linear-gradient(60deg, rgb(255, 0, 0) 0%, rgb(120, 86, 255) 100%);
//background-blend-mode: overlay, overlay, difference, difference, difference, normal;

  // JavaScript Algorithms and Data Structures
  // freecodecamp.org
  //https://www.freecodecamp.org/certification/fcc4dacfa43-3a86-4f27-9ef6-4b74318b8b7a/javascript-algorithms-and-data-structures
  //efset.org
  //https://www.efset.org/cert/T92ez2
  //English Certificate - B2 (Upper Intermediate)
  //https://certificates.soyhenry.com/cert?id=19eebce3-e6a8-4e6f-ac26-7e1b28852f54
  

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '93vh', width: '97vw', backgroundColor: 'none'}}>
      <Link style={{ textDecoration: 'none' }} to="/portfolio"><Button variant="contained"  sx={{position: 'absolute', top: '5vh', left: '5vh', maxWidth: '2vw', maxHeight: '2vw', minWidth: '2vw', minHeight: '2vw', justifyItems: 'center', alignContent: 'center', display: 'flex', flexDirection: 'column'}}><ForwardIcon sx={{transform: 'rotate(180deg)'}} /></Button></Link>
      {/* <Box sx={{...row(),...jc(),...as(),...{ backgroundColor: '#3C6478', width: '80vw', height: '80vh'}}}> */}
      <Box sx={{...row(),...jc(),...as(),...{ width: '80vw', height: '80vh' , background: 'linear-gradient(110deg, #fdcd3b 60%, #ffed4b 60%)'}}}>

        <Box sx={{...column(),...jc(),...as(),...{ backgroundColor: 'gray', width: '25vw', height: '25vh'}}}>
          <Typography sx={{...noSelect(),...as(),...{color: '#FFFFFF', paddingRight: '0vw', paddingTop: '0vw',fontSize: '1rem'}}}>JavaScript Algorithms and Data Structures</Typography>
          <CardMedia onClick={(e) => setName(fccCertJS) + setShow(!show)} sx={{ alignSelf:'center', backgroundImage: `url(${fccCertJS})`, width: '10vw', height: '10vw' ,backgroundSize: '10vw 10vh', ':hover': {'-webkit-filter': 'brightness(.9)', 'filter': 'brightness(.9)'}}}></CardMedia>
          <Typography sx={{...noSelect(),...as(),...{color: '#FFFFFF', paddingRight: '0vw', paddingTop: '0vw',fontSize: '1rem'}}}>https://freecodecamp.org</Typography>
        </Box>
        <Box sx={{...column(),...jc(),...as(),...{ backgroundColor: 'gray', width: '25vw', height: '25vh'}}}>
          <Typography sx={{...noSelect(),...as(),...{color: '#FFFFFF', paddingRight: '0vw', paddingTop: '0vw',fontSize: '1rem'}}}>Full Stack Web Developer</Typography>
          <CardMedia onClick={(e) => setName(henry) + setShow(!show)} sx={{ alignSelf:'center', backgroundImage: `url(${henry})`, width: '10vw', height: '10vw' ,backgroundSize: '10vw 10vh', ':hover': {'-webkit-filter': 'brightness(.9)', 'filter': 'brightness(.9)'}}}></CardMedia>
          <Typography sx={{...noSelect(),...as(),...{color: '#FFFFFF', paddingRight: '0vw', paddingTop: '0vw',fontSize: '1rem'}}}>https://soyhenry.com</Typography>
        </Box>
        <Box /* className={s.test} */ sx={{...column(),...jc(),...as(),...{ backgroundColor: 'gray', width: '25vw', height: '25vh'}}}>
          <Typography sx={{...noSelect(),...as(),...{color: '#FFFFFF', paddingRight: '0vw', paddingTop: '0vw',fontSize: '1rem'}}}>English Certificate - B2 (Upper Intermediate)</Typography>
          <CardMedia onClick={(e) => setName(efSet) + setShow(!show)} sx={{ alignSelf:'center', backgroundImage: `url(${efSet})`, width: '10vw', height: '10vw' ,backgroundSize: '10vw 10vh', ':hover': {'-webkit-filter': 'brightness(.9)', 'filter': 'brightness(.9)'}}}></CardMedia>
          <Typography sx={{...noSelect(),...as(),...{color: '#FFFFFF', paddingRight: '0vw', paddingTop: '0vw',fontSize: '1rem'}}}>https://efset.org</Typography>
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