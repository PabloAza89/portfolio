import { grey } from '@mui/material/colors';
import { useSelector } from 'react-redux';
import { column, flex, relative } from './CommonsSX';

function AppSX() {

  const darkMode = useSelector( (state: {darkMode:boolean}) => state.darkMode)
  const staticRefWidth = useSelector((state: {staticRefWidth:number}) => state.staticRefWidth) 

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
      //...relative, ...flex, ...column,
      display: 'flex',
      position: 'absolute',
      flexDirection: 'column',
      /* left: '0.5vw',
      top: '0.5vw',
      width: '99vw',
      height: '99vh', */
     // left: `${staticRefWidth * 0.02}vw`,
     top: `${staticRefWidth * 0.5}px`,
     right: `${staticRefWidth * 0.5}px`,
     bottom: `${staticRefWidth * 0.5}px`,
     height: '40vh',
     left: `${staticRefWidth * 0.5}px`,
      //right: '0.5vw',
      //bottom: '0.5vw',
      //left: '0.5vw',
   
      // top: '0.5vw', 
      // right: '0.5vw',
      // bottom: '0.5vw',
      // left: '0.5vw',
      

      /* width: '50vw', */
      /* right: '0.5vw', */
      /* bottom: '0.5vw', */
     /*  width: '99vw',
      height: '99vh', */
      //margin: `${staticRefWidth * 0.6}px`,
      background: darkMode ? 'linear-gradient(to bottom right, #2b2b2b 49.9%, #696868 50.1%)' : 'linear-gradient(to bottom right, black 49.9%,white 50.1%)'
    }
  }



  return { background, blackWhite }
}

export default AppSX;

