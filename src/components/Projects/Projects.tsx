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

  // useEffect(() => {
  //   const autoHideOnResize: any = () => {
  //     let { innerHeight, innerWidth } = window
  //     setHeightDev(innerHeight);
  //     setWidthDev(innerWidth);
  //   }
  //   window.addEventListener('resize', autoHideOnResize);
  //   //return () => window.removeEventListener('resize', autoHideOnResize);
  // },[])

  console.log("HHHHHHHHHHHHHHHHHHHHHHHHHHHH")

  function useHorizontalScroll() {
    const elRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => { // MOUSE GRAB & DRAG HORIZONTAL
    const scrollTarget = document.getElementById('scrollTarget');
    const elX = document.getElementById('sliderRollProjects');
    const elY = document.getElementById('sliderBoxYProjects');
    const children = document.querySelector('[class*="ProjectsCSS_scroll"]')
    const parent = document.querySelector('[class*="ProjectsCSS_background"]')

    if (
      scrollTarget !== null && elX !== null && elY !== null
      && children !== null && parent !== null
    ) {
      const mouseEnterOnX = () => {
        console.log("ENTERRRRRRRR")
        if (children.clientWidth > parent.clientWidth || parent.clientHeight < 360) elX.style.cursor = 'grab'; // GRAB WHEN ENTER (MOUSEENTER)
        //let pos = { left: 0, x: 0 };
        let pos = { left: 0, x: 0, top: 0, y: 0 };

        const mouseDownHandler = function (e: any) {
          elX.style.cursor = 'grabbing';
          elX.style.userSelect = 'none';
          pos = {
            left: elX.scrollLeft,
            x: e.clientX,
            top: elY.scrollTop,
            y: e.clientY,
          }
          if (children.clientWidth > parent.clientWidth || parent.clientHeight < 360) {
            elX.addEventListener('mousemove', mouseMoveHandler)
            elX.addEventListener('mouseup', mouseUpHandler)
          } else {
            elX.removeEventListener('mousemove', mouseMoveHandler);
            elX.removeEventListener('mouseup', mouseUpHandler);
            elX.style.cursor = 'default';
          }
        }

        const mouseMoveHandler = function (e: any) { // HOW MUCH MOUSE HAS MOVED
          const dx = e.clientX - pos.x;
          elX.scrollLeft = pos.left - dx;
          const dy = e.clientY - pos.y;
          elY.scrollTop = pos.top - dy;
        }

        const mouseUpHandler = function () {
          elX.style.cursor = 'grab'
          elX.style.removeProperty('user-select')
          elX.removeEventListener('mousemove', mouseMoveHandler)
          elX.removeEventListener('mouseup', mouseUpHandler)
        }

        elX.addEventListener('mousedown', mouseDownHandler);
        scrollTarget.addEventListener('mouseleave', function() {
          elX.removeEventListener('mouseup', mouseUpHandler);
          elX.removeEventListener('mousedown', mouseDownHandler)
          elX.removeEventListener('mousemove', mouseMoveHandler);
          elX.style.cursor = 'default'
        })
      }
      scrollTarget.addEventListener("mouseenter", mouseEnterOnX)
      return () => scrollTarget.removeEventListener("mouseenter", mouseEnterOnX)
    }

    
  }, [])

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



  // useEffect(() => { // MOUSE GRAB & DRAG VERTICAL
  //   const elY = document.getElementById('sliderBoxYProjects');
  //   const parent = document.querySelector('[class*="ProjectsCSS_background"]')

  //   if (elY !== null) {
  //     const mouseEnterOnY = () => {
  //       console.log("ENTER VERTICAL")
  //       let pos = { top: 0, y: 0 };

  //       const mouseDownHandlerY = function (e: any) {
  //         pos = {
  //           top: elY.scrollTop,
  //           y: e.clientY,
  //         }

  //         if (parent !== null) {
  //           if (parent.clientHeight < 360) { // > 372 START OVERFLOW === 372 - 12 = 360
  //             console.log("ENTRO ACAAAAAAAAAAAAAAA")
  //             elY.addEventListener('mousemove', mouseMoveHandlerY)
  //             elY.addEventListener('mouseup', mouseUpHandlerY)
  //           } else {
  //             elY.removeEventListener('mousemove', mouseMoveHandlerY);
  //             elY.removeEventListener('mouseup', mouseUpHandlerY);
  //           }
  //         }
  //       }

  //       const mouseMoveHandlerY = function (e: any) { // HOW MUCH MOUSE HAS MOVED
  //         const dy = e.clientY - pos.y;
  //         elY.scrollTop = pos.top - dy;
  //       }

  //       const mouseUpHandlerY = function () {
  //         elY.style.removeProperty('user-select')
  //         elY.removeEventListener('mousemove', mouseMoveHandlerY)
  //         elY.removeEventListener('mouseup', mouseUpHandlerY)
  //       }

  //       elY.addEventListener('mousedown', mouseDownHandlerY);
  //       elY.addEventListener('mouseleave', function() {
  //         elY.removeEventListener('mouseup', mouseUpHandlerY);
  //         elY.removeEventListener('mousedown', mouseDownHandlerY)
  //         elY.removeEventListener('mousemove', mouseMoveHandlerY);
  //       })
  //     }
  //     elY.addEventListener("mouseenter", mouseEnterOnY)
  //     return () => elY.removeEventListener("mouseenter", mouseEnterOnY)
  //   }
  // }, [])

  const timeoutProjects = useRef<ReturnType<typeof setTimeout>>();
  const autoHideProjects = () => {
    (document.getElementById(`buttonFlap`) as HTMLElement).click()
    clearTimeout(timeoutProjects.current)
  }

  // useEffect(() => {
  //   let el = document.getElementById(`boxLower`)
  //   if (heightDev > 523) {
  //     if (el !== null && el.classList.length === 2) {
  //       (document.getElementById(`buttonFlap`) as HTMLElement).click()
  //     }
  //   }
  // }, [heightDev])

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

  const [ index, setIndex ] = useState(0)
  const [ showModal, setShowModal ] = useState(false)

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
          <div
            id={`scrollTarget`}
            className={css.scroll}
          >
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
                                    onClick={(e) => {
                                      e.preventDefault();
                                      setShowModal(true);
                                      setIndex(array.map(e => e.media).flat().indexOf(m))
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

      {
        /* showModal &&
        <Modal
          images={array.map(e => e.media).flat()}
          index={index}
          setShowModal={setShowModal}
        /> */
      }

    </div>
  )
}

export default Projects;