import { useState, useEffect } from 'react';
import { Box, Typography, Avatar, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import profile from '../../images/profile.png';
import Swal from 'sweetalert2';
import { background, right, text, left, avatar, separatorY, separatorX, textNoDeco } from '../../styles/ContactSX';
import '../../styles/ContactSX.css';

function Contact() {

  const [target, setTarget] = useState<string>("")
  const darkMode = useSelector( (state: {darkMode:boolean}) => state.darkMode)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
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
        icon: 'icon-class'
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
      width: '40vw',
      focusConfirm: false,
      confirmButtonText: '<i class="fas fa-clipboard fa-2x"></i>',
      customClass: {
        icon: 'icon-class'
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
    <Box sx={background({ minPort })}>
      <Box sx={left({ minPort })}>
        <Avatar
          alt="Pablo Azambuyo"
          src={profile}
          sx={avatar({ minPort, minLand, larPort })}
        />
      </Box>
      <Box sx={separatorY({ minPort })}></Box>
      <Box sx={separatorX({ minPort })}></Box>
      <Box sx={right({ minPort })}>
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
  )
}

export default Contact;