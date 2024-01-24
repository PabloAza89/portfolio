import { useEffect } from 'react';
import LightMode from '@mui/icons-material/LightMode';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../actions';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import css from './DarkModeCSS.module.css';

function DarkMode() {

  const dispatch = useDispatch()
  const theme = useSelector( (state: {theme:any}) => state.theme)

  /* useEffect(() => {
    let night: string | null = localStorage.getItem('night');
    if (night === ( null || 'false' )) dispatch(setDarkMode(false))
    if (night === 'true') dispatch(setDarkMode(true))
  }) */

  useEffect(() => {
    if (theme === "auto") {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) document.documentElement.setAttribute("data-theme", "dark")
      else document.documentElement.setAttribute("data-theme", "light")
    }
    if (theme === "light") document.documentElement.setAttribute("data-theme", "light")
    if (theme === "dark") document.documentElement.setAttribute("data-theme", "dark")
  })

  const abc = (e:any) => {
    if (e.matches && theme === "auto") document.documentElement.setAttribute("data-theme", "dark")
    else if (theme === "auto")document.documentElement.setAttribute("data-theme", "light")
  }

  useEffect(() => {
    let OSValue = window.matchMedia("(prefers-color-scheme: dark)");
    OSValue.addEventListener("change", abc)
    return () => OSValue.removeEventListener("change", abc)
  })

  console.log("theme theme", theme)

  let arr = [ "auto", "light", "dark" ]

  return (
    <Button
      onClick={() => {
        console.log("CLICKED")
        arr.indexOf(theme) + 1 === arr.length ?
        dispatch(setTheme(arr[0])) :
        dispatch(setTheme(arr[arr.indexOf(theme) + 1]))
      }}
      variant="contained"
      className={css.background}
    >
      {
        theme === "auto" ?
        <div  className={css.auto}>auto</div> :
        theme === "light" ?
        <LightMode className={css.iconDay} /> :
        <DarkModeIcon className={css.iconNight}/>
      }
    </Button>
  )
}

export default DarkMode;
