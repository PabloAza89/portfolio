import { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import * as s from '../../styles/MessageMeSX';
import TextField from '@mui/material/TextField';
import Swal from 'sweetalert2'
import { setTimer, stopTimer, setNumberTimer, setTimerEnabled } from '../../actions';
import store from '../../store/store';
import '../../styles/MessageMeSX.css';

function MessageMe() {

  const dispatch = useDispatch()

  const english = useSelector((state: {english:boolean}) => state.english)
  const darkMode = useSelector( (state: {darkMode:boolean}) => state.darkMode)
  const height = useSelector((state: {height:number}) => state.height)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)

  const [name, setName] = useState<string>("")
  const [text, setText] = useState<string>("")
  const [sentButtonDisabled, setSentButtonDisabled] = useState<boolean>(false)
  const [clearButtonDisabled, setClearButtonDisabled] = useState<boolean>(false)
  const [showMessageSpinner, setShowMessageSpinner] = useState<boolean>(false)

  useEffect(() => {
    let name: string | null = localStorage.getItem('name');
    let text: string | null = localStorage.getItem('text');
    if (name === null) setName("")
    if (name !== null) setName(name)
    if (text === null) setText("")
    if (text !== null) setText(text)
  },[])

  useEffect(() => { // name & text length handler
    if ( name.length > 70 || text.length > 1250 ) {
      setSentButtonDisabled(true)
      if (name.length > 70) s.doShake()
      else s.doNotShake()
    }
    else { setSentButtonDisabled(false); s.doNotShake() }
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
    <Box sx={s.background({ larPort, larLand })}>
      <Box sx={s.topBottomHelper({ minPort, minLand, medPort, medLand, larPort, larLand })}></Box>
      <Box sx={s.mainContainer({ larPort, larLand })}>
        <Box sx={s.leftRightHelper({ larPort, larLand })}></Box>
        <Box sx={s.formContainer({ minPort, minLand, medPort, medLand, darkMode })}>
          <Box sx={s.lengthContainer({ minPort, minLand, medPort, medLand, larPort, larLand })}>
            <Typography sx={s.leftCounter({ length: text.length, minPort, minLand, medPort, medLand })}>{text.length} </Typography>
            <Typography sx={s.rightCounter({ minPort, minLand, medPort, medLand })}>/ 1250</Typography>
          </Box>
          <Button
            disabled={clearButtonDisabled}
            variant="contained"
            size="small"
            onClick={() => clearBoth()}
            sx={s.clearButton({ minPort, minLand, medPort, medLand, larPort, larLand })}
          >
            { english ? 'CLEAR' : 'LIMPIAR' }
          </Button>
          <TextField
            className={`nameInput`}
            label={english ? "Your name here" : "Tu nombre aquí"}
            size="small"
            value={name}
            InputLabelProps={{ style: s.labelStyle({ darkMode }) }}
            InputProps={{ style: s.inputStyleName({ darkMode, length: name.length }) }}
            sx={s.nameBox({ minPort, minLand, medPort, medLand, darkMode })}
            onChange={e => {setName(e.target.value); localStorage.setItem('name', e.target.value)}}
          />
          <TextField
            label={ english ? "Your message here" : "Tu mensaje aquí"}
            multiline
            rows={ minPort ? height / 55 : minLand ? height / 74 : medPort ? height / 75 : medLand ? height / 60 : 15 }
            value={text}
            size="small"
            InputLabelProps={{ style: s.labelStyle({ darkMode }) }}
            InputProps={{ style: s.inputStyleText({ darkMode }) }}
            onChange={e => {setText(e.target.value); localStorage.setItem('text', e.target.value)}}
            sx={s.messageBox({ minPort, minLand, medPort, medLand, darkMode })}
          />
          <Button
            disabled={sentButtonDisabled}
            variant="contained"
            size="small"
            onClick={(e) => handleSubmit(e)}
            sx={s.sendMessageButton({ minPort, minLand, medPort, medLand })}
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
        <Box sx={s.leftRightHelper({ larPort, larLand })}></Box>
      </Box>
      <Box sx={s.topBottomHelper({ minPort, minLand, medPort, medLand, larPort, larLand })}></Box>
    </Box>
  )
}

export default MessageMe;