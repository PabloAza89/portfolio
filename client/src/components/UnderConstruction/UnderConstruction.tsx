import { Box, CardMedia, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { 
  background, textUpperOneLine, textUpperTwoLines,
  textLowerOneLine, gearBig, gearMed, gearMin
} from '../../styles/UnderConstructionSX';

function UnderConstruction() {

  const english = useSelector((state: {english:boolean}) => state.english)
  const currentWidth = useSelector((state: {currentWidth:number}) => state.currentWidth)
  const darkMode = useSelector( (state: {darkMode:boolean}) => state.darkMode)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)
  const staticRefWidth = useSelector((state: {staticRefWidth:number}) => state.staticRefWidth)
  const staticRefHeight = useSelector((state: {staticRefHeight:number}) => state.staticRefHeight)
  const maxStaticReference = useSelector((state: {maxStaticReference:number}) => state.maxStaticReference)
  const currentHeight = useSelector((state: {currentHeight:number}) => state.currentHeight)

  return (
    <Box sx={background( staticRefWidth )}>
      <Typography sx={textUpperOneLine({ darkMode, minPort, minLand, medPort, medLand, larPort })}>{ english ? 'SECTION UNDER CONSTRUCTION !' : 'SECCIÓN BAJO CONSTRUCCIÓN !' }</Typography>
      <Typography sx={textUpperTwoLines({ darkMode, minPort, minLand, medPort, medLand, larPort })}>{ english ? 'SECTION UNDER CONSTRUCTION !' : 'SECCIÓN BAJO CONSTRUCCIÓN !' }</Typography>
      <Typography sx={textLowerOneLine({ darkMode, minPort, minLand, medPort, medLand, larPort })}>{ english ? 'Section Under Construction !' : 'Sección Bajo Construcción !' }</Typography>
      <CardMedia component="div" sx={gearBig({ darkMode, minPort, minLand, medPort, medLand, larPort })} />
      <CardMedia component="div" sx={gearMed({ darkMode, minPort, minLand, medPort, medLand, larPort })} />
      <CardMedia component="div" sx={gearMin({ darkMode, minPort, minLand, medPort, medLand, larPort })} />
    </Box>
  )
}

export default UnderConstruction;