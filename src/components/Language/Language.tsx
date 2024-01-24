import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { languageChanger } from '../../actions';
import css from './LanguageCSS.module.css';
import lanEn from '../../images/lanEn.png';
import lanEs from '../../images/lanEs.png';
import $ from 'jquery';
import { easings } from '../../styles/CommonsSX';

function Language() {

  easings() // Jquery easings..

  const dispatch = useDispatch()

  const [ show, setShow ] = useState<boolean>(false)
  const english = useSelector((state: {english:boolean}) => state.english)

  useEffect(() => {
    let langEn = document.querySelector("[class*='lanEnFlag']") as HTMLElement
    let langEs = document.querySelector("[class*='lanEsFlag']") as HTMLElement
    if (english && langEn && langEs) {
      langEn.style.border = "solid #26c6da 2px"
      langEs.style.border = "solid transparent 2px"
    }
    else if (!english && langEn && langEs) {
      langEn.style.border = "solid transparent 2px"
      langEs.style.border = "solid #26c6da 2px"
    }
  }, [english])

  useEffect(() => {
    $(function() {
      if (show) { // show -> hidden
        $(`#buttonShowLanguage`)
          .stop()
          .css("left", "6px")
        $(`#flags`)
          .css("left", "-60px")
        $(`#buttonShowLanguage`).on("click", function() {
          $(`#buttonShowLanguage`)
            .stop()
            .css(`animationName`,`none`)
            .css(`animationDuration`,`0s`)
            .css(`animationDelay`,`0s`)
            .css(`animationIterationCount`,`none`)
          $(`#flags`)
            .stop()
            .animate( { left: -65 }, { queue: false, easing: 'easeOutCubic', duration: 800 })
        })
      }

      else if (!show) { // hidden -> show
        $(`#buttonShowLanguage`)
          .stop()
          .css("left", "6px")
        $(`#flags`)
          .css("left", "-65px")
        $(`#buttonShowLanguage`).on("click", function() {
          $(`#buttonShowLanguage`)
            .stop()
            .css(`animationName`,`none`)
            .css(`animationDuration`,`0s`)
            .css(`animationDelay`,`0s`)
            .css(`animationIterationCount`,`none`)
          $(`#flags`)
            .stop()
            .animate( { left: 43 }, { queue: false, easing: 'easeOutCubic', duration: 800 })
        })
      }
    })
  }, [show])

  const [ timeoutLanguage, setTimeoutLanguage ] = useState<ReturnType<typeof setTimeout>>()
  const autoHideLanguage = () => $(() => $(`#buttonShowLanguage`).trigger("click"))

  // useEffect(() => {
  //   let langEn: string | null = localStorage.getItem('langEn');
  //   if (langEn === ( null || 'true' )) dispatch(languageChanger(true))
  //   if (langEn === 'false') dispatch(languageChanger(false))
  // },[])

  return (
    <div className={css.background}>
      <div
        className={css.sliderBox}
        id={`flags`}
      >
        <img
          src={lanEn}
          onClick={() => {
            localStorage.setItem('langEn', (!english).toString());
            dispatch(languageChanger(true));
            clearTimeout(timeoutLanguage);
            setTimeoutLanguage(setTimeout(autoHideLanguage, 2700))
          }}
          className={css.lanEnFlag}
          alt=""
        />
        <img
          src={lanEs}
          onClick={() => {
            localStorage.setItem('langEn', (!english).toString());
            dispatch(languageChanger(false));
            clearTimeout(timeoutLanguage);
            setTimeoutLanguage(setTimeout(autoHideLanguage, 2700))
          }}
          className={css.lanEsFlag}
          alt=""
        />
      </div>
      <img
        src={ english ? lanEn : lanEs}
        id={`buttonShowLanguage`}
        className={css.button}
        onClick={() => {
          clearTimeout(timeoutLanguage)
          if (!show) setTimeoutLanguage(setTimeout(autoHideLanguage, 2700))
          setShow(!show)
        }}
        alt=""
      />
    </div>
  )
}

export default Language;