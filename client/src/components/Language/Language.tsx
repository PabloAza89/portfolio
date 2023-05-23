import { Box, CardMedia } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";
import { languageChanger } from '../../actions';
import { background, lanEnFlag, lanEsFlag } from '../../styles/LanguageSX';
import lanEn from '../../images/lanEn.png';
import lanEs from '../../images/lanEs.png';

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
    <Box sx={background({ minPort, minLand, medPort, medLand, larPort, larLand, location:location.pathname, percentageResizedHeight })}>
      {/* <CardMedia component="div" onClick={() => dispatch(languageChanger(true))} sx={lanEnFlag({ english, minPort, minLand, medPort, medLand, larPort, maxStaticReference })}></CardMedia> */}
      <Box component="img" src={lanEn} onClick={() => dispatch(languageChanger(true))} sx={lanEnFlag({ english, minPort, minLand, medPort, medLand, larPort, maxStaticReference })}></Box>
      {/* <CardMedia component="div" onClick={() => dispatch(languageChanger(false))} sx={lanEsFlag({ english, minPort, minLand, medPort, medLand, larPort, maxStaticReference })}></CardMedia> */}
      <Box component="img" src={lanEs} onClick={() => dispatch(languageChanger(false))} sx={lanEsFlag({ english, minPort, minLand, medPort, medLand, larPort, maxStaticReference })}></Box>
    </Box>
  )
}

export default Language;
