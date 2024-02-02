import { useEffect, useState, useRef } from 'react';
import { Button } from '@mui/material';
import DarkMode from '../DarkMode/DarkMode';
import Language from '../Language/Language';
import { Settings as SettingsIcon } from '@mui/icons-material/';
import css from './SettingsCSS.module.css';
import { easings } from '../commons/CommonCSS';
import $ from 'jquery';

function Settings() {

  easings() // Jquery easings..

  const [ show, setShow ] = useState<boolean>(false)
  const timeoutSettings = useRef<ReturnType<typeof setTimeout>>();
  const autoHideSettings = () => $(`#buttonSettings`).trigger("click")

  useEffect(() => {
    if (!show) { // show -> hidden
      $(`#buttonSettings`).on("click", function() {
        $(`#moveLeft`)
          .animate({ left: -49 }, { queue: false, easing: 'easeOutCubic', duration: 800 })
        $(`#moveTop`)
          .animate({ top: -49 }, { queue: false, easing: 'easeOutCubic', duration: 800 })
      })
      clearTimeout(timeoutSettings.current)
    }
    else if (show) { // hidden -> show
      $(`#buttonSettings`).on("click", function() {
        $(`#moveLeft`)
          .animate({ left: 0 }, { queue: false, easing: 'easeOutCubic', duration: 800 })
        $(`#moveTop`)
          .animate({ top: 0 }, { queue: false, easing: 'easeOutCubic', duration: 800 })
      })
    }
  }, [show])

  console.log("SHOW", show)

  const keepAnimation = () => {
    setShow(true)
    clearTimeout(timeoutSettings.current)
    timeoutSettings.current = (setTimeout(autoHideSettings, 2700))
  }

  return (
    <div className={css.background}>
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
