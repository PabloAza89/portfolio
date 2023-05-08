import { Box, Typography, Avatar } from '@mui/material';
import contact from '../../styles/ContactSX';
import profile from '../../images/profile.png';
import UnderConstruction from '../UnderConstruction/UnderConstruction';
import ContactSX from '../../styles/ContactSX';

function Contact() {

  return (
    <Box sx={ContactSX().background}>
      <Box sx={ContactSX().left}>
        <Avatar
          alt="Pablo Azambuyo"
          src={profile}
          sx={ContactSX().avatar}
        />
      </Box>
      <Box sx={ContactSX().separator}></Box>
      <Box sx={ContactSX().right}>
        <Typography sx={ContactSX().text}>LinkedIn</Typography>
        <Typography sx={ContactSX().text}>Email</Typography>
        <Typography sx={ContactSX().text}>Whatsapp</Typography>
        <Typography sx={ContactSX().text}>Twitter</Typography>
        <Typography sx={ContactSX().text}>Instagram</Typography>
      </Box>

    </Box>
  )
}

export default Contact;