import React, { useState , useRef, useEffect} from 'react';
import {Box, Button,CardMedia, Typography } from '@mui/material';
import ReplyIcon from '@mui/icons-material/Reply';
import { row, column, jc , as, noSelect, prtr, wi, he, or}from '../../styles/styles';
import { useSelector } from 'react-redux';

interface AppProps {
  link: string;
}

function GoToLinkButton({link}:AppProps) {

  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)

    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Button variant="contained"  sx={{
              padding: '0vw !important',
              minWidth: minPort ? '0vh !important' : minLand ? '0vh !important' : larPort ? '0vh !important' : '0vh !important',
              width: minPort ? '4.5vw !important' : minLand ? '6vh !important' : larPort ? '4.5vw !important' : '4vh !important',
              height: minPort ? '4.5vw !important' : minLand ? '6vh !important' : larPort ? '4.5vw !important' : '4vh !important',
              position: 'relative',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column'
          }}>
            <ReplyIcon sx={{
              transform: 'scaleX(-1)',
              padding: '0vw !important',
              width: minPort ? '4vw !important' : minLand ? '5vh !important' : larPort ? '3vw !important' : '3.5vh !important'
            }} />
          </Button>
        </a>
    )
}

export default GoToLinkButton;