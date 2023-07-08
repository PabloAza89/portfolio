import { Box, Typography, Button } from '@mui/material';
import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import * as s from '../../styles/NewsSX';
import $ from 'jquery';
import { keyframes } from '@emotion/react'
import '../../styles/NewsSX.css';
//var jQuery = require('jquery');
//import 'jquery-ui-bundle';
//import 'jquery-ui-bundle/jquery-ui.css';

function News() {

  let isRunning = useRef(false)

  $.easing.jswing = $.easing.swing;

  $.extend($.easing,
  {
      def: 'easeOutQuad',
      swing: function (x: number, t: number, b: number, c: number, d: number) {
          return -c *(t/=d)*(t-2) + b;
      },
      easeInQuad: function (x: number, t: number, b: number, c: number, d: number) {
          return c*(t/=d)*t + b;
      },
      easeOutQuad: function (x: number, t: number, b: number, c: number, d: number) {
          return -c *(t/=d)*(t-2) + b;
      },
      easeInOutQuad: function (x: number, t: number, b: number, c: number, d: number) {
          if ((t/=d/2) < 1) return c/2*t*t + b;
          return -c/2 * ((--t)*(t-2) - 1) + b;
      },
      easeInCubic: function (x: number, t: number, b: number, c: number, d: number) {
          return c*(t/=d)*t*t + b;
      },
      easeOutCubic: function (x: number, t: number, b: number, c: number, d: number) {
          return c*((t=t/d-1)*t*t + 1) + b;
      },
      easeInOutCubic: function (x: number, t: number, b: number, c: number, d: number) {
          if ((t/=d/2) < 1) return c/2*t*t*t + b;
          return c/2*((t-=2)*t*t + 2) + b;
      },
      easeInQuart: function (x: number, t: number, b: number, c: number, d: number) {
          return c*(t/=d)*t*t*t + b;
      },
      easeOutQuart: function (x: number, t: number, b: number, c: number, d: number) {
          return -c * ((t=t/d-1)*t*t*t - 1) + b;
      },
      easeInOutQuart: function (x: number, t: number, b: number, c: number, d: number) {
          if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
          return -c/2 * ((t-=2)*t*t*t - 2) + b;
      },
      easeInQuint: function (x: number, t: number, b: number, c: number, d: number) {
          return c*(t/=d)*t*t*t*t + b;
      },
      easeOutQuint: function (x: number, t: number, b: number, c: number, d: number) {
          return c*((t=t/d-1)*t*t*t*t + 1) + b;
      },
      easeInOutQuint: function (x: number, t: number, b: number, c: number, d: number) {
          if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
          return c/2*((t-=2)*t*t*t*t + 2) + b;
      },
      easeInSine: function (x: number, t: number, b: number, c: number, d: number) {
          return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
      },
      easeOutSine: function (x: number, t: number, b: number, c: number, d: number) {
          return c * Math.sin(t/d * (Math.PI/2)) + b;
      },
      easeInOutSine: function (x: number, t: number, b: number, c: number, d: number) {
          return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
      },
      easeInExpo: function (x: number, t: number, b: number, c: number, d: number) {
          return (t===0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
      },
      easeOutExpo: function (x: number, t: number, b: number, c: number, d: number) {
          return (t===d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
      },
      easeInOutExpo: function (x: number, t: number, b: number, c: number, d: number) {
          if (t===0) return b;
          if (t===d) return b+c;
          if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
          return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
      },
      easeInCirc: function (x: number, t: number, b: number, c: number, d: number) {
          return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
      },
      easeOutCirc: function (x: number, t: number, b: number, c: number, d: number) {
          return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
      },
      easeInOutCirc: function (x: number, t: number, b: number, c: number, d: number) {
          if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
          return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
      },
      easeInElastic: function (x: number, t: number, b: number, c: number, d: number) {
          var s=1.70158;var p=0;var a=c;
          if (t===0) return b;  if ((t/=d)===1) return b+c;  if (!p) p=d*.3;
          if (a < Math.abs(c)) { a=c; s=p/4; }
          else s = p/(2*Math.PI) * Math.asin (c/a);
          return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
      },
      easeOutElastic: function (x: number, t: number, b: number, c: number, d: number) {
          var s=1.70158;var p=0;var a=c;
          if (t===0) return b;  if ((t/=d)===1) return b+c;  if (!p) p=d*.3;
          if (a < Math.abs(c)) { a=c; s=p/4; }
          else s = p/(2*Math.PI) * Math.asin (c/a);
          return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
      },
      easeInOutElastic: function (x: number, t: number, b: number, c: number, d: number) {
          var s=1.70158;var p=0;var a=c;
          if (t===0) return b;  if ((t/=d/2)===2) return b+c;  if (!p) p=d*(.3*1.5);
          if (a < Math.abs(c)) { a=c; s=p/4; }
          else s = p/(2*Math.PI) * Math.asin (c/a);
          if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
          return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
      },
      easeInBack: function (x: number, t: number, b: number, c: number, d: number, s:number) {
          if (s === undefined) s = 1.70158;
          return c*(t/=d)*t*((s+1)*t - s) + b;
      },
      easeOutBack: function (x: number, t: number, b: number, c: number, d: number, s:number) {
          if (s === undefined) s = 1.70158;
          return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
      },
      easeInOutBack: function (x: number, t: number, b: number, c: number, d: number, s:number) {
          if (s === undefined) s = 1.70158;
          if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
          return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
      },
      easeInBounce: function (x: number, t: number, b: number, c: number, d: number) {
          let r = d-t
          if ((r/=d) < (1/2.75)) {
              return c - (c*(7.5625*r*r)) + b;
          } else if (r < (2/2.75)) {
              return c - (c*(7.5625*(r-=(1.5/2.75))*r + .75)) + b;
          } else if (r < (2.5/2.75)) {
              return c - (c*(7.5625*(r-=(2.25/2.75))*r + .9375)) + b;
          } else {
              return c - (c*(7.5625*(r-=(2.625/2.75))*r + .984375)) + b;
          }
      },
      easeOutBounce: function (x:number, t:number, b:number, c:number, d:number) {
          if ((t/=d) < (1/2.75)) {
              return c*(7.5625*t*t) + b;
          } else if (t < (2/2.75)) {
              return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
          } else if (t < (2.5/2.75)) {
              return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
          } else {
              return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
          }
      },
      easeInOutBounce: function (x:number, t:number, b:number, c:number, d:number) {
          if (t < d/2) {
            let r = t*2
            if ((r/=d) < (1/2.75)) {
                return (c*(7.5625*r*r)) * .5 + b;
            } else if (r < (2/2.75)) {
                return (c*(7.5625*(r-=(1.5/2.75))*r + .75)) * .5 + b;
            } else if (r < (2.5/2.75)) {
                return (c*(7.5625*(r-=(2.25/2.75))*r + .9375)) * .5 + b;
            } else {
                return (c*(7.5625*(r-=(2.625/2.75))*r + .984375)) * .5 + b;
            }
          }
          let z = t*2-d
          if ((z/=d) < (1/2.75)) {
              return (c*(7.5625*z*z)) * .5 + c*.5 + b;
          } else if (z < (2/2.75)) {
              return (c*(7.5625*(z-=(1.5/2.75))*z + .75)) * .5 + c*.5 + b;
          } else if (z < (2.5/2.75)) {
              return (c*(7.5625*(z-=(2.25/2.75))*z + .9375)) * .5 + c*.5 + b;
          } else {
              return (c*(7.5625*(z-=(2.625/2.75))*z + .984375)) * .5 + c*.5 + b;
          }
      }
  });


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

        if (show && larPort) { // SHOWN -> HIDDEN  // LARPORT

          if (!animRunning) {
            $(`.buttonShow`)
              .css(`animationName`, `shake`)
              .css(`animationDuration`,`1.5s`)
              .css(`animationDelay`,`3s`)
              .css(`animationIterationCount`,`infinite`)
          }

          $(`#buttonShow`).on("click", function() {
            $(`.dateAndText`)
                .animate( { left: -30 }, { queue: false, duration: 1500, complete: function() {
            
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



          })
        }
        else if (!show && larPort) { // HIDDEN -> SHOWN // LARPORT

          if (!animRunning) {
            $(`.buttonShow`)
              .css(`animationName`, `shake`)
              .css(`animationDuration`,`1.5s`)
              .css(`animationDelay`,`3s`)
              .css(`animationIterationCount`,`infinite`)
          }

            $(`#buttonShow`).on("click", function() {
    
              $(`.dateAndText`)

                .animate( { left: 500 }, { queue: false, duration: 1500, complete: function() {
            
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


          })
       }

       else  if (show && larLand) { // SHOWN -> HIDDEN // LARLAND

        if (!animRunning) {
          $(`.buttonShow`)
            .css(`animationName`, `shake`)
            .css(`animationDuration`,`1.5s`)
            .css(`animationDelay`,`0s`)
            .css(`animationIterationCount`,`infinite`)
        }

        $(`.buttonShow`).on("click", function() {
           $(`.dateAndText`)
              .animate( { left: 0}, { queue: false, duration: 1500, complete: function() {

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
              .animate( { left: 0}, { queue: false, duration: 1500, complete: function() {
     
                isRunning.current = false;
                if (!isRunning.current) {
                  setAnimRunning(false)
                }
              }})
        })
      }
      else if (!show && larLand) { // HIDDEN -> SHOWN // LARLAND

         if (!animRunning) {
            $(`.buttonShow`)
              .css(`animationName`, `shake`)
              .css(`animationDuration`,`1.5s`)
              .css(`animationDelay`,`0s`)
              .css(`animationIterationCount`,`infinite`)
          }

          //jQuery.easing.def = 'easeOutBounce'

        $(`.buttonShow`).on("click", function() {

          //jQuery.easing.def = 'easeOutBounce';
          //let linear = 'linear'

          $(`.dateAndText`)
          
            .animate( { left: 500 }, { queue: false, easing: 'easeInOutBounce', duration: 1500, complete: function() {
            //.animate( { left: 500 }, { queue: false, easing: 'easeInBounce', duration: 1500, complete: function() {
              //.animate( { left: 500 }, { queue: false, easing: 'easeInOutBack', duration: 1500, complete: function() {
              isRunning.current = false;
              if (!isRunning.current) {
                setAnimRunning(false)
              }
            }})

            //.animate( { left: 500 }, 1500, 'easeInBounce' )


          $(`.buttonShow`)
              .css(`animationName`,`none`)
              .css(`animationDuration`,`0s`)
              .css(`animationDelay`,`0s`)
              .css(`animationIterationCount`,`none`)
            .animate( { left: 500 }, { queue: false, duration: 1500, complete: function() {
              isRunning.current = false; if (!isRunning.current) {
                setAnimRunning(false)
              }
            }})


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
        id={`dateAndText`}
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