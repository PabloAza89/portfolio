import { useState } from 'react';
import { Box, Button, Typography, Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import MessageMeSX from '../../styles/MessageMeSX';
import BackButton from '../BackButton/BackButton';
//import { google } from 'googleapis';
require('dotenv').config();

const { USER, PASS, FB_API_KEY, FB_AUTH_DOMAIN, FB_PROJECT_ID,
  FB_STORAGE_BUCKET, FB_MESSAGING_SENDER_ID, FB_APP_ID, FB_MEASUREMENT_ID,
  G_CLIENT_ID, G_API_KEY, G_SECRET, G_REDIRECT_URL
 } = process.env;


function MessageMe() {


  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '93vh', width: '97vw', background: 'none'}}>
      <BackButton />
    </Box>
  )
}

export default MessageMe;
