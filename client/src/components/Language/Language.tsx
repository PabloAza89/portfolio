import { Box, CardMedia } from '@mui/material';
import { cyan } from '@mui/material/colors';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";
import { languageChanger } from '../../actions';
import lanEn from '../../images/lanEn.png';
import lanEs from '../../images/lanEs.png';

function Language() {

  const dispatch = useDispatch()
  
  const english = useSelector( (state: {english:boolean}) => state.english )
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)
  const percentageResizedHeight = useSelector((state: {percentageResizedHeight:number}) => state.percentageResizedHeight)
  const maxStaticReference = useSelector((state: {maxStaticReference: number}) => state.maxStaticReference)

  const location = useLocation()

  console.log('location.pathname', location.pathname)

  return (
      <Box sx={{
        background: 'none',
        /* display: larLand && size.currentHeight < 300 ? 'none' : 'flex', */
        display: 'flex',
        pointerEvents:  larPort && percentageResizedHeight < 0.272 ? 'none' : larLand && percentageResizedHeight < 0.272 ? 'none' : 'null',
        transition: 'opacity .1s ease-in-out',
        opacity:
          larPort && location.pathname === '/portfolio' && percentageResizedHeight < 0.33 ? '0' :
          larLand && location.pathname === '/portfolio' && percentageResizedHeight < 0.33 ? '0' :
          larPort && location.pathname === '/portfolio/Projects' && percentageResizedHeight < 0.272 ? '0' :
          larLand && location.pathname === '/portfolio/Projects' && percentageResizedHeight < 0.272 ? '0' :
          '1',
        'active': {
          'opacity': '0',
          'display': 'flex'
         },
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        width: minPort ? '97vw' : minLand ? '97vw' : larPort ? '97vw' : '97vw',
        height: minPort ? '9vh' : minLand ? '16vh' : larPort ? '15vh' : '15vh',
        bottom: minPort ? '0vh' : '0.3vh'
      }}>
        <Box sx={ english ? {
            position: 'relative',
            marginRight: minPort ? '0.5vh' : minLand ? '0.5vw' : medPort ? `${maxStaticReference * 0.1}px` : medLand ? `${maxStaticReference * 0.1}px` : larPort ? `${maxStaticReference * 0.1}px` : `${maxStaticReference * 0.1}px`,
            display: 'flex',
            //size.currentHeight
            flexDirection: 'row',
            justifyContent: 'center',
            alignSelf: 'center',
            backgroundColor: cyan[100],
            width: minPort ? '14vw' : minLand ? '7vw' : medPort ? `${maxStaticReference * 7.3}px` : medLand ? `${maxStaticReference * 7.3}px` : larPort ? `${maxStaticReference * 2.7}px` : `${maxStaticReference * 2.7}px`,
            height: minPort ? '4.3vh' : minLand ? '9vh' : medPort ? `${maxStaticReference * 5.3}px` : medLand ? `${maxStaticReference * 5.3}px` : larPort ? `${maxStaticReference * 1.9}px` : `${maxStaticReference * 1.9}px`
          } : { position: 'relative',
          marginRight: minPort ? '0.5vh' : minLand ? '0.5vw' : medPort ? `${maxStaticReference * 0.1}px` : medLand ? `${maxStaticReference * 0.1}px` : larPort ? `${maxStaticReference * 0.1}px` : `${maxStaticReference * 0.1}px`,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignSelf: 'center',
            backgroundColor: 'none',
            width: minPort ? '14vw' : minLand ? '7vw' : medPort ? `${maxStaticReference * 7.3}px` : medLand ? `${maxStaticReference * 7.3}px` : larPort ? `${maxStaticReference * 2.7}px` : `${maxStaticReference * 2.7}px`,
            height: minPort ? '4.3vh' : minLand ? '9vh' : medPort ? `${maxStaticReference * 5.3}px` : medLand ? `${maxStaticReference * 5.3}px` : larPort ? `${maxStaticReference * 1.9}px` : `${maxStaticReference * 1.9}px`
        }} >
          <CardMedia src={lanEn} onClick={() => dispatch(languageChanger(true))} sx={{
            background: 'null',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'row',
            alignSelf: 'center',
            backgroundImage: `url(${lanEn})`,
            width: minPort ? '20vw' : minLand ? '9vw' : medPort ? `${maxStaticReference * 7.3}px` : medLand ? `${maxStaticReference * 7.3}px` : larPort ? `${maxStaticReference * 2.5}px` : `${maxStaticReference * 2.5}px`,
            height: minPort ? '13vh' : minLand ? '9vh' : medPort ? `${maxStaticReference * 7.3}px` : medLand ? `${maxStaticReference * 7.3}px` : larPort ? `${maxStaticReference * 2.6}px` : `${maxStaticReference * 2.6}px`,
            backgroundSize: minPort ? '13vw 4.1vh' : minLand ? '6.5vw 8vh' : medPort ? `${maxStaticReference * 6.7}px` : medLand ? `${maxStaticReference * 6.7}px` : larPort ? `${maxStaticReference * 2.5}px ${maxStaticReference * 1.6}px` : `${maxStaticReference * 2.5}px ${maxStaticReference * 1.6}px`,
            ':hover': {
              webkitFilter: 'brightness(.9)',
              'filter': 'brightness(.9)'
            }
          }}></CardMedia>
        </Box>
        <Box sx={ english ? {
            position: 'relative',
            /* marginRight: minPort ? '0.5vh' : minLand ? '0.5vw' : larPort ? '0.0vw' : '0vw', */
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignSelf: 'center',
            backgroundColor: 'none',
            width: minPort ? '14vw' : minLand ? '7vw' : medPort ? `${maxStaticReference * 7.3}px` : medLand ? `${maxStaticReference * 7.3}px` : larPort ? `${maxStaticReference * 2.7}px` : `${maxStaticReference * 2.7}px`,
            height: minPort ? '4.3vh' : minLand ? '9vh' : medPort ? `${maxStaticReference * 5.3}px` : medLand ? `${maxStaticReference * 5.3}px` : larPort ? `${maxStaticReference * 1.9}px` : `${maxStaticReference * 1.9}px`
            } : { position: 'relative',
            /* marginRight: minPort ? '0.5vh' : minLand ? '0.5vw' : larPort ? '0.0vw' : '0vw', */
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignSelf: 'center',
            backgroundColor: cyan[100],
            width: minPort ? '14vw' : minLand ? '7vw' : medPort ? `${maxStaticReference * 7.3}px` : medLand ? `${maxStaticReference * 7.3}px` : larPort ? `${maxStaticReference * 2.7}px` : `${maxStaticReference * 2.7}px`,
            height: minPort ? '4.3vh' : minLand ? '9vh' : medPort ? `${maxStaticReference * 5.3}px` : medLand ? `${maxStaticReference * 5.3}px` : larPort ? `${maxStaticReference * 1.9}px` : `${maxStaticReference * 1.9}px`
        }} >
          <CardMedia src={lanEs} onClick={() => dispatch(languageChanger(false))} sx={{
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'row',
            alignSelf: 'center',
            backgroundColor: 'none',
            backgroundImage: `url(${lanEs})`,
            width: minPort ? '20vw' : minLand ? '9vw' : medPort ? `${maxStaticReference * 7.3}px` : medLand ? `${maxStaticReference * 7.3}px` : larPort ? `${maxStaticReference * 2.5}px` : `${maxStaticReference * 2.5}px`,
            height: minPort ? '13vh' : minLand ? '9vh' : medPort ? `${maxStaticReference * 7.3}px` : medLand ? `${maxStaticReference * 7.3}px` : larPort ? `${maxStaticReference * 2.6}px` : `${maxStaticReference * 2.6}px`,
            backgroundSize: minPort ? '13vw 4.1vh' : minLand ? '6.5vw 8vh' : medPort ? `${maxStaticReference * 6.7}px` : medLand ? `${maxStaticReference * 6.7}px` : larPort ? `${maxStaticReference * 2.5}px ${maxStaticReference * 1.6}px` : `${maxStaticReference * 2.5}px ${maxStaticReference * 1.6}px`,
            ':hover': { webkitFilter: 'brightness(.9)', 'filter': 'brightness(.9)'
          }}}></CardMedia>
        </Box>
      </Box>
  )
}

export default Language;
