import { Box, CardMedia, Typography } from '@mui/material';
import UnderConstructionSX from '../../styles/UnderConstructionSX';

function UnderConstruction() {

  return (
    <Box >
      <Typography sx={UnderConstructionSX().textUpperOneLine}>SECTION UNDER CONSTRUCTION !</Typography>
      <Typography sx={UnderConstructionSX().textUpperTwoLines}>SECTION UNDER CONSTRUCTION !</Typography>
      <Typography sx={UnderConstructionSX().textLowerOneLine}>Section Under Construction !</Typography>
      <CardMedia src={""} sx={UnderConstructionSX().gearBig} />
      <CardMedia src={""} sx={UnderConstructionSX().gearMed} />
      <CardMedia src={""} sx={UnderConstructionSX().gearMin} />
    </Box>
  )
}

export default UnderConstruction;