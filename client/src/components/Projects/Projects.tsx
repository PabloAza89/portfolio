import React, { useState , useRef, useEffect, WheelEvent} from 'react';
import {Box, Button,CardMedia, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import weatherify1 from '../../images/weatherify1.png';
import weatherify2 from '../../images/weatherify2.png';
import food1 from '../../images/food1.png';
import food2 from '../../images/food2.png';
import food3 from '../../images/food3.png';
import ForwardIcon from '@mui/icons-material/Forward';
import Dialog from '@mui/material/Dialog';
import ReplyIcon from '@mui/icons-material/Reply';
import { grey , blue , cyan, lime, brown, red} from '@mui/material/colors';
import { jc , as, noSelect, prtr, wi, he, or}from '../../styles/styles'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ScrollContainer from 'react-indiana-drag-scroll';
import { useSelector } from 'react-redux';
import BackButton from '../BackButton/BackButton';
import GoToLinkButton from '../GoToLinkButton/GoToLinkButton';
import DialogContent from '@mui/material/DialogContent';
import { background, scroll, boxUpperStripe, solid, intercalated, mainStripe, card, boxTitle,
  title, boxMedia, cardMedia, dialog, dialogMedia, boxLower, textLower, select
} from '../../styles/projects';
import {
  minPort, minLand, medPort, medLand, larPort, larLand,
  currentHeight, bgRed, staticRefWidth, staticRefHeight,
  maxStaticReference, flex, column, row, bgNone
} from '../../styles/commons';

function Projects() {

  const english = useSelector((state: {english:boolean}) => state.english)
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
    <Box sx={background}>
      <BackButton />
      <ScrollContainer innerRef={useHorizontalScroll()} style={scroll}>
        <Box sx={boxUpperStripe}>
          <Box sx={solid}></Box>
          <Box sx={intercalated}></Box>
          <Box sx={solid}></Box>
        </Box>
        <Box sx={mainStripe} >
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
          <Box sx={card}>
            <Box sx={boxTitle}>
              <Typography sx={title}>{e.title}</Typography>
              <GoToLinkButton link={e.href}/>
            </Box>
            <Box sx={boxMedia(e.media.length)}>
              {e.media.map((m) =>{
                return <CardMedia onClick={() => {setName(m); setShow(!show)}} sx={cardMedia(m)}></CardMedia>
              })}
            </Box>
          </Box>)
        })}
        </Box>
        <Box sx={boxUpperStripe}>
          <Box sx={solid}></Box>
          <Box sx={intercalated}></Box>
          <Box sx={solid}></Box>
        </Box>
      </ScrollContainer>

      <Dialog
        sx={dialog}
        open={minLand || larPort || larLand ? show : false}
        onClick={() => {setShow(false)}}
        fullWidth={true}
        fullScreen={true}
      >
        <CardMedia sx={dialogMedia(name)}></CardMedia>
      </Dialog>

      <Box sx={boxLower}>
        <Typography sx={textLower}>{ english ? `Scroll Wheel Speed:  ` : `Velocidad de Rueda de Desplazamiento:  ` }</Typography>
        <FormControl>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select
            sx={select}
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
