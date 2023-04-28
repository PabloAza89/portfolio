import { grey } from '@mui/material/colors';
import { useSelector } from 'react-redux';
import { column, flex, relative } from './CommonsSX';

function AppSX() {

  const darkMode = useSelector( (state: {darkMode:boolean}) => state.darkMode)
  const staticRefWidth = useSelector((state: {staticRefWidth:number}) => state.staticRefWidth)  // OJO staticRefWidth

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
      background: darkMode ? 'linear-gradient(to bottom right, #2b2b2b 49.9%, #696868 50.1%)' : 'linear-gradient(to bottom right, black 49.9%,white 50.1%)'
    }
  }



  return { background, blackWhite }
}

export default AppSX;

