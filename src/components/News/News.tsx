import { Button } from '@mui/material';
import { useEffect, useRef, useState, MutableRefObject } from 'react';
import { useSelector } from 'react-redux';
import css from './NewsCSS.module.css';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import { arrayNewsI } from '../../interfaces/interfaces';

function News() {

  const english = useSelector((state: { english:boolean }) => state.english)

  const [ show, setShow ] = useState<boolean>(false)

  const preArray = [
    { id: 16, date: '24-07-21', text: english ? ` Project ready to publish to Google Play  ` : ` Proyecto listo para publicar en Google Play  ` },
    { id: 15, date: '24-06-26', text: english ? ` Using async-storage & r-n-bootsplash  ` : ` Uso de async-storage y r-n-bootsplash  ` },
    { id: 14, date: '24-05-31', text: english ? ` Using React Native CLI: it's more flexible than Expo  ` : ` Usando React Native CLI: es más flexible que Expo  ` },
    { id: 13, date: '24-04-15', text: english ? ` React Native Calculator project started  ` : ` Se inicia el proyecto React Native Calculator  ` },
    { id: 12, date: '24-03-13', text: english ? ` Removed all JQuery code from Portfolio App  ` : ` Se removió todo el codigo JQuery de Portfolio App  ` },
    { id: 11, date: '23-12-07', text: english ? ` Start using powerful Web Audio API  ` : ` Se empezó a utilizar la poderosa Web Audio API  ` },
    { id: 10, date: '23-11-24', text: english ? ` Start developing new project: TicTacToe  ` : ` Se empezó a desarrollar un nuevo proyecto: TicTacToe  ` },
    { id: 9, date: '23-10-31', text: english ? ` Start using .yml files for GitHub actions/workflow  ` : ` Se empezó a utilizar archivos .yml para las actions/workflow de GitHub  ` },
    { id: 8, date: '23-09-09', text: english ? ` Using httpOnly cookies for secure login & data flow  ` : ` Usando cookies httpOnly para login y flujo de datos seguro  ` },
    { id: 7, date: '23-08-30', text: english ? ` badWords searcher & highlighter algorithm done.  ` : ` Algorithmo buscador y resaltador de malas palabras listo.  ` },
    { id: 6, date: '23-07-01', text: english ? ` Start using LocalStorage for data persistance  ` : ` Se empezó a utilizar LocalStorage para la persistencia de datos  ` },
    { id: 5, date: '23-06-03', text: english ? ` Developing Skills Component (the most difficult)  ` : ` Desarrollando el Componente Habilidades (El más dificultoso)  ` },
    { id: 4, date: '23-05-08', text: english ? ` Using own solution for use styles with variables (deprecated: performance leaks)  ` : ` Utilizando una solución propia para el uso de estilos con variables (obsoleto: mal performance)  ` },
    { id: 3, date: '23-04-27', text: english ? ` Start using TS & screen size handlers  ` : ` Se empieza a usar TS & manejadores de tamaño de pantalla  ` },
    { id: 2, date: '23-03-30', text: english ? ` Break for moving ;)  ` : ` Pausa por mudanza ;)  ` },
    { id: 1, date: '23-02-21', text: english ? ` Break for vacations !  ` : ` Descanso de vacaciones !  ` },
    { id: 0, date: '23-01-20', text: english ? ` Start developing my own first portfolio !  ` : ` Empezando a desarrollar mi primer portfolio propio !  ` },
  ]

  let [ startIndex, setStartIndex ]  = useState(0)
  let [ endIndex, setEndIndex ] = useState(7)

  const leftHandler = () => {
    if (endIndex < preArray.length) {
      setStartIndex(startIndex + 7)
      setEndIndex(endIndex + 7)
    }
  }

  const rightHandler = () => {
    if (startIndex !== 0) {
      setStartIndex(startIndex - 7)
      setEndIndex(endIndex - 7)
    }
  }

  let array: arrayNewsI[] = preArray.slice(startIndex, endIndex)

  const intervalRef = useRef<ReturnType<typeof setInterval>[]>([]);
  const textRef: MutableRefObject<any> = useRef<HTMLDivElement[] | null>([]);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const handleEnter = (id: number) => {
    timeoutRef.current[id] = setTimeout(() => {
      intervalRef.current[id] = setInterval(() => {
        textRef.current[id].scrollLeft += 1;
      }, 15)
    }, 700)
  }

  const handleLeave = (id: number) => {
    textRef.current[id].scrollLeft = 0;
    clearInterval(intervalRef.current[id])
    clearTimeout(timeoutRef.current[id])
  }

  const inputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    (document.getElementById(`buttonShowNews`) as HTMLElement).addEventListener("click", () => {
      if (inputRef.current) inputRef.current.classList.toggle(css.moveSliderBoxNews);
    });
  }, [])

  useEffect(() => {
    var timer: any;
    const removeTransition: () => void = () => {
      let el = (document.querySelector("[class='sliderBoxNews']") as HTMLElement)
      if (el !== null ) el.style.transition = "none"
      const addTransition = () => {
        if (el !== null ) el.style.transition = "all 1.5s"
      }
      clearTimeout(timer);
      timer = setTimeout(addTransition, 100);
    }
    window.addEventListener('resize', removeTransition);
  },[])

  return (
    <div className={css.background}>
      <div
        ref={inputRef}
        className={css.sliderBoxNews}
        id={`dateAndText`}
      >
        {
          array.map((e, index) => {
            return (
              <div
                id={`eachDescription`}
                key={e.id}
                className={css.eachDescription}
              >
                <div
                  id={`date${e.id}`}
                  className={css.date}
                >
                  {e.date}
                </div>
                <div
                  ref={(el) => textRef.current[e.id] = el }
                  id={`text${e.id}`}
                  className={css.text}
                  onMouseEnter={() => handleEnter(e.id)}
                  onMouseLeave={() => handleLeave(e.id)}
                >
                  {e.text}
                </div>
              </div>
            )
          })
        }
        <div className={css.buttonsContainer} >
          <button
            className={css.newsNextPrev}
            onClick={() => leftHandler()}
            disabled={endIndex >= preArray.length}
          >{`<`}</button>
          <button
            className={css.newsNextPrev}
            onClick={() => rightHandler()}
            disabled={startIndex === 0}
          >{`>`}</button>
        </div>
      </div>
      <Button
        id={`buttonShowNews`}
        variant="contained"
        className={css.buttonSettings}
        onClick={() => setShow(!show) }
      >
        <ManageHistoryIcon />
      </Button>
    </div>
  )
}

export default News;