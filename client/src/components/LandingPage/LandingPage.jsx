import React from 'react';
import { Box, Button, Typography} from '@mui/material';

function LandingPage() {

  return (
    <Box sx={{display: 'flex', flexDirection: 'column'}}>
      <Typography>Hello ! I'm Pablo and I'm a Fullstack Developer !</Typography>
      <Button variant="outlined">Know about me</Button>
    </Box>
  )
}

export default LandingPage;