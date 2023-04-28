import { Box } from '@mui/material';
import BackButton from '../BackButton/BackButton';
import UnderConstruction from '../UnderConstruction/UnderConstruction';

function Skills() {
  
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '93vh', width: '97vw', background: 'none'}}>
      <BackButton />
      <UnderConstruction />
    </Box>
  )
}

export default Skills;