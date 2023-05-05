import { useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import MessageMeSX from '../../styles/MessageMeSX';
import BackButton from '../BackButton/BackButton';
import TextField from '@mui/material/TextField';
import Swal from 'sweetalert2'
import "../../styles/MessageMeSX.css";
import { setTimer, stopTimer, setNumberTimer } from '../../actions';

function MessageMe() {

  const dispatch = useDispatch()

  const english = useSelector((state: {english:boolean}) => state.english)
  const timer = useSelector((state: {timer:number}) => state.timer)
  const numberTimer = useSelector((state: {numberTimer:number}) => state.numberTimer)
  const staticRefWidth = useSelector((state: {staticRefWidth:number}) => state.staticRefWidth)  // OJO staticRefWidth
  const [name, setName] = useState<string>("")
  const [text, setText] = useState<string>("")
  const [sent, setSent] = useState<boolean>(false)
  const [ttimer, setTtimer] = useState<number>(0)
  const [sentButtonDisabled, setSentButtonDisabled] = useState<boolean>(false)

  //dispatch(setDarkMode(!darkMode))




  const clearBoth = () => {
    setName("");
    setText("");
    setSent(false)
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

  const handleSubmit = (e: any) => {
    function fetchData() {
        fetch("http://localhost:3001/", {
        method: "POST",
        body: JSON.stringify({name: name, text: text}),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response => response.json())
      .then(response => console.log("Success:", JSON.stringify(response)))
      .then(() => {setSent(true); sentNotif(); setSentButtonDisabled(false)})
      .catch(error => {console.error("Error:", error); noSentNotif(); setSentButtonDisabled(false)})
    }
    e.preventDefault();
    if (name.length !== 0 && text.length !== 0) {setSentButtonDisabled(true); fetchData()}
    else {emptyMessage()}
  };

  //var intervalID: number | any

  // var handleStart = () => {


  // let reference = 0

  // function timerHandler() {
  //   setTimeout(Callback, 1000)

  // }

  // var timerr: any

  // const handleStart = () => {
  //   timerr = setTimeout(Callback, 1000, timerr)
  // };


  // simple, working
  // const handleStart = () => {
  //   dispatch(setTimer(1))
  //   setTimeout(() => {
  //     dispatch(stopTimer(0))
  //   }, 1000)
  // };


// funciona, tb simple
//   const doing = () => {
//     dispatch(setTimer(1))
//     setInterval(() => {
//       /* dispatch(stopTimer(0)) */
//     }, 1000)
//   };

//   const handleStop = () => {
//     dispatch(stopTimer(0));
// };


//let identificadorDeTemporizador: ReturnType<typeof setInterval> /* = setTimeout(() => { ... }); */
let identificadorDeTemporizador: any

function temporizadorDeRetraso() {
  identificadorDeTemporizador = setInterval(funcionConRetraso, 1000);
  dispatch(setNumberTimer(identificadorDeTemporizador))
  console.log("numero X",identificadorDeTemporizador)
}

function funcionConRetraso() {
  console.log("test 123");
  console.log("numero EL SIGUIENTE",identificadorDeTemporizador)
  dispatch(setTimer(1))
}

function borrarAlerta() {
  //clearTimeout(identificadorDeTemporizador);
  clearTimeout(numberTimer);
}






  console.log("TIMER VALUE", timer)
  console.log('NUMBER TIMER ABAJO', numberTimer)
  //console.log("OUTER INTERCAL ID", intervalID)



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
          /* onClick={() => handleStart()} */
          /* onClick={() => doing()} */
          /* onClick={() => doWhile()} */
          /* onClick={() => BucleFor()} */
          onClick={() => temporizadorDeRetraso()}
          /* onClick={() => timerHandler()} */
          sx={MessageMeSX().sendMessageButton}
        >
          {english ? 'START' : 'START' }
        </Button>
        <Button
          disabled={sentButtonDisabled}
          variant="contained"
          /* onClick={() => handleStop()} */
          onClick={() => borrarAlerta()}
          sx={MessageMeSX().sendMessageButton}
        >
          {english ? 'STOP' : 'STOP' }
        </Button>
      </Box>
    </Box>
  )
}

export default MessageMe;
