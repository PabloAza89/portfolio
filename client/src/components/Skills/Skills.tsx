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
    /* { title: 'Typescript', percentage: 100 }, */
    { title: 'React & Redux', percentage: 50 },
    { title: english ? 'BBQ' : 'Asado', percentage: 75 },
    { title: english ? 'UX & UI Design' : 'Diseño UX & UI', percentage: 25 }
  ]
  
  return (
    <Box sx={s.background}>
      <Box sx={s.mainContainer}>
        <Box sx={s.chartRow}>
          {array.map((e) => {
            return (
              <Box sx={s.level({ percentage:e.percentage })}>
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
      </Box>
    </Box>
  )
}

export default Skills;