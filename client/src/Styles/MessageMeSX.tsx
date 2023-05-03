
import { useSelector } from 'react-redux';
import { flex, noSelect, row, column, asc, jsc, jcse, jcc } from './CommonsSX';

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
      width: minPort ? '90vw' : minLand ? '70vw' : larPort ? '70vw' : '70vw',
      height: minPort ? '70vh' : minLand ? '60vh' : larPort ? '60vh' : '60vh',
      /* height: '90vh', */
      top: larPort ? '2vh' : 'null'
    }
   }

   

   

   const formContainer = () => {
    return {
      ...flex, ...column, ...asc, ...jcc,
      color: 'white',
      'borderRadius': `${staticRefWidth * 1}px`,
      backgroundColor: '#5f9ea0',
      opacity: '0.95',
      /* 'mix-blend-mode': 'difference', */
      width: '50vw',
      height: '70vh'
    }
   }

   const clearButton = () => {
    return {
      ...flex, ...column, /* ...asc, */
      color: 'white',
      alignSelf: 'flex-end',
      backgroundColor: 'gray',
      ':hover': { backgroundColor: 'gray', '-webkit-filter': 'brightness(.95)', 'filter': 'brightness(.95)'},
      /* 'mix-blend-mode': 'difference', */
      width: '10vw',
      'margin-right': '1.5vw',
      'margin-bottom': '2vh'
    }
   }

   const nameBox = () => {
    return {
      ...flex, ...column, ...asc,
      color: 'white',
      backgroundColor: 'white',
      opacity: '0.90',
      width: '47vw',
      'margin-bottom': '2vh',
      'borderRadius': `${staticRefWidth * 0.3}px`,
    }
   }

   const messageBox = () => {
    return {
      ...flex, ...column, ...asc,
      color: 'white',
      backgroundColor: 'white',
      opacity: '0.90',
      width: '47vw',
      'margin-bottom': '2vh',
      'borderRadius': `${staticRefWidth * 0.3}px`,
     
      }

   }

 
   

   const sendMessageButton = () => {
    return {
      ...flex, ...asc,
      color: 'white',
      backgroundColor: 'gray',
      ':hover': { backgroundColor: 'gray', '-webkit-filter': 'brightness(.95)', 'filter': 'brightness(.95)'},
      /* 'mix-blend-mode': 'difference', */
      width: '10vw'
    }
   }

  return { background, nameBox, formContainer,
    clearButton, sendMessageButton, messageBox,

   }
}

export default MessageMeSX

