import { useSelector } from 'react-redux';
import { bgRed, flex, column, row, bgNone, noSelect, jcse, aic, asc, noDeco } from './CommonsSX';
import { grey , blue } from '@mui/material/colors';

function NavBarSX() {
  
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
  const percentageResizedWidth = useSelector((state: {percentageResizedWidth:number}) => state.percentageResizedWidth)

   const background = () => {
    return {
        ...jcse, ...flex,
        background: 'none',
        flexDirection: minPort ? 'column' : minLand ? 'row' : larPort ? 'column' : 'row',
        marginTop: '1vh',
        color: '#FFFFFF',
        height: minPort ? '30vw' : minLand ? '7vw' : larPort ? '20vh' : '15vh',
        minHeight: larPort ? '11vw' : `${staticRefWidth * 3.5}px`
    }
   }

   const mainLeft = () => {
    return {
        ...flex, ...row, ...aic,
        background: 'none',
        width: minPort ? '60vw' : minLand ? '35vw' : larPort ? '58vw' : '33vw',
        color: '#FFFFFF',
        'align-self': minPort ? 'start' : larPort ? 'start' : 'center',
        height: minPort ? '7vh' : minLand ? '13vh' : larPort ? '13vh' : '13vh',
        minHeight: larPort ? '11vw' : `${staticRefWidth * 2.9}px`,
        marginLeft: '2vw'
    }
   }

   const lessThan = () => {
    return {
        ...noSelect(),
        fontSize: minPort ? '6vw' : minLand ? '2.8vw' : larPort ? '3.8vw' : '2.8vw',
        marginRight: minPort ? '1.5vw' : minLand ? '1.4vw' : larPort ? '1.1vw' : '1.1vw'
    }
   }

   const name = () => {
    return {
        ...noSelect(),
        marginTop: '0.5vh',
        fontFamily: 'Allura',
        fontSize: minPort ? '7.5vw' : minLand ? '3.8vw' : larPort ? '6.1vw' : '3.8vw',
        color: blue[600],
        fontWeight: 600
    }
   }

   const blink = () => {
    return {
        ...noSelect(),
        marginTop: '0.5vh',
        fontSize: minPort ? '6vw' : minLand ? '2.8vw' : larPort ? '4.5vw' : '2.8vw',
        fontWeight: '300',
        animation: 'blink 1s linear infinite',
        '@keyframes blink': {
          '0%': { opacity: '0' },
          '49%': { opacity: '0' },
          '50%': { opacity: '1' }
        }
     }
   }

   const greaterThan = () => {
    return {
        ...noSelect(),
        fontSize: minPort ? '6vw' : minLand ? '2.8vw' : larPort ? '3.8vw' : '2.8vw',
        marginLeft: minPort ? '0.2vw' : minLand ? '1.0vw' : larPort ? '0.8vw' : '0.3vw'
    }
   }

   const scroll = () => {
    return {
        ...asc, ...flex, ...aic,
        background: 'none',
        // overflow: 'auto', background: 'none', opacity: '0.8', marginBottom: minPort ? '0vh' : minLand ? '0vh' : '1vh'
        overflow: 'auto',
        minHeight: larPort ? '11vw' : `${staticRefWidth * 2.9}px`,
        color: '#FFFFFF',
        /* flexDirection: 'row', */
        justifyContent:
          minPort ? 'space-around' :
          minLand ? 'space-evenly' :
          larPort && percentageResizedWidth > 0.305 ? 'space-evenly' :
          larPort ? 'flex-start' :
          larLand && percentageResizedWidth < 0.504 ?
          'flex-start' :
          'space-evenly',
          // percentageResizedWidth 0.504
        width: minPort ? '96vw' : minLand ? '58vw' : larPort ? '96vw' : '60vw',
        height: minPort ? '7vh' : minLand ? '7vh' : larPort ? '10vh' : '13vh'
    }
   }

   const AboutMe = () => {
    return {
      ...noDeco, ...noSelect(),
        background: 'none',
        marginLeft: `${staticRefWidth * 0.5}px`,
        marginRight: `${staticRefWidth * 0.5}px`,
        minWidth: 'fit-content',
        textDecoration: 'none', color: '#FFFFFF',
        fontSize: minPort ? '3.2vw' : minLand ? '1.3vw' : larPort ? `${staticRefWidth * 1.2}px` : `${staticRefWidth * 1.2}px`,
        fontFamily: 'Roboto',
        fontWeight: '600',
        'mix-blend-mode': 'difference'
    }
   }

   const Skills = () => {
    return {
        ...noDeco, ...noSelect(),
        background: 'none',
        marginLeft: `${staticRefWidth * 0.5}px`,
        marginRight: `${staticRefWidth * 0.5}px`, minWidth: 'fit-content',
        color: '#FFFFFF',
        fontSize: minPort ? '3.2vw' : minLand ? '1.3vw' : larPort ? `${staticRefWidth * 1.2}px` : `${staticRefWidth * 1.2}px`,
        fontFamily: 'Roboto',
        fontWeight: '600',
        'mix-blend-mode': 'difference'
    }
   }

   const Projects = () => {
    return {
        ...noDeco, ...noSelect(),
        background: 'none',
        marginLeft: `${staticRefWidth * 0.5}px`,
        marginRight: `${staticRefWidth * 0.5}px`, minWidth: 'fit-content',
        color: '#FFFFFF',
        fontSize: minPort ? '3.2vw' : minLand ? '1.3vw' : larPort ? `${staticRefWidth * 1.2}px` : `${staticRefWidth * 1.2}px`,
        fontFamily: 'Roboto',
        fontWeight: '600', 
        'mix-blend-mode': 'difference'
    }
   }

  const Certifications = () => {
    return {
        ...noDeco, ...noSelect(),
        background: 'none',
        marginLeft: `${staticRefWidth * 0.5}px`,
        marginRight: `${staticRefWidth * 0.5}px`, minWidth: 'fit-content',
        color: '#FFFFFF',
        fontSize: minPort ? '3.2vw' : minLand ? '1.3vw' : larPort ? `${staticRefWidth * 1.2}px` : `${staticRefWidth * 1.2}px`,
        fontFamily: 'Roboto',
        fontWeight: '600',
        'mix-blend-mode': 'difference'
    }
  }

     const Contact = () => {
    return {
        ...noDeco, ...noSelect(),
        background: 'none',
        marginLeft: `${staticRefWidth * 0.5}px`,
        marginRight: `${staticRefWidth * 0.5}px`, minWidth: 'fit-content',
        color:'#FFFFFF',
        fontSize: minPort ? '3.2vw' : minLand ? '1.3vw' : larPort ? `${staticRefWidth * 1.2}px` : `${staticRefWidth * 1.2}px`,
        fontFamily: 'Roboto',
        fontWeight: '600',
        'mix-blend-mode': 'difference'
    }
   }

  return { background, mainLeft, lessThan, name, blink, greaterThan, scroll,
    AboutMe, Skills, Projects, Certifications, Contact }
}

export default NavBarSX;

