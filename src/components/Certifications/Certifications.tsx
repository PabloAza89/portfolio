import { Box, Dialog, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useSelector } from 'react-redux';
import efSet from '../../images/efSet.png';
import fccCertJS from '../../images/fccCertJS.png';
import henry from '../../images/henry.png';
import attention from '../../images/attentionToDetail.png';
import loadingImage from '../../images/loadingImage.png';
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
    media: any,
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
    },
    {
      id: 3,
      title: english ? `Attention to Detail (Top 25%)` : `Atención al Detalle (Top 25%)`,
      media: attention,
      href: `https://www.testdome.com/certificates/9c613824828745bcad442dd13b8ec813`,
      url: `https://testdome.com`
    }
  ]

  interface setLoadedI {
    id: number,
    loaded: boolean
  }

  const [ loaded, setLoaded ] = useState<any>(() => {
    let total: setLoadedI[] = []
    array.forEach((x:any) => total.push({id: array.indexOf(x), loaded: false}))
    return total
  })

  const loadedUpdater = (index: number) => {
    let cloned = [...loaded]
    cloned[index] = {id: index, loaded: true}
    setLoaded(cloned)
  }

  $(function(){
    s.hover({ array, loaded })
  })

  return (
    <Box sx={s.background}>
      <Bubbles />
      <Box sx={s.mainBox({ minPort, minLand, medPort, medLand, larPort, larLand })}>
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
                sx={s.boxMediaWrapper({ darkMode, minPort, minLand, medPort, medLand, larPort })}
              >
                <a href={e.media} target="_blank" rel="noreferrer">
                <Box
                  className={`imageClass${e.id}`}
                  component="img"
                  onLoad={() => loadedUpdater(array.map(r => r.media).indexOf(e.media))}
                  src={e.media}
                  onClick={() => {setName(e.media); setShow(!show)}}
                  sx={s.boxMedia({ darkMode, minPort, minLand, medPort, medLand, larPort })}
                />
                </a>
                {/* <a href={e.media} target="_blank">
                  <img width="220" height="250" border="0" align="center"  src={e.media}/>
                </a> */}
                <Box
                  component="img"
                  sx={s.placeholderBackground({ darkMode, loaded: loaded[array.map(r => r.media).indexOf(e.media)].loaded, minPort, minLand, medPort, medLand })}
                />
                <Box
                  component="img"
                  src={loadingImage}
                  sx={s.placeholderAnimation({ loaded: loaded[array.map(r => r.media).indexOf(e.media)].loaded, minPort, minLand, medPort, medLand })}
                />
              </Box>
              <Typography
                className={`urlClass${e.id}`}
                sx={s.url({ minPort, minLand, medPort, medLand, larPort })}
              >
                <Link
                  style={s.anchor({ loaded:loaded[array.map(r => r.media).indexOf(e.media)].loaded })}
                  to={e.href}
                  target="_blank"
                >{e.url}</Link>
              </Typography>
            </Box>)
        })}
      </Box>

      {/* <Dialog
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
      </Dialog> */}
    </Box>
  )
}

export default Certifications;