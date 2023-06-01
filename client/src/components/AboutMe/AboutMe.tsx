import { Box, Typography, Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import profile from '../../images/profile.png';
import {
  blueBox, avatar, typography, topBottomHelper,
  greyBottom, blueBoxHelper, mainContainer, leftRightHelper,
  background, innerMainContainer, innerTopBottomHelper,
  innerBlueBoxHelper
} from '../../styles/AboutMeSX';

function AboutMe() {

  const english = useSelector((state: {english:boolean}) => state.english)
  const currentWidth = useSelector((state: {currentWidth:number}) => state.currentWidth)
  const darkMode = useSelector( (state: {darkMode:boolean}) => state.darkMode)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)
  const staticRefWidth = useSelector((state: {staticRefWidth:number}) => state.staticRefWidth)
  const staticRefHeight = useSelector((state: {staticRefHeight:number}) => state.staticRefHeight)
  const maxStaticReference = useSelector((state: {maxStaticReference:number}) => state.maxStaticReference)
  const height = useSelector((state: {height:number}) => state.height)
  const currentHeight = useSelector((state: {currentHeight:number}) => state.currentHeight)

  return (
    <Box sx={background}>
      <Box sx={topBottomHelper({ minPort, minLand, medPort, medLand, larPort, larLand })}></Box>
      <Box sx={mainContainer({ minPort, minLand, medPort, medLand, larPort, larLand })}>
        <Box sx={leftRightHelper({ minPort, minLand, medPort, medLand, larPort, larLand })}></Box>
        <Box sx={innerMainContainer}>
          <Box sx={innerTopBottomHelper}></Box>
          <Box sx={blueBox({ height, staticRefWidth, darkMode, minPort, minLand, medPort, medLand, larPort })}>
            <Box sx={innerBlueBoxHelper}>
              <Avatar
                alt="Pablo Azambuyo"
                src={profile}
                sx={avatar({ minPort, minLand, medPort, medLand, larPort, larLand, height, staticRefHeight })}
              />
            </Box>
            <Typography sx={typography({ maxStaticReference, darkMode, minPort, minLand, medPort, medLand, larPort })}>
              { english ?
                `Hi ! Im Pablo ! I worked almost 10 years on a paint selling shop. I was working as store manager and also as sales consultant in almost 5 years. In february of 2022 I wanted to give a turn on my life introducing in the world of programming, and I studied proudly on Henry ! On this academy I studied Fullstack Developer career, learning Javascript as my first language, including Node JS, React, Redux and Sequelize technologies. Other of my passions is the music, particullary play the piano, I consider myself as a melomaniac person !`
                : `Hola ! Soy Pablo ! Trabajé 10 años en una pinturería. Me desempeñé como encargado de la misma, atendiendo al público, desde hace 5 años. Desde febrero de 2022 quise darle un cambio de rumbo a mi vida incursionando en el mundo de la programación, por lo cual estudié orgullosamente en Henry ! En la misma academia estudié para ser Fullstack Developer, aprendiendo Javascript como lenguaje principal junto con tecnologías como Node JS, React, Redux y Sequelize. Otra de mis pasiones es la música, particularmente tocar el piano, me considero una persona melómana !`}
            </Typography>
            <Box sx={innerBlueBoxHelper}></Box>
          </Box>
          <Box sx={innerTopBottomHelper}></Box>
        </Box>
        <Box sx={leftRightHelper({ minPort, minLand, medPort, medLand, larPort, larLand })}></Box>
      </Box>
      <Box sx={topBottomHelper({ minPort, minLand, medPort, medLand, larPort, larLand })}></Box>
    </Box>
  )
}

export default AboutMe;
