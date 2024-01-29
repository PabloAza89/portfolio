import { Typography, SvgIcon } from '@mui/material';
import { useState, useEffect, useRef, useMemo, createRef, MutableRefObject } from 'react';
/* import * as s from '../../styles/SkillsSX'; */
import css from './SkillsCSS.module.css';
import { useSelector } from 'react-redux';
import ScrollContainer from 'react-indiana-drag-scroll';
import { ReactComponent as MySvg } from '../../images/darth-vader.svg';
import { CSSRuleExtended } from '../../interfaces/interfaces';
import './SkillsSX.css';
import $ from 'jquery';


function Skills() {

  let one = useRef(false) // animation moving ? click handler number One
  let two = useRef(false) // animation moving ? click handler number Two

  const english = useSelector((state: {english:boolean}) => state.english)
  const currentWidth = useSelector((state: {currentWidth: number}) => state.currentWidth)

  function useHorizontalScroll() {
    const elRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
      const el:any = elRef.current;
      if (el) {
        const onWheel = (e:any) => {
          if (e.deltaY === 0) return;
          e.preventDefault();
          el.scrollTo({
            left: el.scrollLeft + e.deltaY * 30,
            behavior: "smooth"
          });
        };
        el.addEventListener("wheel", onWheel);
        return () => el.removeEventListener("wheel", onWheel);
      }
    }, []);
    return elRef;
  }

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

  const [ graphDontFit, setGraphDontFit ] = useState<any>(currentWidth < ((array.length * 92) + 206) ? true : false)
  const [ animRunning, setAnimRunning ] = useState<boolean>(false)

  useEffect(() => {
    setGraphDontFit(currentWidth < ((array.length * 92) + 206) ? true : false)
  }, [currentWidth, array.length]);

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


/*   useEffect(() => {
    if (graphDontFit)  {
      $(function(){
        s.graphDontFit({ levels, animRunning })
      })
    } else {
      s.graphFit(levels)
    }
  },[graphDontFit, levels, animRunning]) */


  const findTargetStyleSheet = async () => {
    for (const ssI in document.styleSheets) {
      if (document.styleSheets[ssI].href === null) {
        for (const cssrI in document.styleSheets[ssI].cssRules) {
          if (document.styleSheets[ssI].cssRules[cssrI].cssText !== undefined) {
            if (
              document.styleSheets[ssI].cssRules[cssrI].cssText.includes('.SkillsCSS') &&
              (document.styleSheets[ssI].cssRules[cssrI] as CSSRuleExtended).media !== undefined &&
              (document.styleSheets[ssI].cssRules[cssrI] as CSSRuleExtended).media.mediaText === 'screen and (max-width: 1px)'
            ) {
                (document.styleSheets[ssI].cssRules[cssrI] as CSSRuleExtended).media.mediaText = `screen and (max-width: ${(array.length * 92) + 206}px)`
                //break;
            }
            if (
              document.styleSheets[ssI].cssRules[cssrI].cssText.includes('.SkillsCSS') &&
              (document.styleSheets[ssI].cssRules[cssrI] as CSSRuleExtended).media !== undefined &&
              (document.styleSheets[ssI].cssRules[cssrI] as CSSRuleExtended).media.mediaText === 'screen and (width >= 2px)'
            ) {
              console.log("EXECUTED aaa");
                (document.styleSheets[ssI].cssRules[cssrI] as CSSRuleExtended).media.mediaText = `screen and (width >= ${(array.length * 92) + 206}px)`
                //break;
            }
            if (
              document.styleSheets[ssI].cssRules[cssrI].cssText.includes('.SkillsCSS') &&
              (document.styleSheets[ssI].cssRules[cssrI] as CSSRuleExtended).media !== undefined &&
              (document.styleSheets[ssI].cssRules[cssrI] as CSSRuleExtended).media.mediaText === 'screen and (max-width: 3px)'
            ) {
                (document.styleSheets[ssI].cssRules[cssrI] as CSSRuleExtended).media.mediaText = `screen and (max-width: ${(array.length * 92) + 212}px)`
                //break;
            }
            if (
              document.styleSheets[ssI].cssRules[cssrI].cssText.includes('.SkillsCSS') &&
              (document.styleSheets[ssI].cssRules[cssrI] as CSSRuleExtended).media !== undefined &&
              (document.styleSheets[ssI].cssRules[cssrI] as CSSRuleExtended).media.mediaText === 'screen and (max-width: 4px)'
            ) {
                (document.styleSheets[ssI].cssRules[cssrI] as CSSRuleExtended).media.mediaText = `screen and (max-width: ${(array.length * 92) + 115}px)` // 759px
                //break;
            }
        
          }
        }
      }
    }
    // for (const ssI in document.styleSheets) {
    //   if (document.styleSheets[ssI].href === null) {
    //     for (const cssrI in document.styleSheets[ssI].cssRules) {
    //       if (document.styleSheets[ssI].cssRules[cssrI].cssText !== undefined) {
            
    //       }
    //     }
    //   }
    // }

  }
 

  useEffect(() => {
    window.onload = () => {
      console.log("CSS LOADED")
      findTargetStyleSheet()
      .then(() => {
        $(`[class*='entireBar']`)
          .css("visibility", "visible")
      })
    }

    if (document.readyState === "complete") {
      findTargetStyleSheet()
      .then(() => {
        $(`[class*='entireBar']`)
          .css("visibility", "visible")
      })

    }

  }, [])

  //let inputRef = useRef<HTMLDivElement>(null);
  //let inputRef = useRef<HTMLDivElement[]>([]);
  //let inputRef = useRef<any>().current;
  //const self = useRef<any>({}).current
  //const saveRef = (key: any) => (r:any) => { self[key] = r }
  //let inputRef = useRef<any>([]);
  //const inputRef = useRef<any>(Array.from({length: array.length}, (e,i) => ( createRef )));

  //const [ timeoutLanguage, setTimeoutLanguage ] = useState<any>(Array.from({length: array.length}, (e,i) => ([])));
  //const [ timeoutLanguage, setTimeoutLanguage ] = useState<ReturnType<typeof setTimeout>>()
  //const autoHideLanguage = () => $(() => $(`#buttonShowLanguage`).trigger("click"))
  //const autoHideLanguage = () => $(`#buttonTest1230`).trigger("click")

  //const [ timeoutLanguage, setTimeoutLanguage ] = useState<ReturnType<typeof setTimeout>>()
  //const autoHideLanguage = () => $(`#buttonTest1230`).trigger("click")

  //const inputRef = useRef<HTMLDivElement>(null);
  //const inputRef = useRef<HTMLDivElement[]>([]);
  //const inputRef: any = useRef<any>([]);

  /* const self: any = useRef({})
  const saveRef = (key:any) => (r:any) => { self.current[key] = r } */
  const inputRef: MutableRefObject<any> = useRef<HTMLDivElement[] | null>([]);
  //const [ timeoutLanguage, setTimeoutLanguage ] = useState<ReturnType<typeof setTimeout>>()
  const timeoutRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  // LegacyRef<HTMLDivElement>
  

  // $(function(){
  //   $('#buttonTest1230').on('click',function() {
  //     if (inputRef.current) inputRef.current.classList.toggle(css.test222);
  //   });
  // });

  const handleTest = (id: any) => {
    /* $(`[class*='entireBar']`).css("transition", "all 1.5s") */
    $(`[class*='entireBar']`)
      //.css("visibility", "visible")
      .css("transition", "all 1.5s")
      //.css("transition-duration", "1.5s")
    clearTimeout(timeoutRef.current[id])
    //console.log("inputRef.current[id].classList", inputRef.current[id].classList.length)
      if (inputRef.current[id] !== null) {
        inputRef.current[id].classList.toggle(css.test222);
      }
      const autoHideLanguage = () => {

        if (inputRef.current[id].classList.length === 2) {
          $(`#buttonTest123${id}`).trigger("click");
          clearTimeout(timeoutRef.current[id])
        }
      }
      timeoutRef.current[id] = (setTimeout(autoHideLanguage, 3000))


  }

