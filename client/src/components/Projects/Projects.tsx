import React, { useState, useEffect} from 'react';
import { Box, CardMedia, Typography } from '@mui/material';
import weatherify1 from '../../images/weatherify1.png';
import weatherify2 from '../../images/weatherify2.png';
import food1 from '../../images/food1.png';
import food2 from '../../images/food2.png';
import food3 from '../../images/food3.png';
import { Dialog, InputLabel, MenuItem, FormControl, Select } from '@mui/material/';
import ScrollContainer from 'react-indiana-drag-scroll';
import { useSelector } from 'react-redux';
import BackButton from '../BackButton/BackButton';
import GoToLinkButton from '../GoToLinkButton/GoToLinkButton';
import ProjectsSX from '../../styles/ProjectsSX';
import {
 
  bgRed, flex, column, row, bgNone
} from '../../styles/CommonsSX';

function Projects() {

  const english = useSelector((state: {english:boolean}) => state.english)
  const width = useSelector((state: {width: number}) => state.width)
  const height = useSelector((state: {height: number}) => state.height)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)
  const staticRefWidth = useSelector((state: {staticRefWidth:number}) => state.staticRefWidth)
  const staticRefHeight = useSelector((state: {staticRefHeight:number}) => state.staticRefHeight)
  const maxStaticReference = useSelector((state: {maxStaticReference: number}) => state.maxStaticReference)
  const currentWidth = useSelector((state: {currentWidth:number}) => state.currentWidth)
  const currentHeight = useSelector((state: {currentHeight:number}) => state.currentHeight)
  const percentageResizedHeight = useSelector((state: {percentageResizedHeight:number}) => state.percentageResizedHeight)
  const percentageResizedWidth = useSelector((state: {percentageResizedWidth:number}) => state.percentageResizedWidth)


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

  return (
    <Box sx={ProjectsSX().background}>
      <BackButton />
      <ScrollContainer innerRef={useHorizontalScroll()} style={ProjectsSX().scroll()}>
        <Box sx={ProjectsSX().boxUpperStripe}>
          <Box sx={ProjectsSX().solid}></Box>
          <Box sx={ProjectsSX().intercalated}></Box>
          <Box sx={ProjectsSX().solid}></Box>
        </Box>
        <Box sx={ProjectsSX().mainStripe} >
          {[{
            title: english ? `Weather App` : `Aplicación del Clima`,
            media: [ weatherify1, weatherify2 ],
            href: `https://pabloaza89.github.io/weather-app/`
          },
          {
            title: english ? `Food App` : `Aplicación de Comidas`,
            media: [ food1, food2, food3 ],
            href: `https://pabloaza89.github.io/PI-Food-GH/`
          }].map((e) => {
            return (
          <Box sx={ProjectsSX().card}>
            <Box sx={ProjectsSX().boxTitle}>
              <Typography sx={ProjectsSX().title}>{e.title}</Typography>
              <GoToLinkButton link={e.href}/>
            </Box>
            <Box sx={ProjectsSX().boxMedia(e.media.length)}>
              {e.media.map((m) =>{
                return <CardMedia onClick={() => {setName(m); setShow(!show)}} sx={ProjectsSX().cardMedia(m)}></CardMedia>
              })}
            </Box>
          </Box>)
        })}
        </Box>
        <Box sx={ProjectsSX().boxUpperStripe}>
          <Box sx={ProjectsSX().solid}></Box>
          <Box sx={ProjectsSX().intercalated}></Box>
          <Box sx={ProjectsSX().solid}></Box>
        </Box>
      </ScrollContainer>

      <Dialog
        sx={ProjectsSX().dialog}
        open={minLand || larPort || larLand ? show : false}
        onClick={() => {setShow(false)}}
        fullWidth={true}
        fullScreen={true}
      >
        <CardMedia sx={ProjectsSX().dialogMedia(name)}></CardMedia>
      </Dialog>

      <Box sx={ProjectsSX().boxLower}>
        <Typography sx={ProjectsSX().textLower}>{ english ? `Scroll Wheel Speed:  ` : `Velocidad de Rueda de Desplazamiento:  ` }</Typography>
        <FormControl>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select
            sx={ProjectsSX().select}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={scrollSpeed}
            label="Scroll"
            onChange={(e) => setScrollSpeed(parseInt(e.target.value))}
          >
            <MenuItem value={10} >1x</MenuItem>
            <MenuItem value={30} >2x</MenuItem>
            <MenuItem value={50} >3x</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  )
}

export default Projects;
