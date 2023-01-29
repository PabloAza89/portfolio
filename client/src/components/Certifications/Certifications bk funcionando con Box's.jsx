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

  //<Box className={s.container} >
  // <Box className={s.bubbles}>
  // <Box component="span" sx={{ display: 'flex', position: 'relative'}} >
  // '@keyframes spinRight': {'100%': {transform: 'rotate(360deg)'},'0%': {transform: 'rotate(0deg)'}}
  return (

      <Box sx={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden'}} >
        <Box component="span" sx={{ display: 'flex', position: 'relative',
          span: { position: 'relative', width: '30px', height: '30px', background: '#4fc3dc', margin: '0 4px', 'border-radius': '50%', 'box-shadow': '0 0 0 10px #4fc3dc44, 0 0 50px #4fc3dc, 0 0 100px #4fc3dc', animation: 'animate 15s linear infinite', 'animation-duration': 'calc(4s / 3)'},
          'span:nth-child(even)': { background: '#ff2d75', 'box-shadow': '0 0 0 10px #4fc3dc44, 0 0 50px #ff2d75, 0 0 100px #ff2d75'}
        }}>
          <Box component="span" sx={{"--i":"12"}}></Box>
          <Box component="span" sx={{"--i":"14"}}></Box>
          <Box component="span" ></Box>
          <Box component="span" ></Box>
          {/* {/* <span className='12;'></span> */}
          
          {/* <span className='--i:10;'></span>
          
          <span className='--i:23;'></span>
          <span className='--i:18;'></span>
          <span className='--i:16;'></span>
          <span className='--i:19;'></span> */}
     {/*      <span className='--i:20'></span>
          <span className='--i:22'></span>
          <span className='--i:25'></span>
          <span className='--i:18'></span>
          <span className='--i:21'></span>
          <span className='--i:15'></span>
          <span className='--i:13'></span>
          <span className='--i:26'></span>
          <span className='--i:17'></span>
          <span className='--i:13'></span>
          <span className='--i:28'></span> */}
        </Box>
      </Box>


  )
}

export default Certifications;