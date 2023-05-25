import { Box, Button, SvgIcon, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { ReactComponent as MySvg } from '../../images/home.svg';
import Technologies from '../Technologies/Technologies';
import {
  background, textLeftBoxOrTop, textOne,
  textTwo, textThree, boxTechnologies,
  boxMessage, buttonMessage, boxRightOrBotton,
  SVG, greyBottom, greyRight, leftBox
} from '../../styles/HomeSX';

function Home() {

  const darkMode = useSelector( (state: {darkMode:boolean}) => state.darkMode)
  const staticRefHeight = useSelector((state: {staticRefHeight:number}) => state.staticRefHeight)
  const maxStaticReference = useSelector((state: {maxStaticReference:number}) => state.maxStaticReference)
  const width = useSelector((state: {width: number}) => state.width)
  const height= useSelector((state: {height: number}) => state.height)
  const english = useSelector((state: {english:boolean}) => state.english)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)
  const percentageResizedHeight = useSelector((state: {percentageResizedHeight:number}) => state.percentageResizedHeight)
  const percentageResizedWidth = useSelector((state: {percentageResizedWidth:number}) => state.percentageResizedWidth)

  return (
    <Box sx={background({ minPort, minLand, larPort })}>
      <Box sx={leftBox({ minPort, minLand, medPort, medLand, larPort, larLand })}>
        <Box sx={textLeftBoxOrTop({ minPort, minLand, medPort, medLand, larPort, larLand })}>
          <Typography sx={textOne({ darkMode, minPort, minLand, larPort, percentageResizedHeight, staticRefHeight })}>{ english ? `Hi ! I'm` : `Hola ! Soy `}</Typography>
          <Typography sx={textTwo({ darkMode, minPort, minLand, larPort, percentageResizedHeight, staticRefHeight })}>{ english ? `Pablo Azambuyo` : `Pablo Azambuyo`}</Typography>
          <Typography sx={textThree({ darkMode, minPort, minLand, larPort, percentageResizedHeight, staticRefHeight })}>{ english ? `and I'm a Fullstack Developer.` : `y soy un Desarrollador Fullstack.`}</Typography>
        </Box>
        {/* <Box sx={boxTechnologies({ minPort, minLand, medPort, medLand, larPort, larLand, percentageResizedHeight })}> */}
          <Technologies />
        {/* </Box> */}
        {/* <Box sx={boxMessage({ minLand, medPort, medLand, larPort, larLand })}> */}
          <Link style={{ textDecoration: 'none'/* , alignSelf: 'center' */ }} to="/portfolio/MessageMe">
            <Button
              sx={buttonMessage({ minPort, minLand, medPort, larPort })}
              variant='outlined'
            >{ english ? `Message Me` : `Envíame un mensaje` }
            </Button>
          </Link>
        {/* </Box> */}
      </Box>
      <Box sx={boxRightOrBotton({ minPort, minLand, medPort, larPort })}>
        
        <SvgIcon
          sx={SVG({ width, height, minPort, minLand, medPort, larPort, larLand, percentageResizedHeight, percentageResizedWidth })}
          preserveAspectRatio="none"
        >
          <MySvg/>
        </SvgIcon>
      </Box>
      
  </Box>
  )
}

export default Home;