import { Box, Dialog, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useSelector } from 'react-redux';
import efSet from '../../images/efSet.png';
import fccCertJS from '../../images/fccCertJS.png';
import henry from '../../images/henry.png';
import * as s from '../../styles/CertificationsSX';
import Bubbles from '../Bubbles/Bubbles';
import $ from 'jquery';

function Certifications() {

  const english = useSelector((state: {english:boolean}) => state.english)
  const darkMode = useSelector( (state: {darkMode:boolean}) => state.darkMode)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)

  const [show, setShow] = useState(false)
  const [name, setName] = useState("")

 interface arrayI {
    id: number,
    title: string,
    media: string,
    href: string,
    url: string
  }

  const array: arrayI[] =
  [
    {
      id: 0,
      title: english ? `JavaScript Algorithms and Data Structures` : `Algoritmos Javascript y Estructura de Datos`,
      media: fccCertJS,
      href: `https://www.freecodecamp.org/certification/fcc4dacfa43-3a86-4f27-9ef6-4b74318b8b7a/javascript-algorithms-and-data-structures`,
      url: `https://freecodecamp.org`
    },
    {
      id: 1,
      title: english ? `Full Stack Web Developer` : `Desarrollador Web Full Stack`,
      media: henry,
      href: `https://certificates.soyhenry.com/cert?id=19eebce3-e6a8-4e6f-ac26-7e1b28852f54`,
      url: `https://soyhenry.com`
    },
    {
      id: 2,
      title: english ? `English B2 (Upper Intermediate)` : `Inglés B2 (Intermedio Superior)`,
      media: efSet,
      href: `https://www.efset.org/cert/T92ez2`,
      url: `https://efset.org`
    }
  ]

  $(function(){
    s.hover(array)
  })

  return (
    <Box sx={s.background}>
      <Box sx={s.greyTop({ darkMode })} />
      <Box sx={s.greyLeft({ darkMode })} />
      <Box sx={s.topBottomHelper({ minPort, minLand, medPort, medLand })}></Box>
      <Bubbles />
      <Box sx={s.mainBox({ minPort, minLand, medPort, medLand, larPort, larLand })}>
        <Box sx={s.leftRightHelper({ minPort, minLand, medPort, medLand, larPort, larLand })}></Box>
        <Box sx={s.cardContainer({ minPort, minLand, medPort, medLand, larPort, larLand })}>
          {array.map((e) => {
            return (
              <Box
                className={`cardClass${e.id}`}
                key={e.title}
                sx={s.card({ minPort, minLand, medPort, medLand, larPort, larLand })}
              >
                <Typography
                  className={`titleClass${e.id}`}
                  sx={s.title({ minPort, minLand, medPort, medLand, larPort, larLand })}
                >{e.title}</Typography>
                <Box
                  className={`imageClass${e.id}`}
                  component="img"
                  src={e.media}
                  onClick={() => {setName(e.media); setShow(!show)}}
                  sx={s.boxMedia({ darkMode, minPort, minLand, medPort, medLand, larPort })}
                />
                <Typography
                  className={`urlClass${e.id}`}
                  sx={s.url({ minPort, minLand, medPort, medLand, larPort })}
                >
                  <Link
                    style={s.anchor()}
                    to={e.href}
                    target="_blank"
                  >{e.url}</Link>
                </Typography>
              </Box>)
          })}
        </Box>
        <Box sx={s.leftRightHelper({ minPort, minLand, medPort, medLand, larPort, larLand })}></Box>
      </Box>

      <Dialog
        open={show}
        onClick={() => {setShow(false)}}
        style={s.dialogStyle()}
        PaperProps={{sx: s.dialogPaper({ minPort, minLand, medPort, medLand, larPort })}}
      >
        <Box
          component="img"
          sx={s.dialogBox({ minPort, minLand, medPort, medLand, larPort })}
          src={name}
          alt="image"
        />
      </Dialog>
      <Box sx={s.topBottomHelper({ minPort, minLand, medPort, medLand })}></Box>

    </Box>
  )
}

export default Certifications;