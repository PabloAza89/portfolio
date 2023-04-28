import { Box } from '@mui/material';
import contact from '../../styles/ContactSX';
import BackButton from '../BackButton/BackButton';
import UnderConstruction from '../UnderConstruction/UnderConstruction';


function Contact() {

  return (
    <Box sx={contact}>
      <BackButton />
      <UnderConstruction />
    </Box>
  )
}

export default Contact;