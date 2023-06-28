import { Box, Typography, SvgIcon } from '@mui/material';
import { useState, useEffect, useRef, useMemo } from 'react';
import * as s from '../../styles/SkillsSX';
import { useSelector } from 'react-redux';
import ScrollContainer from 'react-indiana-drag-scroll';
import { ReactComponent as MySvg } from '../../images/darth-vader.svg';
import '../../styles/SkillsSX.css';
import $ from 'jquery';

function Skills() {

  let one = useRef(false) // animation moving ? click handler number One
  let two = useRef(false) // animation moving ? click handler number Two

  const english = useSelector((state: {english:boolean}) => state.english)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)
  const currentWidth = useSelector((state: {currentWidth: number}) => state.currentWidth)
  const darkMode = useSelector( (state: {darkMode:boolean}) => state.darkMode)

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
    { id: 0, firstA: english ? `I'm the `: `Soy el `, firstB: english ?  bold(`master`) : bold(`maestro`), second: english ? `of the universe.` : `del universo.`, color: `#000000`, svg: <MySvg/> },
    { id: 1, firstB: english ? bold(`High,`) : bold(`Alto,`), second: english ? `I'm pretty good.` : `Soy bastante bueno.`, color: `#8ebd7b` },
    { id: 2, firstA: english ? bold(`Medium, `) : bold(`Medio, `), firstB: english ? `I'm trying` : `tratando`, second: english ? `to improve.` : `de mejorar.`, color: `#beca7d` },
    { id: 3, firstA: english ? bold(`Basic, `) : bold(`Básico, `), firstB: english ? `you can't` : `no puedes`, second: english ? `always win..` : `ganar siempre.`, color: `#f4b800` },
    { id: 4, firstB: bold(`Hmm..`), second: english ? `Next question ?` : `Siguiente pregunta ?`, color: `#f44b00` }
  ], [english]);

  const HandleColorClick: any = (index: number) => {

    setAnimRunning(true)
    if (!one.current && !two.current) {
      one.current = true
      two.current = false
      setTimeout(() => {
        if (one.current && !two.current) {
          one.current = false
          two.current = false
          setAnimRunning(false)
        }
      }, 2500)
    }

    else if (one.current && !two.current) {
      one.current = false
      two.current = true
      setTimeout(() => {
        if (!one.current && two.current) {
          one.current = false;
          two.current = false;
          setAnimRunning(false)
        }
      }, 2500)
    }

    else if (!one.current && two.current) {
      one.current = true
      two.current = true
      setTimeout(() => {
        if (one.current && two.current) {
          one.current = false;
          two.current = false;
          setAnimRunning(false)
        }
      }, 2500)
    }

     else if (one.current && two.current) {
      one.current = false
      two.current = false
      setTimeout(() => {
        if (!one.current && !two.current) {
          one.current = false;
          two.current = false;
          setAnimRunning(false)
        }
      }, 2500)
    }
  }

  useEffect(() => {
    if (graphDontFit)  {
      $(function(){
        s.graphDontFit({ levels, animRunning })
      })
    } else {
      s.graphFit(levels)
    }
  },[graphDontFit, levels, animRunning])

  return (
    <Box sx={s.background}>
      <Box sx={s.topBottomHelper({ minPort, minLand, medPort, medLand, larPort, larLand })}></Box>
      <Box sx={s.middle({ minPort, minLand })}>
        <Box sx={s.leftRightHelper({ graphDontFit, larPort, larLand })}></Box>
        <Box sx={s.mainContainer({ length:array.length, minLand })}>
          <Typography sx={s.skills({ minLand })}>{english ? `My skills` : `Mis habilidades`}</Typography>
          <ScrollContainer innerRef={useHorizontalScroll()} style={s.scroll({ graphDontFit, minLand })} >
          <Box sx={s.chartContainer({ graphDontFit, currentWidth, length:array.length, minLand })}>
              <Box sx={s.upperChartContainer}>
                <Box sx={s.chartRow({ length:array.length })}>
                  {array.map((e, index) => {
                    return (
                      <Box>
                        <Box key={array.indexOf(e)} sx={s.columnBar({ id:e.id, darkMode, percentage:e.percentage })}>
                          <Box sx={s.fixedToppingMinLand({ darkMode, minLand })} />
                          <Box sx={s.leftSide({ id:e.id, darkMode, percentage:e.percentage })}></Box>
                          <Box
                            sx={s.centerSide({ id:e.id, darkMode, percentage:e.percentage,  })}
                            className={`center${index}`}
                          />
                          <Box sx={s.rightSide({ id:e.id, darkMode, percentage:e.percentage })}></Box>
                        </Box>
                        <Box
                          sx={s.onlyMinLand({ minLand, percentage:e.percentage })}
                        >
                          <Typography sx={s.titlesOnlyMinLand}>
                            {e.title}
                          </Typography>
                        </Box>
                      </Box>
                    )
                  })}
                </Box>
                <Box sx={s.upperChartContainerRight({ graphDontFit })}>
                  {levels.map((e, index) => {
                    return (
                      <Box
                        key={levels.indexOf(e)}
                        sx={s.entireBarContainer({ graphDontFit })}
                      >
                        <Box
                          sx={s.entireBar({ graphDontFit, bgColor:e.color })}
                          className={`entireBarMoveCl${index}`}
                        >
                          <Box
                            sx={s.innerLevel({ graphDontFit })}>
                            <Typography sx={s.levelTitle}>{e.firstA}{e.firstB}</Typography>
                            <Typography sx={s.levelTitle}>{e.second}</Typography>
                          </Box>
                          <Box sx={s.boxSVG}>
                            <SvgIcon
                              viewBox='0 0 36 30'
                              sx={s.imageSVG({ graphDontFit })}
                            >
                              {e.svg}
                            </SvgIcon>
                          </Box>
                        </Box>
                        <Box
                          className={`colorFixedCl${index}`}
                          sx={s.colorFixed({ graphDontFit, color:e.color })}
                          onClick={() => HandleColorClick(index)}
                        />
                      </Box>
                    )
                  })}
                </Box>
              </Box>
              <Box sx={s.titlesBox({ minLand, length:array.length })}>
                {array.map((e) => {
                  return (
                    <Typography key={array.indexOf(e)} sx={s.titles}>
                      {e.title}
                    </Typography>
                  )
                })}
                <Box sx={s.titlesNext({ currentWidth, graphDontFit })} />
              </Box>
          </Box>
          </ScrollContainer>
        </Box>
        <Box sx={s.leftRightHelper({ graphDontFit, larPort, larLand })}></Box>
      </Box>
      <Box sx={s.topBottomHelper({ minPort, minLand, medPort, medLand, larPort, larLand })}></Box>
    </Box>
  )
}

export default Skills;