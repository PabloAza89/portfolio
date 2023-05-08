import { useSelector } from 'react-redux';
import { flex, noSelect, row, absolute, column, jcc, fixed } from './CommonsSX';

function AboutMeSX() {

  const darkMode = useSelector( (state: {darkMode:boolean}) => state.darkMode)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const MedPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const MedLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)
  const staticRefWidth = useSelector((state: {staticRefWidth:number}) => state.staticRefWidth)  //  staticRefWidth
  const staticRefHeight = useSelector((state: {staticRefHeight:number}) => state.staticRefHeight)  //  QUE FUNC CON {store.getState().staticRefHeight TAMBIEN
  const maxStaticReference = useSelector((state: {maxStaticReference:number}) => state.maxStaticReference) //  store.getState().maxStaticReference
  const currentHeight = useSelector((state: {currentHeight:number}) => state.currentHeight)

  const background = () => {
    return {
      ...flex, ...column, ...jcc, ...fixed,
      top: `${staticRefWidth * 0.5}px`,
     right: `${staticRefWidth * 0.5}px`,
     bottom: `${staticRefWidth * 0.5}px`,
     left: `${staticRefWidth * 0.5}px`,
      //height: '93vh',
      /* width: '95vw', */
      background: 'none',
      /* margin: 'auto'  */
    }
   }

   const blueBox = () => {
    return {
      ...flex, ...row, ...absolute,
      background: darkMode ? '#253740' : '#3C6478',
      'borderRadius': `${staticRefWidth * 1}px`,
      alignSelf: 'center',
      'justify-content': 'space-evenly',
      width: minPort ? '90vw' : minLand ? '70vw' : larPort ? '70vw' : '70vw',
      height: minPort ? '70vh' : minLand ? '60vh' : larPort ? '60vh' : '60vh',
      //top: larPort ? 'null' : 'null'
    }
   }

  const avatar = () => {
    return {
      ...flex, ...row, ...absolute,
      width: minPort ? '2.1vh' : minLand ? '3.3vh' : larPort ? '16.5vh' : '16.5vh',
      height: minPort ? '2.1vh' : minLand ? '3.3vh' : larPort ? '16.5vh' : '16.5vh',
      maxWidth: `${staticRefHeight * 13.7}px`,
      maxHeight: `${staticRefHeight * 13.7}px`,
      transform: larLand && currentHeight < 330 ? 'scale(0.0001) translate(100vw, -100vw)' : 'null',
      transition: 'all .5s',
      top: '-9vh' ,
      left: larPort ? '18vw' : '4vw',
    }
  }

  const typography = () => {
    return {
      ...noSelect(),
     'justify-content': 'flex-start',
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'center',
      width: '65vw',
      height: minPort ? '38vh' : minLand ? '38vh' : larPort ? '28vh' : '28vh',
      'text-align': 'center',
      fontSize: minPort ? `${maxStaticReference * 3.0}px` : minLand ? `${maxStaticReference * 3.0}px` : MedPort ? `${maxStaticReference * 2.3}px` : MedLand ? `${maxStaticReference * 2.3}px` :  larPort ? `${maxStaticReference * 1.5}px` : `${maxStaticReference * 1.5}px`,
      '::-webkit-scrollbar': { width: '10px' },
      '::-webkit-scrollbar-thumb': {
        'border': '10px solid',
        'border-radius': '10px'
      },
      ':hover': {
        color: 'rgba(0, 0, 0, 0.18)'
      },
      //padding: '20px',
      padding: '0vw 1vw 0vw 1vw',
      //margin: '100px auto',
      overflow: 'auto',
      background: 'none',
      color: 'transparent',
      '-webkit-text-fill-color': darkMode ? '#b5b3b3' : 'white',
      'transition': 'color 0.3s ease',
    }
  }

  return { background, blueBox, avatar, typography }
}

export default AboutMeSX

