import { useRef, useEffect } from 'react';
import { Box, CardMedia, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import javascript from '../../images/javascript.png';
import material from '../../images/material.png';
import node from '../../images/node.png';
import react from '../../images/react.png';
import redux from '../../images/redux.png';
import sequelize from '../../images/sequelize.png';
import ScrollContainer from 'react-indiana-drag-scroll';
import * as s from '../../styles/TechnologiesSX';
import '../../styles/TechnologiesSX.css';
import $ from 'jquery';


function Technologies() {

  const darkMode = useSelector((state: { darkMode:boolean }) => state.darkMode)
  const english = useSelector((state: { english:boolean }) => state.english)
  const minPort = useSelector((state: { minPort:boolean }) => state.minPort)
  const minLand = useSelector((state: { minLand:boolean }) => state.minLand)
  const medPort = useSelector((state: { medPort:boolean }) => state.medPort)
  const medLand = useSelector((state: { medLand:boolean }) => state.medLand)
  const larPort = useSelector((state: { larPort:boolean }) => state.larPort)
  const larLand = useSelector((state: { larLand:boolean }) => state.larLand)
  const currentWidth = useSelector((state: { currentWidth:number }) => state.currentWidth)

  function useHorizontalScroll() {
    const elRef = useRef<any>(null);
    useEffect(() => {
      const el:any = elRef.current;
      if (el) {
        const onWheel = (e:any) => {
          if (e.deltaY === 0) return;
          e.preventDefault();
          el.scrollTo({
            left: el.scrollLeft + e.deltaY * 4,
            behavior: "smooth"
          });
        };
        el.addEventListener("wheel", onWheel);
        return () => el.removeEventListener("wheel", onWheel);
      }
    }, []);
    return elRef;
  }

  // icon = 5vw MED LAND
  // text = 25px

  // icon = 45 LAR
  // text = 25 // 70 total

  // icon = 65 LAR
  // text = 25 // 90 total

  interface arrayI {
    icon: string,
    title: string,
    url: string
  }

  const array: arrayI[] = [
    { icon: react, title: `React`, url: english ? `https://react.dev/` : `https://es.react.dev/` },
    { icon: redux, title: `Redux`, url: english ? `https://redux.js.org/` : `https://es.redux.js.org/` },
    { icon: javascript, title: `Javascript`, url: english ? `https://developer.mozilla.org/en-US/docs/Web/JavaScript` : `https://developer.mozilla.org/es/docs/Web/JavaScript` },
    { icon: sequelize, title: `Sequelize`, url: english ? `https://sequelize.org/ ` : `https://translate.google.com/translate?sl=en&tl=es&hl=es&u=https://sequelize.org/` },
    { icon: material, title: `Material UI`, url: english ? `https://mui.com/ ` : `https://translate.google.com/translate?sl=en&tl=es&hl=es&u=https://mui.com/` },
    { icon: node, title: `Node.js`, url: english ? `https://nodejs.org/en` : `https://nodejs.org/es ` },
  ]


 
      
    /*       $(`#boxClass`).hover(function() {
            $( this ).addClass(`boxClass`)
          });
 */
        /*   $(function(){
            array.forEach(e => {
              $(`#boxClass${e.id}`).on( "mouseenter", function(){
                $(this).addClass(`boxClass${e.id}`)
                
              });
            });
          })
         */
      
          
        

        

        /* $( document ).click(function() {
          $( "#toggle" ).toggle( "scale" );
        });
    */

  return (
    <ScrollContainer style={s.background({ currentWidth, minPort, minLand, medPort, medLand, larPort, larLand })}
      innerRef={useHorizontalScroll()}
      horizontal={true}
    >
      {array.map((e) => {
        return (
          <Box 
            key={e.title}
            sx={s.iconBoxCopy({ minPort, minLand, medPort, medLand, larPort })}
          >
            <Box
              
              sx={s.iconBox({ minPort, minLand, medPort, medLand, larPort })}
              component={Link}
              to={e.url}
              target="_blank"
            >
              <Typography sx={s.title({ darkMode, minPort, minLand, medPort, medLand, larPort })}>{e.title}</Typography>
            </Box>
            <CardMedia component="div" sx={s.iconMedia({ url:e.icon, minPort, minLand, medPort, medLand, larPort })}></CardMedia>
          </Box>
        )
      })}
    </ScrollContainer>
  )
}

export default Technologies;