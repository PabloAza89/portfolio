import { Box, CardMedia, Dialog, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useSelector } from 'react-redux';
import efSet from '../../images/efSet.png';
import fccCertJS from '../../images/fccCertJS.png';
import henry from '../../images/henry.png';
import {
  background, boxUpper, card, anchor, dialogBox,
  title, media, url, dialogStyle, dialogPaper
} from '../../styles/CertificationsSX';
import Bubbles from '../Bubbles/Bubbles';

function Certifications() {

  const english = useSelector((state: {english:boolean}) => state.english)
  const currentWidth = useSelector((state: {currentWidth:number}) => state.currentWidth)
  const darkMode = useSelector( (state: {darkMode:boolean}) => state.darkMode)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)
  const staticRefWidth = useSelector((state: {staticRefWidth:number}) => state.staticRefWidth)
  const staticRefHeight = useSelector((state: {staticRefHeight:number}) => state.staticRefHeight)
  const maxStaticReference = useSelector((state: {maxStaticReference:number}) => state.maxStaticReference)
  const currentHeight = useSelector((state: {currentHeight:number}) => state.currentHeight)
  const percentageResizedHeight = useSelector((state: {percentageResizedHeight:number}) => state.percentageResizedHeight)
  const percentageResizedWidth = useSelector((state: {percentageResizedWidth:number}) => state.percentageResizedWidth)

  const [show, setShow] = useState(false)
  const [name, setName] = useState("")

  return (
    <Box sx={background}>
      <Bubbles />
      <Box sx={boxUpper({ minPort, minLand, larPort })}>
        {[{
            title: english ? `JavaScript Algorithms and Data Structures` : `Algoritmos Javascript y Estructura de Datos`,
            media: fccCertJS,
            href: `https://www.freecodecamp.org/certification/fcc4dacfa43-3a86-4f27-9ef6-4b74318b8b7a/javascript-algorithms-and-data-structures`,
            url: `https://freecodecamp.org`
          },
          {
            title: english ? `Full Stack Web Developer` : `Desarrollador Web Full Stack`,
            media: henry,
            href: `https://certificates.soyhenry.com/cert?id=19eebce3-e6a8-4e6f-ac26-7e1b28852f54`,
            url: `https://soyhenry.com`
          },
          {
            title: english ? `English B2 (Upper Intermediate)` : `Inglés B2 (Intermedio Superior)`,
            media: efSet,
            href: `https://www.efset.org/cert/T92ez2`,
            url: `https://efset.org`
          }].map((e) => {
            return (
              <Box key={e.title} sx={card({ minPort, minLand, larPort })}>
                <Typography sx={title({ minPort, minLand, larPort })}>{e.title}</Typography>
                <CardMedia component="div" onClick={() => {setName(e.media); setShow(!show)}} sx={media({ url:e.media, minPort, minLand, larPort })} />
                <Typography sx={url({ minPort, minLand, larPort })}>
                  <Link style={anchor()}
                    to={e.href}
                    target="_blank"
                  >{e.url}</Link>
                </Typography>
              </Box>)
        })}
      </Box>

      <Dialog
        open={show}
        onClick={() => {setShow(false)}}
        style={dialogStyle()}
        PaperProps={
          dialogPaper({ minPort, minLand, medPort, medLand, larPort })
      }>
        <Box
          component="img"
          sx={dialogBox({ minPort, minLand, medPort, medLand, larPort })}
          src={name}
          alt="image"
        />
      </Dialog>

    </Box>
  )
}

export default Certifications;