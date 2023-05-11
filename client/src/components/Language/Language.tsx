import { Box, CardMedia } from '@mui/material';
import { cyan } from '@mui/material/colors';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";
import { languageChanger } from '../../actions';
import lanEn from '../../images/lanEn.png';
import lanEs from '../../images/lanEs.png';
import { background, flagContourEn, lanEnFlag, flagContourEs, lanEsFlag } from '../../styles/LanguageSX';

function Language() {

  const dispatch = useDispatch()
  
  const english = useSelector((state: {english:boolean}) => state.english)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)
  const percentageResizedHeight = useSelector((state: {percentageResizedHeight:number}) => state.percentageResizedHeight)
  const maxStaticReference = useSelector((state: {maxStaticReference: number}) => state.maxStaticReference)

  const location = useLocation()

  return (
    <Box sx={background({ minPort, minLand, larPort, larLand, location:location.pathname, percentageResizedHeight })}>
      <Box sx={flagContourEn({ english, minPort, minLand, medPort, medLand, larPort, maxStaticReference })}>
        <CardMedia src={lanEn} onClick={() => dispatch(languageChanger(true))} sx={lanEnFlag({ minPort, minLand, medPort, medLand, larPort, maxStaticReference })}></CardMedia>
      </Box>
      <Box sx={flagContourEs({ english, minPort, minLand, medPort, medLand, larPort, maxStaticReference })} >
        <CardMedia src={lanEs} onClick={() => dispatch(languageChanger(false))} sx={lanEsFlag({ minPort, minLand, medPort, medLand, larPort, maxStaticReference })}></CardMedia>
      </Box>
    </Box>
  )
}

export default Language;
