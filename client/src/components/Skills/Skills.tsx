import * as React from 'react'
import { Box, Typography, SvgIcon, Button  } from '@mui/material';
import { useState, useEffect, useRef } from 'react';
import * as s from '../../styles/SkillsSX';
import { useSelector } from 'react-redux';
import ScrollContainer from 'react-indiana-drag-scroll';
import { ReactComponent as MySvg } from '../../images/darth-vader.svg';
import '../../styles/SkillsSX.css';

function Skills() {

  const english = useSelector((state: {english:boolean}) => state.english)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)
  const width = useSelector((state: {width: number}) => state.width)

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
    }, [scrollSpeed]);
    return elRef;
  }


  interface arrayI {
    title: string,
    percentage: number
  }

  const array: arrayI[] = [
    { title: 'HTML & CSS', percentage: 70 },
    { title: 'Sequelize', percentage: 60 },
    { title: 'Javascript', percentage: 90 },
    { title: 'Typescript', percentage: 75 },
    { title: 'React & Redux', percentage: 90 },
    { title: english ? 'BBQ' : 'Asado', percentage: 100 },
    { title: english ? 'UX & UI Design' : 'Diseño UX & UI', percentage: 80 }
  ]

  interface levelsI {
    id: number,
    firstA?: any,
    firstB: any,
    second: string,
    color: string,
    svg?: any
  }

  const bold = (string: string) => {
    return <b style={{ color: 'black' }}>{string}</b>
  }

  const levels: levelsI[] = [
    { id: 0, firstA: english ? `I'm the `: `Soy el `, firstB: english ?  bold(`master`) : bold(`maestro`), second: english ? `of the universe.` : `del universo.`, color: `#000000`, svg: <MySvg/> },
    //{ id: 1, firstB: english ? <b>High,</b> : <b>Alto,</b>, second: english ? `I'm pretty good.` : `Soy bastante bueno.`, color: `#8ebd7b` },
    { id: 1, firstB: english ? bold(`High,`) : bold(`Alto,`), second: english ? `I'm pretty good.` : `Soy bastante bueno.`, color: `#8ebd7b` },
    { id: 2, firstA: english ? bold(`Medium, `) : bold(`Medio, `), firstB: english ? `I'm trying` : `tratando`, second: english ? `to improve.` : `de mejorar.`, color: `#beca7d` },
    { id: 3, firstA: english ? bold(`Basic, `) : bold(`Básico, `), firstB: english ? `you can't` : `no puedes`, second: english ? `always win..` : `ganar siempre.`, color: `#f4b800` },
    { id: 4, firstB: bold(`Hmm..`), second: english ? `Next question ?` : `Siguiente pregunta ?`, color: `#f44b00` }
  ]

  $(function(){
    levels.map(e => {
      $(`#rocket${e.id}`).on("click", function(){
        $(`.rocket${e.id}`).addClass("animated");
        $(`.rocketTest${e.id}`).addClass("animatedTest");
      });
      return $(`.rocket${e.id}`).on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(`.rocket${e.id}`).removeClass("animated");
        $(`.rocketTest${e.id}`).removeClass("animatedTest");
      });
    })
  });

  return (
    <Box sx={s.background}>
      <Box sx={s.topBottomHelper({ minPort, minLand, medPort, medLand, larPort, larLand })}></Box>
      
      <Box sx={s.middle({ minPort, minLand, medPort, medLand, larPort, larLand })}>
        <Box sx={s.leftRightHelper({ minPort, minLand, medPort, medLand, larPort, larLand })}></Box>
        
        
        <Box sx={s.mainContainer({ length:array.length, minLand })}>
          <Typography sx={s.skills({ minPort, minLand, medPort, medLand, larPort, larLand })}>{english ? `My skills` : `Mis habilidades`}</Typography>

          <ScrollContainer innerRef={useHorizontalScroll()} style={s.scroll()} >
          <Box sx={s.chartContainer({ width, length:array.length, minLand })}>

            
              <Box sx={s.upperChartContainer({ length:array.length })}>
                <Box sx={s.chartRow({ length:array.length })}>
                  {array.map((e) => {
                    return (
                      <Box key={array.indexOf(e)} sx={s.columnBar({ percentage:e.percentage })}>
                        <Box sx={s.leftSide({ percentage:e.percentage })}></Box>
                        <Box sx={s.centerSide({ percentage:e.percentage })}><Typography sx={s.onlyMinLand({ minPort, minLand, medPort, medLand, larPort, larLand })}>{e.title}</Typography></Box>
                        <Box sx={s.rightSide({ percentage:e.percentage })}></Box>
                      </Box>
                    )
                  })}
                </Box>
                <Box sx={s.upperChartContainerRight({ minPort, minLand, medPort, medLand, larPort, larLand })}>
                  {levels.map((e, index) => {
                    return (

                      <Box
                        key={levels.indexOf(e)}
                        sx={s.level({ bgColor:e.color, minPort, minLand, medPort, medLand, larPort, larLand })}
                        className={`rocket${index}`}
                        id={`rocket${index}`}
                      >
                        <Box sx={s.innerLevel({ minPort, minLand, medPort, medLand, larPort, larLand })}>
                          <Typography sx={s.levelTitle}>{e.firstA}{e.firstB}</Typography>
                          <Typography sx={s.levelTitle}>{e.second}</Typography>
                        </Box>
                        <Box sx={s.boxSVG({ minPort, minLand, medPort, medLand, larPort, larLand })}>
                          <SvgIcon
                            viewBox='0 0 36 30'
                            sx={s.imageSVG({ minPort, minLand, medPort, medLand, larPort, larLand })}
                          >
                            {e.svg}
                          </SvgIcon>
                        </Box>
                        <Box
                          className={`rocketTest${index}`}
                          id={`rocketTest${index}`}
                          sx={s.colorLevel({ minPort, minLand, medPort, medLand, larPort, larLand,color:e.color })}
                        ></Box>
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
              </Box>

            

          </Box>
          </ScrollContainer>


        </Box>

          
        
        <Box sx={s.leftRightHelper({ minPort, minLand, medPort, medLand, larPort, larLand })}></Box>
      </Box>
      
      <Box sx={s.topBottomHelper({ minPort, minLand, medPort, medLand, larPort, larLand })}></Box>
    </Box>
  )
}

export default Skills;