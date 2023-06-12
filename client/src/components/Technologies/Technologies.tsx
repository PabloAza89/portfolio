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
    id: number,
    icon: string,
    title: string,
    url: string
  }

  const array: arrayI[] = [
    { id: 0, icon: react, title: `React`, url: english ? `https://react.dev/` : `https://es.react.dev/` },
    { id: 1, icon: redux, title: `Redux`, url: english ? `https://redux.js.org/` : `https://es.redux.js.org/` },
    { id: 2, icon: javascript, title: `Javascript`, url: english ? `https://developer.mozilla.org/en-US/docs/Web/JavaScript` : `https://developer.mozilla.org/es/docs/Web/JavaScript` },
    { id: 3, icon: sequelize, title: `Sequelize`, url: english ? `https://sequelize.org/ ` : `https://translate.google.com/translate?sl=en&tl=es&hl=es&u=https://sequelize.org/` },
    { id: 4, icon: material, title: `Material UI`, url: english ? `https://mui.com/ ` : `https://translate.google.com/translate?sl=en&tl=es&hl=es&u=https://mui.com/` },
    { id: 5, icon: node, title: `Node.js`, url: english ? `https://nodejs.org/en` : `https://nodejs.org/es ` },
  ]

  $(function(){
    array.forEach(e => {
      $(`.titleClass${e.id}`).on("mouseenter", function () {
          $(`.titleClass${e.id}`).css('transition', 'all .2s ease-in-out').css('transform', 'scale(1.1)')
          $(`.iconClass${e.id}`).css('transition', 'all .2s ease-in-out').css('transform', 'scale(1.1)')
      }).on("mouseleave", function () {
        $(`.titleClass${e.id}`).css('transition', 'all .2s ease-in-out').css('transform', 'scale(1)')
        $(`.iconClass${e.id}`).css('transition', 'all .2s ease-in-out').css('transform', 'scale(1)')
      })
      $(`.iconClass${e.id}`).on("mouseenter", function () {
        $(`.iconClass${e.id}`).css('transition', 'all .2s ease-in-out').css('transform', 'scale(1.1)')
        $(`.titleClass${e.id}`).css('transition', 'all .2s ease-in-out').css('transform', 'scale(1.1)')
      }).on("mouseleave", function () {
        $(`.iconClass${e.id}`).css('transition', 'all .2s ease-in-out').css('transform', 'scale(1)')
        $(`.titleClass${e.id}`).css('transition', 'all .2s ease-in-out').css('transform', 'scale(1)')
      })
    })
  })

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
              className={`titleClass${e.id}`}
              sx={s.iconBox({ minPort, minLand, medPort, medLand, larPort })}
              component={Link}
              to={e.url}
              target="_blank"
            >
              <Typography sx={s.title({ darkMode, minPort, minLand, medPort, medLand, larPort })}>{e.title}</Typography>
            </Box>
            <CardMedia
              className={`iconClass${e.id}`}
              component={Link}
              to={e.url}
              target="_blank"
              sx={s.iconMedia({ url:e.icon, minPort, minLand, medPort, medLand, larPort })}
            ></CardMedia>
          </Box>
        )
      })}
    </ScrollContainer>
  )
}

export default Technologies;