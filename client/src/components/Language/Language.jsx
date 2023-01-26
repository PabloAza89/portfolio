import React from 'react';
import {Box, CardMedia } from '@mui/material';
import lanEn from '../../images/lanEn.png';
import lanEs from '../../images/lanEs.png';
import { useSelector, useDispatch } from 'react-redux';
import { languageChanger } from '../../actions';

function Language() {

  const dispatch = useDispatch()
  const english = useSelector( state => state.english )

  return (
      <Box sx={{ display: 'flex', flexDirection: 'row', justifySelf: 'center', justifyContent: 'center',position: 'absolute' , background: 'none', width: '14vw', height: '5vh', bottom: '0.3vh'}}>
        <CardMedia onClick={() => dispatch(languageChanger(true) , console.log("LENGUAJE", english))} sx={{ backgroundImage: `url(${lanEn})`, width: '2vw', height: '3vw' , backgroundSize: '100%',':hover': {'-webkit-filter': 'brightness(.9)', 'filter': 'brightness(.9)'}}}></CardMedia>
        <CardMedia onClick={() => dispatch(languageChanger(false) , console.log("LENGUAJE", english))} sx={{ backgroundImage: `url(${lanEs})`, width: '2vw', height: '3vw',  backgroundSize: '100%',':hover': {'-webkit-filter': 'brightness(.9)', 'filter': 'brightness(.9)'}, marginLeft: '0.3vw',}}></CardMedia>
      </Box>
  )
}

export default Language;
