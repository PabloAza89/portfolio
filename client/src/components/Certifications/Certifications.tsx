import React, { useState } from 'react';
import { Box, CardMedia, Typography, Dialog } from '@mui/material';
import fccCertJS from '../../images/fccCertJS.png';
import efSet from '../../images/efSet.png';
import henry from '../../images/henry.png';
import { jc , as }from '../../styles/styles'
import { useSelector } from 'react-redux';
import BackButton from '../BackButton/BackButton';
import Bubbles from '../Bubbles/Bubbles';
import DialogContent from '@mui/material/DialogContent';
import { background, boxUpper, card, title, media, url, anchor } from '../../styles/certifications';
import {
  minPort, minLand,
  medPort, medLand,
  larPort, larLand,
  currentHeight, bgRed,
  staticRefWidth, staticRefHeight,
  maxStaticReference,
  flex, column,
  row, bgNone,
} from '../../styles/commons';

function Certifications() {

  const english = useSelector((state: {english:boolean}) => state.english)

  const [show, setShow] = useState(false)
  const [name, setName] = useState("")

  return (
    
      <Box sx={ background }>
        <Bubbles />
        <BackButton />
        <Box sx={boxUpper}>
          <Box sx={card}>
            <Typography sx={title}>{ english ? `JavaScript Algorithms and Data Structures` : `Algoritmos Javascript y Estructura de Datos` }</Typography>
            <CardMedia onClick={() => {setName(fccCertJS); setShow(!show)}} sx={media} />
            <Typography sx={url}>
              <a style={anchor}
                href="https://www.freecodecamp.org/certification/fcc4dacfa43-3a86-4f27-9ef6-4b74318b8b7a/javascript-algorithms-and-data-structures"
                target="_blank"
                rel="noopener noreferrer"
              >https://freecodecamp.org</a>
            </Typography>
          </Box>

          <Box sx={card}>
            <Typography sx={title}>{ english ? `Full Stack Web Developer` : `Desarrollador Web Full Stack`}</Typography>
            <CardMedia onClick={() => {setName(henry); setShow(!show)}} sx={{
              alignSelf:'center',
              backgroundImage: `url(${henry})`,
              width: minPort ? '35vw' : minLand ? '32vw' : larPort ? '35vw' : '15vw',
              height: minLand ? '36vh' : '15vh',
              backgroundSize: minPort ? '35vw 15vh' : minLand ? '32vw 36vh' : larPort ? '35vw 15vh' : '15vw 15vh',
              ':hover': { '-webkit-filter': 'brightness(.9)', 'filter': 'brightness(.9)', cursor: 'pointer' }
            }} />
            <Typography sx={{...as(),...{
              color: '#FFFFFF',
              paddingRight: '0vw',
              paddingTop: '0vw',
              fontSize: minPort ? '' : minLand ? '' : larPort ? '2.35vw' : '1.15vw'
            }}}>
              <a style={{ textDecoration: 'none' , color: '#FFFFFF', mixBlendMode: 'difference'}}
                href="https://certificates.soyhenry.com/cert?id=19eebce3-e6a8-4e6f-ac26-7e1b28852f54"
                target="_blank"
                rel="noopener noreferrer"
              >https://soyhenry.com</a>
            </Typography>
          </Box>

          <Box sx={{...jc(),...as(),...{
            'text-align': 'center',
            'justify-content': 'space-evenly',
            background: 'none',
            width: minPort ? '87vw' : minLand ? '33vw' : larPort ? '59vw' : '29vw',
            height: minPort ? '25vh' : minLand ? '59vh' : larPort ? '39vh' : '39vh'
          }}}>
            <Typography sx={{...as(),...{
              background: 'none',
              height: minLand ? '13vh' : 'none',
              color: '#FFFFFF',
              paddingRight: '0vw',
              paddingTop: '0vw',
              fontSize: minPort ? '3.85vw' : minLand ? '2.1vw' : larPort ? '2.65vw' : '1.25vw',
              mixBlendMode: 'difference'
            }}}>{ english ? `English B2 (Upper Intermediate)` : `Inglés B2 (Intermedio Superior)`}</Typography>
            <CardMedia onClick={() => {setName(efSet); setShow(!show)}} sx={{
              alignSelf:'center',
              backgroundImage: `url(${efSet})`,
              width: minPort ? '35vw' : minLand ? '32vw' : larPort ? '35vw' : '15vw',
              height: minLand ? '36vh' : '15vh',
              backgroundSize: minPort ? '35vw 15vh' : minLand ? '32vw 36vh' : larPort ? '35vw 15vh' : '15vw 15vh',
              ':hover': { '-webkit-filter': 'brightness(.9)', 'filter': 'brightness(.9)', cursor: 'pointer' }
            }} />
            <Typography sx={{...as(),...{
              color: '#FFFFFF',
              paddingRight: '0vw',
              paddingTop: '0vw',
              fontSize: minPort ? '' : minLand ? '' : larPort ? '2.35vw' : '1.15vw'
            }}}>
              <a style={{ textDecoration: 'none' , color: '#FFFFFF', mixBlendMode: 'difference'}}
                href="https://www.efset.org/cert/T92ez2"
                target="_blank"
                rel="noopener noreferrer"
              >https://efset.org</a>
            </Typography>
          </Box>
        </Box>

        <Dialog
          sx={{height: '83vh', width: '60vw', backgroundColor: 'none', display: 'flex', position: 'absolute', justifySelf: 'center', top: '8vh', left: '14vw'}}
          open={minLand || larPort || larLand ? show : false}
          onClick={() => setShow(false)}
          fullWidth={true}
          fullScreen={true}
        >
          <CardMedia sx={{ display: 'flex', position: 'relative', flexDirection: 'column', justifyItems: 'center', backgroundImage: `url(${name})`, width: '72.1vw', height: '84vh' ,backgroundSize: '70vw 80vh', backgroundRepeat: 'no-repeat'}}></CardMedia>
        </Dialog>



        <Dialog
          open={minPort ? show : false}
          onClick={() => setShow(false)}
          sx={{ maxWidth: "100%", maxHeight: "100vh", '&::-webkit-scrollbar': {display: 'none'} }}
        >
          <DialogContent sx={{ 'justify-content': 'center', 'align-items': 'center', padding: '0vh 8vw 0vh 8vw', display: 'flex', 'flexDirection': 'row', background: 'white', height: 'calc((30vw - 64px) + (72vh - 64px))', overflow: "hidden", '&::-webkit-scrollbar': {display: 'none'} }}>
            <img
              style={{ width: 'calc(72vh - 64px)', height: '70vw', transform: 'rotate(-90deg)' , margin: '0vh 0vw 0vh 0vw', /* "&::-webkit-scrollbar": {display: 'none'} */}}
              src={name}
              alt="project"
            />
          </DialogContent>
        </Dialog>

      </Box>
  )
}

export default Certifications;