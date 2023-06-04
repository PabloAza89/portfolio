import { Box } from '@mui/material';
import * as s from '../../styles/SkillsSX';

function Skills() {

  interface arrayI {
    percentage: number
  }

  const array: arrayI[] = [
    { percentage: 25 },
    { percentage: 50 },
    { percentage: 75 },
    { percentage: 100 }
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
          })}          {/* <Box sx={s.level({ percentage:25 })}>
            <Box sx={s.leftSide({ percentage:25 })}></Box>
            <Box sx={s.centerSide({ percentage:25 })}></Box>
            <Box sx={s.rightSide({ percentage:25 })}></Box>
          </Box>
          <Box sx={s.level({ percentage:50 })}>
            <Box sx={s.leftSide({ percentage:50 })}></Box>
            <Box sx={s.centerSide({ percentage:50 })}></Box>
            <Box sx={s.rightSide({ percentage:50 })}></Box>
          </Box>
          <Box sx={s.level({ percentage:75 })}>
            <Box sx={s.leftSide({ percentage:75 })}></Box>
            <Box sx={s.centerSide({ percentage:75 })}></Box>
            <Box sx={s.rightSide({ percentage:75 })}></Box>
          </Box> */}
        </Box>
      </Box>
    </Box>
  )
}

export default Skills;