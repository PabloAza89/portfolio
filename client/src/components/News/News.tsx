import { Box, Typography, Button } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import * as s from '../../styles/NewsSX';
import $ from 'jquery';

function GoToLinkButton() {

  const english = useSelector((state: {english:boolean}) => state.english)

  const [ show, setShow ] = useState(false)

  interface arrayI {
    id: number,
    date: string,
    text: string,
  }

  // const array: arrayI[] = [
  //   {id: 14, date: '23-08-23', text: english ? 'sdfsdfsdfsdfsdfsdfaaaaaaaaaaa' : 'asdasdasdasdasdasdasdddddddddddddddddddddddddddddddddd'},
  //   {id: 13, date: '23-08-23', text: '14 thasdasdat'},
  //   {id: 12, date: '23-08-23', text: '13 esasdasdasdo'},
  //   {id: 11, date: '23-08-23', text: '12 thasdasdat'},
  //   {id: 10, date: '23-08-23', text: '11 essdfasdasdasdo'},
  //   {id: 9, date: '23-08-23', text: '10 thasdasdat'},
  //   {id: 8, date: '23-08-23', text: '9 esasdasdasdo'},
  //   {id: 7, date: '23-08-23', text: '8 thasdasdat'},
  //   {id: 6, date: '23-07-01', text: english ? 'Start using LocalStorage for data persistance' : 'Se empezó a utilizar LocalStorage para la persistencia de datos'},
  //   {id: 5, date: '23-06-03', text: english ? 'Developing Skills Component (the most difficult)' : 'Desarrollando el Componente Habilidades (El más dificultoso)'},
  //   {id: 4, date: '23-05-08', text: english ? 'Using own solution for use styles with variables' : 'Utilizando una solución propia para el uso de estilos con variables'},
  //   {id: 3, date: '23-04-27', text: english ? 'Start using TS & screen size handlers' : 'Se empieza a usar TS & manejadores de tamaño de pantalla'},
  //   {id: 2, date: '23-03-30', text: english ? 'Break for moving' : 'Pausa para mudanza'},
  //   {id: 1, date: '23-02-21', text: english ? 'Break for vacations' : 'Descanso de vacaciones'},
  //   {id: 0, date: '23-01-20', text: english ? 'Start developing my own first portfolio !' : 'Empezando a desarrollar mi primer portfolio propio !'},
  // ]

  const array: arrayI[] = [
    {id: 14, date: '23-08-23', text: 'a, b, c, d, e, f, g, h, i, j, k, l, m, n, ñ, o, p, q, r, s, t, u, v, w, x, y, z, 1, 2, 3, 4, 5, 6, 7, 8, 9'},
    {id: 13, date: '23-08-23', text: 'a, b, c, d, e, f, g, h, i, j, k, l, m, n, ñ, o, p, q, r, s, t, u, v, w, x,asdasdasdasdas'},
    {id: 12, date: '23-08-23', text: 'asdsadas234lkj234kl23lk4j23lk4jkl234jk23jkl4j23jlk4jlk23ljk4j2lk34jlk2j3lk4ljk2334nj234'},
    {id: 11, date: '23-08-23', text: 'asdsadas234lkj234kl23lk4j23lk4jkl234jk23jkl4j23jlk4jlk23ljk4j2lk34jlk2j3lk4ljk2334nj234'},
    {id: 10, date: '23-08-23', text: 'asdsadas234lkj234kl23lk4j23lk4jkl234jk23jkl4j23jlk4jlk23ljk4j2lk34jlk2j3lk4ljk2334nj234'},
    {id: 9, date: '23-08-23', text: 'asdsadas234lkj234kl23lk4j23lk4jkl234jk23jkl4j23jlk4jlk23ljk4j2lk34jlk2j3lk4ljk2334nj234'},
    {id: 8, date: '23-08-23', text: 'asdsadas234lkj234kl23lk4j23lk4jkl234jk23jkl4j23jlk4jlk23ljk4j2lk34jlk2j3lk4ljk2334nj234'},
    {id: 7, date: '23-08-23', text: 'asdsadas234lkj234kl23lk4j23lk4jkl234jk23jkl4j23jlk4jlk23ljk4j2lk34jlk2j3lk4ljk2334nj234'},
    {id: 6, date: '23-07-01', text: 'asdsadas234lkj234kl23lk4j23lk4jkl234jk23jkl4j23jlk4jlk23ljk4j2lk34jlk2j3lk4ljk2334nj234'},
    {id: 5, date: '23-06-03', text: 'asdsadas234lkj234kl23lk4j23lk4jkl234jk23jkl4j23jlk4jlk23ljk4j2lk34jlk2j3lk4ljk2334nj234'},
    {id: 4, date: '23-05-08', text: 'asdsadas234lkj234kl23lk4j23lk4jkl234jk23jkl4j23jlk4jlk23ljk4j2lk34jlk2j3lk4ljk2334nj234'},
    {id: 3, date: '23-04-27', text: 'asdsadas234lkj234kl23lk4j23lk4jkl234jk23jkl4j23jlk4jlk23ljk4j2lk34jlk2j3lk4ljk2334nj234'},
    {id: 2, date: '23-03-30', text: 'asdsadas234lkj234kl23lk4j23lk4jkl234jk23jkl4j23jlk4jlk23ljk4j2lk34jlk2j3lk4ljk2334nj234'},
    {id: 1, date: '23-02-21', text: "a, b, c, d, e, f, g, h, i, j, k, l, m, n, ñ, o, p, q, r, s, t, u, v, w, x"},
    {id: 0, date: '23-01-20', text: 'a, b, c, d, e, f, g, h, i, j, k, l, m, n, ñ, o, p, q, r, s, t, u, v, w, x, y, z, 1, 2, 3, 4, 5, 6, 7, 8, 9'},
  ]

  $(function() {
    array.forEach(e => {
      $(`.text${e.id}`).on("mouseenter", function(){
        $(`.text${e.id}`)
          .css("background", "green")
          .stop(true, true)
          .delay(800)
          .animate({scrollLeft: 420}, 4000)
      })
      $(`.text${e.id}`).on("mouseleave", function(){
        $(`.text${e.id}`)
          .stop(true, true)
          .css("background", "lightgreen")
          .animate({scrollLeft: 0}, 0)
      })
    })
  })

  const [ scrollWidth, setScrollWidth ] = useState<number>(0)

  $(function() {
    var scrollDiv = document.createElement("div"); // Creates the div
    scrollDiv.className = "scrollbar-measure";
    document.body.appendChild(scrollDiv);
    $(`.scrollbar-measure`)
      .css("overflowY", "scroll") // Creates a ScrollBar
      .css("width", "fit-content") // Set width to auto considering the ScrollBar width
    setScrollWidth(scrollDiv.offsetWidth)
    document.body.removeChild(scrollDiv); // Delete the div
  })

  console.log("test", scrollWidth);

  return (
    <Box sx={s.background({ show })}>
      <Box sx={s.sliderBox}>
        {array.map(e => {
          return (
            <Box key={e.id} sx={s.eachDescription}>
              <Typography sx={s.date}>
                {e.date}
              </Typography>
              <Typography className={`text${e.id}`} sx={s.text({ scrollWidth })}>
                {e.text}
              </Typography>
            </Box>
          )
        })}
      </Box>
      <Button
        onClick={() => setShow(!show)}
        sx={s.buttonNews}
      >
        NEWS
      </Button>
    </Box>
  )
}

export default GoToLinkButton;