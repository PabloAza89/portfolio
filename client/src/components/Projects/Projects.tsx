import { Box, CardMedia, Typography } from '@mui/material';
import { Dialog, FormControl, InputLabel, MenuItem, Select } from '@mui/material/';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ScrollContainer from 'react-indiana-drag-scroll';
import food1 from '../../images/food1.png';
import food2 from '../../images/food2.png';
import food3 from '../../images/food3.png';
import weatherify1 from '../../images/weatherify1.png';
import weatherify2 from '../../images/weatherify2.png';
import {
  background, scroll, boxUpperStripe, solid, intercalated,
  centerStripe, card, boxTitle, title, boxMedia, cardMedia,
  dialog, dialogMedia, boxLower, textLower, select
} from '../../styles/ProjectsSX';
import GoToLinkButton from '../GoToLinkButton/GoToLinkButton';

function Projects() {

  const darkMode = useSelector( (state: {darkMode:boolean}) => state.darkMode)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const height = useSelector((state: {height:number}) => state.height)
  const staticRefWidth = useSelector((state: {staticRefWidth:number}) => state.staticRefWidth)
  const staticRefHeight = useSelector((state: {staticRefHeight:number}) => state.staticRefHeight)
  const english = useSelector((state: {english:boolean}) => state.english)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)
  const percentageResizedHeight = useSelector((state: {percentageResizedHeight:number}) => state.percentageResizedHeight)

  const [show, setShow] = useState<boolean>(false)
  const [name, setName] = useState<string>("")
  const [scrollSpeed, setScrollSpeed] = useState<any>(30)

  function useHorizontalScroll() {
    const elRef = React.useRef<HTMLInputElement>(null);
    useEffect(() => {
      const el:any = elRef.current;
      if (el) {
        const onWheel = (e:any) => {
          if (e.deltaY === 0) return;
          e.preventDefault();
          el.scrollTo({
            left: el.scrollLeft + e.deltaY * scrollSpeed,
            behavior: "smooth"
          });
        };
        el.addEventListener("wheel", onWheel);
        return () => el.removeEventListener("wheel", onWheel);
      }
    }, [scrollSpeed]);
    return elRef;
  }

  const array = [{
      title: english ? `Weather App` : `Aplicación del Clima`,
      media: [ weatherify1, weatherify2 ],
      href: `https://pabloaza89.github.io/weather-app/`
    },
    {
      title: english ? `Food App` : `Aplicación de Comidas`,
      media: [ food1, food2, food3 ],
      href: `https://pabloaza89.github.io/PI-Food-GH/`
    }]



  return (
    <Box sx={background({ minPort, minLand, larPort, staticRefWidth, staticRefHeight, percentageResizedHeight, height })}>
      <ScrollContainer innerRef={useHorizontalScroll()} style={scroll({ minPort, minLand })}>

        <Box sx={solid({ length:array.map(e => e.media).flat().length })}></Box>
        <Box sx={intercalated({ minPort, larPort })}></Box>
        <Box sx={solid({ length:array.map(e => e.media).flat().length })}></Box>

        <Box sx={centerStripe} >

          {array.map((e) => {
            return (

              <Box key={e.title} sx={card({ darkMode, minPort, minLand, larPort })}>
                <Box sx={{ background: 'blue', width: '20px', height: '2px' }}></Box>
                <Box sx={boxTitle({ minPort, minLand, larPort })}>

                  <Typography sx={title({ darkMode, minPort, minLand, larPort })}>{e.title}</Typography>
                  <GoToLinkButton link={e.href}/>
                </Box>
                <Box sx={boxMedia({ length:e.media.length, darkMode, minPort, minLand, larPort })}>
                  {e.media.map((m) =>{
                    return <Box key={m} src={m} component="img" onClick={() => {setName(m); setShow(!show)}} sx={cardMedia({ url:m, darkMode, minPort, minLand, larPort })}></Box>
                  })}
                </Box>
              </Box>

        )})}
        </Box>

        <Box sx={solid({ length:array.map(e => e.media).flat().length })}></Box>
        <Box sx={intercalated({ minPort, larPort })}></Box>
        <Box sx={solid({ length:array.map(e => e.media).flat().length })}></Box>

      </ScrollContainer>

      <Dialog
        sx={dialog( minPort )}
        open={minLand || larPort || larLand ? show : false}
        onClick={() => {setShow(false)}}
        fullWidth={true}
        fullScreen={true}
      >
        <CardMedia component="div" sx={dialogMedia({ name, minPort, larPort })}></CardMedia>
      </Dialog>

      <Box sx={boxLower({ minPort, minLand, larPort, larLand })}>
        <Typography sx={textLower( larPort )}>{ english ? `Scroll Wheel Speed:  ` : `Velocidad de Rueda de Desplazamiento:  ` }</Typography>
        <FormControl>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select
            sx={select({ darkMode, larPort })}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={scrollSpeed}
            label="Scroll"
            onChange={(e) => setScrollSpeed(parseInt(e.target.value))}
          >
            <MenuItem value={10}>1x</MenuItem>
            <MenuItem value={30}>2x</MenuItem>
            <MenuItem value={50}>3x</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  )
}

export default Projects;
