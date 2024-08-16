import { useEffect, CSSProperties, useState, useRef } from 'react';
import { Button } from '@mui/material';
import DarkMode from '../DarkMode/DarkMode';
import Language from '../Language/Language';
import { Settings as SettingsIcon } from '@mui/icons-material/';
import css from './SettingsCSS.module.css';

function Settings() {

  const [ show, setShow ] = useState<boolean>(false)
  const timeoutSettings = useRef<ReturnType<typeof setTimeout>>();
  const autoHideSettings = () => (document.getElementById(`buttonSettings`) as HTMLElement).click()

  useEffect(() => {
    if (!show) {
      (document.getElementById(`buttonSettings`) as HTMLElement).addEventListener("click", () => {
        (document.getElementById(`moveLeft`) as HTMLElement).style.left = '-49px';
        (document.getElementById(`moveTop`) as HTMLElement).style.top = '-49px';
      });
      clearTimeout(timeoutSettings.current)
    }
    else if (show) {
      (document.getElementById(`buttonSettings`) as HTMLElement).addEventListener("click", () => {
        (document.getElementById(`moveLeft`) as HTMLElement).style.left = '0px';
        (document.getElementById(`moveTop`) as HTMLElement).style.top = '0px';
      });
    }
  }, [show])

  const keepAnimation = () => {
    setShow(true)
    clearTimeout(timeoutSettings.current)
    timeoutSettings.current = (setTimeout(autoHideSettings, 2700))
  }

  const [ overflowListener, setOverflowListener ] = useState<any>()

  useEffect(() => {
    let el = Array.from(document.querySelectorAll(`[class*="CSS_background"]`))
    let target = el.filter((x:any) => x.offsetWidth !== 0)[0] as HTMLElement
    if (target !== null) {
      setOverflowListener(target.offsetWidth - target.scrollWidth)
      window.addEventListener('resize', function() { setOverflowListener(target.offsetWidth - target.scrollWidth) })
    }
  }, [])

  // TO AVOID RE-RENDER ON PROJECTS.TSX //

  const projectsBGHandler: () => void = () => {
    let el = (document.querySelector(`[class*="ProjectsCSS_background"]`) as HTMLElement)
    if (el !== null) document.documentElement.style.setProperty("--diff", `${el.offsetWidth - el.clientWidth}`);
  }

  useEffect(() => {
    projectsBGHandler()
    window.addEventListener('resize', projectsBGHandler);
    return () => window.removeEventListener('resize', projectsBGHandler);
  },[])

  window.addEventListener('load', () => projectsBGHandler())

  // TO AVOID RE-RENDER ON PROJECTS.TSX //

  return (
    <div style={{ "--scrollwidth": overflowListener } as CSSProperties} className={css.background}>
      <Button
        onClick={() => {
          clearTimeout(timeoutSettings.current);
          timeoutSettings.current = (setTimeout(autoHideSettings, 2700))
          setShow(!show)
        }}
        variant="contained"
        id={`buttonSettings`}
        className={css.buttonSettings}
      >
        <SettingsIcon />
      </Button>
      <div
        id={`moveLeft`}
        className={css.moveLeft}
        onClick={() => keepAnimation()}
      >
        <DarkMode />
      </div>
      <div
        id={`moveTop`}
        className={css.moveTop}
        onClick={() => keepAnimation()}
      >
        <Language />
      </div>
    </div>
  )
}

export default Settings;
