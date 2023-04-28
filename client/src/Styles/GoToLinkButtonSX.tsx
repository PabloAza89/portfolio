import { useSelector } from 'react-redux';
import { bgRed, flex, column, row, bgNone, noSelect, aic, jcc, relative } from './CommonsSX';
import store from '../store/store'

function GoToLinkButtonSX() {

  const darkMode = useSelector( (state: {darkMode:boolean}) => state.darkMode)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const MedPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const MedLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)
  const staticRefWidth = useSelector((state: {staticRefWidth:number}) => state.staticRefWidth)  // OJO staticRefWidth
  const staticRefHeight = useSelector((state: {staticRefHeight:number}) => state.staticRefHeight)  // OJO QUE FUNC CON {store.getState().staticRefHeight TAMBIEN
  const maxStaticReference = useSelector((state: {maxStaticReference:number}) => state.maxStaticReference) // OJO store.getState().maxStaticReference
  const currentHeight = useSelector((state: {currentHeight:number}) => state.currentHeight)

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

