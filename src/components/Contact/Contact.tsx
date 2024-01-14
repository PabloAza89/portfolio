import { Box, Typography, Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import profile from '../../images/profile.png';
import Swal from 'sweetalert2';
import * as s from '../../styles/ContactSX';
import '../../styles/ContactSX.css';

function Contact() {

  const english = useSelector((state: {english:boolean}) => state.english)
  const darkMode = useSelector( (state: {darkMode:boolean}) => state.darkMode)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)

  const notifCopyEmail = () => {

    Swal.fire({
      title: '<strong>juanpabloazambuyo@gmail.com</strong>',
      iconHtml:
        minPort || minLand ? `<i class="fa-regular fa-envelope fa-bounce fa-xl"></i>` :
        `<i class="fa-regular fa-envelope fa-bounce fa-2x"></i>`,
      focusConfirm: false,
      background: darkMode ? 'rgb(49, 18, 85)' : 'white',
      confirmButtonText: '<i class="fas fa-clipboard fa-2x"></i>',
      customClass: {
        popup:
          minPort ? 'first-popup-minPort-email' :
          minLand ? 'first-popup-minLand-email' :
          medPort ? 'first-popup-medPort-email' :
          medLand ? 'first-popup-medLand-email' :
          larPort || larLand ? 'first-popup-lar-email' :
          'null',
        icon: 'icon-class'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: english ? 'Copied to clipboard !' : 'Copiado al portapapeles !',
          showConfirmButton: false,
          background: darkMode ? 'rgb(49, 18, 85)' : 'white',
          icon: 'success',
          timer: 1000,
          customClass: {
            popup:
              minPort ? 'second-popup-minPort' :
              minLand ? 'second-popup-minLand' :
              medPort || medLand ? 'second-popup-med' :
              larPort || larLand ? 'second-popup-lar' :
              'null'
          }
        })
      }
    }).then(() => {
      navigator.clipboard.writeText('juanpabloazambuyo@gmail.com')
    })
  }

  const notifCopyPhone = () => {

    Swal.fire({
      title: '<strong>+54 9 11 2468-8005</strong>',
      iconHtml:
        minPort || minLand ? `<i class="fa-brands fa-whatsapp fa-bounce fa-xl"></i>` :
        `<i class="fa-brands fa-whatsapp fa-bounce fa-2x"></i>`,
      focusConfirm: false,
      background: darkMode ? 'rgb(49, 18, 85)' : 'white',
      confirmButtonText: '<i class="fas fa-clipboard fa-2x"></i>',
      customClass: {
        popup:
          minPort ? 'first-popup-minPort-phone' :
          minLand ? 'first-popup-minLand-phone' :
          medPort ? 'first-popup-medPort-phone' :
          medLand ? 'first-popup-medLand-phone' :
          larPort || larLand ? 'first-popup-lar-phone' :
          'null',
        icon: 'icon-class'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: english ? 'Copied to clipboard !' : 'Copiado al portapapeles !',
          showConfirmButton: false,
          background: darkMode ? 'rgb(49, 18, 85)' : 'white',
          icon: 'success',
          timer: 1000,
          customClass: {
            popup:
              minPort ? 'second-popup-minPort' :
              minLand ? 'second-popup-minLand' :
              medPort || medLand ? 'second-popup-med' :
              larPort || larLand ? 'second-popup-lar' :
              'null'
          }
        })
      }
    }).then(() => {
      navigator.clipboard.writeText('+5491124688005')
    })
  }

  return (
      <Box sx={s.background}>
        <Box sx={s.topBottomHelper({ minPort, minLand, medPort, medLand })} />
        <Box sx={s.mainContainer({ minPort, minLand, medPort, medLand, larPort, larLand })}>

          <Avatar
            alt="Pablo Azambuyo"
            src={profile}
            sx={s.avatar({ minPort, minLand, medPort, medLand, larPort })}
          />

          <Box sx={s.separatorY({ minPort, minLand, medPort, medLand })}></Box>
          <Box sx={s.separatorX({ minPort })}></Box>
          <Box sx={s.typographyBox({ minPort, minLand, medPort, medLand, larPort, larLand })}>
            <Typography sx={s.text({ darkMode, minPort, minLand, medPort, medLand, larPort })}>
              <Link
                style={s.textNoDeco()}
                to="https://www.linkedin.com/in/juan-pablo-azambuyo/"
                target="_blank"
              >LinkedIn</Link>
            </Typography>
            <Typography onClick={() => notifCopyEmail()} sx={s.text({ darkMode, minPort, minLand, medPort, medLand, larPort })}>Email</Typography>
            <Typography onClick={() => notifCopyPhone()} sx={s.text({ darkMode, minPort, minLand, medPort, medLand, larPort })}>Whatsapp</Typography>
            <Typography sx={s.text({ darkMode, minPort, minLand, medPort, medLand, larPort })}>
              <Link
                style={s.textNoDeco()}
                to="https://twitter.com/jpazambuyo"
                target="_blank"
              >Twitter</Link>
            </Typography>
            <Typography sx={s.text({ darkMode, minPort, minLand, medPort, medLand, larPort })}>
              <Link
                style={s.textNoDeco()}
                to="https://www.instagram.com/pabloaza_/"
                target="_blank"
              >Instagram</Link>
            </Typography>
          </Box>
        </Box>
        <Box sx={s.topBottomHelper({ minPort, minLand, medPort, medLand })}></Box>
      </Box>
  )
}

export default Contact;