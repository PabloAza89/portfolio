import React, { useEffect } from 'react';
import { Box, CardMedia, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import javascript from '../../images/javascript.png';
import material from '../../images/material.png';
import node from '../../images/node.png';
import react from '../../images/react.png';
import redux from '../../images/redux.png';
import sequelize from '../../images/sequelize.png';
import ScrollContainer from 'react-indiana-drag-scroll';
import { 
  mainBox, iconBox, iconMedia, textBox,
  title, background
} from '../../styles/TechnologiesSX';

function Technologies() {

  const darkMode = useSelector( (state: {darkMode:boolean}) => state.darkMode)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)

  function useHorizontalScroll() {
    const elRef = React.useRef<HTMLInputElement>(null);
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

  return (
    //<ScrollContainer innerRef={useHorizontalScroll()} style={background({ minPort, minLand, medPort, medLand, larPort, larLand })}>
    <ScrollContainer style={background({ minPort, minLand, medPort, medLand, larPort, larLand })}
      innerRef={useHorizontalScroll()}
      //horizontal={true}
    >
      <Box sx={mainBox}>
        {[react,redux,javascript,node,sequelize,material].map((e) => {
          return (
            <Box key={e} sx={iconBox({ minPort, minLand, medPort, medLand, larPort })}>
              <CardMedia component="div" sx={iconMedia({ url:e, minPort, minLand, medPort, medLand, larPort })}></CardMedia>
            </Box>
          )
        })}
      </Box >
      <Box sx={mainBox}>
        {[ `React`, `Redux`, `Javascript`, `Node.js`, `Sequelize`, `Material UI` ].map((e) => {
          return (
            <Box key={e} sx={textBox({ minPort, minLand, medPort, medLand, larPort })}>
              <Typography sx={title({ darkMode, minPort, minLand, medPort, medLand, larPort })}>{e}</Typography>
            </Box>
          )
        })}
      </Box>
    </ScrollContainer>
  )
}

export default Technologies;