import { useEffect } from 'react';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";
import { languageChanger } from '../../actions';
import * as s from '../../styles/LanguageSX';
import lanEn from '../../images/lanEn.png';
import lanEs from '../../images/lanEs.png';

function Language() {

  const dispatch = useDispatch()
  const location = useLocation()

  const english = useSelector((state: {english:boolean}) => state.english)
  const height = useSelector((state: {height:number}) => state.height)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)
  const percentageResizedHeight = useSelector((state: {percentageResizedHeight:number}) => state.percentageResizedHeight)

  useEffect(() => {
    let langEn: string | null = localStorage.getItem('langEn');
    if (langEn === ( null || 'true' )) dispatch(languageChanger(true))
    if (langEn === 'false') dispatch(languageChanger(false))
  })

  return (
    <Box sx={s.background({ height, minLand, larPort, larLand, location:location.pathname, percentageResizedHeight })}>
      <Box
        component="img"
        src={lanEn}
        onClick={() => { localStorage.setItem('langEn', (!english).toString()); dispatch(languageChanger(true)) }}
        sx={s.lanEnFlag({ english, minPort, minLand, medPort, medLand, larPort })}
      />
      <Box
        component="img"
        src={lanEs}
        onClick={() => { localStorage.setItem('langEn', (!english).toString()); dispatch(languageChanger(false)) }}
        sx={s.lanEsFlag({ english, minPort, minLand, medPort, medLand, larPort })}
      />
    </Box>
  )
}

export default Language;
