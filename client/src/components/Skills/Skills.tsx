import { Box } from '@mui/material';
import * as s from '../../styles/SkillsSX';

function Skills() {

  interface arrayI {
    percentage: number
  }

  const array: arrayI[] = [
    { percentage: 100 },
    { percentage: 50 },
    { percentage: 75 },
    { percentage: 25 }
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
      </Box>
    </Box>
  )
}

export default Skills;