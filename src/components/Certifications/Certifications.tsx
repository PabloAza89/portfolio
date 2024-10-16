import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { efSet, fccCertJS, henry, attention, loadingImage } from '../../images/images';
import asdasd from '../../images/efSet.png';
import css from './CertificationsCSS.module.css';
import Bubbles from '../Bubbles/Bubbles';
import { arrayCertificationsI } from '../../interfaces/interfaces';

function Certifications() {

  const english = useSelector((state: {english:boolean}) => state.english)

  const array: arrayCertificationsI[] = [
    {
      id: 0,
      title: english ? `JavaScript Algorithms and Data Structures` : `Algoritmos Javascript y Estructuras de Datos`,
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

  const loadedUpdater = (id: any) => {
    let backgroundPH = document.getElementById(`backgroundPH${id}`)
    let animationPH = document.getElementById(`animationPH${id}`)
    if (backgroundPH !== null && animationPH !== null) {
      backgroundPH.style.display = "none";
      animationPH.style.display = "none"
    }
  }

  const certificationsBGHandler: () => void = () => {
    let el = (document.querySelector(`[class*="CertificationsCSS_mainBox"]`) as HTMLElement)
    if (el !== null) document.documentElement.style.setProperty("--diff", `${el.offsetWidth - el.clientWidth}`);
  }

  useEffect(() => {
    certificationsBGHandler()
    window.addEventListener('resize', certificationsBGHandler);
    return () => window.removeEventListener('resize', certificationsBGHandler);
  },[])

  window.addEventListener('load', () => certificationsBGHandler())

  return (
    <div className={css.background}>
      <Bubbles />
      <div className={css.mainBox}>
        {
          array.map((e) => {
            return (
              <div
                key={e.title}
                className={css.card}
              >
                <div className={css.title}>{e.title}</div>
                <div className={css.boxMediaWrapper}>
                  <a
                    draggable="false"
                    href={e.href}
                    target="_blank"
                    rel="noreferrer"
                    className={css.aaaasdsdas}
                    onLoad={(e) => {
                      //console.log(e.target)
                      //console.log("LOADED")
                      //console.dir(e.target)
                      //(e.target as HTMLImageElement).style.background = "yellow"
                      // @ts-ignore
                      (e.target as HTMLElement).style.contentVisibility = 'visible'
                    }}
                    children={
                    
                        <img
                          draggable="false"
                          className={css.boxMedia}
                          //onLoad={() => loadedUpdater(e.id)}
                          style={{ backgroundImage: asdasd }}
                          
                          src={e.media}
                          alt=""
                        />
                      
                    }
                  />

              {/*     <img
                    id={`backgroundPH${e.id}`}
                    className={css.placeholderBackground}
                    alt=""
                  />
                  <img
                    id={`animationPH${e.id}`}
                    className={css.placeholderAnimation}
                    src={loadingImage}
                    alt=""
                  /> */}
                </div>
                <a
                  className={`${css.url} ${css.anchor}`}
                  href={e.href}
                  target="_blank"
                  rel="noreferrer"
                  children={e.url}
                />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Certifications;