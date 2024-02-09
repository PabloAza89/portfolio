import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import css from './MessageMeCSS.module.css';
import TextField from '@mui/material/TextField';
import Swal from 'sweetalert2'
import { setTimer, stopTimer, setNumberTimer, setTimerEnabled } from '../../actions';
import store from '../../store/store';

function MessageMe() {

  let [ currentDate, setCurrentDate ] = useState(0)
  let [ lastMessage, setLastMessage ] = useState(0)

  // useEffect(() => {
  //   let firstDate = Date.now()
  //   //let secondDate
  //   setTimeout(() => {
  //     let secondDate = Date.now()
  //     console.log("DATE 2", secondDate)
  //     //console.log("RESULT", (secondDate - firstDate) / 1000)
  //     //console.log("RESULT", (firstDate - secondDate) / 1000)
  //   },5000)
    
  //   console.log("DATE 1", firstDate)
    
  // }, [])
  

  const dispatch = useDispatch()
  const english = useSelector((state: {english:boolean}) => state.english)

  const [name, setName] = useState<string>("")
  const [message, setMessage] = useState<string>("")
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
    let message: string | null = localStorage.getItem('message');
    if (name === null) setName("")
    if (name !== null) setName(name)
    if (message === null) setMessage("")
    if (message !== null) setMessage(message)
  },[])

  useEffect(() => {
    if (name.length > 50 || message.length > 800) setSentButtonDisabled(true);
    else setSentButtonDisabled(false);
    let div = document.querySelector("[class*='MessageMeCSS_name']") as HTMLElement
    let inputText = document.getElementById("name123")
    let leftCounter = document.querySelector("[class*='leftCounter']") as HTMLElement
    if (name.length > 50 && div && inputText) {
      div.style.animation = `${css.shakeLRMessage} 2.5s linear infinite`;
      inputText.style.color = "red"
    }
    else if (name.length <= 50 && div && inputText) {
      div.style.animation = 'none';
      inputText.style.color = "inherit"
    }
    if (message.length > 800 && leftCounter) {
      leftCounter.style.color = 'red'
    }
    else if (message.length <= 800 && leftCounter) {
      leftCounter.style.color = 'white'
    }
  },[name, message])

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
      customClass: {
        popup: `${css.popup}`
      }
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
      customClass: {
        popup: `${css.popup}`
      }
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
      customClass: {
        popup: `${css.popup}`
      }
    })
  }

  const MustWait: any = () => {

    let current = () => {
      if (lastMessageLS !== null) {
        if (5 - ((Date.now() - parseInt(lastMessageLS, 10)) / 1000) < 1 && (5 - (Date.now() - parseInt(lastMessageLS, 10)) / 1000) > 0) {
          return { text: "second", time: 1 }
        }
        else if (5 - ((Date.now() - parseInt(lastMessageLS, 10)) / 1000) < 0) {
          return { text: "second", time: 0 }
        }
        else {
          return { text: "seconds", time: (5 - ((Date.now() - parseInt(lastMessageLS, 10)) / 1000)).toFixed(0) }
        }
      }
    }

    let lastMessageLS: string | null = localStorage.getItem('lastMessage');
    if (lastMessageLS !== null) {
      Toast.fire({
        showConfirmButton: false,
        icon: 'error',
        title: english ? 'You must wait to send another message!' : 'Debes esperar para enviar otro mensaje',
        timerProgressBar: true,
        html:
          english ?
          `Please, wait <strong>${current()?.time}</strong> <sec-handler>seconds</sec-handler>.<br/><br/>` :
          `Por favor, espera <strong>${current()?.time}</strong> segundos.<br/><br/>`,
        timer: 2500,
        customClass: {
          popup: `${css.popup}`
        },
        willClose: () => clearInterval(interval)
      });
    }

    let interval = setInterval(() => {
      if (lastMessageLS !== null) {
        Toast.getHtmlContainer().innerHTML =
          english ?
          `Please, wait <strong>${current()?.time}</strong> <sec-handler>seconds</sec-handler>.<br/><br/>` :
          `Por favor, espera <strong>${current()?.time}</strong> segundos.<br/><br/>`
      }
    }, 1000)

  }


  // const MustWait: any = () => {

  //   let timerInterval: any;
  //   let timerIntervalTwo: any;

  //   Toast.fire({
  //     showConfirmButton: false,
  //     icon: 'error',
  //     title: english ? 'You must wait to send another message!' : 'Debes esperar para enviar otro mensaje',
  //     timerProgressBar: true,
  //     html: english ? `Please, wait <strong></strong> <sec-handler>seconds</sec-handler>.<br/><br/>` : `Por favor, espera <strong></strong> segundos.<br/><br/>`,
  //     timer: 2500,
  //     customClass: {
  //       popup: `${css.popup}`
  //     },
  //     didOpen: () => {
  //       timerInterval = setInterval(() => {
  //         Toast.getHtmlContainer().querySelector('strong')
  //           .textContent = (store.getState()?.timer === 60 ? 0 : store.getState()?.timer)
  //             .toFixed(0)
  //       }, 100)
  //       timerIntervalTwo = setInterval(() => {
  //         Toast.getHtmlContainer().querySelector('sec-handler')
  //           .textContent = (store.getState()?.timer === 1 ? "second" : "seconds")
  //       }, 100)
  //     },
  //     willClose: () => {
  //       clearInterval(timerInterval);
  //       clearInterval(timerIntervalTwo)
  //     }
  //   })
  // }

  const handleSubmit = (e: any) => {

    //if (store.getState().timerEnabled) return MustWait()
    let lastMessageLS: string | null = localStorage.getItem('lastMessage');
    if (lastMessageLS !== null &&
      (Date.now() - parseInt(lastMessageLS, 10)) < 60000
    ) {
      console.log("RESP true/false", (Date.now() - parseInt(lastMessageLS, 10)) < 60000)
      console.log("RESP ms", Date.now() - parseInt(lastMessageLS, 10))
      return MustWait()
    }
    //if (Date.now())

    function fetchData() {
      //fetch(`http://localhost:3001/`, {
      fetch(`https://oval-transparent-ornament.glitch.me/`, {
      method: "POST",
      body: JSON.stringify({name: name, message: message}),
      headers: {
        "Content-Type": "application/json"
      }})
      .then(res => res.json())
      .then(res => { if(!res.success) throw new Error(); return res })
      .then(() => {
        sentNotif(); handleTimerStart();
        setSentButtonDisabled(false); setClearButtonDisabled(false);
        setShowMessageSpinner(false); clearBoth();
        //setLastMessage(Date.now())
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
          id={"name123"}
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