import { useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from "react-router-dom";
import {
  nameBox, formContainer, background,
  clearButton, sendMessageButton, messageBox
} from '../../styles/MessageMeSX';
import BackButton from '../BackButton/BackButton';
import TextField from '@mui/material/TextField';
import Swal from 'sweetalert2'
import { setTimer, stopTimer, setNumberTimer, setTimerEnabled } from '../../actions';
import store from '../../store/store';

function MessageMe() {

  const dispatch = useDispatch()
  const location = useLocation()
  const english = useSelector((state: {english:boolean}) => state.english)
  const currentWidth = useSelector((state: {currentWidth:number}) => state.currentWidth)
  const darkMode = useSelector( (state: {darkMode:boolean}) => state.darkMode)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)
  const staticRefWidth = useSelector((state: {staticRefWidth:number}) => state.staticRefWidth)
  const staticRefHeight = useSelector((state: {staticRefHeight:number}) => state.staticRefHeight)
  const maxStaticReference = useSelector((state: {maxStaticReference:number}) => state.maxStaticReference)
  const currentHeight = useSelector((state: {currentHeight:number}) => state.currentHeight)
  const percentageResizedHeight = useSelector((state: {percentageResizedHeight:number}) => state.percentageResizedHeight)
  const percentageResizedWidth = useSelector((state: {percentageResizedWidth:number}) => state.percentageResizedWidth)

  const [name, setName] = useState<string | null>("")
  const [text, setText] = useState<string | null>("")
  const [sentButtonDisabled, setSentButtonDisabled] = useState<boolean>(false)

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
      title: 'Message sent!',
      text: 'The message was received.',
    })
  }

  const noSentNotif = () => {
    Swal.fire({
      showConfirmButton: false,
      timer: 3500,
      timerProgressBar: true,
      icon: 'error',
      title: english ? 'Message not sent!' : 'Mensaje enviado!',
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
      .then(() => {sentNotif(); handleTimerStart(); setSentButtonDisabled(false); clearBoth()})
      .catch(error => {console.error("Error:", error); noSentNotif(); setSentButtonDisabled(false)})
    };
    e.preventDefault();

    if (name?.length !== 0 && name?.trim() !== "" && text?.length !== 0 && text?.trim() !== "") {setSentButtonDisabled(true); fetchData()}
    else emptyMessage()
  };

  let timerID: any

  const handleTimerStart = () => {
    timerID = setInterval(handleTimerStartCB, 1000);
    dispatch(setNumberTimer(timerID))
    dispatch(setTimerEnabled(true))
  }

  const handleTimerStartCB = (qq: number) => {
    if (store.getState().timerEnabled) dispatch(setTimer(1))
    if (store.getState().timer === 0) {
      dispatch(setTimerEnabled(false))
      clearInterval(store.getState().numberTimer);
      dispatch(stopTimer(60))
    }
  }

  return (
    <Box sx={background}>
      <Box sx={formContainer({ minPort, minLand, medPort, medLand, larPort, larLand, staticRefWidth })}>
        <Button
          variant="contained"
          onClick={() => clearBoth()}
          sx={clearButton({ minPort, minLand, medPort, medLand, larPort, larLand, location:location.pathname })}
        >
          { english ? 'CLEAR' : 'LIMPIAR' }
        </Button>
        <TextField
          id="outlined-multiline-flexible"
          label={english ? "Your name here" : "Tu nombre aquí"}
          multiline
          maxRows={4}
          size={minPort || minLand ? "small" : "small"}
          value={name}
        /*   inputProps={{
            style: {
              height: minPort ? '37vh' : minLand ? '8vh' : '32vh'
          }}} */
          InputLabelProps={{
            style: {
              background: 'white',
              paddingTop: '0.1vw',
              width: (minPort || minLand) && english ? `130px` : `130px`,
              textAlign: 'center',
              'borderRadius': `${staticRefWidth * 0.2}px`,
              left: (minPort || minLand) && english ? '-5px' : (minPort || minLand) && !english ? '-5px' : '-5px'
          }}}
          sx={nameBox({ minPort, minLand, staticRefWidth })}
          onChange={e => {setName(e.target.value); localStorage.setItem('name', e.target.value)}}
        />
        <TextField
          id="outlined-multiline-static"
          label={ english ? "Your message here" : "Tu mensaje aquí"}
          multiline
          rows={10}
          value={text}
          size={minPort || minLand ? "small" : "small"}
          inputProps={{
            style: {
              height: minPort ? '37vh' : minLand ? '30vh' : medPort ? '32vh' : medLand ? '43vh' : '32vh'
          }}}
          InputLabelProps={{
            style: {
              background: 'white',
              paddingTop: '0.1vw',
              width: (minPort || minLand) && english ? `155px` : (minPort || minLand) && !english ? `130px` : larLand && english ? '155px' : larLand && !english ? '140px' : '155px',
              textAlign: 'center',
              'borderRadius': `${staticRefWidth * 0.2}px`,
              left: (minPort || minLand) && english ? '-6px' : (minPort || minLand) && !english ? '-5px' : larLand && english ? '-6px' : larLand && !english ? '-6px' : '-3px'
          }}}
          onChange={e => {setText(e.target.value); localStorage.setItem('text', e.target.value)}}
          sx={messageBox({ minPort, minLand, staticRefWidth })}
        />
        <Button
          disabled={sentButtonDisabled}
          variant="contained"
          onClick={(e) => handleSubmit(e)}
          sx={sendMessageButton({ minPort, minLand, medPort, medLand, larPort, larLand })}
        >
          { english ? 'SEND MESSAGE' : 'ENVIAR MENSAJE' }
        </Button>
      </Box>
    </Box>
  )
}

export default MessageMe;