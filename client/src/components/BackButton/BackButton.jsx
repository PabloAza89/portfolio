import React, { useState , useRef, useEffect} from 'react';
import {Box, Button,CardMedia, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import ForwardIcon from '@mui/icons-material/Forward';
import { row, column, jc , as, noSelect, prtr, wi, he, or}from '../../Styles/Styles'
import { useSelector, useDispatch } from 'react-redux';

function BackButton() {

  const width = useSelector(state => state.width)
  const height = useSelector(state => state.height)
  const minPort = useSelector(state => state.minPort)
  const minLand = useSelector(state => state.minLand)
  const medPort = useSelector(state => state.medPort)
  const medLand = useSelector(state => state.medLand)
  const larPort = useSelector(state => state.larPort)
  const larLand = useSelector(state => state.larLand)
  const maxStaticReference = useSelector(state => state.maxStaticReference)

    return (
        <Link style={{ textDecoration: 'none' }} to="/portfolio">
          <Button variant="contained"  sx={{
            padding: '0vw !important',
            minWidth: minPort ? '0vh !important' : minLand ? '0vh !important' : medPort ? '0vh !important' : medLand ? '0vh !important' : larPort ? '0vh !important' : '0vh !important',
            width: minPort ? `${maxStaticReference * 5.2}px !important` : minLand ? `${maxStaticReference * 5.2}px !important` : medPort ? `${maxStaticReference * 4.2}px !important` : medLand ? `${maxStaticReference * 4.2}px !important` : larPort ? `${maxStaticReference * 2.1}px !important` : `${maxStaticReference * 2.1}px !important`,
            height: minPort ? `${maxStaticReference * 5.2}px !important` : minLand ? `${maxStaticReference * 5.2}px !important` : medPort ? `${maxStaticReference * 4.2}px !important` : medLand ? `${maxStaticReference * 4.2}px !important` : larPort ? `${maxStaticReference * 2.1}px !important` : `${maxStaticReference * 2.1}px !important`,
            top: minPort ? '4.5vh' : minLand ? '6vh' : '5vh',
            left: minPort ? '84.5vw' : minLand ? '88vw' : '6vh',
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
          }}>
            <ForwardIcon sx={{
              display: 'flex',
              position: 'absolute',
              padding: '0vw 0vw 0vw 0vw !important',
              transform: 'rotate(180deg)',
              minWidth: minPort ? '0vh !important' : minLand ? '0vh !important' : medPort ? '0vh !important' : medLand ? '0vh !important' : larPort ? '0vh !important' : '0vh !important',
              width: minPort ? `${maxStaticReference * 3.7}px !important` : minLand ? `${maxStaticReference * 3.7}px !important` : medPort ? `${maxStaticReference * 2.1}px !important` : medLand ? `${maxStaticReference * 2.1}px !important` : larPort ? `${maxStaticReference * 1.3}px !important` : `${maxStaticReference * 1.3}px !important`,
              height: minPort ? `${maxStaticReference * 3.7}px !important` : minLand ? `${maxStaticReference * 3.7}px !important` : medPort ? `${maxStaticReference * 2.1}px !important` : medLand ? `${maxStaticReference * 2.1}px !important` : larPort ? `${maxStaticReference * 1.3}px !important` : `${maxStaticReference * 1.3}px !important`
            }}/>
          </Button>
        </Link>
    )
}

export default BackButton;
