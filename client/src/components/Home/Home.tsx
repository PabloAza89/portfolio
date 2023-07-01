import { Box, Button, SvgIcon, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { ReactComponent as MySvg } from '../../images/home.svg';
import Technologies from '../Technologies/Technologies';
import {
  background, boxTypography, textOne,
  textTwo, textThree, buttonMessage,
  imageSVG, boxTextTechMessage, boxSVG,
  boxButton, auxLarPort
} from '../../styles/HomeSX';

function Home() {

  const darkMode = useSelector((state: {darkMode:boolean}) => state.darkMode)
  const english = useSelector((state: {english:boolean}) => state.english)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)

  return (
    <Box sx={background({ minPort, minLand, medPort, medLand, larPort, larLand })}>
      <Box sx={boxTextTechMessage({ minPort, minLand, medPort, medLand, larPort })}>
        <Box sx={boxTypography({ minPort, minLand, medPort, medLand, larPort, larLand })}>
          <Box sx={auxLarPort({ larPort })}>
            <Typography sx={textOne({ darkMode, minPort, minLand, medPort, medLand, larPort })}>{ english ? `Hi ! I'm` : `Hola ! Soy `}</Typography>
            <Typography sx={textTwo({ darkMode, minPort, minLand, medPort, medLand, larPort })}>{ english ? `Pablo Azambuyo` : `Pablo Azambuyo`}</Typography>
            <Typography sx={textThree({ darkMode, minPort, minLand, medPort, medLand, larPort })}>{ english ? `and I'm a Fullstack Developer.` : `y soy un Desarrollador Fullstack.`}</Typography>
          </Box>
        </Box>
        <Technologies />
        <Box sx={boxButton({ minPort, minLand, medPort, medLand, larPort, larLand })}>
          <Link style={{ textDecoration: 'none' }} to="/MessageMe">
            <Button
              sx={buttonMessage({ minPort, minLand, medPort, medLand, larPort })}
              variant='outlined'
            >{ english ? `Message Me` : `Envíame un mensaje` }</Button>
          </Link>
        </Box>
      </Box>
      <Box sx={boxSVG({ minPort, minLand, medPort, medLand, larPort })}>
        <SvgIcon
          sx={imageSVG({ minPort, minLand, medPort, medLand, larPort })}
          preserveAspectRatio="none"
        >
          <MySvg/>
        </SvgIcon>
      </Box>
  </Box>
  )
}

export default Home;