import { SvgIcon } from '@mui/material';
import { useState, useEffect, useRef, useMemo, MutableRefObject } from 'react';
import css from './SkillsCSS.module.css';
import { useSelector } from 'react-redux';
import { ReactComponent as MySvg } from '../../images/darth-vader.svg';
import { CSSRuleExtended } from '../../interfaces/interfaces';
import './SkillsSX.css';
import $ from 'jquery';

function Skills() {

  const english = useSelector((state: {english:boolean}) => state.english)
  const currentWidth = useSelector((state: {currentWidth: number}) => state.currentWidth)

  interface arrayI {
    id: number,
    title: string,
    percentage: number
  }

  const array: arrayI[] = [
    { id: 0, title: 'HTML & CSS', percentage: 70 },
    { id: 1, title: 'Sequelize', percentage: 60 },
    { id: 2, title: 'Javascript', percentage: 90 },
    { id: 3, title: 'Typescript', percentage: 75 },
    { id: 4, title: 'React & Redux', percentage: 90 },
    { id: 5, title: english ? 'BBQ' : 'Asado', percentage: 100 },
    { id: 6, title: english ? 'UX & UI Design' : 'Diseño UX & UI', percentage: 80 }
  ]
 
  const bold = (string: string) => {
    return <b style={{ color: 'black' }}>{string}</b>
  }

  const levels = useMemo(() =>  [
    { id: 0, firstA: english ? `I'm the `: `Soy el `, firstB: english ?  bold(`master`) : bold(`maestro`), second: english ? `of the universe.` : `del universo.`, color: `0, 0, 0`, svg: <MySvg/> },
    { id: 1, firstB: english ? bold(`High,`) : bold(`Alto,`), second: english ? `I'm pretty good.` : `Soy bastante bueno.`, color: `142, 189, 123` },
    { id: 2, firstA: english ? bold(`Medium, `) : bold(`Medio, `), firstB: english ? `I'm trying` : `tratando`, second: english ? `to improve.` : `de mejorar.`, color: `190, 202, 125` },
    { id: 3, firstA: english ? bold(`Basic, `) : bold(`Básico, `), firstB: english ? `you can't` : `no puedes`, second: english ? `always win..` : `ganar siempre.`, color: `244, 184, 0` },
    { id: 4, firstB: bold(`Hmm..`), second: english ? `Next question ?` : `Siguiente pregunta ?`, color: `244, 75, 0` }
  ], [english]);

  const findTargetStyleSheet = async () => {
    for (const ssI in document.styleSheets) {
      if (document.styleSheets[ssI].href === null) {
        for (const cssrI in document.styleSheets[ssI].cssRules) {
          if (document.styleSheets[ssI].cssRules[cssrI].cssText !== undefined) {
            if (
              document.styleSheets[ssI].cssRules[cssrI].cssText.includes('.SkillsCSS') &&
              (document.styleSheets[ssI].cssRules[cssrI] as CSSRuleExtended).media !== undefined &&
              (document.styleSheets[ssI].cssRules[cssrI] as CSSRuleExtended).media.mediaText === 'screen and (width < 1px)'
            ) {
                (document.styleSheets[ssI].cssRules[cssrI] as CSSRuleExtended).media.mediaText = `screen and (width < ${targetWidth}px)`// Nº1 850
                //break;
            }
            if (
              document.styleSheets[ssI].cssRules[cssrI].cssText.includes('.SkillsCSS') &&
              (document.styleSheets[ssI].cssRules[cssrI] as CSSRuleExtended).media !== undefined &&
              (document.styleSheets[ssI].cssRules[cssrI] as CSSRuleExtended).media.mediaText === 'screen and (width >= 2px)'
            ) {
              console.log("EXECUTED aaa");
                (document.styleSheets[ssI].cssRules[cssrI] as CSSRuleExtended).media.mediaText = `screen and (width >= ${targetWidth}px)` // Nº2 850
                //break;
            }
            if (
              document.styleSheets[ssI].cssRules[cssrI].cssText.includes('.SkillsCSS') &&
              (document.styleSheets[ssI].cssRules[cssrI] as CSSRuleExtended).media !== undefined &&
              (document.styleSheets[ssI].cssRules[cssrI] as CSSRuleExtended).media.mediaText === 'screen and (width < 3px)'
            ) {
                (document.styleSheets[ssI].cssRules[cssrI] as CSSRuleExtended).media.mediaText = `screen and (width < ${targetWidth + 6}px)` // Nº3 856
                //break;
            }
            if (
              document.styleSheets[ssI].cssRules[cssrI].cssText.includes('.SkillsCSS') &&
              (document.styleSheets[ssI].cssRules[cssrI] as CSSRuleExtended).media !== undefined &&
              (document.styleSheets[ssI].cssRules[cssrI] as CSSRuleExtended).media.mediaText === 'screen and (max-width: 4px)'
            ) {
                (document.styleSheets[ssI].cssRules[cssrI] as CSSRuleExtended).media.mediaText = `screen and (max-width: ${targetWidth + 91}px)` // Nº4 759px
                break;
            }
          }
        }
      }
    }
  }

  useEffect(() => {
    window.onload = () => {
      console.log("CSS LOADED")
      findTargetStyleSheet()
      .then(() => {
        $(`[class*='barInner']`)
          .css("visibility", "visible")
      })
    }

    if (document.readyState === "complete") {
      findTargetStyleSheet()
      .then(() => {
        $(`[class*='barInner']`)
          .css("visibility", "visible")
      })

    }

  }, [])

  const inputRef: MutableRefObject<any> = useRef<HTMLDivElement[] | null>([]);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const handleTest = (id: any) => {
    $(`[class*='barInner']`)
      .css("transition", "right 1.5s")
    clearTimeout(timeoutRef.current[id])
    if (inputRef.current[id] !== null) inputRef.current[id].classList.toggle(css.toggleClass);
    const autoHideLanguage = () => {
      if (inputRef.current[id].classList.length === 2) {
        $(`#buttonTest123${id}`).trigger("click");
        clearTimeout(timeoutRef.current[id])
      }
    }
    timeoutRef.current[id] = (setTimeout(autoHideLanguage, 3000))
  }

  let targetWidth = (array.length * 92) + 206

  useEffect(() => {
    const removeTransitionn = () => {
      if (window.matchMedia(`(width > ${targetWidth - 1}px)`).matches) {
        timeoutRef.current.forEach((e, idx) => {
          if (inputRef.current[idx].classList.length === 2) {
            console.log("EEE")
            $(`#buttonTest123${idx}`).trigger("click");
          }
        })
      }
      let { innerHeight, innerWidth } = window
      setHeightDev(innerHeight);
      setWidthDev(innerWidth);
    }
    window.addEventListener('resize', removeTransitionn);
  },[])

  const [ heightDev, setHeightDev ] = useState<number>(window.innerHeight)
  const [ widthDev, setWidthDev ] = useState<number>(window.innerWidth)

  useEffect(() => { // MOUSE GRAB & DRAG EFFECT ON MOUSE DEVICES
    const el = document.getElementById('sliderBoxY');
    if (el !== null) {
      const mouseEnterOnScoreY = () => {
        //if (heightDev <= 273) el.style.cursor = 'grab'; // GRAB WHEN ENTER (MOUSEENTER)
        //if (heightDev <= 273 || widthDev <= 758) el.style.cursor = 'grab'; // GRAB WHEN ENTER (MOUSEENTER)
        if (heightDev < 273) el.style.cursor = 'grab'; // GRAB WHEN ENTER (MOUSEENTER)
        
        let pos = { top: 0, y: 0 };

        const mouseDownHandlerY = function (e: any) {
          //el.style.cursor = 'grabbing';
          //el.style.userSelect = 'none';
          pos = {
            
            top: el.scrollTop,
            
            y: e.clientY,
          }
          if (heightDev < 273) {
            el.addEventListener('mousemove', mouseMoveHandlerY)
            el.addEventListener('mouseup', mouseUpHandlerY)
          } else {
            el.removeEventListener('mousemove', mouseMoveHandlerY);
            el.removeEventListener('mouseup', mouseUpHandlerY);
            el.style.cursor = 'default';
          }
        }

        const mouseMoveHandlerY = function (e: any) { // HOW MUCH MOUSE HAS MOVED
          //const dx = e.clientX - pos.x;
          const dy = e.clientY - pos.y;
          el.scrollTop = pos.top - dy;
          //el.scrollLeft = pos.left - dx;
        }

        const mouseUpHandlerY = function () {
          //el.style.cursor = 'grab'
          el.style.removeProperty('user-select')
          el.removeEventListener('mousemove', mouseMoveHandlerY)
          el.removeEventListener('mouseup', mouseUpHandlerY)
        }

        el.addEventListener('mousedown', mouseDownHandlerY);
        el.addEventListener('mouseleave', function() {
          el.removeEventListener('mouseup', mouseUpHandlerY);
          el.removeEventListener('mousedown', mouseDownHandlerY)
          el.removeEventListener('mousemove', mouseMoveHandlerY);
          //el.style.cursor = 'default'
        })
      }
      el.addEventListener("mouseenter", mouseEnterOnScoreY)

      return () => el.removeEventListener("mouseenter", mouseEnterOnScoreY)
    }
  })

  useEffect(() => { // MOUSE GRAB & DRAG EFFECT ON MOUSE DEVICES
    const el = document.getElementById('sliderBoxX');
    if (el !== null) {
      const mouseEnterOnScoreX = () => {
        if (
          (widthDev < 758 && heightDev > 407) ||
          (widthDev < 656 && heightDev <= 407) ||
          (heightDev < 273)
          /* (widthDev < 758 && heightDev > 407) */
        ) {
          el.style.cursor = 'grab'; // GRAB WHEN ENTER (MOUSEENTER)
        }
        //if (true) el.style.cursor = 'grab'; // GRAB WHEN ENTER (MOUSEENTER)
        let pos = { left: 0, x: 0, };

        const mouseDownHandlerX = function (e: any) {
          el.style.cursor = 'grabbing';
          el.style.userSelect = 'none';
          pos = {
            left: el.scrollLeft,
            
            x: e.clientX,
      
          }
          //if (heightDev <= 550) {
          if (
            (widthDev < 758 && heightDev > 407) ||
            (widthDev < 656 && heightDev <= 407) ||
            (heightDev < 273)
            /* (widthDev < 758 && heightDev > 407) */
          ) {
            el.addEventListener('mousemove', mouseMoveHandlerX)
            el.addEventListener('mouseup', mouseUpHandlerX)
          } else {
            el!.removeEventListener('mousemove', mouseMoveHandlerX);
            el!.removeEventListener('mouseup', mouseUpHandlerX);
            el!.style.cursor = 'default';
          }
        }

        const mouseMoveHandlerX = function (e: any) { // HOW MUCH MOUSE HAS MOVED
          const dx = e.clientX - pos.x;
          //const dy = e.clientY - pos.y;
          //el.scrollTop = pos.top - dy;
          el.scrollLeft = pos.left - dx;
        }

        const mouseUpHandlerX = function () {
          el.style.cursor = 'grab'
          el.style.removeProperty('user-select')
          el.removeEventListener('mousemove', mouseMoveHandlerX)
          el.removeEventListener('mouseup', mouseUpHandlerX)
        }

        el.addEventListener('mousedown', mouseDownHandlerX);
        el.addEventListener('mouseleave', function() {
          el.removeEventListener('mouseup', mouseUpHandlerX);
          el.removeEventListener('mousedown', mouseDownHandlerX)
          el.removeEventListener('mousemove', mouseMoveHandlerX);
          el.style.cursor = 'default'
        })
      }
      el.addEventListener("mouseenter", mouseEnterOnScoreX)

      return () => el.removeEventListener("mouseenter", mouseEnterOnScoreX)
    }
  })

  return (
    <div
      /* style={{ "--testTest": (array.length * 92) + 206 } as React.CSSProperties} */
      //id={`testTestID`}
      className={css.background}
      id={`sliderBoxY`}
    >
      
      {/* (array.length * 92) + 206) */}
      {/* <div className={css.testTEST}> */}
      <div
        className={css.mainContainer}
        style={{ "--titlesBoxLength": array.length } as React.CSSProperties}
      >
        <div className={css.skills}>{ english ? `My skills` : `Mis habilidades` }</div>
        <div
          //innerRef={useHorizontalScroll()}
          className={css.scroll}
          id={`sliderBoxX`}
          //vertical={true}
        >
        <div 
          className={css.chartContainer}
          style={{ "--titlesBoxLength": array.length } as React.CSSProperties}
        >
            <div className={css.upperChartContainer}>
              <div className={css.chartRow}>
                {array.map((e, index) => {
                  return (
                    <div className={css.testBorder} key={index}>
                      <div
                        style={{ "--percentage": e.percentage } as React.CSSProperties}
                        className={css.columnBar}
                      >
                        <div className={css.leftSide}></div>
                        <div
                          style={{ "--percentage": e.percentage } as React.CSSProperties}
                          className={css.centerSide}
                          id={`center${index}`}
                        />
                        <div className={css.rightSide}></div>
                      </div>
                      <div
                        style={{ "--percentage": e.percentage } as React.CSSProperties}
                        className={css.titlesHorizontalContainer}
                      >
                        <div className={css.titlesHorizontal}>
                          {e.title}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className={css.titlesBox}>
              {
                array.map((e) => {
                  return (
                    <div
                      key={array.indexOf(e)}
                      className={css.titles}
                    >
                      {e.title}
                    </div>
                  )
                })
              }
              <div className={css.titlesNext} />
            </div>
        </div>
        </div>
      </div>
      <div className={css.barsMapContainer}>
        {levels.map((e, index) => {
          return (
            <div
              key={levels.indexOf(e)}
              className={css.entireBarContainer}
            >
              <div
                ref={el => inputRef.current[e.id] = el}
                style={{ "--colorBar": e.color } as React.CSSProperties}
                className={css.barInner}
                id={`entireBarMoveCl${index}`}
              >
                <div
                  className={css.innerLevel}>
                  <div className={css.levelTitle}>{ e.firstA }{ e.firstB }</div>
                  <div className={css.levelTitle}>{ e.second }</div>
                </div>
                <div className={css.boxSVG}>
                  <SvgIcon
                    viewBox='0 0 36 30'
                    className={css.imageSVG}
                  >
                    {e.svg}
                  </SvgIcon>
                </div>
              </div>
              <button
                id={`buttonTest123${e.id}`}
                style={{ "--colorBar": e.color } as React.CSSProperties}
                className={css.colorFixed}
                onClick={() => {
                  handleTest(e.id)
                }}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Skills;