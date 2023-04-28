import { Box, CardMedia, Typography } from '@mui/material';
import UnderConstructionSX from '../../styles/UnderConstructionSX';

function UnderConstruction() {

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '93vh', width: '97vw', background: 'none'}}>
      <Typography sx={UnderConstructionSX().textUpperOneLine}>SECTION UNDER CONSTRUCTION !</Typography>
      <Typography sx={UnderConstructionSX().textUpperTwoLines}>SECTION UNDER CONSTRUCTION !</Typography>
      <Typography sx={UnderConstructionSX().textLowerOneLine}>Section Under Construction !</Typography>
      <CardMedia sx={UnderConstructionSX().gearBig} />
      <CardMedia sx={UnderConstructionSX().gearMed} />
      <CardMedia sx={UnderConstructionSX().gearMin} />
    </Box>
  )
}

export default UnderConstruction;