import { Box } from '@mui/material';
import * as s from '../../styles/SkillsSX';

function Skills() {
  
  return (
    <Box sx={s.background}>
      <Box sx={s.mainContainer}>
        <Box sx={s.chartRow}>
          <Box sx={s.level}>
            <Box sx={s.leftSide}></Box>
            <Box sx={s.centerSide}></Box>
            <Box sx={s.rightSide}></Box>
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