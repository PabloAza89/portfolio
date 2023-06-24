import { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";
import * as s from '../../styles/MessageMeSX';
import TextField from '@mui/material/TextField';
import Swal from 'sweetalert2'
import { setTimer, stopTimer, setNumberTimer, setTimerEnabled } from '../../actions';
import store from '../../store/store';

function MessageMe() {

  const dispatch = useDispatch()
  const location = useLocation()
  const english = useSelector((state: {english:boolean}) => state.english)
  const darkMode = useSelector( (state: {darkMode:boolean}) => state.darkMode)
  const height = useSelector((state: {height:number}) => state.height)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)

  const [name, setName] = useState<string | null>("")
  const [text, setText] = useState<string | null>("")
  const [sentButtonDisabled, setSentButtonDisabled] = useState<boolean>(false)
  const [clearButtonDisabled, setClearButtonDisabled] = useState<boolean>(false)
  const [showMessageSpinner, setShowMessageSpinner] = useState<boolean>(false)

  useEffect(() => {
    let name: string | null = localStorage.getItem('name');
    let text: string | null = localStorage.getItem('text');
    if (name !== "") setName(name)
    if (text !== "") setText(text)
  },[])

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
      //fetch("http://localhost:3001/", {
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
    <Box sx={s.background({ larPort, larLand })}>
      <Box sx={s.topBottomHelper({ minPort, minLand, medPort, medLand, larPort, larLand })}></Box>
      <Box sx={s.mainContainer({ minPort, minLand, medPort, medLand, larPort, larLand })}>
        <Box sx={s.leftRightHelper({ minPort, minLand, medPort, medLand, larPort, larLand })}></Box>
        <Box sx={s.formContainer({ minPort, minLand, medPort, medLand, larPort, larLand, darkMode })}>
          <Button
            disabled={clearButtonDisabled}
            variant="contained"
            size="small"
            onClick={() => clearBoth()}
            sx={s.clearButton({ minPort, minLand, medPort, medLand, larPort, larLand, location:location.pathname })}
          >
            { english ? 'CLEAR' : 'LIMPIAR' }
          </Button>
          <TextField
            label={english ? "Your name here" : "Tu nombre aquí"}
            multiline
            rows={1}
            size="small"
            value={name}
            InputLabelProps={{ style: s.labelStyle({ darkMode }) }}
            InputProps={{ style: s.inputStyle({ darkMode }) }}
            sx={s.nameBox({ minPort, minLand, medPort, medLand, larPort, larLand, darkMode })}
            onChange={e => {setName(e.target.value); localStorage.setItem('name', e.target.value)}}
          />
          <TextField
            label={ english ? "Your message here" : "Tu mensaje aquí"}
            multiline
            rows={ minPort ? height / 55 : minLand ? height / 74 : medPort ? height / 75 : medLand ? height / 60 : 15 }
            value={text}
            size="small"
            InputLabelProps={{ style: s.labelStyle({ darkMode }) }}
            InputProps={{ style: s.inputStyle({ darkMode }) }}
            onChange={e => {setText(e.target.value); localStorage.setItem('text', e.target.value)}}
            sx={s.messageBox({ minPort, minLand, medPort, medLand, larPort, larLand, darkMode })}
          />
          <Button
            disabled={sentButtonDisabled}
            variant="contained"
            size="small"
            onClick={(e) => handleSubmit(e)}
            sx={s.sendMessageButton({ minPort, minLand, medPort, medLand, larPort, larLand })}
          >
            { english ? 'SEND MESSAGE' : 'ENVIAR MENSAJE' }
          </Button>
        </Box>
        <Box sx={s.messageLoadingSpinner({ show:showMessageSpinner })} >
          <Typography sx={s.loadingText}>{ english ? `SENDING MESSAGE..` : `ENVIANDO MENSAJE..` }</Typography>
          <Box component="div"></Box>
          <Box component="div"></Box>
          <Box component="div"></Box>
          <Box component="div"></Box>
        </Box>
        <Box sx={s.leftRightHelper({ minPort, minLand, medPort, medLand, larPort, larLand })}></Box>
      </Box>
      <Box sx={s.topBottomHelper({ minPort, minLand, medPort, medLand, larPort, larLand })}></Box>
    </Box>
  )
}

export default MessageMe;