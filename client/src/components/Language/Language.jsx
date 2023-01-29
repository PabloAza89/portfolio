import React from 'react';
import {Box, CardMedia } from '@mui/material';
import lanEn from '../../images/lanEn.png';
import lanEs from '../../images/lanEs.png';
import { useSelector, useDispatch } from 'react-redux';
import { languageChanger } from '../../actions';
import { grey , blue , cyan, lime, brown, red} from '@mui/material/colors';

function Language() {

  const dispatch = useDispatch()
  const english = useSelector( state => state.english )

  return (
      <Box sx={{ display: 'flex', flexDirection: 'row', justifySelf: 'center', justifyContent: 'center',position: 'absolute' , background: 'none', width: '14vw', height: '4.5vh', bottom: '0.3vh'}}>
        <Box sx={ english ? {display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center', backgroundColor: cyan[100], width: '2.3vw', height: '3.7vh'} : {display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center', backgroundColor: 'none', width: '2.3vw', height: '3.7vh'}} >
          <CardMedia onClick={() => dispatch(languageChanger(true) , console.log("LENGUAJE", english))} sx={{ backgroundColor: 'none', backgroundImage: `url(${lanEn})`, width: '2vw', height: '1.8vw' , backgroundSize: '100%',':hover': {'-webkit-filter': 'brightness(.9)', 'filter': 'brightness(.9)'}}}></CardMedia>
        </Box>
        <Box sx={ english ? {display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center', backgroundColor: 'none', width: '2.3vw', height: '3.7vh'} : {display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center', backgroundColor: cyan[100], width: '2.3vw', height: '3.7vh'}} >
          <CardMedia onClick={() => dispatch(languageChanger(false) , console.log("LENGUAJE", english))} sx={{ backgroundColor: 'none', backgroundImage: `url(${lanEs})`, width: '2vw', height: '1.8vw' , backgroundSize: '100%',':hover': {'-webkit-filter': 'brightness(.9)', 'filter': 'brightness(.9)'}}}></CardMedia>
        </Box>
      </Box>
  )
}

export default Language;
