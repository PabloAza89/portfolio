import { Button } from '@mui/material';
import { useEffect, useRef, useState, createRef } from 'react';
import { useSelector } from 'react-redux';
import css from './NewsCSS.module.css';
//import './NewsCSS.css';
import $ from 'jquery';

function News() {

  const english = useSelector((state: {english:boolean}) => state.english)

  const [ show, setShow ] = useState<boolean>(false)

  const preArray = [
    {id: 11, date: '23-12-07', text: english ? ' Start using powerful Web Audio API  ' : ' Se empezó a utilizar la poderosa Web Audio API  '},
    {id: 10, date: '23-11-24', text: english ? ' Start developing new project: TicTacToe  ' : ' Se empezó a desarrollar un nuevo proyecto: TicTacToe  '},
    {id: 9, date: '23-10-31', text: english ? ' Start using .yml files for GitHub actions/workflow  ' : ' Se empezó a utilizar archivos .yml para las actions/workflow de GitHub  '},
    {id: 8, date: '23-09-09', text: english ? ' Using httpOnly cookies for secure login & data flow  ' : ' Usando cookies httpOnly para login y flujo de datos seguro  '},
    {id: 7, date: '23-08-30', text: english ? ' badWords searcher & highlighter algorithm done.  ' : ' Algorithmo buscador y resaltador de malas palabras listo.  '},
    {id: 6, date: '23-07-01', text: english ? ' Start using LocalStorage for data persistance  ' : ' Se empezó a utilizar LocalStorage para la persistencia de datos  '},
    {id: 5, date: '23-06-03', text: english ? ' Developing Skills Component (the most difficult)  ' : ' Desarrollando el Componente Habilidades (El más dificultoso)  '},
    {id: 4, date: '23-05-08', text: english ? ' Using own solution for use styles with variables  ' : ' Utilizando una solución propia para el uso de estilos con variables  '},
    {id: 3, date: '23-04-27', text: english ? ' Start using TS & screen size handlers  ' : ' Se empieza a usar TS & manejadores de tamaño de pantalla  '},
    {id: 2, date: '23-03-30', text: english ? ' Break for moving ;)  ' : ' Pausa por mudanza ;)  '},
    {id: 1, date: '23-02-21', text: english ? ' Break for vacations !  ' : ' Descanso de vacaciones !  '},
    {id: 0, date: '23-01-20', text: english ? ' Start developing my own first portfolio !  ' : ' Empezando a desarrollar mi primer portfolio propio !  '},
  ]

  interface arrayI {
    id: number,
    date: string,
    text: string,
  }

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

  let array: arrayI[] = preArray.slice(startIndex, endIndex)

  useEffect(() => {
    array.forEach(e => {
      $(`#text${e.id}`).on("mouseenter", function() {
        $(this)
          .stop(true, true)
          .delay(400)
          .animate({scrollLeft: 420}, 8000)
      })
      $(`#text${e.id}`).on("mouseleave", function() {
        $(this)
          .stop(true, true)
          .animate({scrollLeft: 0}, 0)
      })
    })
  }, [array])

  const inputRef = useRef<HTMLDivElement>(null);

  $(function() {
    $('#buttonShow').on('click',function() {
      if (inputRef.current) inputRef.current.classList.toggle(css.clicked);
    });
  });

  useEffect(() => {
    var timer: any;
    const removeTransition = () => {
      $(`[class*='sliderBoxNews']`).css("transition", "none")
      const addTransition = () => $(`[class*='sliderBoxNews']`).css("transition", "all 1.5s")
      clearTimeout(timer);
      timer = setTimeout(addTransition, 100);
    }
    window.addEventListener('resize', removeTransition);
  },[])

  return (
    <div
      className={css.background}
    >
      <div
        ref={inputRef}
        className={css.sliderBoxNews}
        id={`dateAndText`}
      >
        {array.map((e, index) => {
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
                id={`text${e.id}`}
                className={css.text}
              >
                {e.text}
              </div>
            </div>
          )
        })}
        <div className={css.buttonsContainer} >
          <button
            onClick={() => leftHandler()}
            disabled={endIndex >= preArray.length}
          >{`<`}</button>
          <button
            onClick={() => rightHandler()}
            disabled={startIndex === 0}
          >{`>`}</button>
        </div>
      </div>
      <Button
        id={`buttonShow`}
        onClick={() => setShow(!show) }
        className={css.buttonNews}
      >
        <div className={css.changeLogTypo}>
          {english ? `CHANGELOG` : `REG. DE CAMBIOS`}
        </div>
      </Button>
    </div>
  )
}

export default News;