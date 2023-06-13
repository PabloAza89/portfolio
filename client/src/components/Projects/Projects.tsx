import { Box, CardMedia, Typography } from '@mui/material';
import { Dialog, FormControl, InputLabel, MenuItem, Select, Paper } from '@mui/material/';
import { grey } from '@mui/material/colors';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ScrollContainer from 'react-indiana-drag-scroll';
import food1 from '../../images/food1.png';
import food2 from '../../images/food2.png';
import food3 from '../../images/food3.png';
import weatherify1 from '../../images/weatherify1.png';
import weatherify2 from '../../images/weatherify2.png';
import DialogContent from '@mui/material/DialogContent';
import * as s from '../../styles/ProjectsSX';
import GoToLinkButton from '../GoToLinkButton/GoToLinkButton';

function Projects() {

  const darkMode = useSelector( (state: {darkMode:boolean}) => state.darkMode)

  const height = useSelector((state: {height:number}) => state.height)
  const staticRefWidth = useSelector((state: {staticRefWidth:number}) => state.staticRefWidth)
  const staticRefHeight = useSelector((state: {staticRefHeight:number}) => state.staticRefHeight)
  const english = useSelector((state: {english:boolean}) => state.english)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
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

// mediaMeasures MIN PORT:
// total height: 270
// titleheight: 50 **
// image height: 220 **
// image width: 400
// separators width: 14
// each width: 414 / 6 = 69

// mediaMeasures MIN LAND:
// total height: 220
// titleheight: 35
// image height: 160
// image width: 400
// separators width: 14
// each width: 414 / 6 = 69

// mediaMeasures LAR:
// total height: 340
// titleheight: 60
// image height: 280
// image width: 550
// separators width: 14
// each width: 564 / 6 = 94

  return (
  <Box sx={{ display: 'flex', position: 'relative', justifyContent: 'space-between', flexDirection: 'column', background: 'none', height: 'calc(100vh - 12px)' }}>
    <Box sx={s.topBottomHelper({ height, minPort, minLand, medPort, medLand, larPort, larLand })}></Box>
    <Box sx={s.background({ minPort, minLand, larPort, staticRefWidth, staticRefHeight, percentageResizedHeight, height })}>

      <ScrollContainer innerRef={useHorizontalScroll()} style={s.scroll()}>

        <Box sx={s.solid({ length:array.map(e => e.media).flat().length, minPort, minLand, medPort, medLand, larPort, larLand })}></Box>
        <Box sx={s.intercalated({ length:array.map(e => e.media).flat().length, minPort, minLand, medPort, medLand, larPort, larLand })}></Box>
        <Box sx={s.solid({ length:array.map(e => e.media).flat().length, minPort, minLand, medPort, medLand, larPort, larLand })}></Box>

        <Box sx={s.centerStripe({ minPort, minLand, medPort, medLand, larPort, larLand })} >
          {array.map((e) => {
            return (
              <Box key={e.title} sx={s.card({ darkMode, minPort, minLand, larPort })}>
                <Box sx={s.cardLeft}></Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                  <Box sx={s.boxTitle({ length:e.media.length, minPort, minLand, larPort, darkMode })}>
                    <Typography sx={s.title({ darkMode, minPort, minLand, larPort })}>{e.title}</Typography>
                    <GoToLinkButton link={e.href} />
                  </Box>
                  <Box sx={s.boxMedia({ length:e.media.length, darkMode, minPort, minLand, larPort })}>

                    {e.media.map((m) =>{
                      return (
                        <Box key={m} sx={{ display: 'flex', flexDirection: 'row' }}>
                          <Box 
                            src={m} component="img"
                            onClick={() => {setName(m); setShow(!show)}}
                            sx={s.cardMedia({ url:m, darkMode, minPort, minLand, larPort })}
                          />
                          <Box
                            sx={s.betweenMedia({ darkMode, indexOf:e.media.indexOf(m), length:e.media.length-1 })}
                          />
                        </Box>
                      )
                    })}

                  </Box>
                </Box>
              </Box>
          )})}
        </Box>

        <Box sx={s.solid({ length:array.map(e => e.media).flat().length, minPort, minLand, medPort, medLand, larPort, larLand })}></Box>
        <Box sx={s.intercalated({ length:array.map(e => e.media).flat().length, minPort, minLand, medPort, medLand, larPort, larLand })}></Box>
        <Box sx={s.solid({ length:array.map(e => e.media).flat().length, minPort, minLand, medPort, medLand, larPort, larLand })}></Box>

      </ScrollContainer>

      <Dialog
        open={show}
        onClick={() => {setShow(false)}}
        style={s.dialogStyle()}
        PaperProps={{sx: s.dialogPaper({ minPort, minLand, medPort, medLand, larPort })}}
      >
        <Box
          component="img"
          sx={s.dialogBox({ minPort, minLand, medPort, medLand, larPort })}
          src={name}
          alt="image"
        />
      </Dialog>

      <Box sx={s.boxLower({ height, minPort, minLand, medLand, larPort, larLand })}>
        <Typography sx={s.textLower( larPort )}>{ english ? `Scroll Wheel Speed:  ` : `Velocidad de Rueda de Desplazamiento:  ` }</Typography>
        <FormControl>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select
            sx={s.select({ darkMode, larPort })}
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
    <Box sx={s.topBottomHelper({ height, minPort, minLand, medPort, medLand, larPort, larLand })}></Box>
  </Box>
  )
}

export default Projects;
