import { useSelector } from 'react-redux';
import { bgRed, flex, column, row, bgNone, noSelect, relative } from './CommonsSX';
import store from '../store/store'
import { grey , blue } from '@mui/material/colors';

function AppSX() {
  
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
      ...relative, ...flex,
      backgroundColor: grey[400],
      overflow: 'hidden',
      width: '100vw',
      height: '100vh'
    }
   }

  const blackWhite = () => {
    return {
      ...relative, ...flex, ...column,
      width: '100vw',
      margin: `${staticRefWidth * 0.6}px`,
      background: 'linear-gradient(to bottom right, black 49.9%,white 50.1%)'
    }
  }



  return { background, blackWhite }
}

export default AppSX;

