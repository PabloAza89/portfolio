import { useState, useEffect } from 'react';
import { Box, Typography, Avatar, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import profile from '../../images/profile.png';
import Swal from 'sweetalert2';
import {
  background, right, text, avatar,
  separatorY, separatorX, textNoDeco, topBottomHelper
} from '../../styles/ContactSX';
import '../../styles/ContactSX.css';
import { blue, brown, lime, red, grey } from '@mui/material/colors';

function Contact() {

  const [target, setTarget] = useState<string>("")
  const darkMode = useSelector( (state: {darkMode:boolean}) => state.darkMode)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)
  const currentHeight = useSelector((state: {currentHeight:number}) => state.currentHeight)

  const notifCopyPhone = () => {

    Swal.fire({
      title: '<strong>+54 9 11 2468-8005</strong>',
      iconHtml: `<i class="fa-brands fa-whatsapp fa-bounce fa-2x"></i>`,
      focusConfirm: false,
      confirmButtonText: '<i class="fas fa-clipboard fa-2x"></i>',
      customClass: {
        icon: 'icon-class',
        container: minPort ? 'swal2-container swal2-bottom, swal2-container swal2-center, swal2-container swal2-top' : 'null',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Copied to clipboard !',
          showConfirmButton: false,
          icon: 'success',
          timer: 1000,
        })
      }
    }).then(() => {
      navigator.clipboard.writeText('+5491124688005')
    })
  }

  const notifCopyEmail = () => {

    Swal.fire({
      title: '<strong>juanpabloazambuyo@gmail.com</strong>',
      iconHtml: `<i class="fa-regular fa-envelope fa-bounce fa-2x"></i>`,
      width: minPort ? '600px' : '660px',
      focusConfirm: false,
      confirmButtonText: '<i class="fas fa-clipboard fa-2x"></i>',
      customClass: {
        icon: 'icon-class',
        container: minPort ? 'swal2-container swal2-bottom, swal2-container swal2-center, swal2-container swal2-top' : 'null',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Copied to clipboard !',
          showConfirmButton: false,
          icon: 'success',
          timer: 1000,
        })
      }
    }).then(() => {
      navigator.clipboard.writeText('juanpabloazambuyo@gmail.com')
    })
  }

  return (
      <Box sx={{ display: 'flex', position: 'relative', justifyContent: 'space-between', flexDirection: 'column', background: 'darkblue', height: 'calc(100vh - 12px)' }}>
        <Box sx={topBottomHelper({ minPort, minLand, medPort, medLand, larPort, larLand })}></Box>
        <Box sx={background({ minPort, minLand, medPort, medLand, larPort, larLand })}>

          <Avatar
            alt="Pablo Azambuyo"
            src={profile}
            sx={avatar({ minPort, minLand, larPort })}
          />

          <Box sx={separatorY({ minPort, minLand })}></Box>
          <Box sx={separatorX({ minPort })}></Box>
          <Box sx={right({ minPort, minLand, medPort, medLand, larPort, larLand })}>
            <Typography sx={text({ darkMode, minPort, minLand, larPort })}>
              <Link
                style={textNoDeco()}
                to="https://www.linkedin.com/in/juan-pablo-azambuyo/"
                target="_blank"
              >LinkedIn</Link>
            </Typography>
            <Typography onClick={() => notifCopyEmail()} sx={text({ darkMode, minPort, minLand, larPort })}>Email</Typography>
            <Typography onClick={() => notifCopyPhone()} sx={text({ darkMode, minPort, minLand, larPort })}>Whatsapp</Typography>
            <Typography sx={text({ darkMode, minPort, minLand, larPort })}>
              <Link
                style={textNoDeco()}
                to="https://twitter.com/jpazambuyo"
                target="_blank"
              >Twitter</Link>
            </Typography>
            <Typography sx={text({ darkMode, minPort, minLand, larPort })}>
              <Link
                style={textNoDeco()}
                to="https://www.instagram.com/pabloaza_/"
                target="_blank"
              >Instagram</Link>
            </Typography>
          </Box>
        </Box>
        <Box sx={topBottomHelper({ minPort, minLand, medPort, medLand, larPort, larLand })}></Box>
        <Box sx={{background: grey[400],
          height: '6px',
          width: 'calc(100vw - 12px)',
          display: 'flex',
          position: 'fixed',
          bottom: '0px',
          zIndex: 1000}}>
        </Box>
        <Box sx={{background: grey[400],
          height: '100vh',
          width: '6px',
          display: 'flex',
          position: 'fixed',
          right: '0px',
          zIndex: 1000}}>
        </Box>
      </Box>
  )
}

export default Contact;