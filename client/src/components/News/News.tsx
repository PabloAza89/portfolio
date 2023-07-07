import { Box, Typography, Button } from '@mui/material';
import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import * as s from '../../styles/NewsSX';
import $ from 'jquery';
import { keyframes } from '@emotion/react'
import '../../styles/NewsSX.css';

function News() {

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
  //const [ show, setShow ] = useState<boolean>(true)
  const [ scrollWidth, setScrollWidth ] = useState<number>(0)
  const [ animRunning, setAnimRunning ] = useState<boolean>(false)
  let isRunning = useRef(false)

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

  // //   $(function() {
  // //     if (show) {
  // //       $(`.buttonShow`).on("click", function() {
  // //         $(`.all`)
  // //          .css("transition", "all .8s ease-in-out")
  // //          .css(`transform`,`translateX(0px)`)
  // //          $(`.all`)
  // //       })
  // //    } else {
  // //       $(`.buttonShow`).on("click", function() {
  // //         $(`.all`)
  // //          .css("transition", "all 1.5s ease-in-out")
  // //          .css(`transform`,`translateX(500px)`)
  // //       })
  // //    }
  // // })

  // useEffect(() => {
  //     $(function() {

  //       if (show && larPort) { // HIDDEN -> SHOWN



  //         $(`#buttonShow`)
  //           .css("transition", "none")
  //           .css(`transform`,`none`)
  //         $(`.dateAndText`) // new !
  //           .css(`transform`,`translateX(530px)`)
  //           .css(`transitionDuration`,`0s`)
   



  //           $(`#buttonShow`).on("click", function() {
  //           $(`.dateAndText`)
  //           .css("transition", "all .8s ease-in-out")
  //           .css(`transform`,`translateX(0px)`)

  //         $(`.dateAndText`)
  //           .on("transitionend webkitTransitionEnd oTransitionEnd", function(){
  //             isRunning.current = false;
  //             if (!isRunning.current) setAnimRunning(false)
  //           })

  //         })
  //       }
  //       else if (!show && larPort) { // SHOWN -> HIDDEN


         
  //           $(`#buttonShow`)
  //             .css("transition", "none")
  //             .css(`transform`,`none`)
              


  //           $(`#buttonShow`).on("click", function() {
  //           $(`.dateAndText`)
  //           .css("transition", "all 1.5s ease-in-out")
  //           .css(`transform`,`translateX(530px)`)

  //         $(`.dateAndText`)
  //           .on("transitionend webkitTransitionEnd oTransitionEnd", function(){
  //             isRunning.current = false;
  //             if (!isRunning.current) {
  //               setAnimRunning(false)

  //             $(`#buttonShow`)
  //               .css(`animationName`,`shakeKF`)
  //               .css(`animationDuration`,`1.5s`)
  //               .css(`animationIterationCount`,`infinite`)
  //               .css(`animationDelay`,`0s`)
   
  //             }
  //           })


  //         })
  //      }

  //      else  if (show && larLand) { // HIDDEN -> SHOWN

  //       $(`#buttonShow`).on("click", function() {
  //         $(`.dateAndText`)
  //           .css("transition", "all .8s ease-in-out")
  //           .css(`transform`,`translateX(0px)`)

  //           $(`#buttonShow`)
  //           .css("transition", "all .8s ease-in-out")
  //           .css(`transform`,`translateX(0px)`)

  //         $(`.dateAndText`)
  //           .on("transitionend webkitTransitionEnd oTransitionEnd", function(){
  //             isRunning.current = false;

  //             if (!isRunning.current) {
  //               setAnimRunning(false)

  //             }
  //           })

  //       })
  //     }
  //     else if (!show && larLand) { // SHOWN -> HIDDEN

  //       $(`#buttonShow`).on("click", function() {
  //         $(`.dateAndText`)
  //           .css("transition", "all 1.5s ease-in-out")
  //           .css(`transform`,`translateX(500px)`)
  //         $(`#buttonShow`)

  //           .css("transition", "all 1.5s ease-in-out")
  //           .css(`transform`,`translateX(500px)`)

  //         $(`.dateAndText`)
  //           .on("transitionend webkitTransitionEnd oTransitionEnd", function(){
  //             isRunning.current = false; 

  //             if (!isRunning.current) {
  //               setAnimRunning(false)

  //             }

  //           })

  //       })
  //    }



  //   })
  // },[show, larLand, larPort, width, animRunning])

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

  //   $(function() {
  //     if (show) {
  //       $(`.buttonShow`).on("click", function() {
  //         $(`.all`)
  //          .css("transition", "all .8s ease-in-out")
  //          .css(`transform`,`translateX(0px)`)
  //          $(`.all`)
  //       })
  //    } else {
  //       $(`.buttonShow`).on("click", function() {
  //         $(`.all`)
  //          .css("transition", "all 1.5s ease-in-out")
  //          .css(`transform`,`translateX(500px)`)
  //       })
  //    }
  // })

  useEffect(() => {
      $(function() {

        if (show && larPort) { // HIDDEN -> SHOWN



          $(`#buttonShow`)
            .css("transition", "none")
            .css(`transform`,`none`)
          $(`.dateAndText`) // new !
            .css(`transform`,`translateX(530px)`)
            .css(`transitionDuration`,`0s`)
   



            $(`#buttonShow`).on("click", function() {
            $(`.dateAndText`)
            .css("transition", "all .8s ease-in-out")
            .css(`transform`,`translateX(0px)`)

          $(`.dateAndText`)
            .on("transitionend webkitTransitionEnd oTransitionEnd", function(){
              isRunning.current = false;
              if (!isRunning.current) setAnimRunning(false)
            })

          })
        }
        else if (!show && larPort) { // SHOWN -> HIDDEN


         
            $(`#buttonShow`)
              .css("transition", "none")
              .css(`transform`,`none`)
              


            $(`#buttonShow`).on("click", function() {
            $(`.dateAndText`)
            .css("transition", "all 1.5s ease-in-out")
            .css(`transform`,`translateX(530px)`)

          $(`.dateAndText`)
            .on("transitionend webkitTransitionEnd oTransitionEnd", function(){
              isRunning.current = false;
              if (!isRunning.current) {
                setAnimRunning(false)

              $(`#buttonShow`)
                .css(`animationName`,`shakeKF`)
                .css(`animationDuration`,`1.5s`)
                .css(`animationIterationCount`,`infinite`)
                .css(`animationDelay`,`0s`)
   
              }
            })


          })
       }

       else  if (show && larLand) { // SHOW -> HIDDEN

       


        $(`#buttonShow`).on("click", function() {
          $(`.dateAndText`)
              .css(`animationName`, `toLeft`)
              .css(`animationDuration`,`1.5s`)
              .css(`animationDelay`,`0s`)
              .css(`animationIterationCount`,`1`)

            $(`#buttonShow`)
              .css(`animationName`, `toLeft`)
              .css(`animationDuration`,`1.5s`)
              .css(`animationDelay`,`0s`)
              .css(`animationIterationCount`,`1`)

          $(`.dateAndText`)
            .on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
              isRunning.current = false;

              if (!isRunning.current) {
                setAnimRunning(false)

            $(`.dateAndText`)
              .css(`animationName`, `leftText`)
              .css(`animationDuration`,`1.5s`)
              .css(`animationDelay`,`0s`)
              .css(`animationIterationCount`,`infinite`)

            $(`#buttonShow`)
              .css(`animationName`, `leftButton`)
              .css(`animationDuration`,`1.5s`)
              .css(`animationDelay`,`0s`)
              .css(`animationIterationCount`,`infinite`)

              }
            })

        })
      }
      else if (!show && larLand) { // HIDDEN -> SHOWN

        if (!animRunning) {
          $(`#buttonShow`)
            .css(`animationName`, `leftButton`)
            .css(`animationDuration`,`1.5s`)
            .css(`animationDelay`,`1.5s`)
            .css(`animationIterationCount`,`infinite`)
        }
        


        $(`#buttonShow`).on("click", function() {
          $(`.dateAndText`)
            .css(`animationName`, `toRight`)
            .css(`animationDuration`,`1.5s`)
            .css(`animationDelay`,`0s`)
            .css(`animationIterationCount`,`1`)
          $(`#buttonShow`)
            .css(`animationName`, `toRight`)
            .css(`animationDuration`,`1.5s`)
            .css(`animationDelay`,`0s`)
            .css(`animationIterationCount`,`1`)

            //.css("transition", "all 1.5s ease-in-out")
            //.css(`transform`,`translateX(500px)`)

          $(`.dateAndText`)
            .on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
              isRunning.current = false;

              if (!isRunning.current) {
                setAnimRunning(false)

                $(`.dateAndText`)
                  .css(`animationName`, `rightText`)
                  .css(`animationDuration`,`1.5s`)
                  .css(`animationDelay`,`0s`)
                  .css(`animationIterationCount`,`infinite`)
                $(`#buttonShow`)
                  .css(`animationName`, `rightButton`)
                  .css(`animationDuration`,`1.5s`)
                  .css(`animationDelay`,`0s`)
                  .css(`animationIterationCount`,`infinite`)

              }

            })

        })
     }



    })
  },[show, larLand, larPort, width, animRunning])


  const animRunningHandler: any = (timerShowLong: boolean) => {
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
      >
        {array.map(e => {
          return (
            <Box key={e.id} sx={s.eachDescription({ scrollWidth, minPort, minLand, medPort, medLand, larPort, larLand })}>
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
        id={`buttonShow`}
        onClick={() => { animRunningHandler(!show); setShow(!show) }}
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