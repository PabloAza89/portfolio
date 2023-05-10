import { useSelector } from 'react-redux';
import { flex, noSelect, row, column, absolute, relative, asc, jcc } from './CommonsSX';

function ContactSX() {

  const darkMode = useSelector( (state: {darkMode:boolean}) => state.darkMode)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const MedPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const MedLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)
  const staticRefWidth = useSelector((state: {staticRefWidth:number}) => state.staticRefWidth)  
  const staticRefHeight = useSelector((state: {staticRefHeight:number}) => state.staticRefHeight)  
  const maxStaticReference = useSelector((state: {maxStaticReference:number}) => state.maxStaticReference) 
  const currentHeight = useSelector((state: {currentHeight:number}) => state.currentHeight)

   const background = () => {
    return {
      ...flex, ...row, ...jcc,
      'background': 'none',
      width: '98.8vw',
      height: '97.6vh'
    }
   }

   const left = () => {
    return {
      ...flex, ...column, ...relative, ...asc,
      'background': 'none',
      width: '40vw',
      height: '40vh',
      /* left: '3vw', */
      alignItems: 'center',
      justifyContent: 'center',
      /* 'margin-bottom': '2vh' */
    }
   }

   const avatar = () => {
    return {
      ...relative, ...flex,
      width: minPort ? '2.1vh' : minLand ? '3.3vh' : larPort ? '16.5vh' : '45vh',
      height: minPort ? '2.1vh' : minLand ? '3.3vh' : larPort ? '16.5vh' : '45vh',
      transform: larLand && currentHeight < 330 ? 'scale(0.0001) translate(100vw, -100vw)' : 'null',
      transition: 'all .5s',
      
    }
  }

  const separator = () => {
    return {
      ...flex, /* ...column, */ ...relative, ...asc,
      'background': 'white',
      width: '1.1vw',
      height: '40vh',
      /* right: '2vw', */
      /* alignItems: 'center', */
      /* justifyContent: 'center', */
      mixBlendMode: 'difference'
    }
   }

   const right = () => {
    return {
      ...flex, ...column, ...relative, ...asc,
      'background': 'none',
      width: '30vw',
      height: '60vh',
      /* right: '2vw', */
      alignItems: 'center',
      justifyContent: 'center',

    }
   }

   const text = () => {
    return {
        ...noSelect, ...relative,
        fontFamily: 'Lucida Console',
        fontSize: minPort ? '7vw' : minLand ? '3vw' : larPort ? '6vw' : '2.1vw',
        color: darkMode ? '#b5b3b3' : 'white',
        padding: '1vw',
        mixBlendMode: 'difference'
    }
   }

  return { background, right, text, left, avatar, separator }
}

export default ContactSX

