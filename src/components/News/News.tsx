import { Box, Typography, Button } from '@mui/material';
import { useState, useEffect, useRef, useMemo } from 'react';
import { useSelector } from 'react-redux';
import * as s from '../../styles/NewsSX';
import $ from 'jquery';
import '../../styles/NewsSX.css';
import { easings } from '../../styles/CommonsSX';

function News() {

  let isRunning = useRef(false)

  easings() // Jquery easings..

  const width = useSelector((state: {width: number}) => state.width)
  const darkMode = useSelector( (state: {darkMode:boolean}) => state.darkMode)
  const english = useSelector((state: {english:boolean}) => state.english)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)

  const [ show, setShow ] = useState<boolean>(false)
  const [ animRunning, setAnimRunning ] = useState<boolean>(false)

  interface arrayI {
    id: number,
    date: string,
    text: string,
  }

  const array: arrayI[] = useMemo(() =>  [
    {id: 6, date: '23-07-01', text: english ? ' Start using LocalStorage for data persistance  ' : ' Se empezó a utilizar LocalStorage para la persistencia de datos  '},
    {id: 5, date: '23-06-03', text: english ? ' Developing Skills Component (the most difficult)  ' : ' Desarrollando el Componente Habilidades (El más dificultoso)  '},
    {id: 4, date: '23-05-08', text: english ? ' Using own solution for use styles with variables  ' : ' Utilizando una solución propia para el uso de estilos con variables  '},
    {id: 3, date: '23-04-27', text: english ? ' Start using TS & screen size handlers  ' : ' Se empieza a usar TS & manejadores de tamaño de pantalla  '},
    {id: 2, date: '23-03-30', text: english ? ' Break for moving  ' : ' Pausa para mudanza  '},
    {id: 1, date: '23-02-21', text: english ? ' Break for vacations  ' : ' Descanso de vacaciones  '},
    {id: 0, date: '23-01-20', text: english ? ' Start developing my own first portfolio !  ' : ' Empezando a desarrollar mi primer portfolio propio !  '},
  ], [english]);

  useEffect(() => { // hover color handler
    if (darkMode) $(function() { s.colorAndHoverIsDark({ array })})
    else $(function() { s.colorAndHoverNotDark({ array })})
  },[darkMode, array])

  useEffect(() => { // size & animation handler
    $(function() {
      if (show && ( minPort || medPort || larPort )) s.shownHiddenPort({ animRunning, isRunning, minPort, minLand, setAnimRunning })
      else if (!show && ( minPort || medPort || larPort )) s.hiddenShowPort({ animRunning, isRunning, minPort, minLand, setAnimRunning })
      else if (show && ( minLand || medLand || larLand )) s.showHiddenLand({ animRunning, isRunning, minPort, minLand, setAnimRunning })
      else if (!show && ( minLand || medLand || larLand )) s.hiddenShownLand({ animRunning, isRunning, minPort, minLand, setAnimRunning })
    })
  },[show, minPort, minLand, medPort, medLand, larPort, larLand, width, animRunning])

  const animRunningHandler: any = () => { setAnimRunning(true); isRunning.current = true }

  return (
    <Box sx={s.background({ minPort, minLand, medPort, medLand, larPort, larLand })}>
      <Box
        sx={s.sliderBox({ larPort })}
        className={`dateAndText`}
        id={`dateAndText`}
      >
        {array.map(e => {
          return (
            <Box
              className={`eachDescription`}
              key={e.id}
              sx={s.eachDescription({ animRunning, show, minPort, larPort })}
            >
              <Typography
                className={`date${e.id}`}
                sx={s.date({ darkMode, minPort, minLand })}
              >
                {e.date}
              </Typography>
              <Typography
                className={`text${e.id}`}
                sx={s.text({ darkMode, minPort, minLand })}
              >
                {e.text}
              </Typography>
            </Box>
          )
        })}
      </Box>
      <Button
        className={`buttonShow`}
        id={`buttonShow`}
        onClick={() => { animRunningHandler(!show); setShow(!show) }}
        sx={s.buttonNews({ darkMode, minPort, minLand })}
      >
        <Typography sx={s.changeLogTypo({ english, minPort, minLand, larPort, larLand })}>
          {english ? `CHANGELOG` : `REG. DE CAMBIOS`}
        </Typography>
      </Button>
    </Box>
  )
}

export default News;