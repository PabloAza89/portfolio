import { useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import MessageMeSX from '../../styles/MessageMeSX';
import BackButton from '../BackButton/BackButton';
import TextField from '@mui/material/TextField';
import Swal from 'sweetalert2'
import "../../styles/MessageMeSX.css";
import { setTimer, stopTimer, setNumberTimer, setTimerEnabled } from '../../actions';
import store from '../../store/store';

function MessageMe() {

  const dispatch = useDispatch()

  const english = useSelector((state: {english:boolean}) => state.english)
  const timer = useSelector((state: {timer:number}) => state.timer)
  const numberTimer = useSelector((state: {numberTimer:number}) => state.numberTimer)
  const timerEnabled = useSelector((state: {timerEnabled:boolean}) => state.timerEnabled)
  const staticRefWidth = useSelector((state: {staticRefWidth:number}) => state.staticRefWidth)  // OJO staticRefWidth
  const [name, setName] = useState<string>("")
  const [text, setText] = useState<string>("")
  

  const [sentButtonDisabled, setSentButtonDisabled] = useState<boolean>(false)


  //dispatch(setDarkMode(!darkMode))




  const clearBoth = () => {
    setName("");
    setText("");
  }

  const sentNotif = () => {

    const Toast = Swal.mixin({
      showConfirmButton: false,
      timer: 3500,
      timerProgressBar: true
    })

    Toast.fire({
      icon: 'success',
      title: 'Message sent!',
      text: 'The message was received.',
    })

  }

  const noSentNotif = () => {
    const Toast = Swal.mixin({
      showConfirmButton: false,
      timer: 3500,
      timerProgressBar: true
    })

    Toast.fire({
      icon: 'error',
      title: english ? 'Message not sent!' : 'Mensaje enviado!',
      text: english ? 'There was an error.. Please try Again.' : 'Hubo un error.. por favor intentá de nuevo.'
    })
  }

  const emptyMessage = () => {

    const Toast = Swal.mixin({
      showConfirmButton: false,
      timer: 3500,
      timerProgressBar: true
    })

    Toast.fire({
      icon: 'error',
      title: english ? 'Fields cannot be empty!' : 'Los campos no pueden estar vacíos',
      text: english ? 'Please, fill all fields.' : 'Por favor, llena todos los campos.'
    })
  }

  //let timerNotifID: any

  // const actualTimerForNotif = () => {
  //   setLocalTimerForNotif(timer)
  // }

  // const actualTimerForNotifCB = () => {
  //   //return store.getState().timer
  //   return store.getState().timer
  // }

  // useEffect(() => {
  //   setLocalTimerForNotif(timer)
  // }, [timer])

  // let [localTimerForNotif, setLocalTimerForNotif] = useState<number>(timer)
  

  // const MustWait = () => {


  //   let timerInterval

  //   Swal.fire({
  //     showConfirmButton: false,
  //     timer: 20500,
  //     timerProgressBar: true,
  //     icon: 'error',
  //     title: english ? 'You must wait to send another message!' : 'Debes esperar para enviar otro mensaje',
  //     text: english ? `Please, wait ${3} seconds.` : `Por favor, espera ${3} segundos.`
  //   })

  // }

  const MustWait: any = () => {


    let timerInterval: any
    
    Swal.fire({
      showConfirmButton: false,
      icon: 'error',
      title: english ? 'You must wait to send another message!' : 'Debes esperar para enviar otro mensaje',
      timerProgressBar: true,
      html: english ? `Please, wait <strong></strong> seconds.<br/><br/>` : `Por favor, espera <strong></strong> segundos.<br/><br/>`,
      //text: 'I will close in <strong></strong> seconds.<br/><br/>',
      //timer: store.getState().timer * 1000,
      timer: 2500,
      didOpen: () => {
        const content: any = Swal.getHtmlContainer()
        const $: any = content.querySelector.bind(content) 
        
        timerInterval = setInterval(() => {
          Swal.getHtmlContainer().querySelector('strong')
            .textContent = (store.getState().timer === 15 ? 0 : store.getState().timer)
              .toFixed(0)
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    })

  }

  const handleSubmit = (e: any) => {
    if (store.getState().timerEnabled) return MustWait()
    function fetchData() {
        fetch("http://localhost:3001/", {
        method: "POST",
        body: JSON.stringify({name: name, text: text}),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response => response.json())
      .then(response => console.log("Success:", JSON.stringify(response)))
      .then(() => {sentNotif(); handleTimerStart(); setSentButtonDisabled(false)})
      .catch(error => {console.error("Error:", error); noSentNotif(); setSentButtonDisabled(false)})
    }
    e.preventDefault();
    if (name.length !== 0 && text.length !== 0) {setSentButtonDisabled(true); fetchData()}
    else {emptyMessage()}
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
      dispatch(stopTimer(15))
    }
  }

  const handleTimerStop = () => {
      setTimerEnabled(false)
      clearInterval(store.getState().numberTimer);
      dispatch(stopTimer(5))
  }

  console.log("TIMER VALUE", timer)
  console.log('NUMBER TIMER ABAJO', numberTimer)
  console.log('TEST TIMER ABAJO', store.getState().timer)
  //console.log('ABAJO localTimerForNotif', localTimerForNotif)
  

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
          onChange={e => setName(e.target.value)}
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
          onChange={e => setText(e.target.value)}
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
        <Button
          disabled={sentButtonDisabled}
          variant="contained"
          onClick={() => handleTimerStart()}
          sx={MessageMeSX().sendMessageButton}
        >
          {english ? 'START' : 'START' }
        </Button>
        <Button
          disabled={sentButtonDisabled}
          variant="contained"
          onClick={() => handleTimerStop()}
          sx={MessageMeSX().sendMessageButton}
        >
          {english ? 'STOP' : 'STOP' }
        </Button>
      </Box>
    </Box>
  )
}

export default MessageMe;