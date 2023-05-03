import { useState } from 'react';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { Box, Button, Typography, Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import MessageMeSX from '../../styles/MessageMeSX';
import BackButton from '../BackButton/BackButton';
import { GoogleLogin, useGoogleLogin, GoogleOAuthProvider, googleLogout } from '@react-oauth/google';
import TextField from '@mui/material/TextField';
import Swal from 'sweetalert2'
import "../../styles/MessageMeSX.css";


require('dotenv').config();

const { USER, PASS, FB_API_KEY, FB_AUTH_DOMAIN, FB_PROJECT_ID,
  FB_STORAGE_BUCKET, FB_MESSAGING_SENDER_ID, FB_APP_ID, FB_MEASUREMENT_ID,
  G_CLIENT_ID, G_API_KEY, G_SECRET, G_REDIRECT_URL, MJT_API_KEY, MJT_API_SECRET
 } = process.env;


function MessageMe() {

  const english = useSelector((state: {english:boolean}) => state.english)
  const [name, setName] = useState<string>("")
  const [text, setText] = useState<string>("")
  const [sent, setSent] = useState<boolean>(false)

  const clearBoth = () => {

    setName("");
    setText("");
  }

  // const Toast = Swal.mixin({
  //   toast: true,
  //   position: 'top-end',
  //   showConfirmButton: false,
  //   timer: 3000,
  //   timerProgressBar: true,
  //   didOpen: (toast) => {
  //     toast.addEventListener('mouseenter', Swal.stopTimer)
  //     toast.addEventListener('mouseleave', Swal.resumeTimer)
  //   }
  // })

  
  
  const sentNot = () => {

    const Toast = Swal.mixin({
      showConfirmButton: false,
      timer: 3500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'success',
      title: 'Message sent!',
      text: 'The message was received.',
    })

  }

  const noSentNot = () => {

  const Toast = Swal.mixin({
    showConfirmButton: false,
    timer: 3500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  Toast.fire({
    icon: 'error',
    title: 'Message not sent!',
    text: 'There was an error.. Please try Again.',
  })

  }
  


  const handleSubmit = (e: any) => {
    e.preventDefault();

    //let data = { formInput };

    fetch("http://localhost:3001/test", {
      method: "POST",
      body: JSON.stringify({name: name, text: text}),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => console.log("Success:", JSON.stringify(response)))
      .catch(error => console.error("Error:", error));
  };

  console.log("TEST", name, text)

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
        
          <Button onClick={() => noSentNot()}>
            NO SENT NOTI
          </Button>
        
        <Button onClick={() => sentNot()}>
          SENT NOTI
        </Button>
        <Button onClick={() => clearBoth()}>
          CLEAR
        </Button>
        <TextField
          id="outlined-multiline-flexible"
          label={english ? "Your name here" : "Tu nombre aquí"}
          multiline
          maxRows={4}
          value={name}
          onChange={e => setName(e.target.value)}
        />
      
      
        <TextField
          id="outlined-multiline-static"
          label={english ? "Write your message here" : "Escríbe tu mensaje aquí"}
          multiline
          rows={10}
          value={text}
          /* defaultValue="Default Value" */
          /* sx={MessageMeSX().test} */
          onChange={e => setText(e.target.value)}
        />
      
     
      </Box>
      <Button onClick={(e) => handleSubmit(e)}>
        GREAT !
      </Button>
    </Box>
  )
}

export default MessageMe;
