import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import error from '../../images/error.gif';
import * as s from '../../styles/ErrorSX';

function Error() {

  const english = useSelector((state: {english:boolean}) => state.english)

  return (
    <Box sx={{display: 'flex', flexDirection: 'column'}}>
      <Box
        component="img"
        src={error}
        sx={s.errorGif}
      />
      <Typography sx={s.message}>
        { english ? `This page does not exist.` : `Esta página no existe.` }
      </Typography>
    </Box>
  )
}

export default Error;