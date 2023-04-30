import { Box, Typography, Avatar } from '@mui/material';
//import { useSelector } from 'react-redux';
import MessageMeSX from '../../styles/MessageMeSX';
import BackButton from '../BackButton/BackButton';
//import nodemailer from 'nodemailer';
//require('dotenv').config();
//const functions = require("firebase-functions");
//const { USER, PASS } = process.env;

function MessageMe() {

  //const english = useSelector((state: {english:boolean}) => state.english)

/*   const shareSpeechWithEmail = functions.firestore
  .document("/sharedSpeeches/{userId}")
  .onCreate(async (snapshot: any, context: any) => {
    // const userId = context.params.userId;
    // const data = snapshot.data();
    const mailTransport = nodemailer.createTransport(
      `smtps://${USER}:${PASS}@smtp.gmail.com`
    );

    const mailOptions = {
      to: "juanpabloazambuyoportfolio@gmail.com",
      subject: `Message test`,
      html: `<p><b>test</b></p>`
    };
    try {
      return mailTransport.sendMail(mailOptions);
    } catch (err) {
      console.log(err);
      return Promise.reject(err);
    }
  }); */

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '93vh', width: '97vw', background: 'none'}}>
      <BackButton />
      <Box sx={MessageMeSX().background}>
      </Box>
    </Box>
  )
}

export default MessageMe;
