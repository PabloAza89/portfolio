import { Box, Typography, Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import profile from '../../images/profile.png';
import { background, right, text, left, avatar, separator } from '../../styles/ContactSX';

function Contact() {

  const darkMode = useSelector( (state: {darkMode:boolean}) => state.darkMode)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)
  const currentHeight = useSelector((state: {currentHeight:number}) => state.currentHeight)

  return (
    <Box sx={background}>
      <Box sx={left}>
        <Avatar
          alt="Pablo Azambuyo"
          src={profile}
          sx={avatar({ minPort, minLand, larPort })}
        />
      </Box>
      <Box sx={separator}></Box>
      <Box sx={right}>
        <Typography sx={text({ darkMode, minPort, minLand, larPort })}>LinkedIn</Typography>
        <Typography sx={text({ darkMode, minPort, minLand, larPort })}>Email</Typography>
        <Typography sx={text({ darkMode, minPort, minLand, larPort })}>Whatsapp</Typography>
        <Typography sx={text({ darkMode, minPort, minLand, larPort })}>Twitter</Typography>
        <Typography sx={text({ darkMode, minPort, minLand, larPort })}>Instagram</Typography>
      </Box>
    </Box>
  )
}

export default Contact;