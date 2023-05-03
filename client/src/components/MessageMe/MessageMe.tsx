import { useState } from 'react';
import { Box, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import MessageMeSX from '../../styles/MessageMeSX';
import BackButton from '../BackButton/BackButton';
import TextField from '@mui/material/TextField';
import Swal from 'sweetalert2'
import "../../styles/MessageMeSX.css";

function MessageMe() {

  const english = useSelector((state: {english:boolean}) => state.english)
  const staticRefWidth = useSelector((state: {staticRefWidth:number}) => state.staticRefWidth)  // OJO staticRefWidth
  const [name, setName] = useState<string>("")
  const [text, setText] = useState<string>("")
  const [sent, setSent] = useState<boolean>(false)
  const [sentButtonDisabled, setSentButtonDisabled] = useState<boolean>(false)

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
      fetch("http://localhost:3001/message", {
        method: "POST",
        body: JSON.stringify({name: name, text: text}),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response => response.json())
      .then(response => console.log("Success:", JSON.stringify(response)))
      .then(() => {setSent(true); sentNotif(); setSentButtonDisabled(false)})
      .catch(error => {console.error("Error:", error); noSentNotif()})
    }
    e.preventDefault();
    if (name.length !== 0 && text.length !== 0) {setSentButtonDisabled(true); fetchData()}
    else {emptyMessage()}
  };

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
      </Box>
    </Box>
  )
}

export default MessageMe;
