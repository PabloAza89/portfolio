import { useState } from 'react';
import { Box, Button, Typography, Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import MessageMeSX from '../../styles/MessageMeSX';
import BackButton from '../BackButton/BackButton';
import { sendMessage } from "./index.jsx";
import { signIn } from "./authentication.jsx";
require('dotenv').config();
const { USER, PASS, FB_API_KEY, FB_AUTH_DOMAIN, FB_PROJECT_ID,
  FB_STORAGE_BUCKET, FB_MESSAGING_SENDER_ID, FB_APP_ID, FB_MEASUREMENT_ID,
  G_CLIENT_ID, G_API_KEY
 } = process.env;


function MessageMe() {

  signIn()

  const [state, setState] = useState(
    {
      displayModal: false,
      to: "juanpabloazambuyoporfolio@gmail.com",
      cc: "",
      bcc: "",
      subject: "test 123",
      content: "test 456"
    }
  )

  const [headers, setHeaders] = useState(
    { To: "juanpabloazambuyoporfolio@gmail.com",
        Subject: 'test 123'}
  )

  function sendEmail() {
    sendMessage({
      headers,
      body: "test 456"
  })
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '93vh', width: '97vw', background: 'none'}}>
      <BackButton />
      <Button
        color="primary"
        onClick={() => sendEmail()}
        title="Send message"
      >
        Send
      </Button>
    </Box>
  )
}

export default MessageMe;
