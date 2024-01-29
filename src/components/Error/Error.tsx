import { useSelector } from 'react-redux';
import error from '../../images/error.gif';
import css from './ErrorCSS.module.css';
import loadingImage from '../../images/loadingImage.png';

function Error() {

  const english = useSelector((state: {english:boolean}) => state.english)

  const loadedUpdater = () => {
    console.log("LOADED ALL GIF")
    let backgroundPH = document.getElementById(`placeholderAnimationError`)
    if (backgroundPH !== null) backgroundPH.style.display = "none"
    let errorGIF = document.getElementById(`errorGif`)
    if (errorGIF !== null) errorGIF.style.visibility = "visible"
  }

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