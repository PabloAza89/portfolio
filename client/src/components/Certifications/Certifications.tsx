import React, { useState } from 'react';
import { Box, CardMedia, Typography, Dialog } from '@mui/material';
import fccCertJS from '../../images/fccCertJS.png';
import efSet from '../../images/efSet.png';
import henry from '../../images/henry.png';
import { useSelector } from 'react-redux';
import BackButton from '../BackButton/BackButton';
import Bubbles from '../Bubbles/Bubbles';
import CertificationsSX from '../../styles/CertificationsSX';
import {
   bgRed, flex, column, row, bgNone } from '../../styles/CommonsSX';

function Certifications() {

  const english = useSelector((state: {english:boolean}) => state.english)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)

  const [show, setShow] = useState(false)
  const [name, setName] = useState("")

  return (
    <Box sx={CertificationsSX().background}>
      <Bubbles />
      <BackButton />
      <Box sx={CertificationsSX().boxUpper}>
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
              <Box sx={CertificationsSX().card}>
                <Typography sx={CertificationsSX().title}>{e.title}</Typography>
                <CardMedia onClick={() => {setName(e.media); setShow(!show)}} sx={CertificationsSX().media(e.media)} />
                <Typography sx={CertificationsSX().url}>
                  <a style={CertificationsSX().anchor()}
                    href={e.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >{e.url}</a>
                </Typography>
              </Box>)
        })}
      </Box>

      <Dialog
        sx={CertificationsSX().dialog}
        open={minLand || larPort || larLand ? show : false}
        onClick={() => setShow(false)}
        fullWidth={true}
        fullScreen={true}
      >
        <CardMedia sx={CertificationsSX().dialogMedia(name)}></CardMedia>
      </Dialog>

    </Box>
  )
}

export default Certifications;