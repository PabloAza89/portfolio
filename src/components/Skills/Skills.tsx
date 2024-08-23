import { SvgIcon } from '@mui/material';
import { useState, useEffect, useRef, useMemo, CSSProperties, MutableRefObject } from 'react';
import css from './SkillsCSS.module.css';
import { useSelector } from 'react-redux';
import { DarthSvg } from '../../images/images';
import { CSSRuleExtended, arraySkillsI } from '../../interfaces/interfaces';
import { config } from '../../constants/constants';

function Skills() {

  const english = useSelector((state: { english:boolean }) => state.english)

  const array: arraySkillsI[] = [
    { id: 0, title: 'HTML & CSS', percentage: 70 },
    { id: 1, title: 'Sequelize', percentage: 60 },
    { id: 2, title: 'Typescript', percentage: 90 },
    { id: 3, title: 'React Native', percentage: 75 },
    { id: 4, title: 'React & Redux', percentage: 90 },
    { id: 5, title: english ? 'BBQ' : 'Asado', percentage: 100 },
    { id: 6, title: english ? 'UX & UI Design' : 'Diseño UX & UI', percentage: 80 }
  ]

  const bold = (string: string) => {
    return <b style={{ color: 'black' }}>{string}</b>
  }

  const levels = useMemo(() =>  [
    { id: 0, firstA: english ? `I'm the `: `Soy el `, firstB: english ?  bold(`master`) : bold(`maestro`), second: english ? `of the universe.` : `del universo.`, color: `0, 0, 0`, svg: <DarthSvg/> },
    { id: 1, firstB: english ? bold(`High,`) : bold(`Alto,`), second: english ? `I'm pretty good.` : `Soy bastante bueno.`, color: `142, 189, 123` },
    { id: 2, firstA: english ? bold(`Medium, `) : bold(`Medio, `), firstB: english ? `I'm trying` : `tratando`, second: english ? `to improve.` : `de mejorar.`, color: `190, 202, 125` },
    { id: 3, firstA: english ? bold(`Basic, `) : bold(`Básico, `), firstB: english ? `you can't` : `no puedes`, second: english ? `always win..` : `ganar siempre.`, color: `244, 184, 0` },
    { id: 4, firstB: bold(`Hmm..`), second: english ? `Next question ?` : `Siguiente pregunta ?`, color: `244, 75, 0` }
  ], [english]);

  // EQUIVALENCES

  // width > 1px GH-Pages translates to (min-width: 2px)
  // width > 2px GH-Pages translates to (min-width: 3px)
  // width > 3px GH-Pages translates to (min-width: 4px)
  // width > 4px GH-Pages translates to (min-width: 5px)

  // width < 1px GH-Pages translates to (max-width: 0px)
  // width < 2px GH-Pages translates to (max-width: 1px)
  // width < 3px GH-Pages translates to (max-width: 2px)
  // width < 4px GH-Pages translates to (max-width: 3px)

  let targetWidth = (array.length * 92) + 206

  const findTargetStyleSheet = async () => {
    let sheets = document.styleSheets
    for (const ssI in sheets) {
      if (`${sheets[ssI].href}`.includes(config.TARGET_STYLESHEET)) {
        let cssRules = sheets[ssI].cssRules
        for (const cssrI in cssRules) {
          if (
            cssRules[cssrI].cssText !== undefined &&
            cssRules[cssrI].cssText.includes('.SkillsCSS') &&
            (cssRules[cssrI] as CSSRuleExtended).media !== undefined
          ) {
            let t = (cssRules[cssrI] as CSSRuleExtended).media
            if (t.mediaText === 'screen and (max-width: 1px)') t.mediaText = `screen and (min-width: ${targetWidth}px)`     // 850
            if (t.mediaText === 'screen and (max-width: 2px)') t.mediaText = `screen and (max-width: ${targetWidth + 5}px)` // 855
            if (t.mediaText === 'screen and (max-width: 3px)') t.mediaText = `screen and (max-width: ${targetWidth - 1}px)` // 849
          }
        }
      }
    }
  }

  useEffect(() => {
    let barInner = document.querySelectorAll("[class*='barInner']") as NodeListOf<HTMLElement>
    window.onload = () => {
      findTargetStyleSheet()
      .then(() => barInner.forEach(e => e.style.visibility = "visible"))
    }
    if (document.readyState === "complete") {
      findTargetStyleSheet()
      .then(() => barInner.forEach(e => e.style.visibility = "visible"))
    }
  // eslint-disable-next-line
  }, [])

  useEffect(() => {
    levels.forEach(e => {
      let button = document.getElementById(`buttonColorFixed${e.id}`) as HTMLElement
      button.style.animation = `${css.shakeKFSkills} 6s calc(2.5s + (${e.id} * .1s)) infinite`
    })
  })

  const inputRef: MutableRefObject<any> = useRef<HTMLDivElement[] | null>([]);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const handleAnimation = (id: any) => {
    levels.forEach(e => {
      let currentButton = document.getElementById(`buttonColorFixed${e.id}`) as HTMLElement
      currentButton.style.animation = `none`
    })
    clearTimeout(timeoutRef.current[id])
    if (inputRef.current[id] !== null) inputRef.current[id].classList.toggle(css.toggleClass);
    const autoHideLanguage = () => {
      if (inputRef.current[id].classList.length === 2) {
        (document.getElementById(`buttonColorFixed${id}`) as HTMLElement).click()
        clearTimeout(timeoutRef.current[id]);
        (document.getElementById(`barInner${id}`) as HTMLElement).addEventListener("transitionend", () => {
          levels.forEach(e => {
            let currentButton = document.getElementById(`buttonColorFixed${e.id}`) as HTMLElement
            currentButton.style.animation = `${css.shakeKFSkills} 6s calc(2.5s + (${e.id} * .1s)) infinite`
          })
        });
      }
    }
    timeoutRef.current[id] = (setTimeout(autoHideLanguage, 3000))
  }

  useEffect(() => {
    const autoHideOnResize = () => {
      if (window.matchMedia(`(width > ${targetWidth - 1}px)`).matches) {
        timeoutRef.current.forEach((e, idx) => {
          if (inputRef.current[idx].classList.length === 2) {
            (document.getElementById(`buttonColorFixed${idx}`) as HTMLElement).click()
          }
        })
      }
      let { innerHeight, innerWidth } = window
      setHeightDev(innerHeight);
      setWidthDev(innerWidth);
    }
    window.addEventListener('resize', autoHideOnResize);
  // eslint-disable-next-line
  },[])

  const [ heightDev, setHeightDev ] = useState<number>(window.innerHeight)
  const [ widthDev, setWidthDev ] = useState<number>(window.innerWidth)

  useEffect(() => { // MOUSE GRAB & DRAG EFFECT ON MOUSE DEVICES
    const el = document.getElementById('sliderBoxY');
    if (el !== null) {
      const mouseEnterOnScoreY = () => {
        if (heightDev < 273) el.style.cursor = 'grab'; // GRAB WHEN ENTER (MOUSEENTER)

        let pos = { top: 0, y: 0 };

        const mouseDownHandlerY = function (e: any) {
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

  useEffect(() => { // MOUSE GRAB & DRAG EFFECT ON MOUSE DEVICES
    const el = document.getElementById('sliderBoxX');
    if (el !== null) {
      const mouseEnterOnScoreX = () => {
        if (
          heightDev < 273 ||
          (heightDev < 408 && widthDev < 656) ||
          (heightDev > 407 && widthDev < 758)
        ) el.style.cursor = 'grab'; // GRAB WHEN ENTER (MOUSEENTER)
        let pos = { top: 0, left: 0, x: 0, y: 0 };

        const mouseDownHandlerX = function (e: any) {
          el.style.cursor = 'grabbing';
          el.style.userSelect = 'none';
          pos = {
            left: el.scrollLeft,
            top: el.scrollTop,
            x: e.clientX,
            y: e.clientY,
          }
          if (
            heightDev < 273 ||
            (heightDev < 408 && widthDev < 656) ||
            (heightDev > 407 && widthDev < 758)
          ) {
            el.addEventListener('mousemove', mouseMoveHandlerX)
            el.addEventListener('mouseup', mouseUpHandlerX)
          } else {
            el.removeEventListener('mousemove', mouseMoveHandlerX);
            el.removeEventListener('mouseup', mouseUpHandlerX);
            el.style.cursor = 'default';
          }
        }

        const mouseMoveHandlerX = function (e: any) { // HOW MUCH MOUSE HAS MOVED
          const dx = e.clientX - pos.x;
          const dy = e.clientY - pos.y;
          el.scrollTop = pos.top - dy;
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
      el.addEventListener("mouseover", mouseEnterOnScoreX)
      return () => el.removeEventListener("mouseover", mouseEnterOnScoreX)
    }
  }, [heightDev, widthDev])

  const skillsBGHandler: () => void = () => {
    let el = (document.querySelector(`[class*="SkillsCSS_background"]`) as HTMLElement)
    if (el !== null) document.documentElement.style.setProperty("--diff", `${el.offsetWidth - el.clientWidth}`);
  }

  useEffect(() => {
    skillsBGHandler()
    window.addEventListener('resize', skillsBGHandler);
    return () => window.removeEventListener('resize', skillsBGHandler);
  },[])

  window.addEventListener('load', () => skillsBGHandler())

  return (
    <div
      className={css.background}
      id={`sliderBoxY`}
    >
      <div
        className={css.mainContainer}
        style={{ "--titlesBoxLength": array.length } as CSSProperties}
      >
        <div className={css.skills}>{ english ? `My skills` : `Mis habilidades` }</div>
        <div className={css.scroll}>
          <div
            className={css.chartContainer}
            id={`sliderBoxX`}
            style={{ "--titlesBoxLength": array.length } as CSSProperties}
          >
              <div className={css.upperChartContainer}>
                <div className={css.chartRow}>
                  {array.map((e, index) => {
                    return (
                      <div className={css.borderLeftSeparator} key={index}>
                        <div
                          style={{ "--percentage": e.percentage } as CSSProperties}
                          className={css.columnBar}
                        >
                          <div className={css.leftSide}></div>
                          <div
                            style={{ "--percentage": e.percentage } as CSSProperties}
                            className={css.centerSide}
                            id={`center${index}`}
                          />
                          <div className={css.rightSide}></div>
                        </div>
                        <div
                          style={{ "--percentage": e.percentage } as CSSProperties}
                          className={css.titlesVerticalContainer}
                        >
                          <div className={css.titlesVertical}>
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
              </div>
          </div>
        </div>
        <div className={css.titlesNext} />
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
                style={{ "--colorBar": e.color } as CSSProperties}
                className={css.barInner}
                id={`barInner${index}`}
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
                tabIndex={-1}
                id={`buttonColorFixed${e.id}`}
                style={{ "--colorBar": e.color, "--delay": e.id } as CSSProperties}
                className={css.colorFixed}
                onClick={() => handleAnimation(e.id)}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Skills;