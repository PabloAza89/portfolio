import React, {useState, useEffect} from 'react';
import {Box, CardMedia } from '@mui/material';
import lanEn from '../../images/lanEn.png';
import lanEs from '../../images/lanEs.png';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes , Link} from "react-router-dom";
import { languageChanger } from '../../actions';
import { grey , blue , cyan, lime, brown, red} from '@mui/material/colors';

function Language() {

  const dispatch = useDispatch()
  
  const english = useSelector( state => state.english )
  const minPort = useSelector(state => state.minPort)
  const minLand = useSelector(state => state.minLand)
  const medPort = useSelector(state => state.medPort)
  const medLand = useSelector(state => state.medLand)
  const larPort = useSelector(state => state.larPort)
  const larLand = useSelector(state => state.larLand)
  const percentageResizedHeight = useSelector(state => state.percentageResizedHeight)
  const maxStaticReference = useSelector(state => state.maxStaticReference)

  return (
      <Box sx={{
        background: 'none',
        /* display: larLand && size.currentHeight < 300 ? 'none' : 'flex', */
        display: 'flex',
        'pointer-events':  larPort && percentageResizedHeight < 0.272 ? 'none' : larLand && percentageResizedHeight < 0.272 ? 'none' : 'null',
        transition: 'opacity .1s ease-in-out',
        opacity: larPort && percentageResizedHeight < 0.272 ? '0' : larLand && percentageResizedHeight < 0.272 ? '0' : '1',
        'active': {
          'opacity': '0',
          'display': 'flex'
         },
        flexDirection: 'row',
        'justify-content': 'center',
        position: 'absolute',
        width: minPort ? '97vw' : minLand ? '97vw' : larPort ? '97vw' : '97vw',
        height: minPort ? '9vh' : minLand ? '16vh' : larPort ? '15vh' : '15vh',
        bottom: minPort ? '0vh' : '0.3vh'
      }}>
        <Box sx={ english ? {
            position: 'relative',
            marginRight: minPort ? '0.5vh' : minLand ? '0.5vw' : medPort ? `${maxStaticReference * 0.1}px` : medLand ? `${maxStaticReference * 0.1}px` : larPort ? `${maxStaticReference * 0.1}px` : `${maxStaticReference * 0.1}px`,
            display: 'flex',
            //size.currentHeight
            flexDirection: 'row',
            justifyContent: 'center',
            alignSelf: 'center',
            backgroundColor: cyan[100],
            width: minPort ? '14vw' : minLand ? '7vw' : medPort ? `${maxStaticReference * 7.3}px` : medLand ? `${maxStaticReference * 7.3}px` : larPort ? `${maxStaticReference * 2.7}px` : `${maxStaticReference * 2.7}px`,
            height: minPort ? '4.3vh' : minLand ? '9vh' : medPort ? `${maxStaticReference * 5.3}px` : medLand ? `${maxStaticReference * 5.3}px` : larPort ? `${maxStaticReference * 1.9}px` : `${maxStaticReference * 1.9}px`
          } : { position: 'relative',
          marginRight: minPort ? '0.5vh' : minLand ? '0.5vw' : medPort ? `${maxStaticReference * 0.1}px` : medLand ? `${maxStaticReference * 0.1}px` : larPort ? `${maxStaticReference * 0.1}px` : `${maxStaticReference * 0.1}px`,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignSelf: 'center',
            backgroundColor: 'none',
            width: minPort ? '14vw' : minLand ? '7vw' : medPort ? `${maxStaticReference * 7.3}px` : medLand ? `${maxStaticReference * 7.3}px` : larPort ? `${maxStaticReference * 2.7}px` : `${maxStaticReference * 2.7}px`,
            height: minPort ? '4.3vh' : minLand ? '9vh' : medPort ? `${maxStaticReference * 5.3}px` : medLand ? `${maxStaticReference * 5.3}px` : larPort ? `${maxStaticReference * 1.9}px` : `${maxStaticReference * 1.9}px`
        }} >
          <CardMedia src={lanEn} onClick={() => dispatch(languageChanger(true))} sx={{
            background: 'null',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'row',
            alignSelf: 'center',
            backgroundImage: `url(${lanEn})`,
            width: minPort ? '20vw' : minLand ? '9vw' : medPort ? `${maxStaticReference * 7.3}px` : medLand ? `${maxStaticReference * 7.3}px` : larPort ? `${maxStaticReference * 2.5}px` : `${maxStaticReference * 2.5}px`,
            height: minPort ? '13vh' : minLand ? '9vh' : medPort ? `${maxStaticReference * 7.3}px` : medLand ? `${maxStaticReference * 7.3}px` : larPort ? `${maxStaticReference * 2.6}px` : `${maxStaticReference * 2.6}px`,
            backgroundSize: minPort ? '13vw 4.1vh' : minLand ? '6.5vw 8vh' : medPort ? `${maxStaticReference * 6.7}px` : medLand ? `${maxStaticReference * 6.7}px` : larPort ? `${maxStaticReference * 2.5}px ${maxStaticReference * 1.6}px` : `${maxStaticReference * 2.5}px ${maxStaticReference * 1.6}px`,
            ':hover': {
              '-webkit-filter': 'brightness(.9)',
              'filter': 'brightness(.9)'
            }
          }}></CardMedia>
        </Box>
        <Box sx={ english ? {
            position: 'relative',
            /* marginRight: minPort ? '0.5vh' : minLand ? '0.5vw' : larPort ? '0.0vw' : '0vw', */
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignSelf: 'center',
            backgroundColor: 'none',
            width: minPort ? '14vw' : minLand ? '7vw' : medPort ? `${maxStaticReference * 7.3}px` : medLand ? `${maxStaticReference * 7.3}px` : larPort ? `${maxStaticReference * 2.7}px` : `${maxStaticReference * 2.7}px`,
            height: minPort ? '4.3vh' : minLand ? '9vh' : medPort ? `${maxStaticReference * 5.3}px` : medLand ? `${maxStaticReference * 5.3}px` : larPort ? `${maxStaticReference * 1.9}px` : `${maxStaticReference * 1.9}px`
            } : { position: 'relative',
            /* marginRight: minPort ? '0.5vh' : minLand ? '0.5vw' : larPort ? '0.0vw' : '0vw', */
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignSelf: 'center',
            backgroundColor: cyan[100],
            width: minPort ? '14vw' : minLand ? '7vw' : medPort ? `${maxStaticReference * 7.3}px` : medLand ? `${maxStaticReference * 7.3}px` : larPort ? `${maxStaticReference * 2.7}px` : `${maxStaticReference * 2.7}px`,
            height: minPort ? '4.3vh' : minLand ? '9vh' : medPort ? `${maxStaticReference * 5.3}px` : medLand ? `${maxStaticReference * 5.3}px` : larPort ? `${maxStaticReference * 1.9}px` : `${maxStaticReference * 1.9}px`
        }} >
          <CardMedia src={lanEs} onClick={() => dispatch(languageChanger(false))} sx={{
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'row',
            alignSelf: 'center',
            backgroundColor: 'none',
            backgroundImage: `url(${lanEs})`,
            width: minPort ? '20vw' : minLand ? '9vw' : medPort ? `${maxStaticReference * 7.3}px` : medLand ? `${maxStaticReference * 7.3}px` : larPort ? `${maxStaticReference * 2.5}px` : `${maxStaticReference * 2.5}px`,
            height: minPort ? '13vh' : minLand ? '9vh' : medPort ? `${maxStaticReference * 7.3}px` : medLand ? `${maxStaticReference * 7.3}px` : larPort ? `${maxStaticReference * 2.6}px` : `${maxStaticReference * 2.6}px`,
            backgroundSize: minPort ? '13vw 4.1vh' : minLand ? '6.5vw 8vh' : medPort ? `${maxStaticReference * 6.7}px` : medLand ? `${maxStaticReference * 6.7}px` : larPort ? `${maxStaticReference * 2.5}px ${maxStaticReference * 1.6}px` : `${maxStaticReference * 2.5}px ${maxStaticReference * 1.6}px`,
            ':hover': { '-webkit-filter': 'brightness(.9)', 'filter': 'brightness(.9)'
          }}}></CardMedia>
        </Box>
      </Box>
  )
}

export default Language;
