import { useSelector } from 'react-redux';
import { bgRed, flex, column, row, bgNone, noSelect } from './CommonsSX';
import store from '../store/store'

function DarkModeSX() {

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
  const currentWidth = useSelector((state: {currentWidth:number}) => state.currentWidth)

  const background = () => {
    return {
      //position: currentWidth < 415 ? 'absolute' : 'null',
      position: 'absolute',
      right: '0.5vw',
      //top: currentWidth < 415 ? '2vh' : null,
      top: '0.5vw',
      padding: '0px !important',
      minWidth: '2.1vw !important',
      'max-width': '2.1vw !important',
      'min-height': '2.1vw !important',
      'max-height': '2.1vw !important'
    }
  }

  const iconDay = () => {
    return {
      width: '1.6vw'
    }
  }

  const iconNight = () => {
    return {
      width: '1.6vw'
    }
  }

    return { background, iconDay, iconNight }
}

export default DarkModeSX

