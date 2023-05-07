import { useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import MessageMeSX from '../../styles/MessageMeSX';
import BackButton from '../BackButton/BackButton';
import TextField from '@mui/material/TextField';
import Swal from 'sweetalert2'
//import "../../styles/MessageMeSX.css";
import { setTimer, stopTimer, setNumberTimer, setTimerEnabled } from '../../actions';
import store from '../../store/store';

function MessageMe() {

  const dispatch = useDispatch()

  const [name, setName] = useState<string | null>("")
  const [text, setText] = useState<string | null>("")
  const [sentButtonDisabled, setSentButtonDisabled] = useState<boolean>(false)

  useEffect(() => {
    let name: string | null = localStorage.getItem('name');
    let text: string | null = localStorage.getItem('text');
    if (name !== "") setName(name)
    if (text !== "") setText(text)
  },[])

  const english = useSelector((state: {english:boolean}) => state.english)
  const staticRefWidth = useSelector((state: {staticRefWidth:number}) => state.staticRefWidth)
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
      fetch("http://localhost:3001/", {
      //fetch(`https://oval-transparent-ornament.glitch.me/`, {
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
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '93vh', width: '97vw', background: 'none'}}>
      <BackButton />
      <Box sx={MessageMeSX().formContainer}>
        <Button
          variant="contained"
          onClick={() => clearBoth()}
          sx={MessageMeSX().clearButton}
        >
          { english ? 'CLEAR' : 'LIMPIAR' }
        </Button>
        <TextField
          id="outlined-multiline-flexible"
          label={english ? "Your name here" : "Tu nombre aquí"}
          multiline
          maxRows={4}
          value={name}
          InputLabelProps={{
            style: { background: 'white', paddingTop: '0.1vw', width: english ? `${staticRefWidth * 7}px` : `${staticRefWidth * 7}px`, textAlign: 'center', 'borderRadius': `${staticRefWidth * 0.2}px`, left: '-0.2vw' }
          }}
          sx={MessageMeSX().nameBox}
          onChange={e => {setName(e.target.value); localStorage.setItem('name', e.target.value)}}
        />
        <TextField
          id="outlined-multiline-static"
          label={english ? "Your message here" : "Tu mensaje aquí"}
          multiline
          rows={10}
          value={text}
          InputLabelProps={{
            style: { background: 'white', paddingTop: '0.1vw', width: english ? `${staticRefWidth * 8}px` : `${staticRefWidth * 7}px`, textAlign: 'center', 'borderRadius': `${staticRefWidth * 0.2}px`, left: '-0.2vw'}
          }}
          onChange={e => {setText(e.target.value); localStorage.setItem('text', e.target.value)}}
          sx={MessageMeSX().messageBox}
        />
        <Button
          disabled={sentButtonDisabled}
          variant="contained"
          onClick={(e) => handleSubmit(e)}
          sx={MessageMeSX().sendMessageButton}
        >
          {english ? 'SEND MESSAGE' : 'ENVIAR MENSAJE' }
        </Button>
      </Box>
    </Box>
  )
}

export default MessageMe;