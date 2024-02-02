import { FormControl, MenuItem, Select } from '@mui/material/';
import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import ScrollContainer from 'react-indiana-drag-scroll';
import food1 from '../../images/food1.png';
import food2 from '../../images/food2.png';
import food3 from '../../images/food3.png';
import weatherify1 from '../../images/weatherify1.png';
import weatherify2 from '../../images/weatherify2.png';
import tictac1 from '../../images/tictac1.png';
import tictac2 from '../../images/tictac2.png';
import loadingImage from '../../images/loadingImage.png';
import css from './ProjectsCSS.module.css';
import GoToLinkButton from '../GoToLinkButton/GoToLinkButton';
import $ from 'jquery';

function Projects() {

  const english = useSelector((state: {english:boolean}) => state.english)
  const [scrollSpeed, setScrollSpeed] = useState<any>(30)

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

    // if (children !== null) {
    //   console.log("children", children.clientWidth)
    // }
    // if (parent !== null) {
    //   console.log("parent", parent.clientWidth)
    // }

    if (el !== null && children !== null && parent !== null) {
    //if (el !== null) {
      const mouseEnterOnScore = () => {
        //if (heightDev <= 2000) el.style.cursor = 'grab'; // GRAB WHEN ENTER (MOUSEENTER)
        if (children.clientWidth > parent.clientWidth) el.style.cursor = 'grab'; // GRAB WHEN ENTER (MOUSEENTER)
        let pos = { top: 0, left: 0, x: 0, y: 0 };

        const mouseDownHandler = function (e: any) {
          el.style.cursor = 'grabbing';
          el.style.userSelect = 'none';
          pos = {
            left: el.scrollLeft,
            top: el.scrollTop,
            x: e.clientX,
            y: e.clientY,
          }
          if (children.clientWidth > parent.clientWidth) {
          //if (heightDev <= 2000) {
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
          const dy = e.clientY - pos.y;
          el.scrollTop = pos.top - dy;
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
  })

  let [ projectChosen, setProjectChosen ] = useState(`All Projects`)

  let preArray = [
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

  const [ heightDev, setHeightDev ] = useState<number>(window.innerHeight)
  const [ widthDev, setWidthDev ] = useState<number>(window.innerWidth)

  useEffect(() => {
    const heightHandler = () => {
      let { innerHeight, innerWidth } = window
      setHeightDev(innerHeight);
      setWidthDev(innerWidth);
    }
    window.addEventListener('resize', heightHandler);
  },[])

  let linkBlocked = useRef(false)

  return (
  <div className={css.background}>
    <Select
      size="small"
      className={css.selectType}
      value={projectChosen}
      onChange={(e: any) => {
        $(`#sliderRollProjects`).animate({scrollLeft: 0}, 0)
        setProjectChosen(e.target.value)
      }}
    >
      <MenuItem value={"All Projects"}>All Projects</MenuItem>
      <MenuItem value={"API Handle"}>API Handle</MenuItem>
      <MenuItem value={"Server Handle"}>Server Handle</MenuItem>
      <MenuItem value={"Games"}>Games</MenuItem>
    </Select>

    <div className={css.testTest}>
      <div
        //ref={useHorizontalScroll()}
        ref={useHorizontalScroll()}
        id={`sliderRollProjects`}
        className={css.mainContainer}
        // onStartScroll={() => {
        //   console.log("STARTED")
        // }}
        // onEndScroll={() => { console.log("ENDED") }}
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
                  <div className={css.test123}>
                    <div className={css.boxTitle}>
                      <div className={css.title}>{e.title}</div>
                      <GoToLinkButton link={e.href} />
                    </div>
                    <div className={css.boxMedia}>
                      {e.media.map((m,i) => {
                        //console.log("TEST", array.map(e => e.media).flat().indexOf(m))
                        //console.log("TEST", array.map(e => e.media).flat())
                        return (
                          <div key={m} className={css.test333}>
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
                                onDragStart={(e) => e.preventDefault() }
                                className={css.cardMedia}
                                onLoad={() => loadedUpdater(array.map(e => e.media).flat().indexOf(m))}
                                alt=""
                                src={m}
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
                      })}
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

      <div className={css.boxLower}>
        <div className={css.textContainer} style={{ marginRight: '40px' }}>
          {
            english ?
            `Scroll Wheel Speed` :
            `Velocidad de Rueda de Desplazamiento`
          }
        </div>
        <div className={css.selectContainer}>
          <FormControl>
            <Select
              className={css.select}
              value={scrollSpeed}
              label="Scroll"
              onChange={(e) => setScrollSpeed(parseInt(e.target.value))}
            >
              <MenuItem value={10}>1x</MenuItem>
              <MenuItem value={30}>2x</MenuItem>
              <MenuItem value={50}>3x</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </div>

  </div>
  )
}

export default Projects;