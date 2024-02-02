import { useSelector } from 'react-redux';
import profile from '../../images/profile.png';
import Swal from 'sweetalert2';
import css from './ContactCSS.module.css';
import './ContactCSS.css';

function Contact() {

  const english = useSelector((state: {english:boolean}) => state.english)

  const notifCopyEmail = () => {

    Swal.fire({
      title: `<strong>juanpablo<wbr>azambuyo<wbr>@gmail.com</strong>`,
      iconHtml: `<i class="fa-regular fa-envelope fa-bounce fa-xl"></i>`,
      focusConfirm: false,
      //background: darkMode ? 'rgb(49, 18, 85)' : 'white',
      confirmButtonText: '<i class="fas fa-clipboard fa-2x"></i>',
      customClass: {
        popup:  `${css.firstPopup}`,
        icon: 'icon-class'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: english ? 'Copied to clipboard !' : 'Copiado al portapapeles !',
          showConfirmButton: false,
          //background: darkMode ? 'rgb(49, 18, 85)' : 'white',
          icon: 'success',
          timer: 1000,
          customClass: {
            popup: `${css.secondPopup}`,
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
      iconHtml: `<i class="fa-brands fa-whatsapp fa-bounce fa-xl"></i>`,
      focusConfirm: false,
      //background: darkMode ? 'rgb(49, 18, 85)' : 'white',
      confirmButtonText: '<i class="fas fa-clipboard fa-2x"></i>',
      customClass: {
        popup:  `${css.firstPopup}`,
        icon: 'icon-class'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: english ? 'Copied to clipboard !' : 'Copiado al portapapeles !',
          showConfirmButton: false,
          //background: darkMode ? 'rgb(49, 18, 85)' : 'white',
          icon: 'success',
          timer: 1000,
          customClass: {
            popup: `${css.secondPopup}`,
          }
        })
      }
    }).then(() => {
      navigator.clipboard.writeText('+5491124688005')
    })
  }

  return (
      <div className={css.background}>
        <div className={css.mainContainer}>
          <img
            alt="Pablo Azambuyo"
            src={profile}
            className={css.avatar}
          />
          <div className={css.separatorX} />
          <div className={css.separatorY} />
          <div className={css.rightContainer}>
            <a
              className={css.text}
              href="https://www.linkedin.com/in/juan-pablo-azambuyo"
              target="_blank"
              rel="noreferrer"
            >LinkedIn</a>
            <div onClick={() => notifCopyEmail()} className={css.text}>Email</div>
            <div onClick={() => notifCopyPhone()} className={css.text}>Whatsapp</div>
            <a
              className={css.text}
              href="https://twitter.com/jpazambuyo"
              target="_blank"
              rel="noreferrer"
            >Twitter</a>
            <a
              className={css.text}
              href="https://www.instagram.com/pabloaza_"
              target="_blank"
              rel="noreferrer"
            >Instagram</a>
          </div>
        </div>
      </div>
  )
}

export default Contact;