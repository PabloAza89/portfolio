import { useSelector } from 'react-redux';
import { absolute, noSelect } from './CommonsSX';

function SkillsSX() {

  const darkMode = useSelector( (state: {darkMode:boolean}) => state.darkMode)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const staticRefWidth = useSelector((state: {staticRefWidth:number}) => state.staticRefWidth)

  const background = () => {
    return {
      display: 'flex',
      flexDirection: 'column',
      position: 'fixed',
      justifyContent: 'center',
      top: `${staticRefWidth * 0.5}px`,
      right: `${staticRefWidth * 0.5}px`,
      bottom: `${staticRefWidth * 0.5}px`,
      left: `${staticRefWidth * 0.5}px`,
      /* height: '93vh', */
      /* width: '95vw', */
      background: 'blue',
      margin: 'auto' 
    }
   }

  return { background }
}




export default SkillsSX

