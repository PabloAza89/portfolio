import { Box, CardMedia, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import {
  background, textUpperOneLine, textUpperTwoLines,
  textLowerOneLine, gearBig, gearMed, gearMin
} from '../../styles/UnderConstructionSX';

function UnderConstruction() {

  const english = useSelector((state: {english:boolean}) => state.english)
  const darkMode = useSelector( (state: {darkMode:boolean}) => state.darkMode)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)

  return (
    <Box sx={background}>
      <Typography sx={textUpperOneLine({ darkMode, minPort, minLand, larPort })}>{ english ? 'SECTION UNDER CONSTRUCTION !' : 'SECCIÓN BAJO CONSTRUCCIÓN !' }</Typography>
      <Typography sx={textUpperTwoLines({ darkMode, minPort, minLand, larPort })}>{ english ? 'SECTION UNDER CONSTRUCTION !' : 'SECCIÓN BAJO CONSTRUCCIÓN !' }</Typography>
      <Typography sx={textLowerOneLine({ darkMode, minPort, minLand, larPort })}>{ english ? 'Section Under Construction !' : 'Sección Bajo Construcción !' }</Typography>
      <CardMedia component="div" sx={gearBig({ darkMode, minPort, minLand, larPort })} />
      <CardMedia component="div" sx={gearMed({ darkMode, minPort, minLand, larPort })} />
      <CardMedia component="div" sx={gearMin({ darkMode, minPort, minLand, larPort })} />
    </Box>
  )
}

export default UnderConstruction;