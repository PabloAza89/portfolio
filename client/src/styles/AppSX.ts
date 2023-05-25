import { grey } from '@mui/material/colors';
import { column, flex, relative, fixed } from './CommonsSX';

const background = () => {
  return {
    ...relative, ...flex,
    backgroundColor: grey[400],
    overflow: 'hidden',
    width: '100vw',
    height: '100vh',
    justifyContent: 'center'
  }
}

interface blackWhiteI {
  staticRefWidth: number,
  darkMode: boolean,
  location: string
}

const blackWhite = ( { staticRefWidth, darkMode, location }: blackWhiteI ) => {
  return {
    /* ...fixed, */ ...flex, ...column,
    position: 'relative',
    width: 'calc(100vw - 12px)',
    height: 'calc(100vh - 12px)',
    alignSelf: 'center',
    justifyContent: 
      location === '/portfolio/MessageMe'  ? 'center' :
      location === '/portfolio/Contact' ||  location === '/portfolio/AboutMe' ? 'space-between' :
      'none',
    background: darkMode ? 'linear-gradient(to bottom right, #2b2b2b 49.9%, #696868 50.1%)' : 'linear-gradient(to bottom right, black 49.9%,white 50.1%)'
  }
}

export { background, blackWhite }