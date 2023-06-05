import { Box, Typography } from '@mui/material';
import * as s from '../../styles/SkillsSX';
import { useSelector } from 'react-redux';

function Skills() {

  const english = useSelector((state: {english:boolean}) => state.english)

  interface arrayI {
    title: string,
    percentage: number
  }

  const array: arrayI[] = [
    { title: 'HTML & CSS', percentage: 30 },
    { title: 'Sequelize', percentage: 90 },
    { title: 'Javascript', percentage: 100 },
    { title: 'Typescript', percentage: 93 },
    { title: 'React & Redux', percentage: 50 },
    { title: english ? 'BBQ' : 'Asado', percentage: 75 },
    { title: english ? 'UX & UI Design' : 'Diseño UX & UI', percentage: 25 }
  ]

  interface levelsI {
    firstA?: any,
    firstB: any,
    second: string,
    color: string
  }
 
  const levels: levelsI[] = [
    { firstA: english ? `I'm the `: `Soy el `, firstB: english ? <b>master</b> : <b>maestro</b>, second: english ? `of the universe.` : `del universo.`, color: `black` },
    { firstB: english ? <b>High,</b> : <b>Alto,</b>, second: english ? `I'm pretty good.` : `Soy bastante bueno.`, color: `green` },
    { firstA: english ? <b>Medium, </b> : <b>Medio, </b>, firstB: english ? `I'm trying` : `tratando`, second: english ? `to improve.` : `de mejorar.`, color: `lightgreen` },
    { firstA: english ? <b>Medium, </b> : <b>Medio, </b>, firstB: english ? `you can't` : `no puedes`, second: english ? `always win..` : `ganar siempre.`, color: `blue` },
    { firstB: <b>Hmm..</b>, second: english ? `Next question ?` : `Siguiente pregunta ?`, color: `red` }
  ]

  return (
    <Box sx={s.background}>
      <Box sx={s.mainContainer}>
        <Box sx={s.chartRow}>
          {array.map((e) => {
            return (
              <Box sx={s.columnBar({ percentage:e.percentage })}>
                <Box sx={s.leftSide({ percentage:e.percentage })}></Box>
                <Box sx={s.centerSide({ percentage:e.percentage })}></Box>
                <Box sx={s.rightSide({ percentage:e.percentage })}></Box>
              </Box>
            )
          })}
        </Box>
        <Box sx={s.titlesBox}>
          {array.map((e) => {
            return (
              <Typography sx={s.titles}>
                {e.title}
              </Typography>
            )
          })}
        </Box>
        <Box sx={s.overlapping}>
          {levels.map((e) => {
            return (
              <Box sx={s.level}>
                <Box sx={s.innerLevel}>
                  <Typography sx={s.levelTitle}>{e.firstA}{e.firstB}</Typography>
                  <Typography sx={s.levelTitle}>{e.second}</Typography>
                </Box>
                <Box sx={s.colorLevel({ color:e.color })}></Box>
              </Box>
            )
          })}
        </Box>
      </Box>
    </Box>
  )
}

export default Skills;