import React, { useState , useRef, useEffect} from 'react';
import {Box, Button,CardMedia, Typography , Dialog} from '@mui/material';
import { Link } from "react-router-dom";
import fccCertJS from '../../images/fccCertJS.png';
import efSet from '../../images/efSet.png';
import henry from '../../images/henry.png';
import ForwardIcon from '@mui/icons-material/Forward';
import { grey , blue , cyan, lime, brown, red} from '@mui/material/colors';
import { row, column, jc , as, noSelect }from '../../Styles/Styles'
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import BackButton from '../BackButton/BackButton';

function Certifications() {

  const english = useSelector( state => state.english )

  const [show, setShow] = useState(false)
  const [name, setName] = useState("")
  
  // <Box sx={{...row(),...jc(),...{ justifyItems: 'center', width: '80vw', height: '80vh' , background: 'linear-gradient(110deg, #fdcd3b 60%, #ffed4b 60%)'}}}>

  return (
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '93vh', width: '97vw', backgroundColor: 'none' ,overflow: 'hidden'}}>
        <Box component="span" sx={{ display: 'flex', position: 'relative',
          span: { position: 'relative', width: '30px', height: '30px', background: '#4fc3dc', margin: '0 4px', 'border-radius': '50%', 'box-shadow': '0 0 0 10px #4fc3dc44, 0 0 50px #4fc3dc, 0 0 100px #4fc3dc', animation: `animate 15s linear infinite`, '@keyframes animate': {'0%': {transform: 'translateY(100vh) scale(0)'}, '100%': {transform: 'translateY(-10vh) scale(1)' }}},
          'span:nth-child(even)': { background: '#ff2d75', 'box-shadow': '0 0 0 10px #4fc3dc44, 0 0 50px #ff2d75, 0 0 100px #ff2d75'}
        }}>
          <Box component="span" style={{'animation-duration': `calc(125s / 11)`}}></Box>
          <Box component="span" style={{'animation-duration': `calc(125s / 12)`}}></Box>
          <Box component="span" style={{'animation-duration': `calc(125s / 24)`}}></Box>
          <Box component="span" style={{'animation-duration': `calc(125s / 10)`}}></Box>
          <Box component="span" style={{'animation-duration': `calc(125s / 14)`}}></Box>
          <Box component="span" style={{'animation-duration': `calc(125s / 23)`}}></Box>
          <Box component="span" style={{'animation-duration': `calc(125s / 18)`}}></Box>
          <Box component="span" style={{'animation-duration': `calc(125s / 16)`}}></Box>
          <Box component="span" style={{'animation-duration': `calc(125s / 19)`}}></Box>
          <Box component="span" style={{'animation-duration': `calc(125s / 20)`}}></Box>
          <Box component="span" style={{'animation-duration': `calc(125s / 22)`}}></Box>
          <Box component="span" style={{'animation-duration': `calc(125s / 25)`}}></Box>
          <Box component="span" style={{'animation-duration': `calc(125s / 18)`}}></Box>
          <Box component="span" style={{'animation-duration': `calc(125s / 21)`}}></Box>
          <Box component="span" style={{'animation-duration': `calc(125s / 15)`}}></Box>
          <Box component="span" style={{'animation-duration': `calc(125s / 13)`}}></Box>
          <Box component="span" style={{'animation-duration': `calc(125s / 26)`}}></Box>
          <Box component="span" style={{'animation-duration': `calc(125s / 17)`}}></Box>
          <Box component="span" style={{'animation-duration': `calc(125s / 13)`}}></Box>
          <Box component="span" style={{'animation-duration': `calc(125s / 22.5)`}}></Box>
          <Box component="span" style={{'animation-duration': `calc(125s / 24.5)`}}></Box>
          <Box component="span" style={{'animation-duration': `calc(125s / 12.5)`}}></Box>
          <Box component="span" style={{'animation-duration': `calc(125s / 15.5)`}}></Box>
          <Box component="span" style={{'animation-duration': `calc(125s / 28)`}}></Box>
          <Box component="span" style={{'animation-duration': `calc(125s / 20.5)`}}></Box> {/*  */}
          <Box component="span" style={{'animation-duration': `calc(125s / 11)`}}></Box>
          <Box component="span" style={{'animation-duration': `calc(125s / 12)`}}></Box>
          <Box component="span" style={{'animation-duration': `calc(125s / 24)`}}></Box>
          <Box component="span" style={{'animation-duration': `calc(125s / 10)`}}></Box>
          <Box component="span" style={{'animation-duration': `calc(125s / 14)`}}></Box>
          <Box component="span" style={{'animation-duration': `calc(125s / 23)`}}></Box>
          <Box component="span" style={{'animation-duration': `calc(125s / 18)`}}></Box>
          <Box component="span" style={{'animation-duration': `calc(125s / 16)`}}></Box>
          <Box component="span" style={{'animation-duration': `calc(125s / 19)`}}></Box>
          <Box component="span" style={{'animation-duration': `calc(125s / 20)`}}></Box>
          <Box component="span" style={{'animation-duration': `calc(125s / 22)`}}></Box>
          <Box component="span" style={{'animation-duration': `calc(125s / 25)`}}></Box>
          <Box component="span" style={{'animation-duration': `calc(125s / 18)`}}></Box>
          <Box component="span" style={{'animation-duration': `calc(125s / 21)`}}></Box>
          <Box component="span" style={{'animation-duration': `calc(125s / 15)`}}></Box>
          <Box component="span" style={{'animation-duration': `calc(125s / 13)`}}></Box>
          <Box component="span" style={{'animation-duration': `calc(125s / 26)`}}></Box>
          <Box component="span" style={{'animation-duration': `calc(125s / 17)`}}></Box>
          <Box component="span" style={{'animation-duration': `calc(125s / 13)`}}></Box>
          <Box component="span" style={{'animation-duration': `calc(125s / 22.5)`}}></Box>
          <Box component="span" style={{'animation-duration': `calc(125s / 24.5)`}}></Box>
          <Box component="span" style={{'animation-duration': `calc(125s / 12.5)`}}></Box>
          <Box component="span" style={{'animation-duration': `calc(125s / 15.5)`}}></Box>
          <Box component="span" style={{'animation-duration': `calc(125s / 28)`}}></Box>
        </Box>

        <BackButton />

        <Box sx={{...row(),...jc(),...{ justifyItems: 'center', width: '80vw', height: '80vh' , background: 'none'}}}>
          <Box sx={{...column(),...jc(),...as(),...{ backgroundColor: 'none', width: '29vw', height: '39vh'}}}>
            <Typography sx={{...noSelect(),...as(),...{color: '#FFFFFF', paddingRight: '0vw', paddingTop: '0vw',fontSize: '1.6rem'}}}>JavaScript Algorithms and Data Structures</Typography>
            <CardMedia onClick={(e) => setName(fccCertJS) + setShow(!show)} sx={{ alignSelf:'center', backgroundImage: `url(${fccCertJS})`, width: '15vw', height: '15vw' ,backgroundSize: '15vw 15vh', ':hover': {'-webkit-filter': 'brightness(.9)', 'filter': 'brightness(.9)'}}}></CardMedia>
            <Typography sx={{...noSelect(),...as(),...{color: '#FFFFFF', paddingRight: '0vw', paddingTop: '0vw',fontSize: '1.4rem'}}}><a style={{ textDecoration: 'none' , color: '#FFFFFF', 'mix-blend-mode': 'difference'}} href="https://www.freecodecamp.org/certification/fcc4dacfa43-3a86-4f27-9ef6-4b74318b8b7a/javascript-algorithms-and-data-structures" target="_blank" rel="noopener noreferrer">https://freecodecamp.org</a></Typography>

          </Box>
          <Box sx={{...column(),...jc(),...as(),...{ backgroundColor: 'none', width: '29vw', height: '39vh'}}}>
            <Typography sx={{...noSelect(),...as(),...{color: '#FFFFFF', paddingRight: '0vw', paddingTop: '0vw',fontSize: '1.6rem'}}}>Full Stack Web Developer</Typography>
            <CardMedia onClick={(e) => setName(henry) + setShow(!show)} sx={{ alignSelf:'center', backgroundImage: `url(${henry})`, width: '15vw', height: '15vw' ,backgroundSize: '15vw 15vh', ':hover': {'-webkit-filter': 'brightness(.9)', 'filter': 'brightness(.9)'}}}></CardMedia>
            <Typography sx={{...noSelect(),...as(),...{color: '#FFFFFF', paddingRight: '0vw', paddingTop: '0vw',fontSize: '1.4rem'}}}><a style={{ textDecoration: 'none' , color: '#FFFFFF', 'mix-blend-mode': 'difference'}} href="https://certificates.soyhenry.com/cert?id=19eebce3-e6a8-4e6f-ac26-7e1b28852f54" target="_blank" rel="noopener noreferrer">https://soyhenry.com</a></Typography>
          </Box>
          <Box sx={{...column(),...jc(),...as(),...{ backgroundColor: 'none', width: '29vw', height: '39vh'}}}>
            <Typography sx={{...noSelect(),...as(),...{color: '#FFFFFF', paddingRight: '0vw', paddingTop: '0vw',fontSize: '1.6rem', 'mix-blend-mode': 'difference'}}}>English B2 (Upper Intermediate)</Typography>
            <CardMedia onClick={(e) => setName(efSet) + setShow(!show)} sx={{ alignSelf:'center', backgroundImage: `url(${efSet})`, width: '15vw', height: '15vw' ,backgroundSize: '15vw 15vh', ':hover': {'-webkit-filter': 'brightness(.9)', 'filter': 'brightness(.9)'}}}></CardMedia>
            <Typography sx={{...noSelect(),...as(),...{color: '#FFFFFF', paddingRight: '0vw', paddingTop: '0vw',fontSize: '1.4rem'}}}><a style={{ textDecoration: 'none' , color: '#FFFFFF', 'mix-blend-mode': 'difference'}} href="https://www.efset.org/cert/T92ez2" target="_blank" rel="noopener noreferrer">https://efset.org</a></Typography>
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