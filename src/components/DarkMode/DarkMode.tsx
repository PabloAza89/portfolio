import { useEffect } from 'react';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setDataTheme } from '../../actions';
import { LightMode, DarkMode as DarkModeIcon } from '@mui/icons-material/';
import css from './DarkModeCSS.module.css';

function DarkMode() {

  const dispatch = useDispatch()
  const dataTheme = useSelector((state: { dataTheme: string }) => state.dataTheme)

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

  let arr = [ "os", "light", "dark" ]

  return (
    <Button
      onClick={() => {
        if (arr.indexOf(dataTheme) + 1 === arr.length) {
          dispatch(setDataTheme(arr[0]))
          localStorage.setItem('dataTheme', (arr[0]).toString());
        } else {
          dispatch(setDataTheme(arr[arr.indexOf(dataTheme) + 1]))
          localStorage.setItem('dataTheme', (arr[arr.indexOf(dataTheme) + 1]).toString());
        }
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