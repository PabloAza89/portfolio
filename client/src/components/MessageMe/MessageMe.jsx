import { useState } from 'react';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { Box, Button, Typography, Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import MessageMeSX from '../../styles/MessageMeSX';
import BackButton from '../BackButton/BackButton';
import { GoogleLogin, useGoogleLogin, GoogleOAuthProvider, googleLogout } from '@react-oauth/google';
import TextField from '@mui/material/TextField';
var nodemailer = require('nodemailer');


require('dotenv').config();

const { USER, PASS, FB_API_KEY, FB_AUTH_DOMAIN, FB_PROJECT_ID,
  FB_STORAGE_BUCKET, FB_MESSAGING_SENDER_ID, FB_APP_ID, FB_MEASUREMENT_ID,
  G_CLIENT_ID, G_API_KEY, G_SECRET, G_REDIRECT_URL, MJT_API_KEY, MJT_API_SECRET
 } = process.env;


function MessageMe() {

  
    

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '93vh', width: '97vw', background: 'none'}}>
      <BackButton />

      <Box
        component="form"
        /* sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }} */
        sx={MessageMeSX().messageBackground}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-multiline-flexible"
          label="Your name here"
          multiline
          maxRows={4}
        />
      
      
        <TextField
          id="outlined-multiline-static"
          label="Write your message here"
          multiline
          rows={10}
          /* defaultValue="Default Value" */
          sx={MessageMeSX().test}
        />
      
     
      </Box>
    </Box>
  )
}

export default MessageMe;
