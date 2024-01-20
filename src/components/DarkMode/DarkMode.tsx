import { useEffect } from 'react';
import LightMode from '@mui/icons-material/LightMode';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";
import { setDarkMode } from '../../actions';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import * as s from '../../styles/DarkModeSX';

function DarkMode() {

  const location = useLocation()
  const dispatch = useDispatch()

  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const height = useSelector((state: {height:number}) => state.height)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)
  const percentageResizedHeight = useSelector((state: {percentageResizedHeight:number}) => state.percentageResizedHeight)
  const darkMode = useSelector( (state: {darkMode:boolean}) => state.darkMode)

  useEffect(() => {
    let night: string | null = localStorage.getItem('night');
    if (night === ( null || 'false' )) dispatch(setDarkMode(false))
    if (night === 'true') dispatch(setDarkMode(true))
  })

  //document.documentElement.setAttribute("data-theme", "dark")
  //document.documentElement.setAttribute("data-theme", "dark")
  //console.log("qq", document.documentElement.setAttribute("data-theme", "dark"))
  //console.log("ww", document.documentElement.getAttribute("data-theme"))
  console.log("ww", window.matchMedia("(prefers-color-scheme: light)").matches)
  //console.log("ww", window.matchMedia("(prefers-color-scheme: dark)").matches)
  

  return (
    <Button
      //onClick={() => { localStorage.setItem('night', (!darkMode).toString()); dispatch(setDarkMode(!darkMode)) }}
      onClick={() => {
        console.log("CLICKED")
        document.documentElement.setAttribute("data-theme", "dark")
      }}
      variant="contained"
      sx={s.background({ height,minPort, minLand, medPort, medLand, larPort, larLand, location:location.pathname, percentageResizedHeight })}
    >
      { darkMode ?
        <LightMode sx={s.iconDay({ minPort, minLand, medPort, medLand, larPort })} /> :
        <DarkModeIcon sx={s.iconNight({ minPort, minLand, medPort, medLand, larPort })}/> }
    </Button>
  )
}

export default DarkMode;
