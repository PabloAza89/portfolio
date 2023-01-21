import React from 'react';
import { Box, Button, Typography} from '@mui/material';

function AboutMe() {

  return (
    <Box sx={{display: 'flex', flexDirection: 'column'}}>
      <Typography>This is about !</Typography>
      {/* <Button variant="outlined" >Know about me</Button> */}
    </Box>
  )
}

export default AboutMe;