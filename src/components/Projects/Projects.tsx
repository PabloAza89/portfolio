import { Box, Typography } from '@mui/material';
import { Dialog, FormControl, MenuItem, Select } from '@mui/material/';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ScrollContainer from 'react-indiana-drag-scroll';
import food1 from '../../images/food1.png';
import food2 from '../../images/food2.png';
import food3 from '../../images/food3.png';
import weatherify1 from '../../images/weatherify1.png';
import weatherify2 from '../../images/weatherify2.png';
import tictac1 from '../../images/tictac1.png';
import tictac2 from '../../images/tictac2.png';
import loadingImage from '../../images/loadingImage.png';
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

  let [ projectChosen, setProjectChosen ] = useState(`All Projects`)

  let preArray = [
    {
      title: `Weatherify`,
      media: [ weatherify1, weatherify2 ],
      href: `https://pabloaza89.github.io/weather-app/`,
      type: `API Handle`
    },
    {
      title: `Foodify`,
      media: [ food1, food2, food3 ],
      href: `https://pabloaza89.github.io/PI-Food-GH/`,
      type: `Server Handle`
    },
    {
      title: `TicTacToe`,
      media: [ tictac1, tictac2 ],
      href: `https://pabloaza89.github.io/tictactoe/`,
      type: `Games`
    }
  ]

  let array =
    projectChosen === `All Projects` ?
    preArray :
    preArray.filter(e => e.type === projectChosen)

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

  // mediaMeasures MED & LAR:
  // total height: 340
  // titleheight: 60
  // image height: 280
  // image width: 550
  // separators width: 14
  // each width: 564 / 6 = 94

  $(`.linkButton`) // make link button shake
    .css(`animationName`,`shakeKF`)
    .css(`animationDuration`,`4s`) // button shake duration
    .css(`animationDelay`,`1.5s`)
    .css(`animationIterationCount`,`infinite`)

  // useEffect(() => { // when hover image, extra pixels helper on right
  //   array.map(e => e.media).flat().forEach(r => {
  //     $(`.extraPXImage${array.map(e => e.media).flat().indexOf(r)}`)
  //     .on( "mouseenter", function(){
  //       $(`.extraPXSolid`)
  //         .css("transition", "all .2s ease-in-out")
  //         .width( minPort || minLand ? `calc((${array.map(e => e.media).flat().length} * 414px) + 3px)` : `calc((${array.map(e => e.media).flat().length} * 564px) + 3px)` )
  //       $(`.extraPXCenterStripe`)
  //         .css("transition", "all .2s ease-in-out")
  //         .width( minPort || minLand ? `calc((${array.map(e => e.media).flat().length} * 414px) + 3px)` : `calc((${array.map(e => e.media).flat().length} * 564px) + 3px)` )
  //     })
  //     .on( "mouseleave", function(){
  //       $(`.extraPXSolid`)
  //         .width( minPort || minLand ? `calc(${array.map(e => e.media).flat().length} * 414px)` : `calc(${array.map(e => e.media).flat().length} * 564px)` )
  //       $(`.extraPXCenterStripe`)
  //         .width( minPort || minLand ? `calc(${array.map(e => e.media).flat().length} * 414px)` : `calc(${array.map(e => e.media).flat().length} * 564px)` )
  //     })
  //     $(`.extraPXSolid`)
  //       .width( minPort || minLand ? `calc(${array.map(e => e.media).flat().length} * 414px)` : `calc(${array.map(e => e.media).flat().length} * 564px)` )
  //     $(`.extraPXCenterStripe`)
  //       .width( minPort || minLand ? `calc(${array.map(e => e.media).flat().length} * 414px)` : `calc(${array.map(e => e.media).flat().length} * 564px)` )
  //   })
  // })

  // const current = () => {
  //   array.map(e => e.media).flat().length
  // }

  const [ current, setCurrent ] = useState(array.map(e => e.media).flat().length)

  useEffect(() => {
    setCurrent(array.map(e => e.media).flat().length)
  },[array])

  // const extraPixelsUpdater = () => {
  //   $(`.extraPXImage${current - 1}`)
  //     .on( "mouseenter", function() {
  //       $(`.extraPXSolid`)
  //         .css("transition", "all .2s ease-in-out")
  //         .width( minPort || minLand ? `calc((${current} * 414px) + 3px)` : `calc((${current} * 564px) + 3px)` )
  //       $(`.extraPXCenterStripe`)
  //         .css("transition", "all .2s ease-in-out")
  //         .width( minPort || minLand ? `calc((${current} * 414px) + 3px)` : `calc((${current} * 564px) + 3px)` )
  //     })
  //     .on( "mouseleave", function() {
  //       $(`.extraPXSolid`)
  //         .width( minPort || minLand ? `calc(${current} * 414px)` : `calc(${current} * 564px)` )
  //       $(`.extraPXCenterStripe`)
  //         .width( minPort || minLand ? `calc(${current} * 414px)` : `calc(${current} * 564px)` )
  //     })
  //     $(`.extraPXSolid`)
  //       .width( minPort || minLand ? `calc(${current} * 414px)` : `calc(${current} * 564px)` )
  //     $(`.extraPXCenterStripe`)
  //       .width( minPort || minLand ? `calc(${current} * 414px)` : `calc(${current} * 564px)` )
  // }

  const [ trigger, setTrigger ] = useState(false)

  useEffect(() => { // when hover image, extra pixels helper on right
    console.log("EJECUTADO UNA SOLA VEZ")
    //$(`.extraPXImage${current - 1}`).unbind("mouseenter");
    //$(`.extraPXImage${current - 1}`).unbind("mouseleave");
    //extraPixelsUpdater()

    let qq = [0,1,2,3,4,5,6]
        qq.forEach((e) => {
          $(`.extraPXImage${e}`).off("mouseenter");
          $(`.extraPXImage${e}`).off("mouseleave");
        })

    $(`.extraPXImage${current - 1}`)
      .on( "mouseenter", function() {
        $(`.extraPXSolid`)
          .css("transition", "all .2s ease-in-out")
          .width( minPort || minLand ? `calc((${current} * 414px) + 3px)` : `calc((${current} * 564px) + 3px)` )
        $(`.extraPXCenterStripe`)
          .css("transition", "all .2s ease-in-out")
          .width( minPort || minLand ? `calc((${current} * 414px) + 3px)` : `calc((${current} * 564px) + 3px)` )
      })
      .on( "mouseleave", function() {
        $(`.extraPXSolid`)
          .width( minPort || minLand ? `calc(${current} * 414px)` : `calc(${current} * 564px)` )
        $(`.extraPXCenterStripe`)
          .width( minPort || minLand ? `calc(${current} * 414px)` : `calc(${current} * 564px)` )
      })
      $(`.extraPXSolid`)
        .width( minPort || minLand ? `calc(${current} * 414px)` : `calc(${current} * 564px)` )
      $(`.extraPXCenterStripe`)
        .width( minPort || minLand ? `calc(${current} * 414px)` : `calc(${current} * 564px)` )
  //},[current])
  //},[current, array])
  //},[trigger])
  }, [array])
  //})

  const [loaded, setLoaded] = useState<any>(
    Array.from(
      { length: preArray.map(t => t.media).flat().length },
      (e, i) => ({
        media: preArray.map(t => t.media).flat()[i],
        loaded: false,
        type: preArray[preArray.findIndex(e => e.media.some(r => r === preArray.map(t => t.media).flat()[i]))].type
      })
    )
  )

  const onChangeUpdater = (type: any) => {
    let cloned = [...loaded]
    let toInitialStatus = cloned.filter(e => e.type !== type).map(e => {
      let copyMedia = e.media;
      let copyType = e.type;
      return { media: copyMedia, loaded: false, type: copyType }
    })
    let keepLoaded = cloned.filter(e => e.type === type)
    setLoaded(toInitialStatus.concat(keepLoaded))
  }

  const loadedUpdater = (media: any) => {
    let cloned = [...loaded]
    let targetIndex = cloned.findIndex(e => e.media === media)
    let copyTypeValue = cloned[targetIndex].type
    cloned[targetIndex] = { media: media, loaded: true, type: copyTypeValue }
    setLoaded(cloned)
  }

  const [ tall, setTall ] = useState(false)

  useEffect(() => {
    let buttonIn = document.getElementById('textContainerID')
    buttonIn && new ResizeObserver(textHeightChecker).observe(buttonIn)
    function textHeightChecker() {
      if (buttonIn?.clientHeight === 72) setTall(true)
      else setTall(false)
    }
  })

  //console.log("ARRAY", array.map(e => e.media).flat()[array.map(e => e.media).flat().length - 1])
  //console.log("ARRAY", array.map(e => e.media).flat().length - 1)
  //console.log("ARRAY", array.map(e => e.media).flat().length )
  console.log("current", current )
  //console.log("ARRAY", array )
  //console.log("LOADED", loaded )

  return (
  <Box sx={s.background}>
    <Select
      size="small"
      sx={s.selectType}
      value={projectChosen}
      onChange={(e: any) => {
        //$(`.extraPXImage${current - 1}`)
        // $(`.extraPXImage${current - 1}`)
        //   .on( "mouseenter", function(){})
        // let qq = [0,1,2,3,4,5,6]
        // qq.forEach((e) => {
        //   $(`.extraPXImage${e}`).off("mouseenter");
        //   $(`.extraPXImage${e}`).off("mouseleave");
        // })
        
        
         
         //setTrigger(!trigger)

        setProjectChosen(e.target.value)
        if (e.target.value !== `All Projects`) onChangeUpdater(e.target.value)

          // $(`.extraPXSolid`)
          //   .width( minPort || minLand ? `calc(${current} * 414px)` : `calc(${current} * 564px)` )
          // $(`.extraPXCenterStripe`)
          //   .width( minPort || minLand ? `calc(${current} * 414px)` : `calc(${current} * 564px)` )

          $(`.extraPXImage${current - 1}`)

        //extraPixelsUpdater()
      }}
    >
      <MenuItem value={"All Projects"}>All Projects</MenuItem>
      <MenuItem value={"API Handle"}>API Handle</MenuItem>
      <MenuItem value={"Server Handle"}>Server Handle</MenuItem>
      <MenuItem value={"Games"}>Games</MenuItem>
    </Select>
    <Box sx={s.topBottomHelper({ larPort, larLand })}></Box>
    <Box sx={s.mainContainer}>
      <ScrollContainer
        innerRef={useHorizontalScroll()}
        style={s.scroll()}
        vertical={false}
      >
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
                    {e.media.map((m,i) => {
                      //console.log("a ver", array.map(e => e.media).flat().indexOf(m))
                      return (
                        <Box key={m} sx={{ display:'flex', flexDirection: 'row', border: '0px solid blue' }}>
                          <Box
                            className={`extraPXImage${array.map(e => e.media).flat().indexOf(m)}`}
                            id={`extraPXImage${array.map(e => e.media).flat().indexOf(m)}`}
                            component="img"
                            onLoad={() => loadedUpdater(m)}
                            alt=""
                            src={m}
                            onClick={() => {setName(m); setShow(!show)}}
                            sx={s.cardMedia({ darkMode, minPort, minLand })}
                          />
                          <Box
                            component="img"
                            sx={s.placeholderBackground({ darkMode, loaded: loaded[loaded.map((e: any) => e.media).indexOf(m)].loaded , minPort, minLand })}
                          />
                          <Box
                            component="img"
                            src={loadingImage}
                            sx={s.placeholderAnimation({ loaded: loaded[loaded.map((e: any) => e.media).indexOf(m)].loaded, minPort, minLand })}
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
        <Box id={`textContainerID`} sx={s.textContainer( larPort )} style={{ marginRight: '40px' }}>
          {
            english ?
            null :
            <Box sx={s.eachText}>
              <Box sx={s.onlyMix}>Velocidad de Rueda</Box>
            </Box>
          }
          {
            english ?
            <Box sx={s.eachText} >
              <Box sx={s.selectContainer({ tall })} style={{ marginRight: 'auto' }}>
                <FormControl>
                  <Select
                    sx={s.select({ darkMode })}
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
              <Box sx={s.onlyMix}>Scroll Wheel Speed:</Box>
            </Box> :
            <Box sx={s.eachText}>
              <Box sx={s.selectContainer({ tall })} style={{ marginRight: 'auto' }}>
                <FormControl>
                  <Select
                    sx={s.select({ darkMode })}
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
              <Box sx={s.onlyMix}>de Desplazamiento:</Box>
            </Box>
          }
        </Box>
      </Box>

    </Box>
    <Box sx={s.topBottomHelper({ larPort, larLand })}></Box>
  </Box>
  )
}

export default Projects;