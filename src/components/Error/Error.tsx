import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { error, loadingImage } from '../../images/images';
import css from './ErrorCSS.module.css';

function Error() {

  const english = useSelector((state: {english:boolean}) => state.english)

  const loadedUpdater = () => {
    let backgroundPH = document.getElementById(`placeholderAnimationError`)
    if (backgroundPH !== null) backgroundPH.style.display = "none"
    let errorGIF = document.getElementById(`errorGif`)
    if (errorGIF !== null) errorGIF.style.visibility = "visible"
  }

  const errorBGHandler: () => void = () => {
    let el = (document.querySelector(`[class*="ErrorCSS_background"]`) as HTMLElement)
    if (el !== null) document.documentElement.style.setProperty("--diff", `${el.offsetWidth - el.clientWidth}`);
  }

  useEffect(() => {
    errorBGHandler()
    window.addEventListener('resize', errorBGHandler);
    return () => window.removeEventListener('resize', errorBGHandler);
  },[])

  window.addEventListener('load', () => errorBGHandler())

  return (
    <div className={css.background}>
      <div className={css.mainContainer}>
        <div>
          <img
            src={error}
            onLoad={() => loadedUpdater()}
            id={`errorGif`}
            className={css.errorGif}
            alt=""
          />
          <img
            src={loadingImage}
            id={`placeholderAnimationError`}
            className={css.placeholderAnimation}
            alt=""
          />
        </div>
        <div className={css.message}>
          { english ? `This page does not exist.` : `Esta página no existe.` }
        </div>
      </div>
    </div>
  )
}

export default Error;