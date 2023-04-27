import { useSelector } from 'react-redux';
import { bgRed, flex, column, row, bgNone, noSelect } from './CommonsSX';
import store from '../store/store'

function AboutMeSX (){
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

   const background = Object.assign(
    {},
      flex, row,
    {
      background: '#3C6478',
      'borderRadius': `${staticRefWidth * 1}px`,
      alignSelf: 'center',
      'justify-content': 'space-evenly',
      width: minPort ? '90vw' : minLand ? '70vw' : larPort ? '70vw' : '70vw',
      height: minPort ? '70vh' : minLand ? '60vh' : larPort ? '60vh' : '60vh',
      top: larPort ? '2vh' : 'null'
    }
  )

  const avatar = Object.assign(
    {},
    {
      position: 'absolute',
      width: minPort ? '2.1vh' : minLand ? '3.3vh' : larPort ? '16.5vh' : '16.5vh',
      height: minPort ? '2.1vh' : minLand ? '3.3vh' : larPort ? '16.5vh' : '16.5vh',
      maxWidth: `${staticRefHeight * 13.7}px`,
      maxHeight: `${staticRefHeight * 13.7}px`,
      transform: larLand && currentHeight < 330 ? 'scale(0.0001) translate(100vw, -100vw)' : 'null',
      transition: 'all .5s',
      top: '8vh' ,
      left: larPort ? '18vw' : '16vw',
    }
  )

  const typography = Object.assign(
    {},
      noSelect,
    {
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
      padding: '20px',
      margin: '100px auto',
      overflow: 'auto',
      color: 'transparent',
      '-webkit-text-fill-color': 'white',
      'transition': 'color 0.3s ease',
    }
  )

  return { background, avatar, typography }
}

export default AboutMeSX




// export { background, avatar, typography }