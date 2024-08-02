import { FormControl, MenuItem, Select } from '@mui/material/';
import { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import {
  food1, food2, food3, weatherify1, weatherify2, calculator1, calculator2,
  calculator3, calculator4, tictac1, tictac2, loadingImage
} from '../../images/images';
import css from './ProjectsCSS.module.css';
import GoToLinkButton from '../GoToLinkButton/GoToLinkButton';
import Modal from '../Modal/Modal';

function Projects() {

  const english = useSelector((state: { english:boolean }) => state.english)
  const [scrollSpeed, setScrollSpeed] = useState<any>(30)

  const [ heightDev, setHeightDev ] = useState<number>(window.innerHeight)
  const [ widthDev, setWidthDev ] = useState<number>(window.innerWidth)

  useEffect(() => {
    const autoHideOnResize = () => {
      let { innerHeight, innerWidth } = window
      setHeightDev(innerHeight);
      setWidthDev(innerWidth);
    }
    window.addEventListener('resize', autoHideOnResize);
  },[])

  function useHorizontalScroll() {
    const elRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
      const el:any = elRef.current;
      if (el) {
        const onWheel = (e:any) => {
          if (e.deltaY === 0) return;
          e.preventDefault();
          el.scrollTo({
            left: el.scrollLeft + e.deltaY * scrollSpeed,
            behavior: "smooth"
          });
        };
        el.addEventListener("wheel", onWheel);
        return () => el.removeEventListener("wheel", onWheel);
      }
    });
    return elRef;
  }

  useEffect(() => { // MOUSE GRAB & DRAG EFFECT ON MOUSE DEVICES
    const el = document.getElementById('sliderRollProjects');
    const children = document.querySelector('[class*="ProjectsCSS_scroll"]')
    const parent = document.querySelector('[class*="ProjectsCSS_background"]')

    if (el !== null && children !== null && parent !== null) {
      const mouseEnterOnScore = () => {
        if (
          children.clientWidth > parent.clientWidth ||
          heightDev < 456
        ) el.style.cursor = 'grab'; // GRAB WHEN ENTER (MOUSEENTER)
        let pos = { left: 0, x: 0 };

        const mouseDownHandler = function (e: any) {
          el.style.cursor = 'grabbing';
          el.style.userSelect = 'none';
          pos = {
            left: el.scrollLeft,
            x: e.clientX,
          }
          if (
            children.clientWidth > parent.clientWidth ||
            heightDev < 456
          ) {
            el.addEventListener('mousemove', mouseMoveHandler)
            el.addEventListener('mouseup', mouseUpHandler)
          } else {
            el.removeEventListener('mousemove', mouseMoveHandler);
            el.removeEventListener('mouseup', mouseUpHandler);
            el.style.cursor = 'default';
          }
        }

        const mouseMoveHandler = function (e: any) { // HOW MUCH MOUSE HAS MOVED
          const dx = e.clientX - pos.x;
          el.scrollLeft = pos.left - dx;
        }

        const mouseUpHandler = function () {
          el.style.cursor = 'grab'
          el.style.removeProperty('user-select')
          el.removeEventListener('mousemove', mouseMoveHandler)
          el.removeEventListener('mouseup', mouseUpHandler)
        }

        el.addEventListener('mousedown', mouseDownHandler);
        el.addEventListener('mouseleave', function() {
          el.removeEventListener('mouseup', mouseUpHandler);
          el.removeEventListener('mousedown', mouseDownHandler)
          el.removeEventListener('mousemove', mouseMoveHandler);
          el.style.cursor = 'default'
        })
      }
      el.addEventListener("mouseenter", mouseEnterOnScore)

      return () => el.removeEventListener("mouseenter", mouseEnterOnScore)
    }
  }, [heightDev])

  let [ projectChosen, setProjectChosen ] = useState(`All Projects`)

  let preArray = [
    {
      title: `Android Calculator`,
      media: [ calculator1, calculator2, calculator3, calculator4 ],
      href: `https://github.com/PabloAza89/react-native-calculator`,
      type: `Android App`
    },
    {
      title: `Weatherify`,
      media: [ weatherify1, weatherify2 ],
      href: `https://pabloaza89.github.io/weather-app/`,
      type: `API Handle`
    },
    {
      title: `Foodify`,
      media: [ food1, food2, food3 ],
      href: `https://pabloaza89.github.io/PI-Food-GH/`,
      type: `Server Handle`
    },
    {
      title: `TicTacToe`,
      media: [ tictac1, tictac2 ],
      href: `https://pabloaza89.github.io/tictactoe/`,
      type: `Games`
    }
  ]

  let array =
    projectChosen === `All Projects` ?
    preArray :
    preArray.filter(e => e.type === projectChosen)

  const loadedUpdater = (id: any) => {
    let backgroundPH = document.getElementById(`backgroundPHProjects${id}`)
    if (backgroundPH !== null) backgroundPH.style.display = "none"
    let animationPH = document.getElementById(`animationPHProjects${id}`)
    if (animationPH !== null) animationPH.style.display = "none"
  }

  let linkBlocked = useRef(false)

  useEffect(() => { // MOUSE GRAB & DRAG EFFECT ON MOUSE DEVICES
    const el = document.getElementById('sliderBoxYProjects');
    if (el !== null) {
      const mouseEnterOnScoreY = () => {
        let pos = { top: 0, y: 0 };

        const mouseDownHandlerY = function (e: any) {
          pos = {
            top: el.scrollTop,
            y: e.clientY,
          }
          if (heightDev < 456) {
            el.addEventListener('mousemove', mouseMoveHandlerY)
            el.addEventListener('mouseup', mouseUpHandlerY)
          } else {
            el.removeEventListener('mousemove', mouseMoveHandlerY);
            el.removeEventListener('mouseup', mouseUpHandlerY);
            el.style.cursor = 'default';
          }
        }

        const mouseMoveHandlerY = function (e: any) { // HOW MUCH MOUSE HAS MOVED
          const dy = e.clientY - pos.y;
          el.scrollTop = pos.top - dy;
        }

        const mouseUpHandlerY = function () {
          el.style.removeProperty('user-select')
          el.removeEventListener('mousemove', mouseMoveHandlerY)
          el.removeEventListener('mouseup', mouseUpHandlerY)
        }

        el.addEventListener('mousedown', mouseDownHandlerY);
        el.addEventListener('mouseleave', function() {
          el.removeEventListener('mouseup', mouseUpHandlerY);
          el.removeEventListener('mousedown', mouseDownHandlerY)
          el.removeEventListener('mousemove', mouseMoveHandlerY);
        })
      }
      el.addEventListener("mouseenter", mouseEnterOnScoreY)

      return () => el.removeEventListener("mouseenter", mouseEnterOnScoreY)
    }
  }, [heightDev, widthDev])

  const timeoutProjects = useRef<ReturnType<typeof setTimeout>>();
  const autoHideProjects = () => {
    (document.getElementById(`buttonFlap`) as HTMLElement).click()
    clearTimeout(timeoutProjects.current)
  }

  useEffect(() => {
    let el = document.getElementById(`boxLower`)
    if (heightDev > 523) {
      if (el !== null && el.classList.length === 2) {
        (document.getElementById(`buttonFlap`) as HTMLElement).click()
      }
    }
  }, [heightDev])

  const handleClickFlap = () => {
    clearTimeout(timeoutProjects.current)
    let el = document.getElementById(`boxLower`)
    if (el !== null) {
      el.classList.toggle(css.boxLowerToggle);
    }
    if (el !== null && el.classList.length === 2) {
      clearTimeout(timeoutProjects.current)
      timeoutProjects.current = (setTimeout(autoHideProjects, 4000))
    }
  }

  const handleSelectChange = (item: string) => {
    let el = document.getElementById(`sliderRollProjects`)
    if (el !== null) el.scroll({ left: 0, behavior: 'smooth' })
    setProjectChosen(item)
  }

  const handleSelectFocus = () => {
    let el = document.getElementById(`boxLower`)
    if (el !== null && el.classList.length === 2) {
      clearTimeout(timeoutProjects.current)
      timeoutProjects.current = (setTimeout(autoHideProjects, 4000))
    }
  }

  const projectsBGHandler: () => void = () => {
    let el = (document.querySelector(`[class*="ProjectsCSS_background"]`) as HTMLElement)
    if (el !== null) document.documentElement.style.setProperty("--diff", `${el.offsetWidth - el.clientWidth}`);
  }

  useEffect(() => {
    projectsBGHandler()
    window.addEventListener('resize', projectsBGHandler);
    return () => window.removeEventListener('resize', projectsBGHandler);
  },[])

  window.addEventListener('load', () => projectsBGHandler())

  

  const [ showModal, setShowModal ] = useState(false)
  const [ imageIndex, setImageIndex ] = useState(0)

  window.onclick = function(e) {


    let modalDiv = document.getElementById('modalBackground');

    if (e.target === modalDiv) {
      //modal.style.display = "none";
      //console.log("ACAAA")
      setShowModal(false)
    }
  }


  return (
    <div
      className={css.background}
      id={`sliderBoxYProjects`}
    >
      <Select
        size="small"
        className={css.selectType}
        value={projectChosen}
        onChange={(e: any) => handleSelectChange(e.target.value)}
      >
        <MenuItem value={"All Projects"}>All Projects</MenuItem>
        <MenuItem value={"Android App"}>Android App</MenuItem>
        <MenuItem value={"API Handle"}>API Handle</MenuItem>
        <MenuItem value={"Server Handle"}>Server Handle</MenuItem>
        <MenuItem value={"Games"}>Games</MenuItem>
      </Select>

      <div className={css.projectsOuterContainer}>
        <div
          ref={useHorizontalScroll()}
          id={`sliderRollProjects`}
          className={css.mainContainer}
        >
          <div className={css.scroll}>
            <div className={css.solid} />
            <div className={css.intercalated} />
            <div className={css.solid} />

            <div className={css.centerStripe} >
              {array.map((e) => {
                return (
                  <div key={e.title} className={css.card}>
                    <div className={css.leftBar}></div>
                    <div className={css.titleAndMediaContainer}>
                      <div className={css.boxTitle}>
                        <div className={css.title}>{e.title}</div>
                        <div className={css.GoToLinkButtonContainer}>
                          <GoToLinkButton link={e.href} />
                        </div>
                      </div>
                      <div className={css.boxMedia}>
                        {
                          e.media.map((m,i) => {
                            return (
                              <div key={m} className={css.eachMedia}>
                                <a
                                  id={`anchorProjects`}
                                  draggable={false}
                                  className={css.anchor}
                                  href={m}
                                  target="_blank"
                                  rel="noreferrer"
                                  onClick={(e) => {
                                    if (linkBlocked.current) e.preventDefault()
                                    else return null
                                  }}
                                  onMouseDown={() => linkBlocked.current = false}
                                  onDragStart={() => linkBlocked.current = true}
                                >
                                  <img
                                    onDragStart={(e) => e.preventDefault()}
                                    className={css.cardMedia}
                                    onLoad={() => loadedUpdater(array.map(e => e.media).flat().indexOf(m))}
                                    alt=""
                                    src={m}
                                    //onClick={() => setShowModal(true)}
                                    //onClick={() => console.log("CLIEKEDC")}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      setShowModal(true);
                                      //console.log(e.target)
                                      //console.dir(e)
                                      //console.log(array.map(e => e.media).flat().indexOf(m))
                                      setImageIndex(array.map(e => e.media).flat().indexOf(m))
                                    }}
                                  />
                                </a>
                                <img
                                  id={`backgroundPHProjects${array.map(e => e.media).flat().indexOf(m)}`}
                                  className={css.placeholderBackground}
                                  alt=""
                                />
                                <img
                                  id={`animationPHProjects${array.map(e => e.media).flat().indexOf(m)}`}
                                  src={loadingImage}
                                  className={css.placeholderAnimation}
                                  alt=""
                                />
                                <div className={css.betweenBar} />
                              </div>
                            )
                          })
                        }
                      </div>
                    </div>
                  </div>
              )})}
            </div>
            <div className={css.solid} />
            <div className={css.intercalated} />
            <div className={css.solid} />
          </div>
        </div>

        <div
          className={css.boxLowerContainer}
        >
          <div
            id={`boxLower`}
            className={css.boxLower}
          >
            <button
              id={`buttonFlap`}
              tabIndex={-1}
              onClick={() => handleClickFlap()}
              className={css.flap}>
            </button>
            <div className={css.textContainer}>
              {
                english ?
                `Scroll Wheel Speed` :
                `Velocidad de Rueda de Desplazamiento`
              }
            </div>
            <FormControl
              size="small"
              className={css.formControl}
            >
              <Select
                className={css.select}
                value={scrollSpeed}
                label="Scroll"
                sx={{ '& .MuiSelect-select': { textOverflow: 'clip' } }}
                onChange={(e) => setScrollSpeed(parseInt(e.target.value))}
                onFocus={() => handleSelectFocus()}
              >
                <MenuItem value={10}>1x</MenuItem>
                <MenuItem value={30}>2x</MenuItem>
                <MenuItem value={50}>3x</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>

      { showModal && <Modal images={array.map(e => e.media).flat()} imageIndex={imageIndex} setShowModal={setShowModal} /> }

    </div>
  )
}

export default Projects;