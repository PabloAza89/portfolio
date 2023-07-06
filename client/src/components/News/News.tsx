import { Box, Typography, Button } from '@mui/material';
import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import * as s from '../../styles/NewsSX';
import $ from 'jquery';
import { keyframes } from '@emotion/react'
import '../../styles/NewsSX.css';

function News() {

  const darkMode = useSelector( (state: {darkMode:boolean}) => state.darkMode)
  const english = useSelector((state: {english:boolean}) => state.english)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)

  const [ show, setShow ] = useState<boolean>(false)
  const [ scrollWidth, setScrollWidth ] = useState<number>(0)

  interface arrayI {
    id: number,
    date: string,
    text: string,
  }

  const array: arrayI[] = [
    {id: 6, date: '23-07-01', text: english ? ' Start using LocalStorage for data persistance  ' : ' Se empezó a utilizar LocalStorage para la persistencia de datos  '},
    {id: 5, date: '23-06-03', text: english ? ' Developing Skills Component (the most difficult)  ' : ' Desarrollando el Componente Habilidades (El más dificultoso)  '},
    {id: 4, date: '23-05-08', text: english ? ' Using own solution for use styles with variables  ' : ' Utilizando una solución propia para el uso de estilos con variables  '},
    {id: 3, date: '23-04-27', text: english ? ' Start using TS & screen size handlers  ' : ' Se empieza a usar TS & manejadores de tamaño de pantalla  '},
    {id: 2, date: '23-03-30', text: english ? ' Break for moving  ' : ' Pausa para mudanza  '},
    {id: 1, date: '23-02-21', text: english ? ' Break for vacations  ' : ' Descanso de vacaciones  '},
    {id: 0, date: '23-01-20', text: english ? ' Start developing my own first portfolio !  ' : ' Empezando a desarrollar mi primer portfolio propio !  '},
  ]

  // useEffect(() => {
  //   $(function() {
  //     array.forEach(e => {
  //       $(`.text${e.id}`).on("mouseenter", function(){
  //         $(`.text${e.id}`)
  //           .css("background", "#76b376")
  //           .stop(true, true)
  //           .delay(400)
  //           .animate({scrollLeft: 420}, 6000)
  //         $(`.date${e.id}`)
  //           .css("background", "#bd7979")
  //       })
  //       $(`.text${e.id}`).on("mouseleave", function(){
  //         $(`.text${e.id}`)
  //           .stop(true, true)
  //           .css("background", "lightgreen")
  //           .animate({scrollLeft: 0}, 0)
  //         $(`.date${e.id}`)
  //           .css("background", "lightcoral")
  //       })
  //     })
  //   })
  // },[])

  // if (darkMode) {
  //   $(`.text${e.id}`).on("mouseenter", function(){
  //     $(`.text${e.id}`)
  //       .css("background", "lightgreen")
  //       .stop(true, true)
  //       .delay(400)
  //       .animate({scrollLeft: 420}, 6000)
  //     $(`.date${e.id}`)
  //       .css("background", "lightcoral")
  //   })
  //   $(`.text${e.id}`).on("mouseleave", function(){
  //     $(`.text${e.id}`)
  //       .stop(true, true)
  //       .css("background", "#76b376")
  //       .animate({scrollLeft: 0}, 0)
  //     $(`.date${e.id}`)
  //       .css("background", "#bd7979")
  //   })
  // } 

  
  useEffect(() => {
    
      


        if (darkMode) {
          $(function() {
            
          array.forEach(e => {
            $(`.text${e.id}`)
                .stop(true, true)
                .css("background", "#76b376")
                .animate({scrollLeft: 0}, 0)
              $(`.date${e.id}`)
                .css("background", "#bd7979")

            $(`.text${e.id}`).on("mouseenter", function(){
              $(`.text${e.id}`)
                .css("background", "lightgreen")
                .stop(true, true)
                .delay(400)
                .animate({scrollLeft: 420}, 6000)
              $(`.date${e.id}`)
                .css("background", "lightcoral")
            })
            $(`.text${e.id}`).on("mouseleave", function(){
              $(`.text${e.id}`)
                .stop(true, true)
                .css("background", "#76b376")
                .animate({scrollLeft: 0}, 0)
              $(`.date${e.id}`)
                .css("background", "#bd7979")
            })


          })
         })
        }
        
        
        else {
        $(function() {
          array.forEach(e => {
            $(`.text${e.id}`)
            .stop(true, true)
            .css("background", "lightgreen")
            .animate({scrollLeft: 0}, 0)
          $(`.date${e.id}`)
            .css("background", "lightcoral")
            

            $(`.text${e.id}`).on("mouseenter", function(){
              $(`.text${e.id}`)
                .css("background", "#76b376")
                .stop(true, true)
                .delay(400)
                .animate({scrollLeft: 420}, 6000)
              $(`.date${e.id}`)
                .css("background", "#bd7979")
            })
            $(`.text${e.id}`).on("mouseleave", function(){
              $(`.text${e.id}`)
                .stop(true, true)
                .css("background", "lightgreen")
                .animate({scrollLeft: 0}, 0)
              $(`.date${e.id}`)
                .css("background", "lightcoral")
            })


          })
      })
    }



      
  
  
  },[darkMode])

  useEffect(() => {
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

  },[])
  
    $(function() {
      if (show) {
        $(`.buttonShow`).on("click", function() {
          $(`.all`)
           .css("transition", "all .8s ease-in-out")
           .css(`transform`,`translateX(0px)`)
           $(`.all`)
        })
     } else {
        $(`.buttonShow`).on("click", function() {
          $(`.all`)
           .css("transition", "all 1.5s ease-in-out")
           .css(`transform`,`translateX(500px)`)
        })
     }
  })

  console.log("console log", show)

  return (
    <Box
      sx={s.background({ show })}
      className={`all`}
    >
      <Box sx={s.sliderBox}>
        {array.map(e => {
          return (
            <Box key={e.id} sx={s.eachDescription({ scrollWidth })}>
              <Typography
                className={`date${e.id}`}
                sx={s.date({ darkMode, minPort, minLand, medPort, medLand, larPort, larLand })}
              >
                {e.date}
              </Typography>
              <Typography
                className={`text${e.id}`}
                sx={s.text({ darkMode, scrollWidth, minPort, minLand, medPort, medLand, larPort, larLand })}
              >
                {e.text}
              </Typography>
            </Box>
          )
        })}
      </Box>
      <Button
        className={`buttonShow`}
        onClick={() => setShow(!show)}
        sx={s.buttonNews({ show, minPort, minLand, medPort, medLand, larPort, larLand })}
      >
        <Typography sx={s.changeLogTypo}>
          CHANGELOG
        </Typography>
      </Button>
    </Box>
  )
}

export default News;