import { Box, Dialog, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useSelector } from 'react-redux';
import efSet from '../../images/efSet.png';
import fccCertJS from '../../images/fccCertJS.png';
import henry from '../../images/henry.png';
import attention from '../../images/attentionToDetail.png';
import loadingImage from '../../images/loadingImage.png';
import css from './CertificationsCSS.module.css';
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

  /* interface setLoadedI {
    id: number,
    loaded: boolean
  } */

 /*  const [ loaded, setLoaded ] = useState<any>(() => {
    let total: setLoadedI[] = []
    array.forEach((x:any) => total.push({id: array.indexOf(x), loaded: false}))
    return total
  }) */

 /*  const loadedUpdater = (index: number) => {
    let cloned = [...loaded]
    cloned[index] = {id: index, loaded: true}
    setLoaded(cloned)
  } */

  /* $(function(){
    s.hover({ array, loaded })
  }) */

  return (
    <div className={css.background}>
      <Bubbles />
      <div className={css.mainBox}>
        {array.map((e) => {
          return (
            <div
              key={e.title}
              className={css.card}
            >
              <div className={css.title}>{e.title}</div>
              <div className={css.boxMediaWrapper}>
                <a href={e.media} target="_blank" rel="noreferrer">
                  <img
                    className={css.boxMedia}
                    onLoad={() => {
                      let qq = document.getElementById(`toHide${e.id}`)
                      if (qq !== null) qq.style.display = "none"
                      let qqq = document.getElementById(`toHidee${e.id}`)
                      if (qqq !== null) qqq.style.display = "none"
                    }}
                    src={e.media}
                    onClick={() => {setName(e.media); setShow(!show)}}
                    alt=""
                  />
                </a>
                <img
                  id={`toHide${e.id}`}
                  className={css.placeholderBackground}
                  alt=""
                />
                <img
                  id={`toHidee${e.id}`}
                  className={css.placeholderAnimation}
                  src={loadingImage}
                  alt=""
                />
              </div>
              <div className={css.url}>
                <Link
                  className={css.anchor}
                  to={e.href}
                  target="_blank"
                >{e.url}</Link>
              </div>
            </div>)
        })}
      </div>
    </div>
  )
}

export default Certifications;