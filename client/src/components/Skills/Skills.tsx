import { Box } from '@mui/material';
import BackButton from '../BackButton/BackButton';
import UnderConstruction from '../UnderConstruction/UnderConstruction';
import SkillsSX from '../../styles/SkillsSX';

function Skills() {
  
  return (
    <Box sx={SkillsSX().background}>
      <UnderConstruction />
    </Box>
  )
}

export default Skills;