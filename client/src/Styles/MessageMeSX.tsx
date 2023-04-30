import { useSelector } from 'react-redux';
import { flex, noSelect, row } from './CommonsSX';

function MessageMeSX() {

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
      ...flex, ...row,
      background: darkMode ? '#253740' : '#3C6478',
      'borderRadius': `${staticRefWidth * 1}px`,
      alignSelf: 'center',
      'justify-content': 'space-evenly',
      width: minPort ? '90vw' : minLand ? '70vw' : larPort ? '70vw' : '70vw',
      height: minPort ? '70vh' : minLand ? '60vh' : larPort ? '60vh' : '60vh',
      top: larPort ? '2vh' : 'null'
    }
   }

  return { background }
}

export default MessageMeSX

