import { useState, useEffect, useRef } from 'react';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import css from './MessageMeCSS.module.css';
import TextField from '@mui/material/TextField';
import Swal from 'sweetalert2'
import { setTimer, stopTimer, setNumberTimer, setTimerEnabled } from '../../actions';
import store from '../../store/store';

function MessageMe() {

  const dispatch = useDispatch()
  const english = useSelector((state: {english:boolean}) => state.english)

  const [name, setName] = useState<string>("")
  const [message, setMessage] = useState<string>("")
  const [sentButtonDisabled, setSentButtonDisabled] = useState<boolean>(false)
  const [clearButtonDisabled, setClearButtonDisabled] = useState<boolean>(false)
  const [showMessageSpinner, setShowMessageSpinner] = useState<boolean>(false)
  const [disableInputs, setDisableInputs] = useState<boolean>(false)

  let svSleepTimeout: any = useRef()

  useEffect(() => {
    let spinnerCircle = document.querySelector("[class*='messageLoadingSpinner']") as HTMLElement
    let loadingText = document.querySelector("[class*='loadingTextContainer']") as HTMLElement
    let serverSleep = document.querySelector("[class*='serverSleepText']") as HTMLElement
    if (showMessageSpinner && spinnerCircle && loadingText) {
      setDisableInputs(true)
      spinnerCircle.style.display = "flex";
      loadingText.style.display = "flex";
      svSleepTimeout.current = setTimeout(() => {
        console.log("TIMEs UP")
        serverSleep.style.display = "flex";
      }, 2400)
    }
    else if (!showMessageSpinner && spinnerCircle && loadingText) {
      setDisableInputs(false)
      spinnerCircle.style.display = "none";
      loadingText.style.display = "none";
      serverSleep.style.display = "none";
      clearTimeout(svSleepTimeout.current)
    }
  }, [showMessageSpinner])

  useEffect(() => {
    let name: string | null = localStorage.getItem('name');
    let message: string | null = localStorage.getItem('message');
    if (name === null) setName("")
    if (name !== null) setName(name)
    if (message === null) setMessage("")
    if (message !== null) setMessage(message)
  }, [])

  useEffect(() => {
    if (name.length > 50 || message.length > 800) setSentButtonDisabled(true);
    else setSentButtonDisabled(false);
    let div = document.querySelector("[class*='MessageMeCSS_name']") as HTMLElement
    let inputText = document.getElementById("inputNameMessage")
    let leftCounter = document.querySelector("[class*='leftCounter']") as HTMLElement
    if (name.length > 50 && div && inputText) {
      div.style.animation = `${css.shakeLRMessage} 2.5s linear infinite`;
      inputText.style.color = "red"
    }
    else if (name.length <= 50 && div && inputText) {
      div.style.animation = 'none';
      inputText.style.color = "inherit"
    }
    if (message.length > 800 && leftCounter) leftCounter.style.color = 'red'
    else if (message.length <= 800 && leftCounter) leftCounter.style.color = 'white'
  }, [name, message])

  var Toast: any = Swal

  const clearBoth = () => {
    setName("");
    localStorage.setItem('name', "");
    setMessage("");
    localStorage.setItem('message', "");
  }

  const sentNotif = () => {
    Swal.fire({
      showConfirmButton: false,
      timer: 3500,
      timerProgressBar: true,
      icon: 'success',
      title: english ? 'Message sent!' : 'Mensaje enviado!',
      text: english ? 'The message was received.' : 'El mensaje fue recibido.',
      customClass: { popup: `${css.popup}` }
    })
  }

  const noSentNotif = () => {
    Swal.fire({
      showConfirmButton: false,
      timer: 3500,
      timerProgressBar: true,
      icon: 'error',
      title: english ? 'Message not sent!' : 'Mensaje no enviado!',
      text: english ? 'There was an error.. Please try Again.' : 'Hubo un error.. por favor intentá de nuevo.',
      customClass: { popup: `${css.popup}` }
    })
  }

  const emptyMessage = () => {
    Swal.fire({
      showConfirmButton: false,
      timer: 3500,
      timerProgressBar: true,
      icon: 'error',
      title: english ? 'Fields cannot be empty!' : 'Los campos no pueden estar vacíos',
      text: english ? 'Please, fill all fields.' : 'Por favor, llena todos los campos.',
      customClass: { popup: `${css.popup}` }
    })
  }

  let currentSec: any = useRef()
  let display: any = useRef({ text: { en: "seconds", es: "segundos" }, secs: 0 })

  const MustWait: any = () => {
    let lastMessageLS: string | null = localStorage.getItem('lastMessage');

    if (lastMessageLS !== null) {
      currentSec.current = ((5000 - (Date.now() - parseInt(lastMessageLS))) / 1000).toFixed(0)

      let updateDisplay = () => {
        console.log("NEXT targetSec.current",  currentSec.current)
        if (currentSec.current > 1) display.current = { text: { en: "seconds", es: "segundos" }, secs: currentSec.current }
        //else if (currentSec.current < 1) display.current = { text: { en: "seconds", es: "segundos" }, secs: 0 }
        else display.current = { text: { en: "second", es: "segundo" }, secs: 1 }
      }

      updateDisplay()
      console.log("FIRST targetSec.current",  currentSec.current)

      Toast.fire({
        showConfirmButton: false,
        icon: 'error',
        title:
          english ?
          'You must wait to send another message !' :
          'Debes esperar para enviar otro mensaje !',
        timerProgressBar: true,
        //timerProgressBar: false,
        html:
          english ?
          `Please, wait <strong>${display.current.secs}</strong> ${display.current.text.en}.<br/><br/>` :
          `Por favor, espera <strong>${display.current.secs}</strong> ${display.current.text.es}.<br/><br/>`,
        //timer: 200500,
        timer: 2500,
        customClass: { popup: `${css.popup}` },
        willClose: () => clearInterval(interval)
      });

      let interval = setInterval(() => {
        currentSec.current -= 1

        if (currentSec.current <= 0) {
          //Toast.getHtmlContainer().innerHTML = `Please, wait.<br/><br/>`

          Toast.stopTimer()
          let el = document.querySelector('.swal2-timer-progress-bar') as HTMLElement
          if (el !== null) el.style.display = 'none';
          Toast.update({
            title: "Now you can send another message !",
            icon: "success",
            html: null,
            showConfirmButton: true,
            confirmButtonText: `OK`,
            confirmButtonColor: '#4baaa1'
          })
          console.log("ENTRO 1")
          clearInterval(interval)
        } else {
          console.log("ENTRO 2")
          updateDisplay()
          if (lastMessageLS !== null) {
            Toast.getHtmlContainer().innerHTML =
              english ?
              `Please, wait <strong>${display.current.secs}</strong> ${display.current.text.en}.<br/><br/>` :
              `Por favor, espera <strong>${display.current.secs}</strong> ${display.current.text.es}.<br/><br/>`;
     
          }
        }
      }, 1000)
    }
  }

  const handleSubmit = (e: any) => {

    let lastMessageLS: string | null = localStorage.getItem('lastMessage');
    if (lastMessageLS !== null && (Date.now() - parseInt(lastMessageLS, 10)) < 60000) return MustWait()

    function fetchData() {
      //fetch(`http://localhost:3001/`, {
      fetch(`https://oval-transparent-ornament.glitch.me/`, {
        method: "POST",
        body: JSON.stringify({ name: name, message: message }),
        headers: { "Content-Type": "application/json" }
      })
      .then(res => res.json())
      .then(res => { if (!res.success) throw new Error(); return res })
      .then(() => {
        sentNotif(); handleTimerStart();
        setSentButtonDisabled(false); setClearButtonDisabled(false);
        setShowMessageSpinner(false); clearBoth();
        localStorage.setItem('lastMessage', `${Date.now().toString()}`);
      })
      .catch(error => {console.error("Error:", error); noSentNotif(); setSentButtonDisabled(false); setClearButtonDisabled(false); setShowMessageSpinner(false) })
    };
    e.preventDefault();

    if (name?.length !== 0 && name?.trim() !== "" && message?.length !== 0 && message?.trim() !== "") {setSentButtonDisabled(true); setClearButtonDisabled(true); setShowMessageSpinner(true); fetchData()}
    else emptyMessage()
  };

  let timerID: any

  const handleTimerStart = () => {
    timerID = setInterval(handleTimerStartCB, 1000);
    dispatch(setNumberTimer(timerID))
    dispatch(setTimerEnabled(true))
  }

  const handleTimerStartCB = () => {
    if (store.getState().timerEnabled) dispatch(setTimer(1))
    if (store.getState().timer === 0) {
      dispatch(setTimerEnabled(false))
      clearInterval(store.getState().numberTimer);
      dispatch(stopTimer(60))
    }
  }

  return (
    <div className={css.background}>
      <div className={css.formContainer}>
        <div className={css.header}>
          <div className={css.counter}>
            <div className={css.leftCounter}>{message.length} </div>
            <div className={css.rightCounter}>/ 800</div>
          </div>
          <Button
            disabled={clearButtonDisabled}
            variant="contained"
            size="small"
            onClick={() => clearBoth()}
            className={css.clearButton}
          >
            { english ? 'CLEAR' : 'LIMPIAR' }
          </Button>
        </div>
        <TextField
          id={"inputNameMessage"}
          disabled={disableInputs}
          className={css.name}
          label={ english ? "Your name here" : "Tu nombre aquí" }
          size="small"
          value={name}
          InputLabelProps={{ className: css.label }}
          InputProps={{ className: css.input }}
          onChange={e => {setName(e.target.value); localStorage.setItem('name', e.target.value)}}
        />
        <TextField
          className={css.message}
          disabled={disableInputs}
          label={ english ? "Your message here" : "Tu mensaje aquí" }
          multiline
          minRows={6}
          value={message}
          size="small"
          InputLabelProps={{ className: css.label }}
          InputProps={{ className: css.input }}
          onChange={e => {setMessage(e.target.value); localStorage.setItem('message', e.target.value)}}
        />
        <Button
          disabled={sentButtonDisabled}
          variant="contained"
          size="small"
          onClick={(e) => handleSubmit(e)}
          className={css.sendMessageButton}
        >
          { english ? 'SEND MESSAGE' : 'ENVIAR MENSAJE' }
        </Button>
      </div>
      <div className={css.messageLoadingSpinner} >
        <div className={css.divSpinner} />
        <div className={css.divSpinner} />
        <div className={css.divSpinner} />
        <div className={css.divSpinner} />
      </div>
      <div className={css.loadingTextContainer}>
        <div className={css.loadingText}>
          {
            english ?
            `SENDING MESSAGE..` :
            `ENVIANDO MENSAJE..`
          }
        </div>
        
        <div className={css.serverSleepText}>
          <div className={css.serverSleepBG}></div>
          {
            english ?
            <div>IT'S SEEMS SERVER IS SLEEPING..<br/>WAKING UP SERVER..<br/>PLEASE WAIT..</div> :
            <div>PARECE QUE EL SERVIDOR ESTÁ DURMIENDO..<br/>DESPERTANDO SERVIDOR..<br/>POR FAVOR ESPERE..</div>
          }
        </div>
      </div>
    </div>
  )
}

export default MessageMe;