/*   useEffect(() => {
    var timer: any;
    const removeTransitionn = () => {
      //$(`[class*='entireBar']`).css("transition", "none")
      $(`[class*='entireBar']`).css("transition", "none")
      const addTransitionn = () => $(`[class*='entireBar']`).css("transition", "all 1.5s")
      clearTimeout(timer);
      timer = setTimeout(addTransitionn, 100);
    }
    window.addEventListener('resize', removeTransitionn);
  },[])
  */

  useEffect(() => {
    var timer: any;
    const removeTransitionn = () => {
      $(`[class*='entireBar']`).css("transition", "none")
      const addTransitionn = () => $(`[class*='entireBar']`).css("transition", "all 1.5s")
      clearTimeout(timer);
      timer = setTimeout(addTransitionn, 100);
    }
    window.addEventListener('resize', removeTransitionn);
  },[])

 /*  useEffect(() => {
    var timer: any;
    const removeTransitionn = () => {
      // $(`[class*='entireBar']`).css("transition", "none")
      // const addTransitionn = () => $(`[class*='entireBar']`).css("transition", "all 1.5s")
      // clearTimeout(timer);
      // timer = setTimeout(addTransitionn, 100);
      document.body.classList.add(css.stopTransition);

    }
    window.addEventListener('resize', removeTransitionn);
  },[]) */

  return (
    <div
      /* style={{ "--testTest": (array.length * 92) + 206 } as React.CSSProperties} */
      id={`testTestID`}
      className={css.background}
    >
      {/* (array.length * 92) + 206) */}
      {/* <div className={css.testTEST}> */}
        <div className={css.mainContainer}>
          <div className={css.skills}>{ english ? `My skills` : `Mis habilidades` }</div>
          <ScrollContainer innerRef={useHorizontalScroll()} className={css.scroll} >
          <div className={css.chartContainer} style={{ "--titlesBoxLength": array.length } as React.CSSProperties}>
              <div className={css.upperChartContainer}>
                <div className={css.chartRow}>
                  {array.map((e, index) => {
                    return (
                      <div className={css.testTest} key={index}>
                        <div
                          style={{ "--percentage": e.percentage } as React.CSSProperties}
                          className={css.columnBar}
                        >
                          {/* <div className={css.fixedToppingMinLand} /> */}
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
                <div className={css.upperChartContainerRight}>
                  {levels.map((e, index) => {
                    return (
                      <div
                        key={levels.indexOf(e)}
                        className={css.entireBarContainer}
                      >
                        <div
                          //ref={inputRef[e.id]}
                          //ref={saveRef(`${e.id}}`)}
                          //ref={e => inputRef.current.push(e)}
                          ref={el => inputRef.current[e.id] = el}
                          //className={`entireBar`}
                          style={{ "--colorBar": e.color } as React.CSSProperties}
                          className={css.entireBar}
                          //className={`${css.entireBar} ${e.id}`}
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
                            //clearTimeout(timeoutLanguage);
                            //setTimeoutLanguage(setTimeout(autoHideLanguage, 1000))
                          }
                        }
                        />
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
          </ScrollContainer>
        </div>
      {/* </div> */}
    </div>
  )
}

export default Skills;