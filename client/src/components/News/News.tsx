import { Box, Typography, Button } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import * as s from '../../styles/NewsSX';

function GoToLinkButton() {

  const english = useSelector((state: {english:boolean}) => state.english)

  const [ show, setShow ] = useState(false)

  interface arrayI {
    id: number,
    date: string,
    text: string,
  }

  const array: arrayI[] = [
    {id: 14, date: '23-08-23', text: english ? 'sdfsdfsdfsdfsdfsdfaaaaaaaaaaa' : 'asdasdasdasdasdasdasdddddddddddddddddddddddddddddddddd'},
    {id: 13, date: '23-08-23', text: '14 thasdasdat'},
    {id: 12, date: '23-08-23', text: '13 esasdasdasdo'},
    {id: 11, date: '23-08-23', text: '12 thasdasdat'},
    {id: 10, date: '23-08-23', text: '11 essdfasdasdasdo'},
    {id: 9, date: '23-08-23', text: '10 thasdasdat'},
    {id: 8, date: '23-08-23', text: '9 esasdasdasdo'},
    {id: 7, date: '23-08-23', text: '8 thasdasdat'},
    {id: 6, date: '23-07-01', text: english ? 'Start using LocalStorage for data persistance' : 'Se empezó a utilizar LocalStorage para la persistencia de datos'},
    {id: 5, date: '23-06-03', text: english ? 'Developing Skills Component (the most difficult)' : 'Desarrollando el Componente Habilidades (El más dificultoso)'},
    {id: 4, date: '23-05-08', text: english ? 'Using own solution for use styles with variables' : 'Utilizando una solución propia para el uso de estilos con variables'},
    {id: 3, date: '23-04-27', text: english ? 'Start using TS & screen size handlers' : 'Se empieza a usar TS & manejadores de tamaño de pantalla'},
    {id: 2, date: '23-03-30', text: english ? 'Break for moving' : 'Pausa para mudanza'},
    {id: 1, date: '23-02-21', text: english ? 'Break for vacations' : 'Descanso de vacaciones'},
    {id: 0, date: '23-01-20', text: english ? 'Start developing my own first portfolio !' : 'Empezando a desarrollar mi primer portfolio propio !'},
  ]

  return (
    <Box sx={s.background({ show })}>
      <Box sx={s.sliderBox}>
        {array.map(e => {
          return (
            <Box key={e.id} sx={s.eachDescription}>
              <Typography sx={s.date}>
                {e.date}
              </Typography>
              <Typography sx={s.text}>
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