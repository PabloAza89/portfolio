import React, { useState } from 'react';
import { Box, CardMedia, Typography, Dialog } from '@mui/material';
import fccCertJS from '../../images/fccCertJS.png';
import efSet from '../../images/efSet.png';
import henry from '../../images/henry.png';
import { useSelector } from 'react-redux';
import BackButton from '../BackButton/BackButton';
import Bubbles from '../Bubbles/Bubbles';
import { background, boxUpper, card, anchor, title, media, url, dialog, dialogMedia } from '../../styles/CertificationsSX';
import {
  MinPort, MedPort, MedLand,
  CurrentHeight, bgRed, StaticRefWidth, StaticRefHeight,
  MaxStaticReference, flex, column, row, bgNone, Width, Height,
  PercentageResizedHeight, PercentageResizedWidth
} from '../../styles/CommonsSX';

function Certifications() {

  const english = useSelector((state: {english:boolean}) => state.english)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)

  const [show, setShow] = useState(false)
  const [name, setName] = useState("")

  return (
    <Box sx={ background }>
      <Bubbles />
      <BackButton />
      <Box sx={boxUpper}>
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
              <Box sx={card}>
                <Typography sx={title}>{e.title}</Typography>
                <CardMedia onClick={() => {setName(e.media); setShow(!show)}} sx={media(e.media)} />
                <Typography sx={url}>
                  <a style={anchor()}
                    href={e.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >{e.url}</a>
                </Typography>
              </Box>)
        })}
      </Box>

      <Dialog
        sx={dialog}
        open={minLand || larPort || larLand ? show : false}
        onClick={() => setShow(false)}
        fullWidth={true}
        fullScreen={true}
      >
        <CardMedia sx={dialogMedia(name)}></CardMedia>
      </Dialog>

    </Box>
  )
}

export default Certifications;