import { Box, Button, SvgIcon, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { ReactComponent as MySvg } from '../../images/home.svg';
import Technologies from '../Technologies/Technologies';
import * as s from '../../styles/HomeSX';

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
    <Box sx={s.background({ minPort, minLand, medPort, medLand, larPort, larLand })}>
      <Box sx={s.boxTextTechMessage({ minPort, minLand, medPort, medLand, larPort })}>
        <Box sx={s.boxTypography({ minPort, minLand, medPort, medLand, larPort, larLand })}>
          <Box sx={s.auxLarPort({ larPort })}>
            <Typography sx={s.textOne({ darkMode, minPort, minLand, medPort, medLand, larPort })}>{ english ? `Hi ! I'm` : `Hola ! Soy `}</Typography>
            <Typography sx={s.textTwo({ darkMode, minPort, minLand, medPort, medLand, larPort })}>{ english ? `Pablo Azambuyo` : `Pablo Azambuyo`}</Typography>
            <Typography sx={s.textThree({ darkMode, minPort, minLand, medPort, medLand, larPort })}>{ english ? `and I'm a Fullstack Developer.` : `y soy un Desarrollador Fullstack.`}</Typography>
          </Box>
        </Box>
        <Technologies />
        <Box sx={s.boxButton({ minPort, minLand, medPort, medLand, larPort, larLand })}>
          <Link style={{ textDecoration: 'none' }} to="/MessageMe">
            <Button
              sx={s.buttonMessage({ minPort, minLand, medPort, medLand, larPort })}
              variant='outlined'
            >{ english ? `Message Me` : `Envíame un mensaje` }</Button>
          </Link>
        </Box>
      </Box>
      <Box sx={s.boxSVG({ minPort, minLand, medPort, medLand, larPort })}>
        <SvgIcon
          sx={s.imageSVG({ minPort, minLand, medPort, medLand, larPort })}
          preserveAspectRatio="none"
        >
          <MySvg/>
        </SvgIcon>
      </Box>
  </Box>
  )
}

export default Home;