import { Box, Typography, Button } from '@mui/material';
import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import * as s from '../../styles/NewsSX';
import $ from 'jquery';
import { keyframes } from '@emotion/react'
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
  const [ scrollWidth, setScrollWidth ] = useState<number>(0)
  const [ animRunning, setAnimRunning ] = useState<boolean>(false)
  

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

  // useEffect(() => {
  //   $(function() {
  //     var scrollDiv = document.createElement("div"); // Creates the div
  //     scrollDiv.className = "scrollbar-measure";
  //     document.body.appendChild(scrollDiv);
  //     $(`.scrollbar-measure`)
  //       .css("overflowY", "scroll") // Creates a ScrollBar
  //       .css("width", "fit-content") // Set width to auto considering the ScrollBar width
  //     setScrollWidth(scrollDiv.offsetWidth)
  //     document.body.removeChild(scrollDiv); // Delete the div
  //   })

  // },[])

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

  useEffect(() => {
      $(function() {

        if (show && ( minPort || medPort || larPort )) { // SHOWN -> HIDDEN  // LARPORT

          $(`.buttonShow`)
            .stop()
            .css("left", "6px")
          $(`.dateAndText`)
            .css("left", minPort || minLand ? "490px" : "500px")

          if (!animRunning) {
            
            $(`.buttonShow`)
              .css(`animationName`,`shake`)
              .css(`animationDuration`,`6s`)
              .css(`animationDelay`,`3s`)
              .css(`animationIterationCount`,`infinite`)
          }

          $(`#buttonShow`).on("click", function() {
            $(`#buttonShow`)
              .stop()
              .css(`animationName`,`none`)
              .css(`animationDuration`,`0s`)
              .css(`animationDelay`,`0s`)
              .css(`animationIterationCount`,`none`)
            $(`.dateAndText`)
              .stop()
                .animate( { left: -30 }, { queue: false, easing: 'easeOutCubic', duration: 800, complete: function() {
                  isRunning.current = false;
                  if (!isRunning.current) {
                    setAnimRunning(false)
                    
                  }
                }})
             

          })
        }
        else if (!show && ( minPort || medPort || larPort )) { // HIDDEN -> SHOWN // LARPORT

          $(`.buttonShow`)
          .stop() 
          .css("left", "6px")

          if (!animRunning) {
            $(`.buttonShow`)
              .css(`animationName`,`shake`)
              .css(`animationDuration`,`6s`)
              .css(`animationDelay`,`3s`)
              .css(`animationIterationCount`,`infinite`)
          }

            $(`#buttonShow`).on("click", function() {
              $(`#buttonShow`)
              .stop() 
              .css(`animationName`,`none`)
              .css(`animationDuration`,`0s`)
              .css(`animationDelay`,`0s`)
              .css(`animationIterationCount`,`none`)
              $(`.dateAndText`)
              .stop() // added
                .animate( { left: minPort || minLand ? 490 : 500 }, { queue: false, easing: 'easeOutCubic', duration: 1500, complete: function() {
                  isRunning.current = false;
                  if (!isRunning.current) {
                    setAnimRunning(false)
                  }
                }})
                
          })
       }

       else  if (show && ( minLand || medLand || larLand )) { // SHOWN -> HIDDEN // LARLAND

        if (!animRunning) {
          $(`.buttonShow`)
            .css("left", "506px")
          $(`.dateAndText`)
            .css("left", "470px")
        }

        if (!animRunning) {
          $(`.buttonShow`)
            .css(`animationName`,`shake`)
            .css(`animationDuration`,`6s`)
            .css(`animationDelay`,`3s`)
            .css(`animationIterationCount`,`infinite`)
        }

        $(`.buttonShow`).on("click", function() {
           $(`.dateAndText`)
              .stop()
              .animate( { left: -30}, { queue: false, easing: 'easeOutCubic', duration: 800, complete: function() {
                isRunning.current = false;
                if (!isRunning.current) {
                  setAnimRunning(false)
                }
              }})
            $(`.buttonShow`)
               .stop()
               .css(`animationName`,`none`)
               .css(`animationDuration`,`0s`)
               .css(`animationDelay`,`0s`)
               .css(`animationIterationCount`,`none`)
              .animate( { left: 6}, { queue: false, easing: 'easeOutCubic', duration: 800, complete: function() {
                isRunning.current = false;
                if (!isRunning.current) {
                  setAnimRunning(false)
                }
              }})
        })
      }
      else if (!show && ( minLand || medLand || larLand )) { // HIDDEN -> SHOWN // LARLAND
        
        if (!animRunning) {
          $(`.buttonShow`)
            .css("left", "6px")
          $(`.dateAndText`)
            .css("left", "-30px")
        }

        if (!animRunning) {
          $(`.buttonShow`)
            .css(`animationName`,`shake`)
            .css(`animationDuration`,`6s`)
            .css(`animationDelay`,`3s`)
            .css(`animationIterationCount`,`infinite`)
        }

        $(`.buttonShow`).on("click", function() {
          $(`.dateAndText`)
            .animate( { left: 470 }, { queue: false, easing: 'easeOutCubic', duration: 1500, complete: function() {
              isRunning.current = false;
              if (!isRunning.current) {
                setAnimRunning(false)
              }
            }})
          $(`.buttonShow`)
              .css(`animationName`,`none`)
               .css(`animationDuration`,`0s`)
               .css(`animationDelay`,`0s`)
               .css(`animationIterationCount`,`none`)
            .animate( { left: 506 }, { queue: false, easing: 'easeOutCubic', duration: 1500, complete: function() {
              isRunning.current = false; if (!isRunning.current) {
                setAnimRunning(false)
              }
            }})
        })
     }
    })
  },[show, minPort, minLand, medPort, medLand, larPort, larLand, width, animRunning])


  const animRunningHandler: any = () => {
    setAnimRunning(true)
    isRunning.current = true
  }

  console.log("show", show, "animRunning", animRunning)

  return (
    <Box
      sx={s.background({ show, minPort, minLand, medPort, medLand, larPort, larLand })}
      //className={`all`}
    >
      <Box
        sx={s.sliderBox({ minPort, minLand, medPort, medLand, larPort, larLand })}
        className={`dateAndText`}
        id={`dateAndText`}
      >
        {array.map(e => {
          return (
            <Box 
              className={`eachDescription`}
              key={e.id} 
              sx={s.eachDescription({ animRunning, scrollWidth, minPort, minLand, medPort, medLand, larPort, larLand })}
            >
              <Typography
                className={`date${e.id}`}
                sx={s.date({ darkMode, minPort, minLand, medPort, medLand, larPort, larLand })}
              >
                {e.date}
              </Typography>
              <Typography
                className={`text${e.id}`}
                sx={s.text({ animRunning, darkMode, scrollWidth, minPort, minLand, medPort, medLand, larPort, larLand })}
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
        sx={s.buttonNews({ show, darkMode, minPort, minLand, medPort, medLand, larPort, larLand })}
      >
        <Typography sx={s.changeLogTypo({ english, minPort, minLand, medPort, medLand, larPort, larLand })}>
          {english ? `CHANGELOG` : `REG. DE CAMBIOS`}
        </Typography>
      </Button>
    </Box>
  )
}

export default News;