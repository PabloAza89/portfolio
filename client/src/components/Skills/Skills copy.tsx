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
  
  const levels: levelsI[] = [
    { first: ``, second: ``, color: `red` }
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
          <Box sx={s.level}>
            <Box sx={s.innerLevel}>
              <Typography sx={s.levelTitle}>I'm the <b>master</b></Typography>
              <Typography sx={s.levelTitle}>of the universe.</Typography>
            </Box>
            <Box sx={s.colorLevel}></Box>
          </Box>
          <Box sx={s.level}>
            <Box sx={s.innerLevel}>
              <Typography sx={s.levelTitle}><b>High,</b></Typography>
              <Typography sx={s.levelTitle}>I'm pretty good.</Typography>
            </Box>
          </Box>
          <Box sx={s.level}>
            <Box sx={s.innerLevel}>
              <Typography sx={s.levelTitle}><b>Medium,</b></Typography>
              <Typography sx={s.levelTitle}>I'm trying to improve.</Typography>
            </Box>  
          </Box>
          <Box sx={s.level}>
            <Box sx={s.innerLevel}>
              <Typography sx={s.levelTitle}><b>Basic,</b></Typography>
              <Typography sx={s.levelTitle}>you can't always win..</Typography>
            </Box>
          </Box>
          <Box sx={s.level}>
            <Box sx={s.innerLevel}>
              <Typography sx={s.levelTitle}><b>Hmm..</b></Typography>
              <Typography sx={s.levelTitle}>Next question ?</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Skills;