import { Box } from '@mui/material';
import * as s from '../../styles/SkillsSX';

function Skills() {
  
  return (
    <Box sx={s.background}>
      <Box sx={s.mainContainer}>
        <Box sx={s.chartRow}>
          <Box sx={s.level({ percentage:25 })}>
            <Box sx={s.leftSide({ percentage:25 })}></Box>
            {/* <Box sx={s.centerSide}></Box> */}
            {/* <Box sx={s.rightSide}></Box> */}
          </Box>
          <Box sx={s.level({ percentage:50 })}>
            <Box sx={s.leftSide({ percentage:50 })}></Box>
            {/* <Box sx={s.centerSide}></Box> */}
            {/* <Box sx={s.rightSide}></Box> */}
          </Box>
          <Box sx={s.level({ percentage:75 })}>
            <Box sx={s.leftSide({ percentage:75 })}></Box>
            {/* <Box sx={s.centerSide}></Box> */}
            {/* <Box sx={s.rightSide}></Box> */}
          </Box>
        </Box>
        <Box sx={s.chartRow}></Box>
        <Box sx={s.chartRow}></Box>
        <Box sx={s.chartRow}></Box>
      </Box>
    </Box>
  )
}

export default Skills;