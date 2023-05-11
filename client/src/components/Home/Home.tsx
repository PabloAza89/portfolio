import { Box, Button, SvgIcon, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { ReactComponent as MySvg } from '../../images/home.svg';
import Technologies from '../Technologies/Technologies';
import {
  background, bgLeft, bgLeftUpper, bgLeftUpperTextOne,
  bgLeftUpperTextTwo, bgLeftUpperTextThree, bgLeftLower,
  minLandRightLower, boxMessage, buttonMessage, boxRightSVG,
  SVG, boxTechnologies
} from '../../styles/HomeSX';

function Home() {

  const darkMode = useSelector( (state: {darkMode:boolean}) => state.darkMode)
  const staticRefHeight = useSelector((state: {staticRefHeight:number}) => state.staticRefHeight)
  const width = useSelector((state: {width: number}) => state.width)
  const height= useSelector((state: {height: number}) => state.height)
  const english = useSelector((state: {english:boolean}) => state.english)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)
  const percentageResizedHeight = useSelector((state: {percentageResizedHeight:number}) => state.percentageResizedHeight)
  const percentageResizedWidth = useSelector((state: {percentageResizedWidth:number}) => state.percentageResizedWidth)

  return (
    <Box sx={background({ minPort, minLand, larPort })}>
      <Box sx={bgLeft({ minPort, minLand, medPort, larPort })}>
        <Box sx={bgLeftUpper({ minPort, minLand, larPort })}>
          <Typography sx={bgLeftUpperTextOne({ darkMode, minPort, minLand, larPort, percentageResizedHeight, staticRefHeight })}>{ english ? `Hi ! I'm` : `Hola ! Soy `}</Typography>
          <Typography sx={bgLeftUpperTextTwo({ darkMode, minPort, minLand, larPort, percentageResizedHeight, staticRefHeight })}>{ english ? `Pablo Azambuyo` : `Pablo Azambuyo`}</Typography>
          <Typography sx={bgLeftUpperTextThree({ darkMode, minPort, minLand, larPort, percentageResizedHeight, staticRefHeight })}>{ english ? `and I'm a Fullstack Developer.` : `y soy un Desarrollador Fullstack.`}</Typography>
        </Box>
        <Box sx={bgLeftLower({ minPort, minLand, larPort, larLand, percentageResizedHeight })}>

          <Technologies />

          <Box sx={minLandRightLower( minLand )}>
            <Link style={{ textDecoration: 'none' }} to="/portfolio/AboutMe">
              <Button sx={{ padding: '0px !important', minWidth: minPort ? '53vw !important' : minLand ? '25vw !important' : '9vw !important', maxWidth: '19vw !important', minHeight: minPort ? '10vw !important' : minLand ? '7.5vh !important' : '2.1vh !important', maxHeight: '2.1vw !important', color:'#FFFFFF', width: minPort ? '19vw' : minLand ? '19vw' : '19vw', marginLeft: minPort ? '0vw' : minLand ? '0vw' : '16vw', marginTop: minPort ? '1.5vw' : minLand ? '4.5vh' : '1.9vw', fontSize: minPort ? '4vw' : minLand ? '1.65vw' : '1.05vw', mixBlendMode: 'difference'}} variant='outlined'>{ english ? `Message me` : `Envíame un mensaje` }
              </Button>
            </Link>
          </Box>
        </Box>

        <Box sx={boxMessage({ minLand, medPort })}>
          <Link style={{ textDecoration: 'none' }} to="/portfolio/MessageMe">
            <Button sx={buttonMessage({ minPort, minLand, medPort, larPort })}
              variant='outlined'>{ english ? `Message Me` : `Envíame un mensaje` }
            </Button>
          </Link>
        </Box>
      </Box>

      <Box sx={boxRightSVG({ minPort, minLand, larPort })}>
        <SvgIcon
          sx={SVG({ width, height, medPort, larPort, larLand, percentageResizedHeight, percentageResizedWidth })}
          preserveAspectRatio="none"
        >
          <MySvg/>
        </SvgIcon>
      </Box>

      <Box sx={boxTechnologies({ larPort })}>
        <Technologies />
      </Box>
  </Box>
  )
}

export default Home;