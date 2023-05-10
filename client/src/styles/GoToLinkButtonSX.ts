import { useSelector } from 'react-redux';
import { aic, column, jcc, relative } from './CommonsSX';

function GoToLinkButtonSX() {

  const darkMode = useSelector( (state: {darkMode:boolean}) => state.darkMode)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)

   const background = () => {
    return {
        ...column, ...aic, ...jcc, ...relative,
        background: darkMode ? '#48555e' : null,
        padding: '0vw !important',
        minWidth: minPort ? '0vh !important' : minLand ? '0vh !important' : larPort ? '0vh !important' : '0vh !important',
        width: minPort ? '4.5vw !important' : minLand ? '6vh !important' : larPort ? '4.5vw !important' : '4vh !important',
        height: minPort ? '4.5vw !important' : minLand ? '6vh !important' : larPort ? '4.5vw !important' : '4vh !important',
    }
   }

   const icon = () => {
    return {
        transform: 'scaleX(-1)',
        padding: '0vw !important',
        width: minPort ? '4vw !important' : minLand ? '5vh !important' : larPort ? '3vw !important' : '3.5vh !important'
    }
   }

  return { background, icon }
}

export default GoToLinkButtonSX;

