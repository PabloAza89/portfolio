import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { languageChanger } from '../../actions';
import { Button } from '@mui/material';
import css from './LanguageCSS.module.css';
import lanEn from '../../images/lanEn.png';
import lanEs from '../../images/lanEs.png';

function Language() {

  const dispatch = useDispatch()
  const english = useSelector((state: {english:boolean}) => state.english)

  useEffect(() => {
    let el =  document.getElementById('buttonLanguage')
    if (el !== null) {
      english ?
      el.style.backgroundImage = `url(${lanEn})` :
      el.style.backgroundImage = `url(${lanEs})`
    }
  }, [english])

  let languageHandler = () => {
    dispatch(languageChanger(!english))
    localStorage.setItem('langEn', (!english).toString());
  }

  return (
    <Button
      id={`buttonLanguage`}
      onClick={() => languageHandler()}
      variant="contained"
      className={css.background}
    />
  )
}

export default Language;