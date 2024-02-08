import { useEffect } from 'react';
//import LightMode from '@mui/icons-material/LightMode';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setDataTheme } from '../../actions';
import {
  LightMode,
  DarkMode as DarkModeIcon
} from '@mui/icons-material/';
import css from './DarkModeCSS.module.css';
import { CSSRuleExtended } from '../../interfaces/interfaces';
declare namespace CSS {
  interface PropertyDefinition {
    name: string
    syntax?: string
    inherits: boolean
    initialValue?: string
  }
  function registerProperty (propertyDefinition: PropertyDefinition): undefined
}

function DarkMode() {

  const dispatch = useDispatch()
  const dataTheme = useSelector((state: { dataTheme: string }) => state.dataTheme)

  /* useEffect(() => {
    let night: string | null = localStorage.getItem('night');
    if (night === ( null || 'false' )) dispatch(setDarkMode(false))
    if (night === 'true') dispatch(setDarkMode(true))
  }) */

 /*  interface CSS {
    registerProperty: (any) => any
  } */

  

  useEffect(() => {
    if (dataTheme === "os") {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) document.documentElement.setAttribute("data-theme", "dark")
      else document.documentElement.setAttribute("data-theme", "light")
    }
    if (dataTheme === "light") document.documentElement.setAttribute("data-theme", "light")
    if (dataTheme === "dark") document.documentElement.setAttribute("data-theme", "dark");
  })

  const abc = (e:any) => {
    if (e.matches && dataTheme === "os") document.documentElement.setAttribute("data-theme", "dark")
    else if (dataTheme === "os") document.documentElement.setAttribute("data-theme", "light")
  }

  useEffect(() => {
    let OSValue = window.matchMedia("(prefers-color-scheme: dark)");
    OSValue.addEventListener("change", abc)
    return () => OSValue.removeEventListener("change", abc)
  })

  console.log("theme theme", dataTheme)

  let arr = [ "os", "light", "dark" ]

  return (
    <Button
      onClick={() => {
        //console.log("CLICKED")
        if (arr.indexOf(dataTheme) + 1 === arr.length) {
          dispatch(setDataTheme(arr[0]))
          localStorage.setItem('dataTheme', (arr[0]).toString());
        } else {
          dispatch(setDataTheme(arr[arr.indexOf(dataTheme) + 1]))
          localStorage.setItem('dataTheme', (arr[arr.indexOf(dataTheme) + 1]).toString());
        }
        //console.log("111", dataTheme)
      }}
      variant="contained"
      className={css.background}
    >
      {
        dataTheme === "os" ?
        <div  className={css.os}>os</div> :
        dataTheme === "light" ?
        <LightMode className={css.iconDay} /> :
        <DarkModeIcon className={css.iconNight}/>
      }
    </Button>
  )
}

export default DarkMode;
