import { Box, Typography } from '@mui/material';
import { Dialog, FormControl, InputLabel, MenuItem, Select } from '@mui/material/';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ScrollContainer from 'react-indiana-drag-scroll';
import food1 from '../../images/food1.png';
import food2 from '../../images/food2.png';
import food3 from '../../images/food3.png';
import weatherify1 from '../../images/weatherify1.png';
import weatherify2 from '../../images/weatherify2.png';
import * as s from '../../styles/ProjectsSX';
import GoToLinkButton from '../GoToLinkButton/GoToLinkButton';
import $ from 'jquery';
import '../../styles/SkillsSX.css';

function Projects() {

  const darkMode = useSelector( (state: {darkMode:boolean}) => state.darkMode)
  const height = useSelector((state: {height:number}) => state.height)
  const english = useSelector((state: {english:boolean}) => state.english)
  const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
  const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
  const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
  const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
  const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
  const larLand = useSelector((state: {larLand:boolean}) => state.larLand)

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
    });
    return elRef;
  }

  const array = [
    {
      title: english ? `Weather App` : `Aplicación del Clima`,
      media: [ weatherify1, weatherify2 ],
      href: `https://pabloaza89.github.io/weather-app/`
    },
    {
      title: english ? `Food App` : `Aplicación de Comidas`,
      media: [ food1, food2, food3 ],
      href: `https://pabloaza89.github.io/PI-Food-GH/`
    }
  ]

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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let [updateFrequency, setUpdateFrequency] = useState(0)

  useEffect(() => { // helper for button shake animation
    let i:number = 0
      let interval = setInterval(() => {
        if (i < 5) {
          setUpdateFrequency(i)
          i++
        } else {
          return () => clearInterval(interval)
        }
      }, 100);
  },[])

  $(`.linkButton`) // make link button shake
    .css(`animationName`,`shakeKF`)
    .css(`animationDuration`,`4s`) // button shake duration
    .css(`animationDelay`,`1.5s`)
    .css(`animationIterationCount`,`infinite`)

    $(`.extraPXImage`) // when hover image, extra pixels helper on right
    .on( "mouseenter", function(){
      $(`.extraPXSolid`)
        .css("transition", "all .2s ease-in-out")
        .width( minPort || minLand ? `calc((${array.map(e => e.media).flat().length} * 414px) + 3px)` : `calc((${array.map(e => e.media).flat().length} * 564px) + 3px)` )
      $(`.extraPXCenterStripe`)
        .css("transition", "all .2s ease-in-out")
        .width( minPort || minLand ? `calc((${array.map(e => e.media).flat().length} * 414px) + 3px)` : `calc((${array.map(e => e.media).flat().length} * 564px) + 3px)` )
    })
    .on( "mouseleave", function(){
      $(`.extraPXSolid`)
        .width( minPort || minLand ? `calc(${array.map(e => e.media).flat().length} * 414px)` : `calc(${array.map(e => e.media).flat().length} * 564px)` )
      $(`.extraPXCenterStripe`)
        .width( minPort || minLand ? `calc(${array.map(e => e.media).flat().length} * 414px)` : `calc(${array.map(e => e.media).flat().length} * 564px)` )
    })

  return (
  <Box sx={{ display: 'flex', position: 'relative', justifyContent: 'space-between', flexDirection: 'column', background: 'none', height: 'calc(100vh - 12px)' }}>
    {/* <img id="test" src="http://upload.wikimedia.org/wikipedia/commons/4/42/Loading.gif" ></img> */}
    <Box sx={s.topBottomHelper({ larPort, larLand })}></Box>
    <Box sx={s.background}>

      <ScrollContainer innerRef={useHorizontalScroll()} style={s.scroll()}>

        <Box className={`extraPXSolid`} sx={s.solid({ length:array.map(e => e.media).flat().length, minPort, minLand })}></Box>
        <Box sx={s.intercalated({ length:array.map(e => e.media).flat().length, minPort, minLand })}></Box>
        <Box className={`extraPXSolid`} sx={s.solid({ length:array.map(e => e.media).flat().length, minPort, minLand })}></Box>

        <Box className={`extraPXCenterStripe`} sx={s.centerStripe({ length:array.map(e => e.media).flat().length, minPort, minLand })} >
          {array.map((e) => {
            return (
              <Box key={e.title} sx={s.card({ minPort, minLand, larPort })}>
                <Box sx={s.cardLeft}></Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                  <Box sx={s.boxTitle({ minPort, minLand, larPort, darkMode })}>
                    <Typography sx={s.title({ darkMode, minPort, minLand, larPort })}>{e.title}</Typography>
                    <GoToLinkButton link={e.href} />
                  </Box>
                  <Box sx={s.boxMedia}>

                    {e.media.map((m) =>{
                      return (
                        <Box key={m} sx={{ display: 'flex', flexDirection: 'row' }}>
                          <Box
                            className={`extraPXImage`}
                            component="img"
                            src={m}
                            onClick={() => {setName(m); setShow(!show)}}
                            sx={s.cardMedia({ darkMode, minPort, minLand })}
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

        <Box className={`extraPXSolid`} sx={s.solid({ length:array.map(e => e.media).flat().length, minPort, minLand })}></Box>
        <Box sx={s.intercalated({ length:array.map(e => e.media).flat().length, minPort, minLand })}></Box>
        <Box className={`extraPXSolid`} sx={s.solid({ length:array.map(e => e.media).flat().length, minPort, minLand })}></Box>

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

      <Box sx={s.boxLower({ height, minPort, minLand, medLand })}>
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
    <Box sx={s.topBottomHelper({ larPort, larLand })}></Box>
  </Box>
  )
}

export default Projects;