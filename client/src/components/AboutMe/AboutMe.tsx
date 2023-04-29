import { Box, Typography, Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import profile from '../../images/profile.png';
import AboutMeSX from '../../styles/AboutMeSX';
import BackButton from '../BackButton/BackButton';

function AboutMe() {

  const english = useSelector((state: {english:boolean}) => state.english)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '93vh', width: '97vw', background: 'none'}}>
      <BackButton />
      <Box sx={AboutMeSX().background}>
        <Avatar
          alt="Pablo Azambuyo"
          src={profile}
          sx={AboutMeSX().avatar}
        />
        <Typography sx={AboutMeSX().typography}>
          { english ?
            `Hi ! Im Pablo ! I worked almost 10 years on a paint selling shop. I was working as store manager and also as sales consultant in almost 5 years. In february of 2022 I wanted to give a turn on my life introducing in the world of programming, and I studied proudly on Henry ! On this academy I studied Fullstack Developer career, learning Javascript as my first language, including Node JS, React, Redux and Sequelize technologies. Other of my passions is the music, particullary play the piano, I consider myself as a melomaniac person !`
            : `Hola ! Soy Pablo ! Trabajé 10 años en una pinturería. Me desempeñé como encargado de la misma, atendiendo al público, desde hace 5 años. Desde febrero de 2022 quise darle un cambio de rumbo a mi vida incursionando en el mundo de la programación, por lo cual estudié orgullosamente en Henry ! En la misma academia estudié para ser Fullstack Developer, aprendiendo Javascript como lenguaje principal junto con tecnologías como Node JS, React, Redux y Sequelize. Otra de mis pasiones es la música, particularmente tocar el piano, me considero una persona melómana !`}
        </Typography>
      </Box>
    </Box>
  )
}

export default AboutMe;
