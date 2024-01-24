import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import css from './MessageMeCSS.module.css';
import './MessageMeCSS.css';
import TextField from '@mui/material/TextField';
import Swal from 'sweetalert2'
import { setTimer, stopTimer, setNumberTimer, setTimerEnabled } from '../../actions';
import store from '../../store/store';

function MessageMe() {

  const dispatch = useDispatch()
  const english = useSelector((state: {english:boolean}) => state.english)

  const [name, setName] = useState<string>("")
  const [text, setText] = useState<string>("")
  const [sentButtonDisabled, setSentButtonDisabled] = useState<boolean>(false)
  const [clearButtonDisabled, setClearButtonDisabled] = useState<boolean>(false)
  const [showMessageSpinner, setShowMessageSpinner] = useState<boolean>(false)

  useEffect(() => {
    let spinnerCircle = document.querySelector("[class*='messageLoadingSpinner']") as HTMLElement
    let loadingText = document.querySelector("[class*='loadingText']") as HTMLElement
    if (showMessageSpinner && spinnerCircle && loadingText) {
      spinnerCircle.style.display = "flex"
      loadingText.style.display = "flex"
    }
    else if (!showMessageSpinner && spinnerCircle && loadingText) {
      spinnerCircle.style.display = "none"
      loadingText.style.display = "none"
    }

  },[showMessageSpinner])

  useEffect(() => {
    let name: string | null = localStorage.getItem('name');
    let text: string | null = localStorage.getItem('text');
    if (name === null) setName("")
    if (name !== null) setName(name)
    if (text === null) setText("")
    if (text !== null) setText(text)
  },[])

  useEffect(() => { // name & text length handler
    if (name.length > 50 || text.length > 800) setSentButtonDisabled(true);
    else setSentButtonDisabled(false);
    let div = document.querySelector("[class*='MessageMeCSS_name']") as HTMLElement
    let inputText = document.getElementById("name123")
    let leftCounter = document.querySelector("[class*='leftCounter']") as HTMLElement
    if (name.length > 50 && div && inputText) {
      div.style.animation = 'shakeLR 2.5s linear infinite';
      inputText.style.color = "red"
    }
    else if (name.length <= 50 && div && inputText) {
      div.style.animation = 'none';
      inputText.style.color = "inherit"
    }
    if (text.length > 800 && leftCounter) {
      leftCounter.style.color = 'red'
    }
    else if (text.length <= 800 && leftCounter) {
      leftCounter.style.color = 'white'
    }
  },[name, text])

  var Toast: any = Swal

  const clearBoth = () => {
    setName("");
    localStorage.setItem('name', "");
    setText("");
    localStorage.setItem('text', "");
  }

  const sentNotif = () => {
    Swal.fire({
      showConfirmButton: false,
      timer: 3500,
      timerProgressBar: true,
      icon: 'success',
      title: english ? 'Message sent!' : 'Mensaje enviado!',
      text: english ? 'The message was received.' : 'El mensaje fue recibido.',
    })
  }

  const noSentNotif = () => {
    Swal.fire({
      showConfirmButton: false,
      timer: 3500,
      timerProgressBar: true,
      icon: 'error',
      title: english ? 'Message not sent!' : 'Mensaje no enviado!',
      text: english ? 'There was an error.. Please try Again.' : 'Hubo un error.. por favor intentá de nuevo.'
    })
  }

  const emptyMessage = () => {
    Swal.fire({
      showConfirmButton: false,
      timer: 3500,
      timerProgressBar: true,
      icon: 'error',
      title: english ? 'Fields cannot be empty!' : 'Los campos no pueden estar vacíos',
      text: english ? 'Please, fill all fields.' : 'Por favor, llena todos los campos.'
    })
  }

  const MustWait: any = () => {

    let timerInterval: any;
    let timerIntervalTwo: any;

    Toast.fire({
      showConfirmButton: false,
      icon: 'error',
      title: english ? 'You must wait to send another message!' : 'Debes esperar para enviar otro mensaje',
      timerProgressBar: true,
      html: english ? `Please, wait <strong></strong> <sec-handler>seconds</sec-handler>.<br/><br/>` : `Por favor, espera <strong></strong> segundos.<br/><br/>`,
      timer: 2500,
      didOpen: () => {
        timerInterval = setInterval(() => {
          Toast.getHtmlContainer().querySelector('strong')
            .textContent = (store.getState()?.timer === 60 ? 0 : store.getState()?.timer)
              .toFixed(0)
        }, 100)
        timerIntervalTwo = setInterval(() => {
          Toast.getHtmlContainer().querySelector('sec-handler')
            .textContent = (store.getState()?.timer === 1 ? "second" : "seconds")
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval);
        clearInterval(timerIntervalTwo)
      }
    })
  }

  const handleSubmit = (e: any) => {
    if (store.getState().timerEnabled) return MustWait()
    function fetchData() {
      //fetch(`http://localhost:3001/`, {
      fetch(`https://oval-transparent-ornament.glitch.me/`, {
      method: "POST",
      body: JSON.stringify({name: name, text: text}),
      headers: {
        "Content-Type": "application/json"
      }})
      .then(res => res.json())
      .then(res => { if(!res.success) throw new Error(); return res })
      .then(() => {sentNotif(); handleTimerStart(); setSentButtonDisabled(false); setClearButtonDisabled(false); setShowMessageSpinner(false); clearBoth()})
      .catch(error => {console.error("Error:", error); noSentNotif(); setSentButtonDisabled(false); setClearButtonDisabled(false); setShowMessageSpinner(false) })
    };
    e.preventDefault();

    if (name?.length !== 0 && name?.trim() !== "" && text?.length !== 0 && text?.trim() !== "") {setSentButtonDisabled(true); setClearButtonDisabled(true); setShowMessageSpinner(true); fetchData()}
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
            <div className={css.leftCounter}>{text.length} </div>
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
          id={"name123"}
          className={css.name}
          label={english ? "Your name here" : "Tu nombre aquí"}
          size="small"
          value={name}
          InputLabelProps={{ className: css.label }}
          InputProps={{ className: css.input }}
          onChange={e => {setName(e.target.value); localStorage.setItem('name', e.target.value)}}
        />
        <TextField
          label={ english ? "Your message here" : "Tu mensaje aquí"}
          multiline
          minRows={6}
          value={text}
          size="small"
          InputLabelProps={{ className: css.label }}
          InputProps={{ className: css.input }}
          onChange={e => {setText(e.target.value); localStorage.setItem('text', e.target.value)}}
          className={css.message}
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
      <div className={css.loadingText}>
        {
          english ?
          `SENDING MESSAGE..` :
          `ENVIANDO MENSAJE..`
        }
      </div>
    </div>
  )
}

export default MessageMe;